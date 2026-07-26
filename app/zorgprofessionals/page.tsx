import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { EditorialSectionImage } from "@/components/editorial-section-image";
import { FaqHealthCheckSection } from "@/components/faq-health-check-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { localizeHref, localizeReactNode, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  // The SEO doc specifies the short "| Astrid" suffix for this page, so bypass the layout template.
  title: { absolute: "Patiënt Doorverwijzen naar Leefstijlcoach | Astrid" },
  description:
    "Verwijs patiënten met reuma of artrose naar aanvullende leefstijlcoaching van Astrid Sanders in Den Bosch of online door heel Nederland.",
  alternates: {
    canonical: "/zorgprofessionals/",
    languages: {
      "nl-NL": "/zorgprofessionals/",
      en: "/en/zorgprofessionals/",
    },
  },
};

const patientProfile = [
  "Leven met reuma",
  "Leven met artrose",
  "Beperkingen ervaren door pijn of stijfheid",
  "Te maken hebben met wisselende energie",
  "Minder bewegen door onzekerheid of lichamelijke klachten",
  "Een gezondere leefstijl willen ontwikkelen naast reguliere zorg",
];

const supportNeeds = [
  "Meer inzicht wil krijgen in dagelijkse gewoonten",
  "Moeite heeft om leefstijladviezen praktisch toe te passen",
  "Ondersteuning nodig heeft bij gedragsverandering",
  "Wil werken aan slaap, stress en herstel",
  "Op een passende manier meer wil bewegen",
  "Een gezonder voedingspatroon wil opbouwen",
  "Meer structuur nodig heeft",
  "Gezonde veranderingen moeilijk zelfstandig volhoudt",
  "Al verschillende leefstijlmethodes heeft geprobeerd",
  "Persoonlijke begeleiding mist naast medische behandeling",
];

const coachingPillars = [
  {
    title: "Voeding",
    paragraphs: [
      "De coaching bevat een sterke focus op gezonde en grotendeels plantaardige voeding.",
      "Astrid kan cliënten ondersteunen bij:",
    ],
    items: [
      "Het stap voor stap aanpassen van maaltijden",
      "Het vergroten van plantaardige voedingskeuzes",
      "Het ontwikkelen van een haalbare eetstructuur",
      "Het voorbereiden en plannen van maaltijden",
      "Het omgaan met sociale situaties",
      "Het herkennen en opvangen van terugval",
      "Het praktisch toepassen van eerder ontvangen voedingsadviezen",
    ],
    footnote:
      "Bij medische voedingsvragen, allergieën, tekorten of een medische dieetbehandeling blijft begeleiding door een arts of diëtist noodzakelijk.",
  },
  {
    title: "Stress en herstel",
    paragraphs: ["De begeleiding kan cliënten helpen om:"],
    items: [
      "Stresssignalen eerder te herkennen",
      "Grenzen beter te bewaken",
      "Herstelmomenten in te bouwen",
      "Gezonde gewoonten tijdens drukke periodes te beschermen",
      "Veranderingen uit te voeren zonder extra overbelasting",
    ],
  },
  {
    title: "Slaap en energie",
    paragraphs: ["De coaching kan zich richten op:"],
    items: [
      "Slaapritme",
      "Gewoonten voor het slapengaan",
      "Balans tussen activiteit en rust",
      "Energie verdelen gedurende de dag",
      "Dagelijkse herstelmomenten",
      "Patronen die het volhouden van gezonde gewoonten belemmeren",
    ],
  },
  {
    title: "Beweging en dagelijkse activiteit",
    paragraphs: [
      "Astrid ondersteunt cliënten bij het vinden van haalbare manieren om dagelijkse beweging op te bouwen en vol te houden.",
    ],
    items: [],
    footnote:
      "Bij specifieke beperkingen, oefentherapie, revalidatie of bewegingsadvies blijft afstemming met de fysiotherapeut, arts of andere behandelaar belangrijk.",
  },
];

const scopeStatements = [
  "Vervangt geen medische behandeling",
  "Stelt geen medische diagnose",
  "Wijzigt geen medicatie",
  "Geeft geen medisch behandeladvies",
  "Vervangt geen fysiotherapie",
  "Vervangt geen medische dieetbehandeling",
  "Garandeert geen vermindering van klachten",
  "Garandeert geen vermindering van medicatie",
];

