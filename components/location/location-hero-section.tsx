import { InteriorHubHeroCopy } from "@/components/hero/interior-hub-hero-copy";
import { CinematicInteriorHero } from "@/components/hero/cinematic-interior-hero";
import type { LocationPageModel } from "@/data/location/location-page-model";

export function LocationHeroSection({ model }: { model: LocationPageModel }) {
  const { heroImage, hero, idPrefix } = model;
  const labelledById = `${idPrefix}-hero-heading`;

  return (
    <CinematicInteriorHero
      sectionId={`${idPrefix}-hero`}
      aria-labelledby={labelledById}
      media={{
        src: heroImage.src,
        alt: heroImage.alt,
        sizes: "100vw",
        priority: true,
        quality: 88,
        imgClassName: "object-[center_44%]",
      }}
    >
      <InteriorHubHeroCopy
        eyebrow={hero.locationEyebrow}
        headingId={labelledById}
        title={hero.h1}
        lead={hero.lead}
        supporting={hero.supporting}
      />
    </CinematicInteriorHero>
  );
}
