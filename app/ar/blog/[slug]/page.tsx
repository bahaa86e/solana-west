import { notFound } from "next/navigation";

import { BlogArticlePageView } from "@/components/blog/blog-article-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { getBlogArticleBySlug, getBlogArticleSlugs } from "@/data/blog/catalog";
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
  const seo = blogArticleRouteSeoArabic(doc);

  return (
    <>
      <JsonLd data={getBlogArticleStructuredData(seo, doc)} />
      <PageMain>
        <div lang="en" dir="ltr" className="w-full">
          <BlogArticlePageView doc={doc} />
        </div>
      </PageMain>
    </>
  );
}
