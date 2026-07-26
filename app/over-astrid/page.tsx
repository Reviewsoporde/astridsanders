import { Check, Leaf } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import { HealthCheckForm } from "@/components/health-check-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { localizeReactNode, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Over Astrid",
  description:
    "Van jarenlang leven met reuma naar anderen helpen om weer grip te krijgen op hun gezondheid. Lees het verhaal van leefstijlcoach Astrid Sanders.",
  alternates: {
    canonical: "/over-astrid/",
    languages: {
      "nl-NL": "/over-astrid/",
      en: "/en/over-astrid/",
    },
  },
};

const whyAstrid = [
  {
    title: "Ervaringsdeskundige",
    text: "Ik weet uit eigen ervaring hoe het is om te leven met reuma en artrose. Ik begrijp de uitdagingen, twijfels en vragen die daarbij horen.",
  },
  {
    title: "Geaccrediteerd leefstijlcoach",
    text: "Naast mijn eigen ervaring beschik ik over een professionele opleiding en begeleid ik mensen op basis van duurzame gedragsverandering.",
  },
  {
    title: "Persoonlijke begeleiding",
    text: "Geen standaardprogramma, maar begeleiding die aansluit bij jouw doelen, mogelijkheden en leefstijl.",
  },
  {
    title: "Praktisch en nuchter",
    text: "Geen ingewikkelde theorieën of zweverige adviezen, maar concrete stappen die je direct kunt toepassen in het dagelijks leven.",
  },
];

const focusGroups = [
  "Reuma",
  "Artrose",
  "Overgewicht met een verhoogd risico op hart- en vaatziekten (GLI)",
];

