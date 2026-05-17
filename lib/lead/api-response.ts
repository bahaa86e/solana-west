import type { LeadDeliveryErrorCode, LeadFormState } from "@/lib/lead/types";

/** Safe server-side delivery diagnostics — never logs secrets or PII. */
export function logLeadDeliveryFailure(
  code: LeadDeliveryErrorCode,
  meta: {
    rid: string;
    formSurface: string;
    statusCode?: number;
    usedFromFallback?: boolean;
  },
): void {
  const payload = {
    rid: meta.rid,
    formSurface: meta.formSurface,
    ...(meta.statusCode !== undefined ? { resend_response_status: meta.statusCode } : {}),
    ...(meta.usedFromFallback !== undefined ? { usedFromFallback: meta.usedFromFallback } : {}),
  };

  const line = `[lead] ${code} ${JSON.stringify(payload)}`;

  if (process.env.NODE_ENV === "production") {
    console.error(line);
    return;
  }

  console.error(line);
}

export function leadErrorResponse(
  message: string,
  code: LeadDeliveryErrorCode,
  options?: { retryable?: boolean },
): LeadFormState {
  return {
    ok: false,
    message,
    code,
    retryable: options?.retryable ?? false,
  };
}
