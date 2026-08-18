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
  title: "Leefstijlcoaching bij Reuma",
  description:
    "Leefstijlcoaching bij reuma, landelijk online en in 's-Hertogenbosch. Werk praktisch aan voeding, slaap, stress, beweging en duurzame gewoonten.",
  alternates: {
    canonical: "/leefstijlcoaching-reuma/",
  },
};

const physicalComplaints = [
  "Gewrichtspijn en stijfheid",
  "Terugkerende ontstekingen of opvlammingen",
  "Dikke of gevoelige handen, voeten of knieën",
  "Vermoeidheid en weinig energie",
  "Moeite met lopen, sporten of dagelijkse activiteiten",
  "Wisselende klachten die moeilijk te voorspellen zijn",
];

const dailyChallenges = [
  "Je weet niet goed welke leefstijlkeuzes bij jou passen",
  "Je hebt al verschillende methodes of voedingspatronen geprobeerd",
  "Gezonde veranderingen zijn moeilijk vol te houden",
  "Je dagelijkse belastbaarheid wisselt sterk",
  "Je mist een duidelijk en persoonlijk plan",
  "Je wilt meer invloed krijgen op je dagelijkse leefstijl",
];

const desiredOutcomes = [
  "Minder pijn",
  "Meer energie",
  "Minder afhankelijk van medicatie",
  "Meer grip op je dagelijkse leefstijl",
  "Een betere kwaliteit van leven",
];

const lifestylePillars = [
  {
    title: "Voeding bij reuma",
    paragraphs: [
      "We kijken naar een gezond en grotendeels plantaardig voedingspatroon dat past bij jouw dagelijks leven.",
      "We zoeken naar haalbare aanpassingen die je ook op langere termijn kunt volhouden.",
      "Onderwerpen kunnen zijn:",
    ],
    items: [
      "Meer plantaardige producten gebruiken",
      "Meer variatie in maaltijden aanbrengen",
      "Een regelmatiger eetpatroon ontwikkelen",
      "Gezonde maaltijden voorbereiden",
      "Sociale situaties en terugval bespreekbaar maken",
      "Gewoonten stap voor stap aanpassen",
    ],
  },
  {
    title: "Stress en mentale gezondheid",
    paragraphs: [
      "Langdurige stress kan invloed hebben op slaap, energie, herstel en het volhouden van gezonde gewoonten.",
      "We kijken onder andere naar:",
    ],
    items: [
      "Situaties die spanning veroorzaken",
      "Grenzen herkennen en bewaken",
      "Herstelmomenten inbouwen",
      "Ontspanning die bij jou past",
      "Omgaan met drukke of moeilijke periodes",
    ],
  },
  {
    title: "Slaap en vermoeidheid",
    paragraphs: [
      "Vermoeidheid bij reuma kan een grote invloed hebben op dagelijkse activiteiten.",
      "We onderzoeken:",
    ],
    items: [
      "Je slaapritme",
      "Gewoonten voor het slapengaan",
      "De balans tussen activiteit en rust",
      "Herstelmomenten gedurende de dag",
      "Het verdelen van energie over dagelijkse activiteiten",
    ],
  },
  {
    title: "Bewegen met reuma",
    paragraphs: [
      "Beweging hoeft niet intensief te zijn om waardevol te zijn. De activiteit moet passen bij jouw mogelijkheden, belastbaarheid en medische situatie.",
      "We kunnen kijken naar:",
    ],
    items: [
      "Gedoseerd bewegen",
      "Wandelen en lichte dagelijkse activiteit",
      "Mobiliteit en flexibiliteit",
      "Herstel na inspanning",
      "Een haalbare balans tussen beweging en rust",
    ],
    footnote: "Bij specifieke fysieke beperkingen blijft afstemming met je arts of fysiotherapeut belangrijk.",
  },
];

