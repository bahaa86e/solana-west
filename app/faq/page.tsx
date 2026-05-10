import { FaqAnswerParagraphs } from "@/components/faq/faq-answer-paragraphs";
import { SectionMain } from "@/components/layout/section-main";
import { JsonLd } from "@/components/seo/json-ld";
import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import { faqPageSeo } from "@/data/seo/routes";
import { getSolanaWestFaqPageJsonLd } from "@/lib/schema/jsonld/faq-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(faqPageSeo);

export default function FaqPage() {
  return (
    <SectionMain>
      <JsonLd data={getSolanaWestFaqPageJsonLd(solanaWestFaqCanonical)} />

      <article className="mx-auto max-w-readable" aria-labelledby="faq-page-heading">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">Answers</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1
            id="faq-page-heading"
            className="mt-lux-stack-xs max-w-[min(42ch,100%)] text-balance font-display text-display-xl text-lux-ink md:max-w-[min(48ch,100%)]"
          >
            Solana West FAQs — pricing, payments, delivery & location
          </h1>
          <p className="lux-body mt-lux-stack-sm text-lux-ink/67 md:mt-lux-stack-md">{SOLANA_WEST_FAQ_SHARED_INTRO}</p>
        </header>

        <dl className="m-0">
          {solanaWestFaqCanonical.map((item, index) => (
            <div
              key={item.question}
              id={`faq-${index}`}
              className="scroll-mt-24 border-b border-lux-ink/[0.06] py-12 md:scroll-mt-[5.75rem] md:py-14"
            >
              <dt className="font-display text-lux-display-sm font-medium text-lux-ink">
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
