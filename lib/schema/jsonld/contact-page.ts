import type { ContactPageModel } from "@/data/contact/contact-page-model";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";
import { getSiteUrl, toAbsoluteSiteUrl } from "@/lib/env";

/** WebPage + FAQ preview + breadcrumbs for /contact */
export function getContactStructuredData(seo: RouteSeoDefinition, model: ContactPageModel) {
  const root = siteConfig.url.replace(/\/$/, "");
  const base = getSiteUrl();
  const path = seo.path.startsWith("/") ? seo.path : `/${seo.path}`;
  const url = new URL(path, base.origin).toString();

  const primarySrc = model.heroImage.src.startsWith("/") ? model.heroImage.src : `/${model.heroImage.src}`;
  const imageUrl = toAbsoluteSiteUrl(primarySrc);

  const developerOrg = {
    "@type": "Organization" as const,
    name: siteConfig.developer,
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#webpage`,
    url,
    name: model.hero.h1,
    description: seo.description,
    isPartOf: { "@id": `${root}#website` },
    publisher: { "@id": `${root}#organization` },
    about: developerOrg,
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
    name: `${model.hero.h1} · FAQ preview`,
    isPartOf: { "@type": "ContactPage", "@id": `${url}#webpage` },
    mainEntity: model.faqPreview.items.map((item, i) => ({
      "@type": "Question" as const,
      "@id": `${url}#contact-faq-${i}`,
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