const guidanceBlocks = [
  {
    title: "Jouw huidige situatie",
    intro: "We bespreken:",
    items: [
      "Welke klachten en beperkingen je ervaart",
      "Hoe je dagelijkse leefstijl eruitziet",
      "Welke medische begeleiding je ontvangt",
      "Welke medicatie je gebruikt",
      "Wat je al hebt geprobeerd",
      "Waar je in het dagelijks leven tegenaan loopt",
      "Wat je graag wilt veranderen",
    ],
  },
  {
    title: "Een haalbaar leefstijlplan",
    paragraphs: [
      "We kiezen niet direct tien veranderingen tegelijk.",
      "Samen bepalen we welke eerste stappen haalbaar en relevant zijn.",
    ],
    intro: "Dat kan bijvoorbeeld gaan om:",
    items: [
      "Maaltijden aanpassen",
      "Meer structuur in de dag aanbrengen",
      "Een beter slaapritme ontwikkelen",
      "Gedoseerd bewegen",
      "Stressmomenten eerder herkennen",
      "Gezonde gewoonten stap voor stap opbouwen",
    ],
  },
  {
    title: "Ondersteuning bij het volhouden",
    paragraphs: ["Weten wat gezond is, betekent niet automatisch dat verandering eenvoudig is."],
    intro: "Daarom besteden we aandacht aan:",
    items: [
      "Motivatie",
      "Planning",
      "Gewoonten",
      "Terugval",
      "Sociale situaties",
      "Omgaan met vermoeidheid of moeilijke dagen",
      "Kleine verbeteringen zichtbaar maken",
      "Zelfstandig keuzes leren maken",
    ],
  },
];

const processSteps = [
  {
    title: "Stap 1: Gratis gezondheidscheck",
    paragraphs: ["We beginnen met een kort en vrijblijvend telefoongesprek.", "Je vertelt:"],
    items: [
      "Welke klachten en uitdagingen je ervaart",
      "Wat je al hebt geprobeerd",
      "Welke begeleiding je momenteel krijgt",
      "Waar je dagelijks tegenaan loopt",
      "Wat je graag wilt veranderen",
    ],
    outro: [
      "Ik leg uit hoe mijn begeleiding werkt en we bekijken samen of mijn aanpak bij jouw situatie past.",
    ],
  },
  {
    title: "Stap 2: Persoonlijke coaching",
    paragraphs: [
      "Wanneer we besluiten om samen verder te gaan, bepalen we welke vorm van begeleiding passend is.",
      "De coaching kan:",
    ],
    items: [
      "Online plaatsvinden",
      "Persoonlijk plaatsvinden",
      "Een combinatie van beide zijn",
      "Uit een losse intake bestaan",
      "Uit afzonderlijke coachingsgesprekken bestaan",
      "Als 12-weken traject worden gevolgd",
      "Daarna worden verlengd wanneer aanvullende begeleiding nodig is",
    ],
  },
  {
    title: "Stap 3: Zelfstandig verder",
    paragraphs: [
      "Het doel is dat je steeds beter begrijpt welke gewoonten bij jou passen en hoe je deze zelfstandig kunt blijven toepassen.",
      "Mogelijke doelen zijn:",
    ],
    items: [
      "Meer grip op je dagelijkse leefstijl",
      "Gezondere voedings- en beweeggewoonten",
      "Beter omgaan met wisselende energie",
      "Meer balans tussen activiteit en herstel",
      "Beter slapen en bewuster omgaan met stress",
      "Meer vertrouwen in je dagelijkse keuzes",
    ],
    outro: [
      "Medicatie wordt nooit zelfstandig gewijzigd. Beslissingen over medicatie blijven bij jou en je behandelend arts.",
      "Ook na het traject kan aanvullende ondersteuning worden besproken.",
    ],
  },
  {
    title: "Stap 4: Fitter en gezonder verder",
    paragraphs: [
      "Je werkt toe naar een leven met meer energie, minder klachten en een betere kwaliteit van leven, dat je ook op de lange termijn kunt volhouden.",
    ],
    items: [],
  },
];

