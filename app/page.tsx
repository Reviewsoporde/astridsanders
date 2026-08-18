import {
  ArrowRight,
  ArrowSquareOut,
  Certificate,
  Check,
  IdentificationBadge,
  PhoneCall,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQList } from "@/components/faq-list";
import { HealthCheckForm } from "@/components/health-check-form";
import { PricingSection } from "@/components/pricing-section";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppLink } from "@/components/whatsapp-link";
import {
  localizeReactNode,
  localizeValue,
  type Locale,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Leefstijlcoach bij Reuma & Artrose | Astrid",
  description:
    "Persoonlijke leefstijlcoaching door heel Nederland en in 's-Hertogenbosch voor mensen met reuma en artrose. Vraag een gratis gezondheidscheck aan.",
};

const trustPoints = [
  {
    title: "Ervaringsdeskundige",
    /*
     * "Ervaringsdeskundige" is a credential, not an emotion — a badge, not a
     * heart. This is the card where Astrid is most at risk of reading as a
     * fellow patient rather than as the professional being hired.
     */
    icon: IdentificationBadge,
    paragraphs: [
      "Ik weet hoe het is wanneer pijn, stijfheid en vermoeidheid steeds meer invloed krijgen op je dagelijks leven. Ik heb zelf jarenlang geleefd met artrose en ernstige reumatische klachten.",
      "Mijn ervaring helpt mij om niet alleen naar de theorie te kijken, maar ook te begrijpen hoe moeilijk het kan zijn om veranderingen daadwerkelijk toe te passen en vol te houden.",
      "Mijn energie nam toe en mijn klachten verminderden. Inmiddels ben ik, in overleg met mijn reumatoloog, van mijn medicatie af. Die ervaring vormt een belangrijke basis voor mijn begeleiding.",
    ],
    links: [
      {
        label: "Bekijk het interview bij Omroep Brabant",
        href: "https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan",
        external: true,
      },
    ],
  },
  {
    title: "Geaccrediteerd leefstijlcoach",
    icon: Certificate,
    paragraphs: [
      "Naast mijn persoonlijke ervaring heb ik de opleiding tot leefstijlcoach afgerond bij Sonnevelt Opleidingen en ben ik geregistreerd bij KABIZ.",
      "Daarnaast ben ik aangesloten bij de BLCN, de Beroepsvereniging Leefstijlcoaches Nederland.",
      "Voor mijn werk als leefstijlcoach had ik een carrière als senior manager, onder andere in de financiële dienstverlening. Die achtergrond in marketing, management, communicatie en klantbeleving helpt mij gestructureerd en resultaatgericht te begeleiden.",
    ],
    links: [
      {
        label: "Bekijk de opleiding bij Sonnevelt",
        href: "https://www.sonneveltopleidingen.nl/opleidingen/leefstijlcoach",
        external: true,
      },
      {
        label: "Bekijk de BLCN",
        href: "https://blcn.nl/",
        external: true,
      },
      {
        label: "Raadpleeg het KABIZ-register",
        href: "https://www.kabiz.nl/raadplegenregister/default.aspx",
        external: true,
      },
    ],
  },
  {
    title: "Gespecialiseerd in reuma en artrose",
    stripTitle: "Gegarandeerd resultaat",
    icon: ShieldCheck,
    paragraphs: [
      "Mijn belangrijkste specialisatie ligt bij reuma en artrose.",
      "Hierdoor kan ik gerichter meedenken over de dagelijkse uitdagingen die bij deze klachten kunnen komen kijken, zonder te werken vanuit een algemene of oppervlakkige aanpak.",
    ],
    links: [
      {
        label: "Lees het volledige verhaal van Astrid",
        href: "/over-astrid/",
        external: false,
      },
    ],
  },
];

