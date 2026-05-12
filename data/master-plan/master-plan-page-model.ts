import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { solanaWestMedia } from "@/data/media/solana-west";
import { siteConfig } from "@/data/site";

export type MasterPlanSpatialBlock = {
  heading: string;
  body: readonly string[];
};

export type MasterPlanInternalLink = {
  label: string;
  href: string;
  context: string;
};

export type MasterPlanPageModel = {
  idPrefix: string;
  heroImage: ProjectImageAsset;
  overviewFigure: ProjectImageAsset;
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    supporting: string;
  };
  overview: { eyebrow: string; title: string; paragraphs: readonly string[] };
  spatialOrganization: {
    eyebrow: string;
    title: string;
    intro: string;
    blocks: readonly MasterPlanSpatialBlock[];
  };
  lifestyle: { eyebrow: string; title: string; paragraphs: readonly string[] };
  investment: { eyebrow: string; title: string; paragraphs: readonly string[] };
  internalLinks: {
    eyebrow: string;
    title: string;
    intro: string;
    links: readonly MasterPlanInternalLink[];
  };
  faqPreview: { intro: string; items: readonly FaqPair[]; fullFaqHref: string };
  finalCta: {
    eyebrow: string;
    title: string;
    supporting: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

function faqPick(indices: readonly [number, number, number]): readonly FaqPair[] {
  return indices.map((i): FaqPair => solanaWestFaqCanonical[i]);
}

function internalLinksEditorial(short: string): readonly MasterPlanInternalLink[] {
  return [
    {
      label: `${short} project hub`,
      href: "/projects/solana-west",
      context: "Compound guide, amenities, prices, payment, and FAQs.",
    },
    {
      label: "Apartment pricing posture",
      href: "/prices",
      context: "Starting price and current bracket context.",
    },
    {
      label: "Payment plan structure",
      href: "/payment-plan",
      context: "5% down, up to 10 years, and delivery from 2027.",
    },
    {
      label: "Standalone villas",
      href: "/properties/villas",
      context: "Detached homes with privacy, land, and green outlooks.",
    },
    {
      label: "Townhouses",
      href: "/properties/townhouses",
      context: "Family homes on landscaped internal avenues.",
    },
    {
      label: "Twin houses",
      href: "/properties/twin-houses",
      context: "Paired villa living inside the same low-density plan.",
    },
    {
      label: "Apartments",
      href: "/properties/apartments",
      context: "A practical entry into the estate with compound services.",
    },
    {
      label: "Full FAQ index",
      href: "/faq",
      context: "FAQ answers for location, timelines, pricing, and unit types.",
    },
  ];
}

export function buildMasterPlanPageModel(): MasterPlanPageModel {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) throw new Error("Solana West bundle required for master plan route.");

  const entry = bundle.entry;
  const short = entry.shortName ?? entry.name;
  const dev = entry.developer;

  const heroImage = solanaWestMedia.amenities[2] ?? bundle.media.hero;
  const overviewFigure = solanaWestMedia.masterplan;

  return {
    idPrefix: "master-plan-sw",
    heroImage,
    overviewFigure,
    hero: {
      eyebrow: "Master plan · Spatial organization · New Zayed",
      h1: `${short} master plan: 316 acres in New Zayed`,
      lead: `${entry.name} is planned as a low-density community where homes, greenery, roads, and walking routes work together. The goal is a compound that feels open, calm, and easy to understand.`,
      supporting:
        "This page explains the planning idea at community level. For exact parcel position, orientation, plot dimensions, and phase availability, request the current sales map.",
    },
    overview: {
      eyebrow: "Master plan overview",
      title: "One coherent estate, not a set of isolated blocks",
      paragraphs: [
        "The strength of a luxury compound is often felt in the spaces between homes. Solana West uses roads, landscaped buffers, and residential clusters to create a more legible 316-acre estate.",
        "Low-density planning gives the community room to breathe. It supports privacy, longer views, quieter internal streets, and a softer residential character.",
        "Amenities and homes are intended to connect through landscape rather than sit as separate islands. That is what helps a large community feel composed instead of oversized.",
      ],
    },
    spatialOrganization: {
      eyebrow: "Spatial organization",
      title: "Residential clusters, connectors, and open space",
      intro:
        "The points below explain how the master plan is positioned. They should be read alongside the latest phase map before choosing a specific unit.",
      blocks: [
        {
          heading: "Residential zones and typology layering",
          body: [
            `${short} includes apartments, townhouses, twin houses, and standalone villas across one shared landscape structure.`,
            "Different home types allow buyers to choose the right balance of privacy, budget, and long-term use.",
            `Before reserving, ask ${dev} sales for the phase map showing orientation, access, green buffers, and the exact unit position.`,
          ],
        },
        {
          heading: "Open spaces knitting residential batches",
          body: [
            "Green bands separate residential clusters and soften the scale of the compound.",
            "Open space also supports daylight, long views, and a calmer feeling between homes.",
            "For a specific unit, review how close it is to lawns, walking routes, roads, and amenity areas.",
          ],
        },
        {
          heading: "Walkability as layout infrastructure",
          body: [
            "Project information positions Solana West as a walkable community, with pedestrian links connecting homes, green spaces, and amenities.",
            "Walkability matters because it changes daily life: a compound feels more residential when every movement is not car-dependent.",
          ],
        },
        {
          heading: "Private landscape pockets and outlook hierarchy",
          body: [
            "Private landscape pockets and setbacks help protect the quiet around villas and low-rise homes.",
            `Open outlooks depend on the specific plot, grading, storey count, and phase details confirmed by ${dev}.`,
          ],
        },
        {
          heading: "What this page deliberately omits",
          body: [
            "We do not invent engineering dimensions, open-space percentages, or inventory heat maps that are not part of published sales information.",
            "Use this page for orientation, then confirm the exact technical details through phase maps, service charge notes, and an on-site visit.",
          ],
        },
      ],
    },
    lifestyle: {
      eyebrow: "Lifestyle planning",
      title: "Daily calm shaped by space and greenery",
      paragraphs: [
        "Spacing changes how a home feels. Setbacks, green pockets, walking routes, and internal roads all affect privacy, noise, and the ease of everyday movement.",
        "Amenities work best when they are naturally connected to residential clusters rather than treated as isolated destinations.",
        "Families should review the phase map with real routines in mind: children, drivers, visitors, deliveries, parking, and access to shared spaces.",
      ],
    },
    investment: {
      eyebrow: "Investment relevance",
      title: "Why master-plan quality matters to long-term value",
      paragraphs: [
        "A coherent master plan can support long-term desirability because buyers continue to care about privacy, greenery, access, and how the community feels after handover.",
        "Still, investment review should combine the master plan with price, payment schedule, delivery phase, service charges, and finishing details.",
        `ORA's developer profile supports confidence, but individual parcels still differ. Outlook, buffer, sunlight, and finishing path can change the value of two homes inside the same 316-acre plan.`,
      ],
    },
    internalLinks: {
      eyebrow: "Continue research",
      title: "Move from the plan to prices, payment, and unit pages",
      intro: "Each route answers a specific buyer question before you request current availability.",
      links: internalLinksEditorial(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([4, 3, 1]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Orientation",
      title: "Request the current master plan and phase map",
      supporting: `Ask for current master plan excerpts, phase availability, and on-site orientation through ${dev} sales channels before selecting a unit.`,
      primaryLabel: "Request map on WhatsApp",
      secondaryLabel: "Written enquiry",
    },
  };
}
