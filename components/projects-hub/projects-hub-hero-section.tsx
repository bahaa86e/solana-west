import { CinematicInteriorHero } from "@/components/hero/cinematic-interior-hero";
import type { ProjectsHubPageModel } from "@/data/projects/projects-hub-model";
import { cn } from "@/lib/utils";

const proseBody =
  "text-[0.9375rem] font-normal tracking-[0.014em] text-lux-ink/58 md:text-[0.96875rem]";

export function ProjectsHubHeroSection({ model }: { model: ProjectsHubPageModel }) {
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
      <div className="max-w-[min(41rem,100%)]">
        <p className="font-sans uppercase text-micro tracking-[0.2em] text-lux-ink/42">
          {hero.eyebrow}
        </p>

        <h1
          id={labelledById}
          className="mt-7 text-balance font-display text-display-xl leading-[1.04] tracking-[-0.022em] text-lux-ink md:mt-8"
        >
          {hero.h1}
        </h1>

        <p
          className={cn(
            "mt-[clamp(1.85rem,4vw,2.75rem)] max-w-[28rem] leading-[1.78] xl:max-w-2xl",
            "text-[0.97875rem] tracking-[0.01em] text-lux-ink/76 md:text-[1.02875rem]",
          )}
        >
          {hero.lead}
        </p>

        <p
          className={cn(
            "mt-8 max-w-[30rem] border-l border-lux-ink/12 pl-5 leading-[1.76] md:mt-10 xl:max-w-2xl",
            proseBody,
            "text-lux-ink/54",
          )}
        >
          {hero.supporting}
        </p>
      </div>
    </CinematicInteriorHero>
  );
}
