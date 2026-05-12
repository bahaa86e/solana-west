import { FaqAnswerParagraphs } from "@/components/faq/faq-answer-paragraphs";
import { SectionMain } from "@/components/layout/section-main";
import { JsonLd } from "@/components/seo/json-ld";
import { SOLANA_WEST_FAQ_EXPANDED_ITEMS } from "@/data/faq/solana-west-faq-expanded";
import {
  SOLANA_WEST_FAQ_SECTION_LABELS,
  SOLANA_WEST_FAQ_SECTION_ORDER,
} from "@/data/faq/solana-west-faq-expanded.types";
import { SOLANA_WEST_FAQ_SHARED_INTRO } from "@/data/faq/solana-west-faq";
import { faqPageSeo } from "@/data/seo/routes";
import { getSolanaWestFaqPageJsonLd } from "@/lib/schema/jsonld/faq-page";
import { buildPageMetadata } from "@/seo/build-metadata";
import Link from "next/link";

export const metadata = buildPageMetadata(faqPageSeo);

/** FAQPage answers must mirror visible `<dd>` text for schema accuracy. */
const faqJsonLdPayload = SOLANA_WEST_FAQ_EXPANDED_ITEMS.map(({ question, aiSnippet, answer }) => ({
  question,
  answer: `Snippet — ${aiSnippet}\n\n${answer}`,
}));

export default function FaqPage() {
  return (
    <SectionMain>
      <JsonLd data={getSolanaWestFaqPageJsonLd(faqJsonLdPayload)} />

      <article className="mx-auto max-w-readable" aria-labelledby="faq-page-heading">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">Answers</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1
            id="faq-page-heading"
            className="mt-lux-stack-xs max-w-[min(42ch,100%)] text-balance font-display text-display-xl text-lux-ink md:max-w-[min(48ch,100%)]"
          >
            Solana West FAQs: Prices, Payment Plan, Location & Villas
          </h1>
          <p className="lux-body mt-lux-stack-sm text-lux-ink/67 md:mt-lux-stack-md">{SOLANA_WEST_FAQ_SHARED_INTRO}</p>
        </header>

        {SOLANA_WEST_FAQ_SECTION_ORDER.map((sectionId) => {
          const pairs = SOLANA_WEST_FAQ_EXPANDED_ITEMS.map((item, globalIndex) => ({
            item,
            globalIndex,
          })).filter((x) => x.item.section === sectionId);
          if (pairs.length === 0) return null;

          return (
            <section
              key={sectionId}
              className="border-b border-lux-ink/[0.06] py-14 md:py-16"
              aria-labelledby={`faq-section-${sectionId}`}
            >
              <h2
                id={`faq-section-${sectionId}`}
                className="m-0 font-display text-lux-display-md font-medium tracking-[0.04em] text-lux-ink"
              >
                {SOLANA_WEST_FAQ_SECTION_LABELS[sectionId]}
              </h2>

              <dl className="m-0 mt-10">
                {pairs.map(({ item, globalIndex }) => (
                  <div
                    key={item.question}
                    id={`faq-${globalIndex}`}
                    className="scroll-mt-24 border-t border-lux-ink/[0.06] py-11 first:border-t-0 first:pt-0 md:scroll-mt-[5.75rem] md:py-12 [&:first-child]:md:pt-0"
                  >
                    <dt className="font-display text-lux-display-sm font-medium text-lux-ink">
                      {item.question}
                    </dt>
                    <dd className="m-0 mt-5 md:max-w-[52ch]">
                      <p className="m-0 text-[0.8125rem] leading-relaxed tracking-[0.06em] text-lux-ink/48">
                        Snippet — {item.aiSnippet}
                      </p>
                      <div className="mt-6">
                        <FaqAnswerParagraphs
                          text={item.answer}
                          classNameParagraph="font-normal text-[0.9375rem] leading-[1.76] tracking-[0.012em] text-lux-ink/72 md:text-base [&:not(:first-child)]:mt-4"
                        />
                      </div>
                      <p className="m-0 mt-6">
                        <Link
                          href={item.internalLink.href}
                          className="lux-body text-[0.875rem] text-lux-ink/82 underline decoration-lux-gold/52 underline-offset-4 transition hover:text-lux-ink"
                        >
                          {item.internalLink.label}
                        </Link>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </article>
    </SectionMain>
  );
}
