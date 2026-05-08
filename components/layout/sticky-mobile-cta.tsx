import Link from "next/link";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type BarProps = {
  className?: string;
};

const itemClass =
  "flex min-h-[3.5rem] flex-1 flex-col items-center justify-center gap-1 bg-lux-paper/92 px-2 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-lux-ink/78 transition-[color,background-color] duration-400 ease-luxury hover:bg-lux-mist/60 hover:text-lux-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lux-gold";

export function StickyMobileCtaBar({ className }: BarProps) {
  const tel = siteConfig.phone.replace(/\s/g, "");

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[55] border-t border-lux-ink/[0.08] bg-lux-paper/90 pb-safe-bottom backdrop-blur-[14px] supports-[backdrop-filter]:bg-lux-paper/78 lg:hidden",
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
