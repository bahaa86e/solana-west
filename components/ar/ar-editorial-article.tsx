import type { ReactNode } from "react";

import { GlobalHeroEnquirySection } from "@/components/conversion/global-hero-enquiry-section";
import { SectionMain } from "@/components/layout/section-main";
import { cn } from "@/lib/utils";

export type ArEditorialBlock = {
  title: string;
  paragraphs: readonly string[];
};

export function ArEditorialArticle({
  labelledBy,
  eyebrow,
  h1,
  intro,
  sections,
  children,
  className,
}: {
  labelledBy: string;
  eyebrow?: string;
  h1: string;
  intro?: string;
  sections: readonly ArEditorialBlock[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <SectionMain>
      <article className={cn("mx-auto max-w-readable", className)} aria-labelledby={labelledBy}>
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          {eyebrow ?
            <p className="lux-eyebrow text-lux-ink/46">{eyebrow}</p>
          : null}
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1
            id={labelledBy}
            className="mt-lux-stack-xs max-w-[min(44ch,100%)] text-balance font-display text-display-xl text-lux-ink md:max-w-[min(52ch,100%)]"
          >
            {h1}
          </h1>
          {intro ?
            <p className="lux-body mt-lux-stack-sm text-lux-ink/67 md:mt-lux-stack-md">{intro}</p>
          : null}
        </header>

        <GlobalHeroEnquirySection />

        <div className="mt-lux-stack-lg space-y-lux-stack-xl md:mt-lux-stack-xl">
          {sections.map((s) => (
            <section key={s.title} className="border-b border-lux-ink/[0.05] pb-lux-stack-lg last:border-none last:pb-0">
              <h2 className="font-display text-2xl font-normal tracking-[-0.012em] text-lux-ink md:text-[1.75rem]">
                {s.title}
              </h2>
              <div className="mt-lux-stack-sm space-y-4 text-[0.9375rem] font-normal leading-[1.76] tracking-[0.012em] text-lux-ink/72 md:text-base">
                {s.paragraphs.map((p, i) => (
                  <p key={`${s.title}-${i}`}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        {children}
      </article>
    </SectionMain>
  );
}
