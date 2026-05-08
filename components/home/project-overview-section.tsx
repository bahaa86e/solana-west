import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";

export function ProjectOverviewSection() {
  return (
    <SectionShell
      id="project-overview"
      aria-labelledby="overview-heading"
      tone="paper"
      containerSize="wide"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-20">
        <div className="lg:col-span-7">
          <SectionHeader
            id="overview-heading"
            eyebrow="Overview"
            title="Project overview"
          />
        </div>
        <div
          className="lg:col-span-5 lg:flex lg:justify-end"
          aria-hidden
        >
          <div className="hidden h-px w-full max-w-md bg-lux-ink/[0.08] lg:mt-28 lg:block xl:mt-32" />
          <div className="mt-12 h-px w-full max-w-md bg-lux-ink/[0.07] lg:hidden" />
        </div>
      </div>
    </SectionShell>
  );
}
