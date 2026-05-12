import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";

/** Homepage metadata — single source for `buildPageMetadata` on `/`. */
export const homeMetadata: RouteSeoDefinition = {
  title: `${siteConfig.name} | ${siteConfig.developer}`,
  description:
    `Luxury New Zayed compound by ${siteConfig.developer} on Mehwar El Dabaa. ` +
    `From 9.8M EGP, 5% down, up to 10 years installments, delivery from 2027. ` +
    `ORA-led 316-acre master plan — villas, townhouses, twin houses, apartments.`,
  path: "/",
  openGraphImagePath: defaultOpenGraphImagePath,
  keywords: [
    "Solana West prices New Zayed",
    "Solana West payment plan",
    "ORA Developers Egypt New Zayed",
    "luxury villas New Zayed",
    "West Cairo master plan compound",
    "Mehwar El Dabaa real estate",
  ],
};

/**
 * Homepage narrative — editorial sequence: credibility → land → scale → place → thesis → product → terms → life → proof → resolve → convert.
 * Facts align with project context; no performance guarantees.
 */
export const homeSections = {
  hero: {
    locationEyebrow: "New Zayed · Mehwar El Dabaa",
    /** Distinct from /projects/solana-west: estate positioning + buyer intent, not project-table-of-contents */
    h1: "Solana West New Zayed by ORA Developers Egypt",
    communityLine: `A 316-acre walkable community in New Zayed, planned by ${siteConfig.developer} around greenery, privacy, and calm daily movement.`,
    seoSupportLine:
      "Apartments, townhouses, twin houses, and standalone villas with prices from 9.8M EGP, 5% down, and installments up to 10 years.",
  },

  /** AI-search facing facts — visible HTML for buyers. */
  snapshot: {
    caption: "Key facts for buyers",
    rows: [
      { label: "Starting price", value: "From 9.8M EGP" },
      { label: "Payment plan", value: "5% down · up to 10 years" },
      { label: "Developer", value: `${siteConfig.developer}` },
      { label: "Location", value: "New Zayed · Mehwar El Dabaa" },
      { label: "Delivery", value: "From 2027" },
      { label: "Unit types", value: "Apartments, townhouses, twin houses, villas" },
    ],
  },

  trust: {
    eyebrow: "Developer",
    title: "Developed by ORA Developers Egypt",
    paragraphs: [
      `${siteConfig.shortName} is backed by ${siteConfig.developer}, chaired by ${siteConfig.founder}. The appeal is simple: a large New Zayed land parcel shaped as one coherent address, with homes, landscape, and movement planned together from the start.`,
    ],
  },

  projectOverview: {
    eyebrow: "The community",
    title: "A low-density 316-acre estate in New Zayed",
    lead: `${siteConfig.shortName} is designed for buyers who want space without losing connection to West Cairo. Wide greenery, clear internal roads, and a walkable master plan give the compound a quieter, more residential rhythm.`,
    body: [
      "The plan is not built around isolated buildings. Homes, green spaces, and pedestrian routes are arranged to support privacy, views, and easy movement.",
      "Nearby luxury communities help frame New Zayed's premium residential character, but Solana West stands on its own ORA-led master plan.",
    ],
  },

  masterplan: {
    eyebrow: "Master plan",
    title: "Understand the land before choosing a home",
    intro:
      "A strong master plan protects how a compound feels years after launch. At Solana West, the 316-acre layout, green corridors, and low-density planning should be part of your decision alongside price, payment terms, and unit size.",
  },

  location: {
    eyebrow: "New Zayed",
    title: "Connected to West Cairo, set inside a gated estate",
    intro:
      `${siteConfig.shortName} sits on Mehwar El Dabaa in New Zayed, giving buyers access to key West Cairo roads while keeping daily life inside a private residential setting.`,
    routes: [
      {
        term: "Main roads",
        detail: "Access toward Alexandria Desert Road and the Middle Ring Road.",
      },
      {
        term: "Lifestyle reach",
        detail: "~5 min Waslet Dahshour · ~10 min Sphinx Airport · ~15 min Mall of Arabia, based on project marketing context.",
      },
      {
        term: "Market context",
        detail: "Located near key residential destinations in New Zayed, with strong West Cairo access and a private ORA-led setting.",
      },
    ],
  },

  investment: {
    eyebrow: "Investment view",
    title: "Why serious buyers are watching this side of West Cairo",
    lead:
      "The investment case is not built on hype. It comes from New Zayed infrastructure, ORA's developer reputation, low-density land planning, and a payment structure that gives buyers time to enter carefully.",
    bullets: [
      {
        headline: "West Cairo growth corridor",
        text:
          "Mehwar El Dabaa, ring-road access, and Sphinx Airport proximity make New Zayed one of the more relevant long-hold residential corridors in West Cairo.",
      },
      {
        headline: "ORA developer profile",
        text: `${siteConfig.developer} adds credibility for buyers comparing developer quality, planning strength, and delivery process.`,
      },
      {
        headline: "Green, low-density planning",
        text:
          "The 316-acre scale allows homes to sit within landscape rather than feeling pressed into a dense grid.",
      },
      {
        headline: "Clear commercial starting point",
        text:
          "From 9.8M EGP, 5% down, installments up to 10 years, and delivery from 2027. Final numbers should always be checked against the latest price list.",
      },
    ],
  },

  propertyTypes: {
    eyebrow: "Residences",
    title: "Apartments, townhouses, twin houses, and villas",
    intro:
      "Solana West offers a broad residential mix for different budgets and lifestyles. Use the typology pages to compare privacy, land share, finishing, and long-term fit before asking for current availability.",
    types: [
      {
        title: "Apartments",
        description:
          "A practical entry into the compound for buyers who want ORA's New Zayed address, estate services, and green outlooks without the cost profile of a villa.",
        investorNote: "Often the most accessible route into the project. Confirm floor, view, and phase pricing.",
      },
      {
        title: "Townhouses",
        description:
          "Family homes on landscaped avenues, offering more privacy and space than apartments while staying easier to manage than larger villa plots.",
        investorNote: "A balanced option for buyers comparing ticket size, privacy, and future resale depth.",
      },
      {
        title: "Twin houses",
        description:
          "Paired villa homes with broader frontage than townhouses and a more private feel, while remaining efficient within the master plan.",
        investorNote: "A natural step between townhouses and standalone villas.",
      },
      {
        title: "Standalone villas",
        description:
          "Detached homes positioned for privacy, garden life, and open green views where the plan allows. Finishing options and plot details vary by release.",
        investorNote:
          "Best suited to buyers who value land, privacy, and long-term family use. Request phase-specific villa pricing.",
      },
    ],
  },

  payment: {
    eyebrow: "Prices & payment",
    title: "From 9.8M EGP with 5% down",
    summary:
      "Starting price from 9.8M EGP · 5% down payment · installments up to 10 years · delivery from 2027",
    bullets: [
      "Final prices depend on unit type, phase, finishing, size, and view.",
      "The 5% down payment is the headline structure; deposits and fees should be confirmed before reservation.",
      "Installments may extend up to 10 years depending on the current sales schedule.",
      "Delivery starts from 2027, with exact timing confirmed by cluster or unit.",
    ],
  },

  amenities: {
    eyebrow: "Life inside Solana West",
    title: "A quieter compound rhythm",
    intro:
      "The lifestyle story is built around greenery, walking, privacy, and everyday ease. Amenities support the residential plan rather than competing with it.",
    groups: [
      {
        title: "Clubhouse and water elements",
        lines: [
          "Pools and clubhouse spaces are positioned as social anchors within the walkable fabric.",
          "Residents can keep more of daily life inside the estate, with less dependence on outside trips for simple leisure.",
        ],
      },
      {
        title: "Green buffers",
        lines: [
          "Landscape separation helps protect outlooks, privacy, and a calmer feeling between homes.",
          "Pedestrian routes make the compound easier to enjoy on foot, not only by car.",
        ],
      },
      {
        title: "Coherent architecture",
        lines: [
          "The strongest luxury communities feel consistent after handover. Solana West is positioned around that kind of composed, long-term address.",
        ],
      },
    ],
  },

  finalCta: {
    eyebrow: "Next step",
    title: "Request current prices and availability",
    supporting:
      "Share your preferred unit type, budget range, and timeline. The sales team can send the latest price sheet, payment schedule, and available options by WhatsApp or written enquiry.",
    primaryLabel: "Request prices on WhatsApp",
    secondaryLabel: "Speak with an advisor",
  },

  faqPreview: {
    eyebrow: "Buyer questions",
    title: "What to confirm before reserving in Solana West",
    intro: SOLANA_WEST_FAQ_SHARED_INTRO,
    items: [...solanaWestFaqCanonical],
  },
} as const;
