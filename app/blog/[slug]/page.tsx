import { notFound } from "next/navigation";

import { BlogArticlePageView } from "@/components/blog/blog-article-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { getBlogArticleBySlug, getBlogArticleSlugs } from "@/data/blog/catalog";
import { blogArticleRouteSeoFromDoc } from "@/data/seo/blog-article-resolve";
import { getBlogArticleStructuredData } from "@/schemas/blog-article-page";
import { buildPageMetadata } from "@/seo/build-metadata";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getBlogArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const doc = getBlogArticleBySlug(params.slug);
  if (!doc) notFound();
  const seo = blogArticleRouteSeoFromDoc(doc);
  return buildPageMetadata(seo);
}

export default function BlogArticlePage({ params }: Props) {
  const doc = getBlogArticleBySlug(params.slug);
  if (!doc) notFound();
  const seo = blogArticleRouteSeoFromDoc(doc);

  return (
    <>
      <JsonLd data={getBlogArticleStructuredData(seo, doc)} />
      <PageMain>
        <BlogArticlePageView doc={doc} />
      </PageMain>
    </>
  );
}
