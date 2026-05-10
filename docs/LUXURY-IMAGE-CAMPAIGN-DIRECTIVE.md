# Solana West — luxury cinematic image campaign directive

**Audience:** art director, ArchViz supervisor, colourist, web team.  

**Non-negotiable preservation (geometry, realism, identity):** see **[`IMAGE-ENHANCEMENT-RULES.md`](./IMAGE-ENHANCEMENT-RULES.md)** — enhance quality only; no fake architecture, skies, or generative invention.

**Code today:** `public/images/projects/solana-west/` may be empty in dev until the pipeline promotes WebP.  
**Code changes shipped (when present):** calmer in-browser grade (hero + `LuxuryFillImage`), registry slots in `data/media/solana-west/cinematic-registry.ts`, optional verify list, ALT strings for new roles.

---

## 1. Campaign rank (by slot — not by file, until assets exist)

| # | Category | Slot / file (target) | Why |
|---|----------|----------------------|-----|
| 1 | **Strongest hero** | `hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01.webp` (+ desktop/mobile) | First 3s depend on **one** unmistakable master shot: avenue + land + sky readability. |
| 2 | **Strongest sunset** | `hero/sunset/...-sunset-cinematic-01.webp` (+ mobile) | Emotional memory: **low sun on architecture**, long shadow legibility, no neon sky replacement. |
| 3 | **Strongest night** | `hero/night/...-night-cinematic-01.webp` (+ mobile) | Investor “serious project” cue: **controlled graze**, pool caustics subdued, **no** theme-park colour. |
| 4 | **Strongest investment visual** | `featured/...-editorial-visual-02.webp` (today) / future `investment/` hero | Scale + corridor story without fake Infographic. |
| 5 | **Strongest mobile hero** | `hero/daylight/*-mobile.webp` | Portrait **focal discipline** — tighter on architecture lead, not cropped sky-only. |
| 6 | **Strongest emotional image** | Dedicated `lifestyle-human/` session (not yet in registry — add when batch lands) | Quiet human scale at margin of frame; avoid stock “smiling family CGI”. |
| 7 | **Strongest lifestyle / resort** | `amenities/pools/...-resort-pool-01.webp` + future `cta/` evening variant | Water **plane** + reflection integrity; evening variant separates from hero pool read. |
| 8 | **Weakest to replace** | `aerialView` alias = `masterplanFull` (duplicate role) | Reads as **scale** not **flight** — commission true aerial or remove alias in UI. |
| 9 | **Strongest OG / social** | `seo/...-og-luxury-share-1200x630-01.webp` | **1200×630** with **title-safe** left third; no micro-text; brand + project legible at thumbnail. |
| 10 | **Strongest CTA** | Pool daylight (current) → `cta/...-cta-pool-evening-atmosphere-01.webp` when ready | **Separate** from amenities triad emotionally; dusk = decision moment. |

---

## 2. Grading philosophy (DaVinci / Capture One — not IG filters)

- **White balance:** neutral to **slightly warm skin / stone**; kill **orange mids** (client asked to avoid orange-heavy stack — **CSS grade already softened** in repo).
- **Contrast:** **S-curve** with lifted shadows (not milky), controlled speculars on glass/stone.
- **Saturation:** **−foliage yellow**, **+ controlled green** in HSL; sky **natural** gradient.
- **Sharpness:** edge-aware; **no halos** on rooflines (screams cheap HDR).
- **Skies:** replace only with **plates shot same lens** or licensed matching sun direction.
- **Pools:** preserve **horizon line** and caustic softness; fake crystal water = budget brand.
- **Night:** **single key temperature** (3000–4000K façade), no rainbow LED.

---

## 3. Before / after (quality reasoning)

| Before (typical “good RE site”) | After (campaign target) |
|---------------------------------|-------------------------|
| Flat noon CG, white sky | Directional sun, **readable massing**, credible sky |
| Global orange LUT | **Regional** warmth (stone/wood), cool shadow anchor |
| Same pool in hero + CTA + OG | **Distinct** emotional beats per slot |
| Mobile = center crop of desktop | **Shot or reframe** for portrait hierarchy |
| OG = full-bleed chaotic frame | **Designer crop** 1200×630 + negative space |

---

## 4. Luxe atmosphere (on set + in grade)

- Depth: **foreground landscape / light pole / hedge** permissible — **not clutter**.
- Emotional: calm, **edited** silence (ORA-adjacent), not “celebration confetti”.
- Investor: visible **engineering truth** — roads, setbacks, horizons — **no fake skyline**.

---

## 5. Mobile-first framing rules

1. Identify **single vertical focal column** (façade + avenue or pool axis).  
2. **Discard** redundant sky > 38% of frame on portrait.  
3. Keep **critical architecture** inside **central 72% height** safe zone.

---

## 6. OG / social crops

- Export **exact** `1200×630` WebP; test **Twitter / LinkedIn / WhatsApp** thumbnail at 312px wide.  
- When file exists, set **`ogSocialPreview`** in registry to `seoOgLuxuryWide` URL (currently `slots` reads `ogSocialPreview` — still points to daylight hero URL until you change registry line).

---

## 7. Quality control — reject

- Oversharpen halos · **plastic** water · **neon** greens · CGI humans close-up · **HDR glow** · random unsynced sun directions across gallery · **duplicate** angle in three sections.

---

## 8. Wire-up checklist (post-ingest)

1. Run `npm run media:verify` — extend **required** list when sunset/night/seo become mandatory.  
2. Point `solanaWestCanonicalFiles.ogSocialPreview` at `seoOgLuxuryWide` path string.  
3. Optionally introduce **theme toggle** hero (sunset/night) — **not wired** yet; hero remains daylight.  
4. Replace `ctaEmotional` path with `cta/...-evening...` when file exists.

---

## 9. Honest gap

**No binary assets in repo = no “complete upgrade” of pixels from code.** This document + registry + calmer CSS stack = **production-ready pipeline target**. The step to **world-class** is **colour-managed stills and matching mobile/OG masters**, not heavier website filters.
