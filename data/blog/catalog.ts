import { solanaWestPricesPaymentPlanArticle } from "@/data/blog/articles/solana-west-prices-payment-plan";
import type { BlogArticleDocument } from "@/data/blog/types";

/**
 * Published articles registry.
 *
 * To ship an article:
 * - Build a typed `BlogArticleDocument` module (sections, FAQ blocks, OG image, keywords).
 * - Append it here. `slug` MUST match `[slug]` and stay unique.
 * - Use helpers in `article-defaults.ts` for continuity links / CTA if appropriate.
 *
 * Empty → `/blog` still renders full pillar index; `/blog/[slug]` 404 until entries exist.
 */

const articles: readonly BlogArticleDocument[] = [solanaWestPricesPaymentPlanArticle];

export function getAllBlogArticles(): readonly BlogArticleDocument[] {
  return articles;
}

export function getBlogArticleBySlug(slug: string): BlogArticleDocument | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getBlogArticleSlugs(): readonly string[] {
  return articles.map((a) => a.slug);
}

export function getBlogArticlesByTopic(topic: BlogArticleDocument["topic"]): readonly BlogArticleDocument[] {
  return articles.filter((a) => a.topic === topic);
}
