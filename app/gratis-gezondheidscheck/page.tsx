import { Leaf, Check } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import { HealthCheckForm } from "@/components/health-check-form";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { getHealthCheckInterest, type HealthCheckInterest } from "@/lib/form-validation";
import { localizeReactNode, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Gratis Gezondheidscheck",
  description:
    "Vraag een gratis gezondheidscheck aan: een kort en vrijblijvend telefoongesprek over jouw situatie, leefstijl en een passende eerste stap.",
  alternates: {
    canonical: "/gratis-gezondheidscheck/",
    languages: {
      "nl-NL": "/gratis-gezondheidscheck/",
      en: "/en/gratis-gezondheidscheck/",
    },
  },
};

const expectations = [
  "Je vertelt wat er speelt, welke klachten of uitdagingen je ervaart en wat je al hebt geprobeerd",
  "Astrid legt uit hoe haar begeleiding werkt",
  "Samen bekijken jullie of leefstijlcoaching een passende volgende stap kan zijn",
];

export function GezondheidscheckPageContent({
  interest,
  locale,
}: {
  interest?: HealthCheckInterest;
  locale: Locale;
}) {
  const content = (
    <div lang={locale}>
      <main id="main-content">
        <section className="section health-check-page" aria-labelledby="check-title">
          <div className="shell contact-layout">
            <Reveal className="health-check-intro">
              <h1 id="check-title">Gratis gezondheidscheck aanvragen</h1>
              <p className="page-lead">
                De gratis gezondheidscheck is een kort telefonisch gesprek waarin je vertelt over je
                situatie, leefstijl en wat je al hebt geprobeerd.
              </p>
            </Reveal>

            <Reveal className="health-check-panel" delay={0.08}>
              <div className="health-check-panel__media">
                <Image
                  src="/images/generated/gratis-gezondheidscheck-hero.png"
                  alt="Astrid Sanders voert een persoonlijk telefoongesprek"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>
              <div className="health-check-panel__heading">
                <Leaf size={30} weight="regular" aria-hidden="true" />
                <p className="health-check-panel__title" id="gezondheidscheck">
                  Gratis gezondheidscheck aanvragen
                </p>
                <p>
                  Laat je naam, telefoonnummer en voorkeursmoment achter. Astrid neemt persoonlijk
                  contact met je op voor een kort en vrijblijvend telefoongesprek.
                </p>
              </div>
              <HealthCheckForm interest={interest} locale={locale} />
            </Reveal>

            <Reveal className="health-check-expectations" delay={0.04}>
              <p>
                Ik leg uit hoe mijn aanpak werkt en we bekijken samen of leefstijlcoaching een
                passende volgende stap kan zijn. Het gesprek is vrijblijvend en verplicht je nergens
                toe.
              </p>
              <p>
                Je hoeft hiervoor niet direct een afspraak in een agenda te boeken. Laat je naam,
                telefoonnummer en voorkeursmoment achter, dan neem ik persoonlijk contact met je op.
              </p>

              <h2>Wat kun je verwachten?</h2>
              <ul className="check-list">
                {expectations.map((item) => (
                  <li key={item}>
                    <Check size={18} weight="bold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="section-note">
                Leefstijlcoaching vervangt geen medische behandeling. De coaching is aanvullende
                begeleiding naast de zorg van je huisarts, reumatoloog, fysiotherapeut of andere
                behandelaar.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );

  return localizeReactNode(content, locale);
}

export default async function GezondheidscheckPage({
  searchParams,
}: {
  searchParams: Promise<{ interesse?: string }>;
}) {
  const { interesse } = await searchParams;
  return (
    <GezondheidscheckPageContent
      interest={getHealthCheckInterest(interesse)}
      locale="nl"
    />
  );
}
