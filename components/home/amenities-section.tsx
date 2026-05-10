import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/media/solana-west";
import { cn } from "@/lib/utils";

const { amenities: amenitiesCopy } = homeSections;

export function AmenitiesSection() {
  return (
    <SectionShell
      id="amenities"
      aria-labelledby="amenities-heading"
      tone="sand"
      containerSize="wide"
      rhythm="breath"
    >
      <SectionHeader
        id="amenities-heading"
        eyebrow={amenitiesCopy.eyebrow}
        title={amenitiesCopy.title}
        kicker={<p className="font-normal text-lux-ink/66">{amenitiesCopy.intro}</p>}
      />

      {/* Asymmetric editorial grid — avoids uniform “three-card gallery” rhythm */}
      <ul className="mt-14 grid grid-cols-1 gap-section-gap md:mt-section-block lg:grid-cols-12 lg:gap-x-10 lg:gap-y-16">
        {solanaWestMedia.amenities.map((asset, i) => {
          const group = amenitiesCopy.groups[i];
          return (
            <li
              key={asset.src}
              className={cn(
                i === 0 && "lg:col-span-7",
                i === 1 && "lg:col-span-5 lg:pt-10 xl:pt-12",
                i === 2 && "lg:col-span-12",
              )}
            >
              <article className="flex flex-col">
                <LuxuryImageShell
                  hover="lift"
                  aspectClassName={
                    i === 0 ? "aspect-[4/5] max-lg:max-h-[min(72vh,520px)]"
                    : i === 1 ? "aspect-[4/5]"
                    : "aspect-video max-lg:aspect-video"
                  }
                  className={cn("shadow-lux-card transition-[border-color,box-shadow] duration-480 ease-luxury hover:border-lux-ink/10", i === 2 && "shadow-lux-soft")}
                >
                  <LuxuryFillImage
                    src={asset.src}
                    alt={asset.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 32vw"
                    quality={82}
                    crop={i === 0 ? "editorialWideLow" : i === 1 ? "greenerySubject" : "editorialWideLow"}
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
                          <span className="absolute left-0 top-[0.55em] h-px w-[0.375rem] bg-lux-gold/38" aria-hidden />
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
