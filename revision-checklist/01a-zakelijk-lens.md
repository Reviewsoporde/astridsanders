# 1a. The zakelijk lens — full specification

Closes `01-design-branding.md` line 4: *"Overall feel: less alternatief/zweverig/socio, more zakelijk — apply as a lens to all imagery and styling decisions."*

The short canonical version lives in `CLAUDE.md` → **Design Direction → Register: zakelijk, not zweverig**. This file is the long form: what the client actually said, what was decided and why, and how to test that the site still complies.

---

## 1. Client verbatim

From `Transscript revision round.md`, Thursday 30 July 2026.

> `0:08:09` **Astrid:** Ik vond het heel mooi. Ik vond mooi, maar ik vond hem nog iets te alternatief.
> `0:08:20` Dus iets te zweverig. Iets te socio. Snap je wat ik bedoel? **Ik ben een wat zakelijker type**, net zoals die foto.

> `0:09:23` Dus dan wordt het te vrouwelijk, te zweverig, **niet zakelijk genoeg**.

> `0:12:01` **Daan:** Ja, **minder alternatieve uitstraling**, bloemen en planten vond je goed op de foto? Af en toe ook mannen erop, **zakelijke sfeer**.
> `0:12:15` **Astrid:** Ja, en **meer variatie in leeftijden van modellen**. Dus ze waren allemaal een beetje mijn eigen leeftijd.
> `0:12:25` … je ziet meerdere keer met een telefoon of wandelen, maar **een keer op de fiets of in de gym** of zo mag ook. Dus dat is ook nog iets meer dat sportief erin.

Note the palette was only *part* of what she was reacting to. The earth-tone swap (line 3 of `01-design-branding.md`) fixed the loudest signal; this item covers everything else.

---

## 2. Definition

> **Zakelijk = the site looks like it was made by someone who runs a practice, not by someone who is on a journey.**
> Structure over atmosphere. Evidence over feeling. Daylight over mood. Every element has a job.

Use that sentence as the tiebreaker whenever a styling or imagery choice is genuinely 50/50.

---

## 3. Do / don't — styling and motion

| Don't | Do instead |
|---|---|
| Serif italic as an emotional device | One type register; emphasis via weight, not slant |
| Centred oversized pull quotes / manifestos | Left-aligned statements at heading-adjacent size, backed by credentials |
| Light body weight on open leading (350 @ 1.8) | Normal weight on tighter leading (400 @ 1.65) |
| Loose, narrow headings (0 tracking, 1.3 leading, 18ch) | Tight, wide headings (−0.012em, 1.16 leading, 24ch) |
| Frosted glass / `backdrop-filter` panels | Solid surfaces with a hairline border |
| Radial gradient washes behind sections | Flat colour blocks and full-bleed bands |
| Decorative circles, blobs, organic shapes | Rules, dividers, top-borders, numerals |
| Drop-shadow "float" on photos | Low, tight shadow — photos sit on the page |
| Reveals slower than ~400 ms, long travel | ≤340 ms, ≤8 px travel |
| Rounded-on-mobile media (16 px) | 4 px everywhere; near-square is the house style |
| Wide luxury tracking on micro-type (0.2em) | Consultancy tracking (0.14em) |
| Soft-wellness glyphs: leaf, heart, lotus, sun, hands | Function-first glyphs that describe the actual action |
| Hover zooms on hero imagery | No hover state on decorative photography |

**Icon rules.** Library is `@phosphor-icons/react/dist/ssr`, nothing else.
- `weight="regular"` — standalone / card / panel glyphs.
- `weight="bold"` — only ≤18 px glyphs inline inside a list item, link or control.
- `weight="fill"` — only status and brand marks (`CheckCircle`, `WarningCircle`, `WhatsappLogo`). Never decoration.
- Sizes: `14–18` inline · `20` strip · `28` card/panel. Nothing larger.

## 4. Do / don't — photography

Full per-slot direction is in `01b-photo-brief.md`. The register rules:

