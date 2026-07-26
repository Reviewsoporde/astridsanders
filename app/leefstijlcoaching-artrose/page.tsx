import { ArrowRight, ArrowSquareOut, Check } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { EditorialSectionImage } from "@/components/editorial-section-image";
import { FaqHealthCheckSection } from "@/components/faq-health-check-section";
import { PageHero } from "@/components/page-hero";
import { PricingSection } from "@/components/pricing-section";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { localizeHref, localizeReactNode, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Leefstijlcoaching bij Artrose",
  description:
    "Persoonlijke leefstijlcoaching bij artrose in Den Bosch en online. Werk praktisch aan voeding, beweging, slaap en duurzame gewoonten.",
  alternates: {
    canonical: "/leefstijlcoaching-artrose/",
    languages: {
      "nl-NL": "/leefstijlcoaching-artrose/",
      en: "/en/leefstijlcoaching-artrose/",
    },
  },
};

const physicalComplaints = [
  "Pijnlijke of stijve gewrichten",
  "Opstartpijn na rust of slapen",
  "Minder bewegingsvrijheid",
  "Gevoelige knieën, heupen, handen of andere gewrichten",
  "Vermoeidheid na dagelijkse activiteiten",
  "Moeite met langer lopen, staan of sporten",
];

const dailyChallenges = [
  "Je gaat beweging steeds vaker vermijden",
  "Je weet niet goed welke activiteit nog verstandig is",
  "Je vindt het moeilijk om een gezonde routine vol te houden",
  "Je voelt je onzeker over voeding en leefstijl",
  "Je dagelijkse energie en belastbaarheid wisselen",
  "Je mist begeleiding die rekening houdt met jouw mogelijkheden",
];

const lifestylePillars = [
  {
    title: "Voeding bij artrose",
    paragraphs: [
      "Binnen de coaching kijken we naar een gezond en grotendeels plantaardig voedingspatroon.",
      "Het doel is niet om een streng dieet op te leggen. We onderzoeken welke praktische keuzes haalbaar zijn en hoe je deze kunt volhouden.",
      "Onderwerpen kunnen zijn:",
    ],
    items: [
      "Meer groenten, fruit, peulvruchten en volkoren producten",
      "Meer variatie in dagelijkse maaltijden",
      "Plantaardige keuzes stap voor stap uitbreiden",
      "Een regelmatiger eetritme ontwikkelen",
      "Gezonde maaltijden voorbereiden",
      "Omgaan met sociale momenten en terugval",
    ],
    footnote:
      "Wanneer gewichtsverlies medisch relevant is, wordt dit zorgvuldig en realistisch benaderd. Bij complexe voedingsvragen of medische dieetbehandeling blijft begeleiding door een arts of diëtist belangrijk.",
  },
  {
    title: "Bewegen met artrose",
    paragraphs: [
      "Wanneer bewegen pijn doet, is het begrijpelijk dat je minder actief wordt. Langdurig vermijden van beweging kan het echter steeds moeilijker maken om actief te blijven.",
      "Daarom zoeken we naar beweging die past bij jouw belastbaarheid en medische situatie.",
      "Dat kan bijvoorbeeld bestaan uit:",
    ],
    items: [
      "Wandelen",
      "Fietsen",
      "Zwemmen",
      "Lichte mobiliteitsoefeningen",
      "Dagelijkse beweging rustig opbouwen",
      "Activiteit en herstel beter afwisselen",
      "Werken aan behoud van spierkracht",
    ],
    footnote:
      "De coaching vervangt geen fysiotherapie of medisch beweegadvies. Bij specifieke beperkingen stem je beweging af met je arts of fysiotherapeut.",
  },
  {
    title: "Slaap en herstel",
    paragraphs: [
      "Pijn en stijfheid kunnen je slaap beïnvloeden. Onvoldoende slaap kan vervolgens invloed hebben op je energie, motivatie en vermogen om gezonde gewoonten vol te houden.",
      "We kijken onder andere naar:",
    ],
    items: [
      "Je slaapritme",
      "Gewoonten voor het slapengaan",
      "De balans tussen activiteit en herstel",
      "Rustmomenten gedurende de dag",
      "Het verdelen van energie over dagelijkse activiteiten",
    ],
  },
  {
    title: "Stress en dagelijkse belasting",
    paragraphs: [
      "Stress veroorzaakt artrose niet, maar langdurige spanning kan invloed hebben op slaap, herstel, energie en de manier waarop je lichamelijke klachten ervaart.",
      "We onderzoeken:",
    ],
    items: [
      "Welke situaties spanning veroorzaken",
      "Hoe je grenzen eerder herkent",
      "Hoe je herstelmomenten inbouwt",
      "Welke ontspanning bij jou past",
      "Hoe je veranderingen uitvoerbaar houdt",
    ],
  },
];

