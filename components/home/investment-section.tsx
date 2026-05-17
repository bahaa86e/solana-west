import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import {
  editorialLandscapeAspectProminent,
  editorialSplitCopy,
  editorialSplitGrid,
  editorialSplitMedia,
} from "@/lib/media/editorial-image-layout";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/media/solana-west";
import { cn } from "@/lib/utils";

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
      <div className={cn(editorialSplitGrid, "lg:items-start")}>
        <LuxuryImageShell
          hover="cinematic"
          frame="editorial"
          aspectClassName={editorialLandscapeAspectProminent}
          className={cn(editorialSplitMedia, "order-2 lg:order-1")}
          frameAccent={
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lux-paper/[0.05] via-transparent to-lux-ink/[0.07]" aria-hidden />
          }
        >
          <LuxuryFillImage
            src={solanaWestMedia.investment.src}
            alt={solanaWestMedia.investment.alt}
            sizes="(max-width: 1023px) 100vw, 58vw"
            crop="greenerySubject"
            treatment="rich"
          />
        </LuxuryImageShell>

        <div className={cn(editorialSplitCopy, "order-1 max-w-readable lg:order-2 lg:max-w-none")}>
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
