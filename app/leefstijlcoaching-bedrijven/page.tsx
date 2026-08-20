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
  title: "Leefstijlcoaching voor Bedrijven",
  description:
    "Praktische leefstijlcoaching voor bedrijven met workshops, groepscoaching, gezondheidschecks en persoonlijke begeleiding voor medewerkers.",
  alternates: {
    canonical: "/leefstijlcoaching-bedrijven/",
  },
};

// Generic content block so cards and steps can mix paragraphs and lists.
type ContentBlock = { kind: "paragraph"; text: string } | { kind: "list"; items: string[] };

const employeeChallenges = [
  "Langdurige werkdruk",
  "Vermoeidheid of weinig energie",
  "Onregelmatige eetmomenten",
  "Veel zitten en weinig bewegen",
  "Slecht slapen of onvoldoende herstel",
  "Een verstoorde balans tussen werk en privé",
  "Medewerkers met overgewicht of verslavingen",
  "Gezonde voornemens die snel wegvallen",
  "Gezondheidsklachten die invloed hebben op het dagelijks functioneren",
];

const coachingSupport = [
  "Meer inzicht te krijgen in dagelijkse gewoonten",
  "Gezondere keuzes eenvoudiger te maken",
  "Structuur in voeding en beweging aan te brengen",
  "Stresssignalen eerder te herkennen",
  "Bewuster met rust en herstel om te gaan",
  "Persoonlijke doelen om te zetten naar concrete acties",
  "Veranderingen langer vol te houden",
  "Meer verantwoordelijkheid te nemen voor hun leefstijl",
];

const businessResults = [
  "Hoger werkplezier",
  "Hogere productiviteit",
  "Minder kosten / kostenbesparing",
  "Vitalere, gezondere medewerkers",
  "Betere werksfeer",
  "Hogere klanttevredenheid",
  "Ziekteverzuim omlaag",
  "Minder uitval",
];

const businessServices: { title: string; blocks: ContentBlock[] }[] = [
  {
    title: "Leefstijlgerichte gezondheidscheck",
    blocks: [
      {
        kind: "paragraph",
        text: "Een leefstijlgerichte gezondheidscheck is een laagdrempelige manier om algemene gewoonten, behoeften en aandachtspunten binnen een team of organisatie in kaart te brengen.",
      },
      { kind: "paragraph", text: "Mogelijke onderwerpen zijn:" },
      {
        kind: "list",
        items: [
          "Voeding tijdens en rondom het werk",
          "Beweging gedurende de werkdag",
          "Werkdruk en stress",
          "Slaap en herstel",
          "Energie en dagelijkse belastbaarheid",
          "Balans tussen werk en privé",
          "Behoefte aan verdere ondersteuning",
        ],
      },
      {
        kind: "paragraph",
        text: "De gezondheidscheck is geen medische keuring en bevat geen diagnose of medische beoordeling.",
      },
      {
        kind: "paragraph",
        text: "De exacte vorm kan bestaan uit individuele gesprekken, een vragenlijst, groepsinventarisatie of een combinatie hiervan.",
      },
    ],
  },
  {
    title: "1-op-1 leefstijlcoaching voor medewerkers",
    blocks: [
      {
        kind: "paragraph",
        text: "Individuele coaching is bedoeld voor medewerkers die persoonlijke ondersteuning nodig hebben bij het ontwikkelen en volhouden van gezondere gewoonten.",
      },
      { kind: "paragraph", text: "De begeleiding kan zich richten op:" },
      {
        kind: "list",
        items: [
          "Persoonlijke leefstijldoelen",
          "Voeding",
          "Stress en grenzen",
          "Slaap en herstel",
          "Beweging",
          "Energieverdeling",
          "Werk-privébalans",
          "Gedragsverandering",
          "Het combineren van gezondheid en werk",
        ],
      },
      {
        kind: "paragraph",
        text: "Persoonlijke informatie uit coachingsgesprekken blijft vertrouwelijk en wordt niet zonder toestemming met de werkgever gedeeld.",
      },
    ],
  },
  {
    title: "Groepscoaching",
    blocks: [
      {
        kind: "paragraph",
        text: "Groepscoaching helpt medewerkers om gezamenlijk te werken aan bewustwording en praktische gewoonten.",
      },
      { kind: "paragraph", text: "Mogelijke onderwerpen zijn:" },
      {
        kind: "list",
        items: [
          "Gezond eten tijdens een drukke werkweek",
          "Meer bewegen tijdens het werk",
          "Omgaan met stress en werkdruk",
          "Beter slapen en herstellen",
          "Energie verdelen gedurende de dag",
          "Gezonde gewoonten volhouden",
          "Elkaar ondersteunen als team",
        ],
      },
      {
        kind: "paragraph",
        text: "De vorm, duur en groepsgrootte worden afgestemd op de organisatie.",
      },
    ],
  },
  {
    title: "Workshops over een gezonde leefstijl",
    blocks: [
      { kind: "paragraph", text: "Een workshop kan worden ingezet als:" },
      {
        kind: "list",
        items: [
          "Losse vitaliteitsactiviteit",
          "Onderdeel van een teamdag",
          "Introductie op een breder programma",
          "Praktische sessie voor medewerkers of leidinggevenden",
        ],
      },
      { kind: "paragraph", text: "Mogelijke onderwerpen zijn:" },
      {
        kind: "list",
        items: [
          "De basis van een gezonde leefstijl",
          "Voeding voor een drukke werkdag",
          "Stresssignalen herkennen",
          "Slaap en herstel",
          "Meer bewegen tijdens het werk",
          "Kleine gewoonten met blijvende waarde",
          "Gezondheid en werkplezier",
          "Balans tussen prestaties en herstel",
        ],
      },
    ],
  },
];

