import { FinalConversionPanel } from "@/components/conversion/final-conversion-panel";
import { SectionShell } from "@/components/sections/section-shell";
import type { TransactionalPageModel } from "@/data/transactions/transaction-page-model";

export function TransactionalFinalCtaSection({ model }: { model: TransactionalPageModel }) {
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
        whatsAppTrackPlacement={`${idPrefix}_final_whatsapp`}
      />
    </SectionShell>
  );
}
