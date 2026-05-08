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

export type FooterDirectorySection = {
  readonly id: string;
  readonly eyebrow: string;
  readonly links: readonly NavItem[];
};

/**
 * Footer site directory — topical clusters for crawl + internal authority.
 * Kept data-only; layout and spacing live in `SiteFooter`.
 */
export const footerDirectorySections: readonly FooterDirectorySection[] = [
  {
    id: "main",
    eyebrow: "Main pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    id: "projects",
    eyebrow: "Project pages",
    links: [
      { label: "Projects hub", href: "/projects" },
      { label: "Solana West New Zayed", href: "/projects/solana-west" },
    ],
  },
  {
    id: "property-types",
    eyebrow: "Property types",
    links: [
      { label: "Villas", href: "/properties/villas" },
      { label: "Townhouses", href: "/properties/townhouses" },
      { label: "Apartments", href: "/properties/apartments" },
      { label: "Twin houses", href: "/properties/twin-houses" },
    ],
  },
  {
    id: "commerce",
    eyebrow: "Prices & payment plan",
    links: [
      { label: "Prices", href: "/prices" },
      { label: "Payment plan", href: "/payment-plan" },
    ],
  },
  {
    id: "place",
    eyebrow: "Location & master plan",
    links: [
      { label: "Location", href: "/location" },
      { label: "Master plan", href: "/master-plan" },
    ],
  },
  {
    id: "support",
    eyebrow: "FAQ & contact",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    id: "guides",
    eyebrow: "Investment guides",
    links: [{ label: "Investment guides", href: "/investment-guides" }],
  },
  {
    id: "blog",
    eyebrow: "Blog",
    links: [{ label: "Blog", href: "/blog" }],
  },
  {
    id: "compare",
    eyebrow: "Comparison pages",
    links: [{ label: "Compound comparisons", href: "/comparison-pages" }],
  },
  {
    id: "legal",
    eyebrow: "Privacy & legal",
    links: [{ label: "Privacy policy", href: "/privacy-policy" }],
  },
] as const;
