import {
  ArrowUpRight,
  Certificate,
  EnvelopeSimple,
  LinkedinLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { localizeHref, type Locale } from "@/lib/i18n";
import { phoneDisplayNumber, phoneHref } from "@/lib/whatsapp";

const footerNavigation = [
  { label: { nl: "Reuma", en: "Rheumatism" }, href: "/leefstijlcoaching-reuma/" },
  { label: { nl: "Artrose", en: "Osteoarthritis" }, href: "/leefstijlcoaching-artrose/" },
  {
    label: { nl: "Gezondheidsrisico’s", en: "Health risks" },
    href: "/leefstijlcoaching-gezondheidsrisicos/",
  },
  { label: { nl: "Bedrijven", en: "Organisations" }, href: "/leefstijlcoaching-bedrijven/" },
  { label: { nl: "Zorgprofessionals", en: "Professionals" }, href: "/zorgprofessionals/" },
  { label: { nl: "Over Astrid", en: "About Astrid" }, href: "/over-astrid/" },
  { label: { nl: "Contact", en: "Contact" }, href: "/contact/" },
  {
    label: { nl: "Gratis gezondheidscheck", en: "Free health check" },
    href: "/gratis-gezondheidscheck/",
  },
];

// Only links that are already published elsewhere on the site (see app/page.tsx
// authorityFacts and app/over-astrid/page.tsx) — nothing unverified.
const footerCredentials = [
  {
    label: {
      nl: "Diploma Leefstijlcoach bij Sonnevelt Opleidingen",
      en: "Lifestyle Coach diploma from Sonnevelt Opleidingen",
    },
    href: "https://www.sonneveltopleidingen.nl/opleidingen/leefstijlcoach",
  },
  {
    label: {
      nl: "BLCN-lidnummer L2125",
      en: "BLCN membership number L2125",
    },
    href: "https://blcn.nl/",
  },
  {
    label: {
      nl: "KABIZ-registratienummer 18109454184",
      en: "KABIZ registration number 18109454184",
    },
    href: "https://www.kabiz.nl/raadplegenregister/default.aspx",
  },
  {
    label: { nl: "Interview bij Omroep Brabant", en: "Interview with Omroep Brabant" },
    href: "https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan",
  },
  {
    label: { nl: "Partner: PlantsForHealth", en: "Partner: PlantsForHealth" },
    href: "https://plants-for-health.nl/",
  },
];

export function SiteFooter({ locale = "nl" }: { locale?: Locale }) {
  const isEnglish = locale === "en";

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__intro">
          <Link
            className="site-footer__logo-link"
            href={localizeHref("/", locale)}
            aria-label={isEnglish ? "Astrid Sanders, home" : "Astrid Sanders, home"}
          >
            <Image
              className="site-footer__logo"
              src="/brand/astrid-sanders-logo-reversed.png"
              alt=""
              width={1600}
              height={482}
              sizes="230px"
            />
          </Link>
          <p>
            {isEnglish
              ? "Lifestyle coaching for rheumatism, osteoarthritis and other health risks."
              : "Leefstijlcoaching bij reuma, artrose en andere gezondheidsrisico’s."}
          </p>
          <p>
            {isEnglish
              ? "Personal guidance around nutrition, movement, sleep, stress and daily habits."
              : "Persoonlijke begeleiding rondom voeding, beweging, slaap, stress en dagelijkse gewoonten."}
          </p>
          <p className="site-footer__credential">
            <Certificate size={22} weight="regular" aria-hidden="true" />
            <span>
              {isEnglish
                ? "Lifestyle coach, KABIZ registration 18109454184 and BLCN member L2125."
                : "Leefstijlcoach, KABIZ-registratie 18109454184 en BLCN-lid L2125."}
            </span>
          </p>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__label">{isEnglish ? "Pages" : "Pagina’s"}</p>
          <nav
            className="site-footer__nav"
            aria-label={isEnglish ? "Footer navigation" : "Voettekstnavigatie"}
          >
            {footerNavigation.map((item) => (
              <Link key={item.href} href={localizeHref(item.href, locale)}>
                {item.label[locale]}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__contact">
          <p className="site-footer__label">{isEnglish ? "Contact" : "Contact"}</p>
          <div className="site-footer__location">
            <MapPin size={22} weight="regular" aria-hidden="true" />
            <p>
              {isEnglish
                ? "'s-Hertogenbosch — and online throughout the Netherlands"
                : "'s-Hertogenbosch — en online door heel Nederland"}
            </p>
          </div>
          <a href="mailto:astrid@astridsanders.com">
            <EnvelopeSimple size={22} weight="regular" aria-hidden="true" />
            astrid@astridsanders.com
          </a>
          <a href={phoneHref()}>
            <Phone size={22} weight="regular" aria-hidden="true" />
            {phoneDisplayNumber()}
          </a>
          <WhatsAppLink locale={locale} compact />
          <a
            href="https://www.linkedin.com/in/astridsanders/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={22} weight="regular" aria-hidden="true" />
            {isEnglish ? "Astrid on LinkedIn" : "Astrid op LinkedIn"}
          </a>
          <Link
            className="button button--small button--solid button--gezondheidscheck"
            href={localizeHref("/gratis-gezondheidscheck/", locale)}
          >
            {isEnglish ? "Request a free health check" : "Gratis gezondheidscheck aanvragen"}
          </Link>
        </div>
      </div>

      <div className="shell site-footer__meta">
        <p className="site-footer__label">
          {isEnglish ? "Accreditation and media" : "Erkenning en media"}
        </p>
        <ul className="site-footer__meta-links">
          {footerCredentials.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label[locale]}
                <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} Astrid Sanders Leefstijlcoaching</p>
        <p>
          {isEnglish
            ? "Dutch Chamber of Commerce 42145089"
            : "KvK-nummer 42145089"}
        </p>
      </div>
    </footer>
  );
}
