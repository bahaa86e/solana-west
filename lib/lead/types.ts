export type LeadFormState = {
  ok: boolean;
  message?: string;
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
