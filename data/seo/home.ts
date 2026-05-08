import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";

/** Homepage metadata — single source for `buildPageMetadata` on `/`. */
export const homeMetadata: RouteSeoDefinition = {
  title: `${siteConfig.name} | ${siteConfig.developer}`,
  description:
    `${siteConfig.name} by ${siteConfig.developer} — New Zayed, Mehwar El Dabaa. ` +
    `From 9.8M EGP. 5% down, installments up to 10 years. Delivery from 2027. ` +
    `Request issuance pricing and milestone schedules.`,
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

/** Visible homepage copy — factual only (aligned with project context). */
export const homeSections = {
  hero: {
    /** Quiet location breadcrumb above the H1 — authority without commercial framing */
    locationEyebrow: "New Zayed · Mehwar El Dabaa",
    h1: siteConfig.name,
    /** Developer + locality — editorial, not offer-led */
    communityLine: `A low-density residential community by ${siteConfig.developer} in New Zayed.`,
    /** Restrained product + geography + tenancy vocabulary for search clarity */
    seoSupportLine:
      "Villas, townhouses, and apartments in West Cairo with long-term payment plans.",
  },

  trust: {
    eyebrow: "Developer",
    title: siteConfig.developer,
    paragraphs: [
      `${siteConfig.developer} is led by Chairman ${siteConfig.founder}. Density, servicing, and long-horizon land use are staged with the same measured discipline applied across the wider ORA portfolio.`,
      `At ${siteConfig.shortName}, landscape, pedestrian movement, and villa massing read as one coordinated master plan — not isolated building pads.`,
    ],
  },

  payment: {
    eyebrow: "Commercial terms",
    title: "Payment plan",
    summary:
      "Reference pricing from 9.8M EGP, with a 5% down payment and installments up to 10 years. Delivery from 2027.",
    bullets: [
      `Starting pricing context: from 9.8M EGP.`,
      `Down payment: 5%.`,
      `Installment tenor: up to 10 years (structure subject to issuance at booking).`,
      `Anticipated handover horizon: delivery from 2027.`,
    ],
  },

  location: {
    eyebrow: "Connectivity",
    title: "Location advantages",
    intro:
      `${siteConfig.name} sits along Mehwar El Dabaa in New Zayed, with arterial links to Alexandria Desert Road and the Middle Ring Road.`,
    routes: [
      {
        term: "Arterials",
        detail: "Direct access — Alexandria Desert Road · Middle Ring Road.",
      },
      {
        term: "West Cairo anchors",
        detail: "~5 min Waslet Dahshour · ~10 min Sphinx Airport · ~15 min Mall of Arabia.",
      },
      {
        term: "Context",
        detail: "Neighboring comps (market reference): VYE (Sodic) · Belle Vie (Emaar).",
      },
    ],
  },

  finalCta: {
    eyebrow: "Next step",
    title: "Request pricing & payment options",
    supporting:
      "Share your unit preference and tenure; we confirm availability, issuance terms, and the latest commercial schedule by channel.",
    primaryLabel: "WhatsApp",
    secondaryLabel: "Contact",
  },

  /** Product grid — factual typology + restrained acquisition context */
  propertyTypes: {
    intro:
      `${siteConfig.shortName} allocates four residential typologies across a 316-acre, low-density plan — issuance pricing and façade packages vary by phase.`,
    types: [
      {
        title: "Apartments",
        description:
          "Fully finished apartment product overlooking green structure — suited to owner occupation or disciplined rental inventory under the same managed estate.",
        investorNote: "Smaller footprint, phase-driven commercial bands.",
      },
      {
        title: "Townhouses",
        description:
          "Multi-storey townhouses stitched into walkable avenues and landscape buffers — private entries with compound-level security and servicing.",
        investorNote: "Balances land cost with privacy versus apartments.",
      },
      {
        title: "Twin houses",
        description:
          "Paired villas sharing a discrete party line — wider frontage than townhouses while retaining efficient servicing and setbacks.",
        investorNote: "Mid-step between townhouse density and detached stock.",
      },
      {
        title: "Standalone villas",
        description:
          "Elevated villas with open green outlooks — largest land dedication per unit in the plan; finishing available fully finished or core & shell.",
        investorNote:
          "Upper band of the product mix — the published starting context remains from 9.8M EGP; confirm façade- and phase-specific brackets with sales.",
      },
    ],
  },

  /** West Cairo / ORA positioning — no performance claims */
  investment: {
    eyebrow: "Positioning",
    title: "West Cairo context",
    lead:
      "New Zayed continues to absorb Western Cairo demand along Mehwar El Dabaa and its ring-road links. Solana West pairs that corridor exposure with ORA-led master-plan discipline.",
    bullets: [
      {
        headline: "New Zayed growth fabric",
        text:
          "The Mehwar El Dabaa spine connects Sheikh Zayed and Western expansion zones; arterial completion supports longer-horizon residential absorption.",
      },
      {
        headline: "ORA portfolio discipline",
        text: `${siteConfig.developer}, chaired by ${siteConfig.founder}, stages density, servicing, and landscape continuity as one underwriting exercise — comparable rigor applies at ${siteConfig.shortName}.`,
      },
      {
        headline: "Accessibility profile",
        text:
          "Alexandria Desert Road and Middle Ring Road access frame daily movement; Sphinx Airport (~10 minutes) and Mall of Arabia (~15 minutes) sit within routine drive bands.",
      },
      {
        headline: "Low-density land plan",
        text:
          "316 acres prioritize walkability, wide green corridors, and elevated villas with open outlooks — a deliberate scarcity of building mass versus plot width.",
      },
      {
        headline: "Investment horizon framing",
        text:
          "Handover anchors from 2027 with phased issuance — buyers underwrite roadway maturity, adjoining benchmark compounds (e.g. VYE, Belle Vie), and staged amenity rollout rather than short-term noise.",
      },
    ],
  },

  /** Aligned with on-site visuals — factual group labels only */
  amenities: {
    eyebrow: "Community",
    title: "Amenities · open space",
    intro:
      "Community facilities and landscape are composed as continuous open space — not accessory lawns around isolated buildings.",
    groups: [
      {
        title: "Aquatic & club amenity",
        lines: [
          "Temperature-controlled pool and clubhouse cluster for resident use.",
          "Social anchor within the walkable plan — reduces reliance on off-site leisure for daily routines.",
        ],
      },
      {
        title: "Park & landscape rooms",
        lines: [
          "Wide green buffers between built rows — supports sight lines referenced in elevated villa massing.",
          "Pedestrian movement prioritised over drive-dominated edges.",
        ],
      },
      {
        title: "Avenue & spine landscaping",
        lines: [
          "Tree-lined connectors stitch residential clusters to amenity cores.",
          "Maintains legibility of the 316-acre master plan at ground level.",
        ],
      },
    ],
  },

  /** Transactional FAQ preview — canonical Q&A in `data/faq/solana-west-faq.ts` */
  faqPreview: {
    eyebrow: "Answers",
    title: "FAQ",
    intro: SOLANA_WEST_FAQ_SHARED_INTRO,
    items: [...solanaWestFaqCanonical],
  },
} as const;
