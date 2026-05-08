import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { LocationPageModel } from "@/data/location/location-page-model";

export function LocationConnectivitySection({ model }: { model: LocationPageModel }) {
  const { connectivity, idPrefix } = model;
  const headingId = `${idPrefix}-connectivity-heading`;

  return (
    <SectionShell id={`${idPrefix}-connectivity`} aria-labelledby={headingId} tone="paper" containerSize="wide">
      <div className="max-w-readable xl:max-w-none">
        <SectionHeader
          id={headingId}
          eyebrow={connectivity.eyebrow}
          title={connectivity.title}
          kicker={<p className="font-normal text-lux-ink/64 xl:max-w-[44rem]">{connectivity.intro}</p>}
        />
      </div>

      <div className="mt-14 border-t border-lux-ink/[0.07] pt-14 md:mt-16 md:pt-16">
        <ul className="m-0 flex list-none flex-col gap-14 p-0 md:gap-[4.25rem]">
          {connectivity.sections.map((section, i) => {
            const sid = `${idPrefix}-connectivity-${i}`;
            return (
              <li key={sid} id={sid} className="scroll-mt-28">
                <article className="grid gap-8 lg:grid-cols-12 lg:gap-16 xl:gap-24">
                  <div className="lg:col-span-4 xl:col-span-3">
                    <h3 className="m-0 font-display text-[1.4375rem] font-normal tracking-[-0.014em] text-lux-ink xl:text-[1.6875rem]">
                      {section.heading}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-6 lg:col-span-8 lg:pb-px xl:col-span-8">
                    {section.body.map((p, j) => (
                      <p
                        key={`${sid}-body-${j}`}
                        className="m-0 text-[0.9375rem] font-normal leading-[1.74] tracking-[0.014em] text-lux-ink/74 md:text-base"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionShell>
  );
}
