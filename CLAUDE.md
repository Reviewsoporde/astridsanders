# CLAUDE.md — AstridSanders.com

## Project Overview

Dutch-language lead-generation website for **Astrid Sanders Leefstijlcoaching** (AstridSanders.com), built by Sterk Systems NL. Astrid is an accredited lifestyle coach (leefstijlcoach) in Den Bosch, specialized in **reuma (rheumatism) and artrose (osteoarthritis)**. Her USP: she is both a certified coach (Sonnevelt-trained, BLCN-affiliated) and an *ervaringsdeskundige* — she lived through severe rheumatic disease herself and improved through a science-backed, largely plant-based lifestyle approach.

- **Primary conversion goal:** requests for the "Gratis Gezondheidscheck" (a free phone intake — name, phone, preferred call time; no booking calendar).
- **Secondary conversion:** WhatsApp contact ("Liever eerst appen?").
- **Audience:** Dutch-speaking; local (Den Bosch/Brabant) + national via online coaching.

## Tech Stack

- **Next.js (App Router)** + **TypeScript**
- Deployed on **Vercel**
- Package manager: **npm**

> **Styling: hand-written semantic CSS, not utility classes.** Tailwind v4 is wired through PostCSS but there is no `tailwind.config.*`, no `@theme` and no `@apply` — it contributes only preflight. Every `className` in the codebase is a hand-authored BEM-ish semantic class, and **all** styling lives in the single file `app/globals.css`, organised by comment banners. Do not introduce utility classes; match the surrounding CSS.

### Conventions

- Server Components by default; client components only where interactivity requires it (forms, FAQ accordion, mobile nav).
- One route folder per page, matching the SEO slug **exactly** (see Site Map). URLs use trailing slashes per the SEO doc (`trailingSlash: true` in `next.config`).
- Per-page metadata via the Next.js Metadata API, using the exact SEO titles/meta descriptions from the SEO doc.
- Shared section components (reused across pages): `Hero`, `PricingCards`, `FAQAccordion`, `CTABlock`, `HealthCheckForm`, `WhatsAppButton`.
- All user-facing copy is **Dutch**; code, comments, and docs are English.

## Source-of-Truth Documents

| Document | Role |
|---|---|
| `Kopie van  Astrid Sanders - SEO - This is the right one.md` | **LEADING.** Page structure, URL slugs, SEO titles/meta descriptions, exact H1/H2/H3 hierarchy, full page copy, FAQ content, pricing. |
| `260730 v2 website feedback.docx.pdf` | **LATEST CLIENT FEEDBACK for `/over-astrid/` and the former Online page.** Its supplied page content and visible tab name supersede the older SEO copy for those two pages. Medical-claim safety still takes priority over unsafe guarantee or treatment language in the PDF. |
| `Website Strategy input.md` | Background/strategy. Astrid's full story, tone-of-voice rules (§10), CTA/form rationale (§9), business data (§16), future SEO cluster roadmap (§18), open action items (§19). |

**Precedence rule: when the two documents conflict, the SEO doc wins.** Known resolved conflicts:

- Exception: for the About page and the former Online page, `260730 v2 website feedback.docx.pdf` is newer client input and wins over the SEO doc. The new canonical route is `/leefstijlcoaching-gezondheidsrisicos/`; the old Online routes are permanent redirects.
- Navigation = the SEO doc's 8-page structure, **not** the Strategy doc's `Particulier | Zakelijk | Zorg Professionals` menu.
- Pricing **is** published on the site (SEO doc), despite the Strategy doc saying "prices later".

## Site Map (v1)

| Page | Route |
|---|---|
| Home | `/` |
| Leefstijlcoaching bij Reuma | `/leefstijlcoaching-reuma/` |
| Leefstijlcoaching bij Artrose | `/leefstijlcoaching-artrose/` |
| Leefstijlcoaching bij Gezondheidsrisico’s | `/leefstijlcoaching-gezondheidsrisicos/` |
| Leefstijlcoaching voor Bedrijven | `/leefstijlcoaching-bedrijven/` |
| Zorgprofessionals | `/zorgprofessionals/` |
| Over Astrid | `/over-astrid/` |
| Contact | `/contact/` |
| Gratis Gezondheidscheck | `/gratis-gezondheidscheck/` |

Main nav CTA button: **Gratis Gezondheidscheck**.

> Note: the SEO doc's nav proposal mentions a "Leefstijlcoaching bij Ontstekingsklachten" page, but no content draft exists for it. **Not in scope for v1** unless the client confirms and supplies content.

