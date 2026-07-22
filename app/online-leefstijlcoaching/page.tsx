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
  title: { absolute: "Online Leefstijlcoaching bij Reuma en Artrose | Astrid" },
  description:
    "Persoonlijke online leefstijlcoaching bij reuma en artrose. Werk praktisch aan voeding, slaap, stress, beweging en duurzame gewoonten.",
  alternates: {
    canonical: "/online-leefstijlcoaching/",
    languages: {
      "nl-NL": "/online-leefstijlcoaching/",
      en: "/en/online-leefstijlcoaching/",
    },
  },
};

const suitableSituations = [
  "Buiten Den Bosch of Noord-Brabant woont",
  "Door reuma of artrose moeite hebt met reizen",
  "Wisselende energie of belastbaarheid ervaart",
  "Coaching wilt combineren met werk of gezin",
  "Regelmatig contact wilt zonder lange reistijd",
  "Rustiger vanuit je eigen omgeving wilt praten",
  "Eerder advies hebt gekregen, maar moeite hebt om dit toe te passen",
  "Ondersteuning zoekt bij het volhouden van veranderingen",
];

const coachingGoals = [
  "Meer structuur in je dagelijkse leefstijl",
  "Gezonder en grotendeels plantaardig eten",
  "Een beter slaap- en herstelritme",
  "Passende beweging opbouwen",
  "Stresssignalen eerder herkennen",
  "Gezonde gewoonten langer volhouden",
  "Meer grip krijgen op je dagelijkse keuzes",
  "Waar mogelijk minder afhankelijk worden van medicatie, uitsluitend in overleg met je behandelend arts",
];

const lifestylePillars = [
  {
    title: "Voeding",
    paragraphs: [
      "Binnen de coaching ligt de nadruk op een gezond en grotendeels plantaardig voedingspatroon.",
      "We kunnen werken aan:",
    ],
    items: [
      "Meer plantaardige producten toevoegen",
      "Maaltijden praktischer samenstellen",
      "Meer regelmaat in eetmomenten brengen",
      "Gezonde keuzes voorbereiden",
      "Omgaan met sociale situaties",
      "Terugval herkennen en opvangen",
      "Veranderingen stap voor stap uitvoeren",
    ],
    footnote:
      "Je hoeft niet direct volledig plantaardig te eten. De aanpak moet haalbaar en vol te houden zijn.",
  },
  {
    title: "Slaap en herstel",
    paragraphs: ["We bekijken onder andere:"],
    items: [
      "Je huidige slaapritme",
      "Gewoonten voor het slapengaan",
      "Balans tussen activiteit en rust",
      "Herstelmomenten gedurende de dag",
      "Het verdelen van energie",
      "Patronen die slaap of herstel kunnen belemmeren",
    ],
  },
  {
    title: "Stress en dagelijkse belasting",
    paragraphs: ["Tijdens de coaching onderzoeken we:"],
    items: [
      "Welke situaties spanning veroorzaken",
      "Hoe je grenzen eerder kunt herkennen",
      "Welke ontspanning bij jou past",
      "Hoe je gezonde gewoonten beschermt tijdens drukke periodes",
      "Hoe je voorkomt dat leefstijlverandering extra druk veroorzaakt",
    ],
  },
  {
    title: "Beweging die bij jou past",
    paragraphs: [
      "Beweging wordt afgestemd op jouw mogelijkheden en belastbaarheid.",
      "Dat kan bijvoorbeeld gaan om:",
    ],
    items: [
      "Meer dagelijkse beweging",
      "Wandelen",
      "Fietsen",
      "Zwemmen",
      "Lichte mobiliteit",
      "Activiteit en rust beter afwisselen",
      "Een haalbare routine opbouwen",
    ],
    footnote:
      "Bij specifieke fysieke beperkingen blijft overleg met je arts of fysiotherapeut belangrijk.",
  },
];

const sessionNeeds = [
  "Een telefoon, tablet of computer",
  "Een stabiele internetverbinding",
  "Een rustige plek om te praten",
  "Eventuele notities over je leefstijl, klachten of vragen",
  "Bereidheid om kleine veranderingen te testen",
];

