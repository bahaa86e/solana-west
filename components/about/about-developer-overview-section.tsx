import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { AboutPageModel } from "@/data/about/about-page-model";

export function AboutDeveloperOverviewSection({ model }: { model: AboutPageModel }) {
  const { developerOverview, overviewFigure, idPrefix } = model;
  const headingId = `${idPrefix}-developer-heading`;

  return (
    <SectionShell id={`${idPrefix}-developer`} aria-labelledby={headingId} tone="sand" containerSize="wide">
      <div className="grid gap-16 lg:grid-cols-12 lg:items-stretch lg:gap-20 xl:gap-24">
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <SectionHeader
              id={headingId}
              eyebrow={developerOverview.eyebrow}
              title={developerOverview.title}
            />
            <div className="mt-14 max-w-md space-y-6 xl:max-w-lg">
              {developerOverview.paragraphs.map((paragraph, i) => (
                <p
                  key={`${idPrefix}-developer-${i}`}
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
          aspectClassName="aspect-[4/3]"
          className="lg:col-span-7"
          frameAccent={<div className="pointer-events-none absolute inset-[10%] ring-1 ring-lux-gold/18" aria-hidden />}
        >
          <LuxuryFillImage
            src={overviewFigure.src}
            alt={overviewFigure.alt}
            sizes="(max-width: 1023px) 100vw, 44vw"
            quality={82}
            crop="cardThumb"
            treatment="rich"
          />
        </LuxuryImageShell>
      </div>
    </SectionShell>
  );
}