| Never | Always |
|---|---|
| Linen, barefoot, meditation/yoga poses | Real clothes: blazer, smart-casual, sportswear |
| Candles, tea, incense, mats | Settings that read as work or real life |
| Sun flare, heavy bokeh, pastel wash, filters | Daylight, unfiltered, ordinary contrast |
| Hands-on-heart, eyes closed, flowing hair | Direct eye contact or purposeful action |
| Gazing into the middle distance | Doing something, or going somewhere |
| Everyone the same age, all women | Mixed ages; men in ~a third of frames |
| Astrid's hair past the shoulder blades | Shoulder-length, consistently |
| Plants as prop-styling | Plants as environment |

**Diagnostic that made this concrete:** the alt text of the current photo set describes itself — *"wandelt langs een rustig Scandinavisch meer"*, *"wandelt ontspannen over een houten pad door de duinen"*, *"een vrouw wandelt ontspannen langs een rustig meer"*. Four of the most prominent slots are literally "a woman walking calmly by water." That is the zweverig signal in one sentence.

## 5. Do / don't — copy register

Copy changes are owned by files `02`–`08`; this is only the register rule so they stay consistent.

| Don't | Do |
|---|---|
| Self-authored quotes as proof | Named credentials, registers, media |
| Mission/manifesto framing ("Mijn missie") | Factual framing ("Achtergrond en erkenning") |
| Vague benefit language | Concrete, checkable statements |
| Invented numbers or success rates | Only third-party benchmarks, with a source |

