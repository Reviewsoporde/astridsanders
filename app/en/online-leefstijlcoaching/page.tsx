import type { Metadata } from "next";
import { OnlineCoachingPageContent } from "@/app/online-leefstijlcoaching/page";

export const metadata: Metadata = {
  title: "Online Lifestyle Coaching",
  description:
    "Personal online lifestyle coaching for rheumatism and osteoarthritis. Work practically on nutrition, sleep, stress, movement and lasting habits.",
  alternates: {
    canonical: "/en/online-leefstijlcoaching/",
    languages: {
      "nl-NL": "/online-leefstijlcoaching/",
      en: "/en/online-leefstijlcoaching/",
    },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en/online-leefstijlcoaching/",
    title: "Online Lifestyle Coaching",
    description:
      "Personal online lifestyle coaching for rheumatism and osteoarthritis. Work practically on nutrition, sleep, stress, movement and lasting habits.",
  },
};

export default function EnglishOnlineCoachingPage() {
  return <OnlineCoachingPageContent locale="en" />;
}
