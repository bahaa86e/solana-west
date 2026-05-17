"use client";

import Link from "next/link";

import { useEditorialCopy } from "@/components/i18n/editorial-copy-context";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { LuxuryFillImage } from "@/components/media/luxury-fill-image";
import { LuxuryImageShell } from "@/components/media/luxury-image-shell";
import { editorialRibbonAspect } from "@/lib/media/editorial-image-layout";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { CtaButton } from "@/components/ui/cta-button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { solanaWestMedia } from "@/data/media/solana-west";
import { localizedPathname } from "@/lib/i18n/paths";
import { homeSections } from "@/data/seo/home";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const { payment } = homeSections;

export function PaymentPlanSection() {
  const { croMessaging } = useEditorialCopy();
  const locale = useSiteLocale();
  const paymentPlanHref = localizedPathname("/payment-plan", locale);

  return (
    <SectionShell
      id="payment-plan"
      aria-labelledby="payment-heading"
      tone="paper"
      containerSize="wide"
      depth="lifted"
    >
      <div className="grid gap-section-gap xl:grid-cols-12 xl:items-start xl:gap-x-section-gap">
        <div className="xl:col-span-5">
          <SectionHeader
            id="payment-heading"
            eyebrow={payment.eyebrow}
            title={payment.title}
            kicker={<p className="font-normal">{payment.summary}</p>}
          />
        </div>
        <div className="mt-10 max-w-2xl space-y-8 border-t border-lux-ink/[0.08] pt-10 lg:max-w-[46rem] xl:col-span-7 xl:mt-0 xl:max-w-none xl:border-l xl:border-t-0 xl:pl-12 xl:pt-2">
          <ul className="space-y-5 text-[0.9375rem] font-normal leading-[1.76] tracking-[0.011em] text-lux-ink/79 md:text-base">
            {payment.bullets.map((line) => (
              <li key={line} className="relative pl-[1em] text-balance before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-[0.35em] before:bg-lux-gold/44">
                {line}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 border-t border-lux-gold/25 pt-8">
            <p className="max-w-xl text-[0.828125rem] font-normal leading-[1.74] tracking-[0.015em] text-lux-ink/58 md:text-[0.85rem]">
              {croMessaging.paymentSectionCue}
            </p>
            <CtaButton
              href={siteConfig.whatsAppUrl}
              external
              variant="whatsapp"
              size="lg"
              leadingIcon={<WhatsAppIcon className="size-[1.15rem]" />}
              className="w-full px-12 sm:inline-flex sm:w-auto sm:min-w-[16rem]"
              data-track="whatsapp_click"
              data-track-placement="home_payment_section_whatsapp"
            >
              {croMessaging.paymentSectionCta}
            </CtaButton>
            <p className="text-[0.765625rem] font-normal leading-relaxed tracking-[0.045em] text-lux-ink/48 md:text-[0.796875rem]">
              {croMessaging.paymentSectionCtaSub}
            </p>
            <p className="text-[0.8125rem] font-normal tracking-[0.02em] text-lux-ink/52 md:text-[0.84375rem]">
              <Link
                href={paymentPlanHref}
                className={cn(
                  "text-lux-ink/68 underline decoration-lux-ink/[0.12] underline-offset-[10px]",
                  "transition-colors duration-400 hover:text-lux-ink hover:decoration-lux-gold/45",
                )}
                data-track="cta_click"
                data-track-placement="home_payment_internal_plan"
              >
                {croMessaging.internalPaymentPlanLink}
              </Link>
              <span aria-hidden className="text-lux-ink/42">
                {locale === "ar" ? " — جدول تجاري مُنظَّم." : " — structured commercial schedule."}
              </span>
            </p>
          </div>
        </div>
      </div>

      <LuxuryImageShell
        hover="lift"
        frame="editorial"
        aspectClassName={cn(editorialRibbonAspect, "max-h-[min(14rem,40vw)] xl:max-h-[15rem]")}
        className="mt-[clamp(2.5rem,6vw,3.75rem)] xl:mt-[clamp(2.75rem,5.5vw,4rem)]"
        frameAccent={
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-lux-paper/[0.04] via-transparent to-transparent" aria-hidden />
        }
      >
        <LuxuryFillImage
          src={solanaWestMedia.paymentRibbon.src}
          alt={solanaWestMedia.paymentRibbon.alt}
          sizes="(max-width: 1280px) 100vw, min(1320px, 92vw)"
          crop="greenerySubject"
          treatment="editorial"
        />
      </LuxuryImageShell>
    </SectionShell>
  );
}
