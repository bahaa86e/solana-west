import { BlogAuthorityLinksSection } from "@/components/blog/blog-authority-links-section";
import type { BlogArticleDocument } from "@/data/blog/types";

export function BlogArticleInternalLinksSection({ doc }: { doc: BlogArticleDocument }) {
  const { internalLinks } = doc;
  return (
    <BlogAuthorityLinksSection
      idPrefix={`blog-article-${doc.slug}`}
      eyebrow={internalLinks.eyebrow}
      title={internalLinks.title}
      intro={internalLinks.intro}
      links={internalLinks.links}
    />
  );
}
