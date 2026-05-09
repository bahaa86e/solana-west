import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/solana-west-media";

const { trust } = homeSections;

export function TrustSection() {
  return (
    <SectionShell
      id="developer"
      aria-labelledby="developer-heading"
      tone="sand"
      containerSize="wide"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:items-stretch lg:gap-20 xl:gap-24">
        <div className="flex flex-col justify-between lg:col-span-5">
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
        <figure className="relative aspect-[4/3] w-full overflow-hidden bg-lux-paper shadow-lux-image ring-1 ring-lux-ink/[0.07] lg:col-span-7">
          <LuxuryFillImage
            src={solanaWestMedia.developer.src}
            alt={solanaWestMedia.developer.alt}
            sizes="(max-width: 1023px) 100vw, 44vw"
            quality={82}
            imgClassName="object-cover object-[center_48%]"
          />
          <div
            className="pointer-events-none absolute inset-[10%] z-[1] ring-1 ring-lux-gold/16"
            aria-hidden
          />
        </figure>
      </div>
    </SectionShell>
  );
}
