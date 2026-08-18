import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
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
  title: { absolute: "Leefstijlcoaching voor jouw Gezondheid | Astrid Sanders" },
  description:
    "Persoonlijke leefstijlcoaching bij overgewicht, hoge bloeddruk, verhoogde bloedsuiker, stress en andere gezondheidsrisico’s. Landelijk online en in 's-Hertogenbosch.",
  alternates: {
    canonical: "/leefstijlcoaching-gezondheidsrisicos/",
  },
};

const recognitionColumns = [
  {
    number: "01",
    title: "Gezondheidsvragen en klachten",
    intro: "Leefstijlcoaching kan passend zijn wanneer je bijvoorbeeld:",
    items: [
      "Overgewicht of obesitas hebt, of moeite hebt met afvallen",
      "Leeft met diabetes type 2, hoge bloeddruk of verhoogd cholesterol",
      "Hart- en vaatklachten hebt of na medische revalidatie verder wilt werken aan dagelijkse gewoonten",
      "Leeft met jicht, reumatoïde artritis of een andere reumatische aandoening",
      "Gewrichts- of rugklachten ervaart in combinatie met overgewicht",
      "Stress, overspannenheid of burn-outklachten ervaart",
      "Leeft met COPD of astma en wilt werken aan conditie en dagelijkse gewoonten",
      "Weinig energie hebt of je niet fit voelt",
      "Wilt werken aan ongezonde gewoonten of een verslaving, in aanvulling op passende zorg",
    ],
  },
  {
    number: "02",
    title: "In het dagelijks leven",
    intro: "Misschien herken je dat je:",
    items: [
      "Veranderingen steeds uitstelt",
      "Niet goed weet waar je moet beginnen",
      "Moeite hebt om een gezonde routine op te bouwen",
      "Onzeker wordt van tegenstrijdige adviezen",
      "Merkt dat je energie sterk wisselt",
      "Begeleiding mist die echt aansluit bij jouw situatie",
    ],
  },
  {
    number: "03",
    title: "Mogelijke doelen",
    intro: "We kunnen onder andere werken aan:",
    items: [
      "Meer energie in je dagelijks leven",
      "Beter slapen en herstellen",
      "Meer grip op je gewicht en gezondheid",
      "Meer vertrouwen in je lichaam en keuzes",
      "Een gezonde routine die je kunt volhouden",
      "Een betere ervaren kwaliteit van leven",
      "Waar mogelijk minder afhankelijk worden van medicatie, uitsluitend in overleg met je behandelend arts",
    ],
  },
];

const lifestylePillars = [
  {
    title: "Voeding",
    paragraphs: [
      "We onderzoeken welk gezond en grotendeels plantaardig voedingspatroon bij jouw situatie en dagelijks leven past.",
      "Dat kan bijvoorbeeld gaan om:",
    ],
    items: [
      "Meer groente, fruit, peulvruchten en volkoren producten",
      "Maaltijden praktisch en evenwichtig samenstellen",
      "Meer regelmaat in eetmomenten",
      "Gezonde keuzes voorbereiden",
      "Omgaan met sociale situaties en moeilijke momenten",
      "Veranderingen rustig opbouwen en volhouden",
    ],
    note: "Bij medische voedingsvragen, diabetes of een voorgeschreven dieet blijft begeleiding door je arts of diëtist belangrijk.",
  },
  {
    title: "Beweging",
    paragraphs: [
      "We kijken hoe je op een veilige en haalbare manier meer dagelijkse beweging kunt opbouwen.",
      "Dat kan bijvoorbeeld gaan om:",
    ],
    items: [
      "Wandelen of fietsen",
      "Minder lang achter elkaar zitten",
      "Activiteit en rust beter afwisselen",
      "Een haalbare beweegroutine opbouwen",
      "Beweging koppelen aan bestaande gewoonten",
      "Rekening houden met je energie en belastbaarheid",
    ],
    note: "Bij klachten, beperkingen of revalidatie stemmen arts of fysiotherapeut af welke beweging medisch passend is.",
  },
  {
    title: "Slaap en herstel",
    paragraphs: ["Goede gewoonten rondom slaap en herstel kunnen je dagelijkse belastbaarheid ondersteunen."],
    items: [
      "Je huidige slaapritme bekijken",
      "Een rustige avondroutine ontwikkelen",
      "Herstelmomenten verspreiden over de dag",
      "De balans tussen inspanning en rust verbeteren",
      "Patronen herkennen die je slaap kunnen verstoren",
    ],
  },
  {
    title: "Stress en mentale belasting",
    paragraphs: [
      "Stress en mentale belasting kunnen mede invloed hebben op je keuzes, slaap en herstel.",
      "Tijdens de coaching onderzoeken we:",
    ],
    items: [
      "Welke situaties spanning veroorzaken",
      "Hoe je signalen en grenzen eerder herkent",
      "Welke vormen van ontspanning bij jou passen",
      "Hoe je gezonde gewoonten beschermt in drukke periodes",
      "Hoe je voorkomt dat verandering extra druk oplevert",
    ],
    note: "Leefstijlcoaching vervangt geen psychologische, bedrijfsgezondheidskundige of medische behandeling.",
  },
];

