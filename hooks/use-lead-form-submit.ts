"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { loadTrackingSurface } from "@/data/tracking-config";
import { buildFormSubmitMessage } from "@/lib/lead/build-formsubmit-message";
import { validateLeadFormClient, type LeadFormKind } from "@/lib/lead/client-validate";
import { leadErrorCopy } from "@/lib/lead/copy";
import { emitVerifiedLeadConversion } from "@/lib/tracking/dispatch";

type UseLeadFormSubmitOptions = {
  formKind?: LeadFormKind;
};

function readIsAr(form: HTMLFormElement): boolean {
  const language = new FormData(form).get("language");
  return language === "ar";
}

function markLeadConversionFired(rid: string): void {
  try {
    sessionStorage.setItem(`lux_lead_rid_${rid}`, "1");
  } catch {
    /* noop */
  }
}

/**
 * Client validation + tracking pulse, then native POST to FormSubmit.co.
 */
export function useLeadFormSubmit(options?: UseLeadFormSubmitOptions) {
  const formKind = options?.formKind ?? "contact";
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const errorAlertRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (errorMessage && errorAlertRef.current) {
      errorAlertRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [errorMessage]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (submitting) return;

      const form = event.currentTarget;
      const isAr = readIsAr(form);
      const c = leadErrorCopy(isAr);

      setErrorMessage(null);

      const formData = new FormData(form);
      const clientCheck = validateLeadFormClient(formData, formKind);
      if (!clientCheck.ok) {
        setErrorMessage(clientCheck.message);
        return;
      }

      const messageField = form.elements.namedItem("message");
      if (messageField instanceof HTMLTextAreaElement || messageField instanceof HTMLInputElement) {
        messageField.value = buildFormSubmitMessage(formData, formKind);
      }

      const rid = formData.get("rid");
      if (typeof rid === "string" && rid.trim()) {
        markLeadConversionFired(rid.trim());
      }

      setSubmitting(true);

      emitVerifiedLeadConversion(loadTrackingSurface());

      form.submit();
    },
    [submitting, formKind],
  );

  return {
    handleSubmit,
    submitting,
    errorMessage,
    errorAlertRef,
  };
}
