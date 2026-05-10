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
    >
      <SectionHeader
        id="masterplan-heading"
        eyebrow={masterplan.eyebrow}
        title={masterplan.title}
        kicker={<p className="font-normal text-lux-ink/68">{masterplan.intro}</p>}
      />
      <LuxuryImageShell
        hover="lift"
        className="mt-section-block aspect-[3/2] w-full rounded-[6px] md:mt-section-gap sm:aspect-video lg:aspect-video lg:min-h-[min(40vh,34rem)] lg:max-h-[min(44rem,calc(70vh-8rem))] xl:min-h-[min(42vh,36rem)]"
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
