import type { Metadata } from "next";
import { OverAstridPageContent } from "@/app/over-astrid/page";

export const metadata: Metadata = {
  title: "About Astrid",
  description:
    "Read the personal story, professional background and registrations of lifestyle coach Astrid Sanders.",
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
      "Read the personal story, professional background and registrations of lifestyle coach Astrid Sanders.",
  },
};

export default function EnglishOverAstridPage() {
  return <OverAstridPageContent locale="en" />;
}
