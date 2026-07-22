import { Leaf } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { FAQList } from "@/components/faq-list";
import { HealthCheckForm } from "@/components/health-check-form";
import { Reveal } from "@/components/reveal";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { localizeReactNode, localizeValue, type Locale } from "@/lib/i18n";

type FAQ = {
  question: string;
  answer: string[];
};

type FaqHealthCheckSectionProps = {
  title: string;
  faqs: FAQ[];
  locale?: Locale;
};

export function FaqHealthCheckSection({ title, faqs, locale = "nl" }: FaqHealthCheckSectionProps) {
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

  const content = (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="shell faq-layout">
        <div>
          <Reveal className="section-heading section-heading--narrow">
            <h2 id="faq-title">{title}</h2>
          </Reveal>
          <FAQList items={localizedFaqs} />
        </div>

        <Reveal className="health-check-panel" delay={0.08}>
          <div className="health-check-panel__media">
            <Image
              src="/images/generated/health-check-call.webp"
              alt="Astrid Sanders voert persoonlijk een telefonisch kennismakingsgesprek"
              fill
              sizes="(max-width: 900px) 100vw, 36vw"
            />
          </div>
          <div className="health-check-panel__heading">
            <Leaf size={30} weight="regular" aria-hidden="true" />
            <h3 id="gezondheidscheck">Gratis gezondheidscheck aanvragen</h3>
            <p>
              Laat je naam, telefoonnummer en voorkeursmoment achter. Astrid neemt persoonlijk
              contact met je op voor een kort en vrijblijvend telefoongesprek.
            </p>
          </div>
          <HealthCheckForm locale={locale} />
          <WhatsAppLink locale={locale} compact className="health-check-panel__whatsapp" />
        </Reveal>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );

  return localizeReactNode(content, locale);
}
