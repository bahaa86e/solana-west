import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import type { PropertyExperienceModel } from "@/data/properties/property-type-experience";

export function PropertyTypeFeaturesSection({ model }: { model: PropertyExperienceModel }) {
  const { slug, keyFeatures } = model;
  const eyebrow = "Composition";
  const title = "Key features & positioning";

  return (
    <SectionShell
      id={`property-${slug}-features`}
      aria-labelledby={`property-${slug}-features-heading`}
      tone="sand"
      containerSize="wide"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <SectionHeader id={`property-${slug}-features-heading`} eyebrow={eyebrow} title={title} />
          <p className="mt-8 max-w-sm text-[0.9375rem] font-normal leading-[1.74] tracking-[0.012em] text-lux-ink/58 md:mt-9 md:text-base">
            Operational facts drawn from masterplan scope — not a substitute for desk-issued quotations or condominium bylaws.
          </p>
        </div>
        <ul className="flex flex-col gap-0 lg:col-span-8">
          {keyFeatures.map((line, index) => (
            <li
              key={`${slug}-feature-${index}`}
              className="border-t border-lux-ink/[0.07] py-6 text-[0.9375rem] font-normal leading-[1.74] tracking-[0.014em] text-lux-ink/78 first:border-t-0 first:pt-0 md:flex md:gap-10 md:text-base lg:gap-14"
            >
              <span
                className="mb-2 block shrink-0 font-display text-[0.9375rem] tabular-nums text-lux-ink/32 md:mb-0 md:w-[2.75rem]"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
