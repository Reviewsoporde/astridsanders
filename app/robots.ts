import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://astridsanders.com";

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/en/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
