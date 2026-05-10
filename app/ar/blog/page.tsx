import { BlogIndexPageView } from "@/components/blog/blog-index-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBlogIndexPageModelAr } from "@/data/blog/blog-index-model-ar";
import { blogIndexPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getBlogIndexStructuredData } from "@/lib/schema/jsonld/blog-index-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(blogIndexPageSeoAr);

export default function ArabicBlogIndexPage() {
  const model = buildBlogIndexPageModelAr();

  return (
    <>
      <JsonLd data={getBlogIndexStructuredData(blogIndexPageSeoAr, model)} />
      <PageMain>
        <BlogIndexPageView model={model} />
      </PageMain>
    </>
  );
}
