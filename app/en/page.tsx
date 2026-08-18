import type { Metadata } from "next";
import { HomePageContent } from "@/app/page";

export const metadata: Metadata = {
  title: "Lifestyle Coach for Rheumatism & Osteoarthritis | Astrid",
  description:
    "Personal lifestyle coaching throughout the Netherlands and in 's-Hertogenbosch for people with rheumatism and osteoarthritis. Request a free health check.",
  alternates: {
    canonical: "/en/",
    languages: {
      "nl-NL": "/",
      en: "/en/",
    },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en/",
    title: "Lifestyle Coach for Rheumatism & Osteoarthritis | Astrid",
    description:
      "Personal lifestyle coaching throughout the Netherlands and in 's-Hertogenbosch for people with rheumatism and osteoarthritis. Request a free health check.",
  },
};

export default function EnglishHomePage() {
  return <HomePageContent locale="en" />;
}
