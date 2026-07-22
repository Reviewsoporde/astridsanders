import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { localizeReactNode, type Locale } from "@/lib/i18n";

const pricing = [
  {
    title: "Gratis gezondheidscheck",
    description:
      "Een kort telefonisch gesprek waarin we jouw situatie bespreken en bekijken welke vervolgstap passend kan zijn.",
    price: "Gratis",
    ctaLabel: "Vraag de check aan",
    guidedCtaLabel: "Vraag de check aan",
  },
  {
    title: "Intake",
    description:
      "Een uitgebreide intake waarin we jouw gezondheid, leefstijl, dagelijkse gewoonten en doelen in kaart brengen.",
    price: "€99",
    ctaLabel: "Plan een intake",
    guidedCtaLabel: "Bespreek de intake",
  },
  {
    title: "Los coachingsgesprek",
    description:
      "Persoonlijke leefstijlcoaching afgestemd op jouw situatie, doelen en voortgang.",
    price: "€125 per uur",
    ctaLabel: "Bespreek een gesprek",
    guidedCtaLabel: "Bespreek een gesprek",
  },
  {
    title: "12-weken coachingstraject",
    description:
      "Zes persoonlijke coachingssessies verspreid over twaalf weken, gericht op het opbouwen en volhouden van gezondere gewoonten.",
    price: "€750",
    featured: true,
    ctaLabel: "Bekijk het traject",
    guidedCtaLabel: "Bespreek het traject",
  },
];

type PricingSectionProps = {
  locale?: Locale;
  variant?: "compact" | "guided";
};

export function PricingSection({ locale = "nl", variant = "compact" }: PricingSectionProps) {
  const isGuided = variant === "guided";
  const content = (
    <section
      className={`section pricing-section ${isGuided ? "pricing-section--guided" : ""}`.trim()}
      aria-labelledby="pricing-title"
    >
      <div className="shell">
        <Reveal className="section-heading section-heading--narrow">
          <h2 id="pricing-title">Tarieven</h2>
        </Reveal>

        <div className="pricing-grid">
          {pricing.map((plan, index) => (
            <Reveal
              key={plan.title}
              className={`price-card ${index === 0 && isGuided ? "price-card--entry" : ""} ${plan.featured ? "price-card--featured" : ""}`.trim()}
              delay={index * 0.04}
            >
              <div className="price-card__topline">
                {plan.featured ? (
                  <p className="price-card__label">
                    {isGuided ? "Meest gekozen" : "12 weken begeleiding"}
                  </p>
                ) : null}
              </div>
              <h3>{plan.title}</h3>
              {isGuided ? <p className="price-card__price">{plan.price}</p> : null}
              <p className="price-card__description">{plan.description}</p>
              {!isGuided ? <p className="price-card__price">{plan.price}</p> : null}
              <Link
                className="button"
                href={`/${locale === "en" ? "en/" : ""}gratis-gezondheidscheck/?interesse=${encodeURIComponent(plan.title)}`}
              >
                {isGuided ? plan.guidedCtaLabel : plan.ctaLabel}
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="pricing-note">
          Een langer vervolgtraject kan worden besproken wanneer na twaalf weken aanvullende
          begeleiding nodig is.
        </p>
      </div>
    </section>
  );

  return localizeReactNode(content, locale);
}
