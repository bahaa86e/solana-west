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
    <div className="max-w-xl lg:pt-1">
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-lux-champagne/82">
        {copy.sectionLabel}
      </p>
      <span className="mt-5 mb-7 block h-px max-w-[3.25rem] bg-gradient-to-r from-lux-champagne/45 to-transparent" aria-hidden />
      <h2
        id="hero-enquiry-heading"
        className={cn(
          "max-w-[min(20ch,100%)] text-balance font-display font-medium text-lux-paper",
          "text-[clamp(1.75rem,3.2vw+0.5rem,2.625rem)] leading-[1.1] tracking-[-0.022em]",
        )}
      >
        {copy.title}
      </h2>
      <p className="mt-4 font-sans text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-lux-paper/62">
        {copy.subtitle}
      </p>
      <p className="mt-7 max-w-[min(38rem,100%)] text-[0.96875rem] font-normal leading-[1.74] tracking-[0.012em] text-lux-paper/76 md:text-[1rem]">
        {copy.body}
      </p>

      <div className="mt-8">
        <ConversionValueChips tone="dark" />
      </div>

      <ul className="mt-8 space-y-3.5 border-s border-lux-gold/22 ps-5">
        {copy.trustHighlights.map((line) => (
          <li
            key={line}
            className="text-[0.875rem] font-normal leading-[1.65] tracking-[0.012em] text-lux-paper/68"
          >
            {line}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-[min(34rem,100%)] text-[0.8125rem] leading-[1.68] tracking-[0.015em] text-lux-paper/52">
        {copy.responseNote}
      </p>
    </div>
  );
}
