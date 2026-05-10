"use client";

import { motion, useReducedMotion } from "framer-motion";

import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import type { HomeVisualBeat } from "@/data/storytelling/home-visual-narrative";
import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

const moodClass: Record<HomeVisualBeat["mood"], string> = {
  aerial: cn("from-[#3a3630]/38 via-[#242220]/14 to-transparent"),
  architecture: cn("from-lux-ink/46 via-lux-ink/18 to-transparent"),
  lifestyle: cn("from-[#1c1a18]/48 via-[#222018]/22 to-transparent"),
  sunset: cn("from-[#2a2018]/44 via-[#3d2a20]/22 to-[#a87f5c]/08"),
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
      animate: { scale: [1, 1.014] },
      transition: { duration: 48, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" },
    };

  const cropForMood =
    beat.mood === "lifestyle" ? "interiorWarm"
    : beat.mood === "aerial" ? "editorialWideLow"
    : "greenerySubject";

  return (
    <section
      className={cn(
        "relative isolate w-full overflow-hidden",
        "min-h-[min(58vh,44rem)] max-lg:min-h-[min(52vh,36rem)]",
        "border-y border-lux-ink/[0.045] shadow-[inset_0_1px_0_rgba(252,250,247,0.08)]",
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
            "pointer-events-none absolute inset-0 bg-gradient-to-br mix-blend-multiply",
            moodClass[beat.mood],
            beat.mood === "sunset" ? "opacity-[0.68]" : "opacity-[0.62]",
          )}
        />
        {(beat.mood === "aerial" || beat.mood === "sunset") && (
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(62,54,46,0.28),transparent_58%)] mix-blend-soft-light opacity-72"
            aria-hidden
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(252,251,248,0.08)_0%,transparent_42%,transparent_58%,rgba(185,168,146,0.05)_100%)] opacity-65 mix-blend-soft-light"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-lux-ink/32 via-transparent to-transparent to-[44%]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lux-ink/76 via-lux-ink/38 to-transparent to-[58%]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.028] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "140px 140px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-[4.5%] z-[3] rounded-[2px] border border-white/[0.055] md:inset-[5.5%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-[4.5%] z-[3] rounded-[2px] shadow-[inset_0_0_0_1px_rgba(185,168,146,0.07)] md:inset-[5.5%]"
          aria-hidden
        />
      </div>

      <div className="relative z-[4] mx-auto flex min-h-[min(58vh,44rem)] max-w-content flex-col justify-end px-gutter pb-[clamp(2.5rem,6.25vw,4rem)] pt-[clamp(4.25rem,17vw,8.75rem)] max-lg:min-h-[min(52vh,36rem)]">
        <p
          id={captionId}
          className="max-w-[min(34rem,92vw)] text-balance font-display text-lux-display-sm text-lux-paper"
          style={{
            textShadow:
              "0 1px 0 rgba(0,0,0,0.2), 0 0.35rem 1.25rem rgba(0,0,0,0.28), 0 -0.02em 0.35em rgba(28,26,23,0.18)",
          }}
        >
          <span className="mb-[0.95rem] block font-sans uppercase text-micro text-lux-paper/48 md:mb-[1.125rem] md:tracking-[0.3em]">
            {beat.kicker}
          </span>
          {beat.caption}
        </p>
      </div>
    </section>
  );
}
