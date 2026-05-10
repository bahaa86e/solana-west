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
      <div className="grid gap-section-gap lg:grid-cols-12 lg:items-start lg:gap-x-section-gap lg:gap-y-12">
        <div className="lg:col-span-7">
          <SectionHeader
            id="overview-heading"
            eyebrow={projectOverview.eyebrow}
            title={projectOverview.title}
            kicker={<p className="font-normal">{projectOverview.lead}</p>}
          />
          <div className="mt-section-block max-w-[40rem] space-y-7 border-t border-lux-ink/[0.07] pt-12 md:max-w-[42rem] md:space-y-8 md:pt-14">
            {projectOverview.body.map((paragraph, index) => (
              <p key={index} className="lux-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <aside className="lg:col-span-5 lg:sticky lg:top-[min(10rem,calc(env(safe-area-inset-top,0px)+9rem))] lg:self-start">
          <div className="mt-12 border-t border-lux-ink/[0.065] pt-11 lg:mt-[4.75rem] lg:border-l lg:border-t-0 lg:border-lux-ink/[0.07] lg:pl-[clamp(1.5rem,3vw,2.25rem)] lg:pt-2 xl:pl-10">
            <p className="font-sans text-micro uppercase leading-[1.65] tracking-[0.28em] text-lux-gold/[0.75]">{projectOverview.eyebrow}</p>
            <p className="mt-10 font-display text-[clamp(1.1875rem,1.05vw,1.375rem)] font-normal leading-[1.43] tracking-[-0.014em] text-lux-ink/[0.78] xl:text-[1.4375rem] xl:leading-[1.42]">
              {projectOverview.body[1]}
            </p>
          </div>
          <div className="mt-10 h-px w-full bg-gradient-to-r from-lux-ink/18 via-transparent to-transparent lg:hidden" aria-hidden />
        </aside>
      </div>
    </SectionShell>
  );
}
