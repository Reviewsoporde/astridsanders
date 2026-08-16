/**
 * Builds the production logo assets from the client-supplied master artwork.
 *
 * The master is a flattened JPEG on a white field, so the background has to be
 * keyed out rather than simply dropped. The lockup uses exactly two inks, which
 * lets us solve the compositing equation per pixel instead of guessing an alpha
 * from luminance (that would punch holes in the mid-tone sage green):
 *
 *   P = a * C + (1 - a) * white
 *
 * For each pixel we least-squares fit `a` against both inks, keep whichever ink
 * explains the pixel better, and write that ink's exact value back out. The
 * result is clean two-colour artwork with anti-aliasing preserved as alpha and
 * JPEG noise discarded.
 *
 * Usage: node scripts/build-brand-assets.mjs [sourceJpeg]
 */

import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(scriptDir, "..");
const brandDir = path.join(repoRoot, "public", "brand");

const SOURCE =
  process.argv[2] ?? path.join(repoRoot, "brand-source", "astridsanders_logo.jpg");

/** The two brand inks, sampled from solid interiors of the master artwork. */
const INKS = {
  sage: [115, 132, 114],
  graphite: [102, 104, 101],
};

/** Below this coverage a pixel is JPEG noise in the white field, not artwork. */
const ALPHA_FLOOR = 0.015;
/** Above this coverage a pixel is solid ink; snap it so fills stay opaque. */
const ALPHA_CEILING = 0.985;

/**
 * Keys the white background out of an RGB region and returns straight-alpha
 * RGBA, with every pixel snapped to one of the two brand inks.
 */
function keyWhiteBackground(data, width, height, channels) {
  const rgba = Buffer.alloc(width * height * 4);
  const candidates = Object.values(INKS).map((ink) => {
    const k = ink.map((c) => 255 - c);
    return { ink, k, kk: k[0] * k[0] + k[1] * k[1] + k[2] * k[2] };
  });

  for (let i = 0; i < width * height; i++) {
    const src = i * channels;
    const d0 = 255 - data[src];
    const d1 = 255 - data[src + 1];
    const d2 = 255 - data[src + 2];

    let best = null;
    for (const cand of candidates) {
      const [k0, k1, k2] = cand.k;
      let a = (d0 * k0 + d1 * k1 + d2 * k2) / cand.kk;
      a = Math.min(1, Math.max(0, a));
      const r0 = d0 - a * k0;
      const r1 = d1 - a * k1;
      const r2 = d2 - a * k2;
      const residual = r0 * r0 + r1 * r1 + r2 * r2;
      if (!best || residual < best.residual) best = { residual, a, ink: cand.ink };
    }

    let alpha = best.a;
    if (alpha < ALPHA_FLOOR) alpha = 0;
    else if (alpha > ALPHA_CEILING) alpha = 1;

    const dst = i * 4;
    rgba[dst] = best.ink[0];
    rgba[dst + 1] = best.ink[1];
    rgba[dst + 2] = best.ink[2];
    rgba[dst + 3] = Math.round(alpha * 255);
  }

  return rgba;
}

/** Tight bounding box of everything with meaningful coverage. */
function alphaBounds(rgba, width, height, minAlpha = 8) {
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (rgba[(y * width + x) * 4 + 3] >= minAlpha) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) throw new Error("No artwork found in the source image.");
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

/** Column runs of covered pixels, used to split the lockup into its parts. */
function columnRuns(rgba, width, height, minAlpha = 8) {
  const runs = [];
  let start = -1;
  for (let x = 0; x <= width; x++) {
    let covered = false;
    if (x < width) {
      for (let y = 0; y < height; y++) {
        if (rgba[(y * width + x) * 4 + 3] >= minAlpha) {
          covered = true;
          break;
        }
      }
    }
    if (covered && start < 0) start = x;
    if (!covered && start >= 0) {
      runs.push([start, x - 1]);
      start = -1;
    }
  }
  return runs;
}

function crop(rgba, width, box) {
  const out = Buffer.alloc(box.width * box.height * 4);
  for (let y = 0; y < box.height; y++) {
    const from = ((box.top + y) * width + box.left) * 4;
    rgba.copy(out, y * box.width * 4, from, from + box.width * 4);
  }
  return out;
}

