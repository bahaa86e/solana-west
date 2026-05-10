import type { BlogArticleDocument } from "@/data/blog/types";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { blogArticleRouteSeoFromDoc } from "@/data/seo/blog-article-resolve";
import { siteConfig } from "@/data/site";

/** Arabic URL + locale for blog articles; body remains the English article (`lang="en"` wrapper on page). */
export function blogArticleRouteSeoArabic(doc: BlogArticleDocument): RouteSeoDefinition {
  const base = blogArticleRouteSeoFromDoc(doc);

  return {
    ...base,
    path: `/ar/blog/${doc.slug}`,
    locale: "ar",
    title: `${doc.title} | ${siteConfig.shortName}`,
    description: `${doc.description} — صفحة عربية بمسار متوازٍ؛ نص المقال بالإنجليزية لكن البيانات الوصفية تدعم الاستعلام العربي.`,
    keywords: [...(base.keywords ?? []), "سولانا ويست", siteConfig.developer],
  };
}
