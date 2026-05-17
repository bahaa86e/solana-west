import { NextResponse } from "next/server";

import { leadErrorCopy } from "@/lib/lead/copy";
import { leadLog } from "@/lib/lead/logger";
import { thankYouRedirectPath } from "@/lib/lead/thank-you";
import { parseLeadInquiryBody, validateLeadInquiry } from "@/lib/lead/validate";
import type { LeadFormState } from "@/lib/lead/types";
import { sendLeadViaResend } from "@/lib/lead-delivery/resend";
import { resolveLeadRequestId } from "@/lib/lead-form-rid";
import { leadErrorResponse, logLeadDeliveryFailure } from "@/lib/lead/api-response";

export const runtime = "nodejs";

function jsonState(state: LeadFormState, status = 200) {
  return NextResponse.json(state, { status });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    leadLog("lead_invalid_json");
    return jsonState(
      leadErrorResponse(leadErrorCopy(false).invalidRequest, "invalid_request"),
      400,
    );
  }

  const parsed = parseLeadInquiryBody(body);
  if (!parsed) {
    leadLog("lead_invalid_body");
    return jsonState(
      leadErrorResponse(leadErrorCopy(false).invalidRequest, "invalid_request"),
      400,
    );
  }

  if (parsed.company_website) {
    leadLog("lead_honeypot", { rid: resolveLeadRequestId(parsed.rid) });
    const redirectTo = thankYouRedirectPath(parsed.page_pathname || "/", resolveLeadRequestId(parsed.rid));
    if (redirectTo) {
      return jsonState({ ok: true, redirectTo });
    }
    return jsonState({
      ok: true,
      message: leadErrorCopy(parsed.language === "ar").redirectUnavailable,
      code: "redirect_unavailable",
    });
  }

  const refererHeader = request.headers.get("referer") ?? "";
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const hostHeader = forwardedHost ?? request.headers.get("host") ?? "";

  const validation = validateLeadInquiry(parsed, { refererHeader, hostHeader });
  if (!validation.ok) {
    leadLog("lead_validation_failed", { formSurface: parsed.form_surface });
    return jsonState(
      leadErrorResponse(validation.message, "validation_failed"),
      422,
    );
  }

  const { lead } = validation;
  const c = leadErrorCopy(validation.isAr);

  const delivery = await sendLeadViaResend(lead);
  if (!delivery.ok) {
    logLeadDeliveryFailure(delivery.code, {
      rid: lead.rid,
      formSurface: lead.formSurface,
      statusCode: delivery.statusCode,
      usedFromFallback: delivery.usedFromFallback,
    });

    return jsonState(
      leadErrorResponse(c.deliveryFailed, delivery.code, { retryable: true }),
      503,
    );
  }

  const redirectTo = thankYouRedirectPath(lead.pagePathname, lead.rid);
  if (!redirectTo) {
    leadLog("lead_redirect_invalid", { rid: lead.rid });
    logLeadDeliveryFailure("redirect_invalid", {
      rid: lead.rid,
      formSurface: lead.formSurface,
    });
    return jsonState(
      leadErrorResponse(c.redirectUnavailable, "redirect_invalid", { retryable: false }),
      500,
    );
  }

  return jsonState({ ok: true, redirectTo });
}
