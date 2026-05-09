import { FinalConversionPanel } from "@/components/conversion/final-conversion-panel";
import { SectionShell } from "@/components/sections/section-shell";
import type { ProjectsHubPageModel } from "@/data/projects/projects-hub-model";

export function ProjectsHubFinalCtaSection({ model }: { model: ProjectsHubPageModel }) {
  const { finalCta, idPrefix } = model;
  const headingId = `${idPrefix}-final-heading`;

  return (
    <SectionShell
      id={`${idPrefix}-next`}
      aria-labelledby={headingId}
      tone="ink"
      containerSize="wide"
      className="border-t border-white/12 pb-[clamp(3.75rem,10vw,6.75rem)]"
    >
      <FinalConversionPanel
        headingId={headingId}
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        supporting={finalCta.supporting}
        primaryLabel={finalCta.primaryLabel}
        secondaryLabel={finalCta.secondaryLabel}
        whatsAppTrackPlacement="projects_hub_final_whatsapp"
      />
    </SectionShell>
  );
}
