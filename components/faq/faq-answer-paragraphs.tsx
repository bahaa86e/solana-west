export type FaqAnswerParagraphsProps = {
  /** Canonical answer string from FAQ data (paragraphs separated by blank lines). */
  text: string;
  classNameParagraph?: string;
};

/**
 * Mirrors visible FAQ copy for schema alignment — `\n\n` becomes sibling `<p>` nodes.
 */
export function FaqAnswerParagraphs({ text, classNameParagraph }: FaqAnswerParagraphsProps) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((s) => s.trim())
    .filter(Boolean);
  const base =
    classNameParagraph ??
    "font-normal leading-[1.76] tracking-[0.012em] text-lux-ink/72 [&:not(:first-child)]:mt-3";

  if (paragraphs.length === 0) {
    return null;
  }

  return paragraphs.map((p, i) => (
    <p key={`faq-a-${i}`} className={base}>
      {p}
    </p>
  ));
}