const faqs = [
  {
    question: "Kan leefstijlcoaching reuma genezen?",
    answer: [
      "Nee. Leefstijlcoaching geneest reuma niet en vervangt geen medische behandeling.",
      "De begeleiding helpt je om praktisch te werken aan voeding, beweging, slaap, stress en gezonde gewoonten.",
    ],
  },
  {
    question: "Kan ik starten als ik reumamedicatie gebruik?",
    answer: [
      "Ja. Leefstijlcoaching kan naast medicatie en reguliere medische behandeling plaatsvinden.",
      "Je verandert of stopt medicatie nooit zelfstandig. Beslissingen over medicatie bespreek je altijd met je huisarts of reumatoloog.",
    ],
  },
  {
    question: "Is minder medicatie een gegarandeerd resultaat?",
    answer: [
      "Nee. Minder medicatie is geen gegarandeerd resultaat of vaste doelstelling van leefstijlcoaching.",
      "Wanneer je medische situatie verandert, bepaalt je behandelend arts of aanpassing van medicatie verantwoord en passend is.",
    ],
  },
  {
    question: "Welke voeding past bij reuma?",
    answer: [
      "Er bestaat niet één voedingspatroon dat voor iedereen met reuma hetzelfde werkt.",
      "Binnen de coaching ligt de nadruk op gezonde en grotendeels plantaardige voeding. We bekijken welke veranderingen haalbaar zijn en bij jouw situatie passen.",
    ],
  },
  {
    question: "Moet ik volledig plantaardig eten?",
    answer: [
      "Nee. Je hoeft niet direct volledig plantaardig te eten.",
      "We kijken welke plantaardige keuzes haalbaar zijn en bouwen veranderingen stap voor stap op.",
    ],
  },
  {
    question: "Is bewegen verstandig wanneer ik reuma heb?",
    answer: [
      "Beweging kan waardevol zijn wanneer deze past bij je belastbaarheid en medische situatie.",
      "Bij specifieke beperkingen of twijfel overleg je met je arts of fysiotherapeut.",
    ],
  },
  {
    question: "Hoe lang duurt leefstijlcoaching bij reuma?",
    answer: [
      "Je kunt kiezen voor een losse intake, een afzonderlijk coachingsgesprek of een traject van twaalf weken.",
      "Wanneer daarna aanvullende ondersteuning nodig is, kan een vervolgtraject worden besproken.",
    ],
  },
  {
    question: "Kan de coaching online plaatsvinden?",
    answer: [
      "Ja. Leefstijlcoaching kan online door heel Nederland plaatsvinden.",
      "Een fysieke ontmoeting kan worden besproken wanneer dit praktisch en wenselijk is, maar veel gesprekken kunnen volledig online plaatsvinden.",
    ],
  },
  {
    question: "Wordt leefstijlcoaching vergoed?",
    answer: [
      "Dat hangt af van je zorgverzekering, werkgever, registratie en persoonlijke situatie.",
      "Controleer vooraf bij je zorgverzekeraar of werkgever of een vergoeding mogelijk is. Er wordt hierover geen vaste belofte gedaan.",
    ],
  },
];

