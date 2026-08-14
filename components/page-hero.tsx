import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/reveal";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { translateText, type Locale } from "@/lib/i18n";

type PageHeroProps = {
  title: string;
  paragraphs: Array<string | string[]>;
  image: {
    src: string;
    alt: string;
    position?: string;
    mobilePosition?: string;
  };
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  showWhatsApp?: boolean;
  locale?: Locale;
};

type DetailEntry =
  | { kind: "text"; text: string }
  | { kind: "topics"; label?: string; items: string[] };

// A paragraph ending in ":" directly before a topic list reads as its label
// (e.g. "...rondom:" followed by ["Voeding", "Beweging", ...]) — pair them
// into one unit instead of letting the grid split them apart.
function groupDetails(details: Array<string | string[]>): DetailEntry[] {
  const entries: DetailEntry[] = [];

  for (const detail of details) {
    if (!Array.isArray(detail)) {
      entries.push({ kind: "text", text: detail });
      continue;
    }

    const previous = entries[entries.length - 1];
    if (previous?.kind === "text" && previous.text.trim().endsWith(":")) {
      entries[entries.length - 1] = { kind: "topics", label: previous.text, items: detail };
    } else {
      entries.push({ kind: "topics", items: detail });
    }
  }

  return entries;
}

export function PageHero({
  title,
  paragraphs,
  image,
  ctaLabel = "Gratis gezondheidscheck aanvragen",
  ctaHref = "#gezondheidscheck",
  secondaryCtaLabel,
  showWhatsApp = true,
  locale = "nl",
}: PageHeroProps) {
  const [lead, ...details] = paragraphs;
  const detailEntries = groupDetails(details);
  const isGezondheidscheckCta = ctaLabel.includes("Gratis gezondheidscheck");

  return (
    <section className="hero hero--sub" aria-labelledby="hero-title">
      <div className="shell hero__grid">
        <Reveal className="hero__copy">
          <h1 id="hero-title">{title}</h1>
          {typeof lead === "string" ? <p className="hero__lead">{lead}</p> : null}
          <div className="hero__actions">
            <Link
              className={`button button--solid${isGezondheidscheckCta ? " button--gezondheidscheck" : ""}`}
              href={ctaHref}
            >
              {translateText(ctaLabel, locale)}
            </Link>
            {secondaryCtaLabel ? (
              <Link className="button button--secondary" href="#gezondheidscheck">
                {translateText(secondaryCtaLabel, locale)}
              </Link>
            ) : showWhatsApp ? (
              <WhatsAppLink locale={locale} />
            ) : null}
          </div>
        </Reveal>

        <Reveal className="hero__visual-wrap" delay={0.08}>
          <div className="hero__visual">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, (max-width: 1428px) calc(100vw - 48px), 1380px"
              style={
                image.position || image.mobilePosition
                  ? ({
                      ...(image.position && {
                        "--hero-object-position": image.position,
                      }),
                      ...(image.mobilePosition && {
                        "--hero-object-position-mobile": image.mobilePosition,
                      }),
                    } as CSSProperties)
                  : undefined
              }
            />
          </div>
        </Reveal>
      </div>

      {detailEntries.length ? (
        <div className="shell hero__context hero__context--sub">
          {detailEntries.map((entry, index) =>
            entry.kind === "topics" ? (
              <div className="hero__topics" key={`topics-${index}`}>
                {entry.label ? <p className="hero__topics-label">{entry.label}</p> : null}
                <ul className="hero__topics-list">
                  {entry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p key={entry.text}>{entry.text}</p>
            ),
          )}
        </div>
      ) : null}
    </section>
  );
}
