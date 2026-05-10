"use client";

import { usePathname } from "next/navigation";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { croAria } from "@/data/cro";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/**
 * Editorial FAB — above sticky mobile CTA (`z-[55]`).
 * Neutral outer pulse + gentle shadow; honours `prefers-reduced-motion`.
 */
export function WhatsAppFloatingButton({ className }: Props) {
  const pathname = usePathname() ?? "/";
  /** Home (EN/AR): sticky bar carries primary contact; hide FAB to reduce overlap. */
  const hideFabOnSmallHome = pathname === "/" || pathname === "/ar";

  return (
    <a
      href={siteConfig.whatsAppUrl}
      className={cn(
        "fixed z-[56] flex size-[3.75rem] items-center justify-center outline-none max-lg:bottom-[calc(6.5rem+env(safe-area-inset-bottom,0px))] max-lg:right-[max(1rem,env(safe-area-inset-right,0px))] lg:bottom-11 lg:right-12 lg:size-[3.625rem] xl:bottom-12 xl:right-12 max-lg:size-[3.375rem]",
        hideFabOnSmallHome && "max-lg:hidden",
        "transition-[opacity,filter] duration-[420ms] ease-luxury motion-reduce:transition-none active:opacity-[0.92] motion-reduce:active:opacity-100",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-lux-paper",
        className,
      )}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={croAria.whatsappPrivateDesk}
      data-track="whatsapp_click"
    >
      <span
        className={cn(
          "relative flex size-full items-center justify-center rounded-full",
          "border border-lux-ink/[0.08] bg-lux-paper text-[#25D366]",
          "shadow-[0_6px_20px_-12px_rgba(45,42,37,0.09)] max-lg:shadow-[0_4px_14px_-8px_rgba(45,42,37,0.07)]",
          "transition-[color,box-shadow] duration-[400ms] ease-luxury motion-reduce:transition-none",
          "hover:shadow-[0_8px_22px_-12px_rgba(45,42,37,0.11)] motion-reduce:hover:shadow-none",
        )}
        aria-hidden
      >
        <WhatsAppIcon className="relative z-[1] size-[1.5rem] max-lg:size-[1.36rem]" aria-hidden />
      </span>
    </a>
  );
}
