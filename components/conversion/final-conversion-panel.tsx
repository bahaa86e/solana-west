import { ConversionValueChips } from "@/components/conversion/conversion-value-chips";
import { SectionHeader } from "@/components/sections/section-header";
import { CtaButton } from "@/components/ui/cta-button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { croMessaging } from "@/data/cro";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export type FinalConversionPanelProps = {
  headingId: string;
  eyebrow: string;
  title: string;
  supporting: string;
  primaryLabel: string;
  secondaryLabel: string;
  /** When the secondary action is not `/contact`. */
  secondaryHref?: string;
  whatsAppTrackPlacement?: string;
};

const waIcon = <WhatsAppIcon className="size-[1.125rem] opacity-90 sm:size-[1.1875rem]" />;

export function FinalConversionPanel({
  headingId,
  eyebrow,
  title,
  supporting,
  primaryLabel,
  secondaryLabel,
  secondaryHref = "/contact",
  whatsAppTrackPlacement = "final_cta_whatsapp",
}: FinalConversionPanelProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-section-block lg:flex-row lg:items-center lg:justify-between lg:gap-20 xl:gap-28",
      )}
    >
      <div className="max-w-xl xl:max-w-2xl">
        <SectionHeader id={headingId} eyebrow={eyebrow} tone="onDark" title={title} />
        <div className="mt-[clamp(1.25rem,3.5vw,1.875rem)] max-w-xl">
          <ConversionValueChips tone="dark" />
        </div>
        <p className="mt-[clamp(1.25rem,3vw,1.75rem)] max-w-md text-[1.015625rem] font-normal leading-[1.76] tracking-[0.01em] text-lux-paper/78 md:max-w-lg xl:max-w-xl">
          {supporting}
        </p>
        <p className="mt-5 max-w-xl border-l border-lux-gold/22 pl-5 text-[0.8125rem] font-normal leading-[1.72] tracking-[0.018em] text-lux-paper/62 md:text-[0.84375rem]">
          {croMessaging.finalPanelDeskAssurance}
        </p>
      </div>

      <div className="flex w-full max-w-lg flex-col gap-3 sm:gap-4 md:flex-row md:justify-end md:gap-5">
        <CtaButton
          href={siteConfig.whatsAppUrl}
          external
          variant="whatsappOnDark"
          size="lg"
          leadingIcon={waIcon}
          className="w-full px-12 shadow-[0_14px_40px_-30px_rgba(0,0,0,0.22)] md:flex-[1.15] md:px-14"
          data-track="whatsapp_click"
          data-track-placement={whatsAppTrackPlacement}
        >
          {primaryLabel}
        </CtaButton>

        <CtaButton
          href={secondaryHref}
          variant="ghost"
          size="lg"
          className={cn(
            "w-full border border-white/[0.22] bg-white/[0.1] text-lux-paper/94 backdrop-blur-sm",
            "shadow-[inset_0_1px_0_rgba(253,252,249,0.14)] hover:border-white/[0.32] hover:bg-white/[0.14]",
            "focus-visible:ring-lux-gold focus-visible:ring-offset-2 focus-visible:ring-offset-lux-charcoal md:flex-1 md:px-10",
          )}
          data-track="cta_click"
          data-track-placement="final_cta_secondary"
        >
          {secondaryLabel}
        </CtaButton>
      </div>
    </div>
  );
}
