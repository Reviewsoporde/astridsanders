import type { Metadata } from "next";
import { ReumaPageContent } from "@/app/leefstijlcoaching-reuma/page";

export const metadata: Metadata = {
  title: "Lifestyle Coaching for Rheumatism",
  description:
    "Lifestyle coaching for rheumatism in Den Bosch and online. Work practically on nutrition, sleep, stress, movement and lasting habits.",
  alternates: {
    canonical: "/en/leefstijlcoaching-reuma/",
    languages: {
      "nl-NL": "/leefstijlcoaching-reuma/",
      en: "/en/leefstijlcoaching-reuma/",
    },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en/leefstijlcoaching-reuma/",
    title: "Lifestyle Coaching for Rheumatism",
    description:
      "Lifestyle coaching for rheumatism in Den Bosch and online. Work practically on nutrition, sleep, stress, movement and lasting habits.",
  },
};

export default function EnglishReumaPage() {
  return <ReumaPageContent locale="en" />;
}
