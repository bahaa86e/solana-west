import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { solanaWestMedia } from "@/data/media/solana-west";
import { siteConfig } from "@/data/site";

export type AboutEditorialBlock = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
};

export type AboutInternalLink = {
  label: string;
  href: string;
  context: string;
};

export type AboutPageModel = {
  idPrefix: string;
  heroImage: ProjectImageAsset;
  overviewFigure: ProjectImageAsset;
  hero: {
    locationEyebrow: string;
    h1: string;
    lead: string;
    supporting: string;
  };
  developerOverview: AboutEditorialBlock;
  leadership: AboutEditorialBlock;
  portfolio: AboutEditorialBlock;
  solanaWestRelationship: AboutEditorialBlock;
  buyerTrust: AboutEditorialBlock;
  internalLinks: {
    eyebrow: string;
    title: string;
    intro: string;
    links: readonly AboutInternalLink[];
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

function faqPick(indices: readonly [number, number]): readonly FaqPair[] {
  return indices.map((i): FaqPair => solanaWestFaqCanonical[i]);
}

/** Internal routes specified for this page — no implication of official exclusivity or full ORA catalogue here. */
export function aboutPageInternalLinks(): readonly AboutInternalLink[] {
  const short = siteConfig.shortName;
  return [
    {
      label: "ORA projects hub",
      href: "/projects",
      context: "Browse the published project routes on this site.",
    },
    {
      label: `${short} project page`,
      href: "/projects/solana-west",
      context: "Master plan, amenities, location, prices, and FAQs in one hub.",
    },
    {
      label: "Prices & bracket context",
      href: "/prices",
      context: "Starting price and current bracket context.",
    },
    {
      label: "Payment plan overview",
      href: "/payment-plan",
      context: "Down payment, tenor, and delivery framing.",
    },
    {
      label: "Contact",
      href: "/contact",
      context: "Direct routing for serious buyer enquiries.",
    },
  ];
}

export function buildAboutPageModel(): AboutPageModel {
  if (!resolveProjectPage("solana-west")) {
    throw new Error("Solana West bundle required for /about composition.");
  }

  const dev = siteConfig.developer;
  const founder = siteConfig.founder;
  const projectName = siteConfig.name;

  const heroImage = solanaWestMedia.masterplan;
  const overviewFigure = solanaWestMedia.developer;

  return {
    idPrefix: "about-ora",
    heroImage,
    overviewFigure,
    hero: {
      locationEyebrow: `${dev} · Master planning`,
      h1: `About ${dev} and Solana West`,
      lead:
        `${projectName} is developed by ${dev}, chaired by ${founder}. The project brings a 316-acre low-density master plan to New Zayed, with homes arranged around greenery, privacy, and long-term residential value.`,
      supporting:
        "This website operates as an independent real estate marketing and informational platform focused on premium residential projects in Egypt. It is not the official ORA website, not a reservation system, and not a claim of exclusive representation.",
    },
    developerOverview: {
      eyebrow: "Developer overview",
      title: `${dev} as the project developer`,
      paragraphs: [
        `${dev} is the developer referenced in ${projectName} project information. Sales sheets, payment schedules, phase maps, and after-sales process should be confirmed through the relevant sales channels.`,
        "For buyers, the developer question is practical: who plans the land, who stages delivery, who issues the paperwork, and who remains accountable after reservation.",
        "This page avoids invented awards or exaggerated claims. The trust layer comes from clear project facts, published commercial terms, and proper documentation.",
      ],
    },
    leadership: {
      eyebrow: "Leadership · founder context",
      title: `${founder} and the ORA name`,
      paragraphs: [
        `${founder} chairs ${dev}, a fact many buyers associate with the ORA brand. It adds recognition, but the signed developer documents remain the authority for any purchase.`,
        "A serious buyer should separate brand familiarity from purchase documents. The reservation form, sales agreement, payment schedule, and delivery documents are what govern the transaction.",
      ],
    },
    portfolio: {
      eyebrow: "ORA project portfolio · context",
      title: "What this site covers",
      paragraphs: [
        `${dev} is associated with multiple residential destinations. This website is intentionally focused on ${projectName} in New Zayed and the project routes published under the projects hub.`,
        "If another ORA destination is not listed here, that is a content scope choice, not a statement about the developer's wider portfolio.",
        "Any third-party deck, screenshot, or broker claim should be checked against current project information for the exact unit you intend to reserve.",
      ],
    },
    solanaWestRelationship: {
      eyebrow: `${siteConfig.shortName} relationship`,
      title: `${projectName} on Mehwar El Dabaa`,
      paragraphs: [
        `${projectName} is a 316-acre New Zayed compound on Mehwar El Dabaa, with apartments, townhouses, twin houses, and standalone villas inside one walkable landscape plan.`,
        `Commercial terms should be checked through the latest ${dev} sales sheet. This site keeps prices and payment plan details on dedicated pages so buyers can review them clearly.`,
      ],
    },
    buyerTrust: {
      eyebrow: "Buyer trust · credibility cues",
      title: "Trust the paperwork, not the noise",
      paragraphs: [
        "Confirm the developer name, reservation deposit, payment schedule, delivery phase, and any fees through written documents before transferring money.",
        "Third-party marketers may discuss the compound, but accreditation and fees should be verified independently.",
        "This page does not claim exclusivity, official partnership, or the only channel to buy. Buyer diligence remains essential.",
      ],
    },
    internalLinks: {
      eyebrow: "Continue on-site",
      title: "Project guide, prices, payment, and contact",
      intro: "Use these routes to build a clear picture before requesting current documents.",
      links: aboutPageInternalLinks(),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([5, 4]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Request current project information",
      supporting:
        `Ask for current price sheets, reservation steps, phase maps, and payment schedules for ${siteConfig.shortName}. A calm, documented process is the best way to buy well.`,
      primaryLabel: "Request details on WhatsApp",
      secondaryLabel: "Written enquiry",
    },
  };
}
