import { PropertyTypeEditorialStackSection } from "@/components/properties/property-type-editorial-stack-section";
import type { AboutPageModel } from "@/data/about/about-page-model";

import { AboutDeveloperOverviewSection } from "@/components/about/about-developer-overview-section";
import { AboutFaqPreviewSection } from "@/components/about/about-faq-preview-section";
import { AboutFinalCtaSection } from "@/components/about/about-final-cta-section";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { AboutInternalLinksSection } from "@/components/about/about-internal-links-section";

export function AboutPageView({ model }: { model: AboutPageModel }) {
  const { idPrefix, leadership, portfolio, solanaWestRelationship, buyerTrust } = model;

  return (
    <>
      <AboutHeroSection model={model} />
      <AboutDeveloperOverviewSection model={model} />
      <PropertyTypeEditorialStackSection
        tone="paper"
        block={{
          id: `${idPrefix}-leadership`,
          headingId: `${idPrefix}-leadership-heading`,
          eyebrow: leadership.eyebrow,
          title: leadership.title,
          paragraphs: leadership.paragraphs,
        }}
      />
      <PropertyTypeEditorialStackSection
        tone="sand"
        block={{
          id: `${idPrefix}-portfolio`,
          headingId: `${idPrefix}-portfolio-heading`,
          eyebrow: portfolio.eyebrow,
          title: portfolio.title,
          paragraphs: portfolio.paragraphs,
        }}
      />
      <PropertyTypeEditorialStackSection
        tone="paper"
        block={{
          id: `${idPrefix}-solana-relationship`,
          headingId: `${idPrefix}-solana-relationship-heading`,
          eyebrow: solanaWestRelationship.eyebrow,
          title: solanaWestRelationship.title,
          paragraphs: solanaWestRelationship.paragraphs,
        }}
      />
      <PropertyTypeEditorialStackSection
        tone="sand"
        block={{
          id: `${idPrefix}-trust`,
          headingId: `${idPrefix}-trust-heading`,
          eyebrow: buyerTrust.eyebrow,
          title: buyerTrust.title,
          paragraphs: buyerTrust.paragraphs,
        }}
      />
      <AboutInternalLinksSection model={model} />
      <AboutFaqPreviewSection model={model} />
      <AboutFinalCtaSection model={model} />
    </>
  );
}
