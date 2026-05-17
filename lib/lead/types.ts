/** Machine-readable API / client error codes (no secrets). */
export type LeadDeliveryErrorCode =
  | "invalid_request"
  | "validation_failed"
  | "resend_missing_api_key"
  | "resend_missing_from_email"
  | "invalid_from_email"
  | "resend_send_error"
  | "resend_send_exception"
  | "delivery_failed"
  | "redirect_invalid"
  | "redirect_unavailable";

export type LeadFormState = {
  ok: boolean;
  message?: string;
  code?: LeadDeliveryErrorCode;
  /** When true, user can safely retry submission (transient / delivery errors). */
  retryable?: boolean;
  /** Same-origin thank-you path with conversion + rid query params */
  redirectTo?: string;
};

export type LeadInquiryBody = {
  name: string;
  phone: string;
  email?: string;
  interestedIn: string;
  selectedProject?: string;
  form_surface: string;
  page_pathname: string;
  page_url?: string;
  website_domain_client?: string;
  domain?: string;
  project_name?: string;
  referrer_client?: string;
  rid: string;
  language: string;
  userAgent?: string;
  /** Honeypot — must remain empty */
  company_website?: string;
};

export type ValidatedLead = {
  name: string;
  phone: string;
  email?: string;
  interestedIn: string;
  selectedProject: string;
  formSurface: string;
  projectName: string;
  domain: string;
  pageUrl: string;
  pagePathname: string;
  rid: string;
  language: string;
  referrer?: string;
  userAgent?: string;
};