const onlineBenefits = [
  "Geen reistijd",
  "Coaching vanuit je eigen vertrouwde omgeving",
  "Meer flexibiliteit bij wisselende energie",
  "Mogelijkheid om afspraken rond werk en gezin te plannen",
  "Persoonlijke begeleiding door heel Nederland",
  "Regelmatig contact zonder fysieke afstand",
  "Eenvoudiger vervolgafspraken",
  "Dezelfde persoonlijke aandacht als tijdens een fysieke sessie",
];

const processSteps = [
  {
    title: "Stap 1: Gratis gezondheidscheck",
    paragraphs: ["We beginnen met een kort en vrijblijvend telefoongesprek.", "Je vertelt:"],
    items: [
      "Wat er momenteel speelt",
      "Welke klachten je ervaart",
      "Welke medische begeleiding je krijgt",
      "Wat je al hebt geprobeerd",
      "Waar je dagelijks tegenaan loopt",
      "Wat je graag wilt veranderen",
    ],
    outro: [
      "Ik leg uit hoe mijn aanpak werkt en we bekijken samen of online leefstijlcoaching bij jou past.",
      "Je laat je naam, telefoonnummer en voorkeursmoment achter. Ik neem daarna persoonlijk contact met je op.",
    ],
  },
  {
    title: "Stap 2: Persoonlijke online coaching",
    paragraphs: [
      "Wanneer we besluiten om verder te gaan, stemmen we de begeleiding af op jouw situatie en doelen.",
      "De coaching kan bestaan uit:",
    ],
    items: [
      "Regelmatige videogesprekken",
      "Telefonische gesprekken",
      "Concrete leefstijlafspraken",
      "Persoonlijke oefeningen of aandachtspunten",
      "Evaluatie van je voortgang",
      "Ondersteuning bij terugval",
      "Aanpassing van doelen wanneer nodig",
      "Eventuele ondersteuning naast PlantsForHealth, wanneer passend en formeel bevestigd",
    ],
    outro: [
      "Sommige cliënten zijn met enkele gesprekken geholpen. Een uitgebreider traject kan gemiddeld zes tot negen maanden duren. Er is geen vast standaardpakket voor iedereen.",
    ],
  },
  {
    title: "Stap 3: Zelfstandig verder",
    paragraphs: ["Het doel is dat je steeds beter begrijpt:"],
    items: [
      "Welke gewoonten bij jou passen",
      "Welke stappen haalbaar zijn",
      "Hoe je veranderingen volhoudt",
      "Hoe je reageert op moeilijke periodes",
      "Hoe je zelf bewuste keuzes blijft maken",
      "Wanneer je opnieuw ondersteuning nodig hebt",
    ],
    outro: [
      "Ook na afronding blijft laagdrempelig contact mogelijk wanneer je later opnieuw hulp nodig hebt.",
    ],
  },
];

const faqs = [
  {
    question: "Werkt online leefstijlcoaching hetzelfde als coaching op locatie?",
    answer: [
      "Ja, de inhoud en persoonlijke begeleiding kunnen grotendeels hetzelfde zijn.",
      "Het belangrijkste verschil is dat de gesprekken via video of telefoon plaatsvinden. Doelen, acties en voortgang worden nog steeds persoonlijk besproken.",
    ],
  },
  {
    question: "Is online coaching geschikt bij reuma of artrose?",
    answer: [
      "Ja, online coaching kan geschikt zijn voor mensen met reuma of artrose die praktische ondersteuning willen bij leefstijlverandering.",
      "De coaching vervangt geen medische behandeling en wordt afgestemd op jouw belastbaarheid en situatie.",
    ],
  },
  {
    question: "Moet ik technisch ervaren zijn?",
    answer: [
      "Nee. Je hoeft alleen een telefoon, tablet of computer met internetverbinding te kunnen gebruiken.",
      "Vooraf spreken we af welke manier van contact voor jou het eenvoudigst is.",
    ],
  },
  {
    question: "Kan het volledige traject online plaatsvinden?",
    answer: [
      "Ja, het volledige traject kan in veel gevallen online plaatsvinden.",
      "Een fysieke eerste ontmoeting kan wenselijk zijn wanneer dit praktisch mogelijk is, maar is niet noodzakelijk voor iedere cliënt.",
    ],
  },
  {
    question: "Kan ik starten terwijl ik medicatie gebruik?",
    answer: [
      "Ja. Leefstijlcoaching kan naast medicatie en reguliere medische behandeling plaatsvinden.",
      "Medicatie verander of stop je nooit zelfstandig. Dit bespreek je altijd met je behandelend arts.",
    ],
  },
  {
    question: "Hoe vaak zijn de online gesprekken?",
    answer: [
      "De frequentie wordt afgestemd op je situatie, doelen en behoefte aan ondersteuning.",
      "Er is nog geen verplicht standaardritme. Tijdens de gezondheidscheck bespreken we welke vorm waarschijnlijk passend is.",
    ],
  },
  {
    question: "Hoe lang duurt een online coachingstraject?",
    answer: [
      "Dat verschilt per persoon.",
      "Sommige cliënten hebben voldoende aan enkele gesprekken. Een uitgebreider traject kan gemiddeld zes tot negen maanden duren.",
    ],
  },
  {
    question: "Wordt online leefstijlcoaching vergoed?",
    answer: [
      "Dit hangt af van je zorgverzekeraar, werkgever, registratie en persoonlijke situatie.",
      "Controleer vooraf of vergoeding mogelijk is. Hierover wordt geen vaste belofte gedaan voordat Astrid’s registratie- en vergoedingsmogelijkheden definitief zijn bevestigd.",
    ],
  },
];

