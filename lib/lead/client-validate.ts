import {
  HERO_ENQUIRY_FORM_SURFACE,
  isValidHeroLeadProject,
  isValidHeroLeadUnit,
} from "@/lib/hero-lead-options";
import { isValidLeadInterest } from "@/lib/lead-interest-options";

import { leadErrorCopy } from "./copy";

export type LeadFormKind = "hero" | "contact";

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Lightweight client-side checks before POST — mirrors server rules; no UI changes.
 */
export function validateLeadFormClient(
  formData: FormData,
  kind: LeadFormKind,
): { ok: true } | { ok: false; message: string } {
  const isAr = readField(formData, "language") === "ar";
  const c = leadErrorCopy(isAr);

  const name = readField(formData, "name");
  const phone = readField(formData, "phone");
  const interestedIn = readField(formData, "interestedIn");

  if (name.length < 2 || name.length > 120) {
    return { ok: false, message: c.nameInvalid };
  }
  if (phone.length < 6) {
    return { ok: false, message: c.phoneInvalid };
  }

  const surface = readField(formData, "form_surface");
  const isHero = kind === "hero" || surface === HERO_ENQUIRY_FORM_SURFACE;

  if (isHero) {
    const email = readField(formData, "email");
    if (!email.includes("@") || email.length < 5) {
      return { ok: false, message: c.emailInvalid };
    }
    if (!isValidHeroLeadUnit(interestedIn)) {
      return { ok: false, message: c.interestInvalid };
    }
    const selectedProject = readField(formData, "selectedProject");
    if (!selectedProject || !isValidHeroLeadProject(selectedProject)) {
      return { ok: false, message: c.projectInvalid };
    }
  } else if (!isValidLeadInterest(interestedIn)) {
    return { ok: false, message: c.interestInvalid };
  }

  return { ok: true };
}
