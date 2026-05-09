import { InteriorHubHeroCopy } from "@/components/hero/interior-hub-hero-copy";
import { CinematicInteriorHero } from "@/components/hero/cinematic-interior-hero";
import type { PropertyExperienceModel } from "@/data/properties/property-type-experience";

export function PropertyTypeHeroSection({ model }: { model: PropertyExperienceModel }) {
  const { heroImage, hero, slug } = model;
  const labelledById = `${slug}-property-hero-heading`;

  return (
    <CinematicInteriorHero
      sectionId={`property-${slug}-hero`}
      aria-labelledby={labelledById}
      media={{
        src: heroImage.src,
        alt: heroImage.alt,
        sizes: "100vw",
        priority: true,
        quality: 88,
        imgClassName: "object-[center_40%]",
      }}
    >
      <InteriorHubHeroCopy
        eyebrow={hero.locationEyebrow}
        headingId={labelledById}
        title={hero.h1}
        lead={hero.lead}
        supporting={hero.supporting}
        contentMaxClass="max-w-[min(39rem,100%)]"
      />
    </CinematicInteriorHero>
  );
}