const professionalAudiences = [
  {
    title: "Reumatologen en reumatologieafdelingen",
    intro:
      "Voor patiënten met reuma die naast hun medische behandeling ondersteuning nodig hebben bij:",
    items: [
      "Leefstijlverandering",
      "Gezonde en plantaardige voeding",
      "Dagelijkse beweging",
      "Slaap en herstel",
      "Omgaan met stress",
      "Energie verdelen",
      "Het uitvoeren en volhouden van adviezen",
    ],
    outro:
      "Astrid’s persoonlijke ervaring met ernstige reumatische klachten helpt haar om de dagelijkse impact en veranderuitdagingen van patiënten te begrijpen.",
  },
  {
    title: "Huisartsenpraktijken",
    intro: "Huisartsen kunnen patiënten doorverwijzen die:",
    items: [
      "Leven met reuma of artrose",
      "Vragen hebben over een gezondere leefstijl",
      "Ondersteuning nodig hebben bij gedragsverandering",
      "Moeite hebben om algemene adviezen zelfstandig toe te passen",
      "Willen werken aan voeding, beweging, slaap of stress",
      "Een praktische en persoonlijke aanpak zoeken",
    ],
  },
  {
    title: "Fysiotherapiepraktijken",
    intro:
      "Fysiotherapeuten kunnen patiënten doorverwijzen wanneer naast fysieke begeleiding ook ondersteuning nodig is bij:",
    items: [
      "Voeding",
      "Slaap",
      "Stress en herstel",
      "Dagstructuur",
      "Gedragsverandering",
      "Energieverdeling",
      "Het opbouwen van gezonde gewoonten",
    ],
    outro:
      "De fysiotherapeut blijft verantwoordelijk voor lichamelijk onderzoek, oefentherapie en het fysieke behandelplan.",
  },
];

const referralSteps = [
  {
    title: "Stap 1: Aanmelding of introductie",
    paragraphs: ["De zorgprofessional kan:"],
    items: [
      "Astrid rechtstreeks benaderen",
      "De contactgegevens aan de patiënt meegeven",
      "De patiënt vragen zelf een gratis gezondheidscheck aan te vragen",
      "Met toestemming van de patiënt een korte introductie sturen",
    ],
    outro: [
      "Voor reguliere leefstijlcoaching is doorgaans geen formele verwijsbrief nodig. Voor structurele samenwerking kunnen aanvullende afspraken worden gemaakt.",
      "Deel geen medische of persoonlijke informatie zonder toestemming van de patiënt.",
    ],
  },
  {
    title: "Stap 2: Gratis gezondheidscheck",
    paragraphs: [
      "Astrid voert eerst een kort en vrijblijvend telefoongesprek met de patiënt.",
      "Tijdens het gesprek wordt besproken:",
    ],
    items: [
      "Wat er speelt",
      "Welke ondersteuning al aanwezig is",
      "Waar de patiënt dagelijks tegenaan loopt",
      "Wat de patiënt wil veranderen",
      "Of leefstijlcoaching passend lijkt",
      "Welke vorm van begeleiding mogelijk geschikt is",
    ],
  },
  {
    title: "Stap 3: Persoonlijke coaching",
    paragraphs: [
      "Wanneer de patiënt wil starten, wordt de begeleiding afgestemd op de persoonlijke situatie.",
      "Mogelijke vormen zijn:",
    ],
    items: [
      "Een uitgebreide intake",
      "Een los coachingsgesprek",
      "Een 12-weken coachingstraject",
      "Online begeleiding",
      "Persoonlijke begeleiding",
      "Een combinatie van online en persoonlijke gesprekken",
      "Een vervolgtraject wanneer aanvullende ondersteuning nodig is",
    ],
    outro: [
      "Het 12-weken traject bestaat uit zes persoonlijke coachingssessies verspreid over twaalf weken.",
    ],
  },
  {
    title: "Stap 4: Terugkoppeling met toestemming",
    paragraphs: [
      "Persoonlijke of inhoudelijke informatie wordt uitsluitend gedeeld wanneer de cliënt hiervoor uitdrukkelijk toestemming heeft gegeven.",
      "Een afgesproken terugkoppeling kan bijvoorbeeld bestaan uit:",
    ],
    items: [
      "Bevestiging dat de begeleiding is gestart",
      "Algemene leefstijldoelen",
      "Relevante voortgang",
      "Signalen die medische beoordeling vragen",
      "Afronding of vervolg van het traject",
    ],
    outro: ["De vorm, inhoud en communicatiemethode worden vooraf afgestemd."],
  },
];

