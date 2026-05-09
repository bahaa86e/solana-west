import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { FaqPair, ProjectEntry, ProjectImageAsset } from "@/data/projects/types";
import { projectRegistry } from "@/data/projects/registry";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { solanaWestMedia } from "@/data/solana-west-media";
import { siteConfig } from "@/data/site";

export type ProjectsHubInternalLink = {
  label: string;
  href: string;
  context: string;
};

export type ProjectsHubFeaturedProject = {
  entry: ProjectEntry;
  teaser: readonly string[];
  image: ProjectImageAsset;
};

export type ProjectsHubPageModel = {
  idPrefix: string;
  heroImage: ProjectImageAsset;
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    supporting: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    figure: ProjectImageAsset;
  };
  corridor: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
  projectCardsEyebrow: string;
  projectCardsTitle: string;
  scaleNote: string;
  featuredProjects: readonly ProjectsHubFeaturedProject[];
  internalLinks: {
    eyebrow: string;
    title: string;
    intro: string;
    links: readonly ProjectsHubInternalLink[];
  };
  faqPreview: {
    intro: string;
    items: readonly FaqPair[];
    fullFaqHref: string;
  };
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

function internalLinksEditorial(short: string): readonly ProjectsHubInternalLink[] {
  return [
    {
      label: `${short} project hub`,
      href: "/projects/solana-west",
      context: "Issuance-led compound narrative, amenities, location, and FAQ depth.",
    },
    { label: "Prices", href: "/prices", context: "Reference brackets — confirm with sales before reserving." },
    { label: "Payment plan", href: "/payment-plan", context: "Headline structure; contract governs at signing." },
    { label: "Standalone villas", href: "/properties/villas", context: "Typology editorial." },
    { label: "Townhouses", href: "/properties/townhouses", context: "Typology editorial." },
    { label: "Twin houses", href: "/properties/twin-houses", context: "Typology editorial." },
    { label: "Apartments", href: "/properties/apartments", context: "Typology editorial." },
    {
      label: "Master plan",
      href: "/master-plan",
      context: "316-acre spatial logic without parcel-level speculation.",
    },
    { label: "Location", href: "/location", context: "Mehwar El Dabaa and West Cairo connectivity context." },
  ];
}

function buildFeaturedList(): readonly ProjectsHubFeaturedProject[] {
  return projectRegistry.map((entry) => {
    const resolved = resolveProjectPage(entry.slug);
    const image = resolved?.media.hero ?? solanaWestMedia.hero;
    const teaser =
      entry.slug === "solana-west"
        ? ([
            `316-acre, low-density master plan on Mehwar El Dabaa in New Zayed — walkable green structure, elevated villa frontage, apartments through standalone villas, fully finished or core & shell per SKU.`,
            `Use the project hub for amenities, payment framing, and canonical FAQs; commercial availability and phase maps remain issuance-led through ${siteConfig.developer} desks.`,
          ] as const)
        : ([
            `Authorised ${siteConfig.developer} hub route for ${entry.name}. Commercial terms, availability, and technical appendices route through desk-verified collateral.`,
          ] as const);

    return { entry, teaser, image };
  });
}

export function buildProjectsHubPageModel(): ProjectsHubPageModel {
  const ora = siteConfig.developer;
  const founder = siteConfig.founder;
  const short = siteConfig.shortName;

  return {
    idPrefix: "projects-hub",
    heroImage: solanaWestMedia.hero,
    hero: {
      eyebrow: `${ora} · West Cairo · Project index`,
      h1: "Master-planned ORA residences",
      lead: `${ora} stages large-format residential land as coherent compounds — landscape, servicing, and typology mix are negotiated as a single design thesis rather than ad-hoc parcel sales. This index lists authorised project hubs; only entries published here carry detailed routing.`,
      supporting: `Chaired by ${founder}, ORA’s Egypt pipeline competes on institutional delivery and long-horizon servicing. This page does not announce unissued projects, speculative phases, or availability tallies — each hub remains factual to released collateral.`,
    },
    overview: {
      eyebrow: "Projects overview",
      title: "How this index pairs with desk-led issuance",
      paragraphs: [
        "Project hubs consolidate the same material serious buyers request in sequence: typology logic, commercial framing, connectivity, amenity depth, and FAQ discipline. The structure scales as ORA adds destinations — new slugs appear only when desk collateral is ready, not as placeholder marketing.",
        `${short} is the active fully routed compound on this site today. Commercial posture (reference pricing, payment headline, delivery horizon) stays synchronized with /prices, /payment-plan, and the project hub — yet reservation always depends on your dated issuance pack.`,
        "Internal links below strengthen topical authority across typologies and geography without duplicating thin routes; every anchor remains crawlable `<a href>` for search and AI extraction.",
      ],
      figure: solanaWestMedia.developer,
    },
    corridor: {
      eyebrow: "Geography & positioning",
      title: "New Zayed, West Cairo, and the ORA lens",
      paragraphs: [
        "New Zayed extends the western residential spine of Greater Cairo — Mehwar El Dabaa, ring-road reach, and airport-adjacent demand are already how institutions read the district. ORA compounds participate in that narrative through low-density land plans and walkable green armatures rather than maximum-yield stacking.",
        "West Cairo competition includes large-scale peers (commonly cited comparables such as VYE and Belle Vie sit nearby in market conversation). This index references them only as district context, never as partnership or co-brand claims.",
        "ORA positioning emphasizes architectural discipline, landscape continuity, and staged servicing — material for investors who underwrite counterparty quality and multi-year hold behaviour, not brochure-only comparisons.",
      ],
    },
    projectCardsEyebrow: "Detailed hubs",
    projectCardsTitle: "Projects with full routing on this site",
    scaleNote:
      "Additional ORA destinations will mirror this hub-and-spoke editorial model when authorised — no phantom cards or unpublished names are listed here.",
    featuredProjects: buildFeaturedList(),
    internalLinks: {
      eyebrow: "Authority routes",
      title: "Deep links for buyers and citations",
      intro: "Transactional, typological, spatial, and geographic routes — spaced for scanners and AI-readable extraction.",
      links: internalLinksEditorial(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([5, 4, 3]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Desk verification",
      title: "Move from index to issuance-ready detail",
      supporting: `Request hub-specific briefings, phased maps, or typology sheets via ${ora} accredited channels — we avoid synthetic inventory or unpublished ORA naming.`,
      primaryLabel: "WhatsApp — pricing & payment plan",
      secondaryLabel: "Contact",
    },
  };
}
