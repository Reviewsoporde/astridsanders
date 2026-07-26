"use client";

import { CaretDown, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
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
const flatDesktopNavigation = [...collaborationNavigation, ...personalNavigation];

/** Width at which the full desktop navigation replaces the hamburger menu. */
const DESKTOP_NAV_QUERY = "(min-width: 1160px)";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const disclosureRefs = useRef<Array<HTMLDetailsElement | null>>([]);
  const closeTimer = useRef<number | null>(null);
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
        cta: "Free health check",
        ctaFull: "Request a free health check",
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
        cta: "Gratis gezondheidscheck",
        ctaFull: "Gratis gezondheidscheck aanvragen",
      };
  const homePath = localizeHref("/", locale);
  const healthCheckPath = localizeHref("/gratis-gezondheidscheck/", locale);

  const closeDisclosures = useCallback((except?: HTMLDetailsElement | null) => {
    disclosureRefs.current.forEach((element) => {
      if (element && element !== except) {
        element.removeAttribute("open");
      }
    });
  }, []);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  /** Hover-to-open only makes sense on a real pointer with the desktop nav visible. */
  const supportsHoverNav = useCallback(
    () =>
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.matchMedia(DESKTOP_NAV_QUERY).matches,
    [],
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Every navigation link closes the mobile panel itself; this only resets the
  // desktop dropdowns, which are plain DOM state.
  useEffect(() => {
    closeDisclosures();
  }, [pathname, closeDisclosures]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 8);
    };
    const handleScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      const insideOpenMenu = disclosureRefs.current.some(
        (element) => element?.open && element.contains(target),
      );
      if (!insideOpenMenu) {
        closeDisclosures();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }
      const openMenu = disclosureRefs.current.find((element) => element?.open);
      if (openMenu) {
        openMenu.removeAttribute("open");
        openMenu.querySelector("summary")?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearCloseTimer();
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDisclosures, clearCloseTimer]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      mobileNavRef.current?.querySelector<HTMLElement>("a, summary")?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      // Keep focus inside the header while the panel covers the page. Collected
      // from the whole header in DOM order so the logo and the language toggle
      // stay reachable, and filtered to what is actually rendered — links inside
      // a collapsed <details> are not focusable.
      const header = mobileNavRef.current?.closest("header");
      const focusables = Array.from(
        header?.querySelectorAll<HTMLElement>("a[href], summary, button") ?? [],
      ).filter((element) => element.offsetParent !== null);

      if (focusables.length === 0) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
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
      document.body.style.paddingRight = previousPaddingRight;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  const coachingIsActive = coachingNavigation.some((item) => item.href === activePath);
  const collaborationIsActive = collaborationNavigation.some((item) => item.href === activePath);

  const renderDisclosure = (
    index: number,
    label: string,
    items: typeof navigation,
    isActive: boolean,
  ) => (
    <details
      ref={(element) => {
        disclosureRefs.current[index] = element;
      }}
      className={`nav-disclosure ${isActive ? "is-active" : ""}`}
      onMouseEnter={(event) => {
        if (!supportsHoverNav()) {
          return;
        }
        clearCloseTimer();
        const element = event.currentTarget;
        closeDisclosures(element);
        element.setAttribute("open", "");
      }}
      onMouseLeave={(event) => {
        if (!supportsHoverNav()) {
          return;
        }
        const element = event.currentTarget;
        clearCloseTimer();
        closeTimer.current = window.setTimeout(() => {
          element.removeAttribute("open");
        }, 160);
      }}
    >
      <summary
        onClick={(event) => {
          // Already opened by hover: a click would otherwise collapse it again.
          if (supportsHoverNav() && event.currentTarget.parentElement?.hasAttribute("open")) {
            event.preventDefault();
            return;
          }
          clearCloseTimer();
          closeDisclosures(event.currentTarget.parentElement as HTMLDetailsElement);
        }}
        onKeyDown={(event) => {
          if (event.key !== "ArrowDown") {
            return;
          }
          event.preventDefault();
          const menu = event.currentTarget.parentElement as HTMLDetailsElement | null;
          menu?.setAttribute("open", "");
          menu?.querySelector<HTMLElement>(".nav-disclosure__menu a")?.focus();
        }}
      >
        {label}
        <CaretDown size={14} weight="bold" aria-hidden="true" />
      </summary>
      <div className="nav-disclosure__menu">
        {items.map((item) => {
          const itemIsActive = activePath === item.href;

          return (
            <Link
              key={item.href}
              className={itemIsActive ? "is-active" : undefined}
              href={localizeHref(item.href, locale)}
              aria-current={itemIsActive ? "page" : undefined}
              onClick={() => closeDisclosures()}
            >
              {item.label[locale]}
            </Link>
          );
        })}
      </div>
    </details>
  );

  return (
    <header
      className={`site-header ${isScrolled ? "is-scrolled" : ""} ${isOpen ? "is-menu-open" : ""}`}
      lang={locale}
    >
      <div className="site-header__inner shell">
        <Link className="wordmark" href={homePath} aria-label={labels.home}>
          <Image
            className="wordmark__image"
            src="/brand/identity/astrid-sanders-logo-horizontal.png"
            alt=""
            width={531}
            height={140}
            priority
            sizes="(max-width: 430px) 164px, (max-width: 1180px) 188px, 224px"
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

            {renderDisclosure(0, labels.coaching, coachingNavigation, coachingIsActive)}

            {flatDesktopNavigation.map((item) => {
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
            <Link
              className="button button--small button--solid"
              href={healthCheckPath}
              aria-label={labels.ctaFull}
            >
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
        <>
          <div className="mobile-nav__scrim" aria-hidden="true" />
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

              <details className="mobile-nav__group" open={collaborationIsActive}>
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
              <Link className="button button--solid" href={healthCheckPath} onClick={() => setIsOpen(false)}>
                {labels.ctaFull}
              </Link>
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
}
