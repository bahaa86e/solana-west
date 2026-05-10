"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localizedPathname } from "@/lib/i18n/paths";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { cn } from "@/lib/utils";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold/[0.55] focus-visible:ring-offset-2";

/** Premium EN ⇄ العربية toggle; preserves route twin via centralized path map */
export function LanguageSwitcher({ overDark }: { overDark?: boolean }) {
  const pathname = usePathname() ?? "/";
  const locale = useSiteLocale();
  const other = locale === "en" ? "ar" : "en";
  const href = localizedPathname(pathname, other);
  const label = locale === "en" ? "العربية" : "English";
  const suffix = locale === "en" ? "AR" : "EN";

  return (
    <Link
      href={href}
      hrefLang={other}
      rel="alternate"
      className={cn(
        focusRing,
        "group/lang inline-flex min-h-[2.25rem] items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] transition-[background-color,border-color,color] duration-[520ms] ease-luxury motion-reduce:transition-none",
        overDark ?
          [
            "border-white/[0.22] bg-white/[0.08] text-lux-paper/78",
            "hover:border-white/[0.32] hover:bg-white/[0.12] hover:text-lux-paper",
            "focus-visible:ring-offset-lux-ink/48",
          ]
        : [
            "border-lux-ink/[0.09] bg-white/[0.28] text-lux-ink/48",
            "hover:border-lux-ink/[0.14] hover:bg-white/[0.45] hover:text-lux-ink/[0.68]",
            "focus-visible:ring-offset-white",
          ],
      )}
      aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <span aria-hidden className={cn("font-sans text-[11px]", overDark ? "text-lux-paper/90" : "text-lux-ink/74")}>
        {suffix}
      </span>
      <span className={cn(locale === "en" ? "font-arabic" : "font-sans")}>{label}</span>
    </Link>
  );
}
