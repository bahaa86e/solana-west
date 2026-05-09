"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

export type CinematicInteriorHeroMedia = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  quality?: number;
  imgClassName?: string;
};

export type CinematicInteriorHeroProps = {
  sectionId: string;
  "aria-labelledby": string;
  media: CinematicInteriorHeroMedia;
  children: React.ReactNode;
  className?: string;
};

/**
 * Full-bleed cinematic hero with overlapping editorial card — replaces rigid split grids
 * while preserving semantic structure (H1 + copy provided as `children`).
 */
export function CinematicInteriorHero({
  sectionId,
  "aria-labelledby": ariaLabelledBy,
  media,
  children,
  className,
}: CinematicInteriorHeroProps) {
  const reduceMotion = useReducedMotion();
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const yBg = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 58]);
  const yWarmWash = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 22]);

  return (
    <section
      id={sectionId}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative isolate overflow-hidden bg-lux-ink text-lux-paper shadow-[inset_0_-1px_0_rgba(250,248,245,0.06)]",
        className,
      )}
    >
      <div
        ref={mediaRef}
        className={cn(
          "relative w-full overflow-hidden",
          "min-h-[min(54vh,32rem)]",
          "md:min-h-[min(58vh,42rem)]",
          "xl:min-h-[min(64vh,50rem)]",
        )}
      >
        <motion.div
          style={{ y: yBg }}
          className={cn("absolute inset-[-8%_-2.5%_-3%_-2.5%]", !reduceMotion && "will-change-transform")}
        >
          <LuxuryFillImage
            src={media.src}
            alt={media.alt}
            sizes={media.sizes}
            priority={media.priority}
            quality={media.quality ?? 88}
            filmGrade={false}
            imgClassName={cn("object-cover saturate-[1.02] contrast-[1.025]", media.imgClassName)}
          />
        </motion.div>

        {/* Cinematic overlays — graded warmth + readability rails */}
        <motion.div
          style={{ y: yWarmWash }}
          className={cn(
            "pointer-events-none absolute inset-0 z-[3] opacity-95 mix-blend-soft-light bg-[radial-gradient(ellipse_96%_64%_at_52%_12%,rgba(250,248,245,0.2)_0%,transparent_54%)]",
            !reduceMotion && "will-change-transform",
          )}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[3] mix-blend-overlay opacity-[0.28] bg-[linear-gradient(128deg,rgba(196,165,116,0.12)_0%,transparent_42%,transparent_66%,rgba(232,226,217,0.06)_100%)]"
          aria-hidden
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[4] opacity-95 mix-blend-overlay bg-[radial-gradient(ellipse_88%_90%_at_50%_50%,transparent_22%,rgba(10,10,10,0.07)_74%,rgba(10,10,10,0.16)_100%)]"
        />
        <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-t from-lux-ink via-lux-ink/38 to-lux-ink/54" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-lux-ink/76 via-lux-ink/40 to-transparent max-md:bg-gradient-to-t max-md:from-lux-ink max-md:via-lux-ink/[0.72] max-md:to-lux-ink/52"
          aria-hidden
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_100%_105%_at_50%_108%,rgba(250,248,245,0.05)_0%,transparent_52%)] mix-blend-soft-light opacity-[0.7]"
        />

        <motion.div
          className="pointer-events-none absolute inset-[8%] z-[7] rounded-sm border border-lux-paper/[0.12] shadow-[inset_0_0_80px_-36px_rgb(0_0_0_/32%)] sm:inset-[9%] lg:inset-[10.5%]"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? {} : { opacity: 1, transition: { delay: 0.2, duration: 1, ease: easeLux } }}
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-px bg-gradient-to-r from-transparent via-lux-gold/[0.38] to-transparent"
          aria-hidden
        />
      </div>

      <Container
        as="div"
        size="wide"
        className="relative z-10 pb-[clamp(2.75rem,8vw,5.75rem)] pt-0"
      >
        <div className="-mt-[clamp(3rem,13vw,8.75rem)] max-w-none lg:-mt-[clamp(5rem,11vw,10rem)] xl:max-w-[min(54rem,100%)]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.75, ease: easeLux }}
            className={cn(
              "border border-white/[0.14]",
              "bg-gradient-to-b from-lux-paper/[0.97] via-lux-paper/95 to-[#ebe4d9]/90",
              "p-[clamp(1.75rem,5.5vw,3.75rem)]",
              "shadow-lux-depth",
              "backdrop-blur-[28px]",
              "ring-1 ring-lux-ink/[0.04]",
              "text-lux-ink supports-[backdrop-filter]:from-white/92 supports-[backdrop-filter]:via-lux-paper/92 supports-[backdrop-filter]:to-[#eae3da]/92",
            )}
          >
            {children}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
