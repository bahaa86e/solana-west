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
  "flex min-h-[3.875rem] flex-[1.45] flex-col items-center justify-center gap-2.5 bg-gradient-to-b from-[#3d5a4c]/96 to-[#24332c]/97 px-3 py-3.5 text-center",
  "text-lux-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_-18px_48px_-28px_rgba(6,26,22,0.42)] transition-[filter,background-color] duration-400 ease-luxury motion-reduce:transition-none",
  "active:brightness-[0.97] hover:brightness-[1.06] hover:backdrop-brightness-[1.02] motion-reduce:hover:brightness-100 motion-reduce:active:brightness-100",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lux-gold",
);

const altCell =
  "flex min-h-[3.875rem] min-w-[4.75rem] flex-1 flex-col items-center justify-center gap-2 bg-[#fcfbf9]/95 px-2 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-lux-ink/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-[color,background-color,transform] duration-400 ease-luxury motion-reduce:transition-none active:translate-y-px hover:bg-[#f0eae2]/92 hover:text-lux-ink motion-reduce:active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lux-gold motion-reduce:hover:translate-y-0";

export function StickyMobileCtaBar({ className }: BarProps) {
  const tel = siteConfig.phone.replace(/\s/g, "");

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[55] border-t border-lux-gold/22 bg-gradient-to-t from-[#f6f3ee]/97 via-lux-paper/94 to-lux-paper/90 pb-safe-bottom shadow-[0_-22px_56px_-32px_rgba(10,10,10,0.16),inset_0_1px_0_rgba(196,165,116,0.22)] backdrop-blur-[22px] supports-[backdrop-filter]:bg-lux-paper/76 lg:hidden",
        className,
      )}
      role="navigation"
      aria-label="Quick contact"
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
          <span className="flex flex-col items-center gap-1 leading-tight">
            <span className="text-[11.25px] font-semibold uppercase tracking-[0.24em] text-lux-paper/[0.96]">{croMessaging.stickyWhatsAppLine}</span>
            <span className="sr-only">WhatsApp opens in a new tab</span>
          </span>
        </a>
        <a
          href={`tel:${tel}`}
          className={cn(altCell, "border-r border-lux-ink/[0.06]")}
          data-track="phone_call_click"
          data-track-placement="sticky_mobile_call"
        >
          <PhoneIcon className="size-[1.125rem] text-lux-ink/72" aria-hidden />
          <span className="hidden xs:inline">Call</span>
          <span className="xs:hidden" aria-hidden>
            Tel
          </span>
          <span className="sr-only"> {siteConfig.phone}</span>
        </a>
        <Link href="/contact" className={altCell} data-track="cta_click" data-track-placement="sticky_mobile_contact_form">
          <EnquiryGlyph className="size-[1.125rem] text-lux-ink/68" />
          <span className="leading-snug">
            Enquiry
            <span className="max-[380px]:sr-only">
              {" "}
              form
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