const personalPlan = [
  {
    title: "We brengen jouw situatie in kaart",
    items: [
      "Welke gezondheidsvragen en dagelijkse beperkingen je ervaart",
      "Hoe je nu eet, beweegt, slaapt en herstelt",
      "Welke adviezen of begeleiding je al hebt gekregen",
      "Wat eerder wel en niet voor je werkte",
      "Welke gewoonten en omstandigheden verandering lastig maken",
    ],
  },
  {
    title: "We kiezen haalbare eerste stappen",
    items: [
      "Eén of twee aandachtspunten tegelijk",
      "Praktische aanpassingen in maaltijden en planning",
      "Meer beweging verweven in je gewone dag",
      "Bewuster omgaan met slaap, herstel en stress",
      "Werken aan ongezonde gewoonten zonder alles ineens te veranderen",
    ],
  },
  {
    title: "We werken aan volhouden",
    items: [
      "Regelmatig evalueren wat haalbaar is",
      "Tijdig bijsturen wanneer iets niet werkt",
      "Terugval zien als informatie, niet als mislukking",
      "Een routine ontwikkelen die bij jouw leven past",
      "Zelfstandig bewuste keuzes leren maken",
    ],
  },
];

const processSteps = [
  {
    title: "Gratis gezondheidscheck",
    paragraphs: [
      "We beginnen met een kort en vrijblijvend telefoongesprek over wat er speelt en wat je wilt veranderen.",
      "Je krijgt uitleg over mijn aanpak en samen bekijken we of leefstijlcoaching een passende vervolgstap kan zijn.",
    ],
  },
  {
    title: "Persoonlijke coaching",
    paragraphs: [
      "We stemmen de begeleiding af op jouw situatie, doelen en tempo. Gesprekken kunnen online plaatsvinden, persoonlijk in en rond 's-Hertogenbosch, of in een combinatie daarvan.",
      "Je kunt kiezen voor een intake, een los gesprek of een traject van twaalf weken. Daarna bespreken we alleen als dat nodig is een passend vervolg.",
    ],
  },
  {
    title: "Zelfstandig verder",
    paragraphs: [
      "Je leert welke keuzes en routines voor jou werken en hoe je kunt bijsturen wanneer het moeilijker gaat.",
      "Het doel is dat je passende veranderingen na het traject zo zelfstandig mogelijk kunt voortzetten.",
    ],
  },
];