const guidanceBlocks = [
  {
    title: "We brengen jouw situatie in kaart",
    intro: "Tijdens de eerste gesprekken bespreken we:",
    items: [
      "Waar je artroseklachten ervaart",
      "Welke dagelijkse activiteiten moeilijk zijn",
      "Hoe je momenteel eet, beweegt en slaapt",
      "Welke medische of fysiotherapeutische begeleiding je krijgt",
      "Wat je al hebt geprobeerd",
      "Welke medicatie je gebruikt",
      "Wat je graag wilt verbeteren",
    ],
  },
  {
    title: "We kiezen haalbare eerste stappen",
    paragraphs: [
      "Je hoeft niet alles tegelijk te veranderen.",
      "We bepalen samen welke acties praktisch uitvoerbaar zijn en binnen jouw dagelijks leven passen.",
    ],
    intro: "Dat kan bijvoorbeeld gaan om:",
    items: [
      "Vaker plantaardig eten",
      "Dagelijkse beweging beter verdelen",
      "Werken aan behoud van spierkracht",
      "Een rustiger slaapritme ontwikkelen",
      "Een vaste wandelroutine opbouwen",
      "Maaltijden vooruit plannen",
      "Meer balans creëren tussen activiteit en herstel",
    ],
  },
  {
    title: "We werken aan volhouden",
    paragraphs: [
      "Een verandering heeft alleen waarde wanneer deze ook op langere termijn uitvoerbaar blijft.",
    ],
    intro: "Daarom besteden we aandacht aan:",
    items: [
      "Gewoonten en routines",
      "Motivatie",
      "Planning",
      "Terugval",
      "Pijnlijke of vermoeiende dagen",
      "Realistische verwachtingen",
      "Kleine stappen zichtbaar maken",
      "Zelfstandig keuzes leren maken",
    ],
  },
];

const processSteps = [
  {
    title: "Stap 1: Gratis gezondheidscheck",
    paragraphs: ["We beginnen met een kort en vrijblijvend telefoongesprek.", "Je vertelt:"],
    items: [
      "Welke klachten en beperkingen je ervaart",
      "Welke dagelijkse activiteiten moeilijk zijn",
      "Wat je al hebt geprobeerd",
      "Welke ondersteuning je momenteel krijgt",
      "Wat je graag wilt veranderen",
    ],
    outro: [
      "Ik leg uit hoe mijn begeleiding werkt en we bekijken samen of leefstijlcoaching bij jouw situatie past.",
    ],
  },
  {
    title: "Stap 2: Persoonlijke coaching",
    paragraphs: [
      "Wanneer we besluiten om verder te gaan, stemmen we de begeleiding af op jouw doelen en mogelijkheden.",
      "De coaching kan:",
    ],
    items: [
      "Online plaatsvinden",
      "Persoonlijk plaatsvinden",
      "Een combinatie van beide zijn",
      "Uit een losse intake bestaan",
      "Uit afzonderlijke coachingsgesprekken bestaan",
      "Als 12-weken traject worden gevolgd",
      "Daarna worden verlengd wanneer aanvullende ondersteuning nodig is",
    ],
  },
  {
    title: "Stap 3: Zelfstandig verder",
    paragraphs: [
      "Het doel is dat je begrijpt welke gewoonten bij jou passen en dat je deze zelfstandig kunt blijven toepassen.",
      "Mogelijke doelen zijn:",
    ],
    items: [
      "Meer grip op je dagelijkse leefstijl",
      "Bewuster omgaan met belasting en herstel",
      "Beweging beter inpassen",
      "Werken aan een gezond gewicht en behoud van spierkracht",
      "Gezondere voedingskeuzes volhouden",
      "Meer vertrouwen krijgen in wat je zelf kunt beïnvloeden",
      "Meer structuur en energie in het dagelijks leven",
    ],
    outro: [
      "Ook na het traject kan aanvullende ondersteuning worden besproken wanneer dat nodig is.",
    ],
  },
];

