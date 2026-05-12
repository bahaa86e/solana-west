import type { BlogArticleDocument } from "@/data/blog/types";
import { articleInternalLinksEditorial, defaultArticleFinalCta } from "@/data/blog/article-defaults";
import { solanaWestMedia } from "@/data/media/solana-west";
import { siteConfig } from "@/data/site";

const nx = siteConfig.name;
const short = siteConfig.shortName;
const ora = siteConfig.developer;

export const solanaWestPricesTransactionalBookingGuide2026Article: BlogArticleDocument = {
  slug: "solana-west-prices-transactional-booking-framework-2026",
  topic: "pricing",
  title: "Solana West Prices: How to Request the Right Unit and Payment Plan",
  deck: `A simple buyer guide to ${nx} prices, apartments, villas, townhouses, twin houses, 5% down payment, and installments up to 10 years.`,
  description: `${nx} prices explained for buyers: starting price from 9.8M EGP, Solana West Apartments, Solana West Villas, townhouses, twin houses, 5% down, installments up to 10 years, and delivery from 2027.`,
  keywords: [
    "Solana West Prices",
    "Solana West New Zayed prices",
    "ORA Developers Egypt Solana West",
    "New Zayed Luxury Villas",
    "Solana West Apartments",
    "Solana West Payment Plan",
    "Properties for Sale in New Zayed",
  ],
  publishedIso: "2026-05-08",
  authors: ["Editorial team"],
  heroImage: solanaWestMedia.paymentRibbon,
  intro: [
    `Most buyers search for Solana West Prices before they know which unit type fits them. That is normal. The important step is to move from a general starting price to a real option that matches your budget, lifestyle, and payment comfort.`,
    `${nx} is positioned as a premium ORA New Zayed Project on Mehwar El Dabaa. Prices start from 9.8M EGP at project level, with 5% down payment, flexible installments up to 10 years, and delivery starting from 2027.`,
    "Use this guide to understand how apartments, townhouses, twin houses, and standalone villas differ before you contact the sales team.",
  ],
  sections: [
    {
      type: "prose",
      id: "starting-price",
      heading: "Solana West Starting Price",
      titleLevel: "h2",
      paragraphs: [
        "The published starting price helps buyers understand the entry point into Solana West New Zayed. It does not mean every unit has the same price.",
        "Final pricing depends on unit type, size, view, finishing, phase, and availability. Solana West Apartments, Solana West Villas, townhouses, and twin houses each sit in a different price range.",
      ],
    },
    {
      type: "prose",
      id: "unit-types",
      heading: "Prices by Unit Type: Apartments, Townhouses, Twin Houses, and Villas",
      titleLevel: "h2",
      paragraphs: [
        "Apartments are usually the most accessible entry into the compound. Townhouses offer a family-home layout with a balanced ticket. Twin houses add more privacy and frontage. Standalone villas offer the most private lifestyle and usually require a higher budget.",
        "When you request pricing, mention the unit type first. A clear request saves time and helps the sales team send options that match your needs.",
      ],
    },
    {
      type: "prose",
      id: "payment-plan",
      heading: "Solana West Payment Plan",
      titleLevel: "h2",
      paragraphs: [
        "The Solana West Payment Plan is marketed with 5% down payment and installments up to 10 years.",
        "Before reserving, ask for the exact payment dates, reservation amount, delivery date, and any fees attached to the unit you choose.",
      ],
    },
    {
      type: "prose",
      id: "how-to-request",
      heading: "How to Request Solana West Prices",
      titleLevel: "h2",
      paragraphs: [
        "Share your preferred unit type, budget range, payment comfort, and buying timeline. For example: Solana West Apartments under a certain budget, New Zayed Luxury Villas with garden space, or Twin Houses in New Zayed with a long payment plan.",
        "Ask for current availability, phase map, unit layout, payment plan, and delivery date in one message.",
      ],
    },
    {
      type: "faq",
      id: "faq-prices",
      heading: "FAQ: Solana West Prices",
      titleLevel: "h2",
      items: [
        {
          question: "What is the starting price of Solana West?",
          answer: "Solana West prices start from 9.8M EGP at project level. Final prices depend on unit type, phase, view, size, finishing, and availability.",
        },
        {
          question: "What is the Solana West Payment Plan?",
          answer: "The payment plan is marketed with 5% down payment and installments up to 10 years, with delivery starting from 2027.",
        },
        {
          question: "How do I get current Solana West prices?",
          answer: "Contact the sales team with your preferred unit type, budget range, and timeline to receive current prices and availability.",
        },
      ],
    },
  ],
  internalLinks: {
    eyebrow: "Continue your search",
    title: "Solana West buyer routes",
    intro: "Use these pages to compare prices, payment plan, location, master plan, and unit types.",
    links: [
      ...articleInternalLinksEditorial(short),
      { label: "Solana West Apartments", href: "/properties/apartments", context: "Apartments for sale in Solana West New Zayed." },
      { label: "Solana West Villas", href: "/properties/villas", context: "Standalone villas and New Zayed Luxury Villas." },
    ],
  },
  finalCta: defaultArticleFinalCta(),
};
