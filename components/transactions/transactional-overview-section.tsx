import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { TransactionalPageModel } from "@/data/transactions/transaction-page-model";

export function TransactionalOverviewSection({ model }: { model: TransactionalPageModel }) {
  const { overview, overviewFigure, idPrefix } = model;
  const headingId = `${idPrefix}-overview-heading`;

  return (
    <SectionShell
      id={`${idPrefix}-overview`}
      aria-labelledby={headingId}
      tone="sand"
      containerSize="wide"
    >
      <div className="grid gap-section-gap lg:grid-cols-12 lg:items-center lg:gap-x-section-gap lg:gap-y-14 xl:gap-x-[clamp(3.75rem,6.25vw,4.75rem)]">
        <div className="flex flex-col justify-between lg:col-span-5 lg:py-4">
          <div>
            <SectionHeader id={headingId} eyebrow={overview.eyebrow} title={overview.title} />
            <div className="mt-14 max-w-md space-y-6 xl:max-w-lg">
              {overview.paragraphs.map((paragraph, i) => (
                <p
                  key={`${idPrefix}-overview-${i}`}
                  className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.012em] text-lux-ink/72 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <LuxuryImageShell
          hover="lift"
          aspectClassName="aspect-[3/2]"
          className="lg:col-span-7"
          frameAccent={<div className="pointer-events-none absolute inset-[10%] ring-1 ring-lux-gold/18" aria-hidden />}
        >
          <LuxuryFillImage
            src={overviewFigure.src}
            alt={overviewFigure.alt}
            sizes="(max-width: 1023px) 100vw, min(928px, 58vw)"
            quality={82}
            crop="cardThumb"
            treatment="rich"
          />
        </LuxuryImageShell>
      </div>
    </SectionShell>
  );
}
