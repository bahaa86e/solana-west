"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { PhoneIcon } from "@/components/icons/phone";
import { useHeaderAppearance } from "@/components/layout/header-appearance";
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

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold/75 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname() ?? "";
  const active = primaryNavHrefActive(pathname, href);
  const overDark = useHeaderAppearance() === "overDark";

  return (
    <Link
      href={href}
      className={cn(
        focusRing,
        "group relative whitespace-nowrap rounded-full px-3 py-2.5 text-[10.75px] font-normal uppercase tracking-[0.29em]",
        overDark ?
          cn(
            "text-lux-paper/56 transition-[color] duration-[420ms] ease-luxury motion-reduce:transition-none md:px-3.5 md:text-[11px] md:tracking-[0.28em]",
            "hover:text-lux-paper/[0.9]",
            active && "text-lux-paper",
          )
        : cn(
            "text-lux-ink/46 transition-[color] duration-[420ms] ease-luxury motion-reduce:transition-none md:px-3.5 md:text-[11px] md:tracking-[0.28em]",
            "hover:text-lux-ink/[0.82]",
            active && "text-lux-ink",
          ),
      )}
      aria-current={active ? "page" : undefined}
    >
      <span className="relative z-[1]">{label}</span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-2 bottom-0 h-[1px] origin-left rounded-full",
          overDark ? "bg-lux-paper/[0.55]" : "bg-lux-ink/[0.55]",
          "transition-[transform,opacity] duration-[480ms] ease-luxury motion-reduce:transition-none",
          active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-[0.72] group-hover:opacity-100",
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
    "rounded-full border backdrop-blur-md transition-[color,background-color,border-color,transform] duration-[420ms] ease-luxury motion-reduce:transition-none motion-reduce:active:scale-100 active:scale-[0.98]",
    overDark ?
      cn(
        "border-white/26 bg-white/[0.1] text-lux-paper/78 shadow-[0_1px_0_rgba(255,255,255,0.16)_inset] hover:border-white/40 hover:bg-white/[0.17] hover:text-lux-paper",
      )
    : cn(
        "border-white/30 bg-white/[0.12] text-lux-ink/42 shadow-[0_1px_0_rgba(255,255,255,0.35)_inset] hover:border-white/45 hover:bg-white/[0.2] hover:text-lux-ink/68",
      ),
  );

  return (
    <div className="relative shrink-0">
      <div className="flex items-center gap-2.5 md:gap-3 lg:gap-5 xl:gap-7">
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {primaryNavItems.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-2.5">
          <a
            href={`tel:${tel}`}
            className={cn(
              "hidden min-h-10 min-w-10 items-center justify-center lg:inline-flex",
              iconShell,
              focusRing,
              overDark ? "focus-visible:ring-offset-lux-ink/50" : undefined,
            )}
            aria-label={callLabel}
            title={siteConfig.phone}
            data-track="phone_call_click"
            data-track-placement="header_desktop_icon"
          >
            <PhoneIcon className={cn("size-[1.0625rem]", overDark && "text-lux-paper/90")} />
          </a>

          <a
            href={siteConfig.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              focusRing,
              "hidden rounded-full px-3.5 py-2 text-[10.5px] font-normal uppercase tracking-[0.3em] transition-[color,background-color] duration-[420ms] ease-luxury motion-reduce:transition-none lg:inline-flex",
              overDark ?
                "text-lux-paper/48 hover:bg-white/[0.1] hover:text-lux-paper/78"
              : "text-lux-ink/38 hover:bg-white/[0.1] hover:text-lux-ink/62",
              overDark ? "focus-visible:ring-offset-lux-ink/50" : undefined,
            )}
            data-track="whatsapp_click"
            data-track-placement="header_desktop_whisper"
          >
            WhatsApp
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden",
              iconShell,
              focusRing,
              overDark ? "focus-visible:ring-offset-lux-ink/50" : undefined,
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
                      "absolute left-0 top-1 h-px w-5 rounded-full transition-[transform,opacity] duration-300",
                      overDark ? "bg-lux-paper/88" : "bg-lux-ink/78",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[0.59375rem] h-px w-5 rounded-full transition-[transform,opacity] duration-300",
                      overDark ? "bg-lux-paper/88" : "bg-lux-ink/78",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[1.0625rem] h-px w-5 rounded-full transition-[transform,opacity] duration-300",
                      overDark ? "bg-lux-paper/88" : "bg-lux-ink/78",
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
            className="absolute inset-0 bg-lux-ink/40 backdrop-blur-[3px] transition-opacity duration-300 motion-reduce:transition-none"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            className={cn(
              "absolute right-0 top-0 flex h-full w-[min(100%,21.5rem)] flex-col",
              "border-l border-white/25 bg-lux-paper/68 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150",
            )}
          >
            <div className="flex items-center justify-between border-b border-lux-ink/[0.06] px-gutter py-5 md:py-6">
              <div>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-lux-ink/36">
                  Navigate
                </p>
                <p className="mt-1.5 font-display text-[1.1875rem] font-medium tracking-[-0.014em] text-lux-ink">
                  {siteConfig.shortName}
                </p>
              </div>
              <button
                type="button"
                className={cn(
                  "min-h-10 rounded-full border border-lux-ink/[0.08] bg-white/30 px-5 text-[10.5px] font-normal uppercase tracking-[0.28em] text-lux-ink/58",
                  "transition-[background-color,border-color,color] duration-400 ease-luxury motion-reduce:transition-none hover:border-lux-ink/14 hover:bg-white/50 hover:text-lux-ink",
                  focusRing,
                )}
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <nav
              className="flex flex-1 flex-col gap-1 overflow-y-auto px-gutter py-4 pb-6"
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
                      focusRing,
                      "rounded-xl border border-transparent py-3.5 pl-4 pr-3 text-left text-[1.03125rem] font-normal leading-snug tracking-[0.018em]",
                      "transition-[color,background-color,border-color,transform] duration-[420ms] ease-luxury motion-reduce:transition-none",
                      active ?
                        "border-lux-ink/[0.06] bg-white/35 text-lux-ink shadow-[0_1px_0_rgba(255,255,255,0.4)_inset]"
                      : "text-lux-ink/54 hover:border-lux-ink/[0.05] hover:bg-white/22 hover:text-lux-ink",
                    )}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span
                      className={cn(
                        "block border-l-2 border-transparent pl-3 transition-[border-color] duration-400",
                        active && "border-lux-gold/45",
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-lux-ink/[0.06] bg-gradient-to-t from-white/30 to-transparent p-gutter">
              <CtaButton
                href={siteConfig.whatsAppUrl}
                external
                variant="secondary"
                className="w-full border-lux-ink/14 bg-white/40 px-10 backdrop-blur-sm transition-[background-color,border-color] duration-400 hover:bg-white/55"
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
