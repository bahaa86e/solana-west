"use client";

import { motion, useReducedMotion } from "framer-motion";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta-button";
import { homeSections } from "@/data/seo/home";
import { solanaWestMedia } from "@/data/solana-west-media";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const { hero, payment } = homeSections;

const easeLux = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const kenBurns = reduceMotion ?
    {}
  : {
      animate: { scale: [1, 1.032] },
      transition: {
        duration: 32,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    };

  /** Frame floats — restrained so it stays premium, not flashy */
  const frameDrift = reduceMotion ?
    {}
  : {
      animate: { y: [0, -10, 0] },
      transition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
    };

  const mistPulse = reduceMotion ?
    {}
  : {
      animate: { opacity: [0.18, 0.3, 0.18] },
      transition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
    };

  const fadeUpHero = reduceMotion ?
    { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  : {
      hidden: { opacity: 0, y: 26 },
      show: { opacity: 1, y: 0, transition: { duration: 0.92, ease: easeLux } },
    };

  const fadeUpSecondary = reduceMotion ?
    { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  : {
      hidden: { opacity: 0, y: 18 },
      show: { opacity: 1, y: 0, transition: { duration: 0.82, ease: easeLux } },
    };

  const fadeTight = reduceMotion ?
    { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  : {
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: easeLux } },
    };

  const scrollCue = reduceMotion ?
    {}
  : {
      animate: { y: [0, 7, 0] },
      transition: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
    };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={cn(
        "relative isolate min-h-[100dvh]",
        "supports-[height:100svh]:min-h-[100svh]",
        "overflow-hidden bg-lux-ink",
        "shadow-[inset_0_-1px_0_rgba(250,248,245,0.07)]",
      )}
    >
      {/* —— Background image + cinematic stack (decorative layers only) */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div
          className={cn(
            "absolute inset-[-6%_-3%_-2%_-3%]",
            !reduceMotion && "will-change-transform",
          )}
          {...kenBurns}
        >
          <LuxuryFillImage
            src={solanaWestMedia.hero.src}
            alt={solanaWestMedia.hero.alt}
            sizes="100vw"
            priority
            quality={88}
            filmGrade={false}
            imgClassName="object-cover max-lg:object-[center_30%] lg:object-[center_40%]"
          />
        </motion.div>

        {/* Cool mist wash */}
        <motion.div
          className={cn(
            "pointer-events-none absolute inset-0 z-[2] rotate-[-1deg]",
            reduceMotion && "opacity-[0.22]",
          )}
          style={{
            background:
              "linear-gradient(118deg, rgba(250,248,245,0.14) 0%, transparent 44%, transparent 68%, rgba(196,165,116,0.075) 100%)",
          }}
          {...(reduceMotion ? {} : mistPulse)}
        />

        {/* Depth stacks */}
        <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-lux-ink/62 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-t from-lux-ink via-lux-ink/52 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-lux-ink/78 via-lux-ink/32 to-transparent max-lg:bg-gradient-to-t max-lg:from-lux-ink max-lg:via-lux-ink/78 max-lg:to-lux-ink/14" />
        {/* Readability vignette centred on typography column */}
        <div className="pointer-events-none absolute inset-0 z-[6] bg-[radial-gradient(ellipse_88%_90%_at_18%_88%,rgba(10,10,10,0.42),transparent_58%)] max-lg:bg-[radial-gradient(ellipse_112%_88%_at_50%_102%,rgba(10,10,10,0.52),transparent_64%)]" />
        {/* Top highlight — skylight */}
        <div className="pointer-events-none absolute inset-0 z-[7] opacity-50 mix-blend-soft-light bg-[radial-gradient(ellipse_100%_55%_at_50%_5%,rgba(250,248,245,0.22)_0%,transparent_55%)]" />
        {/* Bottom lift into next section — stronger letterbox on phone */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-[48%] bg-gradient-to-t from-lux-paper/[0.1] via-transparent to-transparent max-lg:h-[54%] max-lg:from-lux-ink/[0.22] max-lg:via-transparent" />

        <motion.div
          className={cn(
            "pointer-events-none absolute inset-[3.85%] z-[11] rounded-[2px] border border-lux-paper/[0.12] max-lg:border-lux-paper/[0.16] sm:inset-[5.25%] lg:inset-[8%]",
            !reduceMotion && "will-change-transform",
          )}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? {} : { opacity: 1, transition: { delay: 0.28, duration: 1.1, ease: easeLux } }}
          {...(!reduceMotion ? frameDrift : {})}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[12] h-px bg-gradient-to-r from-transparent via-lux-gold/[0.38] to-transparent" />
      </div>

      <Container
        as="div"
        size="wide"
        className={cn(
          "relative z-[20] mx-auto grid min-h-[100dvh] w-full grid-cols-1",
          "supports-[height:100svh]:min-h-[100svh]",
          "pt-[clamp(6rem,calc(env(safe-area-inset-top,0px)+5.75rem),7.75rem)] max-lg:pt-[clamp(5.25rem,calc(env(safe-area-inset-top,0px)+4.85rem),6.75rem)]",
          "pb-[max(clamp(2.85rem,9vw,6rem),env(safe-area-inset-bottom,0px))] max-lg:pb-[max(5.5rem,calc(env(safe-area-inset-bottom,0px)+5.125rem))]",
          "lg:grid-cols-12 lg:items-end lg:gap-x-8",
          "xl:gap-x-14",
        )}
      >
        <div className="flex flex-col justify-end lg:col-span-7 xl:col-span-6 xl:pb-[max(2rem,env(safe-area-inset-bottom,0px))]">
          <motion.div
            className="relative flex w-full flex-col"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.12, delayChildren: 0.04 },
              },
            }}
          >
            {/* Editorial glass ribbon — aligns with floating header grammar */}
            <motion.div variants={fadeTight}>
              <p className="inline-flex items-center rounded-full border border-white/[0.14] bg-lux-ink/22 px-[0.92rem] py-[0.485rem] text-[clamp(10px,0.28vw+9.62px,0.6875rem)] font-semibold uppercase tracking-[0.32em] text-lux-paper/61 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-[18px] supports-[backdrop-filter]:bg-black/26 md:tracking-[0.35em] md:text-lux-paper/[0.645]">
                <span aria-hidden className="mr-2.5 h-1 w-1 rounded-full bg-lux-gold/[0.75]" />
                {hero.locationEyebrow}
              </p>
            </motion.div>

            <motion.div variants={fadeUpHero} className="mt-[clamp(1.35rem,3.85vw,2.875rem)] max-lg:mt-5 lg:mt-[clamp(1.75rem,4.5vw,2.875rem)]">
              <span
                className="mb-[clamp(1.125rem,2.85vw,2.375rem)] max-lg:mb-[1.125rem] block h-[1.5px] max-w-[3.75rem] origin-left rounded-full bg-gradient-to-r from-lux-gold/72 via-lux-gold/28 to-transparent lg:mb-[clamp(1.75rem,3.5vw,2.375rem)]"
                aria-hidden
              />

              <h1 id="hero-heading" className="lux-display-hero max-lg:max-w-[min(22ch,100%)]">
                {hero.h1}
              </h1>
            </motion.div>

            <motion.div
              variants={fadeUpSecondary}
              className="mt-[clamp(1.5rem,3.85vw,3rem)] max-w-[min(32.5rem,100%)] space-y-[clamp(1rem,2.65vw,1.875rem)] max-lg:space-y-3.5 lg:mt-[clamp(1.875rem,4.75vw,3rem)] lg:space-y-[clamp(1.25rem,3vw,1.875rem)]"
            >
              <p className="lux-hero-community max-w-[min(32.5rem,100%)] max-lg:leading-snug">{hero.communityLine}</p>

              <p className="lux-hero-muted max-w-[30rem] max-lg:sr-only border-l border-lux-gold/38 pl-[1.375rem] md:pl-[1.6rem]">
                {hero.seoSupportLine}
              </p>
            </motion.div>

            {/* Investor cue — full glass on lg+; compact pill strip on phone (less clutter, same facts) */}
            <motion.div
              variants={fadeTight}
              className="relative mt-[clamp(1.25rem,3.25vw,2.875rem)] max-w-xl max-lg:mt-5 lg:mt-[clamp(1.875rem,4.5vw,2.875rem)]"
            >
              <div className="hidden rounded-[13px] border border-white/[0.12] bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-transparent px-[1.125rem] py-[1rem] backdrop-blur-[22px] supports-[backdrop-filter]:from-black/28 supports-[backdrop-filter]:via-black/22 lg:block">
                <p className="lux-hero-annotation-title">Reference terms</p>
                <p className="lux-hero-annotation-body mt-3">{payment.summary}</p>
              </div>
              <p className="lux-hero-annotation-body rounded-[1.0625rem] border border-white/[0.14] bg-lux-ink/28 px-[1.125rem] py-[0.8125rem] text-left leading-snug tracking-[0.017em] backdrop-blur-[18px] supports-[backdrop-filter]:bg-black/24 max-lg:text-[0.89375rem] lg:hidden">
                {payment.summary}
              </p>
            </motion.div>

            <motion.div
              variants={fadeTight}
              className="relative mt-[clamp(1.625rem,4.85vw,3.375rem)] flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center max-lg:mt-8 max-lg:gap-3 sm:gap-5 lg:mt-[clamp(2rem,6vw,3.375rem)]"
            >
              <CtaButton
                href={siteConfig.whatsAppUrl}
                external
                variant="whatsappOnDark"
                size="lg"
                leadingIcon={<WhatsAppIcon className="size-[1.1875rem] opacity-95" />}
                className={cn(
                  "order-1 w-full min-h-[3.5rem] px-14 text-[0.953125rem] font-semibold tracking-[0.065em]",
                  "shadow-[0_32px_74px_-36px_rgba(0,0,0,0.62)] hover:shadow-[0_38px_82px_-36px_rgba(0,0,0,0.68)] hover:brightness-[1.05]",
                  "backdrop-blur-sm",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
                  "active:translate-y-px motion-reduce:active:translate-y-0 sm:w-auto sm:min-w-[15.25rem]",
                  "motion-safe:transition-[box-shadow,filter]",
                  "focus-visible:!ring-offset-lux-ink",
                )}
                data-track="whatsapp_click"
                data-track-placement="home_cinematic_whatsapp"
              >
                WhatsApp — plan & prices
              </CtaButton>

              <CtaButton
                href="/prices"
                variant="ghost"
                size="lg"
                className={cn(
                  "order-2 w-full min-h-[3.5rem] border border-white/[0.22] bg-black/18 px-10 text-[0.9175rem] font-medium tracking-[0.063em]",
                  "text-lux-paper/[0.95]",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-lg",
                  "hover:border-white/[0.32] hover:bg-white/[0.1] hover:text-lux-paper hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
                  "motion-safe:transition-[border-color,background-color,box-shadow,color]",
                  "active:translate-y-px motion-reduce:active:translate-y-0 sm:w-auto sm:flex-initial sm:px-12 sm:min-h-[3.25rem]",
                )}
                data-track="cta_click"
                data-track-placement="home_cinematic_prices"
              >
                <span className="max-sm:hidden">Request pricing posture</span>
                <span className="sm:hidden">View prices</span>
              </CtaButton>
            </motion.div>

            <motion.div
              className="relative mt-[clamp(2.5rem,7.5vw,4.125rem)] hidden lg:flex lg:flex-row lg:items-end lg:justify-between lg:gap-8"
              variants={fadeTight}
              aria-hidden
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="h-px w-10 shrink-0 bg-gradient-to-r from-transparent to-lux-paper/[0.35]" />
                {!reduceMotion ?
                  <motion.span
                    className="truncate text-[10px] font-semibold uppercase tracking-[0.34em] text-lux-paper/30 md:text-[11px] md:tracking-[0.31em]"
                    {...scrollCue}
                  >
                    Briefings below
                  </motion.span>
                : (
                  <span className="truncate text-[10px] font-semibold uppercase tracking-[0.34em] text-lux-paper/30 md:text-[11px] md:tracking-[0.31em]">
                    Briefings below
                  </span>
                )}
              </div>
              {!reduceMotion ?
                <motion.div
                  animate={{ opacity: [0.4, 0.82, 0.4], y: [0, 5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden h-14 w-[1.5px] shrink-0 self-end bg-gradient-to-b from-lux-gold/42 via-lux-paper/18 to-transparent sm:block"
                  aria-hidden
                />
              : (
                <div className="hidden h-10 w-[1px] shrink-0 self-end bg-gradient-to-b from-lux-gold/25 to-transparent sm:block" aria-hidden />
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Breathing lane — showcases image composition on desktop */}
        <div
          className="pointer-events-none hidden min-h-[1rem] lg:col-span-5 lg:block xl:col-span-6"
          aria-hidden
        />
      </Container>
    </section>
  );
}
