"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { validateLeadFormClient, type LeadFormKind } from "@/lib/lead/client-validate";
import { leadErrorCopy } from "@/lib/lead/copy";
import { submitLeadInquiry } from "@/lib/lead/submit-lead-inquiry";
import { isSafeLeadThankYouRedirect } from "@/lib/lead/thank-you";

type UseLeadFormSubmitOptions = {
  formKind?: LeadFormKind;
};

function readIsAr(form: HTMLFormElement): boolean {
  const language = new FormData(form).get("language");
  return language === "ar";
}

export function useLeadFormSubmit(options?: UseLeadFormSubmitOptions) {
  const formKind = options?.formKind ?? "contact";
  const [submitting, setSubmitting] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const errorAlertRef = useRef<HTMLParagraphElement>(null);
  const redirectOnce = useRef(false);

  useEffect(() => {
    if (errorMessage && errorAlertRef.current) {
      errorAlertRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [errorMessage]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (submitting || redirecting || redirectOnce.current) return;

      const form = event.currentTarget;
      const isAr = readIsAr(form);
      const c = leadErrorCopy(isAr);

      setErrorMessage(null);
      setSubmitting(true);

      const formData = new FormData(form);
      const clientCheck = validateLeadFormClient(formData, formKind);
      if (!clientCheck.ok) {
        setSubmitting(false);
        setErrorMessage(clientCheck.message);
        return;
      }

      const result = await submitLeadInquiry(formData);

      if (result.ok && result.redirectTo && isSafeLeadThankYouRedirect(result.redirectTo)) {
        redirectOnce.current = true;
        setRedirecting(true);
        window.location.assign(result.redirectTo);
        return;
      }

      setSubmitting(false);

      if (result.ok) {
        setErrorMessage(result.message ?? c.redirectUnavailable);
        return;
      }

      setErrorMessage(result.message ?? c.deliveryFailed);
    },
    [submitting, redirecting, formKind],
  );

  return {
    handleSubmit,
    submitting,
    redirecting,
    errorMessage,
    errorAlertRef,
  };
}