export function OverAstridPageContent({ locale }: { locale: Locale }) {
  const content = (
    <div lang={locale}>
      <main id="main-content">
        <PageHero
          locale={locale}
          title="Over Astrid"
          paragraphs={[
            "Van jarenlang leven met reuma naar anderen helpen om weer grip te krijgen op hun gezondheid.",
          ]}
          image={{
            src: "/images/generated/over-astrid-hero.webp",
            alt: "Astrid Sanders aan de oever van een rustig meer",
          }}
        />

        <section className="section" aria-labelledby="story-title">
          <div className="shell story-layout story-layout--two-column">
            <Reveal className="story-heading">
              <h2 id="story-title">Mijn verhaal</h2>
            </Reveal>

            <Reveal className="story-copy" delay={0.05}>
              <p>
                Mijn naam is Astrid Sanders en ik ben geaccrediteerd leefstijlcoach én
                ervaringsdeskundige.
              </p>
              <p>
                Jarenlang leefde ik met reuma en artrose. Wat begon met een opgezwollen hand,
                groeide uit tot een periode waarin vrijwel al mijn gewrichten ontstoken waren.
                Wandelen, sporten en zelfs dagelijkse handelingen werden steeds moeilijker. Vier
                jaar lang leefde ik van opvlamming naar opvlamming en gebruikte ik verschillende
                vormen van medicatie.
              </p>
              <p>Ik wilde niet accepteren dat dit mijn toekomst zou zijn.</p>
              <p>
                Daarom ging ik zelf op zoek naar oplossingen. Ik probeerde onder andere vasten,
                acupunctuur, de Wim Hof-methode, orthomoleculaire therapie, supplementen, yoga en
                verschillende voedingspatronen. Hoewel sommige dingen tijdelijk hielpen, bleef ik
                zoeken naar een aanpak die écht bij mij paste.
              </p>
              <p>
                Via het wetenschappelijk onderbouwde{" "}
                <a
                  className="text-link text-link--inline"
                  href="https://plants-for-health.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Plants for Health-programma</strong>
                </a>{" "}
                ontdekte ik hoe groot de invloed van leefstijl kan zijn. Ik besloot mijn leefstijl
                volledig om te gooien en stap voor stap gezonder te gaan leven. Na enkele weken
                begon ik verschil te merken. Mijn energie nam toe en mijn klachten verminderden.
                Onder begeleiding van mijn reumatoloog kon mijn medicatie vervolgens stap voor
                stap worden aangepast.
              </p>
              <p className="story-copy__important">
                Die ervaring veranderde mijn leven. Dit is mijn persoonlijke ervaring en geen
                garantie dat anderen hetzelfde resultaat bereiken.
              </p>

              <h2>Waarom ik leefstijlcoach ben geworden</h2>
              <p>
                Tijdens mijn eigen zoektocht merkte ik hoe moeilijk het is om betrouwbare informatie
                te vinden én veranderingen daadwerkelijk vol te houden.
              </p>
              <p>
                Juist daarom besloot ik mij om te scholen tot leefstijlcoach. Ik volgde de opleiding
                tot leefstijlcoach bij <strong>Sonnevelt Opleidingen</strong> en ben geaccrediteerd
                bij de <strong>BLCN (Beroepsvereniging Leefstijlcoaches Nederland)</strong>.
                Daarnaast wil ik mijn ervaring inzetten om anderen te begeleiden die dezelfde
                zoektocht doormaken.
              </p>
              <p>
                Ik combineer mijn persoonlijke ervaring met professionele kennis over voeding,
                beweging, slaap, stress en duurzame gedragsverandering.
              </p>

              <h2>Mijn visie</h2>
              <p>Ik geloof niet in snelle oplossingen of tijdelijke diëten.</p>
              <p>Ik geloof in een leefstijl die je kunt volhouden.</p>
              <p>
                Kleine, haalbare veranderingen maken op de lange termijn het grootste verschil.
                Daarom kijken we niet alleen naar voeding, maar ook naar beweging, slaap, stress,
                ontspanning en alles wat invloed heeft op jouw gezondheid.
              </p>
              <p>Iedereen is anders. Daarom is ieder traject persoonlijk en afgestemd op jouw situatie.</p>
            </Reveal>

          </div>
        </section>

        <section className="section trust-section" aria-labelledby="why-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="why-title">Waarom kiezen voor Astrid?</h2>
            </Reveal>

            <div className="pillar-grid pillar-grid--four">
              {whyAstrid.map((item, index) => (
                <Reveal key={item.title} className="pillar-card" delay={index * 0.04}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="guidance-title">
          <div className="shell contact-layout">
            <Reveal>
              <h2 id="guidance-title">Mijn begeleiding</h2>
              <p>Mijn begeleiding richt zich voornamelijk op mensen met:</p>
              <ul className="check-list">
                {focusGroups.map((item) => (
                  <li key={item}>
                    <Check size={18} weight="bold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Samen kijken we welke leefstijlveranderingen passen bij jouw situatie. Mijn
                coaching is bedoeld als aanvulling op de reguliere zorg en helpt je om duurzame
                veranderingen vol te houden.
              </p>
              <a
                className="text-link"
                href="https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan"
                target="_blank"
                rel="noreferrer"
              >
                Bekijk het interview bij Omroep Brabant
              </a>
            </Reveal>

            <Reveal className="recognition-media" delay={0.08}>
              <Image
                src="/images/generated/about-astrid.webp"
                alt="Astrid Sanders in een rustige, natuurlijke omgeving"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="background-title">
          <div className="shell contact-layout">
            <Reveal>
              <h2 id="background-title">Mijn achtergrond</h2>
              <p>
                Voordat ik leefstijlcoach werd, werkte ik jarenlang in marketing, communicatie en
                klantbeleving bij verschillende organisaties. Daardoor weet ik hoe belangrijk
                persoonlijke aandacht, duidelijke communicatie en een praktische aanpak zijn.
              </p>
              <p>Die ervaring neem ik vandaag de dag mee in mijn begeleiding.</p>

              <h2>Zet vandaag de eerste stap</h2>
              <p>Ben je benieuwd wat leefstijlcoaching voor jou kan betekenen?</p>
              <p>
                Tijdens een <strong>gratis gezondheidscheck</strong> bespreken we jouw situatie,
                jouw doelen en kijken we samen welke eerste stap het beste bij jou past. Zo ontdek
                je vrijblijvend of mijn begeleiding aansluit bij jouw wensen.
              </p>
            </Reveal>

            <Reveal className="health-check-panel" delay={0.08}>
              <div className="health-check-panel__media">
                <Image
                  src="/images/astrid-portrait-studio.webp"
                  alt="Portret van Astrid Sanders, leefstijlcoach in Den Bosch"
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
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
              <HealthCheckForm locale={locale} />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );

  return localizeReactNode(content, locale);
}

export default function OverAstridPage() {
  return <OverAstridPageContent locale="nl" />;
}
