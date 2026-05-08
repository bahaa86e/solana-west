"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { PhoneIcon } from "@/components/icons/phone";
import { CtaButton } from "@/components/ui/cta-button";
import { primaryNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function primaryNavHrefActive(pathname: string, href: string): boolean {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  if (pathname === href) return true;
  return pathname.startsWith(`${href}/`);
}

const navLinkQuiet =
  "rounded-[3px] px-2 py-2 text-[11.75px] font-medium uppercase tracking-[0.22em] text-lux-ink/44 transition-colors duration-500 ease-luxury hover:text-lux-ink/72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-lux-paper md:px-2.5 md:text-[12px] md:tracking-[0.2em]";

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname() ?? "";
  const active = primaryNavHrefActive(pathname, href);

  return (
    <Link
      href={href}
      className={cn(
        navLinkQuiet,
        active ? "text-lux-ink md:font-medium md:tracking-[0.18em]" : undefined,
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function PrimaryNavigation() {
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

  return (
    <div className="relative shrink-0">
      <div className="flex items-center gap-4 lg:gap-6 xl:gap-9">
        <nav
          className="hidden items-center gap-[0.0625rem] lg:flex xl:gap-[0.3125rem]"
          aria-label="Primary"
        >
          {primaryNavItems.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <a
            href={`tel:${tel}`}
            className={cn(
              "hidden min-h-10 min-w-10 items-center justify-center rounded-[3px] text-lux-ink/34 transition-colors duration-400 ease-luxury lg:inline-flex",
              "hover:text-lux-ink/58 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-lux-paper",
            )}
            aria-label={callLabel}
            title={siteConfig.phone}
            data-track="phone_call_click"
            data-track-placement="header_desktop_icon"
          >
            <PhoneIcon className="size-[1.0625rem]" />
          </a>

          <a
            href={siteConfig.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              navLinkQuiet,
              "hidden whitespace-nowrap text-lux-ink/36 hover:text-lux-ink/58 lg:inline-flex",
            )}
            data-track="whatsapp_click"
            data-track-placement="header_desktop_whisper"
          >
            WhatsApp
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[3px] border border-black/[0.06] bg-lux-paper/70 text-lux-ink transition-[border-color,background-color] duration-400 ease-luxury hover:border-lux-ink/[0.12] hover:bg-lux-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-lux-paper lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-5 w-5" aria-hidden>
              {!open ? (
                <>
                  <span className="absolute left-0 top-1 h-[0.065rem] w-5 rounded-full bg-lux-ink/88" />
                  <span className="absolute left-0 top-[0.59375rem] h-[0.065rem] w-5 rounded-full bg-lux-ink/88" />
                  <span className="absolute left-0 top-[1.0625rem] h-[0.065rem] w-5 rounded-full bg-lux-ink/88" />
                </>
              ) : (
                <>
                  <span className="absolute left-0 top-[0.5875rem] h-[0.065rem] w-5 rotate-45 rounded-full bg-lux-ink" />
                  <span className="absolute left-0 top-[0.5875rem] h-[0.065rem] w-5 -rotate-45 rounded-full bg-lux-ink" />
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      {open ?
        <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-lux-ink/30 backdrop-blur-[2px]"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            className="absolute right-0 top-0 flex h-full w-[min(100%,20.5rem)] flex-col bg-lux-paper shadow-[0_60px_100px_-48px_rgba(0,0,0,0.32)] ring-1 ring-black/[0.03]"
          >
            <div className="flex items-center justify-between px-gutter py-5 md:py-[1.125rem]">
              <span className="font-display text-[1.0625rem] leading-none tracking-[-0.012em] text-lux-ink">
                Menu
              </span>
              <button
                type="button"
                className="min-h-11 rounded-[3px] border border-black/[0.07] px-5 text-[11px] font-medium uppercase tracking-[0.22em] text-lux-ink/66 transition-colors duration-400 hover:border-lux-ink/16 hover:bg-lux-mist/40 hover:text-lux-ink"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <nav
              className="flex flex-1 flex-col gap-0 overflow-y-auto px-gutter pb-6 pt-1"
              aria-label="Mobile primary"
            >
              {primaryNavItems.map((item, i) => {
                const active = primaryNavHrefActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    className={cn(
                      "border-b border-lux-ink/[0.04] py-[1.0625rem] text-[1.0125rem] font-normal tracking-[0.02em] text-lux-ink/58 transition-colors duration-400 hover:text-lux-ink",
                      active && "text-lux-ink",
                    )}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-lux-ink/[0.05] p-gutter">
              <CtaButton
                href={siteConfig.whatsAppUrl}
                external
                variant="secondary"
                className="w-full px-10"
                data-track="whatsapp_click"
                data-track-placement="header_mobile_drawer"
              >
                WhatsApp
              </CtaButton>
            </div>
          </div>
        </div>
      : null}
    </div>
  );
}
