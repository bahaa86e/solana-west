import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
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
    >
      <SectionHeader
        id="masterplan-heading"
        eyebrow="Plan"
        title="Masterplan"
      />
      <figure className="relative mt-14 aspect-[21/9] max-h-[26rem] w-full overflow-hidden border border-lux-ink/[0.058] bg-lux-mist/35 shadow-[inset_0_1px_0_rgba(250,248,245,0.7)] md:mt-20 xl:max-h-[28rem]">
        <LuxuryFillImage
          src={solanaWestMedia.masterplan.src}
          alt={solanaWestMedia.masterplan.alt}
          sizes="(max-width: 1023px) 100vw, min(1200px, 92vw)"
          quality={85}
          fit="contain"
          imgClassName="bg-lux-mist/20 px-4 py-6 md:px-10 md:py-8"
        />
        <div
          className="pointer-events-none absolute inset-y-6 left-10 right-10 z-[1] border-x border-lux-ink/[0.06] md:inset-y-8 md:left-14 md:right-14"
          aria-hidden
        />
      </figure>
    </SectionShell>
  );
}
