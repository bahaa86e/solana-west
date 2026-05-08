import { FaqAnswerParagraphs } from "@/components/faq/faq-answer-paragraphs";
import { SectionMain } from "@/components/layout/section-main";
import { JsonLd } from "@/components/seo/json-ld";
import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import { faqPageSeo } from "@/data/seo/routes";
import { getSolanaWestFaqPageJsonLd } from "@/schemas/faq-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(faqPageSeo);

export default function FaqPage() {
  return (
    <SectionMain>
      <JsonLd data={getSolanaWestFaqPageJsonLd(solanaWestFaqCanonical)} />

      <article className="mx-auto max-w-[44rem]" aria-labelledby="faq-page-heading">
        <header className="border-b border-lux-ink/[0.06] pb-12 md:pb-14">
          <p className="font-sans uppercase text-micro text-lux-ink/46">Answers</p>
          <div className="mt-7 h-px w-9 bg-lux-gold/42 md:mt-8" aria-hidden />
          <h1
            id="faq-page-heading"
            className="mt-6 max-w-[26ch] font-display text-display-lg text-balance text-lux-ink md:mt-7"
          >
            Frequently asked questions
          </h1>
          <p className="mt-8 max-w-readable text-[0.9375rem] leading-[1.75] tracking-[0.012em] text-lux-ink/64 md:text-base">
            {SOLANA_WEST_FAQ_SHARED_INTRO}
          </p>
        </header>

        <dl className="m-0">
          {solanaWestFaqCanonical.map((item, index) => (
            <div
              key={item.question}
              id={`faq-${index}`}
              className="scroll-mt-24 border-b border-lux-ink/[0.06] py-12 md:scroll-mt-[5.75rem] md:py-14"
            >
              <dt className="font-display text-[1.25rem] font-normal tracking-[-0.012em] text-lux-ink md:text-[1.375rem]">
                {item.question}
              </dt>
              <dd className="m-0 mt-5 md:max-w-[52ch]">
                <FaqAnswerParagraphs
                  text={item.answer}
                  classNameParagraph="font-normal text-[0.9375rem] leading-[1.76] tracking-[0.012em] text-lux-ink/72 md:text-base [&:not(:first-child)]:mt-4"
                />
              </dd>
            </div>
          ))}
        </dl>
      </article>
    </SectionMain>
  );
}
