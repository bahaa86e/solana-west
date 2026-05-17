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
import type { ResolvedProjectPage } from "@/data/projects/types";

export function ProjectOverviewSection({ page }: { page: ResolvedProjectPage }) {
  const slug = page.entry.slug;
  const { overview } = page.content;

  return (
    <SectionShell
      id={`${slug}-overview`}
      aria-labelledby={`${slug}-overview-heading`}
      tone="postHero"
      containerSize="wide"
    >
      <div className={editorialSplitGrid}>
        <div className={editorialSplitCopy}>
          <div>
            <SectionHeader
              id={`${slug}-overview-heading`}
              eyebrow={overview.eyebrow}
              title={overview.title}
            />
            <div className={editorialBodyStack}>
              {overview.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
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
          frameAccent={
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-lux-paper/[0.05]" aria-hidden />
          }
        >
          <LuxuryFillImage
            src={page.media.overviewFigure.src}
            alt={page.media.overviewFigure.alt}
            sizes="(max-width: 1023px) 100vw, min(928px, 58vw)"
            crop="cardThumb"
            treatment="rich"
          />
        </LuxuryImageShell>
      </div>
    </SectionShell>
  );
}
