# Luxury cinematic art direction — Solana West New Zayed

Enterprise media architecture, registry, and pipeline stay **unchanged**. This report documents **curatorial intent**, **emotional hierarchy**, and **implemented UX beats** aligned with ORA / Emaar–class presentation.

---

## 1. Best homepage hero sequence

1. **Primary LCP** — `hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01.webp` (wide avenue / greenery read).  
2. **Warm alternate** — `…-hero-daylight-cinematic-02.webp` if art director feels 01 is flat on a given monitor.  
3. **Water chapter** — `amenities/pools/…-resort-pool-01.webp` for warmth (secondary rails / supportive, not first hero paint).

---

## 2. Best mobile hero sequence

- **`< lg`:** `…-hero-daylight-cinematic-01-mobile.webp` (portrait-safe crop) via `LuxuryFillImage` `mobileSrc` in `HeroSection`.  
- **Focus:** upper-third greenery + horizon; object position already tuned in hero stack.

---

## 3. Best OG image

- **Current:** same file as primary hero for **brand consistency** and **snippet alignment** (`solanaWestOgImagePath`).  
- **Future:** drop a **1.91∶1** composed plate under `seo/` once designed — keep entities in frame (Solana West, New Zayed, ORA).

---

## 4. Best CTA visuals

- **Primary emotional:** resort **pool** warmth (`ctaEmotional` registry slot).  
- **Pair with:** microcopy about payment plan + site visit; avoid stacking three water plates in one viewport.

---

## 5. Best investment visuals

1. **Growth / scale** — `featured/…-editorial-visual-02.webp` (curated for investment block — skyline / business massing read).  
2. **Macro context** — `masterplan/full/…-01.webp` as plan intelligence.  
3. **Aerial story** — until `/aerial/` is populated, **masterplan** doubles as bird’s-eye emotional surrogate (`aerialView` registry).

---

## 6. Best lifestyle visuals

- **Greenery + pool + editorial architecture** triad in amenities (no repeated hero still).  
- **Trust** villa exterior with **greenerySubject** crop for calmer, grounded luxury.

---

## 7. Best aerial visuals

- **Target:** dedicated drone stills in `aerial/` when available.  
- **Interim:** masterplan + wide editorial plates; avoid repeating the same frame in adjacent sections.

---

## 8. Weak visuals to remove (candidates)

Loose **legacy** files under `hero/` root (non–SEO-named duplicates of curated daylight) — safe to archive **after** confirming no hard links: see `removalCandidatesLooseHeroRoot` in `data/curation/solana-west-visual-curation.ts`.

Pipeline JSON `weakQuality` array (if non-empty on re-run) — replace tiny JPG upscales.

---

## 9. Missing visual categories

- **`hero/sunset/`** — golden-hour plates.  
- **`hero/night`** — blue-hour or lit-path scenes.  
- **`lifestyle-human/`** — subtle figures in outdoor rooms (see placement map in curation data).  
- **`seo/`** — dedicated OG crop.  
- **`investment/`** — optional after editorial + masterplan if investor art direction needs a silo.

---

## 10. Homepage visual pacing (implemented)

| Beat | Section |
|------|---------|
| Full-bleed cinematic | Hero |
| **Interlude** (gold hairline) | — |
| Text \| image | Trust (developer) |
| Story | Overview, property types, payment |
| Location narrative | Location |
| **Interlude** (“West Cairo narrative”) | — |
| Image-led | Investment |
| Triad imagery (varied aspects) | Amenities |
| Immersive wide | Masterplan |
| **Interlude** | — |
| Copy-led | FAQ |
| Ink CTA | Final |

---

## 11. Section-by-section recommendations

| Section | Visual strategy |
|---------|-------------------|
| **Homepage** | See pacing table + dual hero mobile. |
| **Villas / property types** | Use `villas/standalone` + `exteriors/` alternation on future pages; keep cards typographic until per-type photos wire. |
| **Apartments** | Editorial + interior living-room variants; avoid repeating hero. |
| **Townhouses** | Townhouse exterior lane from pipeline. |
| **Amenities** | Pool (4∶5) → park (5∶3) → editorial (16∶9). |
| **Investment** | Editorial-02 + masterplan + map in prose proximity. |
| **Location** | Connectivity map + calm map crop (`mapCalm`). |
| **Masterplan** | Contain fit, wide letterbox shell. |
| **Blog** | Pull from `featured`, `masterplan`, `interiors` — one hero image per article. |
| **FAQ** | Text-first; optional thin divider only. |
| **CTA** | Pool warmth; keep conversion panel uncluttered. |

---

## 12. Best cinematic transitions

- **CinematicInterlude** — gold hairline + optional micro-label between major beats (see `components/ui/cinematic-interlude.tsx`).  
- **LuxuryReveal** lift cycle — already provides vertical rhythm; interludes add **editorial breath**.

---

## 13. Best editorial combinations

- **Trust:** villa exterior (grounded) **after** cinematic hero (aspirational) — emotional contrast.  
- **Amenities:** water → landscape → architecture — three different **aspect ratios** to kill “gallery template” feeling.

---

## 14. Luxury storytelling recommendations

- Lead with **greenery and path** (walkable compound truth).  
- Layer **water** for Gulf resort literacy.  
- Close planning authority with **masterplan** and **map** — investor diligence.  
- Avoid three consecutive **same aspect** images anywhere above the fold.

---

## 15. Visual hierarchy improvements (delivered in code)

- **Mobile-only hero crop** (`mobileSrc` on `LuxuryFillImage`).  
- **Amenities:** varied aspect ratios + crop variety (interior warm / greenery / editorial wide).  
- **Trust:** softer crop preset on villa (`greenerySubject`).  
- **Investment + amenities slots** in registry point to **emotionally distinct** files (editorial-02, editorial-03).  
- **Interludes** between hero→trust, location→investment, masterplan→FAQ.

---

*For machine-readable sequences, see `data/curation/solana-west-visual-curation.ts`.*
