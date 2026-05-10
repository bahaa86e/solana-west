import type { BlogArticleDocument } from "@/data/blog/types";
import type { FaqPair } from "@/data/projects/types";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";
import { getSiteUrl, toAbsoluteSiteUrl } from "@/lib/env";
import { schemaLocaleFromSeo } from "@/lib/schema/jsonld/schema-locale";

function collectFaqSections(doc: BlogArticleDocument): readonly FaqPair[] {
  const fromSections = doc.sections.flatMap((s) => (s.type === "faq" ? [...s.items] : []));
  return fromSections;
}

export function getBlogArticleStructuredData(seo: RouteSeoDefinition, doc: BlogArticleDocument) {
  const root = siteConfig.url.replace(/\/$/, "");
  const base = getSiteUrl();
  const path = seo.path.startsWith("/") ? seo.path : `/${seo.path}`;
  const url = new URL(path, base.origin).toString();
  const isAr = seo.locale === "ar";
  const blogUrl = new URL(isAr ? "/ar/blog" : "/blog", base.origin).toString();
  const { homeUrl, homeName } = schemaLocaleFromSeo(seo);
  const webPageLang = isAr ? "ar-EG" : "en-US";
  const articleLang = "en-US";

  const primarySrc = doc.heroImage.src.startsWith("/") ? doc.heroImage.src : `/${doc.heroImage.src}`;
  const imageUrl = toAbsoluteSiteUrl(primarySrc);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    headline: doc.title,
    description: doc.description,
    inLanguage: articleLang,
    datePublished: doc.publishedIso,
    dateModified: doc.modifiedIso ?? doc.publishedIso,
    ...(doc.authors && doc.authors.length > 0 ? { author: doc.authors.map((name) => ({ "@type": "Person", name })) } : {}),
    image: [{ "@type": "ImageObject", url: imageUrl, caption: doc.heroImage.alt }],
    publisher: { "@id": `${root}#organization` },
    isPartOf: { "@type": "WebSite", "@id": `${root}#website`, url: siteConfig.url, name: siteConfig.name },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: doc.title,
    description: seo.description,
    inLanguage: webPageLang,
    isPartOf: { "@id": `${root}#website` },
    publisher: { "@id": `${root}#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      caption: doc.heroImage.alt,
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    inLanguage: webPageLang,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: homeName, item: homeUrl },
      { "@type": "ListItem" as const, position: 2, name: isAr ? "المدونة" : "Blog", item: blogUrl },
      { "@type": "ListItem" as const, position: 3, name: doc.title, item: url },
    ],
  };

  const faqItems = collectFaqSections(doc);
  const faqLd =
    faqItems.length > 0 ?
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${url}#faq-blocks`,
        url,
        inLanguage: articleLang,
        isPartOf: { "@type": "WebPage", "@id": `${url}#webpage` },
        mainEntity: faqItems.map((item, i) => ({
          "@type": "Question" as const,
          "@id": `${url}#article-faq-${i}`,
          name: item.question,
          acceptedAnswer: { "@type": "Answer" as const, text: item.answer },
        })),
      }
    : null;

  const out = [articleLd, webPage, breadcrumbs];
  return faqLd ? [...out, faqLd] : out;
}
