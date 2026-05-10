import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";

const { projectOverview } = homeSections;

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
            eyebrow={projectOverview.eyebrow}
            title={projectOverview.title}
            kicker={<p className="font-normal">{projectOverview.lead}</p>}
          />
          <div className="mt-section-block max-w-[42rem] space-y-7 border-t border-lux-ink/[0.08] pt-12 md:space-y-8 md:pt-14">
            {projectOverview.body.map((paragraph, index) => (
              <p key={index} className="lux-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 lg:flex lg:justify-end" aria-hidden>
          <div className="hidden h-px w-full max-w-md bg-gradient-to-r from-transparent via-lux-ink/14 to-transparent lg:mt-28 lg:block xl:mt-32" />
          <div className="mt-10 h-px w-full max-w-md bg-gradient-to-r from-lux-ink/6 via-lux-ink/14 to-transparent lg:hidden" />
        </div>
      </div>
    </SectionShell>
  );
}
