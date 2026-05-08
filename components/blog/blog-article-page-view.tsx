import type { BlogArticleDocument } from "@/data/blog/types";

import { BlogArticleBodySection } from "@/components/blog/blog-article-body-section";
import { BlogArticleHeroSection } from "@/components/blog/blog-article-hero-section";
import { BlogArticleIntroSection } from "@/components/blog/blog-article-intro-section";
import { BlogArticleInternalLinksSection } from "@/components/blog/blog-article-internal-links-section";
import { BlogFinalCtaSection } from "@/components/blog/blog-final-cta-section";

export function BlogArticlePageView({ doc }: { doc: BlogArticleDocument }) {
  const idPrefix = `blog-article-${doc.slug}`;

  return (
    <>
      <BlogArticleHeroSection doc={doc} />
      <BlogArticleIntroSection doc={doc} />
      {doc.sections.map((section, index) => (
        <BlogArticleBodySection key={section.id} docSlug={doc.slug} section={section} index={index} />
      ))}
      <BlogArticleInternalLinksSection doc={doc} />
      <BlogFinalCtaSection idPrefix={idPrefix} finalCta={doc.finalCta} />
    </>
  );
}
