import { FaqAnswerParagraphs } from "@/components/faq/faq-answer-paragraphs";
import type { BlogArticleSection } from "@/data/blog/types";
import type { SectionTone } from "@/components/sections/section-shell";
import { SectionShell } from "@/components/sections/section-shell";

type Props = {
  docSlug: string;
  section: BlogArticleSection;
  index: number;
};

export function BlogArticleBodySection({ docSlug, section, index }: Props) {
  const tone: SectionTone = index % 2 === 0 ? "paper" : "sand";
  const HeadingTag = section.titleLevel;
  const sid = `${docSlug}-${section.id}`;

  if (section.type === "faq") {
    return (
      <SectionShell id={sid} aria-labelledby={`${sid}-h`} tone={tone} containerSize="wide">
        <div className="max-w-readable">
          <HeadingTag id={`${sid}-h`} className="m-0 font-display text-[1.6875rem] font-normal tracking-[-0.016em] text-lux-ink">
            {section.heading}
          </HeadingTag>
          {section.intro ?
            <p className="mt-6 text-[0.9375rem] font-normal leading-[1.75] text-lux-ink/64 md:text-base">{section.intro}</p>
          : null}
          <dl className="mt-12 space-y-10 border-t border-lux-ink/[0.065] pt-12 md:mt-14 md:pt-14">
            {section.items.map((item, i) => (
              <div key={`${sid}-faq-${i}`}>
                <dt className="font-display text-lg font-normal tracking-[-0.012em] text-lux-ink">{item.question}</dt>
                <dd className="m-0 mt-3">
                  <FaqAnswerParagraphs
                    text={item.answer}
                    classNameParagraph="text-[0.9375rem] font-normal leading-[1.76] text-lux-ink/72 md:text-base [&:not(:first-child)]:mt-3"
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell id={sid} aria-labelledby={`${sid}-h`} tone={tone} containerSize="wide">
      <div className="max-w-readable">
        <HeadingTag id={`${sid}-h`} className="m-0 font-display text-[1.6875rem] font-normal tracking-[-0.016em] text-lux-ink md:text-[1.9375rem]">
          {section.heading}
        </HeadingTag>
        <div className="mt-10 space-y-6 md:mt-12 md:space-y-7">
          {section.paragraphs.map((p, i) => (
            <p
              key={`${sid}-p-${i}`}
              className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.012em] text-lux-ink/72 md:text-base"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
