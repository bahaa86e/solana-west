import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { ResolvedProjectPage } from "@/data/projects/types";
import { cn } from "@/lib/utils";

export function ProjectAmenitiesSection({ page }: { page: ResolvedProjectPage }) {
  const slug = page.entry.slug;
  const { amenities } = page.content;

  return (
    <SectionShell
      id={`${slug}-amenities`}
      aria-labelledby={`${slug}-amenities-heading`}
      tone="sand"
      containerSize="wide"
    >
      <SectionHeader
        id={`${slug}-amenities-heading`}
        eyebrow={amenities.eyebrow}
        title={amenities.title}
        kicker={<p className="font-normal text-lux-ink/66">{amenities.intro}</p>}
      />

      <ul className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-10">
        {page.media.amenities.map((asset, i) => {
          const group = amenities.groups[i];
          return (
            <li
              key={`${slug}-amenity-${asset.src}`}
              className={cn(i === 1 && "lg:pt-6 xl:pt-8", i === 2 && "lg:pt-2")}
            >
              <article className="flex flex-col">
                <LuxuryImageShell
                  hover="lift"
                  aspectClassName="aspect-[3/2]"
                  className={cn("shadow-lux-card transition-[border-color,box-shadow] duration-480 ease-luxury hover:border-lux-ink/10")}
                >
                  <LuxuryFillImage
                    src={asset.src}
                    alt={asset.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 32vw"
                    quality={80}
                    crop="interiorWarm"
                    treatment="rich"
                  />
                </LuxuryImageShell>

                {group ?
                  <div className="mt-6 max-w-sm lg:max-w-none">
                    <h3 className="m-0 font-display text-xl font-normal tracking-[-0.012em] text-lux-ink md:text-[1.375rem]">
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-[0.8125rem] font-normal leading-[1.7] tracking-[0.014em] text-lux-ink/66 md:text-[0.84375rem]">
                      {group.lines.map((line) => (
                        <li key={line} className="relative pl-[1rem]">
                          <span
                            className="absolute left-0 top-[0.55em] h-px w-[0.375rem] bg-lux-gold/38"
                            aria-hidden
                          />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                : null}
              </article>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
