"use client";

import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { cn } from "@/lib/utils";

export function SkipLink() {
  const locale = useSiteLocale();
  const label = locale === "ar" ? "تخطي إلى المحتوى الرئيسي" : "Skip to main content";

  return (
    <a
      href="#main-content"
      className={cn(
        "fixed top-4 z-[100] -translate-y-24 rounded-sm bg-lux-ink px-4 py-2 text-sm font-medium text-lux-paper transition-transform focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-2",
        "start-4",
      )}
    >
      {label}
    </a>
  );
}
