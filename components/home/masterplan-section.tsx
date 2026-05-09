import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { solanaWestMedia } from "@/data/solana-west-media";

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
      <SectionHeader id="masterplan-heading" eyebrow="Plan" title="Masterplan" />
      <LuxuryImageShell
        hover="cinematic"
        className="mt-section-block aspect-[21/9] max-h-[26rem] w-full rounded-[3px] md:mt-section-gap xl:max-h-[28rem]"
        frameAccent={
          <>
            <div className="absolute inset-0 z-[6] bg-gradient-to-b from-transparent via-transparent to-lux-paper/[0.14]" aria-hidden />
            <div
              className="pointer-events-none absolute inset-y-6 left-10 right-10 z-[7] border-x border-lux-ink/[0.08] md:inset-y-8 md:left-14 md:right-14"
              aria-hidden
            />
          </>
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
