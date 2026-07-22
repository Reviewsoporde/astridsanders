# CLAUDE.md — AstridSanders.com

## Project Overview

Dutch-language lead-generation website for **Astrid Sanders Leefstijlcoaching** (AstridSanders.com), built by Sterk Systems NL. Astrid is an accredited lifestyle coach (leefstijlcoach) in Den Bosch, specialized in **reuma (rheumatism) and artrose (osteoarthritis)**. Her USP: she is both a certified coach (Sonnevelt-trained, BLCN-affiliated) and an *ervaringsdeskundige* — she lived through severe rheumatic disease herself and improved through a science-backed, largely plant-based lifestyle approach.

- **Primary conversion goal:** requests for the "Gratis Gezondheidscheck" (a free phone intake — name, phone, preferred call time; no booking calendar).
- **Secondary conversion:** WhatsApp contact ("Liever eerst appen?").
- **Audience:** Dutch-speaking; local (Den Bosch/Brabant) + national via online coaching.

## Tech Stack

- **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**
- Deployed on **Vercel**
- Package manager: **npm**

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
| `Website Strategy input.md` | Background/strategy. Astrid's full story, tone-of-voice rules (§10), CTA/form rationale (§9), business data (§16), future SEO cluster roadmap (§18), open action items (§19). |

**Precedence rule: when the two documents conflict, the SEO doc wins.** Known resolved conflicts:

- Navigation = the SEO doc's 8-page structure, **not** the Strategy doc's `Particulier | Zakelijk | Zorg Professionals` menu.
- Pricing **is** published on the site (SEO doc), despite the Strategy doc saying "prices later".

## Site Map (v1)

| Page | Route |
|---|---|
| Home | `/` |
| Leefstijlcoaching bij Reuma | `/leefstijlcoaching-reuma/` |
| Leefstijlcoaching bij Artrose | `/leefstijlcoaching-artrose/` |
| Online Leefstijlcoaching | `/online-leefstijlcoaching/` |
| Leefstijlcoaching voor Bedrijven | `/leefstijlcoaching-bedrijven/` |
| Zorgprofessionals | `/zorgprofessionals/` |
| Over Astrid | `/over-astrid/` |
| Contact | `/contact/` |
| Gratis Gezondheidscheck | `/gratis-gezondheidscheck/` |

Main nav CTA button: **Gratis Gezondheidscheck**.

> Note: the SEO doc's nav proposal mentions a "Leefstijlcoaching bij Ontstekingsklachten" page, but no content draft exists for it. **Not in scope for v1** unless the client confirms and supplies content.

## Hard Content Rules (never violate)

1. **Use the SEO doc copy as-is.** The Dutch copy is keyword-engineered — do not paraphrase, "improve", or translate it. Preserve the exact H1/H2/H3 hierarchy per page.
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
- **WhatsApp button** as secondary CTA site-wide ("Liever eerst appen? Stuur een WhatsApp-bericht"). Number = Astrid's current (private) number, TBD.

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

**Layout:** follow the "Recommended layout" notes per section in the SEO doc — text-left/photo-right heroes, three USP cards, two-column recognition lists, five service cards, numbered 3-step process blocks, pricing cards, FAQ accordions, closing health-check form.

**Pricing (published):** Gratis gezondheidscheck — €0 · Intake — €99 · Los coachingsgesprek — €125/uur · 12-weken traject (6 sessies) — €750.

## Business Facts

- Email: `astrid@astridsanders.com` (info@ vs astrid@ not final)
- Location: Den Bosch; works throughout the Netherlands (online coaching)
- Accreditation: diploma Leefstijlcoach at Sonnevelt Opleidingen; member of BLCN (Beroepsvereniging Leefstijlcoaches Nederland)
- Media: Omroep Brabant interview — https://www.omroepbrabant.nl/nieuws/6000617/biefstuk-eruit-peulvruchten-erin-astrid-werd-noodgedwongen-vegan
- Partner program: PlantsForHealth (mutual linking intended; testimonial video pending)
- Unverified/pending: street address spelling, KvK number, phone number (currently her private number, also used for WhatsApp)

## Open Items (blocking or pending client input)

- [ ] GoHighLevel webhook URL for form submissions
- [ ] Hero photo of Astrid (client may supply; until then use the inspiration direction: sparkling portrait + food/healthy-life or nature association)
- [ ] PlantsForHealth testimonial video (post-launch, optional)
- [ ] KvK number for footer/legal
- [ ] Correct spelling of the street address
- [ ] Final email address choice (astrid@ vs info@)
- [ ] "Ontstekingsklachten" page: in nav proposal but no content — confirm with client
- [ ] Domain credentials (domain bought by "Roel"; Daan to obtain access for Vercel DNS setup)
