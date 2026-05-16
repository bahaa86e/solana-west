"use client";

import { motion, useReducedMotion } from "framer-motion";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { useEditorialCopy } from "@/components/i18n/editorial-copy-context";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { CtaButton } from "@/components/ui/cta-button";
import { homeSections } from "@/data/seo/home";
import { localizedPathname } from "@/lib/i18n/paths";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

import { homeHeroCardClassName, homeHeroH1ClassName } from "./home-hero-media";

const { hero, payment } = homeSections;

const easeLux = [0.22, 1, 0.36, 1] as const;

export function HomeHeroCard() {
  const { croCommercialFacts, croMessaging } = useEditorialCopy();
  const locale = useSiteLocale();
  const pricesHref = localizedPathname("/prices", locale);
  const heroFacts = [
    {
      k: locale === "ar" ? "مرجع" : "Starting price",
      v: croCommercialFacts.startingFrom,
    },
    {
      k: locale === "ar" ? "هيكل الدفع" : "Structure",
      v: `${croCommercialFacts.downPayment} · ${croCommercialFacts.installments}`,
    },
    { k: locale === "ar" ? "التسليم" : "Delivery", v: croCommercialFacts.delivery },
  ] as const;

  const reduceMotion = useReducedMotion();

  const fadeUp =
    reduceMotion ?
      { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: easeLux } },
      };

  return (
    <motion.article
      className="relative w-full max-w-[min(40rem,100%)] lg:max-w-[min(52rem,100%)]"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.055, delayChildren: 0.02 },
        },
      }}
    >
      <div className={homeHeroCardClassName}>
        <motion.div variants={fadeUp}>
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-lux-ink/45 lg:text-[0.6875rem] lg:tracking-[0.14em]">
            {hero.locationEyebrow}
          </p>
          <span className="mt-4 mb-6 block h-px max-w-[2.75rem] bg-lux-ink/[0.1]" aria-hidden />
          <h1 id="hero-heading" className={homeHeroH1ClassName}>
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

        <motion.p variants={fadeUp} className="mt-5 font-sans text-[0.90625rem] leading-[1.7] tracking-[0.01em] text-lux-ink/58 lg:hidden">
          {payment.summary}
        </motion.p>

        <motion.dl
          variants={fadeUp}
          className="mt-8 grid gap-6 border-t border-lux-ink/[0.06] pt-8 sm:grid-cols-3"
        >
          {heroFacts.map(({ k, v }) => (
            <div key={k}>
              <dt className="font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-lux-gold/[0.78]">{k}</dt>
              <dd className="mt-2 font-sans text-[0.8125rem] font-normal leading-[1.5] tracking-[0.015em] text-lux-ink/74">{v}</dd>
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
          <CtaButton
            href={pricesHref}
            variant="secondary"
            size="lg"
            className="w-full min-h-[3.25rem] sm:w-auto"
            data-track="cta_click"
            data-track-placement="home_hero_prices"
          >
            <span className="max-sm:hidden">{croMessaging.heroSecondaryCtaLong}</span>
            <span className="sm:hidden">{croMessaging.heroSecondaryCtaShort}</span>
          </CtaButton>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-lux-ink/38">
          {croMessaging.heroAnnotationTitle}
        </motion.p>
      </div>
    </motion.article>
  );
}
