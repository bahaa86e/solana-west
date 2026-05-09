import { FinalConversionPanel } from "@/components/conversion/final-conversion-panel";
import { SectionShell } from "@/components/sections/section-shell";
import type { BlogIndexPageModel } from "@/data/blog/blog-index-model";

type FinalCta = BlogIndexPageModel["finalCta"];

export function BlogFinalCtaSection({
  idPrefix,
  finalCta,
}: {
  idPrefix: string;
  finalCta: FinalCta;
}) {
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
        whatsAppTrackPlacement={`${idPrefix}_final_whatsapp`}
      />
    </SectionShell>
  );
}
