import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import {
  editorialBodyStack,
  editorialLandscapeAspect,
  editorialSplitCopy,
  editorialSplitGrid,
  editorialSplitMedia,
} from "@/lib/media/editorial-image-layout";

import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { PropertyExperienceModel } from "@/data/properties/property-type-experience";

export function PropertyTypeOverviewSection({ model }: { model: PropertyExperienceModel }) {
  const { overview, slug, overviewImage } = model;

  return (
    <SectionShell
      id={`property-${slug}-overview`}
      aria-labelledby={`property-${slug}-overview-heading`}
      tone="postHero"
      containerSize="wide"
    >
      <div className={editorialSplitGrid}>
        <div className={editorialSplitCopy}>
          <div>
            <SectionHeader
              id={`property-${slug}-overview-heading`}
              eyebrow={overview.eyebrow}
              title={overview.title}
            />
            <div className={editorialBodyStack}>
              {overview.paragraphs.map((paragraph, i) => (
                <p
                  key={`${slug}-overview-${i}`}
                  className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.01em] text-lux-ink/72 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <LuxuryImageShell
          hover="lift"
          frame="editorial"
          aspectClassName={editorialLandscapeAspect}
          className={editorialSplitMedia}
          frameAccent={<div className="pointer-events-none absolute inset-[10%] ring-1 ring-lux-gold/18" aria-hidden />}
        >
          <LuxuryFillImage
            src={overviewImage.src}
            alt={overviewImage.alt}
            sizes="(max-width: 1023px) 100vw, min(928px, 58vw)"
            crop="cardThumb"
            treatment="rich"
          />
        </LuxuryImageShell>
      </div>
    </SectionShell>
  );
}
