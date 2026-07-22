"use client";

import { usePathname } from "next/navigation";

export function SkipLink() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  return (
    <a className="skip-link" href="#main-content" lang={isEnglish ? "en" : "nl"}>
      {isEnglish ? "Skip to content" : "Naar de inhoud"}
    </a>
  );
}