const faqs = [
  {
    question: "Kan leefstijl artrose verminderen?",
    answer: [
      "Leefstijl kan artrose niet genezen of beschadigd kraakbeen herstellen.",
      "Een passende leefstijl kan je wel ondersteunen bij beweging, lichaamsgewicht, spierkracht, herstel, energie en het omgaan met dagelijkse beperkingen.",
    ],
  },
  {
    question: "Welke voeding past bij artrose?",
    answer: [
      "Er bestaat geen universeel dieet voor artrose.",
      "Binnen de coaching kijken we naar een gezond en grotendeels plantaardig voedingspatroon dat bij jouw situatie past en dat je op langere termijn kunt volhouden.",
    ],
  },
  {
    question: "Moet ik volledig plantaardig eten?",
    answer: [
      "Nee. Het is niet nodig om direct volledig plantaardig te eten.",
      "We kijken welke plantaardige keuzes haalbaar zijn en bouwen veranderingen stap voor stap op.",
    ],
  },
  {
    question: "Is bewegen verstandig bij artrose?",
    answer: [
      "Beweging kan waardevol zijn wanneer deze past bij je belastbaarheid en medische situatie.",
      "Bij specifieke beperkingen, pijn of twijfel overleg je met je arts of fysiotherapeut.",
    ],
  },
  {
    question: "Kan leefstijlcoaching stijve gewrichten verminderen?",
    answer: [
      "Leefstijlcoaching kan geen vermindering van stijfheid garanderen.",
      "De begeleiding kan je wel helpen om beweging, herstel, slaap en dagelijkse gewoonten zo in te richten dat je beter met stijfheid en beperkingen leert omgaan.",
    ],
  },
  {
    question: "Kan ik coaching volgen naast fysiotherapie?",
    answer: [
      "Ja. Leefstijlcoaching kan aanvullend plaatsvinden naast fysiotherapie, huisartsenzorg of behandeling door een specialist.",
      "De leefstijlcoach neemt de medische of fysiotherapeutische behandeling niet over.",
    ],
  },
  {
    question: "Kan leefstijlcoaching helpen bij overgewicht en artrose?",
    answer: [
      "Leefstijlcoaching kan ondersteunen bij het ontwikkelen van gezondere voedings- en beweeggewoonten en het werken aan een gezond gewicht.",
      "Wanneer er sprake is van medische risico’s of een mogelijke GLI-indicatie, moet eerst worden bevestigd welk erkend programma en welke vergoeding van toepassing zijn.",
    ],
  },
  {
    question: "Hoe lang duurt een traject?",
    answer: [
      "Je kunt kiezen voor een losse intake, een afzonderlijk coachingsgesprek of een traject van twaalf weken.",
      "Wanneer daarna aanvullende begeleiding nodig is, kan een vervolgtraject worden besproken.",
    ],
  },
  {
    question: "Kan de coaching online plaatsvinden?",
    answer: [
      "Ja. Online leefstijlcoaching is beschikbaar voor cliënten door heel Nederland.",
      "Een fysieke ontmoeting kan worden besproken wanneer dit praktisch en wenselijk is, maar veel gesprekken kunnen online plaatsvinden.",
    ],
  },
  {
    question: "Wordt leefstijlcoaching vergoed?",
    answer: [
      "Dat hangt af van je zorgverzekering, werkgever, registratie en persoonlijke situatie.",
      "Controleer vooraf of vergoeding mogelijk is. Er wordt hierover geen vaste belofte gedaan.",
    ],
  },
];

