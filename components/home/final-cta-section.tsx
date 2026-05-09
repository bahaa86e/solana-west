import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { CtaButton } from "@/components/ui/cta-button";
import { homeSections } from "@/data/seo/home";
import { siteConfig } from "@/data/site";

const { finalCta } = homeSections;

export function FinalCtaSection() {
  return (
    <SectionShell
      id="inquire"
      aria-labelledby="final-cta-heading"
      tone="ink"
      containerSize="wide"
      className="border-t border-white/12 pb-[clamp(3.75rem,10vw,6.75rem)]"
    >
      <div className="flex flex-col gap-section-block lg:flex-row lg:items-center lg:justify-between lg:gap-20 xl:gap-28">
        <div className="max-w-xl xl:max-w-2xl">
          <SectionHeader
            id="final-cta-heading"
            eyebrow={finalCta.eyebrow}
            tone="onDark"
            title={finalCta.title}
          />
          <p className="mt-section-block max-w-md text-[1.015625rem] font-normal leading-[1.76] tracking-[0.01em] text-lux-paper/78 md:max-w-lg xl:max-w-xl">
            {finalCta.supporting}
          </p>
        </div>
        <div className="flex w-full max-w-lg flex-col gap-4 md:flex-row md:gap-5 md:justify-end">
          <CtaButton
            href={siteConfig.whatsAppUrl}
            external
            variant="inverse"
            size="lg"
            className="w-full px-14 shadow-[0_22px_58px_-36px_rgba(0,0,0,0.55)] focus-visible:ring-offset-lux-ink md:flex-1"
            data-track="whatsapp_click"
          >
            {finalCta.primaryLabel}
          </CtaButton>
          <CtaButton
            href="/contact"
            variant="ghost"
            size="lg"
            className="w-full border border-white/[0.26] bg-white/[0.04] text-lux-paper/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm hover:border-white/[0.36] hover:bg-white/[0.08] hover:shadow-none focus-visible:ring-offset-lux-ink md:flex-1 md:px-10"
            data-track="cta_click"
          >
            {finalCta.secondaryLabel}
          </CtaButton>
        </div>
      </div>
    </SectionShell>
  );
}
