"use client";

import { useEditorialCopy } from "@/components/i18n/editorial-copy-context";

export function InvestorAssuranceStrip() {
  const { croInvestorAssurance } = useEditorialCopy();

  return (
    <section
      aria-label="Investment and developer context"
      className="rounded-[6px] border border-lux-ink/[0.06] bg-lux-paper p-[clamp(1.125rem,3.25vw,1.625rem)] shadow-lux-card md:p-[clamp(1.25rem,3.4vw,1.75rem)]"
    >
      <ul className="grid list-none gap-7 p-0 sm:grid-cols-3 sm:gap-8 md:gap-9">
        {croInvestorAssurance.map((item) => (
          <li key={item.eyebrow} className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-lux-ink/36">{item.eyebrow}</p>
            <p className="mt-2 font-display text-[1.03125rem] font-normal tracking-[-0.012em] text-lux-ink/90 md:text-[1.0625rem]">
              {item.title}
            </p>
            <p className="mt-1.5 text-[0.8rem] font-normal leading-snug tracking-[0.015em] text-lux-ink/56 md:mt-2 md:text-[0.828125rem] md:leading-relaxed">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
