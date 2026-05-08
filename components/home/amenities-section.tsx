import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/solana-west-media";
import { cn } from "@/lib/utils";

const { amenities: amenitiesCopy } = homeSections;

export function AmenitiesSection() {
  return (
    <SectionShell
      id="amenities"
      aria-labelledby="amenities-heading"
      tone="sand"
      containerSize="wide"
    >
      <SectionHeader
        id="amenities-heading"
        eyebrow={amenitiesCopy.eyebrow}
        title={amenitiesCopy.title}
        kicker={<p className="font-normal text-lux-ink/66">{amenitiesCopy.intro}</p>}
      />

      <ul className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-10">
        {solanaWestMedia.amenities.map((asset, i) => {
          const group = amenitiesCopy.groups[i];
          return (
            <li
              key={asset.src}
              className={cn(
                i === 1 && "lg:-translate-y-3 xl:-translate-y-4",
                i === 2 && "lg:translate-y-4",
              )}
            >
              <article className="flex flex-col">
                <div
                  className={cn(
                    "group relative aspect-[5/3] overflow-hidden border border-lux-ink/[0.058] bg-lux-paper shadow-[inset_0_1px_0_rgba(250,248,245,0.75)] transition-[border-color,box-shadow] duration-480 ease-luxury hover:border-lux-ink/14 hover:shadow-lux-card",
                  )}
                >
                  <LuxuryFillImage
                    src={asset.src}
                    alt={asset.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 32vw"
                    quality={80}
                    imgClassName="object-cover object-[center_45%]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 z-[1] ring-1 ring-white/25 ring-inset opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                    aria-hidden
                  />
                </div>

                {group ? (
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
                ) : null}
              </article>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
