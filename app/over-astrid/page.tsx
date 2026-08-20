import { ArrowUpRight, Check, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import { EditorialSectionImage } from "@/components/editorial-section-image";
import { HealthCheckForm } from "@/components/health-check-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { localizeReactNode, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Over Astrid",
  description:
    "Lees het persoonlijke verhaal, de professionele achtergrond en de registraties van leefstijlcoach Astrid Sanders.",
  alternates: {
    canonical: "/over-astrid/",
  },
};

const whyAstrid = [
  {
    title: "Ervaringsdeskundige",
    text: "Ik weet uit eigen ervaring hoe het is om te leven met reuma en artrose. Ik begrijp de uitdagingen, twijfels en vragen die daarbij horen.",
  },
  {
    title: "Professioneel geregistreerd",
    text: "Naast mijn opleiding tot leefstijlcoach ben ik geregistreerd bij KABIZ en lid van de BLCN. Mijn jarenlange ervaring in management en bestuur helpt mij gestructureerd en doelgericht te werken.",
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
  "Andere gezondheidsvragen, zoals beginnende diabetes type 2 en overgewicht of obesitas met gezondheidsrisico’s",
];

const credentials = [
  {
    title: "Opleiding Leefstijlcoach",
    detail: "Sonnevelt Opleidingen",
    href: "https://www.sonneveltopleidingen.nl/opleidingen/leefstijlcoach",
    linkLabel: "Bekijk de opleiding",
  },
  {
    title: "KABIZ-register",
    detail: "Registratienummer 18109454184",
    href: "https://www.kabiz.nl/raadplegenregister/default.aspx",
    linkLabel: "Raadpleeg het KABIZ-register",
  },
  {
    title: "BLCN-lidmaatschap",
    detail: "Lidnummer L2125",
    href: "https://blcn.nl/",
    linkLabel: "Bekijk de BLCN",
  },
  {
    title: "Praktijkregistratie",
    detail: "KvK-nummer 42145089",
  },
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
            src: "/images/generated/over-astrid-hero-v2.webp",
            alt: "Astrid Sanders werkt aan aantekeningen in haar coachingspraktijk",
            mobilePosition: "72% center",
          }}
        />

        <section className="section" aria-labelledby="story-title">
          <div className="shell story-layout story-layout--two-column">
            <Reveal className="story-heading">
              <h2 id="story-title">Mijn verhaal</h2>
            </Reveal>

            <Reveal className="story-copy" delay={0.05}>
              <p>
                Mijn naam is Astrid Sanders en ik ben leefstijlcoach én ervaringsdeskundige.
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
                verschillende voedingspatronen. Hoewel sommige acties tijdelijk hielpen, bleef ik
                zoeken naar een aanpak die écht bij mij paste.
              </p>
              <p>
                Via het{" "}
                <a
                  className="text-link text-link--inline"
                  href="https://plants-for-health.nl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Plants for Health-programma</strong>
                </a>{" "}
                ontdekte ik welke rol leefstijl in mijn eigen situatie kon spelen. Ik besloot mijn
                leefstijl volledig om te gooien en stap voor stap gezonder te gaan leven. Na enkele
                weken begon ik verschil te merken. Mijn energie nam toe en mijn klachten
                verminderden. Onder begeleiding van mijn reumatoloog kon mijn medicatie vervolgens
                stap voor stap worden aangepast.
              </p>
              <p className="story-copy__important">
                Die ervaring veranderde mijn leven. Dit is mijn persoonlijke ervaring en geen
                garantie dat anderen hetzelfde resultaat bereiken. Wel denk ik graag met je mee of
                een vergelijkbare aanpak ook voor jou kan werken.
              </p>

              <h2>Waarom ik leefstijlcoach ben geworden</h2>
              <p>
                Tijdens mijn eigen zoektocht merkte ik hoe moeilijk het is om betrouwbare
                informatie te vinden, ongezonde gewoonten te veranderen én nieuwe keuzes
                daadwerkelijk vol te houden.
              </p>
              <p>
                Het gangbare pad van huisarts, specialist en medicatie is voor veel mensen
                belangrijk en noodzakelijk. Tegelijk merkte ik dat dit pad niet altijd het
                volledige verhaal vertelt: leefstijl kan, naast die zorg, een waardevolle
                aanvullende rol spelen.
              </p>
              <p>
                Juist daarom besloot ik mij om te scholen tot leefstijlcoach. Ik volgde de opleiding
                tot leefstijlcoach bij <strong>Sonnevelt Opleidingen</strong>. Ik ben geregistreerd
                bij <strong>KABIZ</strong> en aangesloten bij de{" "}
                <strong>BLCN (Beroepsvereniging Leefstijlcoaches Nederland)</strong>.
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

              <h2>Mijn doel</h2>
              <p>
                Ik wil zoveel mogelijk mensen helpen hun leven gezonder te maken, met als
                uiteindelijk doel dat zij langer en gelukkiger leven: een langer en gelukkiger
                leven door nu gezonde, duurzame keuzes te maken.
              </p>
              <p>
                Concreet wil ik mensen helpen om met haalbare keuzes duurzaam te werken aan hun
                gezondheid, zelfvertrouwen en kwaliteit van leven.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section trust-section" aria-labelledby="credentials-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="credentials-title">Opleiding en registraties</h2>
              <p>De professionele en zakelijke gegevens van mijn praktijk op een rij.</p>
            </Reveal>

            <div className="pillar-grid pillar-grid--four">
              {credentials.map((credential, index) => (
                <Reveal key={credential.title} className="pillar-card" delay={index * 0.04}>
                  <h3>{credential.title}</h3>
                  <p>{credential.detail}</p>
                  {credential.href ? (
                    <a
                      className="text-link"
                      href={credential.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {credential.linkLabel}
                      <ArrowUpRight size={17} weight="regular" aria-hidden="true" />
                    </a>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="why-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="why-title">Waarom kiezen voor Astrid?</h2>
              <p>
                Naast mijn eigen ervaring beschik ik over een professionele opleiding en
                uitgebreide werkervaring. Die combinatie van ervaringsdeskundigheid, vakkennis en
                een zakelijke achtergrond maakt mijn begeleiding persoonlijk én resultaatgericht.
              </p>
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
                Samen kijken we welke leefstijlveranderingen passen bij jouw situatie. Onderwerpen
                zijn onder meer voeding, beweging, slaap, stress, herstel, afvallen,
                gedragsverandering en het doorbreken van ongezonde gewoontes of verslavingen, waar
                dat relevant is.
              </p>
              <p>
                Mijn coaching is bedoeld als aanvulling op de reguliere zorg en helpt je bij het
                opbouwen en volhouden van duurzame gewoonten, met een mooier leven en een betere
                toekomst als doel.
              </p>
              <a
                className="text-link"
                href="https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan"
                target="_blank"
                rel="noreferrer"
              >
                Bekijk het interview bij Omroep Brabant
                <ArrowUpRight size={17} weight="regular" aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal className="recognition-media recognition-media--headroom" delay={0.08}>
              <Image
                src="/images/generated/about-astrid-v2.webp"
                alt="Astrid Sanders beoordeelt een praktisch leefstijlplan aan haar werktafel"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </Reveal>
          </div>
        </section>

        <section className="section trust-section" aria-labelledby="background-title">
          <div className="shell story-layout story-layout--two-column">
            <Reveal className="story-heading">
              <h2 id="background-title">Mijn achtergrond</h2>
            </Reveal>
            <Reveal className="story-copy" delay={0.05}>
              <p>
                Voordat ik leefstijlcoach werd, werkte ik jarenlang op het snijvlak van marketing,
                management, communicatie en klantbeleving. Ik werkte onder andere in de financiële
                sector, bij Center Parcs en in verschillende interimfuncties.
              </p>
              <p>
                Daarnaast heb ik ruime ervaring als manager en bestuurder: van het aansturen van
                een callcenter tot bestuurder van de Nijmeegse Vierdaagse. Daardoor weet ik hoe
                belangrijk persoonlijke aandacht, heldere communicatie, structuur en een praktische
                aanpak zijn.
              </p>
              <p>Die ervaring neem ik vandaag de dag mee in mijn begeleiding.</p>
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="norway-title">
          <div className="shell section-intro-with-media">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="norway-title">Mijn andere liefde: Noorwegen</h2>
              <p>
                Naast leefstijlcoaching heb ik een grote liefde voor Noorwegen. Ik verhuur in het
                dorpje Vrådal twee vakantiehuizen.
              </p>
              <p>
                Ik ben er graag buiten en in beweging en geniet van de natuur en de verschillende
                seizoenen. Die praktische, actieve manier van leven past bij wat ik ook in mijn
                coaching belangrijk vind: keuzes die in het dagelijks leven vol te houden zijn.
              </p>
              <a
                className="text-link"
                href="https://www.furuheimlodge.com/"
                target="_blank"
                rel="noreferrer"
              >
                Bekijk Furuheim Lodge
                <ArrowUpRight size={17} weight="regular" aria-hidden="true" />
              </a>
              <p className="media-credit">Fotografie: Werner van Beusekom</p>
            </Reveal>

            <div className="about-photo-stack">
              <EditorialSectionImage
                src="/images/furuheim-lodge-exterior.webp"
                alt="Furuheim Lodge tussen de bomen in Vrådal, Noorwegen"
              />
              <EditorialSectionImage
                src="/images/furuheim-lodge-terrace.webp"
                alt="Uitzicht vanaf het terras van Furuheim Lodge in Noorwegen"
              />
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="four-days-title">
          <div className="shell story-layout story-layout--two-column">
            <Reveal className="story-heading">
              <h2 id="four-days-title">Bestuurslid van Stichting DE 4DAAGSE</h2>
            </Reveal>
            <Reveal className="story-copy" delay={0.05}>
              <p>
                Naast mijn werk als leefstijlcoach ben ik bestuurslid van Stichting DE 4DAAGSE. In
                die rol draag ik bij aan de organisatie van het internationale wandelevenement in
                Nijmegen.
              </p>
              <p>
                Die bestuurlijke ervaring sluit aan bij mijn achtergrond in marketing, management,
                communicatie en klantbeleving en bij mijn belangstelling voor beweging die past bij
                iemands mogelijkheden.
              </p>
              <a
                className="text-link"
                href="https://www.4daagse.nl/over-de-4daagse/organisatie/stichting-de-4daagse"
                target="_blank"
                rel="noreferrer"
              >
                Bekijk de organisatie van de 4Daagse
                <ArrowUpRight size={17} weight="regular" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="first-step-title">
          <div className="shell contact-layout">
            <Reveal>
              <h2 id="first-step-title">Wat kan Astrid voor jou betekenen?</h2>
              <p>
                Of je nu particulier, ondernemer, HR- of vitaliteitsprofessional, of
                zorgprofessional bent, of Astrid wilt inschakelen voor een presentatie: ik denk
                graag met je mee.
              </p>
              <p>
                Vertel kort wat je nodig hebt of hoe ik je kan helpen. Ik neem persoonlijk contact
                met je op. Liever direct een kort telefoongesprek over jouw situatie? Vraag dan de{" "}
                <strong>gratis gezondheidscheck</strong> aan.
              </p>
            </Reveal>

            <Reveal className="health-check-panel" delay={0.08}>
              <div className="health-check-panel__media">
                <Image
                  src="/images/astrid-portrait-studio.png"
                  alt="Portret van Astrid Sanders, leefstijlcoach"
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                />
              </div>
              <div className="health-check-panel__heading">
                <PhoneCall size={28} weight="regular" aria-hidden="true" />
                <p className="health-check-panel__title" id="gezondheidscheck">
                  Neem contact op
                </p>
                <p>Vertel kort wat je nodig hebt of hoe ik je kan helpen.</p>
              </div>
              <HealthCheckForm locale={locale} source="over-astrid" submitLabel="Bericht versturen" />
              <WhatsAppLink locale={locale} compact className="health-check-panel__whatsapp" />
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
