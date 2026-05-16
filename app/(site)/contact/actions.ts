"use server";

import { headers } from "next/headers";

import { leadDeliveryConfig } from "@/data/lead-delivery";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/env";
import { postLeadToFormSubmit } from "@/lib/lead-delivery/formsubmit";
import { CONTACT_FORM_SURFACE } from "@/lib/lead-form-surfaces";
import { resolveLeadRequestId } from "@/lib/lead-form-rid";
import {
  HERO_ENQUIRY_FORM_SURFACE,
  isValidHeroLeadProject,
  isValidHeroLeadUnit,
} from "@/lib/hero-lead-options";
import { isValidLeadInterest } from "@/lib/lead-interest-options";

export type LeadFormState = {
  ok: boolean;
  message?: string;
  /** Built server-side only — client performs full-page navigation here after success */
  redirectTo?: string;
};

function leadCopy(isAr: boolean) {
  return {
    nameInvalid: isAr ?
      "يرجى إدخال اسم صالح (حرفين على الأقل)."
    : "Please enter a valid name.",
    phoneInvalid: isAr ?
      "يرجى إدخال رقم يمكن لمكتب المبيعات التواصل عبره."
    : "Please enter a phone number sales can reach you on.",
    interestInvalid: isAr ?
      "يرجى اختيار نوع الوحدة."
    : "Please choose what you are interested in.",
    emailInvalid: isAr ?
      "يرجى إدخال بريد إلكتروني صالح."
    : "Please enter a valid email address.",
    projectInvalid: isAr ?
      "يرجى اختيار المشروع."
    : "Please select a project.",
    deliveryPaused: isAr ?
      "الاستفسارات عبر الموقع غير متاحة مؤقتًا. تواصل عبر الواتساب أو الهاتف — القنوات موجودة على الصفحة."
    : "Online enquiries are paused. Please use WhatsApp or call the desk — details are shown on this page.",
    deliveryFailed: isAr ?
      "لم ننجح في إرسال الطلب تقنيًا. حاول مجدداً خلال قليل أو تواصل مع المبيعات عبر الواتساب."
    : "We could not complete the request. Please try again in a moment or message sales on WhatsApp.",
    deliveryTimeout: isAr ?
      "انتهت مهلة الاتصال بخادم الاستفسارات. حاول مجدداً أو استخدم الواتساب."
    : "The enquiry service timed out. Please try again or use WhatsApp.",
  } as const;
}

function thankYouRedirectPath(pagePathname: string, rid: string): string | null {
  const path =
    pagePathname.startsWith("/ar") ?
      `/ar/thank-you?conversion=lead&rid=${encodeURIComponent(rid)}`
    : `/thank-you?conversion=lead&rid=${encodeURIComponent(rid)}`;
  const pathnameOnly = path.split("?")[0] ?? "";
  if (pathnameOnly !== "/thank-you" && pathnameOnly !== "/ar/thank-you") return null;
  return path;
}

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

/**
 * Validates and forwards enquiries via FormSubmit email delivery.
 * Verified conversions must only originate from confirmed success flows.
 */
export async function submitLeadInquiry(prevState: LeadFormState | null, formData: FormData): Promise<LeadFormState> {
  void prevState;

  const name = clean(formData.get("name"), 120);
  const phone = clean(formData.get("phone"), 40);
  const email = clean(formData.get("email"), 120);
  const interestedRaw = clean(formData.get("interestedIn"), 80);
  const selectedProjectRaw = clean(formData.get("selectedProject"), 120);
  const formSurfaceRaw = clean(formData.get("form_surface"), 40);
  const pagePathClient = clean(formData.get("page_pathname"), 512);
  const pageUrlClient = clean(formData.get("page_url"), 2048);
  const websiteDomainClient = clean(formData.get("website_domain_client"), 256);
  const domainClient = clean(formData.get("domain"), 256);
  const projectNameClient = clean(formData.get("project_name"), 120);
  const referrerClient = clean(formData.get("referrer_client"), 2048);
  const language = clean(formData.get("language"), 8) || "en";
  const rid = resolveLeadRequestId(clean(formData.get("rid"), 64));

  const isHeroEnquiry = formSurfaceRaw === HERO_ENQUIRY_FORM_SURFACE;
  const resolvedFormSurface = formSurfaceRaw || (isHeroEnquiry ? HERO_ENQUIRY_FORM_SURFACE : CONTACT_FORM_SURFACE);

  const c = leadCopy(pagePathClient.startsWith("/ar") || language === "ar");

  if (name.length < 2 || name.length > 120) {
    return { ok: false, message: c.nameInvalid };
  }
  if (phone.length < 6) {
    return { ok: false, message: c.phoneInvalid };
  }

  if (isHeroEnquiry) {
    if (!email.includes("@") || email.length < 5) {
      return { ok: false, message: c.emailInvalid };
    }
    if (!isValidHeroLeadUnit(interestedRaw)) {
      return { ok: false, message: c.interestInvalid };
    }
    if (!isValidHeroLeadProject(selectedProjectRaw)) {
      return { ok: false, message: c.projectInvalid };
    }
  } else if (!isValidLeadInterest(interestedRaw)) {
    return { ok: false, message: c.interestInvalid };
  }

  const interestedIn = interestedRaw;
  const selectedProject = isHeroEnquiry ? selectedProjectRaw : siteConfig.name;
  const projectName = projectNameClient || leadDeliveryConfig.projectName;

  const canonical = getSiteUrl();
  const canonicalHostname = canonical.hostname.replace(/^www\./, "");

  const h = headers();
  const forwardedHost = h.get("x-forwarded-host")?.split(",")[0]?.trim();
  const hostHeader = h.get("host") ?? "";
  const refererHeader = h.get("referer") ?? "";

  const referrerResolved = refererHeader || referrerClient || undefined;

  let pagePathname = pagePathClient;
  if (!pagePathname || pagePathname.length < 1) {
    pagePathname = refererHeader ? pathnameFromReferer(refererHeader) : "";
  }
  if (!pagePathname || pagePathname.length < 1) {
    pagePathname = "/contact";
  }
  const cResolved = leadCopy(pagePathname.startsWith("/ar") || language === "ar");

  const websiteDomainResolved =
    hostHeader.replace(/:\d+$/, "") || domainClient || websiteDomainClient || canonicalHostname;
  const domain = domainClient || websiteDomainResolved || leadDeliveryConfig.domain;

  const pageUrl =
    pageUrlClient ||
    (() => {
      try {
        return new URL(pagePathname, canonical.origin).toString();
      } catch {
        return canonical.origin + pagePathname;
      }
    })();

  if (!leadDeliveryConfig.formsubmitEndpoint) {
    return { ok: false, message: cResolved.deliveryPaused };
  }

  const delivery = await postLeadToFormSubmit({
    name,
    phone,
    email: email || undefined,
    interestedIn,
    selectedProject,
    formSurface: resolvedFormSurface,
    projectName,
    domain,
    pageUrl,
    pagePathname,
    rid,
    language,
    referrer: referrerResolved,
  });

  if (!delivery.ok) {
    return {
      ok: false,
      message: delivery.aborted ? cResolved.deliveryTimeout : cResolved.deliveryFailed,
    };
  }

  const redirectTo = thankYouRedirectPath(pagePathname, rid);
  if (!redirectTo) {
    return { ok: false, message: cResolved.deliveryFailed };
  }

  return { ok: true, redirectTo };
}
