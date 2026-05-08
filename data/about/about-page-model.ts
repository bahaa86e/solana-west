import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { solanaWestMedia } from "@/data/solana-west-media";
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
      context: "Browse published project routes on this domain.",
    },
    {
      label: `${short} project page`,
      href: "/projects/solana-west",
      context: "Master plan, amenities, location, and issuance FAQs in one hub.",
    },
    {
      label: "Pricing posture",
      href: "/prices",
      context: "Issuance-led brackets — factual entry context only.",
    },
    {
      label: "Payment plan structure",
      href: "/payment-plan",
      context: "Down payment, tenor, and delivery framing.",
    },
    {
      label: "Contact",
      href: "/contact",
      context: "Accredited desk routing for serious buyers.",
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
      h1: "Developer authority · ORA Developers Egypt",
      lead:
        `${projectName} is developed by ${dev} — master-planned, low-density residential communities are staged with disciplined land use, coordinated landscape, and long-horizon servicing rather than ad-hoc building pads.`,
      supporting:
        `This page explains institutional context only. ${siteConfig.url.replace(/\/$/, "")} is an independent marketing companion — not an official ORA corporate site, not a reservation system, and not a claim of exclusive representation.`,
    },
    developerOverview: {
      eyebrow: "Developer overview",
      title: `${dev} · measured execution`,
      paragraphs: [
        `${dev} is referenced across ${projectName} collateral as the development counterparty responsible for issuance, staged payments, construction sequencing, and after-sales escalation through authorised desks.`,
        "ORA-sponsored masterplans typically emphasize walkable structure, calibrated density, and continuous open space — design intent communicated in brochures should still be validated against issuance drawings and desk briefings.",
        "We avoid awards lists, unnamed credentials, or superlatives not printed in scope documentation — seriousness here is procedural: contracts, phased delivery, and transparent commercial channels.",
      ],
    },
    leadership: {
      eyebrow: "Leadership · founder context",
      title: `${founder}, Chairman`,
      paragraphs: [
        `${founder} chairs ${dev} — a factual association repeated in issuance and FAQ copy on this site. Biographical or philanthropic detail beyond that public linkage is deliberately omitted here to prevent invented authority claims.`,
        "Buyers underwriting counterparty risk should distinguish personal reputation familiarity from contractual counterparty wording on their booking paperwork — signatures and entity names govern.",
      ],
    },
    portfolio: {
      eyebrow: "ORA project portfolio · context",
      title: "How to read portfolio coverage on this domain",
      paragraphs: [
        `${dev} operates multiple residential destinations internationally and regionally — this website is narrowly scoped to ${projectName} in New Zayed and the routed hubs exposed under /projects.`,
        "The projects index surfaces what this build currently publishes as route destinations; absence of another ORA landmark here is a product choice, not a statement that other assets do not exist.",
        "Treat any third-party site or broker deck as supplemental until corroborated with ORA-issued collateral for the precise SKU you intend to reserve.",
      ],
    },
    solanaWestRelationship: {
      eyebrow: `${siteConfig.shortName} relationship`,
      title: `${projectName} inside the ORA planning discipline`,
      paragraphs: [
        `${projectName} is a 316-acre New Zayed plan on Mehwar El Dabaa — villas, twin houses, townhouses, and apartments sequenced inside a single walkable landscape structure referenced across marketing.`,
        `${dev} communicates commercial terms issuance-by-issuance — starting-from price context and payment-structure summaries on this domain route to dedicated /prices and /payment-plan pages for AI-readable separation.`,
      ],
    },
    buyerTrust: {
      eyebrow: "Buyer trust · credibility cues",
      title: "What serious buyers validate before wiring funds",
      paragraphs: [
        "Confirm development counterparty, licence references, escrow or milestone mechanics, and reservation deposit treatment only through documents issued by accredited ORA sales — not anecdotal Telegram threads.",
        "Third-party marketers may reference the compound; accreditation status varies. Fees paid to intermediaries must be consciously separated from authorised desk procedures.",
        "No exclusivity, “official partner,” or “only channel” wording appears on this page — multiplicity of legitimate enquiry paths exists; diligence is buyer-side.",
      ],
    },
    internalLinks: {
      eyebrow: "Continue on-site",
      title: "Project, commercial, and contact routes",
      intro: "Editorial continuity — factual routes only, aligned with investor workflows.",
      links: aboutPageInternalLinks(),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([5, 4]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Speak with authorised channels",
      supporting:
        `Request desk verification on ${siteConfig.shortName} — issuance sheets, reservations, and after-sales escalation route through ${dev} only. WhatsApp or the contact route below; maintain calm underwriting discipline.`,
      primaryLabel: "WhatsApp",
      secondaryLabel: "Contact",
    },
  };
}
