import type { TrackingSurface } from "@/data/tracking-config";

type LeadAdsSurface = Pick<TrackingSurface, "googleAdsLeadSendTo">;
import type { DataTrackContext, DataTrackValue } from "@/lib/tracking/event-names";

function dlPush(payload: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer ??= [];
  window.dataLayer.push(payload);
}

function isDataTrackValue(v: string | undefined): v is DataTrackValue {
  return (
    v === "whatsapp_click" ||
    v === "phone_call_click" ||
    v === "cta_click" ||
    v === "lead_submit" ||
    v === "brochure_request" ||
    v === "site_visit_request"
  );
}

/** Document-delegated handler for elements with `data-track` */
export function handleDataTrackClick(
  eventName: string | undefined,
  ctx: DataTrackContext,
): void {
  if (typeof window === "undefined" || !eventName || !isDataTrackValue(eventName)) return;

  dlPush({
    event: eventName,
    ...ctx,
  });

  try {
    window.gtag?.("event", eventName, {
      transport_type: "beacon",
      ...ctx,
    });
  } catch {
    /* no-op — avoid brittle third-party breakage */
  }

  try {
    if (eventName === "whatsapp_click") {
      window.fbq?.("track", "Contact", {
        content_category: "whatsapp",
        ...(ctx.placement ? { content_name: ctx.placement } : {}),
      });
      return;
    }
    if (eventName === "phone_call_click") {
      window.fbq?.("track", "Contact", { content_category: "phone_call" });
      return;
    }
    if (eventName === "cta_click") {
      window.fbq?.("trackCustom", "cta_click", {
        ...(ctx.outboundUrl ? { outbound_url: ctx.outboundUrl } : {}),
        ...(ctx.placement ? { placement: ctx.placement } : {}),
      });
      return;
    }
  } catch {
    /* noop */
  }
}

export function emitVerifiedLeadConversion(surface: LeadAdsSurface): void {
  if (typeof window === "undefined") return;

  dlPush({ event: "lead_submit", source: "form_thank_you" });

  try {
    window.gtag?.("event", "generate_lead", {
      transport_type: "beacon",
      method: "inquiry_form",
    });
    if (surface.googleAdsLeadSendTo) {
      window.gtag?.("event", "conversion", {
        send_to: surface.googleAdsLeadSendTo,
        transport_type: "beacon",
      });
    }
  } catch {
    /* noop */
  }

  try {
    window.fbq?.("track", "Lead", { content_category: "inquiry_form" });
  } catch {
    /* noop */
  }
}

/** Virtual page view — first paint handled by configs; skips duplicate on initial HTML load via caller guard */
export function emitRouteView(pathWithQuery: string): void {
  if (typeof window === "undefined") return;
  dlPush({ event: "virtual_page_view", page_path: pathWithQuery });

  try {
    window.gtag?.("event", "page_view", {
      page_path: pathWithQuery,
      transport_type: "beacon",
    });
  } catch {
    /* noop */
  }

  try {
    window.fbq?.("track", "PageView");
  } catch {
    /* noop */
  }
}
