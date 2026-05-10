import Link from "next/link";

import { FaqAnswerParagraphs } from "@/components/faq/faq-answer-paragraphs";
import { SectionMain } from "@/components/layout/section-main";
import { JsonLd } from "@/components/seo/json-ld";
import { SOLANA_WEST_AR_FAQ_GROUPS, SOLANA_WEST_FAQ_SHARED_INTRO_AR } from "@/data/faq/solana-west-faq-ar";
import { faqPageSeoAr } from "@/data/seo/ar-routes-registry";
import { siteConfig } from "@/data/site";
import { englishPathToArabicPath } from "@/lib/i18n/paths";
import { getSolanaWestFaqPageJsonLd } from "@/lib/schema/jsonld/faq-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(faqPageSeoAr);

const faqJsonLdPayload = SOLANA_WEST_AR_FAQ_GROUPS.flatMap(({ items }) =>
  items.map(({ question, aiSnippet, answer }) => ({
    question,
    answer: `مقتطف — ${aiSnippet}\n\n${answer}`,
  })),
);

export default function ArabicFaqPage() {
  return (
    <SectionMain>
      <JsonLd
        data={getSolanaWestFaqPageJsonLd(faqJsonLdPayload, {
          path: faqPageSeoAr.path,
          locale: "ar",
        })}
      />

      <article className="mx-auto max-w-readable" aria-labelledby="ar-faq-heading">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">مرجع عربي</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1
            id="ar-faq-heading"
            className="mt-lux-stack-xs max-w-[min(44ch,100%)] text-balance font-display text-display-xl text-lux-ink md:max-w-[min(52ch,100%)]"
          >
            الأسئلة الشائعة — أسعار سولانا ويست وشروط الإصدار
          </h1>
          <p className="lux-body mt-lux-stack-sm text-lux-ink/67 md:mt-lux-stack-md">{SOLANA_WEST_FAQ_SHARED_INTRO_AR}</p>
        </header>

        {SOLANA_WEST_AR_FAQ_GROUPS.map((group) => (
          <section key={group.id} className="mt-lux-stack-xl border-b border-lux-ink/[0.05] pb-lux-stack-lg last:border-none">
            <h2 className="font-display text-2xl text-lux-ink md:text-[1.75rem]">{group.label}</h2>
            <dl className="mt-lux-stack-md space-y-lux-stack-lg">
              {group.items.map((item) => (
                <div key={item.question}>
                  <dt className="font-display text-lg text-lux-ink md:text-xl">{item.question}</dt>
                  <dd className="m-0 mt-3 text-[0.9375rem] text-lux-ink/72">
                    <p className="font-medium text-lux-ink/55">مقتطف — {item.aiSnippet}</p>
                    <FaqAnswerParagraphs text={item.answer} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}

        <p className="mt-lux-stack-xl text-[0.9rem] text-lux-ink/58">
          نسخة إنجليزية موسّعة ومفصَّلة موجودة على{" "}
          <Link
            href="/faq"
            hrefLang="en"
            rel="alternate"
            className="underline decoration-lux-gold/40 underline-offset-4 hover:text-lux-ink"
          >
            /faq
          </Link>{" "}
          لمن يفضّل القراءة بالإنجليزية؛ الروابط الداخلية داخل النسخة العربية تظل ضمن مسار `/ar`.
        </p>

        <div className="mt-8 rounded-[10px] border border-lux-ink/[0.06] bg-lux-paper px-6 py-6 text-[0.9rem] text-lux-ink/72">
          <p>
            هاتف:{" "}
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="underline decoration-lux-gold/35">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-2">
            نموذج عربي:{" "}
            <Link href={englishPathToArabicPath["/contact"]!} className="underline decoration-lux-gold/35">
              /ar/contact
            </Link>
          </p>
        </div>
      </article>
    </SectionMain>
  );
}
