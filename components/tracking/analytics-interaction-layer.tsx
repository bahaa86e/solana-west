"use client";

import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef } from "react";

import { loadTrackingSurface } from "@/data/tracking-config";
import { handleDataTrackClick, emitRouteView } from "@/lib/tracking/dispatch";

/**
 * Bridges UI affordances (`data-track`, client navigations) to analytics vendors — keep CTAs declarative (`data-track` only).
 */
export function AnalyticsInteractionLayer({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "";
  const primedSkipFirstRoutePulse = useRef(true);

  useEffect(() => {
    if (!pathname) return;
    if (primedSkipFirstRoutePulse.current) {
      primedSkipFirstRoutePulse.current = false;
      return;
    }
    emitRouteView(pathname.startsWith("/") ? pathname : `/${pathname}`);
  }, [pathname]);

  useEffect(() => {
    const surface = loadTrackingSurface();
    if (!surface.gtagLoaderId && !surface.metaPixelId) return;

    const listener = (ev: MouseEvent) => {
      const target = ev.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const key = el.getAttribute("data-track") ?? "";
      let outboundUrl: string | undefined =
        el.closest("a")?.getAttribute("href") ??
        el.getAttribute("href") ??
        undefined;
      if (!outboundUrl) outboundUrl = undefined;
      const placement = el.getAttribute("data-track-placement") ?? undefined;
      handleDataTrackClick(key, {
        ...(outboundUrl ? { outboundUrl } : {}),
        ...(placement ? { placement } : {}),
      });
    };

    document.addEventListener("click", listener, { capture: true });
    return () => document.removeEventListener("click", listener, true);
  }, []);

  return children;
}
