import { croInvestorAssurance } from "@/data/cro";

export function InvestorAssuranceStrip() {
  return (
    <section
      aria-label="Investment and developer context"
      className="rounded-[12px] border border-lux-ink/[0.06] bg-gradient-to-br from-white/40 via-lux-paper/80 to-[#e8e1d7]/70 p-[clamp(1.25rem,3.8vw,1.875rem)] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
    >
      <ul className="grid list-none gap-8 p-0 sm:grid-cols-3 sm:gap-10">
        {croInvestorAssurance.map((item) => (
          <li key={item.eyebrow} className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-lux-ink/42">{item.eyebrow}</p>
            <p className="mt-2.5 font-display text-[1.0625rem] font-normal tracking-[-0.012em] text-lux-ink/92">
              {item.title}
            </p>
            <p className="mt-2 text-[0.8125rem] font-normal leading-relaxed tracking-[0.015em] text-lux-ink/58 md:text-[0.84375rem]">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
