# 3. Online Leefstijlcoaching → Gezondheidsrisico’s

> **Completed 7 August 2026.** Astrid’s final copy and visible tab name were supplied in `260730 v2 website feedback.docx.pdf`. The implementation uses medically safer wording where the source text made outcome, treatment or reimbursement guarantees.

- [x] **Convert the former `/online-leefstijlcoaching/` page into “Leefstijlcoaching voor jouw gezondheid”.** The page now addresses other health risks and questions alongside reuma/artrose, including weight, blood pressure, blood sugar, stress and daily functioning. `(0:32–0:35)`
  - [x] Structure follows the proven reuma/artrose page spine: hero, three recognition columns, lifestyle pillars, personal plan, story, three steps, pricing, FAQs and health-check form.
  - [x] Astrid’s supplied copy from `260730 v2 website feedback.docx.pdf` is implemented.
  - [x] The three laptop images were replaced by two new non-laptop editorial images: `gezondheidsrisicos-hero.webp` and `gezondheidsrisicos-bewegen.webp`.
  - [x] Final visible name: **Gezondheidsrisico’s**. H1: **Leefstijlcoaching voor jouw gezondheid**.
  - [x] Header, footer and homepage service-card labels were updated.
  - [x] New canonical slug: `/leefstijlcoaching-gezondheidsrisicos/`; NL and EN legacy Online URLs return permanent 308 redirects.
  - [x] NL/EN metadata, hreflang alternates, translations and sitemap entries were updated together.
  - [x] Medical boundaries were added for diabetes, cardiovascular recovery, COPD/asthma, burn-out, unexplained fatigue, movement, dietary treatment and medication changes.
  - [x] PDF guarantee/cure language and unconditional reimbursement claims were not published.

## Verification

- [x] `npm run build` passes; both new canonical routes are generated.
- [x] `npm run lint` passes.
- [x] Local HTTP checks return 200 for NL/EN canonical routes and 308 for both legacy Online routes.
- [x] NL and EN H1/content checks pass without the tested Dutch strings leaking into the English page.
