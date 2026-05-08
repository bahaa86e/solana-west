import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { Container } from "@/components/ui/container";
import type { AboutPageModel } from "@/data/about/about-page-model";
import { cn } from "@/lib/utils";

const proseBody =
  "text-[0.9375rem] font-normal tracking-[0.01em] text-lux-ink/58 md:text-base";

export function AboutHeroSection({ model }: { model: AboutPageModel }) {
  const { heroImage, hero, idPrefix } = model;
  const labelledById = `${idPrefix}-hero-heading`;

  return (
    <section
      id={`${idPrefix}-hero`}
      aria-labelledby={labelledById}
      className="relative bg-lux-paper shadow-[inset_0_-1px_0_rgba(10,10,10,0.06)]"
    >
      <Container as="div" size="wide" className="grid grid-cols-1 gap-0 lg:grid-cols-12 lg:items-stretch xl:gap-x-4">
        <div
          className={cn(
            "flex flex-col justify-end lg:justify-center lg:col-span-[5] xl:col-span-5",
            "pb-[clamp(3.75rem,10vw,6.75rem)] pt-[clamp(6.75rem,16vw,8.75rem)]",
            "md:pb-[clamp(4.25rem,9vw,7rem)] md:pt-[clamp(7rem,13vw,8.75rem)]",
          )}
        >
          <div className="max-w-lg xl:max-w-xl">
            <p className="font-sans uppercase text-micro tracking-[0.18em] text-lux-ink/38">
              {hero.locationEyebrow}
            </p>

            <h1
              id={labelledById}
              className="mt-7 font-display text-display-xl leading-[1.05] tracking-[-0.02em] text-balance text-lux-ink md:mt-[1.875rem]"
            >
              {hero.h1}
            </h1>

            <p
              className={cn(
                "mt-[clamp(2rem,4.5vw,2.75rem)] max-w-[24rem] leading-[1.76] md:max-w-md xl:max-w-2xl",
                "text-[0.96625rem] text-lux-ink/74 md:text-[1.02625rem]",
                "tracking-[0.008em]",
              )}
            >
              {hero.lead}
            </p>

            <p
              className={cn(
                "mt-8 max-w-[22rem] border-l border-lux-gold/28 pl-5 leading-[1.72] md:mt-9 md:max-w-[28rem] xl:max-w-2xl",
                proseBody,
                "text-lux-ink/52",
              )}
            >
              {hero.supporting}
            </p>
          </div>
        </div>

        <div
          className={cn(
            "relative min-h-[min(54vh,30rem)] border-t border-lux-ink/[0.06] lg:col-span-7 lg:min-h-[min(100dvh-5.5rem,52rem)] lg:border-l lg:border-t-0",
            "bg-lux-mist/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] xl:col-span-7",
          )}
        >
          <LuxuryFillImage
            src={heroImage.src}
            alt={heroImage.alt}
            sizes="(max-width: 1023px) 100vw, 52vw"
            priority
            quality={88}
            imgClassName="object-cover object-[center_45%]"
          />
          <div className="pointer-events-none absolute inset-[10%] z-[1] border border-lux-ink/[0.07] xl:inset-[12%]" aria-hidden />
        </div>
      </Container>
    </section>
  );
}
