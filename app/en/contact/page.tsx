import type { Metadata } from "next";
import { ContactPageContent } from "@/app/contact/page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Astrid Sanders, lifestyle coach in Den Bosch. Send a message, email or WhatsApp — or request a free health check straight away.",
  alternates: {
    canonical: "/en/contact/",
    languages: {
      "nl-NL": "/contact/",
      en: "/en/contact/",
    },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en/contact/",
    title: "Contact",
    description:
      "Get in touch with Astrid Sanders, lifestyle coach in Den Bosch. Send a message, email or WhatsApp — or request a free health check straight away.",
  },
};

export default function EnglishContactPage() {
  return <ContactPageContent locale="en" />;
}
