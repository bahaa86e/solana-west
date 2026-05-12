import { getAllBlogArticles, getBlogArticlesByTopic } from "@/data/blog/catalog";
import type { BlogArticleDocument, BlogTopic } from "@/data/blog/types";
import type { ProjectImageAsset } from "@/data/projects/types";
import { solanaWestMedia } from "@/data/media/solana-west";
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
      title: "Long-hold thinking without yield promises",
      body: [
        "Articles in this lane help buyers think through delivery, service charges, liquidity, currency exposure, and long-term ownership.",
        "Nothing here promises appreciation or rental yield. The goal is to ask better questions before reserving.",
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
      title: "New Zayed, Mehwar El Dabaa, airport, and ring roads",
      body: [
        "Location guides explain Mehwar El Dabaa, Sphinx Airport proximity, ring-road access, and how major developers are shaping the New Zayed corridor.",
      ],
      pillar: {
        label: "Location dossier",
        href: "/location",
        context: "Ground truth mentions for arterial access and neighbouring comps.",
      },
    },
    {
      topic: "ora-education",
      eyebrow: "ORA pedigree",
      title: `${ora} developer context`,
      body: [
        `Developer articles explain ${ora}, ${siteConfig.founder}, master planning, sales documentation, and after-sales questions without implying exclusivity or unauthorised partnerships.`,
      ],
      pillar: {
        label: "Projects index",
        href: "/projects",
        context: "Authoritative hub routes for sales-team confirmed compounds.",
      },
    },
    {
      topic: "pricing",
      eyebrow: "Commercial brackets",
      title: `${nx} prices and live availability`,
      body: [
        "Pricing articles separate the project-level starting price from the real choices buyers make across apartments, townhouses, twin houses, villas, views, and finishing.",
      ],
      pillar: {
        label: "Prices route",
        href: "/prices",
        context: "Apartment pricing, availability, and payment options.",
      },
    },
    {
      topic: "payment-plan",
      eyebrow: "Instalment literacy",
      title: "From 5% down to the signed payment schedule",
      body: [
        "Payment articles explain the headline structure, then point buyers back to the exact schedule, fees, deposits, and dates that apply to their unit.",
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
      title: "New Zayed comparisons by real buyer criteria",
      body: [
        "Comparison articles look at density, greenery, road access, developer reputation, and buyer fit without inventing rankings or false superiority claims.",
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
    { label: `${short} project hub`, href: "/projects/solana-west", context: "Main compound guide." },
    { label: "Master plan", href: "/master-plan", context: "316-acre layout, greenery, and walkability." },
    { label: "FAQ index", href: "/faq", context: "Clear buyer answers on prices, payment, and delivery." },
    { label: "Contact enquiries", href: "/contact", context: "Request current availability and sales details." },
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
      eyebrow: `${ora} buyer journal`,
      h1: "Solana West buyer guides",
      lead: `${short} publishes practical guides for buyers comparing New Zayed, prices, payment plans, unit types, and long-term investment fit.`,
      supporting: `Articles are grouped by topic: investment, location, developer background, pricing, payment plan, and comparisons. ${count === 0 ? "Core project routes remain the main source of buyer information until articles are indexed." : `${count} guide${count === 1 ? "" : "s"} currently indexed.`}`,
    },
    indexIntro: {
      eyebrow: "Editorial standard",
      title: "Guides that stay tied to project facts",
      paragraphs: [
        "Each guide uses the same project facts as the main routes: New Zayed location, starting price, payment plan, delivery horizon, developer context, and unit mix.",
        "Articles add explanation and comparison. They do not replace reservation documents, sales documents, or professional advice.",
      ],
    },
    authorityLinks: {
      eyebrow: "Core routes",
      title: "Start with the pages that stay current",
      intro: "Use these routes when you need direct facts before reading deeper articles.",
      links: authorityEditorial(short),
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Turn research into a current price request",
      supporting: `${ora} sales channels can confirm price sheets, phase maps, and payment schedules for the unit type you are considering.`,
      primaryLabel: "Request prices on WhatsApp",
      secondaryLabel: "Written enquiry",
    },
  };
}
