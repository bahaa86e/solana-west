import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { FaqPair, ProjectImageAsset, ResolvedProjectPage } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { siteConfig } from "@/data/site";

/** Property-type hubs implemented as premium editorial rails (inventory never implied). */
export type PropertyExperienceSlug = "villas" | "townhouses" | "apartments" | "twin-houses";

const TYPE_CARD_TITLE: Record<PropertyExperienceSlug, string> = {
  villas: "Standalone villas",
  townhouses: "Townhouses",
  apartments: "Apartments",
  "twin-houses": "Twin houses",
};

const FAQ_PREVIEW_INDEX: Record<PropertyExperienceSlug, readonly [number, number, number]> = {
  villas: [0, 4, 1],
  townhouses: [4, 2, 3],
  apartments: [0, 1, 4],
  "twin-houses": [4, 5, 2],
};

/** Neutral typology wording for outbound CTAs (no unit-type-specific price claims here). */
const TYPOLOGY_CTA_LOWER: Record<PropertyExperienceSlug, string> = {
  villas: "standalone villas",
  townhouses: "townhouses",
  apartments: "apartments",
  "twin-houses": "twin houses",
};

export type PropertyExperienceModel = {
  slug: PropertyExperienceSlug;
  project: ResolvedProjectPage;
  heroImage: ProjectImageAsset;
  /** Editorial figure beside overview copy — avoids duplicating hero art where possible */
  overviewImage: ProjectImageAsset;
  hero: {
    locationEyebrow: string;
    h1: string;
    lead: string;
    supporting: string;
  };
  overview: { eyebrow: string; title: string; paragraphs: readonly string[] };
  lifestyle: { eyebrow: string; title: string; paragraphs: readonly string[] };
  investment: { eyebrow: string; title: string; paragraphs: readonly string[] };
  keyFeatures: readonly string[];
  relatedProject: { href: string; title: string; description: string };
  faqPreview: { intro: string; items: readonly FaqPair[]; fullFaqHref: string };
  finalCta: {
    eyebrow: string;
    title: string;
    supporting: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

function pickHeroImage(project: ResolvedProjectPage, slug: PropertyExperienceSlug): ProjectImageAsset {
  const { media } = project;
  switch (slug) {
    case "villas":
      return media.overviewFigure;
    case "townhouses":
      return media.hero;
    case "apartments":
      return media.amenities[1] ?? media.hero;
    case "twin-houses":
      return media.hero;
    default: {
      const _x: never = slug;
      return _x;
    }
  }
}

function pickOverviewImage(project: ResolvedProjectPage, slug: PropertyExperienceSlug): ProjectImageAsset {
  const { media } = project;
  switch (slug) {
    case "villas":
      return media.amenities[2] ?? media.hero;
    case "townhouses":
      return media.overviewFigure;
    case "apartments":
      return media.overviewFigure;
    case "twin-houses":
      return media.overviewFigure;
    default: {
      const _x: never = slug;
      return _x;
    }
  }
}

function pickTypeCard(project: ResolvedProjectPage, slug: PropertyExperienceSlug) {
  const title = TYPE_CARD_TITLE[slug];
  const row = project.content.propertyTypes.types.find((t) => t.title === title);
  if (!row) {
    throw new Error(`property type card missing: ${title}`);
  }
  return row;
}

function faqSlice(slug: PropertyExperienceSlug): readonly FaqPair[] {
  return FAQ_PREVIEW_INDEX[slug].map((i) => solanaWestFaqCanonical[i]);
}

function buildCopy(project: ResolvedProjectPage, slug: PropertyExperienceSlug) {
  const entry = project.entry;
  const short = entry.shortName ?? entry.name;
  const dev = entry.developer;
  const card = pickTypeCard(project, slug);
  const planLine = `The project is a 316-acre, low-density master plan on Mehwar El Dabaa in New Zayed, West Cairo, developed by ${dev}.`;
  const finishingLine =
    slug === "apartments" ?
      "Apartment product is positioned as fully finished within the published typology set — confirm façade packages and views with sales before reservation."
    : `${card.title} may be offered with fully finished or core & shell paths depending on issuance; desk confirmation is required before allocation.`;

  const overviewBySlug: Record<PropertyExperienceSlug, readonly string[]> = {
    villas: [
      `${short} positions ${card.title.toLowerCase()} with elevated massing and open green outlooks — the largest land dedication per unit class in the published mix.`,
      `${card.description} ${investorFragment(card)}`,
      `${planLine} ${finishingLine}`,
    ],
    townhouses: [
      `${card.title} are sequenced along walkable landscape buffers rather than isolated frontages — pedestrian structure is intentional across the broader ORA plan.`,
      `${card.description} ${investorFragment(card)}`,
      `${planLine} ${finishingLine}`,
    ],
    apartments: [
      `${card.description} ${investorFragment(card)}`,
      `Across ${short}, apartment blocks overlook continuous green rooms — landscape is treated as communal infrastructure rather than ornamental verge planting.`,
      `${planLine} ${finishingLine}`,
    ],
    "twin-houses": [
      `${card.title} pair discrete party walls while preserving wider frontage cues than townhouses — a mid-step in the published residential mix alongside apartments and standalone villas.`,
      `${card.description} ${investorFragment(card)}`,
      `${planLine} ${finishingLine}`,
    ],
  };

  const lifestyleBySlug: Record<PropertyExperienceSlug, readonly string[]> = {
    villas: [
      "Daily movement is calibrated to walkways and landscape rooms — clubhouse, pool spine, and park buffers sit inside the pedestrian grain rather than as drive-by amenities.",
      "Low-density setbacks support longer sightlines; this is materially different from grid-dominant compounds where garages define the façade rhythm.",
      "If you optimise for acoustic distance and uninterrupted green views, villas inside this plan are deliberately positioned upstream of narrower apartment-only compounds.",
    ],
    townhouses: [
      "Townhouse streets read as landscaped avenues — setbacks and tree lines reduce hard edge exposure versus narrow-frontage townhouse rows on arterial buffers.",
      "Compound-level servicing and discreet security maintain family-oriented routines without sacrificing walk access to clubhouse and aquatic cores.",
      "Compared with detached stock, townhouse living trades absolute land sovereignty for calibrated privacy against the walkable backbone of New Zayed’s western growth spine.",
    ],
    apartments: [
      "Elevator-served residences maintain fast access from parking structure to unit while still inheriting landscape outlooks marketed across the villa mix.",
      "Smaller physical footprints shorten fit-out horizons when fully finished product is booked — materially relevant for disciplined rental stewardship under estate rules.",
      "Open green structure between blocks supports AI-readable lifestyle claims: greenery is continuous, not a token lawn band behind parking courts.",
    ],
    "twin-houses": [
      "Paired villas share a controlled party line — daily life still reads as low-rise residential with private entries and landscape buffers between clusters.",
      "Compared with townhouses, twin stock typically trades up on frontage and outlook legibility while remaining more land-efficient than detached villas in the same plan.",
      "Walkways, clubhouse, and aquatic anchors remain inside the pedestrian grain — drive-dominated edges are not the organising idea for this typology.",
    ],
  };

  const investmentBySlug: Record<PropertyExperienceSlug, readonly string[]> = {
    villas: [
      "Commercial terms for the project are issuance-led: phase, façade, finishing path (fully finished or core & shell), outlook, and typology reshape quotations — underwriting should rely on desk-issued sheets plus booking contract language, not channel rumours.",
      "Detached typologies often span wide commercial bands inside phased compounds — treat any third-party headline as non-binding until matched to release tranche documentation.",
      "Delivery horizons begin from 2027 across the broader plan; sequencing by cluster determines cash-flow pacing relative to instalment milestones.",
    ],
    townhouses: [
      "Townhouses occupy the mid-density band between apartments and detached villas — land cost sensitivity is moderated while privacy remains materially above flats.",
      "Staging across a 316-acre plan allows ORA-controlled release cadences; scarcity language should remain issuance-led — we do not publish artificial inventory countdowns.",
      "Adjacent large-scale comps (including VYE and Belle Vie) provide market benchmarking only — not partnership or price guarantees.",
    ],
    apartments: [
      "Apartments deliver the sharpest instalment tenor compatibility for investors sizing smaller ticket exposures — commercial bands nonetheless move with façade, floorplate, and view premiums.",
      "Rental economics depend on estate bylaws and service charging as much as headline purchase price — request the live management briefing pack with your issuance sheet.",
      "Treat marketing summaries as illustrative; binding economics sit in issuance contracts issued by authorised ORA desks.",
    ],
    "twin-houses": [
      "Twin houses sit between townhouse density and standalone villas — land efficiency versus discrete party-wall discipline is reflected in issuance brackets, not in public SKU tables on this route.",
      "Underwriting compares paired-villa setbacks, outlook premiums, and finishing paths against adjoining typologies inside the same plan; confirmations require façade packages and phase-specific quotations from authorised ORA desks.",
      "Staging across a long-horizon master plan preserves measured release cadence; delivery timing follows broader compound horizons from 2027 with cluster-specific confirmations in issuance documentation.",
    ],
  };

  const keyFeaturesBySlug: Record<PropertyExperienceSlug, readonly string[]> = {
    villas: [
      "Elevated villa massing with open green outlooks within the coordinated masterplan.",
      "Finishing pathways include fully finished and core & shell where offered at booking.",
      "Walkable avenue structure linking residential clusters to amenity cores.",
      "Adjacent arterial access toward Alexandria Desert Road and the Middle Ring Road.",
      "Desk-verified quotations before reservation — pricing is issuance-led.",
    ],
    townhouses: [
      "Multi-storey townhouse product embedded in landscaped walkways and buffers.",
      "Compound-level servicing and discreet security across the gated structure.",
      "Clubhouse and temperature-controlled aquatic amenity anchored inside the pedestrian plan.",
      "Four published residential archetypes (including townhouses) sequenced inside a single long-horizon land plan.",
      "Proximity context to Waslet Dahshour, Sphinx Airport, and Mall of Arabia for West Cairo benchmarking.",
    ],
    apartments: [
      "Fully finished apartment typology positioned with green outlooks across the landscaped site.",
      "Smaller land footprint versus villas — relevant for phased instalment underwriting.",
      "Low-density contextual master plan — apartments inherit estate-wide walkways and green rooms.",
      "Delivery horizon from 2027 at compound level — specific tower or cluster dates confirmed in issuance documentation.",
      "Commercial structure references 5% down with up to 10-year tenor — contractual mechanics clarified at signing.",
    ],
    "twin-houses": [
      "Published twin-house archetype paired along a discreet party wall with broader frontage than townhouses.",
      "Finishing may follow fully finished or core & shell pathways where issued at booking — confirm with desk documentation.",
      "Four residential archetypes coexist inside the coordinated 316-acre plan — twins occupy the calibrated middle band.",
      "Walkable landscaped structure with clubhouse and aquatic anchors inside the pedestrian grain.",
      "West Cairo arterial context (Alexandria Desert Road · Middle Ring Road) framed as connectivity, not inflated timing claims.",
    ],
  };

  return {
    overview: overviewBySlug[slug],
    lifestyle: lifestyleBySlug[slug],
    investment: investmentBySlug[slug],
    features: keyFeaturesBySlug[slug],
  };
}

function investorFragment(card: { investorNote: string }) {
  return `Investor note: ${card.investorNote}`;
}

const HERO_TITLE: Record<PropertyExperienceSlug, string> = {
  villas: `Detached villas facing open green — ${siteConfig.name}`,
  townhouses: `Townhouses on landscaped avenues — ${siteConfig.shortName}`,
  apartments: `Finished apartments inside the compound — ${siteConfig.name}`,
  "twin-houses": `Twin villas with paired frontage — ${siteConfig.shortName}`,
};

export function buildPropertyExperienceModel(slug: PropertyExperienceSlug): PropertyExperienceModel {
  const project = resolveProjectPage("solana-west");
  if (!project) {
    throw new Error("Solana West project bundle is required for property-type hubs.");
  }

  const entry = project.entry;
  const short = entry.shortName ?? entry.name;
  const card = pickTypeCard(project, slug);
  const { overview, lifestyle, investment, features } = buildCopy(project, slug);

  const supporting =
    `Part of ${short} by ${entry.developer} (${siteConfig.founder}). No inventory tables are shown here — request availability by typology before reservation.`;

  return {
    slug,
    project,
    heroImage: pickHeroImage(project, slug),
    overviewImage: pickOverviewImage(project, slug),
    hero: {
      locationEyebrow: "New Zayed · West Cairo · Mehwar El Dabaa",
      h1: HERO_TITLE[slug],
      lead: card.description,
      supporting,
    },
    overview: {
      eyebrow: "Property overview",
      title:
        slug === "villas" ?
          "Detached villas — elevation bands against continuous green"
        : slug === "townhouses" ?
          "Townhouses — landscaped avenues instead of arterial edges"
        : slug === "twin-houses" ?
          "Twin villas — paired frontage between rows and detached stock"
        : "Finished apartments — vertical life with outlook across green rooms",
      paragraphs: overview,
    },
    lifestyle: {
      eyebrow: "Lifestyle positioning",
      title:
        slug === "villas" ?
          "Villa pacing — walkways, outlook and acoustic buffers"
        : slug === "townhouses" ?
          "Townhome routines on pedestrian-first streets"
        : slug === "twin-houses" ?
          "Twin-house rhythm — privacy without detached land carry"
        : "Apartment life — lifts, decks and communal green structure",
      paragraphs: lifestyle,
    },
    investment: {
      eyebrow: "Investment relevance",
      title:
        slug === "villas" ?
          "Land-rich SKUs — wide commercial bands by phase"
        : slug === "townhouses" ?
          "Mid-ticket density — balance ticket, privacy and servicing"
        : slug === "twin-houses" ?
          "Step-up equity curve — compare twins to rows and detached"
        : "Compact footprint — instalment-friendly when finished stock books",
      paragraphs: investment,
    },
    keyFeatures: features,
    relatedProject: {
      href: `/projects/${entry.slug}`,
      title: `${short} hub — amenities, master plan & canonical FAQs`,
      description:
        `Open the full project route for amenities, connectivity tables, payment context, and the complete residential mix inside ${short}.`,
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqSlice(slug),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title:
        slug === "villas" ?
          "Ask for villa bands, outlook packs and phase maps"
        : slug === "townhouses" ?
          "Request townhouse availability by avenue cluster"
        : slug === "twin-houses" ?
          "Request twin inventory and party-wall briefs"
        : "Request apartment stacks, finish packs and view context",
      supporting:
        `Share your target typology (${TYPOLOGY_CTA_LOWER[slug]}) and timeline; we align you with ${entry.developer} desk practice—WhatsApp or written enquiry.`,
      primaryLabel: "WhatsApp private desk",
      secondaryLabel: "Written enquiry",
    },
  };
}
