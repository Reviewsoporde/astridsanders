import type { Metadata } from "next";
import { ZorgprofessionalsPageContent } from "@/app/zorgprofessionals/page";

export const metadata: Metadata = {
  // The SEO doc specifies the short "| Astrid" suffix for this page, so bypass the layout template.
  title: { absolute: "Refer a Patient to a Lifestyle Coach | Astrid" },
  description:
    "Refer patients with rheumatism or osteoarthritis to complementary lifestyle coaching by Astrid Sanders, online throughout the Netherlands or in 's-Hertogenbosch.",
  alternates: {
    canonical: "/en/zorgprofessionals/",
    languages: {
      "nl-NL": "/zorgprofessionals/",
      en: "/en/zorgprofessionals/",
    },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en/zorgprofessionals/",
    title: "Refer a Patient to a Lifestyle Coach | Astrid",
    description:
      "Refer patients with rheumatism or osteoarthritis to complementary lifestyle coaching by Astrid Sanders, online throughout the Netherlands or in 's-Hertogenbosch.",
  },
};

export default function EnglishZorgprofessionalsPage() {
  return <ZorgprofessionalsPageContent locale="en" />;
}
