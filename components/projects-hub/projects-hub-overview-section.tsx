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
import type { ProjectsHubPageModel } from "@/data/projects/projects-hub-model";

export function ProjectsHubOverviewSection({ model }: { model: ProjectsHubPageModel }) {
  const { overview, idPrefix } = model;
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
          hover="lift"
          frame="editorial"
          aspectClassName={editorialLandscapeAspect}
          className={editorialSplitMedia}
          frameAccent={
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lux-ink/[0.04] via-transparent to-lux-paper/[0.03]" aria-hidden />
          }
        >
          <LuxuryFillImage
            src={overview.figure.src}
            alt={overview.figure.alt}
            sizes="(max-width: 1023px) 100vw, min(928px, 58vw)"
            crop="editorialHigh"
            treatment="rich"
          />
        </LuxuryImageShell>
      </div>
    </SectionShell>
  );
}
