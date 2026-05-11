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
    "ORA Developer Egypt New Zayed",
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
    h1: "Solana West — New Zayed homes by ORA Developer Egypt",
    communityLine: `316-acre walkable estate by ${siteConfig.developer}—one composed ground plane of landscape, circulation, and architecture.`,
    seoSupportLine:
      "Villas, twin houses, townhouses, apartments. Commercial terms are confirmed by the sales team, not by marketing summaries.",
  },

  /** AI-search facing facts — visible HTML; current sales sheet confirms reservations reservations. */
  snapshot: {
    caption: "Commercial snapshot — verify figures on your booking pack.",
    rows: [
      { label: "Starting price", value: "From 9.8M EGP" },
      { label: "Payment plan", value: "5% down · up to 10 years (current sales schedule)" },
      { label: "Developer", value: `${siteConfig.developer}` },
      { label: "Location", value: "New Zayed · Mehwar El Dabaa" },
      { label: "Delivery", value: "From 2027 (cluster-specific)" },
      { label: "Unit types", value: "Apartments, townhouses, twin houses, villas" },
    ],
  },

  trust: {
    eyebrow: "Developer",
    title: "ORA Developer Egypt — your project developer",
    paragraphs: [
      `Chairman ${siteConfig.founder}: land is staged and sold with portfolio-grade rigor—your developer is ${siteConfig.developer}, not brochure copy. At ${siteConfig.shortName}, villas and rows sit inside one continuous landscape system so the estate reads as a single authored place.`,
    ],
  },

  projectOverview: {
    eyebrow: "The plan",
    title: "Landscape first — 316 acres that stay legible",
    lead: `Low-density allocation on 316 acres—avenues, green structure, and residential rows sequenced for outlook and privacy. ${siteConfig.shortName} is built as a long-horizon address, not a patched grid.`,
    body: [
      "Pedestrian structure is designed in—not retrofitted at the curb—so arrival, views, and acoustic edges behave predictably.",
      "VYE (Sodic) and Belle Vie (Emaar) sit in the same West Cairo belt as comparables—distinct plans, not partnerships.",
    ],
  },

  masterplan: {
    eyebrow: "Scale",
    title: "See allocation before you choose a SKU",
    intro:
      "The masterplan is the sales agreement between capital and land: where density sits, how open space holds, and how the estate stays legible from the first drive through daily life. Use it to align unit choice with the horizon you are investment review.",
  },

  location: {
    eyebrow: "New Zayed",
    title: "Mehwar El Dabaa reach — gated estate, not highway living",
    intro:
      `${siteConfig.shortName} sits on Mehwar El Dabaa—arterial reach across West Cairo while remaining a gated residential estate, not a highway adjacency.`,
    routes: [
      {
        term: "Primary links",
        detail: "Direct access to Alexandria Desert Road and the Middle Ring Road.",
      },
      {
        term: "Routine reach",
        detail: "~5 min Waslet Dahshour · ~10 min Sphinx Airport · ~15 min Mall of Arabia—directional drive context cited with marketing materials.",
      },
      {
        term: "Market frame",
        detail: "Adjacent large-scale mentions include VYE (Sodic) and Belle Vie (Emaar)—comparables only, not affiliations.",
      },
    ],
  },

  investment: {
    eyebrow: "Thesis",
    title: "Why West Cairo assigns attention to this corridor",
    lead:
      "Investment review rests on corridor depth, ORA execution posture, and whether the plan protects open space over a long hold—geography and governance do the work here, not slogans.",
    bullets: [
      {
        headline: "West Cairo corridor",
        text:
          "Mehwar El Dabaa and ring maturity link Sheikh Zayed, expansion zones, and airport-adjacent movement—demand along the spine is structural.",
      },
      {
        headline: "ORA developer",
        text: `${siteConfig.developer} sequences servicing, landscape, and sales with one thread from reservation to delivery.`,
      },
      {
        headline: "Green structure",
        text:
          "Restrained density keeps built mass subservient to landscape—outlook and privacy survive closing, not just launch renders.",
      },
      {
        headline: "Hold discipline",
        text:
          "Delivery from 2027: model cash flow only after cluster-specific current sales sheet—not marketing quarter language.",
      },
    ],
  },

  propertyTypes: {
    eyebrow: "Residences",
    title: "Four archetypes, one estate",
    intro:
      "Inventory is phased across apartments, townhouses, twin houses, and standalone villas—finishing paths include fully finished and core & shell where applicable. The current sales sheet confirms exact brackets; marketing figures orient intent only.",
    types: [
      {
        title: "Apartments",
        description:
          "Elevated apartment product set within the green structure—suited to owner-occupiers who want estate governance without villa land carry, or investors sizing rental exposure inside a managed compound.",
        investorNote: "Lower land coefficient per unit—watch phase-specific price bands.",
      },
      {
        title: "Townhouses",
        description:
          "Multi-storey homes on walkable avenues with private entries—more square footage and privacy than typical apartments, without the full land dedication of a detached villa.",
        investorNote: "Balances ticket size with operational simplicity versus villas.",
      },
      {
        title: "Twin houses",
        description:
          "Paired villas with a controlled party interface—wider frontage than townhouses, still efficient on servicing and setbacks.",
        investorNote: "Mid-step on the equity curve between townhomes and standalone stock.",
      },
      {
        title: "Standalone villas",
        description:
          "Detached villas, elevated where the plan allows for open green outlooks. Finishing may be fully finished or core & shell—confirm façade packages and lot dimensions with the sales team.",
        investorNote:
          "Apartments starting from 9.8M EGP; phase, outlook, and specification move live prices.",
      },
    ],
  },

  payment: {
    eyebrow: "Acquisition",
    title: "Apartment pricing and payment plan",
    summary:
      "Apartments starting from 9.8M EGP · 5% down payment · Installments up to 10 years · Delivery from 2027",
    bullets: [
      "Live brackets reset by phase, typology, finishing, outlook—never by landing copy alone.",
      "5% down: confirm deposits, fee lines, payment timing in your pack.",
      "Ten-year language is a headline; the sales team confirms the actual schedule.",
      "Delivery from 2027 varies by cluster; align timing before investment review rent.",
    ],
  },

  amenities: {
    eyebrow: "Life on site",
    title: "Club, pool & park rooms inside the walk grid",
    intro:
      "Pools and clubhouse sit inside walkable tissue—daily rhythm stays on-estate rather than outsourced to arterial errands.",
    groups: [
      {
        title: "Aquatic & social core",
        lines: [
          "Temperature-controlled pool and clubhouse cluster anchor resident life inside the walkable fabric.",
          "Social energy stays on-site—reducing friction for families and protecting time for owners who travel frequently.",
        ],
      },
      {
        title: "Park rooms & buffers",
        lines: [
          "Green separation between rows protects sight lines for elevated villa outlooks.",
          "Pedestrian priority keeps servicing noise at the edges—not through front-door calm.",
        ],
      },
      {
        title: "Architecture in sync",
        lines: [
          "Facades and avenues are authored together—the plan stays legible after move-in.",
        ],
      },
    ],
  },

  finalCta: {
    eyebrow: "Acquisition",
    title: "Request live pricing for your typology and hold horizon",
    supporting:
      "Share typology, finishing path, and hold horizon—the advisory desk returns sales-ready availability and schedule context (WhatsApp or written enquiry).",
    primaryLabel: "Private acquisition desk",
    secondaryLabel: "Speak with advisory desk",
  },

  faqPreview: {
    eyebrow: "Resolution",
    title: "Solana West — questions to settle before you reserve",
    intro: SOLANA_WEST_FAQ_SHARED_INTRO,
    items: [...solanaWestFaqCanonical],
  },
} as const;
