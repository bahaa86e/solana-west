"use client";

import Link from "next/link";

import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { ProjectsHubPageModel } from "@/data/projects/projects-hub-model";
import { localizedPathname } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils";

export function ProjectsHubProjectCardsSection({ model }: { model: ProjectsHubPageModel }) {
  const locale = useSiteLocale();
  const { idPrefix, projectCardsEyebrow, projectCardsTitle, scaleNote, featuredProjects } = model;
  const headingId = `${idPrefix}-cards-heading`;

  return (
    <SectionShell id={`${idPrefix}-projects`} aria-labelledby={headingId} tone="paper" containerSize="wide">
      <SectionHeader id={headingId} eyebrow={projectCardsEyebrow} title={projectCardsTitle} />
      <p className="mt-10 max-w-readable text-[0.9375rem] font-normal leading-[1.75] tracking-[0.012em] text-lux-ink/58 md:mt-11 md:text-base">
        {scaleNote}
      </p>

      <ul className="m-0 mt-14 list-none space-y-12 p-0 md:mt-16 md:space-y-16" role="list">
        {featuredProjects.map((fp) => {
          const href = localizedPathname(`/projects/${fp.entry.slug}`, locale);
          return (
            <li key={fp.entry.slug}>
              <article
                className={cn(
                  "grid gap-10 border border-lux-ink/[0.052] bg-lux-paper/88 p-8 shadow-lux-line md:gap-12 md:p-10 lg:grid-cols-12 lg:items-stretch lg:gap-0 lg:p-0",
                  "transition-[border-color,box-shadow] duration-480 ease-luxury hover:border-lux-ink/[0.085] hover:shadow-lux-soft",
                )}
              >
                <Link
                  href={href}
                  className="relative block min-h-[14rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-lux-paper lg:col-span-5"
                  aria-label={`Open ${fp.entry.name} project hub`}
                >
                  <LuxuryImageShell hover="cinematic" className="h-full min-h-[14rem]">
                    <LuxuryFillImage
                      src={fp.image.src}
                      alt={fp.image.alt}
                      sizes="(max-width: 1023px) 100vw, 38vw"
                      quality={88}
                      crop="cardThumb"
                      treatment="rich"
                    />
                  </LuxuryImageShell>
                </Link>
                <div className="flex flex-col justify-center lg:col-span-7 lg:px-12 lg:py-11 xl:px-14">
                  <h3 className="m-0 font-display text-[1.6875rem] font-normal tracking-[-0.016em] text-lux-ink md:text-[1.9375rem]">
                    <Link href={href} className="underline-offset-[10px] transition-colors hover:text-lux-ink/[0.82] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-lux-paper">
                      {fp.entry.name}
                    </Link>
                  </h3>
                  <div className="mt-6 space-y-4">
                    {fp.teaser.map((p, i) => (
                      <p
                        key={`${fp.entry.slug}-teaser-${i}`}
                        className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.012em] text-lux-ink/70 md:text-base"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <p className="mt-10 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-lux-ink/38">
                    <Link href={href} className="border-b border-lux-ink/[0.14] pb-px text-lux-ink/45 transition-colors duration-400 hover:border-lux-ink/[0.24] hover:text-lux-ink/72">
                      Open project hub
                    </Link>
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
