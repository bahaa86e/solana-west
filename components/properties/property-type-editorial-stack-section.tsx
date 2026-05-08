import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { SectionTone } from "@/components/sections/section-shell";

type Block = {
  id: string;
  headingId: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
};

type Props = {
  block: Block;
  tone: SectionTone;
};

export function PropertyTypeEditorialStackSection({ block, tone }: Props) {
  return (
    <SectionShell id={block.id} aria-labelledby={block.headingId} tone={tone} containerSize="wide">
      <div className="max-w-readable">
        <SectionHeader id={block.headingId} eyebrow={block.eyebrow} title={block.title} />
        <div className="mt-14 space-y-6 md:mt-16">
          {block.paragraphs.map((p, i) => (
            <p
              key={`${block.id}-p-${i}`}
              className="text-[0.9375rem] font-normal leading-[1.75] tracking-[0.012em] text-lux-ink/74 md:text-base"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
