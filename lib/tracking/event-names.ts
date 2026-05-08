/**
 * Central event vocabulary — mirrored in Ads/GA4 custom definitions as needed.
 * `data-track` HTML attributes SHOULD use values from DATA_TRACK_SELECTOR.
 */

export const DataTrackAttributeValues = [
  "whatsapp_click",
  "phone_call_click",
  "cta_click",
  "lead_submit",
  "brochure_request",
  "site_visit_request",
] as const;

export type DataTrackValue = (typeof DataTrackAttributeValues)[number];

export type DataTrackContext = Partial<{
  /** URL or path of target */
  outboundUrl: string;
  /** Lightweight placement label (never PII) */
  placement: string;
}>;
