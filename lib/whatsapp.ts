import type { Locale } from "@/lib/i18n";

// Astrid's WhatsApp number (also her phone number). Overridable via env.
const DEFAULT_WHATSAPP_NUMBER = "+31 6 18341657";

const OPENING_MESSAGE: Record<Locale, string> = {
  nl: "Hallo Astrid, ik heb een vraag over leefstijlcoaching.",
  en: "Hello Astrid, I have a question about lifestyle coaching.",
};

export function whatsAppHref(locale: Locale = "nl") {
  const number = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER
  ).replace(/\D/g, "");

  return `https://wa.me/${number}?text=${encodeURIComponent(OPENING_MESSAGE[locale])}`;
}

export function phoneDisplayNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
}

export function phoneHref() {
  const number = phoneDisplayNumber().replace(/\D/g, "");
  return `tel:+${number}`;
}
