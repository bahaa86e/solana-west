import { InteriorHubHeroCopy } from "@/components/hero/interior-hub-hero-copy";
import { CinematicInteriorHero } from "@/components/hero/cinematic-interior-hero";
import type { ContactPageModel } from "@/data/contact/contact-page-model";

export function ContactHeroSection({ model }: { model: ContactPageModel }) {
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
        imgClassName: "object-[center_42%]",
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
