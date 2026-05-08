import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { BlogIndexPageModel } from "@/data/blog/blog-index-model";

export function BlogIndexIntroSection({ model }: { model: BlogIndexPageModel }) {
  const { indexIntro, idPrefix } = model;
  const headingId = `${idPrefix}-index-heading`;

  return (
    <SectionShell id={`${idPrefix}-model`} aria-labelledby={headingId} tone="sand" containerSize="wide">
      <div className="max-w-readable">
        <SectionHeader id={headingId} eyebrow={indexIntro.eyebrow} title={indexIntro.title} />
        <div className="mt-14 space-y-6 md:mt-16">
          {indexIntro.paragraphs.map((p, i) => (
            <p
              key={`${idPrefix}-index-p-${i}`}
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
