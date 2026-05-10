# Premium image campaign — final wired paths

**Generated:** 2026-05-10 · **Pipeline:** `solana-west-bootstrap-master-source.mjs` → `cinematic-solana-west-pipeline.mjs --production` → `solana-west-premium-campaign.mjs` (`npm run media:premium-bundle`)

**Source plate:** Issuance hero `solana-west-landscape-main.webp` (canonical daylight path after classifier: `hero/daylight/solana-west-new-zayed-hero-daylight-cinematic-01.webp`). All premium outputs are **the same real estate photograph** — graded, sharpened, cropped, or extracted only (no new geometry).

## Outputs written by `media:premium`

| Slot | Public path | Notes |
|------|-------------|--------|
| Sunset hero (wide) | `/images/projects/solana-west/hero/sunset/solana-west-new-zayed-hero-sunset-cinematic-01.webp` | Warm curve, +saturation |
| Sunset hero (mobile) | `/images/projects/solana-west/hero/sunset/solana-west-new-zayed-hero-sunset-cinematic-01-mobile.webp` | 828w from sunset wide |
| Night hero (wide) | `/images/projects/solana-west/hero/night/solana-west-new-zayed-hero-night-cinematic-01.webp` | Blue-hour style dark grade |
| Night hero (mobile) | `/images/projects/solana-west/hero/night/solana-west-new-zayed-hero-night-cinematic-01-mobile.webp` | 828w from night wide |
| Lifestyle / circulation | `/images/projects/solana-west/lifestyle-human/solana-west-new-zayed-outdoor-circulation-calm-01.webp` | Lower-field extract + clarify |
| Investment | `/images/projects/solana-west/investment/solana-west-new-zayed-investment-positioning-01.webp` | Contrast + restrained saturation |
| OG / Twitter (canonical slug) | `/images/projects/solana-west/seo/og-social-preview.webp` | **1200 × 630** WebP (`sharp.strategy.attention` crop) |
| OG legacy duplicate | `/images/projects/solana-west/seo/solana-west-new-zayed-og-luxury-share-1200x630-01.webp` | Byte-identical to slug above for old links |

Machine-readable manifest: [`docs/image-premium-campaign-last-run.json`](./image-premium-campaign-last-run.json).

## Registry (`data/media/solana-west/cinematic-registry.ts`)

- `seoOgLuxuryWide` → `/seo/og-social-preview.webp`
- `ogSocialPreview` → `/seo/og-social-preview.webp`
- `investmentPositioning` → `/investment/solana-west-new-zayed-investment-positioning-01.webp`
- `lifestyleOutdoorCalm` unchanged path; file now populated by premium extract
- `seoOgLuxuryWideLegacyFilename` documents the long-form SEO filename (still written to disk)

## Story & slots

- `HOME_VISUAL_BEATS.estateCirculation` uses `lifestyleOutdoorCalm` + `solanaWestAlt.lifestyleOutdoorCalm`.
- `solanaWestOgImagePath` / default route metadata resolve to `og-social-preview.webp`.

## Commands

```bash
npm run media:premium-bundle   # raw bootstrap + classifier + premium tier
npm run media:premium          # premium only (needs daylight hero already on disk)
npm run media:verify           # canonical path gate
npm run build
```

## Optional assets still outstanding

`npm run media:verify` may warn until these exist: blog editorial hero, CTA evening pool slot (see `scripts/verify-solana-west-canonical.mjs` optional list).
