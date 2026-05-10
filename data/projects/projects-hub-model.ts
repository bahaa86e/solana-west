import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { FaqPair, ProjectEntry, ProjectImageAsset } from "@/data/projects/types";
import { projectRegistry } from "@/data/projects/registry";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { solanaWestMedia } from "@/data/media/solana-west";
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
    {
      label: "Standalone villas",
      href: "/properties/villas",
      context: "Detached stock—elevation, outlook bands, and land dedication vs. phased apartments.",
    },
    {
      label: "Townhouses",
      href: "/properties/townhouses",
      context: "Walkable-avenue townhomes; mid ticket with more privacy than vertical living.",
    },
    {
      label: "Twin houses",
      href: "/properties/twin-houses",
      context: "Paired villas—density step between townhouses and full detached lots.",
    },
    {
      label: "Apartments",
      href: "/properties/apartments",
      context: "Vertical inventory inside the estate; rental and owner paths under one compound covenant.",
    },
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
      h1: "ORA Developers Egypt · project index anchored by Solana West",
      lead: `${ora} stages large-format residential land as coherent compounds — landscape, servicing, and typology mix are negotiated as a single design thesis rather than ad-hoc parcel sales. This index lists authorised project hubs; only entries published here carry detailed routing.`,
      supporting: `Chaired by ${founder}, ORA’s Egypt pipeline competes on institutional delivery and long-horizon servicing. This page does not announce unissued projects, speculative phases, or availability tallies — each hub remains factual to released collateral.`,
    },
    overview: {
      eyebrow: "Projects overview",
      title: "Index pages first — booking packs close the loop",
      paragraphs: [
        "Project hubs consolidate what serious buyers request in sequence: typology logic, commercial framing, connectivity, amenity depth, and FAQ discipline. New destinations appear only when desk collateral is ready—not as placeholder cards.",
        `${short} is the active fully routed compound on this site. Reference pricing, payment headline, and delivery horizon stay aligned with /prices and /payment-plan—yet reservation always depends on your dated issuance pack.`,
        "The links below route you to typology pages, price context, master plan scale, and geography—each answers a distinct buyer intent without repeating the hub narrative.",
      ],
      figure: solanaWestMedia.developer,
    },
    corridor: {
      eyebrow: "Geography & positioning",
      title: "ORA compounds read against New Zayed’s western spine",
      paragraphs: [
        "New Zayed extends the western residential spine of Greater Cairo — Mehwar El Dabaa, ring-road reach, and airport-adjacent demand are already how institutions read the district. ORA compounds participate in that narrative through low-density land plans and walkable green armatures rather than maximum-yield stacking.",
        "West Cairo competition includes large-scale peers (commonly cited comparables such as VYE and Belle Vie sit nearby in market conversation). This index references them only as district context, never as partnership or co-brand claims.",
        "ORA positioning emphasizes architectural discipline, landscape continuity, and staged servicing — material for investors who underwrite counterparty quality and multi-year hold behaviour, not brochure-only comparisons.",
      ],
    },
    projectCardsEyebrow: "Detailed hubs",
    projectCardsTitle: "Authorised hubs routed on this deployment",
    scaleNote:
      "Additional ORA destinations will mirror this hub-and-spoke editorial model when authorised — no phantom cards or unpublished names are listed here.",
    featuredProjects: buildFeaturedList(),
    internalLinks: {
      eyebrow: "Authority routes",
      title: "Commerce, typologies, plan & place — bookmarkable silos",
      intro: "Stable internal URLs for teams that share diligence links in memos or chats.",
      links: internalLinksEditorial(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([5, 4, 3]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Desk verification",
      title: "Escalate from this index to stamped collateral",
      supporting: `Request hub-specific briefings, phased maps, or typology sheets through ${ora} accredited channels—no synthetic inventory or unpublished project naming.`,
      primaryLabel: "WhatsApp private desk",
      secondaryLabel: "Written enquiry",
    },
  };
}
