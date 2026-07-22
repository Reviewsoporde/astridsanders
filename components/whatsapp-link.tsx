import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";

type WhatsAppLinkProps = {
  className?: string;
  compact?: boolean;
  locale?: Locale;
};

export function WhatsAppLink({
  className = "",
  compact = false,
  locale = "nl",
}: WhatsAppLinkProps) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  if (!number) {
    const subject = locale === "en"
      ? "Question about lifestyle coaching"
      : "Vraag over leefstijlcoaching";

    return (
      <a
        className={`${compact ? "text-link" : "button button--secondary"} ${className}`.trim()}
        href={`mailto:astrid@astridsanders.com?subject=${encodeURIComponent(subject)}`}
      >
        <EnvelopeSimple size={compact ? 20 : 22} weight="regular" aria-hidden="true" />
        {locale === "en"
          ? "Prefer email? Contact Astrid directly"
          : "Liever eerst mailen? Neem direct contact op"}
      </a>
    );
  }

  const message = encodeURIComponent(
    locale === "en"
      ? "Hello Astrid, I have a question about lifestyle coaching."
      : "Hallo Astrid, ik heb een vraag over leefstijlcoaching.",
  );

  return (
    <a
      className={`${compact ? "text-link" : "button button--secondary"} ${className}`.trim()}
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noreferrer"
    >
      <WhatsappLogo size={compact ? 20 : 22} weight="regular" aria-hidden="true" />
      {locale === "en"
        ? "Prefer WhatsApp? Send Astrid a message"
        : "Liever eerst appen? Stuur een WhatsApp-bericht"}
    </a>
  );
}
