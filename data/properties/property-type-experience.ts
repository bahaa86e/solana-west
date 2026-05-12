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
  const planLine = `${short} is a 316-acre, low-density master plan on Mehwar El Dabaa in New Zayed, developed by ${dev}.`;
  const finishingLine =
    slug === "apartments" ?
      "Apartment finishing, views, floor, and phase should be confirmed with the latest sales sheet before reservation."
    : `${card.title} finishing may vary by release. Confirm whether the available home is fully finished or core and shell before reserving.`;

  const overviewBySlug: Record<PropertyExperienceSlug, readonly string[]> = {
    villas: [
      `${short} positions standalone villas as the most private home type in the mix, with garden life, wider land dedication, and open green outlooks where the plan allows.`,
      `${card.description} ${investorFragment(card)}`,
      `${planLine} ${finishingLine}`,
    ],
    townhouses: [
      "Townhouses are designed for families who want more space and privacy than an apartment without moving into the full cost profile of a detached villa.",
      `${card.description} ${investorFragment(card)}`,
      `${planLine} ${finishingLine}`,
    ],
    apartments: [
      `${card.description} ${investorFragment(card)}`,
      `Across ${short}, apartments benefit from the wider estate setting: greenery, services, security, and a managed compound environment in New Zayed.`,
      `${planLine} ${finishingLine}`,
    ],
    "twin-houses": [
      "Twin houses sit between townhouses and standalone villas, offering a more private low-rise feel with efficient land use.",
      `${card.description} ${investorFragment(card)}`,
      `${planLine} ${finishingLine}`,
    ],
  };

  const lifestyleBySlug: Record<PropertyExperienceSlug, readonly string[]> = {
    villas: [
      "Villa living is about privacy, outdoor space, and a calmer daily rhythm. The best plots should be reviewed for outlook, orientation, and distance from movement corridors.",
      "The low-density plan gives villas a stronger sense of separation than more compressed compounds.",
      "For family buyers, the main question is not only size. It is how the home sits within the greenery and how easily daily routines work inside the estate.",
    ],
    townhouses: [
      "Townhouse living works well for buyers who want a family home, private entry, and compound services without overextending into villa land carry.",
      "Landscaped avenues and walkable routes make the typology feel softer and more residential.",
      "Compared with detached villas, townhouses usually trade some land and privacy for a more approachable ticket and simpler ownership.",
    ],
    apartments: [
      "Apartments suit buyers who want a Solana West address with easier maintenance, quicker day-to-day use, and a lower capital commitment than villas.",
      "Fully finished stock, when available, can be practical for owners who want a cleaner handover path.",
      "The wider estate setting gives apartments more lifestyle value than a standalone building without a strong compound plan.",
    ],
    "twin-houses": [
      "Twin houses give buyers a villa-like rhythm with private entries, outdoor space, and a lower land burden than detached homes.",
      "They often feel more generous than townhouses while remaining more efficient than standalone villas.",
      "As with any low-rise home, orientation, outlook, and proximity to green buffers should be checked on the live phase map.",
    ],
  };

  const investmentBySlug: Record<PropertyExperienceSlug, readonly string[]> = {
    villas: [
      "Villa pricing can vary widely by plot, phase, view, finishing, and land size. Treat any headline price as a starting point until it is matched to a specific release.",
      "Detached homes are usually bought for privacy and long-term family use, but investors should still compare payment timing, service charges, and future liquidity.",
      "Delivery starts from 2027 at project level; cluster timing should be confirmed before modelling cash flow or handover plans.",
    ],
    townhouses: [
      "Townhouses often appeal to buyers who want family use and future resale depth at a more measured price point than detached villas.",
      "Live availability changes by phase, so compare the current townhouse bracket with twin house and apartment options before deciding.",
      "Nearby luxury communities help buyers understand the New Zayed market, but Solana West should be judged on its own prices, payment plan, and master plan.",
    ],
    apartments: [
      "Apartments can be the most accessible investment route into Solana West, especially for buyers seeking a lower ticket and simpler maintenance.",
      "Floor, view, finishing, service charges, and handover timing all matter as much as the headline starting price.",
      "Final pricing should come from the latest price list, not social media screenshots or old price lists.",
    ],
    "twin-houses": [
      "Twin houses sit in a useful middle band: more private than townhouses, usually more approachable than detached villas.",
      "For investment review, compare twin houses against both townhouse and villa releases on outlook, plot feel, finishing, and payment schedule.",
      "Delivery timing follows the broader 2027 project horizon, with exact cluster dates confirmed in sales documentation.",
    ],
  };

  const keyFeaturesBySlug: Record<PropertyExperienceSlug, readonly string[]> = {
    villas: [
      "Detached villa privacy within a 316-acre New Zayed master plan.",
      "Open green outlooks where the phase and plot allow.",
      "Finishing options to confirm before reservation.",
      "Walkable routes linking homes to shared amenities.",
      "Current villa pricing confirmed through the sales team.",
    ],
    townhouses: [
      "Family homes on landscaped internal avenues.",
      "More privacy than apartment living, with easier ownership than large villas.",
      "Access to compound services, security, clubhouse, and green spaces.",
      "Part of the same master plan as villas, twin houses, and apartments.",
      "New Zayed location with West Cairo road access.",
    ],
    apartments: [
      "Apartment ownership inside a managed ORA compound.",
      "Project-level prices starting from 9.8M EGP.",
      "Green outlook and phase details to confirm by unit.",
      "Delivery from 2027 at compound level, with exact timing by release.",
      "5% down and up to 10 years, subject to current sales schedule.",
    ],
    "twin-houses": [
      "Paired villa format with private entries and outdoor space.",
      "More privacy than townhouses, more efficient than detached villas.",
      "Finishing and facade details confirmed by current release.",
      "Walkable landscaped compound with clubhouse and amenity access.",
      "New Zayed road access toward Alexandria Desert Road and Middle Ring Road.",
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
  villas: `Standalone villas in ${siteConfig.name}`,
  townhouses: `Townhouses in ${siteConfig.shortName}`,
  apartments: `Apartments in ${siteConfig.name}`,
  "twin-houses": `Twin houses in ${siteConfig.shortName}`,
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
    `Part of ${short} by ${entry.developer}, chaired by ${siteConfig.founder}. Request current availability by typology before reservation.`;

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
          "Standalone villas for privacy, garden life, and open outlooks"
        : slug === "townhouses" ?
          "Townhouses with family space and easier ownership"
        : slug === "twin-houses" ?
          "Twin houses between townhouses and detached villas"
        : "Apartments with a practical entry into the compound",
      paragraphs: overview,
    },
    lifestyle: {
      eyebrow: "Lifestyle positioning",
      title:
        slug === "villas" ?
          "Quiet villa living inside a walkable estate"
        : slug === "townhouses" ?
          "Townhouse routines on landscaped streets"
        : slug === "twin-houses" ?
          "Twin-house privacy with efficient land use"
        : "Apartment life with compound services and greenery",
      paragraphs: lifestyle,
    },
    investment: {
      eyebrow: "Investment relevance",
      title:
        slug === "villas" ?
          "Villa pricing depends on plot, phase, and outlook"
        : slug === "townhouses" ?
          "A balanced ticket for family buyers"
        : slug === "twin-houses" ?
          "A step-up option between townhouse and villa"
        : "Accessible entry with clear investment logic",
      paragraphs: investment,
    },
    keyFeatures: features,
    relatedProject: {
      href: `/projects/${entry.slug}`,
      title: `${short} hub: amenities, master plan, and FAQs`,
      description:
        `Open the full project guide for amenities, location, payment context, and the complete residential mix inside ${short}.`,
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
          "Request villa pricing, plots, and phase maps"
        : slug === "townhouses" ?
          "Request townhouse availability by phase"
        : slug === "twin-houses" ?
          "Request twin house availability and payment details"
        : "Request apartment availability, views, and finishing details",
      supporting:
        `Share your target typology (${TYPOLOGY_CTA_LOWER[slug]}) and timeline. The sales team can confirm current availability, prices, and payment options by WhatsApp or written enquiry.`,
      primaryLabel: "Request prices on WhatsApp",
      secondaryLabel: "Written enquiry",
    },
  };
}
