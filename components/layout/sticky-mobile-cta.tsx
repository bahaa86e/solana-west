import type { SVGProps } from "react";
import Link from "next/link";

import { PhoneIcon } from "@/components/icons/phone";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { croMessaging } from "@/data/cro";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type BarProps = {
  className?: string;
};

function EnquiryGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

const waCell = cn(
  "flex min-h-[3.875rem] flex-[1.45] flex-col items-center justify-center gap-1.5 bg-gradient-to-b from-[#425850]/92 to-[#2c3834]/93 px-2.5 py-3.5 text-center",
  "text-lux-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_-12px_36px_-24px_rgba(18,38,30,0.2)] transition-[filter,background-color] duration-400 ease-luxury motion-reduce:transition-none",
  "active:brightness-[0.985] hover:brightness-[1.03] hover:backdrop-brightness-[1.01] motion-reduce:hover:brightness-100 motion-reduce:active:brightness-100",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lux-gold/[0.65]",
);

const altCell =
  "flex min-h-[3.875rem] min-w-[4.75rem] flex-1 flex-col items-center justify-center gap-2 bg-lux-ivory/96 px-2 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-lux-ink/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.48)] transition-[color,background-color] duration-400 ease-luxury motion-reduce:transition-none hover:bg-lux-paper/95 hover:text-lux-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lux-gold/[0.65]";

export function StickyMobileCtaBar({ className }: BarProps) {
  const tel = siteConfig.phone.replace(/\s/g, "");

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[55] border-t border-lux-gold/14 bg-gradient-to-t from-[#f4f2ed]/96 via-lux-paper/92 to-lux-paper/88 pb-safe-bottom shadow-[0_-14px_40px_-28px_rgba(28,26,23,0.08),inset_0_1px_0_rgba(252,250,247,0.55)] backdrop-blur-[18px] supports-[backdrop-filter]:bg-lux-paper/72 lg:hidden",
        className,
      )}
      role="navigation"
      aria-label="Private desk quick contact"
    >
      <div className="mx-auto flex max-w-content border-t border-transparent">
        <a
          href={siteConfig.whatsAppUrl}
          className={cn(waCell, "border-r border-white/[0.08]")}
          rel="noopener noreferrer"
          target="_blank"
          data-track="whatsapp_click"
          data-track-placement="sticky_mobile_whatsapp_primary"
        >
          <WhatsAppIcon className="size-[1.42rem] opacity-96" aria-hidden />
          <span className="flex flex-col items-center gap-0.5 leading-none">
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-lux-paper/[0.96]">
              {croMessaging.stickyWhatsAppLine}
            </span>
            <span className="text-[9.5px] font-medium uppercase tracking-[0.28em] text-lux-paper/62">
              {croMessaging.stickyWhatsAppSubline}
            </span>
          </span>
          <span className="sr-only">WhatsApp opens in a new tab</span>
        </a>
        <a
          href={`tel:${tel}`}
          className={cn(altCell, "border-r border-lux-ink/[0.06]")}
          data-track="phone_call_click"
          data-track-placement="sticky_mobile_call"
        >
          <PhoneIcon className="size-[1.125rem] text-lux-ink/72" aria-hidden />
          <span className="hidden xs:inline">{croMessaging.stickyCallLabel}</span>
          <span className="xs:hidden" aria-hidden>
            Tel
          </span>
          <span className="sr-only"> {siteConfig.phone}</span>
        </a>
        <Link href="/contact" className={altCell} data-track="cta_click" data-track-placement="sticky_mobile_contact_form">
          <EnquiryGlyph className="size-[1.125rem] text-lux-ink/68" />
          <span className="leading-snug">
            {croMessaging.stickyEnquiryLabel}
            <span className="max-[380px]:sr-only"> form</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
