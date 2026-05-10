import type { BlogIndexPageModel } from "@/data/blog/blog-index-model";
import { getAllBlogArticles } from "@/data/blog/catalog";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";
import { getSiteUrl, toAbsoluteSiteUrl } from "@/lib/env";
import type { SiteLocale } from "@/lib/i18n/locale";
import { arabicBlogArticlePath } from "@/lib/i18n/paths";
import { schemaLocaleFromSeo } from "@/lib/schema/jsonld/schema-locale";

export function getBlogIndexStructuredData(seo: RouteSeoDefinition, model: BlogIndexPageModel) {
  const root = siteConfig.url.replace(/\/$/, "");
  const base = getSiteUrl();
  const path = seo.path.startsWith("/") ? seo.path : `/${seo.path}`;
  const url = new URL(path, base.origin).toString();
  const items = getAllBlogArticles();
  const locale: SiteLocale = seo.locale === "ar" ? "ar" : "en";
  const { inLanguage, homeUrl, homeName, isAr } = schemaLocaleFromSeo(seo);
  const blogIndexUrl = new URL(locale === "ar" ? "/ar/blog" : "/blog", base.origin).toString();
  const blogCrumbLabel = isAr ? "المدونة" : "Blog";

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
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      caption: model.heroImage.alt,
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    inLanguage,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: homeName, item: homeUrl },
      { "@type": "ListItem" as const, position: 2, name: blogCrumbLabel, item: blogIndexUrl },
    ],
  };

  if (items.length === 0) {
    return [webPage, breadcrumbs];
  }

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#articles`,
    name: isAr ? `${siteConfig.shortName} — موجز بحث عربي` : `${siteConfig.shortName} editorial briefings`,
    numberOfItems: items.length,
    itemListElement: items.map((a, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: a.title,
      item: new URL(locale === "ar" ? arabicBlogArticlePath(a.slug) : `/blog/${a.slug}`, base.origin).toString(),
    })),
  };

  return [webPage, breadcrumbs, itemList];
}
