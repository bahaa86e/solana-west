"use client";

import { motion, useReducedMotion } from "framer-motion";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta-button";
import { croMessaging } from "@/data/cro";
import { homeSections } from "@/data/seo/home";
import { solanaWestCanonicalFiles, solanaWestMedia } from "@/data/media/solana-west";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const { hero, payment } = homeSections;

const easeLux = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const kenBurns = reduceMotion ?
    {}
  : {
      animate: { scale: [1, 1.006] },
      transition: {
        duration: 52,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    };

  const warmAtmospherePulse = reduceMotion ?
    {}
  : {
      animate: { opacity: [0.08, 0.13, 0.08] },
      transition: { duration: 26, repeat: Infinity, ease: "easeInOut" },
    };

  const fadeUpHero = reduceMotion ?
    { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  : {
      hidden: { opacity: 0, y: 22 },
      show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: easeLux } },
    };

  const fadeUpSecondary = reduceMotion ?
    { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  : {
      hidden: { opacity: 0, y: 16 },
      show: { opacity: 1, y: 0, transition: { duration: 0.88, ease: easeLux } },
    };

  const fadeTight = reduceMotion ?
    { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  : {
      hidden: { opacity: 0, y: 12 },
      show: { opacity: 1, y: 0, transition: { duration: 0.78, ease: easeLux } },
    };

  const glassReveal = reduceMotion ?
    { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  : {
      hidden: { opacity: 0, y: 28 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.05, ease: easeLux, delay: 0.06 },
      },
    };

  const scrollCue = reduceMotion ?
    {}
  : {
      animate: { y: [0, 3, 0] },
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
    };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={cn(
        "relative isolate min-h-[100dvh]",
        "supports-[height:100svh]:min-h-[100svh]",
        "overflow-hidden bg-[#171514]",
        "shadow-[inset_0_-1px_0_rgba(252,250,247,0.04)]",
      )}
    >
      {/* Cinematic plate — photography + layered warmth / depth (decorative only) */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div
          className={cn(
            "absolute inset-[-5%_-2.5%_-1.5%_-2.5%]",
            !reduceMotion && "will-change-transform",
          )}
          {...kenBurns}
        >
          <LuxuryFillImage
            src={solanaWestMedia.hero.src}
            mobileSrc={solanaWestCanonicalFiles.heroDaylightMobile}
            alt={solanaWestMedia.hero.alt}
            sizes="100vw"
            priority
            quality={90}
            filmGrade={false}
            imgClassName="object-cover max-lg:min-h-[112%] max-lg:object-[center_38%] lg:object-[center_36%]"
          />
        </motion.div>

        {/* Sunset / warm grade — prestige amber + rose depth */}
        <motion.div
          className={cn("pointer-events-none absolute inset-0 z-[2]", reduceMotion && "opacity-[0.28]")}
          style={{
            background:
              "linear-gradient(124deg, rgba(48,42,38,0.2) 0%, rgba(28,26,24,0.02) 42%, rgba(185,168,146,0.06) 72%, rgba(32,28,24,0.1) 100%)",
          }}
          {...(reduceMotion ? {} : warmAtmospherePulse)}
        />

        {/* Golden lateral wash — warm focal pull */}
        <div
          className="pointer-events-none absolute inset-0 z-[3] mix-blend-soft-light opacity-[0.62]"
          style={{
            background:
              "linear-gradient(94deg, rgba(252,251,248,0.1) 0%, transparent 36%, transparent 58%, rgba(200,182,154,0.07) 100%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 z-[3] opacity-[0.07] mix-blend-color-dodge max-lg:opacity-[0.055]"
          style={{
            background: "linear-gradient(200deg, rgba(30,48,52,0.22) 0%, transparent 55%)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-b from-lux-ink/38 from-[5%] via-lux-ink/14 via-50% to-transparent to-[82%]" />
        <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-[#141210] via-lux-ink/48 via-[46%] to-transparent to-[100%] max-lg:from-[#161412] max-lg:via-lux-ink/54" />
        <div className="pointer-events-none absolute inset-0 z-[6] bg-gradient-to-r from-lux-ink/58 via-lux-ink/28 to-transparent max-lg:bg-gradient-to-t max-lg:from-lux-ink/62 max-lg:via-lux-ink/32 max-lg:to-lux-ink/08" />

        <div className="pointer-events-none absolute inset-0 z-[7] bg-[radial-gradient(ellipse_76%_92%_at_18%_86%,rgba(24,22,20,0.32),transparent_62%)] max-lg:bg-[radial-gradient(ellipse_100%_92%_at_48%_96%,rgba(24,22,20,0.3),transparent_66%)]" />

        <div className="pointer-events-none absolute inset-0 z-[8] opacity-[0.32] mix-blend-soft-light bg-[radial-gradient(ellipse_95%_48%_at_50%_0%,rgba(252,251,248,0.14)_0%,transparent_58%)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[9] h-[50%] bg-gradient-to-t from-[rgba(42,36,32,0.28)] via-transparent to-transparent max-lg:h-[56%] max-lg:from-[rgba(38,34,30,0.32)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[10] h-px bg-gradient-to-r from-transparent via-lux-gold/[0.28] to-transparent" />

        {/* Subtle film texture — editorial grain (negligible GPU) */}
        <div
          className="pointer-events-none absolute inset-0 z-[11] opacity-[0.022] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
        />
      </div>

      <Container
        as="div"
        size="wide"
        className={cn(
          "relative z-[20] mx-auto grid min-h-[100dvh] w-full grid-cols-1",
          "supports-[height:100svh]:min-h-[100svh]",
          "pt-[clamp(5.75rem,calc(env(safe-area-inset-top,0px)+5.5rem),7.5rem)] max-lg:pt-[clamp(5rem,calc(env(safe-area-inset-top,0px)+4.65rem),6.25rem)]",
          "pb-[max(clamp(2.85rem,9vw,6rem),env(safe-area-inset-bottom,0px))] max-lg:pb-[max(5.75rem,calc(env(safe-area-inset-bottom,0px)+5.25rem))]",
          "lg:grid-cols-12 lg:items-end lg:gap-x-10",
          "xl:gap-x-14",
        )}
      >
        <div className="flex flex-col justify-end lg:col-span-7 xl:col-span-6 xl:pb-[max(2rem,env(safe-area-inset-bottom,0px))]">
          <motion.div
            className="relative w-full"
            initial="hidden"
            animate="show"
            variants={glassReveal}
          >
            {/* Floating cinematic glass — investor-grade content prism */}
            <div
              className={cn(
                "relative overflow-hidden rounded-[1rem] border border-white/[0.1]",
                "bg-gradient-to-br from-white/[0.1] via-lux-ink/38 to-[rgba(22,20,18,0.82)]",
                "shadow-[0_28px_88px_-44px_rgba(0,0,0,0.38),0_0_0_1px_rgba(252,250,247,0.04)_inset,inset_0_1px_0_rgba(252,250,247,0.1)]",
                "backdrop-blur-[22px] supports-[backdrop-filter]:backdrop-blur-[28px]",
                "ring-1 ring-inset ring-white/[0.045]",
                "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-lux-gold/35 before:to-transparent",
                "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_80px_-40px_rgba(185,168,146,0.06)]",
                "px-[1.125rem] pb-[1.75rem] pt-[1.625rem] sm:px-8 sm:pb-10 sm:pt-9 lg:rounded-[1.125rem] lg:px-10 lg:pb-11 lg:pt-10",
              )}
            >
              <motion.div
                className="relative z-[2] flex w-full flex-col"
                variants={{
                  hidden: {},
                  show: {
                    transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.1, delayChildren: 0.08 },
                  },
                }}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={fadeTight}>
                  <p className="inline-flex items-center rounded-full border border-lux-gold/[0.22] bg-black/16 px-[0.95rem] py-[0.52rem] text-[clamp(10px,0.28vw+9.62px,0.6875rem)] font-semibold uppercase tracking-[0.3em] text-lux-paper/[0.86] shadow-[inset_0_1px_0_rgba(252,250,247,0.1)] backdrop-blur-md supports-[backdrop-filter]:bg-black/14">
                    <span aria-hidden className="mr-2.5 h-[5px] w-[5px] rounded-full bg-gradient-to-br from-lux-gold/90 to-lux-gold/45 shadow-[0_0_8px_rgba(185,168,146,0.28)]" />
                    {hero.locationEyebrow}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUpHero}
                  className="mt-[clamp(1.25rem,3.1vw,2.35rem)] max-lg:mt-[1.2rem] lg:mt-[clamp(1.45rem,3.6vw,2.45rem)]"
                >
                  <span
                    className="mb-[clamp(1.125rem,2.65vw,2rem)] max-lg:mb-4 block h-[1.5px] max-w-[4rem] origin-left rounded-full bg-gradient-to-r from-lux-gold/55 via-lux-gold/22 to-transparent lg:mb-[clamp(1.25rem,3vw,2rem)]"
                    aria-hidden
                  />

                  <h1
                    id="hero-heading"
                    className="lux-display-hero-ultra max-lg:max-w-[min(28ch,100%)] lg:max-w-[min(36ch,100%)] text-balance"
                  >
                    {hero.h1}
                  </h1>
                </motion.div>

                <motion.div
                  variants={fadeUpSecondary}
                  className="mt-[clamp(1.2rem,3.2vw,2.55rem)] max-w-[min(34rem,100%)] space-y-[clamp(0.85rem,2.2vw,1.42rem)] max-lg:space-y-3 lg:mt-[clamp(1.45rem,3.65vw,2.5rem)] lg:space-y-[1.125rem]"
                >
                  <p className="lux-hero-community max-w-[min(34rem,100%)] max-lg:leading-snug">{hero.communityLine}</p>

                  <p className="lux-hero-muted max-w-[30rem] max-lg:sr-only border-l border-lux-gold/28 pl-[1.3125rem] md:pl-[1.55rem]">
                    {hero.seoSupportLine}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeTight}
                  className="relative mt-[clamp(1.125rem,3vw,2.25rem)] max-w-xl max-lg:mt-5 lg:mt-[clamp(1.5rem,3.5vw,2.25rem)]"
                >
                  <div className="hidden rounded-[10px] border border-white/[0.08] bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-transparent px-[1.1875rem] py-[1.0625rem] backdrop-blur-md supports-[backdrop-filter]:from-black/26 supports-[backdrop-filter]:via-black/18 lg:block">
                    <p className="lux-hero-annotation-title">{croMessaging.heroAnnotationTitle}</p>
                    <p className="lux-hero-annotation-body mt-3">{payment.summary}</p>
                  </div>
                  <p className="lux-hero-annotation-body rounded-[10px] border border-white/[0.09] bg-black/22 px-[1.125rem] py-[0.8125rem] text-left leading-snug tracking-[0.017em] backdrop-blur-md supports-[backdrop-filter]:bg-black/20 max-lg:text-[0.89375rem] lg:hidden">
                    {payment.summary}
                  </p>
                </motion.div>

                {/* Premium CTA cluster — separated for hierarchy */}
                <motion.div
                  variants={fadeTight}
                  className="relative mt-[clamp(1.5rem,4.25vw,2.75rem)] border-t border-white/[0.07] pt-[clamp(1.45rem,3.5vw,2.25rem)] max-lg:mt-7 max-lg:pt-7 lg:mt-[clamp(1.65rem,4.5vw,2.85rem)]"
                >
                  <p className="sr-only">Primary actions to request pricing or speak with sales</p>
                  <div className="flex w-full flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
                    <CtaButton
                      href={siteConfig.whatsAppUrl}
                      external
                      variant="whatsappOnDark"
                      size="lg"
                      leadingIcon={<WhatsAppIcon className="size-[1.1875rem] opacity-95" />}
                      className={cn(
                        "order-1 w-full min-h-[3.5rem] px-14 text-[0.953125rem] font-semibold tracking-[0.065em]",
                        "shadow-[0_22px_68px_-36px_rgba(0,0,0,0.38),0_8px_28px_-20px_rgba(185,168,146,0.08)]",
                        "hover:shadow-[0_26px_76px_-36px_rgba(0,0,0,0.42)] hover:brightness-[1.03]",
                        "backdrop-blur-sm",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
                        "active:translate-y-px motion-reduce:active:translate-y-0 sm:w-auto sm:min-w-[16rem]",
                        "motion-safe:transition-[box-shadow,filter]",
                        "focus-visible:!ring-offset-[#141210]",
                      )}
                      data-track="whatsapp_click"
                      data-track-placement="home_cinematic_whatsapp"
                    >
                      {croMessaging.heroPrimaryCta}
                    </CtaButton>

                    <CtaButton
                      href="/prices"
                      variant="ghost"
                      size="lg"
                      className={cn(
                        "order-2 w-full min-h-[3.5rem] border border-white/[0.18] bg-black/18 px-10 text-[0.9175rem] font-medium tracking-[0.062em]",
                        "text-lux-paper/[0.94]",
                        "shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl",
                        "hover:border-white/[0.28] hover:bg-white/[0.09] hover:text-lux-paper hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
                        "motion-safe:transition-[border-color,background-color,box-shadow,color]",
                        "active:translate-y-px motion-reduce:active:translate-y-0 sm:w-auto sm:flex-initial sm:px-12 sm:min-h-[3.25rem]",
                      )}
                      data-track="cta_click"
                      data-track-placement="home_cinematic_prices"
                    >
                      <span className="max-sm:hidden">{croMessaging.heroSecondaryCtaLong}</span>
                      <span className="sm:hidden">{croMessaging.heroSecondaryCtaShort}</span>
                    </CtaButton>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-[clamp(1.75rem,4.5vw,2.75rem)] hidden lg:flex lg:flex-row lg:items-end lg:justify-between lg:gap-8"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? {} : { opacity: 1, transition: { delay: 1.15, duration: 0.85, ease: easeLux } }}
            aria-hidden
          >
            <div className="flex min-w-0 items-center gap-4 pl-1">
              <span className="h-px w-12 shrink-0 bg-gradient-to-r from-transparent to-lux-paper/[0.38]" />
              {!reduceMotion ?
                <motion.span
                  className="truncate text-[10px] font-semibold uppercase tracking-[0.34em] text-lux-paper/28 md:text-[11px] md:tracking-[0.31em]"
                  {...scrollCue}
                >
                  Discover below
                </motion.span>
              : (
                <span className="truncate text-[10px] font-semibold uppercase tracking-[0.34em] text-lux-paper/28 md:text-[11px] md:tracking-[0.31em]">
                  Discover below
                </span>
              )}
            </div>
            {!reduceMotion ?
              <motion.div
                animate={{ opacity: [0.32, 0.58, 0.32], y: [0, 3, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-12 w-px shrink-0 self-end bg-gradient-to-b from-lux-gold/32 via-lux-paper/12 to-transparent"
                aria-hidden
              />
            : (
              <div className="h-10 w-[1px] shrink-0 self-end bg-gradient-to-b from-lux-gold/28 to-transparent" aria-hidden />
            )}
          </motion.div>
        </div>

        <div
          className="pointer-events-none hidden min-h-[1rem] lg:col-span-5 lg:block xl:col-span-6"
          aria-hidden
        />
      </Container>
    </section>
  );
}
