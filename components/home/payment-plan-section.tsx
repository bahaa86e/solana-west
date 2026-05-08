import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { homeSections } from "@/data/seo/home";

const { payment } = homeSections;

export function PaymentPlanSection() {
  return (
    <SectionShell
      id="payment-plan"
      aria-labelledby="payment-heading"
      tone="paper"
      containerSize="wide"
    >
      <SectionHeader
        id="payment-heading"
        eyebrow={payment.eyebrow}
        title={payment.title}
        kicker={<p className="font-normal">{payment.summary}</p>}
      />
      <ul className="mt-14 max-w-2xl space-y-4 border-t border-lux-ink/[0.08] pt-10 text-[0.9375rem] font-normal leading-[1.75] tracking-[0.01em] text-lux-ink/78 md:mt-16 md:text-base lg:max-w-[46rem]">
        {payment.bullets.map((line) => (
          <li key={line} className="relative pl-[1em] text-balance before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-[0.35em] before:bg-lux-gold/42">
            {line}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
