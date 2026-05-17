"use client";

import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { ConversionValueChips } from "@/components/conversion/conversion-value-chips";
import { heroEnquiryCopyAr, heroEnquiryCopyEn } from "@/data/cro/hero-enquiry";
import { cn } from "@/lib/utils";

export function HeroEnquirySectionContent() {
  const locale = useSiteLocale();
  const ar = locale === "ar";
  const copy = ar ? heroEnquiryCopyAr : heroEnquiryCopyEn;

  return (
    <div className="max-w-xl lg:py-1 lg:pe-4 xl:max-w-[34rem]">
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a7452]">
        {copy.sectionLabel}
      </p>
      <span
        className="mt-6 mb-8 block h-px max-w-[3.5rem] bg-gradient-to-r from-[rgba(186,160,112,0.45)] to-transparent"
        aria-hidden
      />
      <h2
        id="hero-enquiry-heading"
        className={cn(
          "max-w-[min(20ch,100%)] text-balance font-display font-medium text-[#171717]",
          "text-[clamp(1.75rem,3.2vw+0.5rem,2.625rem)] leading-[1.12] tracking-[-0.022em]",
        )}
      >
        {copy.title}
      </h2>
      <p className="mt-5 font-sans text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-[#6f675f]">
        {copy.subtitle}
      </p>
      <p className="mt-8 max-w-[min(38rem,100%)] text-[0.96875rem] font-normal leading-[1.78] tracking-[0.012em] text-[#3f3a35] md:text-[1rem]">
        {copy.body}
      </p>

      <div className="mt-10">
        <ConversionValueChips tone="ivory" />
      </div>

      <ul className="mt-10 space-y-4 border-s border-[rgba(186,160,112,0.28)] ps-5">
        {copy.trustHighlights.map((line) => (
          <li
            key={line}
            className="text-[0.875rem] font-normal leading-[1.7] tracking-[0.012em] text-[#3f3a35]"
          >
            {line}
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-[min(34rem,100%)] text-[0.8125rem] leading-[1.72] tracking-[0.015em] text-[#6f675f]">
        {copy.responseNote}
      </p>
    </div>
  );
}