const audienceCards: { title: string; blocks: ContentBlock[] }[] = [
  {
    title: "Werkgevers en organisaties",
    blocks: [
      { kind: "paragraph", text: "Voor organisaties die:" },
      {
        kind: "list",
        items: [
          "Willen investeren in gezondheid en vitaliteit",
          "Medewerkers praktische ondersteuning willen bieden",
          "Leefstijl bespreekbaar willen maken",
          "Gezonde gewoonten binnen teams willen stimuleren",
          "Een laagdrempelige eerste activiteit zoeken",
          "Individuele begeleiding beschikbaar willen stellen",
        ],
      },
    ],
  },
  {
    title: "HR- en vitaliteitsprofessionals",
    blocks: [
      {
        kind: "paragraph",
        text: "Voor HR-managers, leidinggevenden en vitaliteitscoördinatoren die een praktische aanvulling zoeken op bestaand beleid rondom:",
      },
      {
        kind: "list",
        items: [
          "Vitaliteit",
          "Welzijn",
          "Werkplezier",
          "Duurzame inzetbaarheid",
          "Preventieve ondersteuning",
        ],
      },
      {
        kind: "paragraph",
        text: "Astrid kan aansluiten bij bestaande initiatieven of helpen bepalen welke eerste interventie het meest passend is.",
      },
    ],
  },
  {
    title: "Managers, bestuurders en ondernemers",
    blocks: [
      {
        kind: "paragraph",
        text: "Individuele coaching kan ook worden ingezet voor professionals met hoge verantwoordelijkheid, complexe agenda’s of langdurige werkdruk.",
      },
      { kind: "paragraph", text: "De begeleiding kan relevant zijn wanneer iemand:" },
      {
        kind: "list",
        items: [
          "Veel verantwoordelijkheid draagt",
          "Stress of mentale klachten ervaart door de functie",
          "Merkt dat werk en privé uit balans raken",
          "Moeite heeft om voldoende te herstellen",
          "Gezondheid structureel ondergeschikt maakt aan werk",
          "Onregelmatig eet of beweegt",
          "Fysieke klachten of gezondheidsklachten ervaart die invloed hebben op functioneren",
          "Een persoonlijke en discrete aanpak zoekt",
        ],
      },
      {
        kind: "paragraph",
        text: "Astrid begrijpt deze doelgroep vanuit haar eigen professionele en bestuurlijke achtergrond.",
      },
    ],
  },
];

