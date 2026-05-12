import type { BlogArticleDocument } from "@/data/blog/types";
import { articleInternalLinksEditorial, defaultArticleFinalCta } from "@/data/blog/article-defaults";
import { solanaWestMedia } from "@/data/media/solana-west";
import { siteConfig } from "@/data/site";

const short = siteConfig.shortName;
const nx = siteConfig.name;
const ora = siteConfig.developer;

export const solanaWestNewZayedPricesPaymentPlan2026Article: BlogArticleDocument = {
  slug: "solana-west-new-zayed-prices-payment-plan-2026",
  topic: "pricing",
  title: "Solana West New Zayed Prices and Payment Plan 2026",
  deck: `A clear guide to ${nx}: starting price from 9.8M EGP, 5% down payment, installments up to 10 years, delivery from 2027, and available home types.`,
  description: `Solana West Prices and Payment Plan in New Zayed: starting price from 9.8M EGP, 5% down, installments up to 10 years, delivery from 2027, apartments, villas, townhouses, and twin houses by ${ora}.`,
  keywords: [
    "Solana West Prices",
    "Solana West Payment Plan",
    "Solana West New Zayed",
    "Solana West 5% Down Payment",
    "Solana West Installments",
    "Properties for Sale in New Zayed",
    "ORA Developers Egypt",
  ],
  publishedIso: "2026-05-09",
  modifiedIso: "2026-05-12",
  authors: ["Editorial team"],
  heroImage: solanaWestMedia.hero,
  intro: [
    `${nx} is one of the most searched ORA New Zayed Project names because it combines a premium location, a clear starting price, and a long payment plan.`,
    "The headline terms are simple: prices start from 9.8M EGP, the down payment starts at 5%, installments can extend up to 10 years, and delivery starts from 2027.",
    "This guide helps buyers compare apartments, townhouses, twin houses, and standalone villas before requesting current availability.",
  ],
  sections: [
    {
      type: "prose",
      id: "prices",
      heading: "Solana West Prices in New Zayed",
      titleLevel: "h2",
      paragraphs: [
        "Solana West Prices start from 9.8M EGP at project level. The final number depends on the home type, phase, size, view, finishing, and available release.",
        "Apartments usually offer the most accessible entry point. Standalone villas sit higher because they offer more land, privacy, and family-home value.",
      ],
    },
    {
      type: "prose",
      id: "payment-plan",
      heading: "Solana West Payment Plan: 5% Down and Installments up to 10 Years",
      titleLevel: "h2",
      paragraphs: [
        "The Solana West Payment Plan is attractive because it gives buyers a lower entry point and a longer payment horizon.",
        "Before reserving, ask for the exact payment dates, reservation amount, fees, delivery date, and price for the unit you are considering.",
      ],
    },
    {
      type: "prose",
      id: "unit-types",
      heading: "Apartments, Townhouses, Twin Houses, and Villas",
      titleLevel: "h2",
      paragraphs: [
        "Solana West Apartments suit buyers who want a practical entry into a luxury ORA compound. Townhouses and twin houses offer more privacy for families. Solana West Villas are for buyers who want land, garden space, and a more private lifestyle.",
        "The best choice depends on budget, payment comfort, family needs, and long-term plans.",
      ],
    },
    {
      type: "prose",
      id: "location",
      heading: "New Zayed Location and Dabaa Corridor Access",
      titleLevel: "h2",
      paragraphs: [
        "Solana West is located on Mehwar El Dabaa in New Zayed, with access toward Waslet Dahshour, Sphinx Airport, Alexandria Desert Road, Middle Ring Road, and Mall of Arabia.",
        "For investors and end users, location should be tested against real routines: school, office, airport use, family visits, and weekend retail.",
      ],
    },
    {
      type: "faq",
      id: "faq",
      heading: "FAQ: Solana West Prices and Payment Plan",
      titleLevel: "h2",
      items: [
        {
          question: "What is the starting price of Solana West New Zayed?",
          answer: "Solana West starts from 9.8M EGP at project level. Final prices depend on unit type, phase, view, finishing, and availability.",
        },
        {
          question: "What is the Solana West Payment Plan?",
          answer: "The payment plan is marketed with 5% down payment and installments up to 10 years, with delivery starting from 2027.",
        },
        {
          question: "How do I request current prices?",
          answer: "Contact the sales team with your preferred unit type, budget range, and timeline to receive current prices and available options.",
        },
      ],
    },
  ],
  internalLinks: {
    eyebrow: "Continue your search",
    title: "Solana West prices, payment, and homes",
    intro: "Use these pages to compare the project before speaking with the sales team.",
    links: articleInternalLinksEditorial(short),
  },
  finalCta: defaultArticleFinalCta(),
};
