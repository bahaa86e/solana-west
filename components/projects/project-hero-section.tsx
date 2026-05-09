import { InteriorHubHeroCopy } from "@/components/hero/interior-hub-hero-copy";
import { CinematicInteriorHero } from "@/components/hero/cinematic-interior-hero";
import type { ResolvedProjectPage } from "@/data/projects/types";

export function ProjectHeroSection({ page }: { page: ResolvedProjectPage }) {
  const slug = page.entry.slug;
  const hero = page.content.hero;
  const visual = page.media.hero;
  const labelledById = `${slug}-hero-heading`;

  return (
    <CinematicInteriorHero
      sectionId={`${slug}-hero`}
      aria-labelledby={labelledById}
      media={{
        src: visual.src,
        alt: visual.alt,
        sizes: "100vw",
        priority: true,
        quality: 88,
        imgClassName: "object-[center_38%]",
      }}
    >
      <InteriorHubHeroCopy
        eyebrow={hero.locationEyebrow}
        headingId={labelledById}
        title={hero.h1}
        lead={hero.communityLine}
        supporting={hero.seoSupportLine}
        contentMaxClass="max-w-[min(39rem,100%)]"
      />
    </CinematicInteriorHero>
  );
}
