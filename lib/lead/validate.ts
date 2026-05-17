import { leadDeliveryConfig } from "@/data/lead-delivery";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/env";
import { CONTACT_FORM_SURFACE } from "@/lib/lead-form-surfaces";
import { resolveLeadRequestId } from "@/lib/lead-form-rid";
import {
  HERO_ENQUIRY_FORM_SURFACE,
  isValidHeroLeadProject,
  isValidHeroLeadUnit,
} from "@/lib/hero-lead-options";
import { isValidLeadInterest } from "@/lib/lead-interest-options";

import { leadErrorCopy } from "./copy";
import type { LeadInquiryBody, ValidatedLead } from "./types";

function clean(v: unknown, maxLen: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, maxLen);
}

function pathnameFromReferer(referer: string): string {
  try {
    const u = new URL(referer);
    return u.pathname || "/";
  } catch {
    return "";
  }
}

export type LeadValidationResult =
  | { ok: true; lead: ValidatedLead; isAr: boolean }
  | { ok: false; message: string; isAr: boolean };

export function parseLeadInquiryBody(raw: unknown): LeadInquiryBody | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  return {
    name: clean(o.name, 120),
    phone: clean(o.phone, 40),
    email: clean(o.email, 120) || undefined,
    interestedIn: clean(o.interestedIn, 80),
    selectedProject: clean(o.selectedProject, 120) || undefined,
    form_surface: clean(o.form_surface, 40),
    page_pathname: clean(o.page_pathname, 512),
    page_url: clean(o.page_url, 2048) || undefined,
    website_domain_client: clean(o.website_domain_client, 256) || undefined,
    domain: clean(o.domain, 256) || undefined,
    project_name: clean(o.project_name, 120) || undefined,
    referrer_client: clean(o.referrer_client, 2048) || undefined,
    rid: clean(o.rid, 64),
    language: clean(o.language, 8) || "en",
    userAgent: clean(o.userAgent, 512) || undefined,
    company_website: clean(o.company_website, 200) || undefined,
  };
}

export function validateLeadInquiry(
  body: LeadInquiryBody,
  options?: { refererHeader?: string; hostHeader?: string },
): LeadValidationResult {
  const language = body.language === "ar" ? "ar" : "en";
  const isAr = language === "ar";
  const c = leadErrorCopy(isAr);

  const formSurfaceRaw = body.form_surface;
  const isHeroEnquiry = formSurfaceRaw === HERO_ENQUIRY_FORM_SURFACE;
  const resolvedFormSurface = formSurfaceRaw || (isHeroEnquiry ? HERO_ENQUIRY_FORM_SURFACE : CONTACT_FORM_SURFACE);

  if (body.name.length < 2 || body.name.length > 120) {
    return { ok: false, message: c.nameInvalid, isAr };
  }
  if (body.phone.length < 6) {
    return { ok: false, message: c.phoneInvalid, isAr };
  }

  if (isHeroEnquiry) {
    const email = body.email ?? "";
    if (!email.includes("@") || email.length < 5) {
      return { ok: false, message: c.emailInvalid, isAr };
    }
    if (!isValidHeroLeadUnit(body.interestedIn)) {
      return { ok: false, message: c.interestInvalid, isAr };
    }
    if (!body.selectedProject || !isValidHeroLeadProject(body.selectedProject)) {
      return { ok: false, message: c.projectInvalid, isAr };
    }
  } else if (!isValidLeadInterest(body.interestedIn)) {
    return { ok: false, message: c.interestInvalid, isAr };
  }

  const rid = resolveLeadRequestId(body.rid);
  const projectName = body.project_name || leadDeliveryConfig.projectName;
  const selectedProject = isHeroEnquiry ? (body.selectedProject ?? siteConfig.name) : siteConfig.name;

  const canonical = getSiteUrl();
  const canonicalHostname = canonical.hostname.replace(/^www\./, "");

  let pagePathname = body.page_pathname;
  if (!pagePathname) {
    pagePathname = options?.refererHeader ? pathnameFromReferer(options.refererHeader) : "";
  }
  if (!pagePathname) {
    pagePathname = "/contact";
  }

  const domain =
    body.domain ||
    options?.hostHeader?.replace(/:\d+$/, "") ||
    body.website_domain_client ||
    canonicalHostname ||
    leadDeliveryConfig.domain;

  const pageUrl =
    body.page_url ||
    (() => {
      try {
        return new URL(pagePathname, canonical.origin).toString();
      } catch {
        return `${canonical.origin}${pagePathname}`;
      }
    })();

  const referrer = options?.refererHeader || body.referrer_client || undefined;

  return {
    ok: true,
    isAr,
    lead: {
      name: body.name,
      phone: body.phone,
      email: body.email,
      interestedIn: body.interestedIn,
      selectedProject,
      formSurface: resolvedFormSurface,
      projectName,
      domain,
      pageUrl,
      pagePathname,
      rid,
      language,
      referrer,
      userAgent: body.userAgent,
    },
  };
}
