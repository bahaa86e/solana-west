import { FinalConversionPanel } from "@/components/conversion/final-conversion-panel";
import { SectionShell } from "@/components/sections/section-shell";
import type { ResolvedProjectPage } from "@/data/projects/types";

export function ProjectFinalCtaSection({ page }: { page: ResolvedProjectPage }) {
  const slug = page.entry.slug;
  const { finalCta } = page.content;

  return (
    <SectionShell
      id={`${slug}-inquire`}
      aria-labelledby={`${slug}-final-cta-heading`}
      tone="ink"
      containerSize="wide"
      className="border-t border-white/12 pb-[clamp(3.75rem,10vw,6.75rem)]"
    >
      <FinalConversionPanel
        headingId={`${slug}-final-cta-heading`}
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        supporting={finalCta.supporting}
        primaryLabel={finalCta.primaryLabel}
        secondaryLabel={finalCta.secondaryLabel}
        whatsAppTrackPlacement={`project_${slug}_final_whatsapp`}
      />
    </SectionShell>
  );
}
