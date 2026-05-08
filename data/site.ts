/**
 * Canonical site + brand facts for metadata, schema, and layout.
 * Product facts (pricing, master plan) live alongside project records when added.
 */

export const siteConfig = {
  name: "Solana West New Zayed",
  shortName: "Solana West",
  developer: "ORA Developers Egypt",
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
   * Place the approved wordmark/symbol under `public/images/branding/` (committed asset).
   * If the asset already includes “Solana West” as typography, set `suppressProjectWordmark: true`.
   */
  branding: {
    headerLogo: {
      src: "/images/branding/solana-west-logo.svg",
      width: 168,
      height: 42,
      /** Used when `suppressProjectWordmark` is true so the logo carries the naming. */
      alt: "Solana West New Zayed by ORA Developers Egypt",
      suppressProjectWordmark: false,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
