/**
 * Canonical site + brand facts for metadata, schema, and layout.
 * Product facts (pricing, master plan) live alongside project records when added.
 */

export const siteConfig = {
  name: "Solana West New Zayed",
  shortName: "Solana West",
  developer: "ORA Developer Egypt",
  founder: "Naguib Sawiris",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.solanawestprices.com",
  /** X/Twitter handles for structured social metadata (fact: @solanawestprice profile) */
  twitterSite: "@solanawestprice",
  twitterCreator: "@solanawestprice",
  email: "solanawestprices@gmail.com",
  phone: "+201208986606",
  whatsAppUrl:
    "https://wa.me/201208986606?text=I%20want%20prices%20and%20payment%20plan%20for%20Solana%20West",
  social: {
    facebook: "https://www.facebook.com/solanawestprices",
    instagram: "https://www.instagram.com/solanawestprices",
    youtube: "https://www.youtube.com/@solanawestprices",
    x: "https://x.com/solanawestprice",
    snapchat: "https://www.snapchat.com/@solanawestprice",
  },
  /**
   * Header uses typography-only wordmark (no raster/SVG lockup).
   * JSON-LD Organization `logo` uses the luxury share frame for brand presence.
   */
  branding: {
    schemaLogoUrl: "/images/projects/solana-west/seo/og-social-preview.webp",
    wordmarkHomeAriaLabel: "Solana West New Zayed — home",
  },
} as const;

export type SiteConfig = typeof siteConfig;
