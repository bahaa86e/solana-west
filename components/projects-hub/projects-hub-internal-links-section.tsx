import Link from "next/link";

import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { ProjectsHubPageModel } from "@/data/projects/projects-hub-model";

export function ProjectsHubInternalLinksSection({ model }: { model: ProjectsHubPageModel }) {
  const { internalLinks, idPrefix } = model;
  const headingId = `${idPrefix}-internal-heading`;

  return (
    <SectionShell
      id={`${idPrefix}-internal`}
      aria-labelledby={headingId}
      tone="sand"
      containerSize="wide"
      density="compact"
    >
      <SectionHeader id={headingId} eyebrow={internalLinks.eyebrow} title={internalLinks.title} />
      <p className="mt-8 max-w-lg text-[0.9375rem] font-normal leading-[1.72] tracking-[0.014em] text-lux-ink/58 md:mt-9 md:text-base">
        {internalLinks.intro}
      </p>

      <nav className="mt-10 md:mt-11" aria-label="Commercial and typology continuity">
        <ul className="m-0 grid list-none gap-8 p-0 sm:grid-cols-2 xl:grid-cols-3">
          {internalLinks.links.map((row) => (
            <li key={row.href}>
              <Link
                href={row.href}
                className="group block rounded-sm outline-none ring-lux-gold ring-offset-4 ring-offset-lux-mist focus-visible:ring-2"
              >
                <span className="block font-display text-lg font-normal tracking-[-0.012em] text-lux-ink underline decoration-lux-ink/[0.12] underline-offset-[10px] transition-colors duration-400 group-hover:decoration-lux-gold/45">
                  {row.label}
                </span>
                <span className="mt-2 block text-[0.8125rem] font-normal leading-[1.65] tracking-[0.015em] text-lux-ink/50">
                  {row.context}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SectionShell>
  );
}