## Hard Content Rules (never violate)

1. **Use the current page source document as-is where medically safe.** The SEO doc remains leading except for the two pages superseded by `260730 v2 website feedback.docx.pdf`. Preserve confirmed H1/H2/H3 structure; adapt only where needed for medical-claim safety, factual precision or implementation consistency.
2. **Medical-claim compliance.** Never state or imply that coaching cures, treats, or replaces medical care for reuma/artrose. Keep every disclaimer intact ("vervangt geen medische behandeling", "geen gegarandeerd resultaat", medication decisions belong to the treating physician).
3. **Tone-of-voice choices (confirmed by the client, Strategy doc §10):**
   - Say **"minder afhankelijk van medicatie"** — never "medicatievrij".
   - Say **"plantaardig"** — never "vegan" in marketing copy (80/20 approach, no 100% requirement).
   - Keep sugar/saturated-fat details **vague/general** — specifics belong in the personal coaching trajectory, not on the site.
   - Practical and personal; explicitly **no "geitenwollensokken"/spiritual-wellness vibe**.
4. **No testimonials in v1** — deliberate client decision, not an oversight.

## Conversion & Forms

- **Primary CTA on every page** (hero, mid-page, footer): "Gratis gezondheidscheck aanvragen".
- **Health-check form** (deliberately minimal, low threshold): naam, telefoonnummer, voorkeursmoment voor bellen (ochtend/middag/avond). **No email field, no booking calendar.**
- **Contact page form** (secondary, for people further along): longer, with a free-text message field.
- **Form handling:** forms POST to a **GoHighLevel CRM webhook**. The webhook URL is not available yet — build forms against a configurable endpoint (env var `GHL_WEBHOOK_URL`), submitted via a Next.js route handler / server action so the URL stays server-side.
- **WhatsApp button** as secondary CTA site-wide ("Liever eerst appen? Stuur een WhatsApp-bericht"). Number = Astrid's current (private) number: **+31 6 18341657** (hardcoded default in `components/whatsapp-link.tsx`, overridable via `NEXT_PUBLIC_WHATSAPP_NUMBER`).

## SEO / Technical Requirements

- Per-page `<title>` and meta description exactly from the SEO doc's "SEO Setup" tables.
- **JSON-LD structured data:** `FAQPage` on pages with FAQ sections; `LocalBusiness` (Den Bosch, Noord-Brabant) site-wide.
- `sitemap.xml` and `robots.txt` (Next.js metadata routes).
- Semantic HTML headings matching the doc's H1/H2/H3 structure; one H1 per page.
- FAQ answers start with a direct answer in the first sentence (AEO/GEO requirement — already written that way in the copy).
- **Future roadmap (not v1):** cluster/blog pages from Strategy doc §18 (voeding bij reuma, bewegen met artrose, leefstijl bij eczeem/Crohn, etc.) and local SEO landing pages (Rosmalen, Vught, Oss, Veghel, Uden, Eindhoven).

## Design Direction

**Inspiration (explicitly NOT 1:1 copies):**

- https://melnoakes.com/ — overall feel: clean, minimal wellness aesthetic; hero-to-conversion flow; personal photography of the coach; calm neutral palette; conversational but professional tone; simple nav.
- https://www.yvofit.nl/Pakketten/ — for the **Tarieven sections**: equal-width pricing cards, a highlighted "meest gekozen" tier, short benefit bullets, one contextual CTA per card.

**Imagery:** natural and energetic — nature, outdoor movement, healthy food, daylight. Astrid has a personal affinity with nature and **Norway**; that mood (health, outdoors, calm) fits. Explicitly **not** clinical/medical and **not** vague-spiritual.

### Register: zakelijk, not zweverig (client lens, revision round 2026-08)

Astrid's first-impression feedback on the built site: *"iets te alternatief, iets te zweverig, iets te socio. Ik ben een wat zakelijker type."* This is a **lens applied to every imagery, styling and copy decision** — not a one-off task. It sharpens the existing "geen geitenwollensokken" rule, it does not replace it.

> **Zakelijk = the site looks like it was made by someone who runs a practice, not by someone who is on a journey.** Structure over atmosphere. Evidence over feeling. Daylight over mood. Every element has a job.

