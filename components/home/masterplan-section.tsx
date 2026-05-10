import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/media/solana-west";

const { masterplan } = homeSections;

export function MasterplanSection() {
  return (
    <SectionShell
      id="masterplan"
      aria-labelledby="masterplan-heading"
      tone="paper"
      containerSize="wide"
      rhythm="breath"
      depth="lifted"
    >
      <SectionHeader
        id="masterplan-heading"
        eyebrow={masterplan.eyebrow}
        title={masterplan.title}
        kicker={<p className="font-normal text-lux-ink/68">{masterplan.intro}</p>}
      />
      <LuxuryImageShell
        hover="cinematic"
        className="mt-section-block aspect-[4/3] w-full rounded-[3px] md:mt-section-gap sm:aspect-[16/11] lg:aspect-[21/9] lg:min-h-[min(44vh,38rem)] lg:max-h-[min(48rem,calc(72vh-8rem))] xl:min-h-[min(46vh,40rem)]"
        frameAccent={
          <div className="pointer-events-none absolute inset-0 z-[6] bg-gradient-to-b from-transparent via-transparent to-lux-paper/[0.12]" aria-hidden />
        }
      >
        <LuxuryFillImage
          src={solanaWestMedia.masterplan.src}
          alt={solanaWestMedia.masterplan.alt}
          sizes="(max-width: 1023px) 100vw, min(1200px, 92vw)"
          quality={85}
          fit="contain"
          crop="editorialWideLow"
          treatment="rich"
          imgClassName="bg-lux-mist/22 px-4 py-6 md:px-10 md:py-8"
        />
      </LuxuryImageShell>
    </SectionShell>
  );
}