const processSteps: { title: string; blocks: ContentBlock[] }[] = [
  {
    title: "Stap 1: Kennismaking en behoefteanalyse",
    blocks: [
      { kind: "paragraph", text: "We beginnen met een vrijblijvend gesprek over:" },
      {
        kind: "list",
        items: [
          "De organisatie",
          "De doelgroep of medewerkers",
          "De belangrijkste uitdagingen",
          "Bestaande vitaliteitsinitiatieven",
          "Het gewenste resultaat",
          "De beschikbare tijd",
          "De gewenste vorm van begeleiding",
          "Praktische randvoorwaarden",
        ],
      },
      {
        kind: "paragraph",
        text: "Het doel is om te bepalen waar de grootste behoefte ligt en welke eerste stap realistisch is.",
      },
    ],
  },
  {
    title: "Stap 2: Voorstel op maat",
    blocks: [
      { kind: "paragraph", text: "Op basis van het gesprek maakt Astrid een voorstel." },
      { kind: "paragraph", text: "Dit kan bestaan uit:" },
      {
        kind: "list",
        items: [
          "Een leefstijlgerichte gezondheidscheck",
          "Individuele leefstijlcoaching",
          "Groepscoaching",
          "Een workshop",
          "Een traject voor managers of business professionals",
          "Online begeleiding",
          "Begeleiding op locatie",
          "Een combinatie van meerdere onderdelen",
        ],
      },
      {
        kind: "paragraph",
        text: "De vorm, duur, investering en eventuele reiskosten worden afgestemd op de omvang en behoefte van de organisatie.",
      },
    ],
  },
  {
    title: "Stap 3: Uitvoering en evaluatie",
    blocks: [
      { kind: "paragraph", text: "Vooraf worden afspraken gemaakt over:" },
      {
        kind: "list",
        items: [
          "Doelstelling",
          "Planning",
          "Deelnemers",
          "Inhoud",
          "Communicatie",
          "Privacy",
          "Evaluatiemomenten",
        ],
      },
      { kind: "paragraph", text: "Na afloop wordt bekeken:" },
      {
        kind: "list",
        items: [
          "Welke algemene inzichten naar voren zijn gekomen",
          "Welke onderwerpen verdere aandacht vragen",
          "Of een vervolgsessie relevant is",
          "Of medewerkers behoefte hebben aan individuele begeleiding",
          "Hoe gezonde gewoonten verder kunnen worden ondersteund",
        ],
      },
      {
        kind: "paragraph",
        text: "Persoonlijke gezondheidsinformatie wordt niet zonder toestemming gedeeld. Organisaties kunnen waar passend alleen een algemene of geanonimiseerde evaluatie ontvangen.",
      },
    ],
  },
];

