import type { NextConfig } from "next";

/*
 * 2026-08 revision: the site is Dutch-only now. Every /en/... route (still
 * present on disk under app/en/, deliberately not deleted — see CLAUDE.md/
 * memory for why) permanently redirects to its Dutch equivalent, so the
 * English flow is fully out of navigation, sitemap and crawl paths while
 * staying a safe fallback for old bookmarks/search results instead of a 404.
 */
const englishToDutchRedirects: Array<{ source: string; destination: string }> = [
  { source: "/en", destination: "/" },
  { source: "/en/", destination: "/" },
  { source: "/en/leefstijlcoaching-reuma/", destination: "/leefstijlcoaching-reuma/" },
  { source: "/en/leefstijlcoaching-artrose/", destination: "/leefstijlcoaching-artrose/" },
  {
    source: "/en/leefstijlcoaching-gezondheidsrisicos/",
    destination: "/leefstijlcoaching-gezondheidsrisicos/",
  },
  { source: "/en/leefstijlcoaching-bedrijven/", destination: "/leefstijlcoaching-bedrijven/" },
  { source: "/en/zorgprofessionals/", destination: "/zorgprofessionals/" },
  { source: "/en/over-astrid/", destination: "/over-astrid/" },
  { source: "/en/contact/", destination: "/contact/" },
  { source: "/en/gratis-gezondheidscheck/", destination: "/gratis-gezondheidscheck/" },
  // Legacy English "Online" page: send straight to the final Dutch destination
  // rather than chaining through /en/leefstijlcoaching-gezondheidsrisicos/.
  {
    source: "/en/online-leefstijlcoaching/",
    destination: "/leefstijlcoaching-gezondheidsrisicos/",
  },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return englishToDutchRedirects.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
