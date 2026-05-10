"use client";

import { motion, useReducedMotion } from "framer-motion";

import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import type { HomeVisualBeat } from "@/data/storytelling/home-visual-narrative";
import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

const moodClass: Record<HomeVisualBeat["mood"], string> = {
  aerial: cn("from-[#6a645c]/22 via-[#8a8278]/08 to-transparent"),
  architecture: cn("from-[rgba(88,82,74,0.2)] via-[rgba(120,110,98,0.08)] to-transparent"),
  lifestyle: cn("from-[rgba(72,66,58,0.2)] via-[rgba(98,90,80,0.09)] to-transparent"),
  sunset: cn("from-[rgba(120,98,78,0.16)] via-[rgba(158,132,106,0.08)] to-[rgba(232,218,188,0.06)]"),
};

/**
 * Full-width immersive beat — breaks stacked-section cadence with a curated film frame.
 */
export function CinematicStoryMoment({
  beat,
  className,
}: {
  beat: HomeVisualBeat;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const assetSlug =
    typeof beat.image.src === "string" ?
      beat.image.src.replace(/^.*[/\\]|\.webp$/gi, "").replace(/[^\da-z]+/gi, "-")
    : "";
  const captionId = assetSlug ?
    `story-beat-${beat.mood}-${assetSlug}`
  : `story-beat-${beat.mood}-caption`;

  const kenBurns = reduceMotion ?
    {}
  : {
      animate: { scale: [1, 1.009] },
      transition: { duration: 62, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" },
    };

  const cropForMood =
    beat.mood === "lifestyle" ? "interiorWarm"
    : beat.mood === "aerial" ? "editorialWideLow"
    : "greenerySubject";

  return (
    <section
      className={cn(
        "relative isolate w-full overflow-hidden",
        "min-h-[min(58vh,44rem)] max-lg:min-h-[min(52vh,36rem)] lg:min-h-[min(72vh,50rem)] xl:min-h-[min(76vh,54rem)]",
        "border-y border-lux-ink/[0.032] shadow-[inset_0_1px_0_rgba(253,252,249,0.22)]",
        className,
      )}
      aria-labelledby={captionId}
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.004 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.22, margin: "0px 0px -8% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.88, ease: easeLux }}
        >
          <motion.div
            className={cn("absolute inset-[-2%] h-[104%] w-[103%] max-lg:inset-0 max-lg:h-full max-lg:w-full", !reduceMotion && "will-change-transform")}
            style={{ transformOrigin: "50% 45%" }}
            {...kenBurns}
          >
            <LuxuryFillImage
              src={beat.image.src}
              alt={beat.image.alt}
              sizes="100vw"
              quality={84}
              loading="lazy"
              filmGrade={false}
              fit="cover"
              crop={cropForMood}
              imgClassName={cn(
            beat.mood === "sunset" && "object-[center_38%]",
            beat.mood === "aerial" && "max-lg:object-[center_42%] lg:object-[center_48%]",
              )}
            />
          </motion.div>
        </motion.div>

        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br mix-blend-soft-light",
            moodClass[beat.mood],
            beat.mood === "sunset" ? "opacity-[0.38]" : "opacity-[0.34]",
          )}
        />
        {(beat.mood === "aerial" || beat.mood === "sunset") && (
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_72%_at_50%_100%,rgba(120,112,102,0.12),transparent_58%)] mix-blend-soft-light opacity-48"
            aria-hidden
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(253,252,249,0.12)_0%,transparent_42%,transparent_58%,rgba(215,205,182,0.06)_100%)] opacity-55 mix-blend-soft-light"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(72,66,58,0.14)] via-transparent to-transparent to-[42%]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(58,54,50,0.38)] via-[rgba(72,68,62,0.14)] to-transparent to-[62%]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.018] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "140px 140px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-[4.5%] z-[3] rounded-[2px] border border-white/[0.08] md:inset-[5.5%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-[4.5%] z-[3] rounded-[2px] shadow-[inset_0_0_0_1px_rgba(185,168,146,0.09)] md:inset-[5.5%]"
          aria-hidden
        />
      </div>

      <div className="relative z-[4] mx-auto flex min-h-[min(58vh,44rem)] max-w-[min(56rem,calc(100vw-4rem))] flex-col justify-end px-gutter pb-[clamp(2.5rem,6.25vw,4rem)] pt-[clamp(4.25rem,17vw,8.75rem)] max-lg:min-h-[min(52vh,36rem)] lg:min-h-[min(72vh,50rem)] lg:pb-[clamp(3rem,7vw,4.75rem)] lg:pt-[clamp(5rem,14vh,11rem)] xl:max-w-[58rem] xl:min-h-[min(76vh,54rem)]">
        <p
          id={captionId}
          className="max-w-[min(34rem,92vw)] text-balance font-display text-lux-display-sm text-lux-paper"
          style={{
            textShadow:
              "0 1px 0 rgba(72,66,58,0.14), 0 0.3rem 1rem rgba(52,46,42,0.18), 0 -0.02em 0.3em rgba(253,252,249,0.12)",
          }}
        >
          <span className="mb-[0.95rem] block font-sans uppercase text-micro text-lux-paper/55 md:mb-[1.125rem] md:tracking-[0.3em]">
            {beat.kicker}
          </span>
          {beat.caption}
        </p>
      </div>
    </section>
  );
}