const experienceInsights = [
  "De dagelijkse invloed van reumatische klachten",
  "Wisselende belastbaarheid",
  "Vermoeidheid en onzekerheid",
  "De moeilijkheid van gedragsverandering",
  "Het volhouden van een aangepast voedingspatroon",
  "De combinatie van leefstijl en reguliere zorg",
  "De behoefte aan praktische ondersteuning",
];

const faqs = [
  {
    question: "Wanneer kan ik een patiënt doorverwijzen naar Astrid?",
    answer: [
      "Doorverwijzen kan passend zijn wanneer een patiënt met reuma of artrose gemotiveerd is om aan leefstijl te werken, maar ondersteuning nodig heeft bij praktische uitvoering en gedragsverandering.",
      "De patiënt moet begrijpen dat de coaching aanvullend is op reguliere zorg.",
    ],
  },
  {
    question: "Is een officiële verwijzing noodzakelijk?",
    answer: [
      "Nee. Voor reguliere leefstijlcoaching is doorgaans geen formele verwijzing nodig.",
      "De patiënt kan zelf een gratis gezondheidscheck aanvragen. Een introductie door een zorgprofessional kan helpen om de hulpvraag duidelijker te maken.",
    ],
  },
  {
    question: "Vervangt de coaching medische behandeling?",
    answer: [
      "Nee. De coaching vervangt geen medische diagnostiek, medicatie, fysiotherapie, dieetbehandeling of specialistische zorg.",
    ],
  },
  {
    question: "Kan Astrid adviseren over medicatie?",
    answer: [
      "Nee. Astrid wijzigt geen medicatie en adviseert cliënten niet om zelfstandig te minderen of te stoppen.",
      "Medicatiebeslissingen blijven bij de cliënt en de behandelend arts.",
    ],
  },
  {
    question: "Wordt informatie teruggekoppeld aan de verwijzer?",
    answer: [
      "Alleen met uitdrukkelijke toestemming van de cliënt.",
      "De vorm en inhoud van een eventuele terugkoppeling worden vooraf afgestemd.",
    ],
  },
  {
    question: "Kan Astrid online begeleiden?",
    answer: [
      "Ja. De begeleiding kan online door heel Nederland plaatsvinden.",
      "Persoonlijke gesprekken in Den Bosch of omgeving kunnen in overleg worden gepland.",
    ],
  },
  {
    question: "Werkt Astrid samen met fysiotherapeuten?",
    answer: [
      "Ja. Astrid kan aanvullende leefstijlbegeleiding bieden naast fysiotherapie.",
      "De fysiotherapeut blijft verantwoordelijk voor lichamelijke beoordeling, oefentherapie en behandeling.",
    ],
  },
  {
    question: "Kan een praktijk structureel samenwerken met Astrid?",
    answer: [
      "Ja. Een structurele samenwerking kan worden besproken.",
      "Mogelijke vormen zijn: een vaste verwijzingsroute, een kennismaking voor het praktijkteam, informatief materiaal voor patiënten, periodiek overleg, een gezamenlijke voorlichtingssessie, afgesproken terugkoppeling met toestemming en online coaching voor patiënten buiten de regio.",
    ],
  },
];