const faqs = [
  {
    question: "Wat is leefstijlcoaching voor bedrijven?",
    answer: [
      "Leefstijlcoaching voor bedrijven helpt medewerkers om praktisch te werken aan voeding, beweging, slaap, stress, herstel en duurzame gewoonten.",
      "De begeleiding kan individueel, in groepsverband, tijdens een workshop of als onderdeel van een breder vitaliteitsprogramma plaatsvinden.",
    ],
  },
  {
    question: "Wat is een gezondheidscheck voor medewerkers?",
    answer: [
      "Een leefstijlgerichte gezondheidscheck brengt algemene gewoonten, behoeften en aandachtspunten binnen een organisatie of team in kaart.",
      "Het is geen medische keuring, diagnose of onderzoek door een bedrijfsarts.",
    ],
  },
  {
    question: "Kan Astrid individuele medewerkers begeleiden?",
    answer: [
      "Ja. Astrid kan medewerkers persoonlijk begeleiden bij leefstijlvragen en gedragsverandering.",
      "De inhoud van individuele gesprekken blijft vertrouwelijk en wordt niet zonder toestemming met de werkgever gedeeld.",
    ],
  },
  {
    question: "Kan de werkgever voortgangsrapportages ontvangen?",
    answer: [
      "Alleen algemene of geanonimiseerde informatie kan worden gedeeld, tenzij een medewerker uitdrukkelijk toestemming geeft voor een specifieke terugkoppeling.",
      "Persoonlijke gezondheidsinformatie blijft vertrouwelijk.",
    ],
  },
  {
    question: "Geeft Astrid workshops op locatie?",
    answer: [
      "Ja. Workshops kunnen in overleg op locatie worden gegeven.",
      "De inhoud, duur, groepsgrootte, locatie en investering worden vooraf afgestemd.",
    ],
  },
  {
    question: "Kan de begeleiding online plaatsvinden?",
    answer: [
      "Ja. Individuele coaching en bepaalde groepssessies kunnen online plaatsvinden.",
      "Workshops en gezondheidschecks kunnen afhankelijk van de gekozen aanpak online of op locatie worden uitgevoerd.",
    ],
  },
  {
    question: "Voor welke bedrijven is de coaching geschikt?",
    answer: [
      "De begeleiding kan worden aangepast aan kleine bedrijven, grotere organisaties, teams, HR-afdelingen en individuele business professionals.",
      "De uiteindelijke aanpak wordt bepaald op basis van de doelgroep en gewenste resultaten.",
    ],
  },
  {
    question: "Wat kost leefstijlcoaching voor bedrijven?",
    answer: [
      "De investering hangt af van de gekozen dienstverlening, het aantal deelnemers, de duur, voorbereiding en locatie.",
      "Na een kennismakingsgesprek ontvangt de organisatie een voorstel op maat.",
    ],
  },
  {
    question: "Kan leefstijlcoaching onderdeel zijn van een vitaliteitsprogramma?",
    answer: [
      "Ja. Astrid kan aansluiten bij een bestaand programma of een losse activiteit aanbieden als eerste stap.",
    ],
  },
];

