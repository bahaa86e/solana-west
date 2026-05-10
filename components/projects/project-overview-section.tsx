import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { ResolvedProjectPage } from "@/data/projects/types";

export function ProjectOverviewSection({ page }: { page: ResolvedProjectPage }) {
  const slug = page.entry.slug;
  const { overview } = page.content;

  return (
    <SectionShell
      id={`${slug}-overview`}
      aria-labelledby={`${slug}-overview-heading`}
      tone="sand"
      containerSize="wide"
    >
      <div className="grid gap-section-gap lg:grid-cols-12 lg:items-center lg:gap-x-section-gap lg:gap-y-14 xl:gap-x-[clamp(3.75rem,6.25vw,4.75rem)]">
        <div className="flex flex-col justify-between lg:col-span-5 lg:py-4">
          <div>
            <SectionHeader
              id={`${slug}-overview-heading`}
              eyebrow={overview.eyebrow}
              title={overview.title}
            />
            <div className="mt-14 max-w-md space-y-6 xl:max-w-lg">
              {overview.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.01em] text-lux-ink/72 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <LuxuryImageShell
          hover="lift"
          aspectClassName="aspect-[4/3] lg:aspect-[21/9] lg:min-h-[clamp(22rem,46vh,34rem)]"
          className="lg:col-span-7 lg:rounded-[3px]"
          frameAccent={
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-lux-paper/[0.05]" aria-hidden />
          }
        >
          <LuxuryFillImage
            src={page.media.overviewFigure.src}
            alt={page.media.overviewFigure.alt}
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
