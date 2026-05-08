import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/solana-west-media";

const { investment } = homeSections;

export function InvestmentSection() {
  return (
    <SectionShell
      id="investment-positioning"
      aria-labelledby="investment-heading"
      tone="paper"
      containerSize="wide"
    >
      <div className="grid gap-16 lg:grid-cols-[minmax(0,28rem)_1fr] lg:items-start lg:gap-x-24 xl:gap-x-28">
        <div className="max-w-readable">
          <SectionHeader
            id="investment-heading"
            eyebrow={investment.eyebrow}
            title={investment.title}
            kicker={<p className="font-normal text-lux-ink/68">{investment.lead}</p>}
          />

          <ul className="mt-12 space-y-9 border-t border-lux-ink/[0.07] pt-12 md:mt-14 md:space-y-10 md:pt-14">
            {investment.bullets.map((b) => (
              <li key={b.headline}>
                <p className="font-sans uppercase text-micro text-lux-ink/44">{b.headline}</p>
                <p className="mt-3 text-[0.9375rem] font-normal leading-[1.76] tracking-[0.012em] text-lux-ink/74 md:text-base">
                  {b.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative min-h-[19rem] w-full overflow-hidden bg-lux-mist/50 shadow-[inset_0_1px_0_rgba(250,248,245,0.35)] ring-1 ring-lux-ink/[0.058] lg:min-h-[26rem]">
          <LuxuryFillImage
            src={solanaWestMedia.investment.src}
            alt={solanaWestMedia.investment.alt}
            sizes="(max-width: 1023px) 100vw, 44vw"
            quality={82}
            imgClassName="object-cover object-[center_55%]"
          />
          <div
            className="pointer-events-none absolute inset-[9%] z-[1] border border-lux-ink/[0.06]"
            aria-hidden
          />
        </figure>
      </div>
    </SectionShell>
  );
}
