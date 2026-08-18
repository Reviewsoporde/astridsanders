import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HealthCheckForm } from "@/components/health-check-form";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { localizeHref, localizeReactNode, type Locale } from "@/lib/i18n";
import { phoneDisplayNumber, phoneHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Astrid Sanders, leefstijlcoach voor particulieren, bedrijven en zorgprofessionals. Stuur een bericht, mail of vraag een gratis gezondheidscheck aan.",
  alternates: {
    canonical: "/contact/",
  },
};

export function ContactPageContent({ locale }: { locale: Locale }) {
  const content = (
    <div lang={locale}>
      <main id="main-content">
        <section className="section" aria-labelledby="contact-title">
          <div className="shell contact-layout">
            <Reveal>
              <h1 id="contact-title">Contact</h1>
              <p className="page-lead">
                Of je nu particulier bent, een organisatie vertegenwoordigt, als zorgprofessional
                wilt doorverwijzen of samenwerken, of Astrid wilt vragen voor een presentatie: stuur
                een bericht via het formulier en Astrid neemt persoonlijk contact met je op.
              </p>
              <p>
                Wil je liever direct een kort en vrijblijvend telefoongesprek over jouw persoonlijke
                situatie? Vraag dan de gratis gezondheidscheck aan. Je laat alleen je naam,
                telefoonnummer en voorkeursmoment achter.
              </p>
              <Link
                className="button button--solid button--gezondheidscheck cta-inline"
                href={localizeHref("/gratis-gezondheidscheck/", locale)}
              >
                Gratis gezondheidscheck aanvragen
              </Link>

              <div className="contact-visual">
                <Image
                  src="/images/generated/contact-hero.png"
                  alt="Portret van Astrid Sanders in de buitenlucht aan zee"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>

              <div className="contact-details">
                <div className="site-footer__location">
                  <EnvelopeSimple size={22} weight="regular" aria-hidden="true" />
                  <p>
                    <a href="mailto:astrid@astridsanders.com">astrid@astridsanders.com</a>
                  </p>
                </div>
                <div className="site-footer__location">
                  <Phone size={22} weight="regular" aria-hidden="true" />
                  <p>
                    <a href={phoneHref()}>{phoneDisplayNumber()}</a>
                  </p>
                </div>
                <div className="site-footer__location">
                  <MapPin size={22} weight="regular" aria-hidden="true" />
                  <p>&apos;s-Hertogenbosch — en online door heel Nederland</p>
                </div>
                <WhatsAppLink locale={locale} compact />
              </div>
            </Reveal>

            <Reveal className="contact-panel" delay={0.08}>
              <h2>Stuur een bericht</h2>
              <p>
                Beschrijf kort je vraag of situatie. Astrid reageert meestal binnen twee werkdagen.
              </p>
              <HealthCheckForm locale={locale} source="contact" submitLabel="Bericht versturen" />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );

  return localizeReactNode(content, locale);
}

export default function ContactPage() {
  return <ContactPageContent locale="nl" />;
}
