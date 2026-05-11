import type { BlogArticleDocument, BlogArticleInternalLink } from "@/data/blog/types";
import { siteConfig } from "@/data/site";

/** Boilerplate continuity block for future article modules — customise per dossier where needed. */
export function articleInternalLinksEditorial(short: string): readonly BlogArticleInternalLink[] {
  return [
    { label: `${short} project hub`, href: "/projects/solana-west", context: "Compound narrative hub." },
    { label: "Prices", href: "/prices", context: "Current sales sheet-linked bracket framing." },
    { label: "Payment plan", href: "/payment-plan", context: "Headline purchase outline." },
    { label: "Master plan editorial", href: "/master-plan", context: "316-acre spatial discourse." },
    { label: "Location briefing", href: "/location", context: "Mehwar El Dabaa context." },
    { label: "FAQ index", href: "/faq", context: "Canonical question canon." },
  ];
}

export function defaultArticleFinalCta(): BlogArticleDocument["finalCta"] {
  return {
    eyebrow: "Desk verification",
    title: "Verify current sales sheet before making a decision",
    supporting: `Cross-check every figure with ${siteConfig.developer} accredited desks — articles orient; dated current sales sheet confirms reservations.`,
    primaryLabel: "WhatsApp private desk",
    secondaryLabel: "Written enquiry",
  };
}
