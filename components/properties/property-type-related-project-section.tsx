import Link from "next/link";

import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { PropertyExperienceModel } from "@/data/properties/property-type-experience";
import { cn } from "@/lib/utils";

export function PropertyTypeRelatedProjectSection({ model }: { model: PropertyExperienceModel }) {
  const { slug, relatedProject } = model;

  return (
    <SectionShell
      id={`property-${slug}-related-project`}
      aria-labelledby={`property-${slug}-related-heading`}
      tone="paper"
      containerSize="wide"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        <div className="max-w-xl">
          <SectionHeader
            id={`property-${slug}-related-heading`}
            eyebrow="Project reference"
            title="Explore the compound hub route"
          />
          <p className="mt-8 text-[0.9375rem] font-normal leading-[1.74] tracking-[0.012em] text-lux-ink/64 md:mt-10 md:text-base">
            The property-type view is excerpted editorially; issuance-ready detail (amenities, routes, FAQs) stays on the consolidated project page.
          </p>
        </div>
        <Link
          href={relatedProject.href}
          data-track="cta_click"
          className={cn(
            "group flex max-w-xl flex-col border border-lux-ink/[0.08] bg-lux-paper/80 px-8 py-9 shadow-[inset_0_1px_0_rgba(250,248,245,0.85)] transition-[border-color,box-shadow] duration-480 ease-luxury lg:max-w-[26rem] lg:flex-1",
            "hover:border-lux-ink/16 hover:shadow-lux-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-lux-paper",
          )}
        >
          <span className="font-display text-2xl font-normal tracking-[-0.014em] text-lux-ink transition-colors duration-400 group-hover:text-lux-ink/88 xl:text-[1.6875rem]">
            {relatedProject.title}
          </span>
          <p className="mt-4 text-[0.9375rem] font-normal leading-[1.75] tracking-[0.01em] text-lux-ink/72">
            {relatedProject.description}
          </p>
          <span className="mt-10 inline-block border-b border-lux-ink/[0.14] pb-0.5 text-micro uppercase tracking-[0.22em] text-lux-ink/44 transition-[color,border-color] duration-480 ease-luxury group-hover:border-lux-ink/28 group-hover:text-lux-ink/56">
            Open project hub
          </span>
        </Link>
      </div>
    </SectionShell>
  );
}
