"use client";

import { CaretDown, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localizeHref, type Locale } from "@/lib/i18n";

const navigation = [
  { label: { nl: "Home", en: "Home" }, href: "/" },
  { label: { nl: "Reuma", en: "Rheumatism" }, href: "/leefstijlcoaching-reuma/" },
  { label: { nl: "Artrose", en: "Osteoarthritis" }, href: "/leefstijlcoaching-artrose/" },
  { label: { nl: "Online", en: "Online" }, href: "/online-leefstijlcoaching/" },
  { label: { nl: "Bedrijven", en: "Organisations" }, href: "/leefstijlcoaching-bedrijven/" },
  { label: { nl: "Zorgprofessionals", en: "Professionals" }, href: "/zorgprofessionals/" },
  { label: { nl: "Over Astrid", en: "About Astrid" }, href: "/over-astrid/" },
  { label: { nl: "Contact", en: "Contact" }, href: "/contact/" },
];

const coachingNavigation = navigation.slice(1, 4);
const collaborationNavigation = navigation.slice(4, 6);
const personalNavigation = navigation.slice(6);
const primaryNavigation = [navigation[0], ...navigation.slice(4)];

function getBasePath(pathname: string) {
  const basePath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return basePath.endsWith("/") ? basePath : `${basePath}/`;
}

