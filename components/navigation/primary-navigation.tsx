"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { PhoneIcon } from "@/components/icons/phone";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { useHeaderAppearance } from "@/components/layout/header-appearance";
import { CtaButton } from "@/components/ui/cta-button";
import { croMessaging } from "@/data/cro";
import { primaryNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function primaryNavHrefActive(pathname: string, href: string): boolean {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  if (pathname === href) return true;
  return pathname.startsWith(`${href}/`);
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold/[0.55] focus-visible:ring-offset-2";

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname() ?? "";
  const active = primaryNavHrefActive(pathname, href);
  const overDark = useHeaderAppearance() === "overDark";

  return (
    <Link
      href={href}
      className={cn(
        focusRing,
        "group/nav relative whitespace-nowrap rounded-[999px]",
        overDark ?
          [
            "-mx-px focus-visible:ring-offset-lux-ink/55",
            "px-[0.9rem] py-[0.5875rem] text-[11px] font-normal uppercase tracking-[0.32em]",
            "text-lux-paper/56 transition-[color,background-color,box-shadow] duration-[560ms] ease-luxury motion-reduce:transition-none",
            "motion-safe:hover:bg-white/[0.08] hover:text-lux-paper/[0.88]",
            "motion-safe:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
            active && "text-lux-paper/93",
          ]
        : [
            "-mx-px focus-visible:ring-offset-white/65",
            "px-[0.9rem] py-[0.5875rem] text-[11px] font-normal uppercase tracking-[0.32em]",
            "text-lux-ink/38 transition-[color,background-color,box-shadow] duration-[560ms] ease-luxury motion-reduce:transition-none",
            "motion-safe:hover:bg-lux-ink/[0.028] hover:text-lux-ink/[0.68]",
            "motion-safe:hover:shadow-[inset_0_1px_0_rgba(252,250,247,0.55)]",
            active && "text-lux-ink/[0.9]",
          ],
      )}
      aria-current={active ? "page" : undefined}
    >
      <span className="relative z-[1]">{label}</span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-[0.6875rem] bottom-[0.4rem] h-[1px] origin-left rounded-full",
          overDark
            ? "bg-gradient-to-r from-transparent via-lux-paper/[0.32] to-lux-gold/[0.22]"
            : "bg-gradient-to-r from-transparent via-lux-ink/32 to-lux-gold/28",
          "transition-[transform,opacity] duration-[560ms] ease-luxury motion-reduce:transition-none",
          active ?
            "scale-x-100 opacity-100"
          : "scale-x-[0] opacity-0 motion-safe:group-hover/nav:scale-x-[0.78] motion-safe:group-hover/nav:opacity-100",
        )}
      />
    </Link>
  );
}