const services = [
  {
    title: "Leefstijlcoaching bij Reuma",
    paragraphs: [
      "Persoonlijke begeleiding voor mensen die naast hun reguliere behandeling willen werken aan voeding, stress, slaap, beweging en duurzame gewoonten.",
      "Het doel is om meer inzicht te krijgen in wat bij jouw situatie past en hoe je veranderingen praktisch kunt volhouden.",
    ],
    label: "Leefstijlcoaching bij reuma",
    href: "/leefstijlcoaching-reuma/",
  },
  {
    title: "Leefstijlcoaching bij Artrose",
    paragraphs: [
      "Artrose kan bewegen, sporten en dagelijkse activiteiten moeilijker maken.",
      "Samen onderzoeken we welke praktische veranderingen kunnen bijdragen aan een gezondere leefstijl, passende beweging, beter herstel en meer vertrouwen in je dagelijkse keuzes.",
    ],
    label: "Leefstijlcoaching bij artrose",
    href: "/leefstijlcoaching-artrose/",
  },
  {
    title: "Leefstijlcoaching voor jouw gezondheid",
    paragraphs: [
      "Overgewicht, hoge bloeddruk, verhoogde bloedsuiker, stress of gewrichtsklachten kunnen veel invloed hebben op je dagelijks leven. Vaak spelen meerdere factoren tegelijk.",
      "Met persoonlijke leefstijlcoaching onderzoeken we welke haalbare veranderingen in voeding, beweging, slaap, stress en dagelijkse gewoonten bij jouw situatie passen.",
    ],
    label: "Leefstijlcoaching voor jouw gezondheid",
    href: "/leefstijlcoaching-gezondheidsrisicos/",
  },
  {
    title: "Leefstijlcoaching voor Bedrijven",
    paragraphs: [
      "Voor organisaties die willen investeren in de gezondheid, inzetbaarheid en het welzijn van medewerkers.",
      "Mogelijkheden zijn individuele coaching, groepscoaching, workshops en een leefstijlgerichte gezondheidscheck voor medewerkers.",
    ],
    label: "Leefstijlcoaching voor bedrijven",
    href: "/leefstijlcoaching-bedrijven/",
  },
  {
    title: "Samenwerken met Zorgprofessionals",
    paragraphs: [
      "Ik werk graag samen met reumatologen, huisartsen, fysiotherapeuten en andere zorgprofessionals die patiënten met reuma of artrose willen ondersteunen bij duurzame leefstijlverandering.",
      "De coaching is aanvullend op reguliere medische zorg en vervangt geen behandeling.",
    ],
    label: "Informatie voor zorgprofessionals",
    href: "/zorgprofessionals/",
  },
];

const desiredOutcomes = [
  "Minder pijn",
  "Meer energie",
  "Minder afhankelijk van medicatie",
  "Lekkerder in je vel zitten",
  "Een betere gezondheid",
  "Gezondheidsvaardigheden voor de rest van je leven",
];

const homeProcessSteps = [
  {
    title: "Stap 1: Gratis gezondheidscheck",
    description:
      "We beginnen met een kort en vrijblijvend telefoongesprek over wat er speelt en welke eerste stap bij jou past.",
  },
  {
    title: "Stap 2: Persoonlijke coaching",
    description:
      "We stemmen de begeleiding af op jouw situatie en werken praktisch aan voeding, beweging, slaap, stress en gewoonten.",
  },
  {
    title: "Stap 3: Zelfstandig verder",
    description:
      "Je leert welke keuzes voor jou werken, zodat je gezonde veranderingen ook na het traject zelfstandig kunt volhouden.",
  },
];

type AuthorityFact = {
  label: string;
  href?: string;
  external?: boolean;
};

const authorityFacts: AuthorityFact[] = [
  {
    label: "Diploma Leefstijlcoach bij Sonnevelt Opleidingen",
    href: "https://www.sonneveltopleidingen.nl/opleidingen/leefstijlcoach",
    external: true,
  },
  {
    label: "Aangesloten bij de BLCN",
    href: "https://blcn.nl/",
    external: true,
  },
  {
    label: "Persoonlijke ervaring met reuma en artrose",
    href: "/over-astrid/",
    external: false,
  },
  {
    label: "Interview bij Omroep Brabant",
    href: "https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan",
    external: true,
  },
  {
    label: "LinkedIn-profiel van Astrid Sanders",
    href: "https://www.linkedin.com/in/astridsanders/",
    external: true,
  },
];

