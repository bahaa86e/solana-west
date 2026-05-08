import type { PropertyExperienceModel } from "@/data/properties/property-type-experience";

import { PropertyTypeEditorialStackSection } from "@/components/properties/property-type-editorial-stack-section";
import { PropertyTypeFaqPreviewSection } from "@/components/properties/property-type-faq-preview-section";
import { PropertyTypeFeaturesSection } from "@/components/properties/property-type-features-section";
import { PropertyTypeFinalCtaSection } from "@/components/properties/property-type-final-cta-section";
import { PropertyTypeHeroSection } from "@/components/properties/property-type-hero-section";
import { PropertyTypeOverviewSection } from "@/components/properties/property-type-overview-section";
import { PropertyTypeRelatedProjectSection } from "@/components/properties/property-type-related-project-section";

export function PropertyTypeExperienceView({ model }: { model: PropertyExperienceModel }) {
  const { slug, lifestyle, investment } = model;

  return (
    <>
      <PropertyTypeHeroSection model={model} />
      <PropertyTypeOverviewSection model={model} />
      <PropertyTypeEditorialStackSection
        tone="paper"
        block={{
          id: `property-${slug}-lifestyle`,
          headingId: `property-${slug}-lifestyle-heading`,
          eyebrow: lifestyle.eyebrow,
          title: lifestyle.title,
          paragraphs: lifestyle.paragraphs,
        }}
      />
      <PropertyTypeEditorialStackSection
        tone="sand"
        block={{
          id: `property-${slug}-investment`,
          headingId: `property-${slug}-investment-heading`,
          eyebrow: investment.eyebrow,
          title: investment.title,
          paragraphs: investment.paragraphs,
        }}
      />
      <PropertyTypeFeaturesSection model={model} />
      <PropertyTypeRelatedProjectSection model={model} />
      <PropertyTypeFaqPreviewSection model={model} />
      <PropertyTypeFinalCtaSection model={model} />
    </>
  );
}