export function PrimaryNavigation() {
  const appearance = useHeaderAppearance();
  const overDark = appearance === "overDark";
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "";
  const panelId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        queueMicrotask(() => menuButtonRef.current?.focus());
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const tel = siteConfig.phone.replace(/\s/g, "");
  const callLabel = `Call ${siteConfig.phone}`;

  const iconShell = cn(
    "rounded-full transition-[transform,color,background-color,border-color,box-shadow] duration-[520ms] ease-luxury motion-reduce:transition-none motion-reduce:active:scale-100 active:scale-[0.98]",
    overDark ?
      cn(
        "border border-white/[0.26] bg-white/[0.1] text-lux-paper/78 backdrop-blur-md",
        "shadow-[inset_0_1px_0_rgba(253,252,249,0.14)] hover:border-white/[0.38] hover:bg-white/[0.16] hover:text-lux-paper",
      )
    : cn(
        "border border-white/35 bg-white/[0.09] text-lux-ink/38 backdrop-blur-md",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] hover:border-white/52 hover:bg-white/[0.22] hover:text-lux-ink/62",
      ),
  );

  return (
    <div className="relative shrink-0">
      <div className="flex items-center gap-1.5 lg:gap-2 xl:gap-3">
        <nav className="hidden lg:flex lg:items-center lg:justify-end" aria-label="Primary">
          <div className="flex flex-wrap items-center gap-y-2 rounded-[999px] px-2 py-[0.0625rem] xl:px-[0.6rem]">
            {primaryNavItems.map((item) => (
              <NavItem key={item.href} href={item.href} label={item.label} />
            ))}
          </div>
        </nav>

        <div className="ml-2 flex shrink-0 items-center gap-[0.5rem] max-lg:ml-2.5 md:gap-3 lg:ml-4 xl:gap-[0.9rem]">
          <a
            href={`tel:${tel}`}
            className={cn(
              "hidden min-h-11 min-w-11 items-center justify-center lg:inline-flex",
              iconShell,
              focusRing,
              overDark ? "focus-visible:ring-offset-lux-ink/48" : "focus-visible:ring-offset-white/5",
            )}
            aria-label={callLabel}
            title={siteConfig.phone}
            data-track="phone_call_click"
            data-track-placement="header_desktop_icon"
          >
            <PhoneIcon className={cn("size-[1.0625rem] transition-colors duration-[520ms]", overDark ? "text-lux-paper/88" : "text-current")} />
          </a>

          <CtaButton
            href={siteConfig.whatsAppUrl}
            external
            variant={overDark ? "whatsappOnDark" : "whatsapp"}
            size="sm"
            leadingIcon={<WhatsAppIcon className="size-[0.9375rem] opacity-[0.95]" />}
            className={cn(
              focusRing,
              "hidden min-h-[2.6875rem] rounded-[999px] px-[1rem] lg:inline-flex",
              "[&>span:last-child]:text-[10px] [&>span:last-child]:font-semibold [&>span:last-child]:uppercase [&>span:last-child]:tracking-[0.34em]",
              overDark ? "shadow-[0_12px_36px_-28px_rgba(52,46,42,0.16)] focus-visible:!ring-offset-[rgba(72,66,58,0.45)]" : "shadow-[0_10px_28px_-22px_rgba(24,42,34,0.2)] focus-visible:!ring-offset-2 focus-visible:!ring-offset-white",
            )}
            data-track="whatsapp_click"
            data-track-placement="header_desktop_whatsapp_primary"
          >
            {croMessaging.headerDesktopWhatsapp}
          </CtaButton>

          <button
            ref={menuButtonRef}
            type="button"
            className={cn(
              "inline-flex min-h-[2.875rem] min-w-[2.875rem] items-center justify-center touch-manipulation lg:hidden",
              iconShell,
              focusRing,
              overDark ? "focus-visible:ring-offset-lux-ink/48" : "focus-visible:ring-offset-white/5",
            )}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-5 w-5" aria-hidden>
              {!open ? (
                <>
                  <span
                    className={cn(
                      "absolute left-0 top-1 h-px w-5 rounded-full transition-[opacity] duration-[420ms]",
                      overDark ? "bg-lux-paper/92" : "bg-lux-ink/74",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[0.59375rem] h-px w-5 rounded-full transition-[opacity] duration-[420ms]",
                      overDark ? "bg-lux-paper/92" : "bg-lux-ink/74",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[1.0625rem] h-px w-5 rounded-full transition-[opacity] duration-[420ms]",
                      overDark ? "bg-lux-paper/92" : "bg-lux-ink/74",
                    )}
                  />
                </>
              ) : (
                <>
                  <span
                    className={cn(
                      "absolute left-0 top-[0.5875rem] h-px w-5 rotate-45 rounded-full",
                      overDark ? "bg-lux-paper" : "bg-lux-ink/92",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[0.5875rem] h-px w-5 -rotate-45 rounded-full",
                      overDark ? "bg-lux-paper" : "bg-lux-ink/92",
                    )}
                  />
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      {open ?
        <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
          <button
            type="button"
            className="absolute inset-0 bg-lux-ink/32 backdrop-blur-[12px] transition-opacity duration-500 motion-reduce:backdrop-blur-none motion-reduce:transition-none"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            className={cn(
              "absolute right-0 top-0 flex h-full w-[min(100%,26rem)] flex-col",
              "border-l border-white/[0.08] bg-lux-ivory/78",
              "shadow-[-48px_0_100px_-44px_rgba(28,26,23,0.12)] backdrop-blur-[28px] backdrop-saturate-125 supports-[backdrop-filter]:bg-lux-paper/68",
            )}
          >
            <header className="flex items-start justify-between border-b border-lux-ink/[0.05] px-gutter pb-5 pt-[max(1.5rem,calc(env(safe-area-inset-top,0px)+1rem))]">
              <div className="min-w-0 pr-6">
                <p className="font-sans text-[9.5px] font-medium uppercase tracking-[0.36em] text-lux-ink/32">
                  Menu
                </p>
                <p className="mt-3 font-display text-[1.35rem] font-normal leading-none tracking-[-0.018em] text-lux-ink">
                  {siteConfig.shortName}
                </p>
                <p className="mt-2 max-w-[16rem] whitespace-normal font-sans text-[10px] font-normal uppercase tracking-[0.28em] text-lux-ink/34">
                  {siteConfig.developer}
                </p>
              </div>
              <button
                type="button"
                className={cn(
                  "group/close min-h-11 shrink-0 touch-manipulation rounded-[999px] border border-lux-ink/[0.08] bg-white/[0.35]",
                  "px-[1.125rem] py-[0.5625rem] text-[10px] font-normal uppercase tracking-[0.32em]",
                  "text-lux-ink/[0.48] backdrop-blur-sm transition-[border-color,background-color,color,box-shadow] duration-[560ms] ease-luxury",
                  "hover:border-lux-ink/[0.14] hover:bg-white/[0.65] hover:text-lux-ink hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] motion-reduce:transition-none",
                  focusRing,
                  "focus-visible:ring-offset-lux-paper/40",
                )}
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </header>

            <nav className="flex flex-1 flex-col gap-2 overflow-y-auto overscroll-contain px-gutter py-4 pb-6" aria-label="Mobile primary">
              {primaryNavItems.map((item, i) => {
                const active = primaryNavHrefActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    className={cn(
                      focusRing,
                      "focus-visible:ring-offset-lux-paper",
                      "touch-manipulation",
                      "-mx-[0.0625rem] rounded-[14px]",
                      "px-[1.25rem] py-[1.1875rem] min-h-[3.25rem]",
                      "transition-[background-color,color,box-shadow,transform,border-color] duration-[560ms] ease-luxury motion-reduce:transition-none",
                      active ?
                        cn(
                          "border border-lux-ink/[0.06]",
                          "bg-gradient-to-br from-white/56 to-[#eae3da]/38 text-lux-ink",
                          "shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_28px_64px_-40px_rgba(10,10,10,0.12)]",
                        )
                      : cn(
                          "border border-transparent text-lux-ink/44",
                          "hover:border-lux-ink/[0.045] hover:bg-white/[0.32] hover:text-lux-ink hover:shadow-[0_10px_28px_-24px_rgba(28,26,23,0.075)] motion-reduce:hover:translate-y-0",
                          "motion-safe:active:opacity-[0.96] motion-safe:hover:border-lux-ink/[0.055]",
                        ),
                    )}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span
                      className={cn(
                        "block border-l-[1.5px] pl-[0.9375rem] font-display text-[1.105rem] font-normal leading-[1.38] tracking-[-0.014em]",
                        active ? "border-lux-gold/[0.34] text-lux-ink/[0.92]" : "border-transparent text-lux-ink/72",
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-lux-ink/[0.05] bg-gradient-to-t from-white/45 via-[#fcfbf9]/50 to-transparent p-gutter pb-[max(1.25rem,calc(env(safe-area-inset-bottom,0px)+1rem))] backdrop-blur-sm">
              <CtaButton
                href={siteConfig.whatsAppUrl}
                external
                variant="whatsapp"
                size="lg"
                leadingIcon={<WhatsAppIcon className="size-[1.2rem]" />}
                className="w-full min-h-[3.5rem] px-10 py-[0.94rem] text-[13px] font-semibold tracking-[0.08em] shadow-[0_12px_36px_-26px_rgba(24,42,34,0.22)] backdrop-blur-sm transition-[filter] duration-400 hover:brightness-[1.02] motion-reduce:hover:brightness-100 [&>span:last-child]:text-[12.75px]"
                data-track="whatsapp_click"
                data-track-placement="header_mobile_drawer"
              >
                {croMessaging.headerMobileWhatsapp}
              </CtaButton>
            </div>
          </div>
        </div>
      : null}
    </div>
  );
}
