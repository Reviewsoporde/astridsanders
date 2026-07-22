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
    mobilePosition?: string;
  };
  ctaLabel?: string;
  secondaryCtaLabel?: string;
  locale?: Locale;
};

export function PageHero({
  title,
  paragraphs,
  image,
  ctaLabel = "Gratis gezondheidscheck aanvragen",
  secondaryCtaLabel,
  locale = "nl",
}: PageHeroProps) {
  const [lead, ...details] = paragraphs;

  return (
    <section className="hero hero--sub" aria-labelledby="hero-title">
      <div className="shell hero__grid">
        <Reveal className="hero__copy">
          <h1 id="hero-title">{title}</h1>
          {typeof lead === "string" ? <p className="hero__lead">{lead}</p> : null}
          <div className="hero__actions">
            <Link className="button" href="#gezondheidscheck">
              {translateText(ctaLabel, locale)}
            </Link>
            {secondaryCtaLabel ? (
              <Link className="button button--secondary" href="#gezondheidscheck">
                {translateText(secondaryCtaLabel, locale)}
              </Link>
            ) : (
              <WhatsAppLink locale={locale} />
            )}
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
                image.mobilePosition
                  ? ({
                      "--hero-object-position-mobile": image.mobilePosition,
                    } as CSSProperties)
                  : undefined
              }
            />
          </div>
        </Reveal>
      </div>

      {details.length ? (
        <div className="shell hero__context hero__context--sub">
          {details.map((detail) =>
            Array.isArray(detail) ? (
              <ul className="hero__context-list" key={detail.join("|")}>
                {detail.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={detail}>{detail}</p>
            ),
          )}
        </div>
      ) : null}
    </section>
  );
}
