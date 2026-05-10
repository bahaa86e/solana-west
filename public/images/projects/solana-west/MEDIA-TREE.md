# Solana West public image tree (target)

Align **pipeline output** and **folder creation** with code in `data/media/solana-west/cinematic-registry.ts`.

Recommended layout (extend as batches land):

```txt
hero/
  daylight/   (primary cinematic + desktop/mobile variants)
  sunset/
  night/
amenities/
  pools/
  greenery/
  clubhouse/
featured/     (editorial stills — avoid duplicating hero in triads)
villas/
  standalone/
apartments/
townhouses/
masterplan/
  full/
maps/
  connectivity/
interiors/
  living-room/
seo/            `og-social-preview.webp` (primary 1200×630) · legacy `solana-west-new-zayed-og-luxury-share-1200x630-01.webp` (duplicate)
blog/           `solana-west-new-zayed-blog-editorial-hero-01.webp` (optional index card)
cta/            `solana-west-new-zayed-cta-pool-evening-atmosphere-01.webp` (evening CTA mood)
hero/sunset/    `solana-west-new-zayed-hero-sunset-cinematic-01*.webp`
hero/night/     `solana-west-new-zayed-hero-night-cinematic-01*.webp`
```

**Naming:** `solana-west-new-zayed-<scene>-<descriptor>-NN.webp` (kebab-case, Hyphen-separated, no spaces).

**Duplicates:** one canonical path per slot in the registry; use symlinks or pipeline rules — avoid the same asset under two URLs.
