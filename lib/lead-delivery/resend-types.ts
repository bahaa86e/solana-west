/** Structured Resend delivery outcomes — safe for API JSON (no secrets). */
export type ResendDeliveryErrorCode =
  | "resend_missing_api_key"
  | "resend_missing_from_email"
  | "invalid_from_email"
  | "resend_send_error"
  | "resend_send_exception";

export type ResendDeliveryResult =
  | { ok: true; fromEmail: string; usedFromFallback: boolean }
  | {
      ok: false;
      code: ResendDeliveryErrorCode;
      message?: string;
      statusCode?: number;
      fromEmail?: string;
      usedFromFallback?: boolean;
    };
