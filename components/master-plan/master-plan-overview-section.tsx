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
import type { MasterPlanPageModel } from "@/data/master-plan/master-plan-page-model";

export function MasterPlanOverviewSection({ model }: { model: MasterPlanPageModel }) {
  const { overview, overviewFigure, idPrefix } = model;
  const headingId = `${idPrefix}-overview-heading`;

  return (
    <SectionShell id={`${idPrefix}-overview`} aria-labelledby={headingId} tone="postHero" containerSize="wide">
      <div className={editorialSplitGrid}>
        <div className={editorialSplitCopy}>
          <div>
            <SectionHeader id={headingId} eyebrow={overview.eyebrow} title={overview.title} />
            <div className={editorialBodyStack}>
              {overview.paragraphs.map((paragraph, i) => (
                <p
                  key={`${idPrefix}-overview-${i}`}
                  className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.012em] text-lux-ink/72 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <LuxuryImageShell
          hover="cinematic"
          frame="editorial"
          aspectClassName={editorialLandscapeAspect}
          className={editorialSplitMedia}
          frameAccent={<div className="pointer-events-none absolute inset-[10%] ring-1 ring-lux-ink/10" aria-hidden />}
        >
          <LuxuryFillImage
            src={overviewFigure.src}
            alt={overviewFigure.alt}
            sizes="(max-width: 1023px) 100vw, min(928px, 58vw)"
            fit="contain"
            crop="mapCalm"
            treatment="rich"
            imgClassName="bg-lux-paper"
          />
        </LuxuryImageShell>
      </div>
    </SectionShell>
  );
}
