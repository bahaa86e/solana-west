import type { BlogIndexPageModel } from "@/data/blog/blog-index-model";

import { BlogAuthorityLinksSection } from "@/components/blog/blog-authority-links-section";
import { BlogFinalCtaSection } from "@/components/blog/blog-final-cta-section";
import { BlogIndexHeroSection } from "@/components/blog/blog-index-hero-section";
import { BlogIndexIntroSection } from "@/components/blog/blog-index-intro-section";
import { BlogIndexTopicsSection } from "@/components/blog/blog-index-topics-section";

export function BlogIndexPageView({ model }: { model: BlogIndexPageModel }) {
  const { authorityLinks } = model;

  return (
    <>
      <BlogIndexHeroSection model={model} />
      <BlogIndexIntroSection model={model} />
      <BlogIndexTopicsSection model={model} />
      <BlogAuthorityLinksSection
        idPrefix={model.idPrefix}
        eyebrow={authorityLinks.eyebrow}
        title={authorityLinks.title}
        intro={authorityLinks.intro}
        links={authorityLinks.links}
      />
      <BlogFinalCtaSection idPrefix={model.idPrefix} finalCta={model.finalCta} />
    </>
  );
}
