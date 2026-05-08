import type { ResolvedProjectPage } from "@/data/projects/types";

import { ProjectAmenitiesSection } from "@/components/projects/project-amenities-section";
import { ProjectFaqSection } from "@/components/projects/project-faq-section";
import { ProjectFinalCtaSection } from "@/components/projects/project-final-cta-section";
import { ProjectHeroSection } from "@/components/projects/project-hero-section";
import { ProjectLocationSection } from "@/components/projects/project-location-section";
import { ProjectOverviewSection } from "@/components/projects/project-overview-section";
import { ProjectPaymentPlanSection } from "@/components/projects/project-payment-plan-section";
import { ProjectPropertyTypesSection } from "@/components/projects/project-property-types-section";

export function ProjectPageView({ page }: { page: ResolvedProjectPage }) {
  return (
    <>
      <ProjectHeroSection page={page} />
      <ProjectOverviewSection page={page} />
      <ProjectPropertyTypesSection page={page} />
      <ProjectPaymentPlanSection page={page} />
      <ProjectLocationSection page={page} />
      <ProjectAmenitiesSection page={page} />
      <ProjectFaqSection page={page} />
      <ProjectFinalCtaSection page={page} />
    </>
  );
}
