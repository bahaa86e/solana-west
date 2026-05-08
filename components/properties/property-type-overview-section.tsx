import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { PropertyExperienceModel } from "@/data/properties/property-type-experience";

export function PropertyTypeOverviewSection({ model }: { model: PropertyExperienceModel }) {
  const { overview, slug, overviewImage } = model;

  return (
    <SectionShell
      id={`property-${slug}-overview`}
      aria-labelledby={`property-${slug}-overview-heading`}
      tone="sand"
      containerSize="wide"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:items-stretch lg:gap-20 xl:gap-24">
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <SectionHeader
              id={`property-${slug}-overview-heading`}
              eyebrow={overview.eyebrow}
              title={overview.title}
            />
            <div className="mt-14 max-w-md space-y-6 xl:max-w-lg">
              {overview.paragraphs.map((paragraph, i) => (
                <p
                  key={`${slug}-overview-${i}`}
                  className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.01em] text-lux-ink/72 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <figure className="relative aspect-[4/3] w-full overflow-hidden bg-lux-paper shadow-lux-soft ring-1 ring-lux-ink/[0.065] lg:col-span-7">
          <LuxuryFillImage
            src={overviewImage.src}
            alt={overviewImage.alt}
            sizes="(max-width: 1023px) 100vw, 44vw"
            quality={82}
            imgClassName="object-cover object-[center_48%]"
          />
          <div className="pointer-events-none absolute inset-[10%] z-[1] ring-1 ring-lux-gold/16" aria-hidden />
        </figure>
      </div>
    </SectionShell>
  );
}
