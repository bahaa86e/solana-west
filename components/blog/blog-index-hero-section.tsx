import { InteriorHubHeroCopy } from "@/components/hero/interior-hub-hero-copy";
import { CinematicInteriorHero } from "@/components/hero/cinematic-interior-hero";
import type { BlogIndexPageModel } from "@/data/blog/blog-index-model";

export function BlogIndexHeroSection({ model }: { model: BlogIndexPageModel }) {
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
        imgClassName: "object-[center_46%]",
      }}
    >
      <InteriorHubHeroCopy
        eyebrow={hero.eyebrow}
        headingId={labelledById}
        title={hero.h1}
        lead={hero.lead}
        supporting={hero.supporting}
      />
    </CinematicInteriorHero>
  );
}
