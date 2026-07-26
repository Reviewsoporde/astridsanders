import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { whatsAppHref } from "@/lib/whatsapp";

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
  return (
    <a
      className={`${compact ? "text-link" : "button button--secondary"} ${className}`.trim()}
      href={whatsAppHref(locale)}
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
