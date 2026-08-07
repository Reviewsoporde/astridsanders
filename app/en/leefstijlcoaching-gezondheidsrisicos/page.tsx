import type { Metadata } from "next";
import { GezondheidsrisicosPageContent } from "@/app/leefstijlcoaching-gezondheidsrisicos/page";

export const metadata: Metadata = {
  title: "Lifestyle Coaching for Your Health",
  description:
    "Personal lifestyle coaching for weight, blood pressure, blood sugar, stress and other health risks. Available in Den Bosch and online.",
  alternates: {
    canonical: "/en/leefstijlcoaching-gezondheidsrisicos/",
    languages: {
      "nl-NL": "/leefstijlcoaching-gezondheidsrisicos/",
      en: "/en/leefstijlcoaching-gezondheidsrisicos/",
    },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en/leefstijlcoaching-gezondheidsrisicos/",
    title: "Lifestyle Coaching for Your Health",
    description:
      "Personal lifestyle coaching for weight, blood pressure, blood sugar, stress and other health risks. Available in Den Bosch and online.",
  },
};

export default function EnglishGezondheidsrisicosPage() {
  return <GezondheidsrisicosPageContent locale="en" />;
}
