"use client";

import { motion, useReducedMotion } from "framer-motion";

import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import type { HomeVisualBeat } from "@/data/storytelling/home-visual-narrative";
import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

const moodClass: Record<HomeVisualBeat["mood"], string> = {
  aerial: "from-[#faf7f2]/38 via-transparent to-transparent",
  architecture: "from-[#f5f2ec]/34 via-transparent to-transparent",
  lifestyle: "from-[#f7f5f0]/36 via-transparent to-transparent",
  sunset: "from-[#fbf6ef]/32 via-transparent to-[#eae2d6]/12",
};

/**
 * Full-bleed story frame — calibrated for daylight legibility (not noir grading).
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

  const cropForMood =
    beat.mood === "lifestyle" ? "interiorWarm"
    : beat.mood === "aerial" ? "editorialWideLow"
    : "greenerySubject";

  return (
    <section
      className={cn(
        "relative isolate w-full overflow-hidden",
        "min-h-[min(52vh,40rem)] max-lg:min-h-[min(48vh,34rem)] lg:min-h-[min(62vh,44rem)] xl:min-h-[min(66vh,48rem)]",
        "border-y border-lux-ink/[0.04]",
        className,
      )}
      aria-labelledby={captionId}
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.22, margin: "0px 0px -8% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.75, ease: easeLux }}
        >
          <div className="absolute inset-0">
            <LuxuryFillImage
              src={beat.image.src}
              alt={beat.image.alt}
              sizes="(max-width: 1023px) 100vw, min(100vw, 2560px)"
              loading="lazy"
              filmGrade={false}
              fit="cover"
              crop={cropForMood}
              imgClassName={cn(
                "brightness-[1.04] saturate-[1.02]",
                beat.mood === "sunset" && "object-[center_38%]",
                beat.mood === "aerial" && "max-lg:object-[center_42%] lg:object-[center_48%]",
              )}
            />
          </div>
        </motion.div>

        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-t mix-blend-normal",
            moodClass[beat.mood],
            "opacity-90",
          )}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[rgba(45,42,37,0.42)] via-[rgba(45,42,37,0.12)] to-transparent"
          aria-hidden
        />
      </div>

      <div
        className={cn(
          "relative z-[4] mx-auto flex max-w-[min(56rem,calc(100vw-4rem))] flex-col justify-end px-gutter pb-[clamp(2.25rem,5.5vw,3.5rem)] pt-[clamp(3.5rem,12vw,7rem)] xl:max-w-[58rem]",
          "min-h-[min(52vh,40rem)] max-lg:min-h-[min(48vh,34rem)] lg:min-h-[min(62vh,44rem)] xl:min-h-[min(66vh,48rem)]",
        )}
      >
        <p
          id={captionId}
          className="max-w-[min(34rem,92vw)] text-balance font-display text-lux-display-sm text-lux-paper"
          style={{ textShadow: "0 1px 0 rgba(45,42,37,0.2), 0 0.25rem 0.85rem rgba(45,42,37,0.25)" }}
        >
          <span className="mb-[0.75rem] block font-sans uppercase text-micro text-lux-paper/65 md:mb-[1rem] md:tracking-[0.16em]">
            {beat.kicker}
          </span>
          {beat.caption}
        </p>
      </div>
    </section>
  );
}
