"use client";

import { ConversionValueChips } from "@/components/conversion/conversion-value-chips";
import { useEditorialCopy } from "@/components/i18n/editorial-copy-context";
import { SectionHeader } from "@/components/sections/section-header";
import { CtaButton } from "@/components/ui/cta-button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { siteConfig } from "@/data/site";
import { ENQUIRY_FORM_HASH } from "@/lib/enquiry-form-anchor";
import { cn } from "@/lib/utils";

export type FinalConversionPanelProps = {
  headingId: string;
  eyebrow: string;
  title: string;
  supporting: string;
  primaryLabel: string;
  secondaryLabel: string;
  /** Override when the secondary action is not the sitewide enquiry block. */
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
  secondaryHref = ENQUIRY_FORM_HASH,
  whatsAppTrackPlacement = "final_cta_whatsapp",
}: FinalConversionPanelProps) {
  const { croMessaging } = useEditorialCopy();

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
        <p className="mt-5 max-w-xl border-s border-lux-gold/22 ps-5 text-[0.8125rem] font-normal leading-[1.72] tracking-[0.018em] text-lux-paper/62 md:text-[0.84375rem]">
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

        <CtaButton href={secondaryHref} variant="inverse" size="lg" className="w-full px-11 md:flex-1 md:px-12">
          {secondaryLabel}
        </CtaButton>
      </div>
    </div>
  );
}
