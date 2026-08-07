import { Check } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { localizeReactNode, type Locale } from "@/lib/i18n";

type Plan = {
  title: string;
  kicker: string;
  description: string;
  price: string;
  pricePrefix?: string;
  priceUnit?: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
};

const pricing: Plan[] = [
  {
    title: "Gratis gezondheidscheck",
    kicker: "Eerste stap",
    description:
      "Een kort telefonisch gesprek waarin we jouw situatie bespreken en bekijken welke vervolgstap passend kan zijn.",
    price: "Gratis",
    features: [
      "Telefonisch en vrijblijvend",
      "Ruimte voor jouw situatie",
      "Persoonlijk advies over een passende vervolgstap",
    ],
    ctaLabel: "Vraag de check aan",
  },
  {
    title: "Intake",
    kicker: "Verdieping",
    description:
      "Een uitgebreide intake waarin we jouw gezondheid, leefstijl, dagelijkse gewoonten en doelen in kaart brengen.",
    price: "€99",
    features: [
      "Uitgebreide startanalyse",
      "Doelen en gewoonten in kaart",
      "Heldere richting voor je begeleiding",
    ],
    ctaLabel: "Plan een intake",
  },
  {
    title: "Los coachingsgesprek",
    kicker: "Flexibel",
    description:
      "Persoonlijke leefstijlcoaching afgestemd op jouw situatie, doelen en voortgang.",
    price: "€125",
    priceUnit: "per uur",
    features: [
      "Een concrete coachingsvraag",
      "Voeding, stress, slaap of beweging",
      "Praktische acties voor thuis",
    ],
    ctaLabel: "Bespreek een gesprek",
  },
  {
    title: "12-weken coachingstraject",
    kicker: "Traject",
    description:
      "Zes persoonlijke coachingssessies verspreid over twaalf weken, gericht op het opbouwen en volhouden van gezondere gewoonten.",
    price: "€499",
    pricePrefix: "vanaf",
    features: [
      "Zes persoonlijke sessies",
      "Rustig opbouwen over twaalf weken",
      "Ondersteuning bij volhouden en bijsturen",
    ],
    ctaLabel: "Bekijk het traject",
    featured: true,
  },
];

type PricingSectionProps = {
  locale?: Locale;
  /**
   * The SEO doc gives the health-check card a slightly longer description on the
   * home page than on the sub-pages. Everything else is identical, so that single
   * line is the only per-page override.
   */
  checkDescription?: string;
};

export function PricingSection({ locale = "nl", checkDescription }: PricingSectionProps) {
  const plans = checkDescription
    ? pricing.map((plan, index) => (index === 0 ? { ...plan, description: checkDescription } : plan))
    : pricing;

  const content = (
    <section className="section pricing-section" aria-labelledby="pricing-title">
      <div className="shell">
        <Reveal className="section-heading section-heading--narrow">
          <h2 id="pricing-title">Tarieven</h2>
          <p>
            Begin laagdrempelig met de gratis gezondheidscheck. Daarna kies je pas welke vorm van
            begeleiding past bij jouw situatie en tempo.
          </p>
        </Reveal>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.title}
              className={`price-card ${plan.featured ? "price-card--featured" : ""}`.trim()}
              delay={index * 0.04}
            >
              <div className="price-card__topline">
                <p className="price-card__kicker">{plan.kicker}</p>
                {plan.featured ? <p className="price-card__label">Meest gekozen</p> : null}
              </div>
              <h3>{plan.title}</h3>
              <p className="price-card__description">{plan.description}</p>
              <p className="price-card__price">
                {plan.pricePrefix ? (
                  <span className="price-card__price-prefix">{plan.pricePrefix}</span>
                ) : null}
                <span>{plan.price}</span>
                {plan.priceUnit ? <span className="price-card__unit">{plan.priceUnit}</span> : null}
              </p>
              <ul className="price-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={17} weight="bold" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                className="button"
                href={`/${locale === "en" ? "en/" : ""}gratis-gezondheidscheck/?interesse=${encodeURIComponent(plan.title)}`}
              >
                {plan.ctaLabel}
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="pricing-note">
          Een langer vervolgtraject kan worden besproken wanneer na twaalf weken aanvullende
          begeleiding nodig is.
        </p>
        <p className="pricing-note">
          De genoemde bedragen zijn exclusief 21% btw. Een eventuele vergoeding hangt af van je
          zorgverzekeraar, polis, verwijzing en het gevolgde programma; controleer dit vooraf.
        </p>
      </div>
    </section>
  );

  return localizeReactNode(content, locale);
}
