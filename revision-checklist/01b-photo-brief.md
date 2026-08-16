# 1b. AI-photo art-direction brief

## Execution status — 7 August 2026

- [x] **Artrose movement slot:** replaced with an ordinary Dutch city-bike scene; active page source is optimized WebP.
- [x] **Reuma lifestyle-balance slot:** replaced with a realistic strength-training gym scene; active page source is optimized WebP.
- [x] **Definitely rejected Astrid/identity-specific slots:** regenerated from the likeness references supplied in `new_Images/` (home hero, Artrose hero, Artrose personal plan, Over Astrid hero and tall media).
- [ ] **Conditional identity-specific slots:** retain pending Astrid's written KEEP/replace map; the missing-likeness-reference blocker is resolved.
- [x] **Gezondheidsrisico’s-page image set:** the supplied copy/name is implemented with a new practical-nutrition hero and purposeful everyday-movement image; both active sources are optimized WebP.
- [ ] **Archive/delete pass:** intentionally deferred until approved versus replaceable assets can be identified safely.

Input for `01-design-branding.md` items 3 (*"Regenerate all AI photos not explicitly approved by Astrid"*), 4 (*"Replace the hero/main photo"*) and 6 (*"Send Astrid the new AI-photo input/results once ready"*).

Register rules come from `01a-zakelijk-lens.md` §4. This file is the per-slot direction.

> ⚠️ **One blocker before the KEEP/REGENERATE column is final:** Astrid's written photo-feedback document. She refers to it at `0:08:39` (*"Ik heb er ook bij gezet welke foto's ik wel goed vond en welke niet"*), and `01-design-branding.md` requires keeping every photo she approved. The column below is a *recommendation from the lens*; her document overrides it wherever they disagree. The missing reference-photo blocker is resolved by `new_Images/`.

---

## §1 Global constraints (all slots)

From the transcript, `0:11:31`–`0:13:17`:

- **Astrid's hair: shoulder-length.** Never halfway down her back. *"Het is tot op m'n schouder en op heel veel foto's hangt het half op m'n rug. Dat heb ik eigenlijk nooit."* Applies to every frame she appears in.
- **Realistic.** Photographic, not painterly or illustrated. No visible AI tells (hands, text, jewellery, teeth).
- **Zakelijke sfeer.** See the negative block in §2.
- **Mixed model ages.** Currently every model is roughly Astrid's own age. Spread 30s–70s across the set.
- **Men in roughly a third of frames.** Currently near-zero.
- **Sporty variety.** Currently the set is dominated by walking and phone shots. Add:
  - a woman aged **40–50 on an ordinary city bike** — explicitly *not* the elderly-couple-with-helmets look (`0:13:03`);
  - a **gym** scene.
- **Flowers and plants are fine** — as environment, never as prop-styling.

## §2 Negative prompt block (reuse verbatim on every slot)

```
No linen or flowing fabrics. No barefoot. No meditation, yoga or lotus poses.
No candles, incense, mats or ceremonial tea. No hands on heart, no palms up,
no eyes closed. No sun flare, no heavy bokeh, no pastel or warm-filter wash.
No soft focus. No hair past the shoulder blades. Nobody gazing into the middle
distance. No wellness-blog framing. No spiritual or "geitenwollensokken" cues.
Unfiltered daylight, ordinary contrast, real clothing.
```

## §3 Technical constraints per slot type

Derived from the CSS so the crops actually survive the layout.

| Slot type | Component / class | Crop and constraints |
|---|---|---|
| **Home hero (full-bleed)** | `.hero--full .hero__visual` | `fill` + `object-fit: cover`, ~21:9 desktop. A **left-side dark scrim** runs 90% → 74% → 18% → 0 across the frame (`globals.css` `.hero__visual::after`). The subject must sit **right of centre**, and the left third must still work under a near-solid olive overlay. Current `object-position: center 25%`. |
| **Sub-page hero** | `components/page-hero.tsx`, `.hero--sub` | Same scrim, `sizes` up to 1380 px. Supports separate `position` and `mobilePosition` — use them rather than re-cropping. |
| **Editorial half-image** | `components/editorial-section-image.tsx`, `.recognition-intro__media` | ~42 vw, min-height 260–330 px. **Landscape.** |
| **Tall media** | `.recognition-media`, `.contact-visual` | min-height 520 px, roughly **5:7 portrait**. |
| **Panel photo** | `.health-check-panel__media` | min-height 220 px, `object-position: center 34%`, and the bottom **34% fades to `--surface-soft`** — nothing important in the lower third. |

