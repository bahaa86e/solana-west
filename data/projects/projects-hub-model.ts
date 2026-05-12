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
      context: "Main project guide with unit types, amenities, location, and buyer FAQs.",
    },
    { label: "Prices", href: "/prices", context: "Starting price and current bracket context for serious buyers." },
    { label: "Payment plan", href: "/payment-plan", context: "5% down, up to 10 years, and delivery timing explained clearly." },
    {
      label: "Standalone villas",
      href: "/properties/villas",
      context: "Detached homes for privacy, land, and long-term family use.",
    },
    {
      label: "Townhouses",
      href: "/properties/townhouses",
      context: "Family homes on landscaped avenues with a balanced ticket size.",
    },
    {
      label: "Twin houses",
      href: "/properties/twin-houses",
      context: "Paired villa living between townhouses and standalone homes.",
    },
    {
      label: "Apartments",
      href: "/properties/apartments",
      context: "A practical entry into the estate for owners and investors.",
    },
    {
      label: "Master plan",
      href: "/master-plan",
      context: "316-acre layout, greenery, walkability, and residential structure.",
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
            `A 316-acre low-density master plan on Mehwar El Dabaa in New Zayed, with apartments, townhouses, twin houses, and standalone villas inside a walkable green structure.`,
            `Use the project hub to review amenities, location, payment context, and FAQs before requesting the latest availability from ${siteConfig.developer}.`,
          ] as const)
        : ([
            `${siteConfig.developer} project hub for ${entry.name}. Commercial terms and availability should be confirmed through current sales information.`,
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
      h1: "ORA Developers Egypt projects in focus",
      lead: `${ora} is presented here through published project hubs, starting with ${short} in New Zayed. Each hub is built for buyers who want clear facts, calm buyer support, and direct routes to prices, payment plans, and availability.`,
      supporting: `Chaired by ${founder}, ORA is a name many buyers already know. This page stays factual: no unpublished project claims, no artificial inventory counts, and no speculative phase announcements.`,
    },
    overview: {
      eyebrow: "Projects overview",
      title: "Start with the project hub, then confirm the sales pack",
      paragraphs: [
        "A serious buyer usually asks the same questions in order: where is it, who develops it, what can I buy, what does it cost, how do I pay, and what should I verify before reserving.",
        `${short} is the active fully routed compound on this site. Its price entry, payment plan, and delivery timeline stay aligned with the dedicated prices and payment pages.`,
        "Use the links below to move from project overview to typology pages, master plan, location, and contact without repeating the same brochure copy on every route.",
      ],
      figure: solanaWestMedia.projectOverview,
    },
    corridor: {
      eyebrow: "Geography & positioning",
      title: "How Solana West fits New Zayed's western growth corridor",
      paragraphs: [
        "New Zayed extends the western residential map of Greater Cairo. Mehwar El Dabaa, ring-road access, and Sphinx Airport proximity are part of why buyers now study this corridor seriously.",
        "Nearby luxury communities help frame New Zayed's premium residential character, while Solana West remains focused on its own ORA-led master plan.",
        "Solana West is positioned around ORA planning, low-density land use, and a walkable green structure. For investors, those details matter more than generic luxury language.",
      ],
    },
    projectCardsEyebrow: "Detailed hubs",
    projectCardsTitle: "Project hubs available on this site",
    scaleNote:
      "Additional ORA destinations can follow this same hub model when published. This page does not list placeholder projects or unverified names.",
    featuredProjects: buildFeaturedList(),
    internalLinks: {
      eyebrow: "Buyer routes",
      title: "Prices, payment, unit types, plan, and place",
      intro: "Use these pages to compare the project clearly before speaking with the sales team.",
      links: internalLinksEditorial(short),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([5, 4, 3]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Request the latest project information",
      supporting: `Ask for current price sheets, phase maps, and typology availability through ${ora} sales channels. The right next step depends on your budget, preferred home type, and timeline.`,
      primaryLabel: "Request prices on WhatsApp",
      secondaryLabel: "Written enquiry",
    },
  };
}
