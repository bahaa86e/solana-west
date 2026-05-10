"use client";

import { FinalConversionPanel } from "@/components/conversion/final-conversion-panel";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { localizedPathname } from "@/lib/i18n/paths";

const { finalCta } = homeSections;

export function FinalCtaSection() {
  const locale = useSiteLocale();

  return (
    <SectionShell
      id="inquire"
      aria-labelledby="final-cta-heading"
      tone="ink"
      containerSize="wide"
      className="border-t border-white/12 pb-[clamp(3.75rem,10vw,6.75rem)]"
    >
      <FinalConversionPanel
        headingId="final-cta-heading"
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        supporting={finalCta.supporting}
        primaryLabel={finalCta.primaryLabel}
        secondaryLabel={finalCta.secondaryLabel}
        secondaryHref={localizedPathname("/contact", locale)}
        whatsAppTrackPlacement="home_final_whatsapp"
      />
    </SectionShell>
  );
}
