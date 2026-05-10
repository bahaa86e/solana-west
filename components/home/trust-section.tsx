import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/media/solana-west";

const { trust } = homeSections;

export function TrustSection() {
  return (
    <SectionShell
      id="developer"
      aria-labelledby="developer-heading"
      tone="sand"
      containerSize="wide"
      depth="lifted"
      accentRim
    >
      <div className="grid gap-section-gap lg:grid-cols-12 lg:items-center lg:gap-x-section-gap xl:gap-x-[clamp(3.75rem,6.5vw,5rem)]">
        <div className="flex flex-col justify-between lg:col-span-5 lg:py-6">
          <div>
            <SectionHeader
              id="developer-heading"
              eyebrow={trust.eyebrow}
              title={trust.title}
            />
            <div className="mt-section-block max-w-md space-y-7 xl:max-w-lg">
              {trust.paragraphs.map((paragraph, i) => (
                <p key={i} className="lux-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <LuxuryImageShell
          hover="lift"
          aspectClassName="aspect-[4/3] lg:aspect-[21/9] lg:min-h-[clamp(26rem,52vh,42rem)] lg:rounded-[3px]"
          className="lg:col-span-7"
          frameAccent={
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lux-ink/[0.05] via-transparent to-lux-paper/[0.04]" aria-hidden />
          }
        >
          <LuxuryFillImage
            src={solanaWestMedia.trustAnchor.src}
            alt={solanaWestMedia.trustAnchor.alt}
            sizes="(max-width: 1023px) 100vw, min(928px, 58vw)"
            quality={88}
            crop="editorialWideLow"
            treatment="rich"
          />
        </LuxuryImageShell>
      </div>
    </SectionShell>
  );
}
