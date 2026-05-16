import { leadDeliveryConfig } from "@/data/lead-delivery";

export type FormSubmitLeadPayload = {
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
};

function deliveryEndpoint(): string {
  const { formsubmitEndpoint, primaryEmail } = leadDeliveryConfig;
  if (formsubmitEndpoint.includes("formsubmit.co")) {
    return formsubmitEndpoint;
  }
  return `https://formsubmit.co/${encodeURIComponent(primaryEmail)}`;
}

/** POST validated lead to FormSubmit (AJAX mode) — CC and redirect handled server-side. */
export async function postLeadToFormSubmit(payload: FormSubmitLeadPayload): Promise<{
  ok: boolean;
  aborted: boolean;
}> {
  const body = new FormData();
  body.append("_cc", leadDeliveryConfig.ccEmail);
  body.append("_captcha", "false");
  body.append(
    "_subject",
    `${payload.projectName} enquiry — ${payload.formSurface} — ${payload.name}`,
  );

  body.append("name", payload.name);
  body.append("phone", payload.phone);
  if (payload.email) {
    body.append("email", payload.email);
  }
  body.append("interestedIn", payload.interestedIn);
  body.append("selectedProject", payload.selectedProject);

  body.append("project_name", payload.projectName);
  body.append("domain", payload.domain);
  body.append("page_url", payload.pageUrl);
  body.append("page_pathname", payload.pagePathname);
  body.append("form_surface", payload.formSurface);
  body.append("rid", payload.rid);
  body.append("language", payload.language);

  if (payload.referrer) {
    body.append("referrer", payload.referrer);
    body.append("referrer_client", payload.referrer);
  }

  body.append("website_domain_client", payload.domain);

  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), 12_000);

  try {
    const res = await fetch(deliveryEndpoint(), {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
      cache: "no-store",
      signal: ac.signal,
    });

    if (!res.ok) {
      return { ok: false, aborted: false };
    }

    return { ok: true, aborted: false };
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    return { ok: false, aborted };
  } finally {
    clearTimeout(timer);
  }
}
