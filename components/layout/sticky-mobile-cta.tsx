import Link from "next/link";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type BarProps = {
  className?: string;
};

const itemClass =
  "flex min-h-[3.625rem] flex-1 flex-col items-center justify-center gap-1 bg-lux-paper/94 px-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-lux-ink/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-[color,background-color] duration-400 ease-luxury motion-reduce:transition-none hover:bg-[#ebe4d9]/75 hover:text-lux-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lux-gold";

export function StickyMobileCtaBar({ className }: BarProps) {
  const tel = siteConfig.phone.replace(/\s/g, "");

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[55] border-t border-lux-ink/[0.085] bg-lux-paper/92 pb-safe-bottom shadow-[0_-16px_42px_-26px_rgba(10,10,10,0.12),inset_0_1px_0_rgba(196,165,116,0.16)] backdrop-blur-[16px] supports-[backdrop-filter]:bg-lux-paper/78 lg:hidden",
        className,
      )}
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-content">
        <a
          href={`tel:${tel}`}
          className={cn(itemClass, "border-r border-lux-ink/[0.07]")}
          data-track="phone_call_click"
        >
          <span className="hidden xs:inline">Call</span>
          <span className="xs:hidden" aria-hidden>
            Tel
          </span>
          <span className="sr-only"> {siteConfig.phone}</span>
        </a>
        <a
          href={siteConfig.whatsAppUrl}
          className={cn(itemClass, "border-r border-lux-ink/[0.07]")}
          rel="noopener noreferrer"
          target="_blank"
          data-track="whatsapp_click"
        >
          <span>WhatsApp</span>
        </a>
        <Link href="/contact" className={itemClass} data-track="cta_click">
          Contact
        </Link>
      </div>
    </div>
  );
}
