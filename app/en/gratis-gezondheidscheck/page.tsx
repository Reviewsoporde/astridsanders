import type { Metadata } from "next";
import { GezondheidscheckPageContent } from "@/app/gratis-gezondheidscheck/page";
import { getHealthCheckInterest } from "@/lib/form-validation";

export const metadata: Metadata = {
  title: "Free Health Check",
  description:
    "Request a free health check: a short, no-obligation phone call about your situation, lifestyle and a suitable first step.",
  alternates: {
    canonical: "/en/gratis-gezondheidscheck/",
    languages: {
      "nl-NL": "/gratis-gezondheidscheck/",
      en: "/en/gratis-gezondheidscheck/",
    },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en/gratis-gezondheidscheck/",
    title: "Free Health Check",
    description:
      "Request a free health check: a short, no-obligation phone call about your situation, lifestyle and a suitable first step.",
  },
};

export default async function EnglishGezondheidscheckPage({
  searchParams,
}: {
  searchParams: Promise<{ interesse?: string }>;
}) {
  const { interesse } = await searchParams;
  return (
    <GezondheidscheckPageContent
      interest={getHealthCheckInterest(interesse)}
      locale="en"
    />
  );
}
