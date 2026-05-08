import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { ResolvedProjectPage } from "@/data/projects/types";

export function ProjectPropertyTypesSection({ page }: { page: ResolvedProjectPage }) {
  const slug = page.entry.slug;
  const { propertyTypes } = page.content;

  return (
    <SectionShell
      id={`${slug}-property-types`}
      aria-labelledby={`${slug}-property-types-heading`}
      tone="sand"
      containerSize="wide"
    >
      <div className="flex flex-col gap-16 md:gap-20 lg:flex-row lg:items-start lg:gap-[clamp(3.5rem,7vw,7.5rem)]">
        <div className="max-w-sm shrink-0 lg:max-w-md lg:pt-2">
          <SectionHeader
            id={`${slug}-property-types-heading`}
            eyebrow="Product"
            title="Property types"
            kicker={
              <p className="font-normal text-lux-ink/66">{propertyTypes.intro}</p>
            }
          />
        </div>
        <ul className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:gap-6">
          {propertyTypes.types.map((row) => (
            <li key={row.title}>
              <article className="group flex min-h-[14rem] flex-col justify-between border border-lux-ink/[0.065] bg-lux-paper/70 px-8 py-9 text-left shadow-[inset_0_1px_0_rgba(250,248,245,0.8)] transition-[border-color,box-shadow,background-color] duration-480 ease-luxury hover:border-lux-ink/16 hover:bg-lux-paper hover:shadow-lux-card sm:min-h-[15.5rem] sm:px-9 sm:py-11 xl:min-h-[16rem] xl:py-12">
                <div>
                  <h3 className="m-0 font-display text-[1.4375rem] font-normal tracking-[-0.014em] text-lux-ink transition-colors duration-400 group-hover:text-lux-ink/88 md:text-2xl xl:text-[1.6875rem]">
                    {row.title}
                  </h3>
                  <p className="mt-4 text-[0.8125rem] font-normal leading-[1.72] tracking-[0.014em] text-lux-ink/70 md:text-[0.84375rem]">
                    {row.description}
                  </p>
                </div>
                <p className="mt-6 border-t border-lux-ink/[0.06] pt-5 text-[0.75rem] font-normal leading-[1.65] tracking-[0.02em] text-lux-ink/48">
                  {row.investorNote}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
