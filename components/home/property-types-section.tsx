import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { solanaWestMedia } from "@/data/media/solana-west";
import { homeSections } from "@/data/seo/home";

const { propertyTypes } = homeSections;

export function PropertyTypesSection() {
  return (
    <SectionShell
      id="property-types"
      aria-labelledby="property-types-heading"
      tone="sand"
      containerSize="wide"
    >
      <div className="flex flex-col gap-section-gap lg:flex-row lg:items-start lg:gap-x-section-gap xl:gap-x-[clamp(3.75rem,7vw,8rem)]">
        <div className="max-w-sm shrink-0 lg:max-w-md lg:pt-2">
          <SectionHeader
            id="property-types-heading"
            eyebrow={propertyTypes.eyebrow}
            title={propertyTypes.title}
            kicker={
              <p className="font-normal text-lux-ink/66">{propertyTypes.intro}</p>
            }
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-section-gap">
          <LuxuryImageShell
            hover="lift"
            aspectClassName="aspect-[21/11] max-h-[min(11.75rem,36vw)] sm:max-h-[13rem]"
            className="w-full rounded-[3px]"
            frameAccent={
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-lux-paper/[0.06]" aria-hidden />
            }
          >
            <LuxuryFillImage
              src={solanaWestMedia.propertyTypesRibbon.src}
              alt={solanaWestMedia.propertyTypesRibbon.alt}
              sizes="(max-width: 1023px) 100vw, 58vw"
              quality={87}
              crop="editorialWideLow"
              treatment="editorial"
            />
          </LuxuryImageShell>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:gap-6">
            {propertyTypes.types.map((row) => (
              <li key={row.title}>
                <article className="group flex min-h-[14rem] flex-col justify-between border border-lux-ink/[0.055] bg-lux-paper/78 px-8 py-9 text-left shadow-[0_14px_40px_-30px_rgba(28,26,23,0.11),inset_0_1px_0_rgba(252,250,247,0.78)] transition-[border-color,box-shadow,background-color] duration-480 ease-luxury motion-reduce:transition-none hover:border-lux-ink/11 hover:bg-lux-paper hover:shadow-[0_18px_48px_-34px_rgba(28,26,23,0.13),inset_0_1px_0_rgba(252,250,247,0.82)] sm:min-h-[15.5rem] sm:px-9 sm:py-11 xl:min-h-[16rem] xl:py-12">
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
      </div>
    </SectionShell>
  );
}
