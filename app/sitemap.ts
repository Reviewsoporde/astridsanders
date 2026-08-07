import type { MetadataRoute } from "next";

const routes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/leefstijlcoaching-reuma/", priority: 0.9 },
  { path: "/leefstijlcoaching-artrose/", priority: 0.9 },
  { path: "/leefstijlcoaching-gezondheidsrisicos/", priority: 0.8 },
  { path: "/leefstijlcoaching-bedrijven/", priority: 0.7 },
  { path: "/zorgprofessionals/", priority: 0.7 },
  { path: "/over-astrid/", priority: 0.7 },
  { path: "/gratis-gezondheidscheck/", priority: 0.9 },
  { path: "/contact/", priority: 0.6 },
  { path: "/en/", priority: 0.5 },
  { path: "/en/leefstijlcoaching-reuma/", priority: 0.5 },
  { path: "/en/leefstijlcoaching-artrose/", priority: 0.5 },
  { path: "/en/leefstijlcoaching-gezondheidsrisicos/", priority: 0.4 },
  { path: "/en/leefstijlcoaching-bedrijven/", priority: 0.4 },
  { path: "/en/zorgprofessionals/", priority: 0.4 },
  { path: "/en/over-astrid/", priority: 0.4 },
  { path: "/en/gratis-gezondheidscheck/", priority: 0.5 },
  { path: "/en/contact/", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://astridsanders.com").replace(
    /\/$/,
    "",
  );

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
