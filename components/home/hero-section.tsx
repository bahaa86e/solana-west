"use client";

import { motion, useReducedMotion } from "framer-motion";

import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta-button";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/solana-west-media";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const { hero } = homeSections;

const easeLux = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const kenBurns = reduceMotion ?
    {}
  : {
      animate: { scale: [1, 1.038] },
      transition: {
        duration: 26,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    };

  const frameDrift = reduceMotion ?
    {}
  : {
      animate: { y: [0, -8, 0] },
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
    };

  const mistPulse = reduceMotion ?
    {}
  : {
      animate: { opacity: [0.2, 0.32, 0.2] },
      transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
    };

  const fadeUp = reduceMotion ?
    { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  : {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.78, ease: easeLux } },
    };

  const fadeUpTight = reduceMotion ?
    { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  : {
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: easeLux } },
    };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={cn(
        "relative isolate min-h-[100dvh]",
        "supports-[height:100svh]:min-h-[100svh]",
        "bg-lux-ink shadow-[inset_0_-1px_0_rgba(250,248,245,0.06)]",
      )}
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div className={cn("absolute inset-[-4%]", !reduceMotion && "will-change-transform")} {...kenBurns}>
          <LuxuryFillImage
            src={solanaWestMedia.hero.src}
            alt={solanaWestMedia.hero.alt}
            sizes="100vw"
            priority
            quality={86}
            filmGrade={false}
            imgClassName="object-cover object-[center_42%]"
          />
        </motion.div>

        {/* Light wash — cinematic depth without a second decode */}
        <motion.div
          className={cn(
            "pointer-events-none absolute inset-0 z-[3] rotate-[-0.75deg]",
            reduceMotion && "opacity-[0.26]",
          )}
          style={{
            background:
              "linear-gradient(132deg, rgba(250,248,245,0.16) 0%, transparent 45%, transparent 72%, rgba(196,165,116,0.06) 100%)",
          }}
          {...(reduceMotion ? {} : mistPulse)}
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-b from-lux-ink/58 via-lux-ink/12 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-lux-ink/90 via-lux-ink/46 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[6] bg-gradient-to-r from-lux-ink/72 via-lux-ink/24 to-transparent max-lg:bg-gradient-to-t max-lg:from-lux-ink/94 max-lg:via-lux-ink/62 max-lg:to-lux-ink/15" />

        <div
          className="pointer-events-none absolute inset-0 z-[7] opacity-45 mix-blend-soft-light bg-[radial-gradient(ellipse_92%_65%_at_50%_16%,rgba(250,248,245,0.26)_0%,transparent_62%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-[42%] bg-gradient-to-t from-lux-paper/[0.08] via-transparent to-transparent"
          aria-hidden
        />

        <motion.div
          className={cn(
            "pointer-events-none absolute inset-[5%] z-[9] rounded-sm border border-lux-paper/[0.14] sm:inset-[6%] lg:inset-[7%]",
            !reduceMotion && "will-change-transform",
          )}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? {} : { opacity: 1, transition: { delay: 0.35, duration: 1, ease: easeLux } }}
          {...(!reduceMotion ? frameDrift : {})}
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[10] h-px bg-gradient-to-r from-transparent via-lux-gold/28 to-transparent opacity-75" aria-hidden />
      </div>

      <Container
        as="div"
        size="wide"
        className={cn(
          "relative z-20 flex flex-col",
          "min-h-[100dvh]",
          "supports-[height:100svh]:min-h-[100svh]",
          "pt-[clamp(5.65rem,calc(env(safe-area-inset-top,0px)+4.75rem),7rem)]",
          "pb-[max(clamp(2.75rem,9vw,5.75rem),env(safe-area-inset-bottom,0px))]",
        )}
      >
        <motion.div
          className="mt-auto flex w-full flex-col lg:max-w-[min(40.5rem,92vw)]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.1, delayChildren: 0.06 },
            },
          }}
        >
          <motion.p
            variants={fadeUpTight}
            className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.32em] text-lux-paper/48 md:text-[0.7125rem] md:tracking-[0.34em]"
          >
            {hero.locationEyebrow}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 md:mt-10">
            <span className="mb-8 block h-px max-w-[2.85rem] origin-left bg-gradient-to-r from-lux-gold/48 to-transparent" aria-hidden />

            <h1
              id="hero-heading"
              className="font-display text-[clamp(2.1875rem,6.4vw,4.0625rem)] font-medium leading-[1.05] tracking-[-0.03em] text-balance text-lux-paper [text-shadow:0_28px_70px_rgba(0,0,0,0.42)] md:leading-[1.04]"
            >
              {hero.h1}
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-[clamp(1.75rem,4.2vw,2.625rem)] max-w-[32rem]">
            <p className="text-[0.97875rem] font-normal leading-[1.76] tracking-[0.015em] text-lux-paper/78 md:text-[1.05875rem] md:leading-[1.74]">
              {hero.communityLine}
            </p>

            <p className="mt-7 border-l border-lux-paper/[0.22] pl-5 text-[0.9175rem] font-normal leading-[1.74] tracking-[0.024em] text-lux-paper/58 md:mt-[1.85rem] md:max-w-[30rem] md:text-[0.9575rem] md:tracking-[0.028em]">
              {hero.seoSupportLine}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpTight}
            className="mt-[clamp(2.75rem,6.5vw,4rem)] flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <CtaButton
              href={siteConfig.whatsAppUrl}
              external
              variant="inverse"
              size="lg"
              className={cn(
                "w-full px-14 text-[0.9375rem] tracking-[0.065em] sm:w-auto sm:min-w-[14.75rem]",
                "shadow-[0_26px_60px_-32px_rgba(0,0,0,0.55)]",
                "backdrop-blur-[2px]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
              )}
              data-track="whatsapp_click"
              data-track-placement="home_cinematic_whatsapp"
            >
              WhatsApp concierge
            </CtaButton>
            <CtaButton
              href="/prices"
              variant="ghost"
              size="lg"
              className={cn(
                "w-full border border-lux-paper/24 bg-white/[0.05] px-10 text-[0.9175rem] tracking-[0.06em]",
                "text-lux-paper/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                "hover:border-lux-paper/34 hover:bg-white/[0.1] hover:text-lux-paper",
                "backdrop-blur-md",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
                "sm:w-auto sm:flex-initial",
              )}
              data-track="cta_click"
              data-track-placement="home_cinematic_prices"
            >
              Request pricing posture
            </CtaButton>
          </motion.div>

          <motion.div
            className="relative mt-[clamp(2.75rem,7vw,4.75rem)] flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-lux-paper/26"
            variants={fadeUpTight}
            aria-hidden
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-lux-paper/[0.36]" />
            <span>Briefings below</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
