import type { Metadata } from "next";
import { BedrijvenPageContent } from "@/app/leefstijlcoaching-bedrijven/page";

export const metadata: Metadata = {
  title: "Lifestyle Coaching for Organisations",
  description:
    "Practical lifestyle coaching for organisations with workshops, group coaching, health checks and personal guidance for employees.",
  alternates: {
    canonical: "/en/leefstijlcoaching-bedrijven/",
    languages: {
      "nl-NL": "/leefstijlcoaching-bedrijven/",
      en: "/en/leefstijlcoaching-bedrijven/",
    },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en/leefstijlcoaching-bedrijven/",
    title: "Lifestyle Coaching for Organisations",
    description:
      "Practical lifestyle coaching for organisations with workshops, group coaching, health checks and personal guidance for employees.",
  },
};

export default function EnglishBedrijvenPage() {
  return <BedrijvenPageContent locale="en" />;
}
