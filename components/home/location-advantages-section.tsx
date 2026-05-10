import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/media/solana-west";

const { location } = homeSections;

export function LocationAdvantagesSection() {
  return (
    <SectionShell
      id="location"
      aria-labelledby="location-heading"
      tone="sand"
      containerSize="wide"
      depth="lifted"
      accentRim
    >
      <div className="grid gap-section-gap lg:grid-cols-12 lg:gap-x-section-gap xl:gap-x-[clamp(3.5rem,6.5vw,5rem)]">
        <div className="lg:col-span-4 xl:col-span-4">
          <SectionHeader id="location-heading" eyebrow={location.eyebrow} title={location.title} />
          <p className="mt-8 max-w-[20rem] text-[0.9375rem] font-normal leading-[1.76] tracking-[0.012em] text-lux-ink/64 md:mt-10 md:max-w-sm md:text-base lg:max-w-md">
            {location.intro}
          </p>
        </div>
        <dl className="divide-y divide-lux-ink/[0.075] lg:col-span-8 xl:col-span-7">
          {location.routes.map((row) => (
            <div
              key={row.term}
              className="grid gap-2 py-8 first:pt-0 last:pb-0 sm:grid-cols-[minmax(0,7.5rem)_1fr] sm:gap-10 md:gap-14"
            >
              <dt className="font-sans uppercase text-micro text-lux-ink/44">{row.term}</dt>
              <dd className="text-[0.9375rem] font-normal leading-[1.76] tracking-[0.012em] text-lux-ink/78 md:text-base">{row.detail}</dd>
            </div>
          ))}
        </dl>
      </div>

      <LuxuryImageShell
        hover="lift"
        aspectClassName="aspect-[16/10]"
        className="mt-section-block rounded-[3px] md:mt-section-gap"
        frameAccent={
          <div className="absolute inset-0 z-[6] bg-gradient-to-t from-lux-mist/30 via-transparent to-transparent" aria-hidden />
        }
      >
        <LuxuryFillImage
          src={solanaWestMedia.locationMap.src}
          alt={solanaWestMedia.locationMap.alt}
          sizes="(max-width: 1023px) 100vw, min(1280px, 88vw)"
          quality={86}
          fit="contain"
          crop="mapCalm"
          treatment="editorial"
          imgClassName="bg-lux-paper/12 px-3 py-5 sm:px-6 sm:py-7 md:px-10 md:py-9"
        />
      </LuxuryImageShell>
    </SectionShell>
  );
}
