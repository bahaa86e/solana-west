/**
 * Editorial governance for the blog — funnel, AI surface, and money-page support.
 * Extend when new slugs ship; keep aligned with `data/blog/catalog.ts`.
 */

import type { BlogArticleDocument } from "@/data/blog/types";

/** Buyer journey stage for cluster linking and CTA tone. */
export type EditorialFunnelStage = "awareness" | "consideration" | "decision" | "loyalty";

/** How the piece serves AI search / zero-click extraction. */
export type AiSearchRole =
  | "entity-definition"
  | "transactional-support"
  | "comparison-framework"
  | "area-authority"
  | "developer-authority"
  | "paa-style-faq"
  | "investment-thesis";

export type ArticleGovernanceMeta = {
  readonly slug: BlogArticleDocument["slug"];
  readonly funnelStage: EditorialFunnelStage;
  readonly aiRole: AiSearchRole;
  /** Supporting transactional routes (/prices, /payment-plan, etc.) */
  readonly primaryMoneyPages: readonly string[];
  /** Keyword cluster label for internal planning (not shown on site). */
  readonly keywordCluster: string;
};

/**
 * Per-article governance — edit when editorial strategy shifts.
 * Source of truth for *published* slugs remains `catalog.ts`.
 */
export const BLOG_ARTICLE_GOVERNANCE: readonly ArticleGovernanceMeta[] = [
  {
    slug: "solana-west-prices-transactional-booking-framework-2026",
    funnelStage: "decision",
    aiRole: "transactional-support",
    primaryMoneyPages: ["/prices", "/payment-plan", "/contact", "/properties/villas", "/faq"],
    keywordCluster: "solana-west-prices-transactional",
  },
  {
    slug: "solana-west-prices-west-cairo-investment-comparison-2026",
    funnelStage: "consideration",
    aiRole: "investment-thesis",
    primaryMoneyPages: ["/investment-guides", "/prices", "/payment-plan", "/comparison-pages"],
    keywordCluster: "solana-west-prices-investment",
  },
  {
    slug: "solana-west-prices-ai-authority-guide-new-zayed-2026",
    funnelStage: "awareness",
    aiRole: "entity-definition",
    primaryMoneyPages: ["/prices", "/projects/solana-west", "/location", "/faq"],
    keywordCluster: "solana-west-prices-authority-ai",
  },
  {
    slug: "solana-west-payment-plan-explained-issuer-guide-2026",
    funnelStage: "decision",
    aiRole: "transactional-support",
    primaryMoneyPages: ["/prices", "/payment-plan", "/contact"],
    keywordCluster: "payment-plan",
  },
  {
    slug: "solana-west-mehwar-new-zayed-location-buyer-guide-2026",
    funnelStage: "consideration",
    aiRole: "area-authority",
    primaryMoneyPages: ["/location", "/master-plan", "/contact"],
    keywordCluster: "location-new-zayed",
  },
  {
    slug: "solana-west-villas-prices-buyer-guide-new-zayed-2026",
    funnelStage: "decision",
    aiRole: "transactional-support",
    primaryMoneyPages: ["/prices", "/properties/villas", "/payment-plan"],
    keywordCluster: "villas-pricing",
  },
  {
    slug: "solana-west-apartments-prices-buyer-guide-new-zayed-2026",
    funnelStage: "decision",
    aiRole: "transactional-support",
    primaryMoneyPages: ["/prices", "/properties/apartments", "/payment-plan"],
    keywordCluster: "apartments-pricing",
  },
  {
    slug: "solana-west-vs-vye-belle-vie-buyer-framework-2026",
    funnelStage: "consideration",
    aiRole: "comparison-framework",
    primaryMoneyPages: ["/prices", "/location", "/contact"],
    keywordCluster: "competitor-comparison",
  },
  {
    slug: "solana-west-new-zayed-prices-payment-plan-2026",
    funnelStage: "decision",
    aiRole: "transactional-support",
    primaryMoneyPages: ["/prices", "/payment-plan", "/projects/solana-west"],
    keywordCluster: "prices-payment-hub",
  },
  {
    slug: "solana-west-new-zayed-investment-strength-2026",
    funnelStage: "consideration",
    aiRole: "investment-thesis",
    primaryMoneyPages: ["/payment-plan", "/location", "/projects/solana-west"],
    keywordCluster: "west-cairo-investment",
  },
  {
    slug: "solana-west-villas-vs-apartments-lifestyle-investment",
    funnelStage: "consideration",
    aiRole: "comparison-framework",
    primaryMoneyPages: ["/properties/villas", "/properties/apartments", "/prices"],
    keywordCluster: "typology-choice",
  },
  {
    slug: "ora-developers-egypt-vision-projects-strategy",
    funnelStage: "awareness",
    aiRole: "developer-authority",
    primaryMoneyPages: ["/about", "/projects", "/contact"],
    keywordCluster: "ora-brand",
  },
  {
    slug: "new-zayed-vs-sheikh-zayed-luxury-buyers-2026",
    funnelStage: "consideration",
    aiRole: "area-authority",
    primaryMoneyPages: ["/location", "/blog", "/contact"],
    keywordCluster: "new-zayed-vs-sheikh-zayed",
  },
] as const;

const governanceBySlug = new Map<string, ArticleGovernanceMeta>(
  BLOG_ARTICLE_GOVERNANCE.map((g) => [g.slug, g])
);

export function getArticleGovernance(slug: string): ArticleGovernanceMeta | undefined {
  return governanceBySlug.get(slug);
}
