"use server";

import { randomUUID } from "crypto";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getSiteUrl } from "@/lib/env";
import { isValidLeadInterest } from "@/lib/lead-interest-options";
import { siteConfig } from "@/data/site";

export type LeadFormState = {
  ok: boolean;
  message?: string;
};

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
 * Validates and forwards enquiries. Verified conversions must only originate from confirmed success flows.
 */
export async function submitLeadInquiry(prevState: LeadFormState | null, formData: FormData): Promise<LeadFormState> {
  void prevState;

  const name = clean(formData.get("name"), 120);
  const phone = clean(formData.get("phone"), 40);
  const interestedRaw = clean(formData.get("interestedIn"), 80);
  const pagePathClient = clean(formData.get("page_pathname"), 512);
  const websiteDomainClient = clean(formData.get("website_domain_client"), 256);
  const referrerClient = clean(formData.get("referrer_client"), 2048);

  if (name.length < 2 || name.length > 120) {
    return { ok: false, message: "Please enter a valid name." };
  }
  if (phone.length < 6) {
    return { ok: false, message: "Please enter a phone number sales can reach you on." };
  }
  if (!isValidLeadInterest(interestedRaw)) {
    return { ok: false, message: "Please choose what you are interested in." };
  }
  const interestedIn = interestedRaw;

  const canonical = getSiteUrl();
  const canonicalOrigin = canonical.origin.replace(/\/$/, "");
  const canonicalHostname = canonical.hostname;

  const h = headers();
  const forwardedHost = h.get("x-forwarded-host")?.split(",")[0]?.trim();
  const hostHeader = forwardedHost ?? h.get("host") ?? "";
  const refererHeader = h.get("referer") ?? "";

  const referrerResolved = refererHeader || referrerClient || undefined;

  /** Prefer client pathname (SPA-accurate); fall back to Referer path; then contact */
  let pagePathname = pagePathClient;
  if (!pagePathname || pagePathname.length < 1) {
    pagePathname = refererHeader ? pathnameFromReferer(refererHeader) : "";
  }
  if (!pagePathname || pagePathname.length < 1) {
    pagePathname = "/contact";
  }

  const websiteDomainResolved = hostHeader.replace(/:\d+$/, "") || websiteDomainClient || canonicalHostname;

  const submittedAt = new Date().toISOString();

  const payload = {
    /** Identifies originating property marketing site */
    website: {
      canonicalUrl: canonicalOrigin,
      canonicalHostname,
      requestedHostname: websiteDomainResolved,
      pathname: pagePathname,
      referrerUrl: referrerResolved,
    },
    /** Clearly surfaces typology intent for desks */
    interest: {
      propertyType: interestedIn,
    },
    lead: {
      name,
      phone,
      interestedIn,
    },
    /** Issuance anchors */
    project: siteConfig.name,
    developer: siteConfig.developer,
    /** Duplicate top-level timestamps for parsers that rely on legacy keys */
    submittedAt,
    timestamp: submittedAt,
    timestampSource: "server",
    /** Backwards-compatible shorthand */
    source: siteConfig.shortName,
    pagePathname,
    referrer: referrerResolved,
  };

  const webhook = process.env.LEAD_WEBHOOK_URL?.trim();

  if (!webhook) {
    return {
      ok: false,
      message:
        "Online enquiries are paused. Please use WhatsApp or call the desk — details are shown on this page.",
    };
  }

  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), 12_000);

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: ac.signal,
    });

    if (!res.ok) {
      return { ok: false, message: "We could not complete the request. Please try again or WhatsApp sales." };
    }
  } catch {
    return { ok: false, message: "We could not complete the request. Please try again or WhatsApp sales." };
  } finally {
    clearTimeout(timer);
  }

  redirect(`/thank-you?conversion=lead&rid=${encodeURIComponent(randomUUID())}`);
}
