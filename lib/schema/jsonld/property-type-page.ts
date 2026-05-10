import type { PropertyExperienceModel } from "@/data/properties/property-type-experience";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";
import { getSiteUrl, toAbsoluteSiteUrl } from "@/lib/env";

/**
 * WebPage + FAQ preview + breadcrumbs for property-type hubs.
 * FAQ `acceptedAnswer.text` matches visible preview copy (subset of canonical FAQ).
 */
export function getPropertyExperienceStructuredData(
  seo: RouteSeoDefinition,
  model: PropertyExperienceModel,
) {
  const root = siteConfig.url.replace(/\/$/, "");
  const base = getSiteUrl();
  const path = seo.path.startsWith("/") ? seo.path : `/${seo.path}`;
  const url = new URL(path, base.origin).toString();

  const aboutPlace = {
    "@type": "Place" as const,
    name: model.project.entry.name,
    containedInPlace: {
      "@type": "Place" as const,
      name: "New Zayed · Mehwar El Dabaa, West Cairo, Egypt",
    },
  };

  const primaryImageSrc = model.heroImage.src.startsWith("/")
    ? model.heroImage.src
    : `/${model.heroImage.src}`;
  const imageUrl = toAbsoluteSiteUrl(primaryImageSrc);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: model.hero.h1,
    description: seo.description,
    isPartOf: { "@id": `${root}#website` },
    publisher: { "@id": `${root}#organization` },
    about: aboutPlace,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      caption: model.heroImage.alt,
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq-preview`,
    url,
    name: `${model.hero.h1} — FAQ preview`,
    isPartOf: { "@type": "WebPage", "@id": `${url}#webpage` },
    mainEntity: model.faqPreview.items.map((item, i) => ({
      "@type": "Question" as const,
      "@id": `${url}#property-faq-${model.slug}-${i}`,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: "Home", item: `${root}/` },
      { "@type": "ListItem" as const, position: 2, name: model.hero.h1, item: url },
    ],
  };

  return [webPage, faqPage, breadcrumbs];
}
