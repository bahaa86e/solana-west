import { FinalConversionPanel } from "@/components/conversion/final-conversion-panel";
import { SectionShell } from "@/components/sections/section-shell";
import type { MasterPlanPageModel } from "@/data/master-plan/master-plan-page-model";

export function MasterPlanFinalCtaSection({ model }: { model: MasterPlanPageModel }) {
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
        whatsAppTrackPlacement="master_plan_final_whatsapp"
      />
    </SectionShell>
  );
}
