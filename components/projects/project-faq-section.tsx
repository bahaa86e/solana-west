import Link from "next/link";

import { FaqAnswerParagraphs } from "@/components/faq/faq-answer-paragraphs";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { CtaButton } from "@/components/ui/cta-button";
import type { ResolvedProjectPage } from "@/data/projects/types";

export function ProjectFaqSection({ page }: { page: ResolvedProjectPage }) {
  const slug = page.entry.slug;
  const { faq } = page.content;

  return (
    <SectionShell
      id={`${slug}-faq`}
      aria-labelledby={`${slug}-faq-heading`}
      tone="paper"
      containerSize="wide"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16 lg:gap-24">
        <div className="max-w-xl md:pb-2">
          <SectionHeader
            id={`${slug}-faq-heading`}
            eyebrow={faq.eyebrow}
            title={faq.title}
            kicker={<p className="font-normal text-lux-ink/64">{faq.intro}</p>}
          />
        </div>
        <div className="flex w-full shrink-0 flex-col gap-6 sm:flex-row sm:items-center sm:justify-end md:w-auto lg:gap-8">
          <CtaButton href={faq.fullFaqHref} variant="secondary" size="lg" className="min-w-[12.5rem] px-12">
            Full FAQ index
          </CtaButton>
          <Link
            href={faq.fullFaqHref}
            className="text-[0.9375rem] font-normal tracking-[0.01em] text-lux-ink/52 underline decoration-lux-ink/[0.18] decoration-1 underline-offset-[10px] transition-colors duration-400 hover:text-lux-ink hover:decoration-lux-gold/48"
          >
            Open dedicated FAQ route
          </Link>
        </div>
      </div>

      <dl className="mt-14 grid gap-12 border-t border-lux-ink/[0.07] pt-12 md:mt-16 md:grid-cols-2 md:gap-x-14 md:gap-y-14 md:pt-16 xl:gap-x-20">
        {faq.items.map((item, index) => (
          <div key={`${slug}-faq-preview-${index}`} id={`${slug}-faq-${index}`} className="scroll-mt-28">
            <dt className="font-display text-lg font-normal tracking-[-0.012em] text-lux-ink md:text-xl">
              {item.question}
            </dt>
            <dd className="m-0 mt-3 text-[0.9375rem] tracking-[0.012em] text-lux-ink/72 md:text-base">
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
