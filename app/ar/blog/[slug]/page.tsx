import { notFound } from "next/navigation";

import { BlogArticlePageView } from "@/components/blog/blog-article-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { getBlogArticleBySlug, getBlogArticleSlugs } from "@/data/blog/catalog";
import { getArabicBlogArticleDocument } from "@/data/blog/blog-article-content-ar";
import { blogArticleRouteSeoArabic } from "@/data/seo/blog-article-resolve-ar";
import { getBlogArticleStructuredData } from "@/lib/schema/jsonld/blog-article-page";
import { buildPageMetadata } from "@/seo/build-metadata";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getBlogArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const doc = getBlogArticleBySlug(params.slug);
  if (!doc) notFound();
  const seo = blogArticleRouteSeoArabic(doc);
  return buildPageMetadata(seo);
}

export default function ArabicBlogArticlePage({ params }: Props) {
  const doc = getBlogArticleBySlug(params.slug);
  if (!doc) notFound();
  const docAr = getArabicBlogArticleDocument(doc);
  const seo = blogArticleRouteSeoArabic(docAr);

  return (
    <>
      <JsonLd data={getBlogArticleStructuredData(seo, docAr)} />
      <PageMain>
        <div lang="ar" dir="rtl" className="w-full">
          <BlogArticlePageView doc={docAr} />
        </div>
      </PageMain>
    </>
  );
}
