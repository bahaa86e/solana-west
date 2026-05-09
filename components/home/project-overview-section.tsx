import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";

export function ProjectOverviewSection() {
  return (
    <SectionShell
      id="project-overview"
      aria-labelledby="overview-heading"
      tone="paper"
      containerSize="wide"
      rhythm="breath"
      accentRim
    >
      <div className="grid gap-section-gap lg:grid-cols-12 lg:items-start lg:gap-x-section-gap">
        <div className="lg:col-span-7">
          <SectionHeader
            id="overview-heading"
            eyebrow="Overview"
            title="Project overview"
          />
        </div>
        <div className="lg:col-span-5 lg:flex lg:justify-end" aria-hidden>
          <div className="hidden h-px w-full max-w-md bg-gradient-to-r from-transparent via-lux-ink/14 to-transparent lg:mt-28 lg:block xl:mt-32" />
          <div className="mt-10 h-px w-full max-w-md bg-gradient-to-r from-lux-ink/6 via-lux-ink/14 to-transparent lg:hidden" />
        </div>
      </div>
    </SectionShell>
  );
}
