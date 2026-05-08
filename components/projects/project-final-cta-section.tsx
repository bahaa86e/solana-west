import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { CtaButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/data/site";
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
      <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-20 xl:gap-28">
        <div className="max-w-xl xl:max-w-2xl">
          <SectionHeader
            id={`${slug}-final-cta-heading`}
            eyebrow={finalCta.eyebrow}
            tone="onDark"
            title={finalCta.title}
          />
          <p className="mt-10 max-w-md text-[0.9375rem] font-normal leading-[1.75] tracking-[0.01em] text-lux-paper/70 md:mt-12 md:text-base xl:max-w-lg">
            {finalCta.supporting}
          </p>
        </div>
        <div className="flex w-full max-w-lg flex-col gap-4 md:flex-row md:gap-5">
          <CtaButton
            href={siteConfig.whatsAppUrl}
            external
            variant="inverse"
            size="lg"
            className="w-full px-14 focus-visible:ring-offset-lux-ink md:flex-1"
            data-track="whatsapp_click"
          >
            {finalCta.primaryLabel}
          </CtaButton>
          <CtaButton
            href="/contact"
            variant="ghost"
            size="lg"
            className="w-full border border-white/18 bg-transparent text-lux-paper shadow-none hover:bg-white/[0.04] hover:shadow-none focus-visible:ring-offset-lux-ink md:flex-1 md:px-10"
            data-track="cta_click"
          >
            {finalCta.secondaryLabel}
          </CtaButton>
        </div>
      </div>
    </SectionShell>
  );
}
