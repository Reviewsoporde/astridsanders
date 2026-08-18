import type { Metadata } from "next";
import { ArtrosePageContent } from "@/app/leefstijlcoaching-artrose/page";

export const metadata: Metadata = {
  title: "Lifestyle Coaching for Osteoarthritis",
  description:
    "Personal lifestyle coaching for osteoarthritis, throughout the Netherlands and in 's-Hertogenbosch. Work practically on nutrition, movement, sleep and lasting habits.",
  alternates: {
    canonical: "/en/leefstijlcoaching-artrose/",
    languages: {
      "nl-NL": "/leefstijlcoaching-artrose/",
      en: "/en/leefstijlcoaching-artrose/",
    },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en/leefstijlcoaching-artrose/",
    title: "Lifestyle Coaching for Osteoarthritis",
    description:
      "Personal lifestyle coaching for osteoarthritis, throughout the Netherlands and in 's-Hertogenbosch. Work practically on nutrition, movement, sleep and lasting habits.",
  },
};

export default function EnglishArtrosePage() {
  return <ArtrosePageContent locale="en" />;
}
