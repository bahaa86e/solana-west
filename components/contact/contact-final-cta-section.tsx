import { FinalConversionPanel } from "@/components/conversion/final-conversion-panel";
import { SectionShell } from "@/components/sections/section-shell";
import type { ContactPageModel } from "@/data/contact/contact-page-model";

export function ContactFinalCtaSection({ model }: { model: ContactPageModel }) {
  const { finalCta, idPrefix } = model;
  const headingId = `${idPrefix}-final-heading`;

  return (
    <SectionShell
      id={`${idPrefix}-continuity`}
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
        secondaryHref={finalCta.secondaryHref}
        whatsAppTrackPlacement="contact_footer_whatsapp"
      />
    </SectionShell>
  );
}
