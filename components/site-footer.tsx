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
  { label: { nl: "Online", en: "Online coaching" }, href: "/online-leefstijlcoaching/" },
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
      nl: "Aansluiting en accreditatie bij de BLCN",
      en: "Membership and accreditation with BLCN",
    },
    href: "https://www.kabiz.nl/raadplegenregister/default.aspx",
  },
  {
    label: { nl: "Interview bij Omroep Brabant", en: "Interview with Omroep Brabant" },
    href: "https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan",
  },
  {
    label: { nl: "Partner: PlantsForHealth", en: "Partner: PlantsForHealth" },
    href: "https://plants-for-health.com/",
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
              src="/brand/identity/astrid-sanders-logo-stacked-updated.png"
              alt=""
              width={230}
              height={258}
              sizes="158px"
            />
          </Link>
          <p>
            {isEnglish
              ? "Lifestyle coaching for rheumatism and osteoarthritis."
              : "Leefstijlcoaching bij reuma en artrose."}
          </p>
          <p>
            {isEnglish
              ? "Personal guidance around nutrition, movement, sleep, stress and daily habits — alongside your regular medical care."
              : "Persoonlijke begeleiding rondom voeding, beweging, slaap, stress en dagelijkse gewoonten — naast je reguliere medische zorg."}
          </p>
          <p className="site-footer__credential">
            <Certificate size={22} weight="regular" aria-hidden="true" />
            <span>
              {isEnglish
                ? "Accredited lifestyle coach, trained at Sonnevelt Opleidingen and a member of BLCN."
                : "Geaccrediteerd leefstijlcoach, opgeleid bij Sonnevelt Opleidingen en aangesloten bij de BLCN."}
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
                ? "Den Bosch, Noord-Brabant — and online throughout the Netherlands"
                : "Den Bosch, Noord-Brabant — en online door heel Nederland"}
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
            className="button button--small button--solid"
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
            ? "Lifestyle coaching does not replace medical treatment."
            : "Leefstijlcoaching vervangt geen medische behandeling."}
        </p>
      </div>
    </footer>
  );
}