function LanguageToggle({
  locale,
  pathname,
  onNavigate,
}: {
  locale: Locale;
  pathname: string;
  onNavigate?: () => void;
}) {
  const basePath = getBasePath(pathname);
  const englishPath = localizeHref(basePath, "en");
  const labels = locale === "en"
    ? { group: "Choose language", nl: "Switch to Dutch", en: "English selected" }
    : { group: "Kies taal", nl: "Nederlands geselecteerd", en: "Schakel naar Engels" };

  return (
    <div className="language-toggle" role="group" aria-label={labels.group}>
      <Link
        className={`language-toggle__option ${locale === "nl" ? "is-active" : ""}`}
        href={basePath}
        hrefLang="nl"
        lang="nl"
        aria-label={labels.nl}
        aria-current={locale === "nl" ? "page" : undefined}
        onClick={onNavigate}
      >
        NL
      </Link>
      <Link
        className={`language-toggle__option ${locale === "en" ? "is-active" : ""}`}
        href={englishPath}
        hrefLang="en"
        lang="en"
        aria-label={labels.en}
        aria-current={locale === "en" ? "page" : undefined}
        onClick={onNavigate}
      >
        EN
      </Link>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale: Locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "nl";
  const activePath = getBasePath(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const coachingMenuRef = useRef<HTMLDetailsElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const labels = locale === "en"
    ? {
        role: "Lifestyle coaching",
        home: "Astrid Sanders, home",
        navigation: "Main navigation",
        mobileNavigation: "Mobile navigation",
        open: "Open menu",
        close: "Close menu",
        coaching: "Coaching",
        collaboration: "Working together",
        cta: "Request a free health check",
      }
    : {
        role: "Leefstijlcoaching",
        home: "Astrid Sanders, home",
        navigation: "Hoofdnavigatie",
        mobileNavigation: "Mobiele navigatie",
        open: "Menu openen",
        close: "Menu sluiten",
        coaching: "Coaching",
        collaboration: "Samenwerken",
        cta: "Gratis gezondheidscheck aanvragen",
      };
  const homePath = localizeHref("/", locale);
  const healthCheckPath = localizeHref("/gratis-gezondheidscheck/", locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    coachingMenuRef.current?.removeAttribute("open");
  }, [locale, pathname]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const menu = coachingMenuRef.current;
      if (menu?.open && !menu.contains(event.target as Node)) {
        menu.removeAttribute("open");
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && coachingMenuRef.current?.open) {
        coachingMenuRef.current.removeAttribute("open");
        coachingMenuRef.current.querySelector("summary")?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      mobileNavRef.current?.querySelector<HTMLElement>("a, summary")?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !mobileNavRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  const coachingIsActive = coachingNavigation.some((item) => item.href === activePath);

  return (
    <header className="site-header" lang={locale}>
      <div className="site-header__inner shell">
        <Link className="wordmark" href={homePath} aria-label={labels.home}>
          <Image
            className="wordmark__image"
            src="/brand/identity/astrid-sanders-logo-horizontal.png"
            alt=""
            width={531}
            height={140}
            priority
            sizes="(max-width: 430px) 164px, (max-width: 1279px) 188px, 224px"
          />
        </Link>

        <div className="site-header__controls">
          <nav className="desktop-nav" aria-label={labels.navigation}>
            <Link
              className={activePath === "/" ? "is-active" : undefined}
              href={homePath}
              aria-current={activePath === "/" ? "page" : undefined}
            >
              {navigation[0].label[locale]}
            </Link>

            <details
              ref={coachingMenuRef}
              className={`nav-disclosure ${coachingIsActive ? "is-active" : ""}`}
            >
              <summary>
                {labels.coaching}
                <CaretDown size={14} weight="bold" aria-hidden="true" />
              </summary>
              <div className="nav-disclosure__menu">
                {coachingNavigation.map((item) => {
                  const isActive = activePath === item.href;

                  return (
                    <Link
                      key={item.href}
                      className={isActive ? "is-active" : undefined}
                      href={localizeHref(item.href, locale)}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => coachingMenuRef.current?.removeAttribute("open")}
                    >
                      {item.label[locale]}
                    </Link>
                  );
                })}
              </div>
            </details>

            {primaryNavigation.slice(1).map((item) => {
              const isActive = activePath === item.href;

              return (
                <Link
                  key={item.href}
                  className={isActive ? "is-active" : undefined}
                  href={localizeHref(item.href, locale)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label[locale]}
                </Link>
              );
            })}
            <Link className="button button--small" href={healthCheckPath}>
              {labels.cta}
            </Link>
          </nav>

          <LanguageToggle locale={locale} pathname={pathname} />

          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? labels.close : labels.open}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={25} weight="regular" /> : <List size={27} weight="regular" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          ref={mobileNavRef}
          id="mobile-navigation"
          className="mobile-nav"
          aria-label={labels.mobileNavigation}
        >
          <div className="shell mobile-nav__inner">
            <div className="mobile-nav__language">
              <LanguageToggle
                locale={locale}
                pathname={pathname}
                onNavigate={() => setIsOpen(false)}
              />
            </div>
            <Link
              className={activePath === "/" ? "is-active" : undefined}
              href={homePath}
              aria-current={activePath === "/" ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {navigation[0].label[locale]}
            </Link>

            <details className="mobile-nav__group" open={coachingIsActive}>
              <summary>
                {labels.coaching}
                <CaretDown size={16} weight="bold" aria-hidden="true" />
              </summary>
              <div className="mobile-nav__group-links">
                {coachingNavigation.map((item) => {
                  const isActive = activePath === item.href;
                  return (
                    <Link
                      key={item.href}
                      className={isActive ? "is-active" : undefined}
                      href={localizeHref(item.href, locale)}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label[locale]}
                    </Link>
                  );
                })}
              </div>
            </details>

            <details
              className="mobile-nav__group"
              open={collaborationNavigation.some((item) => item.href === activePath)}
            >
              <summary>
                {labels.collaboration}
                <CaretDown size={16} weight="bold" aria-hidden="true" />
              </summary>
              <div className="mobile-nav__group-links">
                {collaborationNavigation.map((item) => {
                  const isActive = activePath === item.href;
                  return (
                    <Link
                      key={item.href}
                      className={isActive ? "is-active" : undefined}
                      href={localizeHref(item.href, locale)}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label[locale]}
                    </Link>
                  );
                })}
              </div>
            </details>

            {personalNavigation.map((item) => {
              const isActive = activePath === item.href;
              return (
                <Link
                  key={item.href}
                  className={isActive ? "is-active" : undefined}
                  href={localizeHref(item.href, locale)}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label[locale]}
                </Link>
              );
            })}
            <Link className="button" href={healthCheckPath} onClick={() => setIsOpen(false)}>
              {labels.cta}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