export function ZorgprofessionalsPageContent({ locale }: { locale: Locale }) {
  // "Persoonlijke begeleiding" means in-person coaching here (vs. "Online begeleiding"),
  // but the same Dutch string is a USP card title elsewhere; the global dictionary can
  // hold only one rendering, so this list item is substituted locally.
  const localizedReferralSteps =
    locale === "en"
      ? referralSteps.map((step) => ({
          ...step,
          items: step.items.map((item) =>
            item === "Persoonlijke begeleiding" ? "In-person coaching" : item,
          ),
        }))
      : referralSteps;
  const content = (
    <div lang={locale}>
      <main id="main-content">
        <PageHero
          locale={locale}
          title="Patiënten doorverwijzen naar aanvullende leefstijlcoaching"
          paragraphs={[
            "Begeleidt u patiënten met reuma of artrose die naast hun reguliere behandeling ondersteuning nodig hebben bij duurzame leefstijlverandering?",
            "Astrid Sanders biedt persoonlijke leefstijlcoaching rondom:",
            [
              "Voeding",
              "Beweging",
              "Slaap",
              "Stress",
              "Herstel",
              "Gedragsverandering",
            ],
            "De begeleiding helpt patiënten om algemene leefstijladviezen te vertalen naar haalbare dagelijkse gewoonten.",
            "Leefstijlcoaching is aanvullend op reguliere zorg. Astrid stelt geen diagnose, wijzigt geen medicatie en neemt de rol van huisarts, reumatoloog, fysiotherapeut of diëtist niet over.",
            "De begeleiding is beschikbaar in Den Bosch en omgeving en online door heel Nederland.",
          ]}
          image={{
            src: "/images/generated/zorgprofessionals-hero.png",
            alt: "Astrid Sanders overlegt met twee zorgprofessionals over aanvullende leefstijlbegeleiding",
          }}
          ctaLabel="Bespreek een samenwerking"
          secondaryCtaLabel="Patiënt doorverwijzen"
        />

        {/* Section 2: referral criteria, two-column patient profile and support needs */}
        <section className="section recognition-section" aria-labelledby="referral-fit-title">
          <div className="shell">
            <div className="recognition-intro">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="referral-fit-title">
                  Voor welke patiënten kan leefstijlcoaching relevant zijn?
                </h2>
                <p>
                  Aanvullende leefstijlbegeleiding kan passend zijn voor patiënten die gemotiveerd
                  zijn om aan hun leefstijl te werken, maar moeite hebben om adviezen zelfstandig
                  toe te passen en vol te houden.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/healthcare-collaboration.png"
                alt="Een leefstijlcoach overlegt aan tafel met twee zorgprofessionals"
              />
            </div>

            <div className="recognition-lists">
              <Reveal>
                <h3>Patiënten met reuma of artrose</h3>
                <p>Astrid richt zich voornamelijk op mensen die:</p>
                <ul className="check-list">
                  {patientProfile.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.05}>
                <h3>Mogelijke ondersteuningsbehoeften</h3>
                <p>Doorverwijzen kan passend zijn wanneer een patiënt:</p>
                <ul className="check-list">
                  {supportNeeds.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal className="section-note">
              <p>
                De medische behandeling en verantwoordelijkheid blijven bij de betrokken
                zorgprofessionals.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 3: coaching pillars plus a highlighted professional scope statement */}
        <section className="section trust-section" aria-labelledby="coaching-scope-title">
          <div className="shell">
            <div className="section-intro-with-media">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="coaching-scope-title">
                  Praktische ondersteuning bij duurzame leefstijlverandering
                </h2>
                <p>
                  Astrid helpt cliënten om leefstijladviezen te vertalen naar concrete acties die
                  aansluiten op hun persoonlijke situatie, belastbaarheid en dagelijks leven.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/professional-practical-support.png"
                alt={
                  locale === "en"
                    ? "Lifestyle coach and client create a practical weekly plan together"
                    : "Leefstijlcoach en cliënt maken samen een praktisch weekplan"
                }
              />
            </div>

            <div className="pillar-grid pillar-grid--four">
              {coachingPillars.map((pillar, index) => (
                <Reveal key={pillar.title} className="pillar-card" delay={index * 0.04}>
                  <h3>{pillar.title}</h3>
                  {pillar.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {pillar.items.length > 0 ? (
                    <ul className="compact-list">
                      {pillar.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {pillar.footnote ? <p>{pillar.footnote}</p> : null}
                </Reveal>
              ))}
            </div>

            <Reveal className="section-note professional-scope-card">
              <h2>Professionele afbakening</h2>
              <p>Leefstijlcoaching door Astrid:</p>
              <ul className="compact-list">
                {scopeStatements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Beslissingen over medicatie en behandeling blijven bij de cliënt en de betrokken
                behandelend arts.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 4: priority referral audiences */}
        <section className="section" aria-labelledby="collaboration-title">
          <div className="shell">
            <div className="section-intro-with-media">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="collaboration-title">Samenwerking met zorgprofessionals</h2>
                <p>
                  Astrid richt zich in eerste instantie op samenwerking met reumatologen,
                  huisartsen en fysiotherapeuten.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/professional-care-collaboration.png"
                alt={
                  locale === "en"
                    ? "A lifestyle coach consults with a general practitioner and physiotherapist"
                    : "Leefstijlcoach overlegt met een huisarts en fysiotherapeut"
                }
              />
            </div>

            <div className="professional-audience-grid">
              {professionalAudiences.map((audience, index) => (
                <Reveal
                  key={audience.title}
                  className="professional-audience-card"
                  delay={index * 0.04}
                >
                  <h3>{audience.title}</h3>
                  <p>{audience.intro}</p>
                  <ul className="compact-list">
                    {audience.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {audience.outro ? (
                    <p className="professional-audience-card__note">{audience.outro}</p>
                  ) : null}
                </Reveal>
              ))}
            </div>

            <Reveal className="professional-collaboration-action">
              <Link className="button" href={localizeHref("/contact/", locale)}>
                <span>Bespreek een samenwerking</span>
                <ArrowRight size={18} weight="bold" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Section 5: referral process in four numbered steps */}
        <section className="section" aria-labelledby="referral-process-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="referral-process-title">Zo verloopt de doorverwijzing</h2>
            </Reveal>

            <div className="process-steps">
              {localizedReferralSteps.map((step, index) => (
                <Reveal key={step.title} className="process-step" delay={index * 0.05}>
                  <span className="process-step__number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    {step.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <ul className="compact-list">
                      {step.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {step.outro?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: why collaborate with Astrid, experience plus professional credentials */}
        <section className="section story-section" aria-labelledby="why-astrid-title">
          <div className="shell story-layout">
            <Reveal className="story-heading">
              <h2 id="why-astrid-title">
                Ervaringskennis gecombineerd met professionele begeleiding
              </h2>
              <Link className="text-link" href={localizeHref("/over-astrid/", locale)}>
                Lees meer over Astrid
                <ArrowRight size={19} weight="regular" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className="story-copy" delay={0.05}>
              <p>Astrid heeft zelf jarenlang geleefd met artrose en ernstige reumatische klachten.</p>
              <p>
                Van 2020 tot 2024 had zij wisselende klachten in onder andere haar handen, voeten,
                knieën, schouders, heupen en nek.
              </p>
              <p>
                Na verschillende methodes en leefstijlaanpassingen te hebben geprobeerd, begon zij
                in 2024 met een wetenschappelijk onderbouwde leefstijlaanpak waarin plantaardige
                voeding een belangrijk onderdeel vormde.
              </p>
              <p>
                Haar bloedwaarden verbeterden in de maanden daarna. Onder begeleiding van haar
                reumatoloog kon haar medicatie vervolgens stap voor stap worden aangepast.
              </p>
              <p className="story-copy__important">
                Dit is haar persoonlijke ervaring en geen bewijs dat iedere cliënt hetzelfde
                resultaat bereikt.
              </p>
              <p>De ervaring geeft Astrid wel een diepgaand begrip van:</p>
              <ul className="compact-list">
                {experienceInsights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Astrid heeft de opleiding tot leefstijlcoach bij Sonnevelt Opleidingen afgerond en
                is aangesloten bij de BLCN.
              </p>
              <p>
                Voor haar werk als leefstijlcoach was zij jarenlang actief in marketing,
                communicatie en klantbeleving. Zij werkte onder andere in de financiële sector en
                bij Center Parcs en is bestuurder van de Nijmeegse Vierdaagse.
              </p>
            </Reveal>

            <Reveal className="authority-panel" delay={0.08}>
              <div>
                <h3>Ervaringsdeskundige</h3>
                <p>
                  Persoonlijke ervaring met reuma, artrose, medicatie en langdurige
                  leefstijlverandering.
                </p>
                <h3>Professioneel opgeleid</h3>
                <p>
                  Kennis over voeding, beweging, slaap, stress, herstel, gedragsverandering en
                  duurzame gewoonten.
                </p>
                <h3>Praktisch en transparant</h3>
                <p>Geen medische claims, wondermiddelen of zweverige aanpak.</p>
                <p>
                  De begeleiding is concreet, persoonlijk en aanvullend op reguliere medische zorg.
                </p>
              </div>
              <Link className="text-link" href={localizeHref("/leefstijlcoaching-reuma/", locale)}>
                Leefstijlcoaching bij reuma
                <ArrowRight size={19} weight="regular" aria-hidden="true" />
              </Link>
              <Link className="text-link" href={localizeHref("/leefstijlcoaching-artrose/", locale)}>
                Leefstijlcoaching bij artrose
                <ArrowRight size={19} weight="regular" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Section 7: FAQ for healthcare professionals plus health-check form */}
        <FaqHealthCheckSection
          locale={locale}
          title="Veelgestelde vragen voor zorgprofessionals"
          faqs={faqs}
          formKind="contact"
          formTitle="Bespreek een samenwerking"
          formDescription="Beschrijf kort uw vraag over samenwerking of een mogelijke doorverwijzing. Astrid neemt persoonlijk contact met u op."
          contactContext="zorgprofessionals"
        />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );

  return localizeReactNode(content, locale);
}

export default function ZorgprofessionalsPage() {
  return <ZorgprofessionalsPageContent locale="nl" />;
}
