"use client";

import { motion, useReducedMotion } from "framer-motion";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { useEditorialCopy } from "@/components/i18n/editorial-copy-context";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { CtaButton } from "@/components/ui/cta-button";
import { homeSections } from "@/data/seo/home";
import { localizedPathname } from "@/lib/i18n/paths";
import { siteConfig } from "@/data/site";

import {
  homeHeroAnnotationClassName,
  homeHeroContentClassName,
  homeHeroEyebrowClassName,
  homeHeroFactChipClassName,
  homeHeroFactLabelClassName,
  homeHeroFactValueClassName,
  homeHeroH1ClassName,
  homeHeroLeadClassName,
  homeHeroPaymentClassName,
  homeHeroRuleClassName,
  homeHeroSupportClassName,
  homeHeroZoneCommercialClassName,
  homeHeroZoneCtaClassName,
  homeHeroZoneNarrativeClassName,
} from "./home-hero-media";

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
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: easeLux } },
      };

  return (
    <motion.article
      className={homeHeroContentClassName}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.07, delayChildren: 0.05 },
        },
      }}
    >
      <motion.div variants={fadeUp} className="flex flex-col">
        <p className={homeHeroEyebrowClassName}>{hero.locationEyebrow}</p>
        <span className={homeHeroRuleClassName} aria-hidden />
        <h1 id="hero-heading" className={homeHeroH1ClassName}>
          {hero.h1}
        </h1>
      </motion.div>

      <motion.div variants={fadeUp} className={homeHeroZoneNarrativeClassName}>
        <p className={homeHeroLeadClassName}>{hero.communityLine}</p>
        <p className={homeHeroSupportClassName}>{hero.seoSupportLine}</p>
      </motion.div>

      <motion.div variants={fadeUp} className={homeHeroZoneCommercialClassName}>
        <dl className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
          {heroFacts.map(({ k, v }) => (
            <div key={k} className={homeHeroFactChipClassName}>
              <dt className={homeHeroFactLabelClassName}>{k}</dt>
              <dd className={homeHeroFactValueClassName}>{v}</dd>
            </div>
          ))}
        </dl>
        <p className={homeHeroPaymentClassName}>{payment.summary}</p>
      </motion.div>

      <motion.div variants={fadeUp} className={homeHeroZoneCtaClassName}>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
          <CtaButton
            href={siteConfig.whatsAppUrl}
            external
            variant="whatsapp"
            size="lg"
            leadingIcon={<WhatsAppIcon className="size-[1.125rem]" />}
            className="w-full min-h-[3.25rem] px-12 sm:w-auto sm:min-w-[15.5rem]"
            data-track="whatsapp_click"
            data-track-placement="home_hero_whatsapp"
          >
            {croMessaging.heroPrimaryCta}
          </CtaButton>
          <CtaButton
            href={pricesHref}
            variant="inverse"
            size="lg"
            className="w-full min-h-[3.25rem] border-lux-paper/20 sm:w-auto sm:min-w-[12.5rem] focus-visible:ring-offset-lux-ink/40"
            data-track="cta_click"
            data-track-placement="home_hero_prices"
          >
            <span className="max-sm:hidden">{croMessaging.heroSecondaryCtaLong}</span>
            <span className="sm:hidden">{croMessaging.heroSecondaryCtaShort}</span>
          </CtaButton>
        </div>
        <p className={homeHeroAnnotationClassName}>{croMessaging.heroAnnotationTitle}</p>
      </motion.div>
    </motion.article>
  );
}
