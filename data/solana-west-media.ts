/**
 * Public asset paths for Solana West — used with `next/image` (alt text is factual + SEO-aware).
 */

const base = "/images/projects/solana-west";

export const solanaWestMedia = {
  hero: {
    src: `${base}/hero/solana-west-landscape-main.webp`,
    alt: "Landscaped avenues and greenery at Solana West New Zayed by ORA Developers Egypt.",
  },
  developer: {
    src: `${base}/villas/solana-west-solos-villa-exterior-01.webp`,
    alt: "Luxury villa exterior architecture at Solana West New Zayed, West Cairo.",
  },
  amenities: [
    {
      src: `${base}/amenities/solana-west-clubhouse-pool.webp`,
      alt: "Clubhouse and pool amenity at Solana West New Zayed by ORA Developers Egypt.",
    },
    {
      src: `${base}/amenities/solana-west-park-view.webp`,
      alt: "Park and landscaping within Solana West compound, New Zayed.",
    },
    {
      src: `${base}/hero/solana-west-C06-Landescape.webp`,
      alt: "Wide green landscape and avenues at Solana West New Zayed.",
    },
  ],
  masterplan: {
    src: `${base}/masterplan/solana-west-sf-master-plan.webp`,
    alt: "Solana West master plan overview — New Zayed master-planned community by ORA Developers Egypt.",
  },
  locationMap: {
    src: `${base}/location/solana-west-location-map.webp`,
    alt: "Solana West location map — New Zayed, West Cairo context.",
  },
  investment: {
    src: `${base}/interiors/B-types/solana-west-solos-interior(1).webp`,
    alt: "Interior living space design at Solana West New Zayed by ORA Developers Egypt.",
  },
} as const;