/*
 * Credential strip on the olive band, directly above the pricing cards. Text
 * only — never third-party logos: reproducing those marks needs written
 * permission and implies a partnership that does not exist. Every entry is a
 * fact already stated elsewhere on this page (see `authorityFacts` and the
 * story copy), shortened to a scannable token. No counts, no success rates.
 */
const credentials: AuthorityFact[] = [
  {
    label: "Sonnevelt Opleidingen",
    href: "https://www.sonneveltopleidingen.nl/opleidingen/leefstijlcoach",
    external: true,
  },
  {
    label: "BLCN",
    href: "https://blcn.nl/",
    external: true,
  },
  {
    label: "Ervaringsdeskundige",
    href: "/over-astrid/",
    external: false,
  },
  {
    label: "Interview bij Omroep Brabant",
    href: "https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan",
    external: true,
  },
  {
    label: "Bestuurder Nijmeegse Vierdaagse",
  },
];

const faqs = [
  {
    question: "Wat doet een leefstijlcoach?",
    answer: [
      "Een leefstijlcoach begeleidt je bij het duurzaam veranderen van leefgewoontes, met als doel gezondheidsrisico's te verminderen en je algehele welzijn te verbeteren.",
      "Samen werk je aan onderwerpen zoals voeding, beweging, slaap, stress, herstel en gedragsverandering, gericht op meer energie, vaak minder medicatie en een beter leven. De begeleiding wordt afgestemd op jouw persoonlijke situatie en doelen.",
    ],
  },
  {
    question: "Kan ik starten als ik medicatie gebruik?",
    answer: [
      "Ja. Leefstijlcoaching kan naast bestaande medicatie en reguliere medische behandeling plaatsvinden.",
      "Je verandert of stopt medicatie nooit zelfstandig. Beslissingen over medicatie bespreek je altijd met je huisarts, specialist of behandelend arts.",
      "Een eventuele wijziging in medicatie is een medische beslissing en geen gegarandeerd resultaat van het coachingstraject.",
    ],
  },
  {
    question: "Moet ik volledig plantaardig eten?",
    answer: [
      "Nee. De begeleiding bevat een sterke focus op plantaardige voeding, maar de aanpak moet praktisch en vol te houden zijn.",
      "We bekijken samen welke veranderingen bij jouw situatie passen. Het is niet noodzakelijk om van de ene op de andere dag volledig plantaardig te eten.",
    ],
  },
  {
    question: "Hoe lang duurt een coachingstraject?",
    answer: [
      "Dat hangt af van jouw doelen en behoefte aan begeleiding.",
      "Je kunt kiezen voor een losse intake, een afzonderlijk coachingsgesprek of een traject van twaalf weken. Wanneer daarna verdere ondersteuning nodig is, kan een vervolg worden besproken.",
    ],
  },
  {
    question: "Kan leefstijlcoaching online plaatsvinden?",
    answer: [
      "Ja. Ik begeleid cliënten online door heel Nederland.",
      "Een eerste persoonlijke ontmoeting kan worden besproken wanneer dit praktisch en wenselijk is, maar veel gesprekken kunnen volledig online plaatsvinden.",
    ],
  },
  {
    question: "Wat gebeurt er tijdens de gratis gezondheidscheck?",
    answer: [
      "De gratis gezondheidscheck is een kort telefonisch gesprek waarin je vertelt over je situatie, leefstijl en wat je al hebt geprobeerd.",
      "Ik leg uit hoe mijn aanpak werkt en we bekijken samen of leefstijlcoaching een passende volgende stap kan zijn. Het gesprek is vrijblijvend en verplicht je nergens toe.",
    ],
  },
  {
    question: "Vervangt leefstijlcoaching medische behandeling?",
    answer: [
      "Nee. Leefstijlcoaching vervangt geen medische diagnostiek, behandeling of advies.",
      "De coaching is aanvullende begeleiding naast de zorg van je huisarts, reumatoloog, fysiotherapeut of andere behandelaar. De combinatie van medische behandeling en leefstijlcoaching kan tot goede en duurzame resultaten leiden.",
    ],
  },
];

