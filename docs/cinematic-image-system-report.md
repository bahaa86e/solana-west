# Solana West cinematic image system — report

This document tracks the **luxury real estate media architecture** for `Solana West New Zayed` by **ORA Developers Egypt**. It is updated after each pipeline run (`docs/cinematic-image-pipeline-last-run.json`).

## Current status

| Item | State |
|------|--------|
| Raw ingest folder | `public/raw-assets/solana-west/` |
| Production tree | `public/images/projects/solana-west/` |
| Safe staging output | `public/images/projects/solana-west-staging/` (default pipeline target) |
| Canonical paths in code | `data/media/solana-west/` (registry + slots) |
| ALT + captions | `data/media/solana-west/image-copy.ts` |

**Important:** If `public/raw-assets/solana-west/` contains no images yet, visual classification, duplicates, and quality rows below are **pending**. Run `npm run media:pipeline` after adding assets.

---

## 1. Moved images

Derived from the last pipeline JSON `moved[]` (source → WebP target under staging or production). Non-destructive: **raw files are never deleted**.

---

## 2. Renamed images

Pipeline output follows:

`solana-west-new-zayed-[descriptor]-NN.webp`

Optional responsive siblings (wide / hero-classified frames):

- `…-NN-desktop.webp` (1920w max)
- `…-NN-mobile.webp` (828w max)

---

## 3. Duplicate images

Report field: `duplicates[]` — grouped by **SHA-256** hash; keep the best master frame and archive duplicates in `raw-assets/_archive` manually if desired.

---

## 4. Weak-quality images

Heuristic flags in `weakQuality[]` — triggers include: very small resolution (`< ~0.32MP`), very small file size, or tiny transparent PNGs. **Replace or re-export** from source.

---

## 5. Missing image categories

If no files match rules for a folder (e.g. `maps/travel-times/`, `lifestyle-human/`), those folders stay empty with `.gitkeep` until assets exist.

---

## 6. Strongest hero candidates

Populated in `heroCandidates[]` when:

- Aspect ratio ≥ ~1.65 and width ≥ ~1600px (cinematic wide), **or**
- Filename/path matches daylight / sunset / hero cues in `scripts/cinematic-solana-west-pipeline.mjs`.

**Recommended staging:** pick **one** primary for `hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01.webp` and set OG to the same file (`solanaWestOgImagePath`).

---

## 7. Strongest homepage visuals

Union of:

- `heroCandidates` (top scores)
- `editorialFeatured[]` (high pixel count, lifestyle / villa / aerial clusters)

Use for **featured** + secondary hero strips (`solanaWestMedia.amenities`).

---

## 8. Strongest CTA visuals

`ctaCandidates[]` — pools, terraces, sunset, lifestyle-forward frames. Map to `cta/` and sticky / rail conversion surfaces.

---

## 9. Strongest luxury / editorial visuals

Prefer: **greenery**, **clubhouse/pools**, **aerial**, **golden-hour** exteriors — aligned with ORA/Emaar-style calm luxury, not noisy stock.

---

## 10. Recommended homepage hero sequence (desktop)

1. **Primary:** wide daylight cinematic avenue / master-greenery (`hero/daylight/…-01.webp`).
2. **Secondary:** elevated villa or twin massing (`villas/*` or `exteriors/`).
3. **Tertiary:** resort amenity (`amenities/clubhouse` or `pools`).

---

## 11. Recommended mobile hero images

Use the **`-mobile.webp`** sibling beside the primary hero (`solanaWestCanonicalFiles.heroDaylightMobile`). Components can switch `sizes` + `src` for `<768px` in a follow-up.

---

## 12. Recommended OG images

- **Default site / transactional:** `solanaWestCanonicalFiles.heroDaylightCinematic` (matches `defaultOpenGraphImagePath`).
- **Alternate social crop:** generate a **1.91:1** safe frame under `seo/` (`solanaWestCanonicalFiles.ogSocialPreview`) once designed.

---

## 13. Recommended blog visuals

- **Prices / payment:** `masterplan/full`, `maps/connectivity`, `interiors/living-room`.
- **Area / New Zayed:** `maps/landmarks`, `aerial`, `amenities/greenery`.

---

## 14. Recommended investment visuals

- **Skyline / growth:** `investment/` (`investmentPositioning` slot).
- **Institutional trust:** masterplan annotated + aerial sequence.

---

## Commands

```bash
npm install
npm run media:init
npm run media:pipeline:dry
npm run media:pipeline
# After QA:
npm run media:pipeline:prod
```

**Do not** remove legacy folders until you confirm `solanaWestMedia` resolves to real files on disk (see `solanaWestLegacyPaths` in the registry for audit-only reference).