const master = sharp(SOURCE);
const meta = await master.metadata();
console.log(`source: ${path.basename(SOURCE)} ${meta.width}x${meta.height}`);

const { data, info } = await master.raw().toBuffer({ resolveWithObject: true });
const keyed = keyWhiteBackground(data, info.width, info.height, info.channels);

const lockup = alphaBounds(keyed, info.width, info.height);
console.log(
  `lockup bounds: ${lockup.width}x${lockup.height} at ${lockup.left},${lockup.top} ` +
    `(${(lockup.width / lockup.height).toFixed(3)}:1)`
);

const lockupRgba = crop(keyed, info.width, lockup);
const raw = { width: lockup.width, height: lockup.height, channels: 4 };

// --- Primary lockup: full colour, for light surfaces (site header). ---
const PRIMARY_WIDTH = 1600;
const primaryHeight = Math.round((PRIMARY_WIDTH * lockup.height) / lockup.width);
await sharp(lockupRgba, { raw })
  .resize(PRIMARY_WIDTH, primaryHeight, { fit: "fill" })
  .png({ compressionLevel: 9, palette: true })
  .toFile(path.join(brandDir, "astrid-sanders-logo-primary.png"));
console.log(`astrid-sanders-logo-primary.png: ${PRIMARY_WIDTH}x${primaryHeight}`);

// --- Reversed lockup: solid white, for the dark footer. ---
const reversedRgba = Buffer.from(lockupRgba);
for (let i = 0; i < reversedRgba.length; i += 4) {
  reversedRgba[i] = 255;
  reversedRgba[i + 1] = 255;
  reversedRgba[i + 2] = 255;
}
await sharp(reversedRgba, { raw })
  .resize(PRIMARY_WIDTH, primaryHeight, { fit: "fill" })
  .png({ compressionLevel: 9, palette: true })
  .toFile(path.join(brandDir, "astrid-sanders-logo-reversed.png"));
console.log(`astrid-sanders-logo-reversed.png: ${PRIMARY_WIDTH}x${primaryHeight}`);

// --- Monogram: the mark alone, squared up for favicons and structured data. ---
// The lockup reads as [mark] [divider] [wordmark]; the mark is the first run,
// and the divider is the narrow run that follows it.
const runs = columnRuns(lockupRgba, lockup.width, lockup.height);
if (runs.length < 2) throw new Error("Could not separate the mark from the wordmark.");
const [markStart, markEnd] = runs[0];
const markBox = alphaBounds(
  crop(lockupRgba, lockup.width, {
    left: markStart,
    top: 0,
    width: markEnd - markStart + 1,
    height: lockup.height,
  }),
  markEnd - markStart + 1,
  lockup.height
);
const markRgba = crop(lockupRgba, lockup.width, {
  left: markStart + markBox.left,
  top: markBox.top,
  width: markBox.width,
  height: markBox.height,
});
console.log(`mark bounds: ${markBox.width}x${markBox.height}`);

const MONOGRAM_SIZE = 512;
const MONOGRAM_PADDING = 0.04; // Keeps the mark off the favicon's edge.
const monogramInner = Math.round(MONOGRAM_SIZE * (1 - 2 * MONOGRAM_PADDING));
await sharp(markRgba, { raw: { width: markBox.width, height: markBox.height, channels: 4 } })
  .resize(monogramInner, monogramInner, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .extend({
    top: Math.round((MONOGRAM_SIZE - monogramInner) / 2),
    bottom: MONOGRAM_SIZE - monogramInner - Math.round((MONOGRAM_SIZE - monogramInner) / 2),
    left: Math.round((MONOGRAM_SIZE - monogramInner) / 2),
    right: MONOGRAM_SIZE - monogramInner - Math.round((MONOGRAM_SIZE - monogramInner) / 2),
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9, palette: true })
  .toFile(path.join(brandDir, "astrid-sanders-monogram-primary.png"));
console.log(`astrid-sanders-monogram-primary.png: ${MONOGRAM_SIZE}x${MONOGRAM_SIZE}`);

console.log(
  `\nlockup aspect ratio for CSS/markup: ${(lockup.width / lockup.height).toFixed(4)} ` +
    `(${PRIMARY_WIDTH}x${primaryHeight})`
);
