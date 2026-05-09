import { FinalConversionPanel } from "@/components/conversion/final-conversion-panel";
import { SectionShell } from "@/components/sections/section-shell";
import type { PropertyExperienceModel } from "@/data/properties/property-type-experience";

export function PropertyTypeFinalCtaSection({ model }: { model: PropertyExperienceModel }) {
  const { slug, finalCta } = model;

  return (
    <SectionShell
      id={`property-${slug}-inquire`}
      aria-labelledby={`property-${slug}-final-cta-heading`}
      tone="ink"
      containerSize="wide"
      className="border-t border-white/12 pb-[clamp(3.75rem,10vw,6.75rem)]"
    >
      <FinalConversionPanel
        headingId={`property-${slug}-final-cta-heading`}
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        supporting={finalCta.supporting}
        primaryLabel={finalCta.primaryLabel}
        secondaryLabel={finalCta.secondaryLabel}
        whatsAppTrackPlacement={`property_${slug}_final_whatsapp`}
      />
    </SectionShell>
  );
}
