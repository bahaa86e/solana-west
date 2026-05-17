import { leadErrorCopy } from "@/lib/lead/copy";
import type { LeadFormState } from "@/lib/lead/types";

const LEAD_API_PATH = "/api/lead";
const REQUEST_TIMEOUT_MS = 12_000;

function formDataToObject(formData: FormData): Record<string, string> {
  const out: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (typeof value === "string") {
      out[key] = value;
    }
  });
  return out;
}

/**
 * Client-side lead submission — POSTs to `/api/lead` (Resend email delivery).
 * Preserves thank-you redirect + RID for conversion tracking.
 */
export async function submitLeadInquiry(formData: FormData): Promise<LeadFormState> {
  const language = formData.get("language");
  const isAr = language === "ar";
  const c = leadErrorCopy(isAr);

  const payload = {
    ...formDataToObject(formData),
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(LEAD_API_PATH, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });

    let data: LeadFormState = { ok: false };
    try {
      data = (await res.json()) as LeadFormState;
    } catch {
      data = { ok: false };
    }

    if (!res.ok) {
      return {
        ok: false,
        message: data.message ?? (res.status === 422 ? c.nameInvalid : c.deliveryFailed),
      };
    }

    return data;
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    return { ok: false, message: aborted ? c.deliveryTimeout : c.deliveryFailed };
  } finally {
    clearTimeout(timer);
  }
}
