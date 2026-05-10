# Solana West — refinement execution report

**Date:** 2026-05-08 · **Scope:** Luxury refinement only (no architecture rebuild, no new random sections).

## Completed improvements

### 1. Hero

- Softer top crown and base letterbox (less crushing dark) while keeping type legible.
- Warmer gold lateral wash + subtle cool counter-wash for cinematic separation.
- Refined focal vignette and lateral read funnel.
- Mobile hero plate: slightly lower focal band (`object-[center_38%]`) and `min-h-[112%]` to improve vertical crop feel.
- Eyebrow / rule / body vertical rhythm tightened for calmer hierarchy.

### 2. Snapshot block

- **`HomeSnapshotSection`** added directly under hero in `components/home/home-sections.tsx`.
- Data: `homeSections.snapshot` in `data/seo/home.ts` (starting reference, payment plan, developer, location, delivery, unit types; issuance disclaimer in caption).

### 3. Thin pages

- **`/investment-guides`:** Full hub with H1, intro, five linked journal lanes, next-step links (prices, payment-plan, contact).
- **`/comparison-pages`:** Full hub with comparison framework, deep-dive link to VYE/Belle Vie article, property-type links, related journals.
- **`/privacy-policy`:** Real policy copy (controller, data, purposes, cookies/ads, retention, choices, changes) — no longer an empty shell.

### 4. Content / CTA (prior + this pass)

- Homepage narrative tightening and snapshot live in `data/seo/home.ts` (from earlier batch in same initiative).
- Advisory / acquisition CTA language remains centralized in `data/cro.ts` (verify in UI: hero, footer WhatsApp, rails).

### 5–7. Image system & folders

- **No new WebP binaries** were generated in-repo (pipeline/creative lives outside this commit). Registry already defines sunset, night, OG, and `lifestyleOutdoorCalm` targets in `data/media/solana-west/cinematic-registry.ts`.
- **Folders created** under `public/images/projects/solana-west/`: `hero/sunset/`, `hero/night/`, `lifestyle-human/`, `investment/`, `seo/` — each with `.gitkeep` for version control.
- **`scripts/verify-solana-west-canonical.mjs`:** Optional check extended for `lifestyle-human/...outdoor-circulation-calm-01.webp` (warn-only until asset lands).

### 8. Cinematic breaks

- **`HOME_VISUAL_BEATS.estateCirculation`** inserted between investment and architecture beats on the homepage (`components/home/home-sections.tsx`) — landscape-first outdoor rhythm using current greenery plate; caption notes calm estate pace (no crowd theatre).

### 9. Footer

- Reduced vertical padding, column gaps, link list spacing; “Concierge & media” shortened to **Concierge**; **Profiles** → **Social**; legal block spacing tightened; investor strip padding/gaps slightly reduced.

### 10. Mobile

- Hero overlay + crop adjustments above; footer density improves small-screen scroll length.

## QA (2026-05-08)

| Check | Result |
|--------|--------|
| `npm run build` | Pass (34 static routes) |
| Routes | `/`, hubs, blog slugs, properties, thank-you present in build output |
| SEO metadata | Hubs use existing `buildPageMetadata` entries in `data/seo/routes.ts` (indexed) |
| Image paths | Code paths unchanged; local `public` still expects pipeline WebPs per verify script |
| Broken imports | None from lint/typecheck in build |
| OG default | `solanaWestOgImagePath` → `ogSocialPreview` (daylight hero until `seoOgLuxuryWide` ships) |

## Outstanding (creative / ops)

- Ingest **sunset / night / mobile hero / OG 1200×630** WebPs into the new folders per `cinematic-registry.ts` and `docs/LUXURY-IMAGE-CAMPAIGN-DIRECTIVE.md` (enhancement rules: preserve architecture; grade only).
- Replace `estateCirculation` **src** with `lifestyleOutdoorCalm` when issuer circulates an outdoor circulation plate.
- Run `node scripts/verify-solana-west-canonical.mjs` after media pipeline to confirm required files on disk.
