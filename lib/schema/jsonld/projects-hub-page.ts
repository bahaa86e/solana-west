import type { ProjectsHubPageModel } from "@/data/projects/projects-hub-model";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { projectRegistry } from "@/data/projects/registry";
import { siteConfig } from "@/data/site";
import { getSiteUrl, toAbsoluteSiteUrl } from "@/lib/env";
import type { SiteLocale } from "@/lib/i18n/locale";
import { localizedPathname } from "@/lib/i18n/paths";
import { schemaLocaleFromSeo } from "@/lib/schema/jsonld/schema-locale";

/** WebPage + FAQ preview + breadcrumbs + ItemList of published project hubs only. */
export function getProjectsHubStructuredData(seo: RouteSeoDefinition, model: ProjectsHubPageModel) {
  const root = siteConfig.url.replace(/\/$/, "");
  const base = getSiteUrl();
  const path = seo.path.startsWith("/") ? seo.path : `/${seo.path}`;
  const url = new URL(path, base.origin).toString();
  const locale: SiteLocale = seo.locale === "ar" ? "ar" : "en";
  const { inLanguage, homeUrl, homeName, isAr } = schemaLocaleFromSeo(seo);
  const projectsCrumbLabel = isAr ? "المشاريع" : "Projects";

  const aboutPlace = {
    "@type": "Place" as const,
    name: "New Zayed · West Cairo, Egypt",
    containedInPlace: {
      "@type": "Place" as const,
      name: "Greater Cairo, Egypt",
    },
  };

  const primarySrc = model.heroImage.src.startsWith("/") ? model.heroImage.src : `/${model.heroImage.src}`;
  const imageUrl = toAbsoluteSiteUrl(primarySrc);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: model.hero.h1,
    description: seo.description,
    inLanguage,
    isPartOf: { "@id": `${root}#website` },
    publisher: { "@id": `${root}#organization` },
    about: [{ "@id": `${root}#organization` }, aboutPlace],
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
    inLanguage,
    isPartOf: { "@type": "WebPage", "@id": `${url}#webpage` },
    mainEntity: model.faqPreview.items.map((item, i) => ({
      "@type": "Question" as const,
      "@id": `${url}#projects-hub-faq-${i}`,
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
    inLanguage,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: homeName, item: homeUrl },
      { "@type": "ListItem" as const, position: 2, name: projectsCrumbLabel, item: url },
    ],
  };

  const projectItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#project-hubs`,
    name:
      locale === "ar" ? `فهارس مشاريع ${siteConfig.developer} على هذا النطاق` : `ORA Developers Egypt project hubs indexed on this site`,
    numberOfItems: projectRegistry.length,
    itemListElement: projectRegistry.map((p, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: p.name,
      item: new URL(localizedPathname(`/projects/${p.slug}`, locale), base.origin).toString(),
    })),
  };

  return [webPage, faqPage, breadcrumbs, projectItemList];
}
