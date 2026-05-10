import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { ResolvedProjectPage } from "@/data/projects/types";

export function ProjectLocationSection({ page }: { page: ResolvedProjectPage }) {
  const slug = page.entry.slug;
  const { location } = page.content;

  return (
    <SectionShell id={`${slug}-location`} aria-labelledby={`${slug}-location-heading`} tone="sand" containerSize="wide">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20">
        <div className="lg:col-span-4 xl:col-span-4">
          <SectionHeader id={`${slug}-location-heading`} eyebrow={location.eyebrow} title={location.title} />
          <p className="mt-8 max-w-[20rem] text-[0.9375rem] font-normal leading-[1.75] tracking-[0.01em] text-lux-ink/62 md:mt-10 md:max-w-sm md:text-base lg:max-w-md">
            {location.intro}
          </p>
        </div>
        <dl className="divide-y divide-lux-ink/[0.07] lg:col-span-8 xl:col-span-7">
          {location.routes.map((row) => (
            <div
              key={row.term}
              className="grid gap-2 py-8 first:pt-0 last:pb-0 sm:grid-cols-[minmax(0,7.5rem)_1fr] sm:gap-10 md:gap-14"
            >
              <dt className="font-sans uppercase text-micro text-lux-ink/44">{row.term}</dt>
              <dd className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.01em] text-lux-ink/78 md:text-base">
                {row.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <LuxuryImageShell
        hover="lift"
        aspectClassName="aspect-[16/10]"
        className="mt-16 rounded-[3px] md:mt-24"
        frameAccent={
          <div className="pointer-events-none absolute inset-0 z-[6] bg-gradient-to-t from-lux-mist/[0.2] via-transparent to-transparent" aria-hidden />
        }
      >
        <LuxuryFillImage
          src={page.media.locationAtmosphere.src}
          mobileSrc={page.media.locationAtmosphere.mobileSrc}
          alt={page.media.locationAtmosphere.alt}
          sizes="(max-width: 1023px) 100vw, min(1280px, 88vw)"
          quality={88}
          fit="cover"
          crop="horizonGolden"
          treatment="rich"
        />
      </LuxuryImageShell>
    </SectionShell>
  );
}
