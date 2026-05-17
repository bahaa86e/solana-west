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
import type { AboutPageModel } from "@/data/about/about-page-model";

export function AboutDeveloperOverviewSection({ model }: { model: AboutPageModel }) {
  const { developerOverview, overviewFigure, idPrefix } = model;
  const headingId = `${idPrefix}-developer-heading`;

  return (
    <SectionShell id={`${idPrefix}-developer`} aria-labelledby={headingId} tone="postHero" containerSize="wide">
      <div className={editorialSplitGrid}>
        <div className={editorialSplitCopy}>
          <div>
            <SectionHeader
              id={headingId}
              eyebrow={developerOverview.eyebrow}
              title={developerOverview.title}
            />
            <div className={editorialBodyStack}>
              {developerOverview.paragraphs.map((paragraph, i) => (
                <p
                  key={`${idPrefix}-developer-${i}`}
                  className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.012em] text-lux-ink/72 md:text-base"
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
            src={overviewFigure.src}
            alt={overviewFigure.alt}
            sizes="(max-width: 1023px) 100vw, min(928px, 58vw)"
            crop="cardThumb"
            treatment="rich"
          />
        </LuxuryImageShell>
      </div>
    </SectionShell>
  );
}
