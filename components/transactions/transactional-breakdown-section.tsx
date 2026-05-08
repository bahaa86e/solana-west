import Link from "next/link";

import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { TransactionalPageModel } from "@/data/transactions/transaction-page-model";
import { cn } from "@/lib/utils";

export function TransactionalBreakdownSection({ model }: { model: TransactionalPageModel }) {
  const { breakdowns, idPrefix } = model;
  const headingId = `${idPrefix}-breakdown-heading`;

  return (
    <SectionShell id={`${idPrefix}-breakdown`} aria-labelledby={headingId} tone="paper" containerSize="wide">
      <div className="max-w-readable xl:max-w-none">
        <SectionHeader
          id={headingId}
          eyebrow={breakdowns.eyebrow}
          title={breakdowns.title}
          kicker={
            breakdowns.intro ? (
              <p className="font-normal text-lux-ink/64 xl:max-w-[40rem]">{breakdowns.intro}</p>
            ) : undefined
          }
        />
      </div>

      <div className="mt-14 border-t border-lux-ink/[0.07] pt-14 md:mt-16 md:pt-16">
        <ul className="m-0 flex list-none flex-col gap-14 p-0 md:gap-[4.25rem]">
          {breakdowns.sections.map((section, i) => {
            const sid = `${idPrefix}-breakdown-${i}`;
            return (
              <li key={sid} id={sid} className="scroll-mt-28">
                <article className="grid gap-8 lg:grid-cols-12 lg:gap-16 xl:gap-24">
                  <div className="lg:col-span-4 xl:col-span-3">
                    <h3 className="m-0 font-display text-[1.4375rem] font-normal tracking-[-0.014em] text-lux-ink xl:text-[1.6875rem]">
                      {section.heading}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-6 lg:col-span-8 lg:pb-px xl:col-span-8">
                    {section.body.map((p, j) => (
                      <p
                        key={`${sid}-body-${j}`}
                        className="m-0 text-[0.9375rem] font-normal leading-[1.74] tracking-[0.014em] text-lux-ink/74 md:text-base"
                      >
                        {p}
                      </p>
                    ))}
                    {section.links?.length ? (
                      <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-lux-ink/[0.055] pt-6">
                        {section.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                              "text-[0.9375rem] font-normal tracking-[0.01em] text-lux-ink/58 underline decoration-lux-ink/[0.16] underline-offset-[10px]",
                              "transition-colors duration-400 hover:text-lux-ink hover:decoration-lux-gold/48",
                            )}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionShell>
  );
}
