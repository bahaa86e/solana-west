import { getAllBlogArticles, getBlogArticlesByTopic } from "@/data/blog/catalog";
import type { BlogArticleDocument, BlogTopic } from "@/data/blog/types";
import type { ProjectImageAsset } from "@/data/projects/types";
import { solanaWestMedia } from "@/data/solana-west-media";
import { siteConfig } from "@/data/site";

export type BlogTopicGroup = {
  topic: BlogTopic;
  eyebrow: string;
  title: string;
  body: readonly string[];
  pillar: { label: string; href: string; context: string };
};

export type BlogIndexAuthorityLink = {
  label: string;
  href: string;
  context: string;
};

export type BlogIndexPageModel = {
  idPrefix: string;
  topicGroupsDetailed: readonly BlogTopicGroupWithArticles[];
  heroImage: ProjectImageAsset;
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    supporting: string;
  };
  indexIntro: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
  authorityLinks: {
    eyebrow: string;
    title: string;
    intro: string;
    links: readonly BlogIndexAuthorityLink[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    supporting: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

function topicDefinitions(): readonly BlogTopicGroup[] {
  const ora = siteConfig.developer;
  const nx = siteConfig.name;

  return [
    {
      topic: "investment",
      eyebrow: "Investment briefings",
      title: "Long-horizon ownership without performance theatre",
      body: [
        "Articles filed here translate desk-adjacent context into underwriting discipline: phased delivery, HOA and servicing exposure, liquidity and FX sensitivities relevant to UAE and domestic buyers.",
        "Nothing on this lane promises appreciation, rent yields, or “best-buy” countdowns — every note defers issuance contracts and audited cash-flow models you sign at reservation.",
      ],
      pillar: {
        label: "Investment guides hub",
        href: "/investment-guides",
        context: "Structured West Cairo framing — editorial supplement, not personalised advice.",
      },
    },
    {
      topic: "new-zayed-area",
      eyebrow: "New Zayed & corridors",
      title: "Geography decoded for compound buyers",
      body: [
        "Mehwar El Dabaa sequencing, Sphinx Airport proximity, ring-road behaviours, and how institutional peers benchmark the corridor — written as orientation, not brochure drive-time gospel.",
      ],
      pillar: {
        label: "Location dossier",
        href: "/location",
        context: "Ground truth references for arterial access and neighbouring comps.",
      },
    },
    {
      topic: "ora-education",
      eyebrow: "ORA pedigree",
      title: `${ora} staging logic and counterparties`,
      body: [
        `Educational arcs explain how ${ora} aligns master plans, phased amenities, after-sales escalation, and ${siteConfig.founder}-led governance expectations — without implying exclusivities or unauthorised partnerships.`,
      ],
      pillar: {
        label: "Projects index",
        href: "/projects",
        context: "Authoritative hub routes for issuance-led compounds.",
      },
    },
    {
      topic: "pricing",
      eyebrow: "Pricing posture",
      title: `${nx}: brackets, phases, SKU economics`,
      body: [
        "Editorials separate marketing reference ticks from issuance-priced SKUs across villas, townhouses, twin houses, apartments, finishing forks, and orientation premiums.",
      ],
      pillar: {
        label: "Prices route",
        href: "/prices",
        context: "Reference framing — spreadsheet authority sits with accredited sales desks.",
      },
    },
    {
      topic: "payment-plan",
      eyebrow: "Payment engineering",
      title: "Down payments, tenor, milestones, contractual reality",
      body: [
        "Collateral headings (5% down, ten-year tenor language) unpacked next to clauses that actually bind: installment waterfalls, penalties, refinancing limits, reservation deposits.",
      ],
      pillar: {
        label: "Payment plan hub",
        href: "/payment-plan",
        context: "Headline commercial structure mirrored in articles when updated.",
      },
    },
    {
      topic: "comparison",
      eyebrow: "Comparisons",
      title: `West Cairo comps without invented scorecards`,
      body: [
        "Density, landscaped structure, arterial legibility, and developer reputation compared with named peers only when marketing already cites those peers as district context.",
      ],
      pillar: {
        label: "Comparison workspace",
        href: "/comparison-pages",
        context: "Structured juxtaposition anchors for serious shortlists.",
      },
    },
  ] as const;
}

function authorityEditorial(short: string): readonly BlogIndexAuthorityLink[] {
  return [
    { label: `${short} project hub`, href: "/projects/solana-west", context: "Canonical compound briefing." },
    { label: "Master plan editorial", href: "/master-plan", context: "316-acre spatial framing without parcel invention." },
    { label: "FAQ index", href: "/faq", context: "Issuer-synchronised canonical answers." },
    { label: "Contact enquiries", href: "/contact", context: "Route complex briefings to desks." },
  ];
}

/** Topic group plus optional live articles (empty until catalog fills). */
export type BlogTopicGroupWithArticles = BlogTopicGroup & {
  articles: readonly Pick<BlogArticleDocument, "slug" | "title" | "deck" | "publishedIso">[];
};

export function attachArticlesToTopics(groups: readonly BlogTopicGroup[]): readonly BlogTopicGroupWithArticles[] {
  return groups.map((g) => ({
    ...g,
    articles: getBlogArticlesByTopic(g.topic).map((a) => ({
      slug: a.slug,
      title: a.title,
      deck: a.deck,
      publishedIso: a.publishedIso,
    })),
  }));
}

export function buildBlogIndexPageModel(): BlogIndexPageModel {
  const ora = siteConfig.developer;
  const short = siteConfig.shortName;
  const count = getAllBlogArticles().length;

  return {
    idPrefix: "blog-index",
    topicGroupsDetailed: attachArticlesToTopics(topicDefinitions()),
    heroImage: solanaWestMedia.hero,
    hero: {
      eyebrow: `${ora} editorial desk · Investor-grade prose`,
      h1: "Research journal",
      lead: `${short} publishes long-form briefing notes as desk collateral matures — each article is attributable, dated, and written for buyers who already read FAQs and still need sequencing context.`,
      supporting: `Articles cluster by topical lane (investment, geography, counterparties, commercial structure, comps). Listing pages stay calm: no synthetic publish cadence promises, queue badges, or inventory hints. ${count === 0 ? "The live library is preparing its first tranche — authority routes below remain the operational spine until posts index here." : `${count} briefing${count === 1 ? "" : "s"} currently indexed.`}`,
    },
    indexIntro: {
      eyebrow: "Indexing model",
      title: "Lanes, pillars, and how posts ship",
      paragraphs: [
        "Every briefing references the same disciplined facts elsewhere on site (location minutes, headline commercial scaffolding, FAQ canon). Divergence is purposeful — articles narrate sequencing, juxtaposition, and buyer psychology that issuance FAQs cannot shoulder alone.",
        "New posts inherit this template: labelled topic, attributable dates, OG/Twitter parity, breadcrumb fidelity, FAQ blocks only when mirrored in JSON-LD, and internal anchors back to transactional routes.",
      ],
    },
    authorityLinks: {
      eyebrow: "Operational spine",
      title: "Authoritative continuity while editorial fills in",
      intro: "Crawl-ready anchors reinforcing topical authority alongside future posts.",
      links: authorityEditorial(short),
    },
    finalCta: {
      eyebrow: "Desk alignment",
      title: "Request source collateral before trading on prose",
      supporting: `${ora} sales teams issue dated decks, phased maps, and payment exhibits — prose here orients; contracts govern.`,
      primaryLabel: "WhatsApp",
      secondaryLabel: "Contact",
    },
  };
}