function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) =>
        block.kind === "paragraph" ? (
          <p key={index}>{block.text}</p>
        ) : (
          <ul key={index} className="compact-list">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

export function BedrijvenPageContent({ locale }: { locale: Locale }) {
  const content = (
    <div lang={locale}>
      <main id="main-content">
        <PageHero
          locale={locale}
          title="Leefstijlcoaching voor bedrijven en medewerkers"
          paragraphs={[
            "Gezonde gewoonten ondersteunen medewerkers om bewuster om te gaan met energie, werkdruk, herstel en dagelijks functioneren.",
            "Toch is het door volle agenda’s, langdurig zitten, onregelmatige voeding en onvoldoende rust vaak moeilijk om structureel iets te veranderen.",
            "Astrid Sanders ondersteunt organisaties, teams en individuele medewerkers met praktische leefstijlcoaching rondom:",
            [
              "Voeding",
              "Beweging",
              "Slaap",
              "Stress",
              "Herstel",
              "Gedragsverandering",
            ],
            "De begeleiding kan bestaan uit individuele coaching, groepscoaching, workshops of een leefstijlgerichte gezondheidscheck.",
            "Online begeleiding is beschikbaar door heel Nederland. Workshops en andere zakelijke sessies kunnen in overleg op locatie plaatsvinden.",
          ]}
          image={{
            src: "/images/generated/bedrijven_hero_new.png",
            alt: "Astrid Sanders begeleidt een praktische leefstijlworkshop voor medewerkers",
          }}
          ctaLabel="Bespreek de mogelijkheden"
          secondaryCtaLabel="Vraag informatie aan"
        />

        <section className="section recognition-section" aria-labelledby="employability-title">
          <div className="shell">
            <div className="recognition-intro">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="employability-title">
                  Gezonde gewoonten ondersteunen duurzame inzetbaarheid
                </h2>
                <p>
                  Veel medewerkers weten wat gezond gedrag inhoudt. Het toepassen en volhouden
                  ervan tijdens drukke werkdagen is vaak het lastigste onderdeel.
                </p>
                <p>
                  Leefstijlcoaching helpt om algemene gezondheidsadviezen te vertalen naar
                  haalbare acties binnen het werk en dagelijks leven.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/artrose-personal-plan-v2.webp"
                alt="Astrid bespreekt een persoonlijk leefstijlplan met een medewerker aan de overlegtafel"
              />
            </div>

            <div className="recognition-lists recognition-lists--three">
              <Reveal>
                <h3>Veelvoorkomende uitdagingen</h3>
                <p>Medewerkers kunnen te maken hebben met:</p>
                <ul className="check-list">
                  {employeeChallenges.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.05}>
                <h3>Waar coaching bij kan ondersteunen</h3>
                <p>Praktische begeleiding kan medewerkers helpen om:</p>
                <ul className="check-list">
                  {coachingSupport.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <h3>Resultaten:</h3>
                <p>Mogelijke resultaten waar een organisatie aan kan werken:</p>
                <ul className="check-list">
                  {businessResults.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal className="absence-cost-card">
              <p className="eyebrow">Indicatieve verzuimkosten</p>
              <h3>Wat kan één geval van psychisch verzuim kosten?</h3>
              <p>
                Volgens de Arbobalans 2024 van TNO duurt verzuim door psychische klachten
                gemiddeld 63 werkdagen. ArboNed noemt gemiddeld €360 per verzuimdag;
                Nationale-Nederlanden noemt gemiddeld €400 per dag.
              </p>
              <p className="absence-cost-card__calculation">
                <span>63 werkdagen</span>
                <span aria-hidden="true">×</span>
                <span>€360–€400 per dag</span>
                <strong>= €22.680–€25.200 per geval</strong>
              </p>
              <p>
                Dit is een indicatieve berekening. De werkelijke kosten verschillen per medewerker
                en organisatie, onder meer door salaris, vervanging, productiviteitsverlies,
                begeleiding en omzetverlies.
              </p>
              <p className="absence-cost-card__highlight">
                Een preventief leefstijl- of stresstraject is vaak veel goedkoper dan één
                langdurig verzuimgeval. Leefstijlcoaching garandeert geen lager ziekteverzuim of
                kostenbesparing, maar draagt bij aan vitalere, gezondere medewerkers.
              </p>
              <p>
                Leefstijlcoaching vervangt geen bedrijfsarts, medische behandeling, fysiotherapie of
                arbeidsdeskundig advies.
              </p>
              <p>
                Het is aanvullende begeleiding gericht op leefstijl, gedrag en praktische
                uitvoering.
              </p>
              <div className="absence-cost-card__sources">
                <p>Bronnen:</p>
                <ul className="compact-list">
                  <li>
                    <a
                      href="https://publications.tno.nl/publication/34644281/tJVhoMUv/TNO-2025-R11108.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TNO Arbobalans 2024
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.arboned.nl/nieuws/toename-bezoek-bedrijfspsycholoog-door-wachtlijst-reguliere-zorg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ArboNed: gemiddelde kosten per verzuimdag
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nn.nl/nieuws/trendrapport-ziekteverzuim-en-arbeidsongeschiktheid/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Nationale-Nederlanden: Trendrapport Ziekteverzuim &amp;
                      Arbeidsongeschiktheid
                    </a>
                  </li>
                </ul>
              </div>
              <Link className="button cta-inline" href="#gezondheidscheck">
                Bespreek de mogelijkheden
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section trust-section" aria-labelledby="services-title">
          <div className="shell">
            <div className="section-intro-with-media">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="services-title">Leefstijlcoaching afgestemd op jouw organisatie</h2>
                <p>
                  Iedere organisatie heeft andere medewerkers, doelstellingen en aandachtspunten.
                </p>
                <p>
                  Daarom wordt de inhoud afgestemd op de behoefte van het bedrijf in plaats van
                  gewerkt met één vast programma.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/business-tailored-coaching.png"
                alt="Leefstijlcoach en professionals stellen samen een praktisch programma op maat samen"
              />
            </div>

            <div className="pillar-grid pillar-grid--four">
              {businessServices.map((service, index) => (
                <Reveal key={service.title} className="pillar-card" delay={index * 0.04}>
                  <h3>{service.title}</h3>
                  <ContentBlocks blocks={service.blocks} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="audience-title">
          <div className="shell">
            <div className="section-intro-with-media">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="audience-title">Voor bedrijven, teams en zakelijke professionals</h2>
                <p>
                  De zakelijke begeleiding kan worden aangepast aan verschillende organisaties en
                  professionele situaties.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/walking_image.png"
                alt="Zakelijke professionals voeren buiten een ontspannen walking meeting"
              />
            </div>

            <div className="pillar-grid pillar-grid--three">
              {audienceCards.map((card, index) => (
                <Reveal
                  key={card.title}
                  className="pillar-card pillar-card--soft"
                  delay={index * 0.04}
                >
                  <h3>{card.title}</h3>
                  <ContentBlocks blocks={card.blocks} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section process-section business-process"
          aria-labelledby="process-title"
        >
          <div className="shell business-process__layout">
            <Reveal className="section-heading section-heading--narrow business-process__heading">
              <h2 id="process-title">Van eerste gesprek naar een passende aanpak</h2>
            </Reveal>

            <div className="process-steps business-process__steps">
              {processSteps.map((step, index) => (
                <Reveal
                  key={step.title}
                  className="process-step business-process__step"
                  delay={index * 0.05}
                >
                  <span className="process-step__number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="business-process__content">
                    <h3>{step.title}</h3>
                    <ContentBlocks blocks={step.blocks} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section story-section" aria-labelledby="why-astrid-title">
          <div className="shell story-layout">
            <Reveal className="story-heading">
              <h2 id="why-astrid-title">Leefstijlcoaching met professionele bedrijfservaring</h2>
              <Link className="text-link" href={localizeHref("/over-astrid/", locale)}>
                Lees meer over Astrid
                <ArrowRight size={19} weight="regular" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className="story-copy" delay={0.05}>
              <p>
                Voordat ik leefstijlcoach werd, werkte ik jarenlang op het snijvlak van marketing,
                management, communicatie en klantbeleving.
              </p>
              <p>
                Ik werkte onder andere in de financiële sector, bij Center Parcs en in verschillende
                interimfuncties.
              </p>
              <p>
                Daarnaast heb ik ruime ervaring als manager en bestuurder. Zo stuurde ik een
                callcenter aan en ben ik bestuurder van de Nijmeegse Vierdaagse.
              </p>
              <p>
                Daardoor begrijp ik hoe werkdruk, verantwoordelijkheid, organisaties en
                verschillende belangen invloed kunnen hebben op dagelijkse keuzes en gezondheid.
              </p>
              <p>
                Mijn persoonlijke ervaring met reuma en artrose liet mij daarnaast zien hoeveel
                invloed gezondheidsklachten kunnen hebben op energie, werk en dagelijks
                functioneren.
              </p>
              <p>
                Ik combineer deze ervaring met mijn opleiding tot leefstijlcoach bij Sonnevelt
                Opleidingen en mijn aansluiting bij de BLCN.
              </p>
            </Reveal>

            <Reveal className="authority-panel" delay={0.08}>
              <div>
                <h3>Ervaring binnen organisaties</h3>
                <p>
                  Praktische ervaring met communicatie, klantbeleving, leidinggeven, teams en
                  bestuurlijke verantwoordelijkheid.
                </p>
                <h3>Professioneel opgeleid</h3>
                <p>
                  Kennis over voeding, beweging, slaap, stress, herstel, gedragsverandering en
                  duurzame gewoonten.
                </p>
                <h3>Praktisch en persoonlijk</h3>
                <p>Geen algemeen vitaliteitsverhaal of eenmalige inspiratie zonder vervolg.</p>
                <p>
                  De begeleiding wordt vertaald naar concrete acties die passen bij de organisatie
                  en de dagelijkse realiteit van medewerkers.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <FaqHealthCheckSection
          title="Veelgestelde vragen over leefstijlcoaching voor bedrijven"
          faqs={faqs}
          locale={locale}
          source="leefstijlcoaching-bedrijven"
          formTitle="Bespreek de mogelijkheden"
          formDescription="Vertel kort wat jouw organisatie nodig heeft. Astrid neemt persoonlijk contact op om de mogelijkheden te bespreken."
          submitLabel="Bericht versturen"
        />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );

  return localizeReactNode(content, locale);
}

export default function BedrijvenPage() {
  return <BedrijvenPageContent locale="nl" />;
}