export function OnlineCoachingPageContent({ locale }: { locale: Locale }) {
  const content = (
    <div lang={locale}>
      <main id="main-content">
        <PageHero
          locale={locale}
          title="Online leefstijlcoaching bij reuma en artrose"
          paragraphs={[
            "Wil je werken aan een gezondere leefstijl, maar woon je niet in de omgeving van Den Bosch of is regelmatig reizen lastig door pijn, stijfheid, vermoeidheid of een druk dagelijks leven?",
            "Met online leefstijlcoaching krijg je persoonlijke begeleiding vanuit je eigen omgeving.",
            "Samen kijken we naar voeding, slaap, stress, beweging en dagelijkse gewoonten die passen bij jouw situatie en mogelijkheden.",
            "Ik ben Astrid Sanders, geaccrediteerd leefstijlcoach en ervaringsdeskundige. Mijn begeleiding richt zich voornamelijk op mensen met reuma en artrose die naast hun reguliere medische zorg praktisch aan hun leefstijl willen werken.",
            "Online coaching is beschikbaar door heel Nederland.",
          ]}
          image={{
            src: "/images/generated/online-leefstijlcoaching-hero.webp",
            alt: "Astrid Sanders voert een persoonlijk online coachingsgesprek",
            mobilePosition: "68% center",
          }}
        />

        <section className="section recognition-section" aria-labelledby="recognition-title">
          <div className="shell">
            <div className="recognition-intro">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="recognition-title">
                  Persoonlijke begeleiding zonder dat je iedere keer hoeft te reizen
                </h2>
                <p>
                  Online leefstijlcoaching kan geschikt zijn wanneer je persoonlijke ondersteuning
                  wilt, maar fysieke afspraken niet altijd praktisch zijn.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/online-coaching.webp"
                alt="Een leefstijlcoach voert vanuit een rustige werkplek een online gesprek"
              />
            </div>

            <div className="recognition-lists">
              <Reveal>
                <h3>Online coaching kan passend zijn wanneer je:</h3>
                <ul className="check-list">
                  {suitableSituations.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.05}>
                <h3>Mogelijke doelen van de coaching</h3>
                <p>We kunnen onder andere werken aan:</p>
                <ul className="check-list">
                  {coachingGoals.map((item) => (
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
                Online leefstijlcoaching vervangt geen medische diagnose, behandeling,
                fysiotherapie of dieetbehandeling.
              </p>
              <Link className="button cta-inline" href="#gezondheidscheck">
                Gratis gezondheidscheck aanvragen
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section trust-section" aria-labelledby="pillars-title">
          <div className="shell">
            <div className="section-intro-with-media">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="pillars-title">Online werken aan voeding, slaap, stress en beweging</h2>
                <p>Online coaching betekent niet dat je alleen algemene tips ontvangt.</p>
                <p>
                  We bespreken jouw situatie persoonlijk en vertalen inzichten naar concrete acties
                  die passen binnen jouw dagelijks leven.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/online-lifestyle-pillars.webp"
                alt="Een rustige thuisomgeving met plantaardige voeding, wandelschoenen, een notitieboek en een slaapmasker"
              />
            </div>

            <div className="pillar-grid pillar-grid--four">
              {lifestylePillars.map((pillar, index) => (
                <Reveal key={pillar.title} className="pillar-card" delay={index * 0.04}>
                  <h3>{pillar.title}</h3>
                  {pillar.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <ul className="compact-list">
                    {pillar.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {pillar.footnote ? <p>{pillar.footnote}</p> : null}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="practical-title">
          <div className="shell">
            <div className="section-intro-with-media">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="practical-title">Persoonlijk contact vanuit je eigen omgeving</h2>
                <p>
                  Online leefstijlcoaching vindt plaats via videogesprekken of telefonisch contact,
                  afhankelijk van wat passend en prettig is.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/online-home-session.webp"
                alt="Een cliënt voert vanuit huis een persoonlijk videogesprek met haar leefstijlcoach"
              />
            </div>

            <div className="recognition-lists">
              <Reveal>
                <p>Voor de gesprekken heb je alleen nodig:</p>
                <ul className="check-list">
                  {sessionNeeds.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.05}>
                <h3>Voordelen van online leefstijlcoaching</h3>
                <p>Online begeleiding biedt:</p>
                <ul className="check-list">
                  {onlineBenefits.map((item) => (
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
                Een eerste persoonlijke ontmoeting kan worden besproken wanneer dat praktisch en
                wenselijk is. Het vervolgtraject kan daarna online plaatsvinden. Astrid heeft
                bevestigd dat zij landelijk werkt en dat het grootste deel van een traject online
                kan worden uitgevoerd.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="process-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="process-title">Zo werkt online leefstijlcoaching</h2>
            </Reveal>

            <div className="process-steps">
              {processSteps.map((step, index) => (
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

        <section className="section story-section" aria-labelledby="why-astrid-title">
          <div className="shell story-layout">
            <Reveal className="story-heading">
              <h2 id="why-astrid-title">
                Persoonlijke begeleiding van iemand die het zelf heeft doorgemaakt
              </h2>
              <Link className="text-link" href={localizeHref("/over-astrid/", locale)}>
                Lees meer over Astrid
                <ArrowRight size={19} weight="regular" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className="story-copy" delay={0.05}>
              <p>Ik heb zelf jarenlang geleefd met artrose en ernstige reumatische klachten.</p>
              <p>
                Mijn klachten hadden invloed op bewegen, sporten, energie en dagelijkse
                activiteiten. Op het moeilijkste moment kon ik nauwelijks meer lopen en waren
                verschillende gewrichten ontstoken.
              </p>
              <p>
                Na meerdere methodes te hebben geprobeerd, begon ik in 2024 met een wetenschappelijk
                onderbouwde leefstijlaanpak waarin plantaardige voeding een belangrijk onderdeel
                vormde.
              </p>
              <p>
                Onder begeleiding van mijn reumatoloog kon mijn medicatie later stap voor stap
                worden afgebouwd.
              </p>
              <p className="story-copy__important">
                Mijn persoonlijke resultaat is geen garantie voor anderen. Mijn ervaring heeft mij
                wel geleerd hoeveel tijd, structuur en ondersteuning een duurzame
                leefstijlverandering vraagt.
              </p>
              <p>Daarom heb ik de opleiding tot leefstijlcoach bij Sonnevelt Opleidingen afgerond.</p>
            </Reveal>

            <Reveal className="authority-panel" delay={0.08}>
              <div>
                <h3>Ervaringsdeskundige</h3>
                <p>
                  Ik begrijp hoe klachten, vermoeidheid en wisselende belastbaarheid invloed hebben
                  op dagelijkse keuzes.
                </p>
                <h3>Professioneel opgeleid</h3>
                <p>
                  Mijn begeleiding combineert kennis over voeding, slaap, stress, beweging en
                  gedragsverandering.
                </p>
                <h3>Praktisch en persoonlijk</h3>
                <p>
                  Geen wondermiddelen, extreme regels of zweverige aanpak. We werken aan concrete
                  veranderingen die bij jouw leven passen.
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

        <FaqHealthCheckSection
          title="Veelgestelde vragen over online leefstijlcoaching"
          faqs={faqs}
          locale={locale}
        />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );

  return localizeReactNode(content, locale);
}

export default function OnlineCoachingPage() {
  return <OnlineCoachingPageContent locale="nl" />;
}
