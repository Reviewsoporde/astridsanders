import { MapPin } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { localizeHref, type Locale } from "@/lib/i18n";

const footerNavigation = [
  { label: { nl: "Reuma", en: "Rheumatism" }, href: "/leefstijlcoaching-reuma/" },
  { label: { nl: "Artrose", en: "Osteoarthritis" }, href: "/leefstijlcoaching-artrose/" },
  { label: { nl: "Online", en: "Online coaching" }, href: "/online-leefstijlcoaching/" },
  { label: { nl: "Bedrijven", en: "Organisations" }, href: "/leefstijlcoaching-bedrijven/" },
  { label: { nl: "Zorgprofessionals", en: "Professionals" }, href: "/zorgprofessionals/" },
  { label: { nl: "Over Astrid", en: "About Astrid" }, href: "/over-astrid/" },
  { label: { nl: "Contact", en: "Contact" }, href: "/contact/" },
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
              src="/brand/identity/astrid-sanders-logo-stacked.png"
              alt=""
              width={254}
              height={268}
              sizes="158px"
            />
          </Link>
          <p>
            {isEnglish
              ? "Lifestyle coaching for rheumatism and osteoarthritis."
              : "Leefstijlcoaching bij reuma en artrose."}
          </p>
        </div>

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

        <div className="site-footer__contact">
          <div className="site-footer__location">
            <MapPin size={22} weight="regular" aria-hidden="true" />
            <p>
              {isEnglish
                ? "Den Bosch and online throughout the Netherlands"
                : "Den Bosch en online door heel Nederland"}
            </p>
          </div>
          <a href="mailto:astrid@astridsanders.com">astrid@astridsanders.com</a>
          <Link
            className="button button--small"
            href={localizeHref("/gratis-gezondheidscheck/", locale)}
          >
            {isEnglish ? "Request a free health check" : "Gratis gezondheidscheck aanvragen"}
          </Link>
        </div>
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
