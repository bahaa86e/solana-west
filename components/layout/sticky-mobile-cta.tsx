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
  "flex min-h-[3.5rem] flex-[1.4] flex-col items-center justify-center gap-1 bg-gradient-to-b from-[#f0f6f3] to-[#e4ece8] px-2 py-2.5 text-center",
  "text-[#2a4038] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-[filter,background-color] duration-400 ease-luxury motion-reduce:transition-none",
  "hover:bg-[#ecf3ef] active:opacity-[0.96] motion-reduce:hover:brightness-100",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lux-gold/[0.5]",
);

const altCell = cn(
  "flex min-h-[3.5rem] min-w-[4.5rem] flex-1 flex-col items-center justify-center gap-1.5 bg-lux-paper px-2 py-2.5 text-center",
  "text-[10px] font-semibold uppercase tracking-[0.18em] text-lux-ink/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-[color,background-color] duration-400 ease-luxury motion-reduce:transition-none hover:bg-[#f7f5f1] hover:text-lux-ink",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lux-gold/[0.5]",
);

export function StickyMobileCtaBar({ className }: BarProps) {
  const tel = siteConfig.phone.replace(/\s/g, "");

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[55] border-t border-lux-ink/[0.06] bg-lux-paper/97 pb-safe-bottom shadow-[0_-6px_24px_-16px_rgba(45,42,37,0.06)] backdrop-blur-[12px] supports-[backdrop-filter]:bg-lux-paper/88 lg:hidden",
        className,
      )}
      role="navigation"
      aria-label="Private desk quick contact"
    >
      <div className="mx-auto flex max-w-content divide-x divide-lux-ink/[0.06]">
        <a
          href={siteConfig.whatsAppUrl}
          className={waCell}
          rel="noopener noreferrer"
          target="_blank"
          data-track="whatsapp_click"
          data-track-placement="sticky_mobile_whatsapp_primary"
        >
          <WhatsAppIcon className="size-[1.28rem] text-[#2d7a4e]" aria-hidden />
          <span className="flex flex-col items-center gap-0.5 leading-none">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lux-ink/88">
              {croMessaging.stickyWhatsAppLine}
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-lux-ink/48">
              {croMessaging.stickyWhatsAppSubline}
            </span>
          </span>
          <span className="sr-only">WhatsApp opens in a new tab</span>
        </a>
        <a
          href={`tel:${tel}`}
          className={altCell}
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
