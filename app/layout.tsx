import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/playfair-display/wght.css";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://astridsanders.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Leefstijlcoach Den Bosch bij Reuma & Artrose | Astrid",
    template: "%s | Astrid Sanders",
  },
  description:
    "Persoonlijke leefstijlcoaching in Den Bosch en online voor mensen met reuma en artrose. Vraag een gratis gezondheidscheck aan.",
  alternates: {
    canonical: "/",
    languages: {
      "nl-NL": "/",
      en: "/en/",
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Astrid Sanders Leefstijlcoaching",
    title: "Leefstijlcoach Den Bosch bij Reuma & Artrose | Astrid",
    description:
      "Persoonlijke leefstijlcoaching in Den Bosch en online voor mensen met reuma en artrose. Vraag een gratis gezondheidscheck aan.",
    images: [
      {
        url: "/images/astrid-portrait-beach.png",
        width: 1536,
        height: 1024,
        alt: "Portret van Astrid Sanders, leefstijlcoach in Den Bosch",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f0",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Astrid Sanders Leefstijlcoaching",
  url: siteUrl,
  logo: `${siteUrl}/brand/astrid-sanders-monogram-primary.png`,
  email: "astrid@astridsanders.com",
  description:
    "Persoonlijke leefstijlcoaching in Den Bosch en online bij reuma, artrose en andere gezondheidsrisico’s.",
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "KvK",
      value: "42145089",
    },
    {
      "@type": "PropertyValue",
      propertyID: "KABIZ",
      value: "18109454184",
    },
    {
      "@type": "PropertyValue",
      propertyID: "BLCN",
      value: "L2125",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "'s-Hertogenbosch",
    addressRegion: "Noord-Brabant",
    addressCountry: "NL",
  },
  areaServed: ["'s-Hertogenbosch", "Den Bosch", "Noord-Brabant", "Nederland"],
  sameAs: ["https://www.linkedin.com/in/astridsanders/"],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="nl" data-scroll-behavior="smooth">
      <body>
        <SkipLink />
        <SiteHeader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </body>
    </html>
  );
}
