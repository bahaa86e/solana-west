import type { LeadFormKind } from "@/lib/lead/client-validate";

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * FormSubmit `message` body — mirrors ZED East automation structure.
 */
export function buildFormSubmitMessage(formData: FormData, kind: LeadFormKind): string {
  const name = readField(formData, "name");
  const phone = readField(formData, "phone");
  const email = readField(formData, "email");
  const unitType = readField(formData, "interestedIn");
  const selectedProject = readField(formData, "selectedProject");

  const lines = [`Name: ${name}`, `Phone: ${phone}`];

  if (kind === "hero") {
    lines.push(`Email: ${email}`);
    lines.push(`Unit Type: ${unitType}`);
    lines.push(`Selected Project: ${selectedProject}`);
  } else {
    lines.push(`Email: —`);
    lines.push(`Unit Type: ${unitType}`);
    lines.push(`Selected Project: Solana West New Zayed`);
  }

  const formSurface = readField(formData, "form_surface");
  const pageUrl = readField(formData, "page_url");
  const rid = readField(formData, "rid");

  if (formSurface || pageUrl || rid) {
    lines.push("");
    if (formSurface) lines.push(`Form surface: ${formSurface}`);
    if (pageUrl) lines.push(`Page: ${pageUrl}`);
    if (rid) lines.push(`Request ID: ${rid}`);
  }

  return lines.join("\n");
}