- **Never (visual):** serif italic as an emotional device · centred manifesto or pull-quote blocks · frosted glass · radial gradient washes · decorative circles and organic shapes · drop-shadow "float" on photos · scroll reveals slower than ~400 ms · pill radii outside segmented controls · soft-wellness glyphs (leaf, heart, lotus, sun, hands).
- **Never (photography):** linen · barefoot · meditation or yoga poses · candles · tea · incense · mats · sun flare · hands-on-heart · eyes closed · flowing hair · heavy bokeh · pastel wash · people gazing into the middle distance.
- **Always (photography):** daylight, unfiltered · real clothes (blazer, smart-casual, sportswear) · direct eye contact or purposeful action · settings that read as work or real life (consult table, office, workshop, kitchen, city street, gym, city bike) · mixed ages · men in roughly a third of frames · Astrid's hair shoulder-length · plants as environment, never as prop-styling.
- **Proof, not sentiment.** Credibility is carried by named credentials, registers and media in plain text — never third-party logos (permission + implied endorsement), never invented numbers, and no testimonials in v1.

Long-form do/don't, decision log and enforcement greps: `revision-checklist/01a-zakelijk-lens.md`. Per-photo art direction: `revision-checklist/01b-photo-brief.md`.

**Layout:** follow the "Recommended layout" notes per section in the SEO doc — text-left/photo-right heroes, three USP cards, two-column recognition lists, five service cards, numbered 3-step process blocks, pricing cards, FAQ accordions, closing health-check form.

**Pricing (published; updated by 2026 feedback):** Gratis gezondheidscheck — €0 · Intake — €99 · Los coachingsgesprek — €125/uur · 12-weken traject (6 sessies) — vanaf €499.

## Business Facts

- Email: `astrid@astridsanders.com` (info@ vs astrid@ not final)
- Location: Den Bosch; works throughout the Netherlands (online coaching)
- Training: diploma Leefstijlcoach at Sonnevelt Opleidingen
- KABIZ registration number: `18109454184`
- BLCN membership number: `L2125`
- KvK number: `42145089`
- Media: Omroep Brabant interview — https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan
- Partner program: PlantsForHealth (mutual linking intended; testimonial video pending)
- Other roles/interests confirmed in the 2026 feedback: Furuheim Lodge in Vrådal, Norway; board member of Stichting DE 4DAAGSE
- Unverified/pending: street address spelling, phone number (currently her private number, also used for WhatsApp)

## Open Items (blocking or pending client input)

- [ ] GoHighLevel webhook URL for form submissions
- [ ] Hero photo of Astrid (client may supply; until then use the inspiration direction: sparkling portrait + food/healthy-life or nature association)
- [ ] PlantsForHealth testimonial video (post-launch, optional)
- [ ] Correct spelling of the street address
- [ ] Final email address choice (astrid@ vs info@)
- [ ] "Ontstekingsklachten" page: in nav proposal but no content — confirm with client
- [ ] Domain credentials (domain bought by "Roel"; Daan to obtain access for Vercel DNS setup)
- [x] **Final primary and reversed logo variants.** Revised on 17 August 2026: Astrid supplied a new **horizontal** lockup (mark · rule · two-line "ASTRID SANDERS"), replacing the stacked 8 August lockup. Note the revised mark **drops the "LEEFSTIJLCOACHING" descriptor** — the site no longer carries it in the header or footer. Inks are unchanged: sage `#738472` and graphite `#666865`.
  - Master artwork: `brand-source/astridsanders_logo.jpg`. Production assets are generated from it by `scripts/build-brand-assets.mjs` (keys out the white JPEG field by solving the compositing equation per pixel against the two known inks, so anti-aliasing survives as alpha). Re-run it if the client sends new artwork, then re-run `scripts/generate-favicon.ps1`.
  - Outputs: `astrid-sanders-logo-primary.png` (header), `astrid-sanders-logo-reversed.png` (dark footer, all-white), `astrid-sanders-monogram-primary.png` (LocalBusiness structured data + favicon source). No CSS color filter is used.
  - The lockup is **3.318:1**, versus 1.68:1 for the old stacked mark, so width buys far less height. Sizing lives in `app/globals.css` (`.wordmark`, `.site-footer__logo-link`); update the `width`/`height` props in `components/site-header.tsx` and `components/site-footer.tsx` together with it.
- [x] ~~**Logo vs. site palette mismatch.**~~ Resolved by the earth-tone palette revision (2026-08): the site now uses deep olive (`#333D31`), sage (`#A9AC8C`), cream/sand surfaces, and a tan accent (`#C09877`), which harmonizes with the logo's forest green + terracotta. Palette tokens live in `app/globals.css` `:root`.
