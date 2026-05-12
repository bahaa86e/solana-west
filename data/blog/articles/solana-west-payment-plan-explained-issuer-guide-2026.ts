import type { BlogArticleDocument } from "@/data/blog/types";
import { articleInternalLinksEditorial, defaultArticleFinalCta } from "@/data/blog/article-defaults";
import { solanaWestMedia } from "@/data/media/solana-west";
import { siteConfig } from "@/data/site";

const nx = siteConfig.name;
const short = siteConfig.shortName;
const ora = siteConfig.developer;

export const solanaWestPaymentPlanExplainedIssuerGuide2026Article: BlogArticleDocument = {
  slug: "solana-west-payment-plan-explained-issuer-guide-2026",
  topic: "payment-plan",
  title: "Solana West Payment Plan Explained for New Zayed Buyers",
  deck: `${nx}: 5% down payment, installments up to 10 years, delivery from 2027, and what buyers should confirm before reserving.`,
  description: `Solana West Payment Plan guide: 5% down, installments up to 10 years, delivery from 2027, ORA Developers Egypt, apartments, villas, townhouses, and twin houses in New Zayed.`,
  keywords: ["Solana West Payment Plan", "Solana West Installments", "Solana West 5% Down Payment", "Solana West New Zayed", "ORA Developers Egypt"],
  publishedIso: "2026-05-09",
  modifiedIso: "2026-05-12",
  authors: ["Editorial team"],
  heroImage: solanaWestMedia.amenities[0],
  intro: [
    "The Solana West Payment Plan is one of the main reasons buyers are studying the project.",
    "The headline terms are clear: 5% down payment, flexible installments up to 10 years, and delivery starting from 2027.",
    "This guide explains how to review those terms before choosing an apartment, townhouse, twin house, or villa.",
  ],
  sections: [
    {
      type: "prose",
      id: "down-payment",
      heading: "Solana West 5% Down Payment",
      titleLevel: "h2",
      paragraphs: [
        "The 5% down payment gives buyers a lighter entry point into Solana West New Zayed.",
        "Before reserving, confirm the reservation amount, payment dates, fees, and the exact unit attached to the offer.",
      ],
    },
    {
      type: "prose",
      id: "installments",
      heading: "Flexible Installments up to 10 Years",
      titleLevel: "h2",
      paragraphs: [
        "Installments up to 10 years can help buyers plan ownership more comfortably.",
        "Ask for the full payment schedule so you understand when each payment is due and how it connects to delivery.",
      ],
    },
    {
      type: "prose",
      id: "delivery",
      heading: "Delivery Starting from 2027",
      titleLevel: "h2",
      paragraphs: [
        "Solana West delivery starts from 2027 at project level.",
        "Exact delivery timing can differ by phase, building, or villa release, so buyers should confirm the date for the unit they choose.",
      ],
    },
    {
      type: "faq",
      id: "faq",
      heading: "FAQ: Solana West Payment Plan",
      titleLevel: "h2",
      items: [
        { question: "What is the Solana West Payment Plan?", answer: "The payment plan is marketed with 5% down and installments up to 10 years, with delivery starting from 2027." },
        { question: "Do all units have the same schedule?", answer: "The headline terms may be similar, but exact payment dates and unit details should be confirmed before reserving." },
        { question: "How do I request the payment plan?", answer: "Contact the sales team with your preferred unit type and budget range to receive current payment details." },
      ],
    },
  ],
  internalLinks: {
    eyebrow: "Continue research",
    title: "Prices, payment, and unit options",
    intro: "Compare the payment plan with prices, location, and home types.",
    links: articleInternalLinksEditorial(short),
  },
  finalCta: defaultArticleFinalCta(),
};
