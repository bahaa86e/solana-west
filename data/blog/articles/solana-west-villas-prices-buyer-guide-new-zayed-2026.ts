import type { BlogArticleDocument } from "@/data/blog/types";
import { articleInternalLinksEditorial, defaultArticleFinalCta } from "@/data/blog/article-defaults";
import { solanaWestMedia } from "@/data/media/solana-west";
import { siteConfig } from "@/data/site";

const nx = siteConfig.name;
const short = siteConfig.shortName;
const ora = siteConfig.developer;

export const solanaWestVillasPricesBuyerGuideNewZayed2026Article: BlogArticleDocument = {
  slug: "solana-west-villas-prices-buyer-guide-new-zayed-2026",
  topic: "pricing",
  title: "Solana West Villas Prices: Buyer Guide for New Zayed",
  deck: `${nx} standalone villas in New Zayed: how plot, view, finishing, phase, and payment plan affect villa pricing.`,
  description: `Solana West Villas prices in New Zayed: New Zayed Luxury Villas by ${ora}, starting price context from 9.8M EGP at project level, 5% down, installments up to 10 years, and delivery from 2027.`,
  keywords: [
    "Solana West Villas",
    "Solana West Villas prices",
    "New Zayed Luxury Villas",
    "Villas by ORA Developers",
    "Standalone Villas",
    "Solana West Payment Plan",
  ],
  publishedIso: "2026-05-10",
  modifiedIso: "2026-05-12",
  authors: ["Editorial team"],
  heroImage: solanaWestMedia.developer,
  intro: [
    "Solana West Villas are designed for buyers who want privacy, garden space, and a stronger long-term family home inside New Zayed.",
    "Villa pricing depends on plot, view, phase, size, finishing, and payment plan. Always request current villa availability before shortlisting.",
  ],
  sections: [
    {
      type: "prose",
      id: "prices",
      heading: "Solana West Villas Prices",
      titleLevel: "h2",
      paragraphs: [
        "The project starting price begins from 9.8M EGP, but standalone villas usually sit in a higher range than apartments because they offer more land and privacy.",
        "Ask for villa-specific prices, plot details, garden space, and payment schedule.",
      ],
    },
    {
      type: "prose",
      id: "why-villas",
      heading: "New Zayed Luxury Villas by ORA Developers",
      titleLevel: "h2",
      paragraphs: [
        `Solana West Villas are part of a 316-acre master plan by ${ora}. They appeal to buyers who want a premium address, private outdoor space, and a calmer residential setting.`,
        "Compare standalone villas with twin houses and townhouses if you want privacy but are still balancing budget.",
      ],
    },
    {
      type: "prose",
      id: "payment",
      heading: "Villa Payment Plan",
      titleLevel: "h2",
      paragraphs: [
        "Solana West is marketed with 5% down payment and installments up to 10 years.",
        "For villas, confirm the exact price, delivery date, finishing, and payment plan before reserving.",
      ],
    },
  ],
  internalLinks: {
    eyebrow: "Continue villa research",
    title: "Villas, prices, and payment plan",
    intro: "Compare villa details with the full Solana West buyer routes.",
    links: articleInternalLinksEditorial(short),
  },
  finalCta: defaultArticleFinalCta(),
};
