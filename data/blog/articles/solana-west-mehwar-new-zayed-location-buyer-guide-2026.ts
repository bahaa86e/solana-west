import type { BlogArticleDocument } from "@/data/blog/types";
import { articleInternalLinksEditorial, defaultArticleFinalCta } from "@/data/blog/article-defaults";
import { solanaWestMedia } from "@/data/media/solana-west";
import { siteConfig } from "@/data/site";

const nx = siteConfig.name;
const short = siteConfig.shortName;
const ora = siteConfig.developer;

export const solanaWestMehwarNewZayedLocationBuyerGuide2026Article: BlogArticleDocument = {
  slug: "solana-west-mehwar-new-zayed-location-buyer-guide-2026",
  topic: "new-zayed-area",
  title: "Solana West Location Guide: Mehwar El Dabaa and New Zayed Access",
  deck: `${nx} sits on Mehwar El Dabaa in New Zayed, with access to Waslet Dahshour, Sphinx Airport, Alexandria Desert Road, Middle Ring Road, and Mall of Arabia.`,
  description: `Solana West Location guide: Mehwar El Dabaa, New Zayed, Dabaa Corridor, Sphinx Airport, Waslet Dahshour, Mall of Arabia, and West Cairo access by ${ora}.`,
  keywords: ["Solana West Location", "Solana West New Zayed", "Dabaa Corridor", "Sphinx Airport", "Waslet Dahshour", "ORA Developers Egypt"],
  publishedIso: "2026-05-09",
  modifiedIso: "2026-05-12",
  authors: ["Editorial team"],
  heroImage: solanaWestMedia.locationMap,
  intro: [
    `${nx} is located on Mehwar El Dabaa in New Zayed, one of the key growth corridors in West Cairo.`,
    "For buyers, location should be measured by real daily use: school runs, office routes, airport access, family visits, and weekend retail.",
  ],
  sections: [
    {
      type: "prose",
      id: "where",
      heading: "Where Is Solana West New Zayed?",
      titleLevel: "h2",
      paragraphs: [
        `Solana West is in New Zayed on Mehwar El Dabaa, developed by ${ora}. The project is positioned across 316 acres with apartments, townhouses, twin houses, and villas.`,
        "The location connects buyers to the wider West Cairo road network while keeping the community inside a private compound setting.",
      ],
    },
    {
      type: "prose",
      id: "access",
      heading: "Dabaa Corridor, Sphinx Airport, and Waslet Dahshour",
      titleLevel: "h2",
      paragraphs: [
        "Project information commonly mentions around 5 minutes to Waslet Dahshour, 10 minutes to Sphinx Airport, and 15 minutes to Mall of Arabia.",
        "These are useful location highlights, but buyers should test real travel times before reserving.",
      ],
    },
    {
      type: "prose",
      id: "buyer-fit",
      heading: "Who Benefits from This Location?",
      titleLevel: "h2",
      paragraphs: [
        "The location can suit families, airport users, GCC buyers, and investors watching New Zayed growth.",
        "It is also relevant for buyers comparing Solana West with other luxury homes in New Zayed and West Cairo.",
      ],
    },
  ],
  internalLinks: {
    eyebrow: "Continue location research",
    title: "Location, prices, and master plan",
    intro: "Use these pages to compare Solana West before contacting the sales team.",
    links: articleInternalLinksEditorial(short),
  },
  finalCta: defaultArticleFinalCta(),
};
