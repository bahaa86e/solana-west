import { BlogIndexPageView } from "@/components/blog/blog-index-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBlogIndexPageModel } from "@/data/blog/blog-index-model";
import { blogIndexPageSeo } from "@/data/seo/routes";
import { getBlogIndexStructuredData } from "@/schemas/blog-index-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(blogIndexPageSeo);

export default function BlogIndexPage() {
  const model = buildBlogIndexPageModel();

  return (
    <>
      <JsonLd data={getBlogIndexStructuredData(blogIndexPageSeo, model)} />
      <PageMain>
        <BlogIndexPageView model={model} />
      </PageMain>
    </>
  );
}
