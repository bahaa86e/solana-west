"use client";

import { motion, useReducedMotion } from "framer-motion";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { useEditorialCopy } from "@/components/i18n/editorial-copy-context";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta-button";
import { homeSections } from "@/data/seo/home";
import { localizedPathname } from "@/lib/i18n/paths";
import { solanaWestCanonicalFiles, solanaWestMedia } from "@/data/media/solana-west";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const { hero, payment } = homeSections;

const easeLux = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const { croCommercialFacts, croMessaging } = useEditorialCopy();
  const locale = useSiteLocale();
  const pricesHref = localizedPathname("/prices", locale);
  const heroFacts = [
    {
      k: locale === "ar" ? "مرجع" : "Reference",
      v: croCommercialFacts.startingFrom,
    },
    {
      k: locale === "ar" ? "هيكل الدفع" : "Structure",
      v: `${croCommercialFacts.downPayment} · ${croCommercialFacts.installments}`,
    },
    { k: locale === "ar" ? "التسليم" : "Handover", v: croCommercialFacts.delivery },
  ] as const;

  const reduceMotion = useReducedMotion();

  const fadeUp =
    reduceMotion ?
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
        "overflow-hidden bg-[#efeae2]",
      )}
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <LuxuryFillImage
          src={solanaWestMedia.hero.src}
          mobileSrc={solanaWestCanonicalFiles.heroDaylightMobile}
          alt={solanaWestMedia.hero.alt}
          sizes="100vw"
          priority
          quality={92}
          filmGrade={false}
          imgClassName={cn(
            "object-cover motion-reduce:brightness-100 motion-reduce:saturate-100",
            "brightness-[1.085] saturate-[1.035] contrast-[0.982]",
            "max-lg:min-h-[104%] max-lg:object-[center_30%] lg:object-[58%_42%] xl:object-[56%_40%]",
          )}
        />
        {/* Minimal veil — daylight, not cinematic grading */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fdfcfa]/45 via-transparent to-[#f5f0e6]/35" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-[#faf7f2]/85 via-[#fdfcfa]/20 to-transparent" />
      </div>

      <Container
        as="div"
        size="wide"
        className={cn(
          "relative z-[20] mx-auto flex min-h-[100dvh] w-full flex-col",
          "supports-[height:100svh]:min-h-[100svh]",
          "justify-end pb-[max(clamp(2.5rem,8vw,5rem),env(safe-area-inset-bottom,0px))] max-lg:pb-[max(5.75rem,calc(env(safe-area-inset-bottom,0px)+5rem))] lg:justify-center lg:pb-[clamp(2.25rem,5vh,3.75rem)]",
          "pt-[clamp(5.5rem,calc(env(safe-area-inset-top,0px)+5.25rem),7.25rem)] max-lg:pt-[clamp(4.85rem,calc(env(safe-area-inset-top,0px)+4.5rem),6rem)] lg:pt-[clamp(5.75rem,min(11vh,6.5rem),6.5rem)]",
        )}
      >
        <motion.article
          className="relative w-full max-w-[min(40rem,100%)] lg:max-w-[min(52rem,100%)]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.07, delayChildren: 0.04 },
            },
          }}
        >
          <div
            className={cn(
              "rounded-[6px] border border-lux-ink/[0.08] bg-[#fdfcfa]/[0.97] px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(1.35rem,3.8vw,2.25rem)]",
              "shadow-lux-soft",
            )}
          >
            <motion.div variants={fadeUp}>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-lux-ink/45 lg:text-[0.6875rem] lg:tracking-[0.14em]">
                {hero.locationEyebrow}
              </p>
              <span className="mt-4 mb-6 block h-px max-w-[2.75rem] bg-lux-ink/[0.1]" aria-hidden />
              <h1
                id="hero-heading"
                className={cn(
                  "max-w-[min(22ch,100%)] text-balance font-display font-medium text-lux-ink",
                  "text-[clamp(2rem,2.4vw+0.92rem,2.875rem)] leading-[1.08] tracking-[-0.026em]",
                )}
              >
                {hero.h1}
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-[clamp(1rem,2.5vw,1.5rem)] space-y-[clamp(0.75rem,2vw,1.125rem)]">
              <p className="max-w-[min(36rem,100%)] font-sans text-lux-lead font-normal leading-[1.66] tracking-[0.006em] text-lux-ink/[0.78]">
                {hero.communityLine}
              </p>
              <p className="hidden max-w-[34rem] border-l border-lux-gold/[0.28] pl-4 font-sans text-lux-muted font-normal leading-[1.7] tracking-[0.01em] text-lux-ink/55 lg:block lg:pl-5">
                {hero.seoSupportLine}
              </p>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-5 lg:hidden font-sans text-[0.90625rem] leading-[1.7] tracking-[0.01em] text-lux-ink/58">
              {payment.summary}
            </motion.p>

            <motion.dl
              variants={fadeUp}
              className="mt-8 grid gap-6 border-t border-lux-ink/[0.06] pt-8 sm:grid-cols-3"
            >
              {heroFacts.map(({ k, v }) => (
                <div key={k}>
                  <dt className="font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-lux-gold/[0.78]">
                    {k}
                  </dt>
                  <dd className="mt-2 font-sans text-[0.8125rem] font-normal leading-[1.5] tracking-[0.015em] text-lux-ink/74">
                    {v}
                  </dd>
                </div>
              ))}
            </motion.dl>

            <motion.p variants={fadeUp} className="mt-6 hidden font-sans text-[0.9375rem] leading-[1.68] tracking-[0.01em] text-lux-ink/65 lg:block">
              {payment.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
              <CtaButton
                href={siteConfig.whatsAppUrl}
                external
                variant="whatsapp"
                size="lg"
                leadingIcon={<WhatsAppIcon className="size-[1.125rem]" />}
                className="w-full min-h-[3.25rem] px-12 sm:w-auto sm:min-w-[15rem]"
                data-track="whatsapp_click"
                data-track-placement="home_hero_whatsapp"
              >
                {croMessaging.heroPrimaryCta}
              </CtaButton>
              <CtaButton href={pricesHref} variant="secondary" size="lg" className="w-full min-h-[3.25rem] sm:w-auto" data-track="cta_click" data-track-placement="home_hero_prices">
                <span className="max-sm:hidden">{croMessaging.heroSecondaryCtaLong}</span>
                <span className="sm:hidden">{croMessaging.heroSecondaryCtaShort}</span>
              </CtaButton>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-8 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-lux-ink/38">
              {croMessaging.heroAnnotationTitle}
            </motion.p>
          </div>
        </motion.article>
      </Container>
    </section>
  );
}
