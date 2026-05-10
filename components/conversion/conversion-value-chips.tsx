import { croReferenceChipLabels } from "@/data/cro";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

type Props = {
  tone?: Tone;
  className?: string;
};

export function ConversionValueChips({ tone = "dark", className }: Props) {
  const chip =
    tone === "dark" ?
      "border border-white/[0.14] bg-white/[0.05] text-[10.5px] font-semibold uppercase tracking-[0.2em] text-lux-paper/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
    : "border border-lux-ink/[0.09] bg-white/[0.55] text-[10px] font-semibold uppercase tracking-[0.2em] text-lux-ink/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]";

  return (
    <ul
      className={cn(
        "flex list-none flex-wrap gap-2.5 p-0 sm:gap-3",
        tone === "dark" ? "text-lux-paper/82" : "text-lux-ink/72",
        className,
      )}
      aria-label="Reference commercial terms for underwriting"
    >
      {croReferenceChipLabels.map((label) => (
        <li key={label}>
          <span className={cn("inline-flex rounded-full px-3 py-2.5 sm:px-[0.85rem] sm:py-[0.5rem]", chip)}>{label}</span>
        </li>
      ))}
    </ul>
  );
}
