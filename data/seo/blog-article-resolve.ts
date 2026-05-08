import type { RouteSeoDefinition } from "@/data/seo/types";
import type { BlogArticleDocument } from "@/data/blog/types";
import { siteConfig } from "@/data/site";

function topicSectionLabel(topic: BlogArticleDocument["topic"]): string {
  const labels: Record<BlogArticleDocument["topic"], string> = {
    investment: "Investment",
    "new-zayed-area": "New Zayed area",
    "ora-education": "ORA education",
    pricing: "Pricing",
    "payment-plan": "Payment plan",
    comparison: "Comparisons",
  };
  return labels[topic];
}

/** Metadata + OG article flags from a validated `BlogArticleDocument`. */
export function blogArticleRouteSeoFromDoc(doc: BlogArticleDocument): RouteSeoDefinition {
  return {
    path: `/blog/${doc.slug}`,
    title: `${doc.title} · ${siteConfig.shortName}`,
    description: doc.description,
    keywords: [...doc.keywords],
    openGraphImagePath: doc.heroImage.src,
    openGraphKind: "article",
    article: {
      publishedTime: doc.publishedIso,
      modifiedTime: doc.modifiedIso ?? doc.publishedIso,
      authors: doc.authors,
      section: topicSectionLabel(doc.topic),
      tags: [doc.topic, siteConfig.shortName, siteConfig.developer],
    },
  };
}
