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
      context: "Compound narrative, amenities, commercial framing, and extended FAQs.",
    },
    {
      label: "Apartment pricing posture",
      href: "/prices",
      context: "Current sales bracketing — verify before reservation.",
    },
    {
      label: "Payment plan structure",
      href: "/payment-plan",
      context: "Down payment, tenor, and delivery pacing at a headline level.",
    },
    {
      label: "Standalone villas",
      href: "/properties/villas",
      context: "Detached lots and elevation bands relative to the 316-acre green spine.",
    },
    {
      label: "Townhouses",
      href: "/properties/townhouses",
      context: "Avenue-front townhomes—density and ticket between apartments and twins.",
    },
    {
      label: "Twin houses",
      href: "/properties/twin-houses",
      context: "Paired villas—how party lines sit inside setbacks and buffers.",
    },
    {
      label: "Apartments",
      href: "/properties/apartments",
      context: "Vertical SKUs placed against landscape corridors and amenity adjacency.",
    },
    {
      label: "Full FAQ index",
      href: "/faq",
      context: "Canonical scope for location, timelines, pricing, and types.",
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
      h1: `The ${short} master plan — 316 acres in New Zayed`,
      lead: `${entry.name} is structured as a single master-planned community — landscaped connectors, restrained plot rhythm, and a walkable skeleton that reads first as greenery and second as built edges. This page summarizes how that logic is articulated at community scale, without substituting desk-level current sales sheet drawings.`,
      supporting:
        `Public project information positions low-density sequencing, elevated villa frontage toward open greenery, shared landscape corridors, and private landscape pockets tied to parcels. Figures here stay descriptive: we do not publish unavailable engineering dimensions, phased percentage splits, or parcel-level percentages that do not appear in your current sales pack.`,
    },
    overview: {
      eyebrow: "Master plan overview",
      title: `One coherent 316-acre composition — not fragmented pads`,
      paragraphs: [
        `The tract is anchored as a cohesive land plan rather than fragmented pads — roadway hierarchy, landscaped buffers, and residential clusters organize movement through the footprint while preserving long sightlines toward green structure.`,
        "Low-density planning is the governing posture: breadth of landscape competes equally with façade length. That restraint supports privacy between clusters, quieter internal streets, and a residential reading closer to villas-in-parkland than corridors of wall-to-wall height.",
        "ORA’s sequencing reserves substantial open structure for corridors, setbacks, and walkable connectors — amenities and residential zones interlock through those bands rather than as isolated islands stitched late in delivery.",
      ],
    },
    spatialOrganization: {
      eyebrow: "Spatial organization",
      title: "Residential clusters, connectors and open-space banding",
      intro:
        "The following narratives explain relationships called out publicly for the compound — they are thematic, not a substitute for surveying a current sales sheet plot plan or reserving on a labelled availability sheet.",
      blocks: [
        {
          heading: "Residential zones and typology layering",
          body: [
            `Four residential archetypes circulate across ${short}: apartments, townhouses, twin houses, and standalone villas — each SKU reads against the shared landscape rather than inward-only courts.`,
            "Distribution is phased with current sales sheet batches; clustering logic follows servicing, outlook, and product depth rather than a single ring-fenced monoculture.",
            `When you reserve, sales maps label your parcel, orientation, buffer, and access spine — descriptive language here cannot imprint those particulars without the live sheet from ${dev}.`,
          ],
        },
        {
          heading: "Open spaces knitting residential batches",
          body: [
            "Landscape bands function as pacing devices between villas and townhouse rows — continuity of greenery reduces perceived wall-to-wall façade pressure and reinforces low-density readability from within the footprint.",
            "Open structure also carries daylight, ventilation corridors, and long views across the compound; marketing emphasizes all units overlooking greenery as a organising principle.",
            "Relationships between lawns, connector paths, and build lines are audited at current sales sheet; treat community-scale prose as orientation, not a measured survey.",
          ],
        },
        {
          heading: "Walkability as layout infrastructure",
          body: [
            "Project information describes a fully walkable community structure — connectors are intended as primary pedestrian spines tying amenity anchors to residential neighbourhoods without forcing every routine trip through vehicular corridors.",
            "Walkability dovetails with the green outline: corridors can read simultaneously as landscaped space and humane movement lanes — still subject to final civil works, phased openings, and house rules clarified at delivery packs.",
          ],
        },
        {
          heading: "Private landscape pockets and outlook hierarchy",
          body: [
            "Private pockets and setbacks buffer villas from shared movement — pairing pocket planting with setbacks supports acoustic and visual separation without claiming metre-by-metre setbacks that vary by SKU.",
            `Elevated villa frontages and open-plan outlooks cite architectural ambition; execution depends on lot grading, storey count, and batch-specific briefs coordinated by ${dev}.`,
          ],
        },
        {
          heading: "What this page deliberately omits",
          body: [
            "We do not tabulate roadway widths, berm heights, percentile open space, phased hectarage tables, inventory heatmaps, or amenity acreage fractions absent from downloadable project information wired to sales.",
            "Buyers investment review exposure should marry this editorial read with phase maps, HOA or service charge advisory notes, servicing appendices, and on-site walks coordinated through accredited desks.",
          ],
        },
      ],
    },
    lifestyle: {
      eyebrow: "Lifestyle planning",
      title: "Daily calm where villas, rows and shared estate meet",
      paragraphs: [
        "The footprint codes daily experience through spacing: setbacks, pocket lawns, landscaped connectors, and controlled vehicular segregation each reduce perceptual congestion — households feel room to breathe between front doors and arterial movement.",
        "Amenity sequencing is knitted into corridors rather than dropped as disparate satellite pads — clubhouse, athletics, pools, or shared parks (per marketing releases) owe their legibility to those landscape bands tying clusters together.",
        "Children’s routines, elder accessibility, servant circulation, and visitor parking behave differently depending on townhouse pod versus detached villa servicing — behavioural planning should be simulated during issued desk previews, not inferred from schematic prose.",
      ],
    },
    investment: {
      eyebrow: "Investment relevance",
      title: "Why master-plan coherence matters commercially",
      paragraphs: [
        "Depth of landscaped structure correlates with long-hold prestige positioning — scarcity of low-density, walkable footprints in Greater Cairo reinforces buyer preference for coherence over one-off façade statements.",
        "Master-plan investment review still pairs with current sales sheet risk: phased delivery, HOA regime, escalation clauses, and finishing optionality outweigh headline acreage narratives — cross-read /prices and /payment-plan before modeling cash flows.",
        `ORA developer quality supports governance expectations, yet parcels differ — cluster adjacency to connectors, buffering, sunlight, and SKU finishing path change reservation economics materially within the same 316-acre frame.`,
      ],
    },
    internalLinks: {
      eyebrow: "Continue research",
      title: "From plan literacy to prices, payment & unit pages",
      intro: "Stable URLs for citations — each silo answers one investment review question.",
      links: internalLinksEditorial(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([4, 3, 1]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Orientation",
      title: "Request the issued map layer for your shortlisted cluster",
      supporting: `Request current masterplan excerpts, phased availability, or on-site circulation briefings through ${dev} accredited channels—no invented surveying data.`,
      primaryLabel: "WhatsApp private desk",
      secondaryLabel: "Written enquiry",
    },
  };
}
