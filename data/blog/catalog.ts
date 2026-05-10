import { solanaWestNewZayedPricesPaymentPlan2026Article } from "@/data/blog/articles/solana-west-new-zayed-prices-payment-plan-2026";
import { solanaWestNewZayedInvestmentStrength2026Article } from "@/data/blog/articles/solana-west-new-zayed-investment-strength-2026";
import { solanaWestVillasVsApartmentsLifestyleInvestmentArticle } from "@/data/blog/articles/solana-west-villas-vs-apartments-lifestyle-investment";
import { oraDevelopersEgyptVisionProjectsStrategyArticle } from "@/data/blog/articles/ora-developers-egypt-vision-projects-strategy";
import { newZayedVsSheikhZayedLuxuryBuyers2026Article } from "@/data/blog/articles/new-zayed-vs-sheikh-zayed-luxury-buyers-2026";
import { solanaWestPaymentPlanExplainedIssuerGuide2026Article } from "@/data/blog/articles/solana-west-payment-plan-explained-issuer-guide-2026";
import { solanaWestMehwarNewZayedLocationBuyerGuide2026Article } from "@/data/blog/articles/solana-west-mehwar-new-zayed-location-buyer-guide-2026";
import { solanaWestVillasPricesBuyerGuideNewZayed2026Article } from "@/data/blog/articles/solana-west-villas-prices-buyer-guide-new-zayed-2026";
import { solanaWestApartmentsPricesBuyerGuideNewZayed2026Article } from "@/data/blog/articles/solana-west-apartments-prices-buyer-guide-new-zayed-2026";
import { solanaWestVsVyeBelleVieBuyerFramework2026Article } from "@/data/blog/articles/solana-west-vs-vye-belle-vie-buyer-framework-2026";
import type { BlogArticleDocument } from "@/data/blog/types";

/**
 * Published articles registry.
 *
 * To ship an article:
 * - Build a typed `BlogArticleDocument` module (sections, FAQ blocks, OG image, keywords).
 * - Append it here. `slug` MUST match `[slug]` and stay unique.
 * - Use helpers in `article-defaults.ts` for continuity links / CTA if appropriate.
 * - Register funnel / cluster intent in `data/blog/governance/taxonomy.ts` for editorial ops.
 */

const articles: readonly BlogArticleDocument[] = [
  solanaWestPaymentPlanExplainedIssuerGuide2026Article,
  solanaWestMehwarNewZayedLocationBuyerGuide2026Article,
  solanaWestVillasPricesBuyerGuideNewZayed2026Article,
  solanaWestApartmentsPricesBuyerGuideNewZayed2026Article,
  solanaWestVsVyeBelleVieBuyerFramework2026Article,
  solanaWestNewZayedPricesPaymentPlan2026Article,
  solanaWestNewZayedInvestmentStrength2026Article,
  solanaWestVillasVsApartmentsLifestyleInvestmentArticle,
  oraDevelopersEgyptVisionProjectsStrategyArticle,
  newZayedVsSheikhZayedLuxuryBuyers2026Article,
];

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
