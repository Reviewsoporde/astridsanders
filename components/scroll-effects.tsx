"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function splitWords(target: HTMLElement) {
  if (target.dataset.splitReady === "true") {
    return;
  }

  const text = target.textContent?.trim();
  if (!text) {
    return;
  }

  target.dataset.splitReady = "true";
  target.setAttribute("aria-label", text);
  target.textContent = "";

  text.split(/(\s+)/).forEach((token) => {
    if (/^\s+$/.test(token)) {
      target.appendChild(document.createTextNode(token));
      return;
    }

    const word = document.createElement("span");
    word.dataset.word = "";
    word.setAttribute("aria-hidden", "true");
    word.textContent = token;
    target.appendChild(word);
  });
}

export function ScrollEffects() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        return;
      }

      const headings = gsap.utils.toArray<HTMLElement>(
        ".hero__copy h1, .section-heading h2, .story-heading h2",
      );

      headings.forEach((heading) => {
        splitWords(heading);
        const words = heading.querySelectorAll<HTMLElement>("[data-word]");

        gsap.fromTo(
          words,
          { opacity: 0.18, y: 14 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.025,
            ease: "none",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              end: "bottom 38%",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".hero__visual, .recognition-media, .process-image").forEach(
        (media) => {
          gsap.fromTo(
            media,
            { opacity: 0.72, scale: 0.92 },
            {
              opacity: 1,
              scale: 1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: media,
                start: "top 88%",
                end: "center 42%",
                scrub: true,
              },
            },
          );

          gsap.to(media, {
            opacity: 0.42,
            ease: "none",
            scrollTrigger: {
              trigger: media,
              start: "bottom 52%",
              end: "bottom 12%",
              scrub: true,
            },
          });
        },
      );

      gsap.utils
        .toArray<HTMLElement>(
          ".service-card, .pillar-card, .price-card, .trust-card, .recognition-lists > .reveal",
        )
        .forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0.78, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
              delay: (index % 4) * 0.035,
            },
          );
        });
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
