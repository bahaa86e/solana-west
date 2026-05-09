import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
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
      depth="lifted"
      accentRim
    >
      <div className="grid gap-section-gap lg:grid-cols-12 lg:items-stretch lg:gap-x-section-gap xl:gap-x-[clamp(4rem,7vw,5.5rem)]">
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
        <LuxuryImageShell
          hover="lift"
          aspectClassName="aspect-[4/3] lg:rounded-[3px]"
          className="lg:col-span-7"
          frameAccent={
            <>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-lux-paper/[0.07]" aria-hidden />
              <div className="absolute inset-[9%] ring-1 ring-lux-gold/24 md:inset-[10%]" aria-hidden />
            </>
          }
        >
          <LuxuryFillImage
            src={solanaWestMedia.developer.src}
            alt={solanaWestMedia.developer.alt}
            sizes="(max-width: 1023px) 100vw, 44vw"
            quality={82}
            crop="editorialCenter"
            treatment="rich"
          />
        </LuxuryImageShell>
      </div>
    </SectionShell>
  );
}
