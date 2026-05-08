import { PropertyTypeEditorialStackSection } from "@/components/properties/property-type-editorial-stack-section";
import type { ProjectsHubPageModel } from "@/data/projects/projects-hub-model";

import { ProjectsHubFaqPreviewSection } from "@/components/projects-hub/projects-hub-faq-preview-section";
import { ProjectsHubFinalCtaSection } from "@/components/projects-hub/projects-hub-final-cta-section";
import { ProjectsHubHeroSection } from "@/components/projects-hub/projects-hub-hero-section";
import { ProjectsHubInternalLinksSection } from "@/components/projects-hub/projects-hub-internal-links-section";
import { ProjectsHubOverviewSection } from "@/components/projects-hub/projects-hub-overview-section";
import { ProjectsHubProjectCardsSection } from "@/components/projects-hub/projects-hub-project-cards-section";

export function ProjectsHubPageView({ model }: { model: ProjectsHubPageModel }) {
  const { idPrefix, corridor } = model;

  return (
    <>
      <ProjectsHubHeroSection model={model} />
      <ProjectsHubOverviewSection model={model} />
      <PropertyTypeEditorialStackSection
        tone="sand"
        block={{
          id: `${idPrefix}-corridor`,
          headingId: `${idPrefix}-corridor-heading`,
          eyebrow: corridor.eyebrow,
          title: corridor.title,
          paragraphs: corridor.paragraphs,
        }}
      />
      <ProjectsHubProjectCardsSection model={model} />
      <ProjectsHubInternalLinksSection model={model} />
      <ProjectsHubFaqPreviewSection model={model} />
      <ProjectsHubFinalCtaSection model={model} />
    </>
  );
}
