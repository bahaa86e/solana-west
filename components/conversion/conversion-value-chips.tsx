"use client";

import { useEditorialCopy } from "@/components/i18n/editorial-copy-context";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark" | "ivory";

type Props = {
  tone?: Tone;
  className?: string;
};

export function ConversionValueChips({ tone = "dark", className }: Props) {
  const { croCommercialChipLabels } = useEditorialCopy();
  const chip =
    tone === "ivory" ?
      "border border-[rgba(186,160,112,0.18)] bg-[rgba(255,255,255,0.58)] text-[10px] font-medium uppercase tracking-[0.14em] text-[#213459] backdrop-blur-[6px]"
    : tone === "dark" ?
      "border border-white/20 bg-white/10 text-[10px] font-medium uppercase tracking-[0.14em] text-lux-paper/85"
    : "border border-lux-ink/[0.08] bg-white text-[10px] font-medium uppercase tracking-[0.14em] text-lux-ink/62";

  return (
    <ul
      className={cn(
        "flex list-none flex-wrap gap-2.5 p-0 sm:gap-3.5",
        tone === "dark" ? "text-lux-paper/82" : tone === "ivory" ? "text-[#213459]" : "text-lux-ink/72",
        className,
      )}
      aria-label="Commercial terms for Solana West buyers"
    >
      {croCommercialChipLabels.map((label) => (
        <li key={label}>
          <span
            className={cn(
              "inline-flex rounded-full px-3.5 py-2.5 sm:px-4 sm:py-[0.55rem]",
              chip,
            )}
          >
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
