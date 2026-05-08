import type { FaqPair } from "@/data/projects/types";
import type { ProjectImageAsset } from "@/data/projects/types";

/** Editorial lanes — mirrored in grouping on `/blog`. */
export type BlogTopic =
  | "investment"
  | "new-zayed-area"
  | "ora-education"
  | "pricing"
  | "payment-plan"
  | "comparison";

export type BlogArticleInternalLink = {
  label: string;
  href: string;
  context: string;
};

export type BlogArticleProseSection = {
  type: "prose";
  id: string;
  heading: string;
  /** Section heading level in body (h1 reserved for page title). */
  titleLevel: "h2" | "h3";
  paragraphs: readonly string[];
};

export type BlogArticleFaqSection = {
  type: "faq";
  id: string;
  heading: string;
  titleLevel: "h2" | "h3";
  intro?: string;
  items: readonly FaqPair[];
};

export type BlogArticleSection = BlogArticleProseSection | BlogArticleFaqSection;

/**
 * Canonical article document — one module per slug under `articles/` when published.
 * All strings are factual editorial copy; omit slugs rather than shipping placeholders.
 */
export type BlogArticleDocument = {
  slug: string;
  topic: BlogTopic;
  title: string;
  /** Editorial subtitle under hero headline */
  deck: string;
  /** Meta description — must align with visible lead */
  description: string;
  keywords: readonly string[];
  publishedIso: string;
  modifiedIso?: string;
  /** Optional attribution line (plain text); defaults omitted in schema if empty */
  authors?: readonly string[];
  heroImage: ProjectImageAsset;
  /** Lead paragraphs beneath hero */
  intro: readonly string[];
  sections: readonly BlogArticleSection[];
  internalLinks: {
    eyebrow: string;
    title: string;
    intro: string;
    links: readonly BlogArticleInternalLink[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    supporting: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};
