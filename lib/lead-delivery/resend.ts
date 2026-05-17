import { Resend } from "resend";

import { leadDeliveryConfig } from "@/data/lead-delivery";
import type { ValidatedLead } from "@/lib/lead/types";
import { leadLog } from "@/lib/lead/logger";

function languageLabel(language: string): string {
  return language === "ar" ? "AR" : "EN";
}

function buildSubject(lead: ValidatedLead): string {
  return `[${lead.projectName}] New Lead — ${lead.formSurface} — ${languageLabel(lead.language)}`;
}

function buildTextBody(lead: ValidatedLead, submittedAt: string): string {
  const lines = [
    `New enquiry — ${lead.projectName}`,
    "",
    `Full Name: ${lead.name}`,
    `Phone Number: ${lead.phone}`,
    `Email: ${lead.email ?? "—"}`,
    `Unit Type: ${lead.interestedIn}`,
    `Selected Project: ${lead.selectedProject}`,
    "",
    `Domain: ${lead.domain}`,
    `Current URL: ${lead.pageUrl}`,
    `Form Surface: ${lead.formSurface}`,
    `RID: ${lead.rid}`,
    `Timestamp: ${submittedAt}`,
    `Language: ${languageLabel(lead.language)}`,
    `User Agent: ${lead.userAgent ?? "—"}`,
  ];

  if (lead.referrer) {
    lines.push(`Referrer: ${lead.referrer}`);
  }

  return lines.join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtmlBody(lead: ValidatedLead, submittedAt: string): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;font-weight:600;color:#444;">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#111;">${escapeHtml(value)}</td></tr>`;

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;color:#111;">
<p style="margin:0 0 16px;">New enquiry for <strong>${escapeHtml(lead.projectName)}</strong></p>
<table style="border-collapse:collapse;width:100%;max-width:560px;">${[
    row("Full Name", lead.name),
    row("Phone Number", lead.phone),
    row("Email", lead.email ?? "—"),
    row("Unit Type", lead.interestedIn),
    row("Selected Project", lead.selectedProject),
    row("Domain", lead.domain),
    row("Current URL", lead.pageUrl),
    row("Form Surface", lead.formSurface),
    row("RID", lead.rid),
    row("Timestamp", submittedAt),
    row("Language", languageLabel(lead.language)),
    row("User Agent", lead.userAgent ?? "—"),
    ...(lead.referrer ? [row("Referrer", lead.referrer)] : []),
  ].join("")}</table></body></html>`;
}

export async function sendLeadViaResend(lead: ValidatedLead): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    leadLog("resend_missing_api_key");
    return { ok: false, error: "missing_api_key" };
  }

  const resend = new Resend(apiKey);
  const submittedAt = new Date().toISOString();

  try {
    const { error } = await resend.emails.send({
      from: leadDeliveryConfig.fromEmail,
      to: [leadDeliveryConfig.primaryEmail],
      cc: [leadDeliveryConfig.ccEmail],
      subject: buildSubject(lead),
      text: buildTextBody(lead, submittedAt),
      html: buildHtmlBody(lead, submittedAt),
      replyTo: lead.email || undefined,
    });

    if (error) {
      leadLog("resend_send_error", { rid: lead.rid, formSurface: lead.formSurface, code: error.name });
      return { ok: false, error: error.message };
    }

    leadLog("resend_send_ok", { rid: lead.rid, formSurface: lead.formSurface, language: lead.language });
    return { ok: true };
  } catch (err) {
    leadLog("resend_send_exception", {
      rid: lead.rid,
      formSurface: lead.formSurface,
      name: err instanceof Error ? err.name : "unknown",
    });
    return { ok: false, error: err instanceof Error ? err.message : "send_failed" };
  }
}
