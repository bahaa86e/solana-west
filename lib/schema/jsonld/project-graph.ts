import type { ResolvedProjectPage } from "@/data/projects/types";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/env";
import { schemaLocaleFromSeo } from "@/lib/schema/jsonld/schema-locale";

function canonicalUrl(slug: string): string {
  return new URL(`/projects/${slug}`, getSiteUrl().origin).toString();
}

/**
 * Structured graph aligned with rendered project sections — FAQ `acceptedAnswer.text` equals `content.faq.items`.
 */
export function getProjectStructuredDataGraph(bundle: ResolvedProjectPage, seo?: RouteSeoDefinition) {
  const url = seo?.path ? new URL(seo.path, getSiteUrl().origin).toString() : canonicalUrl(bundle.entry.slug);
  const root = siteConfig.url.replace(/\/$/, "");
  const { entry, content } = bundle;
  const { inLanguage, homeUrl, homeName } = schemaLocaleFromSeo(seo);

  const aboutPlace =
    content.schemaPlaceContainedIn ?
      ({
        "@type": "Place" as const,
        name: entry.name,
        containedInPlace: { "@type": "Place" as const, name: content.schemaPlaceContainedIn },
      })
    : { "@type": "Place" as const, name: entry.name };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${entry.name} · Project`,
    description: content.seo.description,
    inLanguage,
    isPartOf: { "@id": `${root}#website` },
    publisher: { "@id": `${root}#organization` },
    about: aboutPlace,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    name: `${entry.name} FAQ`,
    inLanguage,
    isPartOf: { "@type": "WebPage", "@id": `${url}#webpage` },
    mainEntity: content.faq.items.map((item, i) => ({
      "@type": "Question" as const,
      "@id": `${url}#project-faq-q-${i}`,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  };

  const listing = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${url}#listing`,
    url,
    name: entry.name,
    description: content.seo.description,
    inLanguage,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    inLanguage,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: homeName, item: homeUrl },
      { "@type": "ListItem" as const, position: 2, name: entry.name, item: url },
    ],
  };

  return [webPage, faqPage, listing, breadcrumbs];
}
