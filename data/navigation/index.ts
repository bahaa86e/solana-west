/**
 * Primary nav (header + mobile drawer) — minimal top-level IA.
 * Deeper transactional routes ship in footer for crawl + calm header composition.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNavItems: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Prices", href: "/prices" },
  { label: "Location", href: "/location" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/** Semantic IA cluster for mega-footer internal linking — four authority silos + formal strip. */
export type FooterMegaColumn = {
  readonly id: string;
  readonly headline: string;
  readonly ariaLabel: string;
  readonly links: readonly NavItem[];
};

export const footerMegaColumns: readonly FooterMegaColumn[] = [
  {
    id: "portfolio",
    headline: "Portfolio & narrative",
    ariaLabel: "Site story, hub, and project pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects hub", href: "/projects" },
      { label: "Solana West New Zayed", href: "/projects/solana-west" },
    ],
  },
  {
    id: "acquisition",
    headline: "Homes & economics",
    ariaLabel: "Property pages, Solana West prices, payment plan",
    links: [
      { label: "Villas", href: "/properties/villas" },
      { label: "Townhouses", href: "/properties/townhouses" },
      { label: "Apartments", href: "/properties/apartments" },
      { label: "Twin houses", href: "/properties/twin-houses" },
      { label: "Solana West prices", href: "/prices" },
      { label: "Payment plan", href: "/payment-plan" },
    ],
  },
  {
    id: "place",
    headline: "Place & adviser",
    ariaLabel: "Location, master plan, FAQ, and contact",
    links: [
      { label: "Location", href: "/location" },
      { label: "Master plan", href: "/master-plan" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    id: "research",
    headline: "Guides & benchmarking",
    ariaLabel: "Investment guides, blog, comparisons",
    links: [
      { label: "Investment guides", href: "/investment-guides" },
      { label: "Blog", href: "/blog" },
      { label: "Compound comparisons", href: "/comparison-pages" },
    ],
  },
] as const;

/** Formal lane only — avoids burying Privacy inside dense grids. */
export const footerLegalLinks: readonly NavItem[] = [{ label: "Privacy policy", href: "/privacy-policy" }] as const;
