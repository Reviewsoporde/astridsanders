# 9. Site-wide QA

- [x] **Full route/link audit** — production server crawl passed 18 rendered NL/EN routes and 24 unique internal href targets; 30 literal assets exist; fragments resolve. Active external sources returned successfully, except LinkedIn's expected automated anti-bot response (the destination is retained for manual browser use). `(0:31:54–0:32:13)`
- [x] **Mirror every copy/structure change to the EN variant** — changed strings, including the two new image alt texts, are covered by `lib/translations/` and `lib/i18n.tsx`.
- [x] **SEO for the renamed Gezondheidsrisico’s page** — NL/EN canonical routes, metadata, hreflang alternates, sitemap entries and permanent redirects were added together. The homepage H1 was reviewed separately: "Den Bosch" was removed from the H1 but intentionally retained in metadata/service-area context.
- [x] `npm run lint` passes.
- [x] `npm run build` passes; 29 routes/pages generated, including the new NL/EN canonical routes and both legacy redirects.
- [x] `git diff --check` passes.
