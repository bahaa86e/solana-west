import { croCommercialFacts } from "@/data/cro";
import { cn } from "@/lib/utils";

const items = [
  croCommercialFacts.startingFrom,
  croCommercialFacts.downPayment,
  croCommercialFacts.installments,
  croCommercialFacts.delivery,
] as const;

type Tone = "light" | "dark";

type Props = {
  tone?: Tone;
  className?: string;
};

export function ConversionValueChips({ tone = "dark", className }: Props) {
  const chip =
    tone === "dark" ?
      "border border-white/[0.14] bg-white/[0.05] text-[11px] font-medium uppercase tracking-[0.2em] text-lux-paper/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
    : "border border-lux-ink/[0.09] bg-white/[0.55] text-[10.5px] font-semibold uppercase tracking-[0.2em] text-lux-ink/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]";

  return (
    <ul
      className={cn(
        "flex list-none flex-wrap gap-2.5 p-0 sm:gap-3",
        tone === "dark" ? "text-lux-paper/80" : "text-lux-ink/70",
        className,
      )}
      aria-label="Reference commercial terms"
    >
      {items.map((label) => (
        <li key={label}>
          <span className={cn("inline-flex rounded-full px-3 py-2 sm:px-[0.85rem] sm:py-[0.45rem]", chip)}>
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