**Output:** export at 2× the largest rendered width, then run `scripts/optimize-generated-images.mjs`. Every current asset is an unoptimised PNG at 1.2–4.4 MB (~70 MB in `public/`); that script exists but has never been run against this set.

**Alt text:** every regenerated photo gets new Dutch alt text, and **the matching English entry must be updated in `lib/i18n.tsx` or `lib/translations/*.ts`** — otherwise the EN pages silently serve Dutch alt text to screen readers. See the last column of §4.

---

## §4 Per-slot table

`R` = regenerate · `K` = keep (pending Astrid's document) · `→03` = owned by another checklist item.

### Home — `app/page.tsx`

| Slot | File | Current alt | | Direction |
|---|---|---|---|---|
| Hero, full-bleed | `generated/home-hero-v4.webp` | "Astrid Sanders in haar praktijk voor leefstijlcoaching" | **Done** | Regenerated from Astrid's supplied references: recognisable shoulder-length hair, navy blazer, daylight practice setting, subject right and copy-safe space left. |
| Recognition media (tall) | `plant-based-lunch.png` | "Een gevarieerde plantaardige lunch met linzen, granen en groenten" | **K** | Food still-life, no person, no register tell. Keep unless Astrid's document says otherwise. |
| Health-check panel | `astrid-portrait-studio.png` | "Portret van Astrid Sanders, leefstijlcoach in Den Bosch" | **K?** | Studio portrait — the most zakelijk asset in the set. **Verify hair length only.** Also used on `/over-astrid/`. |

### Leefstijlcoaching bij Reuma

| Slot | File | Current alt | | Direction |
|---|---|---|---|---|
| Hero | `generated/leefstijlcoaching-reuma-hero-wide.png` | "Astrid Sanders bereidt een kleurrijke plantaardige maaltijd" | **K?** | On-register (doing something, real setting). Verify hair. Note the `-wide` variant exists specifically to extend the left edge so the subject lands right of the headline — preserve that if regenerating. |
| Editorial 1 | `generated/reuma-lifestyle.png` | "Een vrouw bereidt een kleurrijke plantaardige maaltijd in een lichte keuken" | **K?** | Fine in register. Candidate for **age variation** — make this model noticeably older or younger than Astrid. |
| Editorial 2 | `generated/reuma-lifestyle-balance.png` | "Een vrouw wandelt ontspannen langs een rustig meer" | **R** | Textbook zweverig. **Replace with the gym slot:** a woman in her 50s on a machine or with light free weights, ordinary gym, daylight or plain gym lighting, sportswear, focused not blissful. |
| Editorial 3 | `generated/reuma-personal-coaching.png` | "Persoonlijk coachingsgesprek over een haalbaar leefstijlplan" | **K?** | Consult-table framing is on-register. Candidate for **a male client**. |

### Leefstijlcoaching bij Artrose

| Slot | File | Current alt | | Direction |
|---|---|---|---|---|
| Hero | `generated/leefstijlcoaching-artrose-hero-v2.webp` | "Astrid Sanders loopt doelgericht een brede stadstrap op" | **Done** | Regenerated as purposeful everyday movement in an ordinary Dutch city setting, with Astrid right and copy-safe space left. |
| Editorial 1 | `generated/artrose-movement.png` | "Een vrouw wandelt ontspannen over een houten pad door de duinen" | **R** | **This is the city-bike slot.** Woman ~40–50, ordinary Dutch city bike, ordinary street or park path, everyday clothes, no helmet, no elderly-couple framing, upright and relaxed but going somewhere. |
| Editorial 2 | `generated/artrose-lifestyle-overview.png` | "Een vrouw bereidt na een wandeling een plantaardige maaltijd in haar keuken" | **K?** | On-register. Age variation candidate. |
| Editorial 3 | `generated/business-tailored-coaching.png` | "Astrid Sanders bespreekt aan tafel met deelnemers welke leefstijlveranderingen haalbaar zijn" | **Done** | Client swap (17 Aug 2026): reuses the Bedrijven Editorial 2 group-table shot. `artrose-personal-plan-v2.webp` is no longer referenced — archive it in the approved delete pass. |

### Gezondheidsrisico’s

| Slot | File | Status | Direction |
|---|---|---|---|
| Hero | `generated/gezondheidsrisicos-hero.webp` | **K** | New: a man preparing a practical, colourful, largely plant-based lunch in a normal daylight kitchen. Subject sits right for the hero copy/scrim. |
| Editorial | `generated/gezondheidsrisicos-bewegen.webp` | **K** | New: a woman building everyday movement on broad outdoor steps; purposeful and practical rather than fitness advertising. |
| Legacy Online assets | `online-coaching.png`, `online-lifestyle-pillars.png`, `online-home-session.png`, `generated/online-leefstijlcoaching-hero.png` | **Archive later** | No longer referenced by the converted page; remove only during the approved archive/delete pass. |

### Leefstijlcoaching voor Bedrijven

| Slot | File | Current alt | | Direction |
|---|---|---|---|---|
| Hero | `generated/leefstijlcoaching-bedrijven-hero.png` | "Astrid Sanders begeleidt een praktische leefstijlworkshop voor medewerkers" | **K?** | On-register. Verify hair. |
| Editorial 1 | `generated/artrose-personal-plan-v2.webp` | "Astrid bespreekt een persoonlijk leefstijlplan met een medewerker aan de overlegtafel" | **K** | Replaced the group-workshop shot: one-on-one consult table, daylight, blazer, purposeful action. `business-workshop.png` is now unused. |
| Editorial 2 | `generated/business-tailored-coaching.png` | "Leefstijlcoach en professionals stellen samen een praktisch programma op maat samen" | **K** | On-register. |
| Editorial 3 | `generated/business-walking-meeting.png` | "Zakelijke professionals voeren buiten een ontspannen walking meeting" | **K** | **Already the most on-register photo in the whole set.** Use it as the reference for what "zakelijk" looks like when briefing the rest. |

### Zorgprofessionals

| Slot | File | | Direction |
|---|---|---|---|
| Hero | `generated/zorgprofessionals-hero.png` | **K?** | "overlegt met twee zorgprofessionals" — on-register. Verify hair. |
| Editorial 1 | `generated/healthcare-collaboration.png` | **K?** | On-register. Age/gender variation candidate. |
| Editorial 2 | `generated/professional-practical-support.png` | **K?** | Check the frame against §2; alt is composed in-page. |
| Editorial 3 | `generated/professional-care-collaboration.png` | **K?** | As above. |

### Over Astrid · Contact · Gratis Gezondheidscheck

| Slot | File | Current alt | | Direction |
|---|---|---|---|---|
| Over Astrid hero | `generated/over-astrid-hero-v2.webp` | "Astrid Sanders werkt aan aantekeningen in haar coachingspraktijk" | **Done** | Regenerated as a practical working portrait with a clean left side for hero copy. |
| Over Astrid media | `generated/about-astrid-v2.webp` | "Astrid Sanders beoordeelt een praktisch leefstijlplan aan haar werktafel" | **Done** | Regenerated as a tall, purposeful planning scene with Astrid centred for responsive crops. |
| Health-check panel (5 sub-pages) | `generated/health-check-call.png` | "Astrid Sanders voert persoonlijk een telefonisch kennismakingsgesprek" | **K?** | Matches the new `PhoneCall` icon and the panel copy. Verify hair. Remember the bottom 34% fades out. |
| Contact | `generated/contact-hero.png` | "Astrid Sanders schrijft persoonlijk een antwoord op een contactvraag" | **K?** | On-register. Verify hair. |
| Gezondheidscheck | `generated/gratis-gezondheidscheck-hero.png` | "Astrid Sanders voert een persoonlijk telefoongesprek" | **K?** | On-register. Verify hair. |
| OG / social only | `astrid-portrait-beach.png` | "Portret van Astrid Sanders op het strand" | **K?** | Never rendered on-page — it is only the Open Graph image in `app/layout.tsx`. Low priority. |

### Unreferenced — archive or delete, do not regenerate

`images/hero-outdoor.png` · `images/calm-outdoor-walk.png` · `images/generated/home-hero.png` (superseded by `-v3`) · `images/generated/leefstijlcoaching-reuma-hero.png` (superseded by `-wide`) · the four `brand/identity/*-updated.png` logo files. Roughly 9 MB of dead weight.

---

## §5 Summary for Astrid

Seven definite replacements are now complete: the **home hero**, the **artrose hero and personal-plan scene**, the **over-astrid hero and media**, plus the **city bike** and **gym** editorial shots. The Gezondheidsrisico's image pair is also complete. Conditional KEEP slots remain untouched until Astrid's written photo-feedback map is available.
