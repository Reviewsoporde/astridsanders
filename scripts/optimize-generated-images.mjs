import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imageDirectory = path.join(process.cwd(), "public", "images", "generated");
const sourceFiles = (await fs.readdir(imageDirectory)).filter((file) => file.endsWith(".png"));

await Promise.all(
  sourceFiles.map(async (file) => {
    const sourcePath = path.join(imageDirectory, file);
    const outputPath = path.join(imageDirectory, file.replace(/\.png$/, ".webp"));

    await sharp(sourcePath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 86, smartSubsample: true })
      .toFile(outputPath);
  }),
);

console.log(`Optimized ${sourceFiles.length} generated images.`);
