import type { BlogArticleDocument, BlogArticleInternalLink } from "@/data/blog/types";
import { siteConfig } from "@/data/site";

/** Boilerplate continuity block for future article modules — customise per dossier where needed. */
export function articleInternalLinksEditorial(short: string): readonly BlogArticleInternalLink[] {
  return [
    { label: `${short} project hub`, href: "/projects/solana-west", context: "Main project guide." },
    { label: "Prices", href: "/prices", context: "Starting price and live availability context." },
    { label: "Payment plan", href: "/payment-plan", context: "5% down, up to 10 years, and delivery timing." },
    { label: "Master plan", href: "/master-plan", context: "316-acre layout, greenery, and walkability." },
    { label: "Location", href: "/location", context: "Mehwar El Dabaa and New Zayed access." },
    { label: "FAQ index", href: "/faq", context: "Clear buyer questions and answers." },
  ];
}

export function defaultArticleFinalCta(): BlogArticleDocument["finalCta"] {
  return {
    eyebrow: "Next step",
    title: "Request current sales details before deciding",
    supporting: `Use the article for context, then confirm prices, availability, payment schedule, and phase details through ${siteConfig.developer} sales channels.`,
    primaryLabel: "Request prices on WhatsApp",
    secondaryLabel: "Written enquiry",
  };
}
