import type { ResolvedProjectPage } from "@/data/projects/types";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/env";

function canonicalUrl(slug: string): string {
  return new URL(`/projects/${slug}`, getSiteUrl().origin).toString();
}

/**
 * Structured graph aligned with rendered project sections — FAQ `acceptedAnswer.text` equals `content.faq.items`.
 */
export function getProjectStructuredDataGraph(bundle: ResolvedProjectPage) {
  const url = canonicalUrl(bundle.entry.slug);
  const root = siteConfig.url.replace(/\/$/, "");
  const { entry, content } = bundle;

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
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: "Home", item: `${root}/` },
      { "@type": "ListItem" as const, position: 2, name: entry.name, item: url },
    ],
  };

  return [webPage, faqPage, listing, breadcrumbs];
}
