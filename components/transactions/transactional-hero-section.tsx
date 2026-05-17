import { InteriorHubHeroCopy } from "@/components/hero/interior-hub-hero-copy";
import { CinematicInteriorHero } from "@/components/hero/cinematic-interior-hero";
import type { TransactionalPageModel } from "@/data/transactions/transaction-page-model";

export function TransactionalHeroSection({ model }: { model: TransactionalPageModel }) {
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
        imgClassName: "object-[center_40%]",
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
