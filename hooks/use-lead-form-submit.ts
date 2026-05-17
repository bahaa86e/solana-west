"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { submitLeadInquiry } from "@/lib/lead/submit-lead-inquiry";
import { isSafeLeadThankYouRedirect } from "@/lib/lead/thank-you";

export function useLeadFormSubmit() {
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

      setErrorMessage(null);
      setSubmitting(true);

      const formData = new FormData(event.currentTarget);
      const result = await submitLeadInquiry(formData);

      setSubmitting(false);

      if (result.ok && result.redirectTo && isSafeLeadThankYouRedirect(result.redirectTo)) {
        redirectOnce.current = true;
        setRedirecting(true);
        window.location.assign(result.redirectTo);
        return;
      }

      if (!result.ok && result.message) {
        setErrorMessage(result.message);
      }
    },
    [submitting, redirecting],
  );

  return {
    handleSubmit,
    submitting,
    redirecting,
    errorMessage,
    errorAlertRef,
  };
}