export function ReumaPageContent({ locale }: { locale: Locale }) {
  const content = (
    <div lang={locale}>
      <main id="main-content">
        <PageHero
          locale={locale}
          title="Leefstijlcoaching bij reuma"
          paragraphs={[
            "Leven met reuma kan iedere dag anders zijn. De ene dag lukt er veel, terwijl pijn, stijfheid, vermoeidheid of een opvlamming je de volgende dag opnieuw kan beperken. Met de juiste begeleiding kun je werken aan minder pijn, meer energie en een betere kwaliteit van leven.",
            "Met persoonlijke leefstijlcoaching onderzoeken we welke praktische veranderingen in voeding, stress, slaap, beweging en dagelijkse gewoonten bij jouw situatie passen.",
            "Ik ben Astrid Sanders, geaccrediteerd leefstijlcoach en ervaringsdeskundige. Ik weet uit eigen ervaring hoe ingrijpend reumatische klachten kunnen zijn en hoe moeilijk het kan zijn om leefstijlveranderingen zelfstandig vol te houden.",
            "Ik werk landelijk, online en persoonlijk in en rond 's-Hertogenbosch. Voor de intake kom ik eventueel bij je langs; dat bespreken we tijdens het gratis eerste gesprek.",
          ]}
          image={{
            // The -wide variant extends the source photo's left edge so the
            // subject lands right of the headline, framed like the artrose hero.
            src: "/images/generated/leefstijlcoaching-reuma-hero-wide.png",
            alt: "Astrid Sanders bereidt een kleurrijke plantaardige maaltijd",
            position: "center 35%",
            mobilePosition: "68% center",
          }}
        />

        <section className="section recognition-section" aria-labelledby="recognition-title">
          <div className="shell">
            <div className="recognition-intro">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="recognition-title">Herken je dit in jouw dagelijks leven?</h2>
                <p>
                  Reumatische klachten kunnen invloed hebben op je energie, werk, beweging,
                  sociale leven en zelfstandigheid.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/reuma-lifestyle.png"
                alt="Een vrouw bereidt een kleurrijke plantaardige maaltijd in een lichte keuken"
              />
            </div>

            <div className="recognition-lists recognition-lists--three">
              <Reveal>
                <h3>Lichamelijke klachten</h3>
                <ul className="check-list">
                  {physicalComplaints.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.05}>
                <h3>Wat dit in het dagelijks leven kan betekenen</h3>
                <ul className="check-list">
                  {dailyChallenges.map((item) => (
                    <li key={item}>
                      <Check size={18} weight="bold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <h3>Wat wil je bereiken?</h3>
                <ul className="check-list">
                  {desiredOutcomes.map((item) => (
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
                Leefstijlcoaching kan passend zijn wanneer je naast reguliere medische behandeling
                wilt werken aan voeding, beweging, slaap, stress en duurzame gewoonten.
              </p>
              <p>
                De coaching werkt versterkend op je reguliere medische behandeling, maar vervangt
                deze niet: 1 + 1 = 3. Zo help ik je om leefstijladviezen praktisch toe te passen in
                je dagelijks leven, gericht op minder klachten, meer energie en een betere
                kwaliteit van leven.
              </p>
              <Link className="button cta-inline" href="#gezondheidscheck">
                Bespreek jouw situatie tijdens een gratis gezondheidscheck
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section trust-section" aria-labelledby="lifestyle-title">
          <div className="shell">
            <div className="recognition-intro">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="lifestyle-title">Welke rol kan leefstijl spelen bij reuma?</h2>
                <p>
                  Leefstijl geneest reuma niet en vervangt geen behandeling door een huisarts,
                  reumatoloog, fysiotherapeut of andere zorgprofessional.
                </p>
                <p>
                  Voeding, slaap, stress, beweging en dagelijkse gewoonten hebben invloed op je
                  energie, herstel, belastbaarheid en het vermogen om gezonde keuzes vol te houden.
                </p>
                <p>
                  Onderzoek toont aan dat de juiste voeding, beweging, ontspanning en slaap
                  ontstekingen kunnen verlagen. Minder klachten, minder progressie, vaak minder
                  medicijnen: mijn persoonlijke programma helpt je precies daarmee.
                </p>
                <p>Tijdens de coaching bekijken we deze onderdelen in samenhang.</p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/reuma-lifestyle-balance.webp"
                alt="Een vrouw werkt geconcentreerd aan haar kracht in een sportschool"
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

        <section className="section" aria-labelledby="guidance-title">
          <div className="shell">
            <div className="recognition-intro">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="guidance-title">Geen standaarddieet, maar begeleiding die bij jou past</h2>
                <p>
                  Iedere persoon met reuma heeft een andere medische situatie, belastbaarheid,
                  leefstijl en persoonlijke doelen.
                </p>
                <p>Daarom werk ik niet met één standaard aanpak die iedereen moet volgen.</p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/reuma-personal-coaching.png"
                alt="Persoonlijk coachingsgesprek over een haalbaar leefstijlplan"
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

            <Reveal className="section-note">
              <p>
                Wanneer passend en officieel bevestigd, kan begeleiding ook worden gecombineerd met
                ondersteuning naast het PlantsForHealth-programma.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section story-section" aria-labelledby="why-astrid-title">
          <div className="shell story-layout">
            <Reveal className="story-heading">
              <h2 id="why-astrid-title">Begeleiding van iemand die het zelf heeft doorgemaakt</h2>
              <Link className="text-link" href={localizeHref("/over-astrid/", locale)}>
                Lees het volledige verhaal van Astrid
                <ArrowRight size={19} weight="regular" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className="story-copy" delay={0.05}>
              <p>
                Mijn reumatische klachten begonnen in juli 2020 met een plotseling opgezwollen hand.
              </p>
              <p>
                Binnen enkele maanden verslechterde mijn situatie sterk. Op het moeilijkste moment
                kon ik nauwelijks meer lopen en waren verschillende gewrichten in mijn handen,
                voeten, knieën, schouders, heupen en nek ontstoken.
              </p>
              <p>
                In de jaren daarna probeerde ik verschillende methodes en leefstijlaanpassingen,
                waaronder vasten, acupunctuur, de Wim Hof-methode, supplementen, yoga, zwemmen en
                verschillende voedingspatronen.
              </p>
              <p>
                In mei 2024 begon ik met een wetenschappelijk onderbouwde leefstijlaanpak waarin
                plantaardige voeding een belangrijk onderdeel vormde.
              </p>
              <p>
                Na ongeveer zes weken merkte ik veranderingen in mijn energie en dagelijks
                functioneren. Mijn bloedwaarden verbeterden en mijn reumatoloog kon mijn medicatie
                daarna stap voor stap aanpassen.
              </p>
              <p className="story-copy__important">
                Dit is mijn persoonlijke ervaring en geen garantie dat anderen hetzelfde resultaat
                bereiken.
              </p>
              <p>
                Mijn ervaring heeft mij wel laten zien hoeveel tijd, structuur en ondersteuning
                nodig kunnen zijn om leefstijlveranderingen vol te houden.
              </p>
              <p>
                Daarom heb ik de opleiding tot leefstijlcoach gevolgd bij Sonnevelt Opleidingen.
                Daarnaast ben ik aangesloten bij de BLCN.
              </p>
            </Reveal>

            <Reveal className="authority-panel" delay={0.08}>
              <div>
                <h3>Ervaringsdeskundige</h3>
                <p>
                  Ik begrijp hoe frustrerend het kan zijn wanneer klachten onvoorspelbaar zijn en je
                  al veel verschillende oplossingen hebt geprobeerd.
                </p>
                <h3>Geaccrediteerd leefstijlcoach</h3>
                <p>
                  Mijn coaching combineert professionele kennis over voeding, beweging, stress,
                  slaap en gedragsverandering.
                </p>
                <h3>Praktisch en persoonlijk</h3>
                <p>
                  Geen zweverige aanpak, wondermiddelen of onrealistische beloftes. We werken met
                  concrete stappen die aansluiten op jouw leven.
                </p>
              </div>
              <a
                className="text-link"
                href="https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan"
                target="_blank"
                rel="noreferrer"
              >
                Interview met Astrid bij Omroep Brabant
                <ArrowSquareOut size={19} weight="regular" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="process-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="process-title">Zo werkt leefstijlcoaching bij reuma</h2>
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
                    {step.items.length > 0 ? (
                      <ul className="compact-list">
                        {step.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
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
          locale={locale}
          title="Veelgestelde vragen over leefstijlcoaching bij reuma"
          faqs={faqs}
          source="leefstijlcoaching-reuma"
        />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );

  return localizeReactNode(content, locale);
}

export default function ReumaPage() {
  return <ReumaPageContent locale="nl" />;
}