const faqs = [
  {
    question: "Kan leefstijlcoaching mijn klachten verminderen?",
    answer: [
      "Leefstijlcoaching kan je ondersteunen bij gezondere dagelijkse keuzes, maar voorspelt of garandeert geen verandering van klachten.",
      "Wat je merkt verschilt per persoon. Coaching is geen medische behandeling; bij nieuwe of verergerende klachten neem je contact op met je arts.",
    ],
  },
  {
    question: "Is leefstijlcoaching geschikt bij diabetes type 2, hoge bloeddruk, COPD of hart- en vaatklachten?",
    answer: [
      "Leefstijlcoaching kan naast reguliere zorg ondersteuning bieden bij dagelijkse gewoonten, wanneer dat bij jouw situatie past.",
      "Diagnose, behandeling, revalidatie, medicatie en medisch voedingsadvies blijven bij je arts, specialist, fysiotherapeut of diëtist.",
    ],
  },
  {
    question: "Welke voeding past bij mijn situatie?",
    answer: [
      "Dat hangt af van je gezondheid, voorkeuren en dagelijks leven.",
      "Binnen de coaching ligt de nadruk op een gezond, evenwichtig en grotendeels plantaardig voedingspatroon. Bij medische voedingsvragen verwijst Astrid naar een arts of diëtist.",
    ],
  },
  {
    question: "Moet ik volledig plantaardig eten?",
    answer: [
      "Nee. Je hoeft niet direct of volledig plantaardig te eten.",
      "We kiezen haalbare stappen die bij jou passen en die je kunt volhouden.",
    ],
  },
  {
    question: "Is bewegen altijd verstandig?",
    answer: [
      "Beweging kan waardevol zijn, maar moet passen bij je gezondheid en belastbaarheid.",
      "Bij lichamelijke klachten, beperkingen of revalidatie bespreek je met je arts of fysiotherapeut welke beweging veilig en geschikt is.",
    ],
  },
  {
    question: "Kan coaching naast mijn reguliere behandeling plaatsvinden?",
    answer: [
      "Ja. Leefstijlcoaching is bedoeld als aanvulling op reguliere medische of psychologische zorg en vervangt die niet.",
      "Waar nodig stem je leefstijlkeuzes af met je behandelend zorgprofessional.",
    ],
  },
  {
    question: "Kan ik minder afhankelijk worden van medicatie?",
    answer: [
      "Dat kan nooit vooraf worden beloofd en verschilt per persoon.",
      "Je verandert of stopt medicatie nooit zelfstandig. Alleen je behandelend arts kan samen met jou besluiten of aanpassing verantwoord is.",
    ],
  },
  {
    question: "Hoe lang duurt een coachingstraject?",
    answer: [
      "Dat verschilt per persoon en per doel.",
      "Na de gratis gezondheidscheck kun je kiezen voor een intake, een los coachingsgesprek of een traject van twaalf weken. Daarna bespreken we of zelfstandig verdergaan of aanvullende begeleiding passend is.",
    ],
  },
  {
    question: "Kan de coaching online plaatsvinden?",
    answer: [
      "Ja. Coaching kan online plaatsvinden, persoonlijk in en rond 's-Hertogenbosch, of in een combinatie daarvan.",
      "Tijdens de gezondheidscheck bespreken we welke vorm praktisch bij jou past.",
    ],
  },
  {
    question: "Wordt leefstijlcoaching vergoed?",
    answer: [
      "Individuele leefstijlcoaching wordt niet automatisch vergoed.",
      "Een eventuele vergoeding hangt af van je zorgverzekeraar, polis, verwijzing en het gevolgde programma. Controleer dit vooraf bij je verzekeraar; aan BLCN-lidmaatschap of KABIZ-registratie alleen kunnen geen vergoedingsrechten worden ontleend.",
    ],
  },
];

