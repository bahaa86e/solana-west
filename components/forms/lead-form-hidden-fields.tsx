"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { leadDeliveryConfig } from "@/data/lead-delivery";
import { useSiteLocale } from "@/components/i18n/site-locale-context";

type LeadFormHiddenFieldsProps = {
  formSurface: string;
  rid: string;
};

/**
 * Contextual hidden inputs — forwarded by the server action into FormSubmit emails.
 * `_cc` / FormSubmit endpoint are applied server-side only (not exposed to the client).
 */
export function LeadFormHiddenFields({ formSurface, rid }: LeadFormHiddenFieldsProps) {
  const pathname = usePathname() ?? "/";
  const locale = useSiteLocale();
  const [clientContext, setClientContext] = useState({
    domain: leadDeliveryConfig.domain,
    referrer: "",
    pageUrl: "",
  });

  useEffect(() => {
    setClientContext({
      domain: window.location.hostname || leadDeliveryConfig.domain,
      referrer: document.referrer,
      pageUrl: window.location.href,
    });
  }, []);

  return (
    <>
      <input type="hidden" name="form_surface" value={formSurface} readOnly aria-hidden />
      <input type="hidden" name="page_pathname" value={pathname} readOnly aria-hidden />
      <input type="hidden" name="website_domain_client" value={clientContext.domain} readOnly aria-hidden />
      <input type="hidden" name="referrer_client" value={clientContext.referrer} readOnly aria-hidden />
      <input type="hidden" name="project_name" value={leadDeliveryConfig.projectName} readOnly aria-hidden />
      <input type="hidden" name="domain" value={clientContext.domain || leadDeliveryConfig.domain} readOnly aria-hidden />
      <input type="hidden" name="page_url" value={clientContext.pageUrl} readOnly aria-hidden />
      <input type="hidden" name="rid" value={rid} readOnly aria-hidden />
      <input type="hidden" name="language" value={locale} readOnly aria-hidden />
    </>
  );
}
