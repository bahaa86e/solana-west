"use client";

import Link from "next/link";

import { FaqAnswerParagraphs } from "@/components/faq/faq-answer-paragraphs";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { CtaButton } from "@/components/ui/cta-button";
import { homeSections } from "@/data/seo/home";
import { localizedPathname } from "@/lib/i18n/paths";

const { faqPreview } = homeSections;

export function FaqPreviewSection() {
  const locale = useSiteLocale();
  const faqHref = localizedPathname("/faq", locale);
  const openFaq = locale === "ar" ? "فتح الأسئلة" : "Open FAQ";
  const fullFaq = locale === "ar" ? "قائمة الأسئلة كاملة" : "Full FAQ list";

  return (
    <SectionShell
      id="faq-preview"
      aria-labelledby="faq-preview-heading"
      tone="sand"
      containerSize="wide"
      accentRim
    >
      <div className="flex flex-col gap-section-gap md:flex-row md:items-end md:justify-between md:gap-x-section-gap lg:gap-x-[clamp(3rem,6vw,4.5rem)]">
        <div className="max-w-xl md:pb-2">
          <SectionHeader
            id="faq-preview-heading"
            eyebrow={faqPreview.eyebrow}
            title={faqPreview.title}
            kicker={<p className="font-normal text-lux-ink/64">{faqPreview.intro}</p>}
          />
        </div>
        <div className="flex w-full shrink-0 flex-col gap-6 sm:flex-row sm:items-center sm:justify-end md:w-auto lg:gap-8">
          <CtaButton href={faqHref} variant="secondary" size="lg" className="min-w-[12.5rem] px-12">
            {openFaq}
          </CtaButton>
          <Link
            href={faqHref}
            className="text-[0.9375rem] font-normal tracking-[0.01em] text-lux-ink/52 underline decoration-lux-ink/[0.18] decoration-1 underline-offset-[10px] transition-colors duration-400 hover:text-lux-ink hover:decoration-lux-gold/48"
          >
            {fullFaq}
          </Link>
        </div>
      </div>

      <dl className="mt-section-block grid gap-12 border-t border-lux-ink/[0.075] pt-12 md:mt-section-gap md:grid-cols-2 md:gap-x-section-gap md:gap-y-14 md:pt-16 xl:gap-x-20">
        {faqPreview.items.map((item) => (
          <div key={item.question}>
            <dt className="font-display text-lg font-normal tracking-[-0.012em] text-lux-ink md:text-xl">
              {item.question}
            </dt>
            <dd className="m-0 mt-3 text-[0.9375rem] tracking-[0.012em] text-lux-ink/72">
              <FaqAnswerParagraphs
                text={item.answer}
                classNameParagraph="font-normal leading-[1.75] text-lux-ink/72 [&:not(:first-child)]:mt-3"
              />
            </dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
