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

export function ContactEditorialBlockSection({ block, tone }: { block: Block; tone: SectionTone }) {
  return (
    <SectionShell id={block.id} aria-labelledby={block.headingId} tone={tone} containerSize="wide">
      <div className="max-w-readable xl:max-w-[44rem]">
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
