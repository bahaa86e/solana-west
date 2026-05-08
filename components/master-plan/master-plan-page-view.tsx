import { PropertyTypeEditorialStackSection } from "@/components/properties/property-type-editorial-stack-section";
import type { MasterPlanPageModel } from "@/data/master-plan/master-plan-page-model";

import { MasterPlanFaqPreviewSection } from "@/components/master-plan/master-plan-faq-preview-section";
import { MasterPlanFinalCtaSection } from "@/components/master-plan/master-plan-final-cta-section";
import { MasterPlanHeroSection } from "@/components/master-plan/master-plan-hero-section";
import { MasterPlanInternalLinksSection } from "@/components/master-plan/master-plan-internal-links-section";
import { MasterPlanOverviewSection } from "@/components/master-plan/master-plan-overview-section";
import { MasterPlanSpatialSection } from "@/components/master-plan/master-plan-spatial-section";

export function MasterPlanPageView({ model }: { model: MasterPlanPageModel }) {
  const { idPrefix, lifestyle, investment } = model;

  return (
    <>
      <MasterPlanHeroSection model={model} />
      <MasterPlanOverviewSection model={model} />
      <MasterPlanSpatialSection model={model} />
      <PropertyTypeEditorialStackSection
        tone="sand"
        block={{
          id: `${idPrefix}-lifestyle`,
          headingId: `${idPrefix}-lifestyle-heading`,
          eyebrow: lifestyle.eyebrow,
          title: lifestyle.title,
          paragraphs: lifestyle.paragraphs,
        }}
      />
      <PropertyTypeEditorialStackSection
        tone="paper"
        block={{
          id: `${idPrefix}-investment`,
          headingId: `${idPrefix}-investment-heading`,
          eyebrow: investment.eyebrow,
          title: investment.title,
          paragraphs: investment.paragraphs,
        }}
      />
      <MasterPlanInternalLinksSection model={model} />
      <MasterPlanFaqPreviewSection model={model} />
      <MasterPlanFinalCtaSection model={model} />
    </>
  );
}
