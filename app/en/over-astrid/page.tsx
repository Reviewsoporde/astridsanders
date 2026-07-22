import type { Metadata } from "next";
import { OverAstridPageContent } from "@/app/over-astrid/page";

export const metadata: Metadata = {
  title: "About Astrid",
  description:
    "From years of living with rheumatism to helping others regain control of their health. Read the story of lifestyle coach Astrid Sanders.",
  alternates: {
    canonical: "/en/over-astrid/",
    languages: {
      "nl-NL": "/over-astrid/",
      en: "/en/over-astrid/",
    },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en/over-astrid/",
    title: "About Astrid",
    description:
      "From years of living with rheumatism to helping others regain control of their health. Read the story of lifestyle coach Astrid Sanders.",
  },
};

export default function EnglishOverAstridPage() {
  return <OverAstridPageContent locale="en" />;
}
