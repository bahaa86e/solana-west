# Luxury image rebalancing — honest QA report

_Generated as part of the premium visual curation pass (not SEO, not architecture redesign)._

## 1. Removed / retired weak visuals

| Item | Action |
|------|--------|
| **Header SVG logo** | **Removed from UI.** Navigation is now a typography-only wordmark (`Solana West` + `ORA Developers Egypt` micro line). No bordered logo tile, no gradient “app icon” frame, no `next/image` lockup. |
| **Organization JSON-LD `logo`** | Still required for rich entity signals; **points to** `seo/og-social-preview.webp` (luxury share plate) instead of the retired SVG path. This is a pragmatic trade-off: it is not the same as a vector logotype, but it is a real branded image and avoids a broken or placeholder URL. |
| **Primary location full-bleed map** | **Removed** from homepage location block, Solana West project location block, and `/location` overview figure. The issuance connectivity map remains in the data layer as `solanaWestMedia.locationMap` for **blog / deep context** routes that still cite cartography (e.g. connectivity explainers). |

**Not deleted from disk:** Raw and canonical media files are unchanged; this pass only changes **which** assets each section mounts.

## 2. Replaced visuals (what went where)

| Surface | Before | After | Rationale |
|---------|--------|-------|-----------|
| **Home — location** | Map, `contain`, padded “brochure plate” | **`heroSunsetCinematic`** + **`heroSunsetMobile`**, `cover`, crop **`horizonGolden`**, richer grade | Reads as dusk scale and corridor mood—strategic geography without infographic weight. |
| **Project `/projects/solana-west` — location** | Same map treatment | **`locationAtmosphere`** (sunset hero family) — same philosophy as home | Keeps hub consistent with homepage story. |
| **`/location` — overview rail** | Map | **Sunset atmosphere** + mobile pairing + **`horizonGolden`** | Aligns geography route with emotional positioning; map still available editorially elsewhere. |
| **Home — trust / developer narrative** | Standalone villa exterior | **`lifestyleOutdoorCalm`** (circulation greenery) | Cuts repetition of façade hero shots early in the scroll; reinforces walkable thesis. |
| **Project overview rail** (`overviewFigure`) | Villa exterior | **`heroDaylightSecondary`** | Gives the project overview a daylight composition distinct from trust greenery and hero 01. |
| **Projects hub overview figure** | Villa | **`projectOverview`** (same daylight secondary) | Editorial consistency across index + hub. |
| **Amenities triad — pool card** crop | `interiorWarm` (conceptually wrong for exteriors) | **`editorialWideLow`** | Better horizon / pool read on tall aspect without “interior” focal bias. |
| **Masterplan / investment shells** | Inset borders / rings | **Soft gradients only** | Reduces brochure “frame stacking” noise. |

**New long-form anchors**

| Section | Addition |
|---------|----------|
| **Payment plan** (home) | Full-width **`paymentRibbon`** (architecture editorial plate) below the copy grid. |
| **Property types** (home) | **`propertyTypesRibbon`** (bird’s-eye / masterplan-scale `aerialView`) stacked above the typology grid in the right column. |

## 3. Image density rebalance (summary)

- **De-cluttered** decorative chrome: fewer inset rings/double borders on rails that already carry strong photography (trust, hub overview, project overview, masterplan, investment).
- **Anchored** two previously **text-only** home blocks (**payment**, **property types**) with single, low-height cinematic ribbons—enough punctuation without turning into another triad gallery.
- **Preserved** intentional density where it already behaved editorially:** amenities** asymmetric grid (three images with different aspects) and **cinematic story beats** remain the main rhythm drivers.
- **Trade-off:** `aerialView` now appears both in the **homepage narrative beat** and the **property-types ribbon**. On a strict “no repeats” mandate, one of these could be swapped to **`investmentPositioning`** or a pool/greenery still from `catalog.generated.json`; that was deferred to avoid weakening typology ↔ scale storytelling.

## 4. Sections that gained new visual anchors

1. **`PaymentPlanSection`** — `paymentRibbon` (architecture editorial).
2. **`PropertyTypesSection`** — `propertyTypesRibbon` (`aerialView`).

Sections **re-lit / re-cropped** without adding file count:

- **`LocationAdvantagesSection`**, **`ProjectLocationSection`**, **`LocationOverviewSection`** (atmosphere swap + mobile-aware sunset + **`horizonGolden`**).
- **`TrustSection`** (asset swap + calmer shell).
- **`AmenitiesSection`** (crop fix on pool lead card).

## 5. Mobile crop improvements

| Change | Detail |
|--------|--------|
| **Location stack** | **Dual source:** sunset desktop + **`heroSunsetMobile`** (`LuxuryFillImage` `mobileSrc`) so portrait viewports aren’t cropping a wide map plate. |
| **Location / overview** | **`horizonGolden`** crop token (`object-[center_38%]`, tighter on small screens)—biases focal mass for dusk plates without zooming aggressively. |
| **Hero** | Existing **`heroDaylightMobile`** + tuned `imgClassName` unchanged in this pass; already the strongest mobile story on the route. |

**Remaining gap (honest):** Not every interior-hub hero across the entire site was re-audited in this batch; transactional/property hubs may still share typography-dense layouts without ribbons. Address route-by-route if parity with ORA/Emaar is non-negotiable everywhere.

## 6. Final visual quality score (vs ORA public sites / Emaar Misr tier)

**6.8 / 10** — credible step toward **quiet editorial luxury**, still short of flagship developer microsites.

**Why not higher**

- Issuance CGI and compressed WebP sources **cap** how “Aman-quiet” the experience can feel; Gulf leaders often run bespoke colour pipelines and larger art budgets per route.
- **Master plan** plates remain inherently diagrammatic—a softer frame helps, but they will never scan as cinematic stills.
- **Sunset hero derivative** reused for geography is cohesive but **same chromatic family** as premium campaign satellites; differentiated geography art (dedicated dusk highway plate) would read more “strategic” with zero compromise on truthfulness.

**What improved meaningfully**

- **Header discipline** reads closer to minimalist hospitality/nav brands (no logo box).
- Location reads as **positioning**, not collateral PDF pasted into the layout.
- **Crop hygiene** on amenities pool + atmospheric location blocks is more coherent for mobile thumbs.

---

## Files touched (implementation index)

- `components/layout/site-header-client.tsx`
- `data/site.ts`
- `lib/schema/jsonld/organization.ts`
- `data/media/solana-west/slots.ts` / `image-copy.ts`
- `data/projects/types.ts` / `data/projects/media/solana-west-bundle.ts`
- `data/location/location-page-model.ts`
- `data/projects/projects-hub-model.ts`
- `components/home/*` (location, trust, amenities, masterplan, investment, payment, property-types)
- `components/projects/project-location.tsx`, `project-overview-section.tsx`
- `components/location/location-overview-section.tsx`
- `components/projects-hub/projects-hub-overview-section.tsx`
- `lib/media/luxury-image-crops.ts`

---

_End of report._