export function ArtrosePageContent({ locale }: { locale: Locale }) {
  const content = (
    <div lang={locale}>
      <main id="main-content">
        <PageHero
          locale={locale}
          title="Leefstijlcoaching bij artrose in Den Bosch en online"
          paragraphs={[
            "Artrose kan bewegen, sporten en dagelijkse activiteiten steeds moeilijker maken. Pijn, stijfheid en beperkte mobiliteit kunnen ertoe leiden dat je minder actief wordt en steeds minder vertrouwen krijgt in wat je lichaam aankan.",
            "Met persoonlijke leefstijlcoaching onderzoeken we welke praktische veranderingen in voeding, beweging, slaap, stress en dagelijkse gewoonten bij jouw situatie passen.",
            "Ik ben Astrid Sanders, geaccrediteerd leefstijlcoach en ervaringsdeskundige. Ik heb zelf jarenlang artroseklachten in mijn knieën ervaren en weet hoe frustrerend het is wanneer pijn en stijfheid bepalen wat je wel en niet kunt doen.",
            "De coaching is beschikbaar in Den Bosch en omgeving en online door heel Nederland.",
          ]}
          image={{
            src: "/images/generated/leefstijlcoaching-artrose-hero.png",
            alt: "Astrid Sanders maakt een rustige wandeling door de duinen",
          }}
        />

        <section className="section recognition-section" aria-labelledby="recognition-title">
          <div className="shell">
            <div className="recognition-intro">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="recognition-title">Herken je deze klachten bij artrose?</h2>
                <p>
                  Artrose kan zich bij iedereen anders uiten. De ene persoon ervaart vooral
                  stijfheid bij het opstaan, terwijl iemand anders moeite heeft met lopen,
                  traplopen, sporten of langdurig zitten.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/artrose-movement.png"
                alt="Een vrouw wandelt ontspannen over een houten pad door de duinen"
              />
            </div>

            <div className="recognition-lists artrose-recognition-lists">
              <Reveal className="artrose-recognition-panel">
                <div className="artrose-recognition-panel__heading">
                  <span aria-hidden="true">01</span>
                  <h3>Mogelijke lichamelijke klachten</h3>
                </div>
                <ul className="check-list">
                  {physicalComplaints.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="artrose-recognition-panel" delay={0.05}>
                <div className="artrose-recognition-panel__heading">
                  <span aria-hidden="true">02</span>
                  <h3>Wat dit in het dagelijks leven kan betekenen</h3>
                </div>
                <ul className="check-list">
                  {dailyChallenges.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal className="section-note artrose-recognition-note">
              <div className="artrose-recognition-note__copy">
                <p>
                  Leefstijlcoaching kan passend zijn wanneer je naast reguliere medische zorg wilt
                  werken aan voeding, beweging, slaap, herstel en duurzame gewoonten.
                </p>
                <p>
                  De coaching vervangt geen medische behandeling of fysiotherapie. Het helpt je om
                  leefstijladviezen praktisch toe te passen binnen jouw dagelijks leven.
                </p>
              </div>
              <Link className="button cta-inline" href="#gezondheidscheck">
                Bespreek jouw situatie tijdens een gratis gezondheidscheck
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section trust-section" aria-labelledby="lifestyle-title">
          <div className="shell">
            <div className="section-intro-with-media">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="lifestyle-title">Welke invloed kan leefstijl hebben bij artrose?</h2>
                <p>Leefstijlcoaching geneest artrose niet en kan beschadigd kraakbeen niet herstellen.</p>
                <p>
                  Een passende leefstijl kan je wel helpen om bewuster om te gaan met beweging,
                  voeding, lichaamsgewicht, herstel, energie en dagelijkse belasting.
                </p>
                <p>
                  We kijken niet naar één los onderdeel. Voeding, beweging, slaap, stress en gewoonten
                  beïnvloeden elkaar en moeten samen passen binnen jouw dagelijks leven.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/artrose-lifestyle-overview.png"
                alt="Een vrouw bereidt na een wandeling een plantaardige maaltijd in haar keuken"
              />
            </div>

            <div className="lifestyle-pillars">
              {lifestylePillars.map((pillar, index) => (
                <Reveal key={pillar.title} className="lifestyle-pillar" delay={index * 0.04}>
                  <details name="artrose-lifestyle-pillars">
                    <summary>
                      <span className="lifestyle-pillar__number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3>{pillar.title}</h3>
                      <span className="lifestyle-pillar__preview">{pillar.paragraphs[0]}</span>
                      <span className="lifestyle-pillar__toggle" aria-hidden="true" />
                    </summary>

                    <div className="lifestyle-pillar__content">
                      <div className="lifestyle-pillar__copy">
                        {pillar.paragraphs.slice(1).map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <ul className="compact-list">
                        {pillar.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {pillar.footnote ? (
                        <p className="lifestyle-pillar__note">{pillar.footnote}</p>
                      ) : null}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="guidance-title">
          <div className="shell">
            <div className="section-intro-with-media guidance-intro">
              <Reveal className="section-heading section-heading--narrow guidance-intro__copy">
                <h2 id="guidance-title">Een leefstijlplan dat past bij jouw mogelijkheden</h2>
                <p>
                  Iedere persoon met artrose heeft andere klachten, gewrichten, verantwoordelijkheden
                  en doelen.
                </p>
                <p>
                  Daarom krijg je geen standaarddieet of algemeen beweegschema. We beginnen bij jouw
                  situatie en bepalen welke veranderingen haalbaar en relevant zijn.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/artrose-personal-plan.png"
                alt="Twee vrouwen stellen samen een haalbaar leefstijlplan op"
              />
            </div>

            <div className="pillar-grid pillar-grid--three">
              {guidanceBlocks.map((block, index) => (
                <Reveal key={block.title} className="pillar-card pillar-card--soft" delay={index * 0.04}>
                  <h3>{block.title}</h3>
                  {block.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {block.intro ? <p>{block.intro}</p> : null}
                  <ul className="compact-list">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section story-section" aria-labelledby="why-astrid-title">
          <div className="shell story-layout">
            <Reveal className="story-heading">
              <h2 id="why-astrid-title">Begeleiding van iemand die artrose zelf heeft ervaren</h2>
              <Link className="text-link" href={localizeHref("/over-astrid/", locale)}>
                Lees het volledige verhaal van Astrid
                <ArrowRight size={19} weight="regular" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className="story-copy" delay={0.05}>
              <p>
                Ik had al langere tijd artrose in mijn knieën. Tijdens het tennissen werden mijn
                knieën regelmatig dik en pijnlijk. Soms kon ik daardoor niet verder spelen.
              </p>
              <p>
                Later kreeg ik daarnaast ernstige reumatische klachten. Binnen enkele maanden werd
                bewegen zo moeilijk dat ik nauwelijks meer de straat uit kon lopen.
              </p>
              <p>
                Die ervaring heeft mij laten zien hoeveel invloed gewrichtsklachten kunnen hebben op
                beweging, zelfstandigheid, energie en kwaliteit van leven.
              </p>
              <p>
                Ik heb jarenlang verschillende methodes en leefstijlaanpassingen geprobeerd.
                Uiteindelijk ontdekte ik hoe belangrijk een consistente, persoonlijke en goed
                begeleide leefstijlverandering kan zijn.
              </p>
              <p>
                Daarom heb ik de opleiding tot leefstijlcoach bij Sonnevelt Opleidingen gevolgd.
                Daarnaast ben ik aangesloten bij de BLCN.
              </p>
              <p>
                Nu combineer ik mijn persoonlijke ervaring met professionele kennis over voeding,
                beweging, slaap, stress en gedragsverandering.
              </p>
              <p className="story-copy__important">
                Mijn persoonlijke resultaten zijn geen garantie voor anderen. Mijn ervaring helpt
                mij wel om te begrijpen hoe lastig verandering kan zijn wanneer pijn en vermoeidheid
                steeds opnieuw invloed hebben op je dag.
              </p>
            </Reveal>

            <Reveal className="authority-panel" delay={0.08}>
              <div>
                <h3>Ervaringsdeskundige</h3>
                <p>
                  Ik weet hoe frustrerend het is wanneer gewrichtsklachten beperken wat je wilt
                  doen.
                </p>
                <h3>Geaccrediteerd leefstijlcoach</h3>
                <p>
                  Mijn begeleiding combineert professionele leefstijlkennis met een praktische en
                  persoonlijke aanpak.
                </p>
                <h3>Geen zweverige of extreme aanpak</h3>
                <p>
                  Geen wondermiddelen, streng standaardprotocol of onrealistische beloftes. We
                  werken aan concrete veranderingen die passen bij jouw mogelijkheden.
                </p>
              </div>
              <a
                className="text-link"
                href="https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan"
                target="_blank"
                rel="noreferrer"
              >
                Bekijk het interview met Astrid bij Omroep Brabant
                <ArrowSquareOut size={19} weight="regular" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="process-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="process-title">Zo werkt leefstijlcoaching bij artrose</h2>
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

        <PricingSection locale={locale} />

        <FaqHealthCheckSection
          title="Veelgestelde vragen over leefstijlcoaching bij artrose"
          faqs={faqs}
          locale={locale}
        />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );

  return localizeReactNode(content, locale);
}

export default function ArtrosePage() {
  return <ArtrosePageContent locale="nl" />;
}
