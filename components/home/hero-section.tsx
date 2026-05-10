"use client";

import { motion, useReducedMotion } from "framer-motion";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta-button";
import { croCommercialFacts, croMessaging } from "@/data/cro";
import { homeSections } from "@/data/seo/home";
import { solanaWestCanonicalFiles, solanaWestMedia } from "@/data/media/solana-west";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const { hero, payment } = homeSections;

const heroDesktopFacts = [
  { k: "Reference", v: croCommercialFacts.startingFrom },
  { k: "Structure", v: `${croCommercialFacts.downPayment} · ${croCommercialFacts.installments}` },
  { k: "Handover", v: croCommercialFacts.delivery },
] as const;

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
      animate: { opacity: [0.035, 0.055, 0.035] },
      transition: { duration: 28, repeat: Infinity, ease: "easeInOut" },
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
        "overflow-hidden bg-[#eae5dd]",
        "shadow-[inset_0_-1px_0_rgba(253,252,249,0.35)]",
      )}
    >
      {/* Cinematic plate — photography + layered warmth / depth (decorative only) */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div
          className={cn(
            "absolute inset-[-5%_-2.5%_-1.5%_-2.5%] lg:inset-[-7%_-3.75%_-2.25%_-3.75%]",
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
            imgClassName={cn(
              "object-cover motion-reduce:brightness-100 motion-reduce:saturate-100",
              "brightness-[1.045] saturate-[1.052] contrast-[0.975]",
              "max-lg:min-h-[106%] max-lg:brightness-[1.092] max-lg:saturate-[1.038] max-lg:contrast-[0.96]",
              "max-lg:object-[center_32%] lg:object-[58%_42%] xl:object-[56%_40%]",
            )}
          />
        </motion.div>

        {/* Daylight warmth wash — restrained; pulse stays subtle */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(118deg, rgba(252,250,247,0.07) 0%, transparent 38%, rgba(245,239,226,0.09) 66%, transparent 92%)",
          }}
          {...(reduceMotion ? {} : warmAtmospherePulse)}
        />

        {/* Cream lateral lift — breathable premium daylight */}
        <div
          className="pointer-events-none absolute inset-0 z-[3] mix-blend-soft-light opacity-[0.38] max-lg:opacity-[0.44]"
          style={{
            background:
              "linear-gradient(96deg, rgba(255,253,249,0.18) 0%, transparent 40%, transparent 56%, rgba(232,218,188,0.08) 100%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 z-[3] opacity-[0.038] mix-blend-overlay max-lg:opacity-[0.018]"
          style={{
            background: "linear-gradient(198deg, rgba(120,110,92,0.12) 0%, transparent 52%)",
          }}
        />

        {/* Soft sky veil — avoids crushing the plate; stronger lift on narrow viewports */}
        <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-b from-lux-paper/[0.1] from-[6%] via-transparent via-[48%] to-transparent to-[88%] max-lg:from-lux-paper/[0.2] max-lg:from-[4%]" />
        {/* Typography legibility — mobile: minimal bottom weight; desktop keeps gentle anchor */}
        <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-[rgba(72,66,58,0.28)] via-[rgba(92,88,82,0.08)] via-[52%] to-transparent to-[100%] max-lg:from-[rgba(62,58,54,0.14)] max-lg:via-[rgba(88,86,82,0.04)] max-lg:via-[58%]" />
        <div className="pointer-events-none absolute inset-0 z-[6] bg-gradient-to-r from-[rgba(82,74,68,0.12)] via-transparent via-[48%] to-transparent max-lg:bg-gradient-to-t max-lg:from-[rgba(72,68,62,0.07)] max-lg:via-transparent max-lg:to-lux-paper/[0.14]" />

        <div className="pointer-events-none absolute inset-0 z-[7] bg-[radial-gradient(ellipse_78%_90%_at_20%_88%,rgba(72,66,58,0.08),transparent_64%)] max-lg:bg-[radial-gradient(ellipse_102%_90%_at_50%_96%,rgba(72,66,58,0.035),transparent_70%)]" />

        <div className="pointer-events-none absolute inset-0 z-[8] opacity-[0.52] mix-blend-soft-light bg-[radial-gradient(ellipse_96%_52%_at_50%_0%,rgba(253,252,249,0.28)_0%,transparent_62%)] max-lg:opacity-[0.62]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[9] h-[46%] bg-gradient-to-t from-[rgba(98,92,84,0.08)] via-transparent to-transparent max-lg:h-[42%] max-lg:from-[rgba(120,118,114,0.045)] max-lg:via-transparent" />

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
          "pt-[clamp(5.75rem,calc(env(safe-area-inset-top,0px)+5.5rem),7.5rem)] max-lg:pt-[clamp(5rem,calc(env(safe-area-inset-top,0px)+4.65rem),6.25rem)] lg:pt-[clamp(6rem,min(14vh,7.75rem),7.75rem)]",
          "pb-[max(clamp(2.85rem,9vw,6rem),env(safe-area-inset-bottom,0px))] max-lg:pb-[max(6.25rem,calc(env(safe-area-inset-bottom,0px)+5.5rem))] lg:pb-[clamp(2.5rem,6vh,4rem)]",
          "lg:grid-cols-12 lg:items-center lg:gap-x-[clamp(1.75rem,3.5vw,3.25rem)] lg:justify-between",
          "xl:gap-x-12",
        )}
      >
        <div className="flex max-w-none flex-col justify-end lg:col-span-5 lg:justify-center xl:col-span-5">
          <motion.div
            className="relative w-full"
            initial="hidden"
            animate="show"
            variants={glassReveal}
          >
            {/* Floating cinematic glass — investor-grade content prism */}
            <div
              className={cn(
                "relative overflow-hidden rounded-[1rem] border border-white/[0.26] max-lg:border-white/[0.32]",
                "bg-gradient-to-br from-white/[0.35] via-lux-paper/[0.2] to-[rgba(88,82,74,0.22)]",
                "max-lg:from-white/[0.52] max-lg:via-white/[0.28] max-lg:to-[rgba(120,114,106,0.12)]",
                "shadow-[0_20px_64px_-40px_rgba(62,54,46,0.14),inset_0_1px_0_rgba(253,252,249,0.38)]",
                "max-lg:backdrop-blur-none backdrop-blur-[14px] supports-[backdrop-filter]:lg:backdrop-blur-[18px]",
                "ring-1 ring-inset ring-white/[0.14] max-lg:ring-white/[0.22]",
                "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-lux-gold/32 before:to-transparent",
                "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_88px_-44px_rgba(253,252,249,0.12)] max-lg:after:shadow-none",
                "px-[1.3125rem] pb-[1.875rem] pt-[1.75rem] sm:px-8 sm:pb-10 sm:pt-9 lg:max-w-[min(42rem,100%)] lg:rounded-[1.125rem] lg:px-10 lg:pb-11 lg:pt-10",
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
                  <p className="inline-flex items-center rounded-full border border-lux-gold/[0.28] bg-white/[0.18] px-[0.95rem] py-[0.52rem] text-[clamp(10px,0.28vw+9.62px,0.6875rem)] font-semibold uppercase tracking-[0.28em] text-lux-paper/[0.92] shadow-[inset_0_1px_0_rgba(253,252,249,0.35)] backdrop-blur-sm supports-[backdrop-filter]:bg-white/16 max-lg:tracking-[0.24em] max-lg:backdrop-blur-none">
                    <span aria-hidden className="mr-2.5 h-[5px] w-[5px] rounded-full bg-gradient-to-br from-lux-gold/85 to-lux-gold/50" />
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
                    className="lux-display-hero-ultra max-lg:max-w-[min(28ch,100%)] max-lg:leading-[1.07] lg:max-w-[min(36ch,100%)] text-balance"
                  >
                    {hero.h1}
                  </h1>
                </motion.div>

                <motion.div
                  variants={fadeUpSecondary}
                  className="mt-[clamp(1.2rem,3.2vw,2.55rem)] max-w-[min(34rem,100%)] space-y-[clamp(0.85rem,2.2vw,1.42rem)] max-lg:space-y-3 lg:mt-[clamp(1.45rem,3.65vw,2.5rem)] lg:space-y-[1.125rem]"
                >
                  <p className="lux-hero-community max-w-[min(34rem,100%)] max-lg:leading-[1.72]">{hero.communityLine}</p>

                  <p className="lux-hero-muted max-w-[30rem] max-lg:sr-only border-l border-lux-gold/28 pl-[1.3125rem] md:pl-[1.55rem]">
                    {hero.seoSupportLine}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeTight}
                  className="relative mt-[clamp(1.125rem,3vw,2.25rem)] max-w-xl max-lg:mt-5 lg:mt-[clamp(1.5rem,3.5vw,2.25rem)]"
                >
                  <p className="lux-hero-annotation-body rounded-[10px] border border-white/[0.2] bg-white/[0.16] px-[1.125rem] py-[0.9375rem] text-left leading-[1.65] tracking-[0.017em] max-lg:text-[0.90625rem] max-lg:backdrop-blur-none lg:hidden">
                    {payment.summary}
                  </p>
                </motion.div>

                {/* Premium CTA cluster — separated for hierarchy */}
                <motion.div
                  variants={fadeTight}
                  className="relative mt-[clamp(1.5rem,4.25vw,2.75rem)] border-t border-white/[0.14] pt-[clamp(1.45rem,3.5vw,2.25rem)] max-lg:mt-7 max-lg:pt-7 lg:mt-[clamp(1.65rem,4.5vw,2.85rem)]"
                >
                  <p className="sr-only">Primary actions to request pricing or speak with sales</p>
                  <div className="flex w-full flex-col gap-3 max-lg:gap-[0.9375rem] lg:flex-nowrap lg:gap-[0.725rem] sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
                    <CtaButton
                      href={siteConfig.whatsAppUrl}
                      external
                      variant="whatsappOnDark"
                      size="lg"
                      leadingIcon={<WhatsAppIcon className="size-[1.1875rem] opacity-95" />}
                      className={cn(
                        "order-1 w-full min-h-[3.375rem] px-14 text-[0.9375rem] font-semibold tracking-[0.058em]",
                        "max-lg:shadow-[0_14px_40px_-28px_rgba(45,74,62,0.18)] shadow-[0_18px_56px_-32px_rgba(45,74,62,0.2),0_6px_22px_-16px_rgba(185,168,146,0.06)]",
                        "hover:shadow-[0_16px_48px_-28px_rgba(45,74,62,0.22)] hover:brightness-[1.02]",
                        "max-lg:backdrop-blur-none backdrop-blur-sm",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
                        "active:translate-y-px motion-reduce:active:translate-y-0 sm:w-auto sm:min-w-[16rem] lg:min-w-0 lg:flex-1",
                        "motion-safe:transition-[box-shadow,filter]",
                        "focus-visible:!ring-offset-[rgba(92,88,82,0.35)]",
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
                        "order-2 w-full min-h-[3.375rem] border border-white/[0.26] bg-white/[0.16] px-10 text-[0.90625rem] font-semibold tracking-[0.054em]",
                        "text-lux-paper/[0.96]",
                        "shadow-[inset_0_1px_0_rgba(253,252,249,0.45)] max-lg:backdrop-blur-none backdrop-blur-md",
                        "hover:border-white/[0.34] hover:bg-white/[0.22] hover:text-lux-paper hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-transparent",
                        "motion-safe:transition-[border-color,background-color,box-shadow,color]",
                        "active:translate-y-px motion-reduce:active:translate-y-0 sm:w-auto sm:flex-initial sm:min-h-[3.25rem] sm:px-12 lg:flex-1 lg:basis-[42%]",
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
            className="relative mt-[clamp(1.75rem,4.5vw,2.75rem)] hidden lg:flex lg:max-w-[min(42rem,100%)] lg:flex-row lg:items-end lg:justify-between lg:gap-8"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? {} : { opacity: 1, transition: { delay: 1.15, duration: 0.85, ease: easeLux } }}
            aria-hidden
          >
            <div className="flex min-w-0 items-center gap-4 pl-1">
              <span className="h-px w-12 shrink-0 bg-gradient-to-r from-transparent to-lux-paper/[0.38]" />
              {!reduceMotion ?
                <motion.span
                  className="truncate text-[10px] font-semibold uppercase tracking-[0.34em] text-lux-paper/40 md:text-[11px] md:tracking-[0.31em]"
                  {...scrollCue}
                >
                  Discover below
                </motion.span>
              : (
                <span className="truncate text-[10px] font-semibold uppercase tracking-[0.34em] text-lux-paper/40 md:text-[11px] md:tracking-[0.31em]">
                  Discover below
                </span>
              )}
            </div>
            {!reduceMotion ?
              <motion.div
                animate={{ opacity: [0.42, 0.62, 0.42], y: [0, 3, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-12 w-px shrink-0 self-end bg-gradient-to-b from-lux-gold/32 via-lux-paper/12 to-transparent"
                aria-hidden
              />
            : (
              <div className="h-10 w-[1px] shrink-0 self-end bg-gradient-to-b from-lux-gold/28 to-transparent" aria-hidden />
            )}
          </motion.div>
        </div>

        <aside
          className="relative z-[20] mx-auto mt-14 hidden max-w-[min(30rem,calc(100%-2rem))] flex-col lg:col-span-7 lg:mt-0 lg:flex xl:col-span-7"
          aria-label="Acquisition reference beside hero photography"
        >
          <div className="relative flex flex-col border-l border-white/22 pl-[clamp(1.375rem,2.75vw,2.25rem)] xl:pl-10">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-lux-paper/48 xl:text-[10.25px]">
              {croMessaging.heroAnnotationTitle}
            </p>
            <p className="mt-7 font-display text-[clamp(1.0625rem,1.05vw,1.25rem)] font-normal leading-[1.52] tracking-[-0.012em] text-lux-paper/[0.9] xl:max-w-[28rem] xl:leading-[1.48]">
              {payment.summary}
            </p>
            <dl className="mt-10 space-y-5 border-t border-white/14 pt-8 xl:mt-11 xl:space-y-[1.35rem]">
              {heroDesktopFacts.map(({ k, v }) => (
                <div key={k}>
                  <dt className="font-sans text-[9px] font-semibold uppercase tracking-[0.26em] text-lux-gold/75 xl:text-[9.25px]">
                    {k}
                  </dt>
                  <dd className="mt-2 font-sans text-[0.8125rem] font-normal leading-[1.5] tracking-[0.02em] text-lux-paper/78 xl:text-[0.84375rem]">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </Container>
    </section>
  );
}