export function GezondheidsrisicosPageContent({ locale }: { locale: Locale }) {
  const content = (
    <div lang={locale}>
      <main id="main-content">
        <PageHero
          locale={locale}
          title="Leefstijlcoaching voor jouw gezondheid"
          paragraphs={[
            "Overgewicht, hoge bloeddruk, verhoogde bloedsuiker, stress of gewrichtsklachten kunnen veel invloed hebben op je dagelijks leven. Vaak spelen meerdere factoren tegelijk.",
            "Met persoonlijke leefstijlcoaching onderzoeken we welke haalbare veranderingen in voeding, beweging, slaap, stress en dagelijkse gewoonten bij jouw situatie passen, gericht op meer energie, minder klachten en een betere kwaliteit van leven.",
            "De coaching is aanvullend op reguliere zorg en beschikbaar landelijk online, en persoonlijk in en rond 's-Hertogenbosch. Voor de intake kom ik eventueel bij je langs; dat bespreken we tijdens het gratis eerste gesprek.",
          ]}
          image={{
            src: "/images/generated/gezondheidsrisicos-hero.webp",
            alt: "Een man bereidt thuis een kleurrijke, grotendeels plantaardige lunch",
            position: "center center",
            mobilePosition: "66% center",
          }}
        />

        <section className="section recognition-section" aria-labelledby="recognition-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="recognition-title">Herken je een van deze klachten of situaties?</h2>
              <p>
                Gezondheidsvragen staan zelden los van je dagelijks leven. Samen brengen we in
                kaart waar je nu staat en welke kleine, concrete verandering bij jou kan passen.
              </p>
            </Reveal>

            <div className="recognition-lists recognition-lists--three">
              {recognitionColumns.map((column, index) => (
                <Reveal key={column.number} delay={index * 0.04}>
                  <p className="eyebrow">{column.number}</p>
                  <h3>{column.title}</h3>
                  <p>{column.intro}</p>
                  <ul className="check-list">
                    {column.items.map((item) => (
                      <li key={item}>
                        <Check size={18} weight="bold" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal className="section-note">
              <p>
                Bij onverklaarde vermoeidheid, herstel na een hartinfarct, diabetes, COPD of astma,
                burn-out en andere medische of psychische klachten blijft begeleiding door de
                passende arts, specialist, psycholoog, bedrijfsarts, fysiotherapeut of diëtist
                noodzakelijk. Leefstijlcoaching vervangt deze zorg niet en resultaten verschillen
                per persoon.
              </p>
              <Link className="button button--solid button--gezondheidscheck cta-inline" href="#gezondheidscheck">
                Gratis gezondheidscheck aanvragen
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section trust-section" aria-labelledby="influence-title">
          <div className="shell">
            <div className="section-intro-with-media">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="influence-title">Welke rol kan leefstijlcoaching spelen?</h2>
                <p>
                  Veel chronische aandoeningen, zoals diabetes type 2, hart- en vaatziekten, reuma
                  en artrose, hebben een gemeenschappelijke factor: chronische laaggradige
                  ontsteking, oftewel inflammatie. Voeding, beweging, ontspanning en slaap kunnen
                  invloed hebben op deze processen.
                </p>
                <p>
                  Een leefstijlplan brengt voeding, beweging, slaap, herstel en stress samen. Niet
                  als standaardrecept, maar als praktische aanpak die aansluit op jouw doelen,
                  mogelijkheden en reguliere zorg.
                </p>
              </Reveal>
              <EditorialSectionImage
                src="/images/generated/gezondheidsrisicos-bewegen.webp"
                alt="Een vrouw bouwt met een stevige wandeling haar dagelijkse beweging op"
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
                  {pillar.note ? <p>{pillar.note}</p> : null}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="plan-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="plan-title">Een leefstijlplan dat past bij jouw doelen</h2>
              <p>
                Verandering wordt overzichtelijker wanneer je niet alles tegelijk hoeft te doen.
                We kiezen een beginpunt, testen wat werkt en sturen bij waar nodig.
              </p>
            </Reveal>

            <div className="process-steps process-steps--compact">
              {personalPlan.map((block, index) => (
                <Reveal key={block.title} className="process-step" delay={index * 0.04}>
                  <span className="process-step__number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3>{block.title}</h3>
                    <ul className="compact-list">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section story-section" aria-labelledby="experience-title">
          <div className="shell story-layout">
            <Reveal className="story-heading">
              <h2 id="experience-title">Persoonlijke begeleiding met professionele kennis</h2>
              <Link className="text-link" href={localizeHref("/over-astrid/", locale)}>
                Lees meer over Astrid
                <ArrowRight size={19} weight="regular" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className="story-copy" delay={0.05}>
              <p>
                Ik heb zelf jarenlang geleefd met artrose en ernstige reumatische klachten. Die
                ervaring leerde mij hoe lastig het kan zijn om betrouwbare informatie te vertalen
                naar gewoonten die je ook op moeilijke dagen kunt volhouden.
              </p>
              <p>
                In 2024 volgde ik het Plants for Health-programma, waarin een grotendeels
                plantaardig voedingspatroon en andere leefstijlfactoren centraal stonden. Ik merkte
                persoonlijk verschil in mijn energie en klachten. Onder begeleiding van mijn
                reumatoloog kon mijn medicatie later stap voor stap worden aangepast.
              </p>
              <p className="story-copy__important">
                Dit is mijn persoonlijke ervaring en geen garantie voor het resultaat van anderen.
                Als leefstijlcoach combineer ik ervaringskennis met professionele begeleiding,
                zonder de rol van arts of andere behandelaar over te nemen.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="process-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="process-title">Zo werkt leefstijlcoaching</h2>
            </Reveal>

            <div className="process-steps process-steps--compact">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} className="process-step" delay={index * 0.04}>
                  <span className="process-step__number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    {step.paragraphs.map((paragraph) => (
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
          title="Veelgestelde vragen over leefstijlcoaching en gezondheidsrisico’s"
          faqs={faqs}
        />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );

  return localizeReactNode(content, locale);
}

export default function GezondheidsrisicosPage() {
  return <GezondheidsrisicosPageContent locale="nl" />;
}