Unchanged and still binding: **SEO doc copy is used as-is** (`CLAUDE.md` Hard Content Rule #1) — this lens never licenses rewriting keyword-engineered copy or the H1/H2/H3 hierarchy. It applies to micro-copy, labels and eyebrows that the SEO doc does not specify.

---

## 6. Decision log (round 2026-08)

Everything below is **done**. Recorded so it does not get re-litigated.

| # | Decision | Rationale |
|---|---|---|
| 1 | Body type `350 → 400`, leading `1.8 → 1.65`; `strong` `650 → 700`; `p` margin `1.1 → 1.15rem` | Light weight on open leading is wellness-editorial house style. Highest-leverage single edit. Also an accessibility win for the 45–70 audience. |
| 2 | **Keep Playfair Display**, set it tight: tracking `−0.012em`, leading `1.16`, h1 `24ch` / `clamp(2.15, 3.4vw, 3.1rem)`, h2 `26ch` / `clamp(1.7, 2.5vw, 2.45rem)`, h3 leading `1.2` | The zweverig read came from *italic + centred + oversized + airy*, not the typeface skeleton. Playfair set tight reads as publisher/practice. A sans would land on the "generic product UI" the stylesheet was written to avoid, and the serif is the site's main differentiator. |
| 3 | Deleted the `h1 em, h2 em, h3 em, .display-italic` rule and `.card-caption` | Both verified dead CSS (zero `.tsx` occurrences besides one `<em>` in the block rebuilt by #7). Cleanest possible win. |
| 4 | Deleted mobile `--radius-media: 16px` | 16 px reads as an app card; contradicts the stylesheet's own "near-square, shadowless" intent. |
| 5 | Removed `.business-process::after` 30rem circle, both radial washes, the white inner glow on `.recognition-intro__media`, and both 900 ms hero/media hover zooms. `--shadow-media` softened to `0 4px 16px … 9%` | Purely atmospheric devices. The circle in particular sat on the B2B page, the most zakelijk audience on the site. |
| 6 | Reveal motion `20px/560ms` → `8px/300–340ms`. Deleted `components/scroll-effects.tsx` and uninstalled `gsap` + `@gsap/react` | 560 ms is a cinematic drift. The GSAP rig (word-split scrub reveals, media parallax) was never imported — dead code, and exactly the code path this lens rejects. |
| 7 | Mission quote → **positioning band**. Dropped the 40 px filled `Quotes` mark, the italic, the centring and the "— Astrid Sanders" attribution. One left-aligned statement + a text-only `.credential-strip` | A quote from the person doing the selling is the weakest proof there is — Astrid's own word for that shape is "socio". The band stays because it sits immediately before the pricing cards, which is where proof belongs. |
| 8 | `Leaf` → `PhoneCall` (4 sites) | The panel's own copy is *"een kort en vrijblijvend telefoongesprek"*. A leaf says wellness; a phone says we will call you. Semantically better **and** more zakelijk. Rejected: `CalendarCheck` (implies a booking calendar that deliberately doesn't exist), `ClipboardText`/`Headset` (clinical / call-centre). |
| 9 | `HeartStraight` → `IdentificationBadge` | The card is titled "Ervaringsdeskundige" — a credential, not an emotion. This is the card where Astrid is most at risk of reading as a fellow patient rather than the professional being hired. |
| 10 | `.eyebrow` tracking `0.2em → 0.14em` | 0.2em is luxury-brand tracking; 0.14em is consultancy tracking. |

**Deliberately not changed:**

- **Sage band `#a9ac8c`** — Astrid personally chose this palette board ("dan gaan we voor de bruine"). The zweverig read on the story section was the *treatment*, not the hue, and deepening the sage would cut contrast against `--on-accent` from 6.75:1 to ~4.95:1, eating the whole safety margin. If she asks for less green, the safe A/B is `.section--band-accent { background: var(--surface-mineral) }` (`#e4d9c5`, 11.3:1 — an improvement), at the cost of losing one of only two colour bands.
- **`.hero__form-card` frosted glass** — `02-homepage.md` removes the whole block (transcript `0:27:47`→`0:28:08`). Not worth restyling something being deleted. **If it survives:** drop the `backdrop-filter` pair, make the background solid `var(--accent-ink)`, and replace the three-layer shadow with `border: 1px solid var(--line-strong); box-shadow: var(--shadow-soft)`.
- **`text-wrap: balance` on headings** — orphan prevention is a professionalism signal. The problem was the 18ch measure, which is fixed.
- **`.button::after { content: "→" }`** — directional, not decorative.

---

## 7. Enforcement greps

These make the lens a test rather than a vibe. All should pass now and on every future change.

```bash
grep -rn 'font-style: italic'  app/globals.css                          # 0
grep -rn '<em>'    app components --include=*.tsx                       # 0
grep -rn 'Leaf\|HeartStraight\|Quotes' app components --include=*.tsx   # 0
grep -c  'backdrop-filter'     app/globals.css                          # 4 = sticky header + hero form card, each with its -webkit- prefix. Drops to 2 once 02-homepage removes the hero card.
grep -n  'radial-gradient'     app/globals.css                          # 0
grep -c  '999px'               app/globals.css                          # <= 3, segmented controls only
grep -rn 'weight="fill"' app components --include=*.tsx                 # CheckCircle / WarningCircle / WhatsappLogo only
grep -rn 'gsap'    package.json app components                          # 0
```

## 8. Acceptance test — "would Astrid call this zakelijk?"

Send the before/after set with exactly these six yes/no questions. Any "no" on 1, 2, 4 or 6 fails the item.

1. Would this look at home next to an accountancy or consultancy site rather than a yoga studio?
2. Is there anything here you'd describe as *zweverig*?
3. In every photo, does the person look like they're doing something or going somewhere — rather than posing or drifting?
4. Would you send this link to a bedrijfsarts or HR-manager without hesitating?
5. Is your hair right in every photo?
6. Does anything read as *geitenwollensokken*?

Two internal passes that surface register problems colour hides:
- **Greyscale test** — strip colour; if it still reads soft, the problem is type and layout, not palette.
- **5-second squint test** — at 25% zoom, is the dominant impression *structure* (rules, columns, blocks) or *atmosphere* (fields, curves, glow)? Must be structure.

---

## 9. Open decisions and flags

**Client decisions (Astrid / Daan):**
- The retained positioning sentence, and whether the eyebrow stays "Achtergrond en erkenning". Implemented that way; the word *missie* was itself part of the register she reacted to.
- Sage band: keep, or swap to sand (see §6). Recommend keep; show both.
- **Playfair fallback**, only if she still says "te zweverig" after this round: swap `--font-display` to **Source Serif 4 Variable** (`@fontsource-variable/source-serif-4`) — Adobe's low-contrast publication serif. One token + one import, ~15 min, but it is a visible brand change and needs sign-off.

**Flags for Daan:**
- `app/page.tsx` labels an authority item *"Aansluiting en accreditatie bij de BLCN"* but links to the **KABIZ** register. BLCN is a membership; KABIZ is a register — split into two items or relabel. The new credential strip inherits this link pair as-is rather than silently changing it.
- Verify Astrid's KABIZ registration is live and findable before publishing it as proof.
