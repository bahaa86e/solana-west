import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/media/solana-west";

const { investment } = homeSections;

export function InvestmentSection() {
  return (
    <SectionShell
      id="investment-positioning"
      aria-labelledby="investment-heading"
      tone="paper"
      containerSize="wide"
      depth="lifted"
    >
      <div className="grid gap-section-gap lg:grid-cols-12 lg:items-start lg:gap-x-section-gap xl:gap-x-[clamp(3.75rem,7vw,5.5rem)]">
        <LuxuryImageShell
          hover="cinematic"
          className="order-2 min-h-[19rem] lg:order-1 lg:col-span-7 lg:min-h-[28rem] rounded-[3px]"
          frameAccent={
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-lux-paper/[0.06] via-transparent to-lux-ink/[0.09]" aria-hidden />
              <div className="absolute inset-[8%] border border-lux-ink/[0.08] md:inset-[9%]" aria-hidden />
            </>
          }
        >
          <LuxuryFillImage
            src={solanaWestMedia.investment.src}
            alt={solanaWestMedia.investment.alt}
            sizes="(max-width: 1023px) 100vw, 58vw"
            quality={82}
            crop="greenerySubject"
            treatment="rich"
          />
        </LuxuryImageShell>

        <div className="order-1 max-w-readable lg:order-2 lg:col-span-5 lg:max-w-none lg:pl-[clamp(0.5rem,2vw,1.25rem)]">
          <SectionHeader
            id="investment-heading"
            eyebrow={investment.eyebrow}
            title={investment.title}
            kicker={<p className="font-normal text-lux-ink/68">{investment.lead}</p>}
          />

          <ul className="mt-12 space-y-9 border-t border-lux-ink/[0.08] pt-12 md:mt-14 md:space-y-10 md:pt-14">
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
      </div>
    </SectionShell>
  );
}