export function HomePageContent({ locale }: { locale: Locale }) {
  const localizedFaqs = localizeValue(faqs, locale);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localizedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.join(" "),
      },
    })),
  };
  const localizedPath = (path: string) => (locale === "en" ? `/en${path}` : path);
  const content = (
    <div lang={locale}>
      <main id="main-content">
        <section className="hero hero--full" aria-labelledby="hero-title">
          <div className="hero__grid">
            <Reveal className="hero__copy">
              <h1 id="hero-title">Leefstijlcoach bij reuma en artrose</h1>
              <p className="hero__lead">
                Minder pijn, meer energie en een betere kwaliteit van leven: daar werken we samen
                naartoe. Geen standaard aanpak, maar begeleiding die past bij jouw situatie,
                mogelijkheden en doelen.
              </p>
              <div className="hero__actions">
                <Link
                  className="button button--solid button--gezondheidscheck"
                  href={localizedPath("/gratis-gezondheidscheck/")}
                >
                  Gratis gezondheidscheck aanvragen
                </Link>
                <WhatsAppLink locale={locale} />
              </div>
            </Reveal>

            <Reveal className="hero__visual-wrap" delay={0.08}>
              <div className="hero__visual">
                <Image
                  src="/images/hero_new_astrid.png"
                  alt="Astrid Sanders in haar praktijk voor leefstijlcoaching"
                  fill
                  priority
                  sizes="100vw"
                  style={{ objectPosition: "78% 10%" }}
                />
              </div>
            </Reveal>

          </div>

          {/*
           * Slim trust bar hugging the bottom of the hero: the three titles from
           * the section below, condensed into one scannable row with their icons.
           */}
          <div className="hero-strip">
            <ul className="shell hero-strip__list">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.title}>
                    <Icon size={20} weight="regular" aria-hidden="true" />
                    <span>{point.stripTitle ?? point.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>


        </section>

        <section className="section trust-section trust-section--tight" aria-labelledby="trust-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--tight">
              <h2 id="trust-title">Leefstijlcoaching vanuit ervaring én professionele kennis</h2>
            </Reveal>

            <div className="trust-grid trust-grid--aligned">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Reveal
                    key={point.title}
                    className={`trust-card trust-card--${index + 1}`}
                    delay={index * 0.05}
                  >
                    <div className="trust-card__head">
                      <Icon className="trust-card__icon" size={28} weight="regular" aria-hidden="true" />
                      <h3>{point.title}</h3>
                    </div>
                    <div className="trust-card__body">
                      {point.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="trust-card__links">
                      {point.links.map((link) => (
                        <a
                          key={link.href}
                          className="text-link"
                          href={link.external ? link.href : localizedPath(link.href)}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noreferrer" : undefined}
                        >
                          {link.label}
                          {link.external ? (
                            <ArrowSquareOut size={18} weight="regular" aria-hidden="true" />
                          ) : (
                            <ArrowRight size={18} weight="regular" aria-hidden="true" />
                          )}
                        </a>
                      ))}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section recognition-section" aria-labelledby="recognition-title">
          <div className="shell recognition-grid">
            <Reveal className="recognition-media">
              <Image
                src="/images/plant-based-lunch.png"
                alt="Een gevarieerde plantaardige lunch met linzen, granen en groenten"
                fill
                sizes="(max-width: 767px) 100vw, 42vw"
              />
            </Reveal>

            <div className="recognition-content">
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="recognition-title">Heb je hier regelmatig last van?</h2>
              </Reveal>

              <div className="recognition-lists recognition-lists--three">
                <Reveal>
                  <h3>Situaties waarbij coaching kan passen</h3>
                  <ul className="check-list">
                    {[
                      "Reuma",
                      "Artrose",
                      "Overgewicht in combinatie met gezondheidsrisico’s",
                      "Moeite met het volhouden van gezonde gewoonten",
                      "Behoefte aan aanvullende leefstijlbegeleiding naast reguliere zorg",
                    ].map((item) => (
                      <li key={item}>
                        <Check size={18} weight="bold" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.05}>
                  <h3>Wat je hierbij kunt ervaren</h3>
                  <ul className="check-list">
                    {[
                      "Gewrichtspijn en stijfheid",
                      "Wisselende klachten of opvlammingen",
                      "Vermoeidheid en weinig energie",
                      "Moeite met bewegen of dagelijkse activiteiten",
                      "Onzekerheid over voeding en leefstijl",
                      "Het gevoel dat je weinig grip hebt op je gezondheid",
                    ].map((item) => (
                      <li key={item}>
                        <Check size={18} weight="bold" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.1}>
                  <h3>Wil jij:</h3>
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

              <Reveal className="recognition-note">
                <p className="recognition-note__lead">
                  Herken je dit in je dagelijks leven, maar wil je dit niet meer?
                </p>
                <p>
                  Leefstijlcoaching werkt versterkend op je reguliere medische behandeling, maar
                  vervangt deze niet: 1 + 1 = 3. Samen werken we toe naar minder pijn, meer energie
                  en een betere kwaliteit van leven.
                </p>
                <p className="term-note">
                  Beslissingen over medicatie bespreek je altijd met je behandelend arts.
                </p>
                <Link className="button button--solid" href={localizedPath("/contact/")}>
                  Neem contact op
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section process-section" aria-labelledby="process-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <p className="eyebrow">Zo werkt het</p>
              <h2 id="process-title">Van kennismaking naar een leefstijl die bij je past</h2>
            </Reveal>

            <div className="process-steps process-steps--compact">
              {homeProcessSteps.map((step, index) => (
                <Reveal key={step.title} className="process-step" delay={index * 0.05}>
                  <span className="process-step__number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-section" aria-labelledby="services-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="services-title">Waarmee kan ik je helpen?</h2>
            </Reveal>

            <div className="services-grid">
              {services.map((service, index) => (
                <Reveal
                  key={service.href}
                  className={`service-card service-card--${index + 1} ${index === 0 ? "service-card--featured" : ""}`}
                  delay={index * 0.04}
                >
                  <article>
                    <h3>{service.title}</h3>
                    {service.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <Link className="text-link" href={localizedPath(service.href)}>
                      {service.label}
                      <ArrowRight size={19} weight="regular" aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section inflammation-section" aria-labelledby="inflammation-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="inflammation-title">Leefstijl en inflammatie</h2>
              <p>
                Veel chronische aandoeningen, zoals reuma, artrose, diabetes type 2 en hart- en
                vaatziekten, hebben een gemeenschappelijke factor: chronische laaggradige
                ontsteking, oftewel inflammatie.
              </p>
              <p>
                Voeding, beweging, ontspanning en slaap kunnen invloed hebben op deze processen.
                Dat kan zich vertalen in minder klachten, een betere belastbaarheid, meer energie,
                beter herstel en vaak minder medicatie.
              </p>
            </Reveal>
          </div>
        </section>

        {/*
          * Positioning statement plus credentials, not a pull quote: a quote
          * from the person doing the selling is the weakest kind of proof, and
          * the centred italic setting it used to have was the most "manifesto"
          * moment on the site. The band stays — it sits immediately before the
          * pricing cards, which is exactly where proof belongs.
          */}
        <section
          className="section positioning-section section--band-primary"
          aria-labelledby="positioning-title"
        >
          <Reveal className="shell positioning">
            <p className="eyebrow positioning__eyebrow" id="positioning-title">
              Achtergrond en erkenning
            </p>
            <p className="positioning__statement">
              Mensen met reuma en artrose helpen om weer grip te krijgen op hun energie en
              gezondheid, met als uiteindelijk doel: een langer en gelukkiger leven door nu
              gezonde, duurzame keuzes te maken.
            </p>
            <ul className="credential-strip">
              {credentials.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.external ? item.href : localizedPath(item.href)}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <PricingSection
          locale={locale}
          checkDescription="Een kort telefonisch gesprek waarin we jouw situatie bespreken, mijn aanpak toelichten en bekijken welke vervolgstap passend kan zijn."
        />

        <section
          className="section story-section section--band-accent"
          aria-labelledby="story-title"
        >
          <div className="shell story-layout">
            <Reveal className="story-heading">
              <h2 id="story-title">Ik weet hoe het is wanneer klachten je leven overnemen</h2>
              <Link className="text-link" href={localizedPath("/over-astrid/")}>
                Lees het volledige verhaal van Astrid
                <ArrowRight size={19} weight="regular" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className="story-copy" delay={0.05}>
              <p>
                Mijn eigen verhaal begon met artrose in mijn knieën. Tijdens het tennissen werden
                mijn knieën regelmatig dik en pijnlijk, waardoor bewegen steeds moeilijker werd.
              </p>
              <p>
                In mei 2024 begon ik opnieuw met een wetenschappelijk onderbouwde leefstijlaanpak,
                waarbij plantaardige voeding een belangrijk onderdeel vormde. Na ongeveer zes weken
                merkte ik veranderingen in mijn energie en dagelijks functioneren.
              </p>
              <p>
                Mijn bloedwaarden verbeterden in de maanden daarna. Onder begeleiding van mijn
                reumatoloog kon mijn medicatie vervolgens stap voor stap worden afgebouwd.
              </p>
              <p className="story-copy__important">
                Dit is mijn persoonlijke ervaring en geen garantie dat anderen hetzelfde resultaat
                bereiken. Het liet mij wel zien hoeveel invloed dagelijkse gewoonten kunnen hebben
                en hoe waardevol persoonlijke begeleiding kan zijn.
              </p>
              <p>
                Daarom heb ik de opleiding tot leefstijlcoach gevolgd. Nu combineer ik mijn eigen
                ervaring met professionele kennis om anderen te helpen meer grip te krijgen op hun
                leefstijl en gezondheid.
              </p>
            </Reveal>

            <Reveal className="authority-panel" delay={0.08}>
              <ul>
                {authorityFacts.map((item) => (
                  <li key={item.label}>
                    <Certificate size={20} weight="regular" aria-hidden="true" />
                    {item.href ? (
                      <a
                        href={item.external ? item.href : localizedPath(item.href)}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                      >
                        <span>{item.label}</span>
                        {item.external ? (
                          <ArrowSquareOut size={16} weight="regular" aria-hidden="true" />
                        ) : (
                          <ArrowRight size={16} weight="regular" aria-hidden="true" />
                        )}
                      </a>
                    ) : (
                      <span className="authority-panel__unlinked">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
              <a
                className="text-link"
                href="https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan"
                target="_blank"
                rel="noreferrer"
              >
                Bekijk het interview bij Omroep Brabant
                <ArrowSquareOut size={19} weight="regular" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div>
              <Reveal className="section-heading section-heading--narrow">
                <h2 id="faq-title">Veelgestelde vragen over leefstijlcoaching</h2>
              </Reveal>
              <FAQList items={localizedFaqs} />
            </div>

            <Reveal className="health-check-panel" delay={0.08}>
              <div className="health-check-panel__media">
                <Image
                  src="/images/astrid-portrait-studio.png"
                  alt="Portret van Astrid Sanders, leefstijlcoach in Den Bosch"
                  fill
                  sizes="(max-width: 900px) 100vw, 36vw"
                />
              </div>
              <div className="health-check-panel__heading">
                <PhoneCall size={28} weight="regular" aria-hidden="true" />
                <p className="health-check-panel__title" id="gezondheidscheck">
                  Gratis gezondheidscheck aanvragen
                </p>
                <p>
                  Laat je naam, telefoonnummer en voorkeursmoment achter. Astrid neemt persoonlijk
                  contact met je op voor een kort en vrijblijvend telefoongesprek.
                </p>
              </div>
              <HealthCheckForm locale={locale} source="home" />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );

  return localizeReactNode(content, locale);
}

export default function HomePage() {
  return <HomePageContent locale="nl" />;
}
