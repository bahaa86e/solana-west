"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { usePathname } from "next/navigation";

import type { LeadFormState } from "@/app/contact/actions";
import { submitLeadInquiry } from "@/app/contact/actions";
import { ConversionValueChips } from "@/components/conversion/conversion-value-chips";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CtaButton } from "@/components/ui/cta-button";
import { croMessaging } from "@/data/cro";
import { siteConfig } from "@/data/site";
import { LEAD_INTEREST_OPTIONS } from "@/lib/lead-interest-options";
import { cn } from "@/lib/utils";

const initialLeadState: LeadFormState = { ok: false };

const fieldWrap = "flex flex-col gap-3";

const labelClass =
  "text-[10.75px] font-semibold uppercase tracking-[0.24em] text-lux-ink/48";

const inputClass = cn(
  "w-full rounded-[6px] border border-lux-ink/[0.09] bg-gradient-to-b from-white/90 to-lux-paper/95 px-[1.15rem] py-[1.02rem]",
  "text-[0.953125rem] font-normal tracking-[0.012em] text-lux-ink shadow-[inset_0_1px_0_rgba(250,248,245,0.88),0_14px_40px_-38px_rgba(10,10,10,0.1)] backdrop-blur-sm",
  "transition-[border-color,box-shadow,background-color] duration-480 ease-luxury motion-reduce:transition-none",
  "placeholder:text-lux-ink/36 focus:border-lux-gold/35 focus:bg-lux-paper focus:outline-none focus:ring-2 focus:ring-lux-gold/30",
);

const selectClass = cn(inputClass, "cursor-pointer");

function LeadSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <CtaButton type="submit" variant="primary" size="lg" disabled={pending} className="w-full">
      {pending ? croMessaging.leadFormSubmitPending : croMessaging.leadFormSubmitIdle}
    </CtaButton>
  );
}

export function LeadInquiryForm() {
  const pathname = usePathname() ?? "/";
  const [clientContext, setClientContext] = useState({ domain: "", referrer: "" });

  useEffect(() => {
    setClientContext({
      domain: typeof window !== "undefined" ? window.location.hostname : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    });
  }, []);

  const [state, formAction] = useFormState(submitLeadInquiry, initialLeadState);

  return (
    <form action={formAction} aria-label="Private enquiry form" className="max-w-md space-y-10">
      <div className="space-y-4">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-lux-ink/40">
          {croMessaging.leadFormEyebrow}
        </p>
        <ConversionValueChips tone="light" />
        <p className="text-[0.8125rem] font-normal leading-relaxed tracking-[0.018em] text-lux-ink/54 md:text-[0.84375rem]">
          {croMessaging.leadFormSubtitle}
        </p>
      </div>

      <input type="hidden" name="page_pathname" value={pathname} readOnly aria-hidden />

      <input type="hidden" name="website_domain_client" value={clientContext.domain} readOnly aria-hidden />

      <input type="hidden" name="referrer_client" value={clientContext.referrer} readOnly aria-hidden />

      <fieldset className="m-0 min-w-0 space-y-9 border-0 p-0">
        <legend className="sr-only">
          Private inquiry — full name, phone number, and property interest (required)
        </legend>

        <div className={fieldWrap}>
          <label htmlFor="lead-name" className={labelClass}>
            Full Name
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            placeholder="Full name"
          />
        </div>

        <div className={fieldWrap}>
          <label htmlFor="lead-phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputClass}
            placeholder={siteConfig.phone}
          />
        </div>

        <div className={fieldWrap}>
          <label htmlFor="lead-interest" className={labelClass}>
            Interested In
          </label>
          <select
            id="lead-interest"
            name="interestedIn"
            required
            className={selectClass}
            defaultValue=""
            aria-required="true"
          >
            <option value="" disabled>
              Choose typology
            </option>
            {LEAD_INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {!state.ok && state.message ? (
          <p
            role="alert"
            className="rounded-sm border border-lux-ink/[0.1] bg-lux-mist/40 px-4 py-3 text-sm leading-relaxed text-lux-ink/78"
          >
            {state.message}
          </p>
        ) : null}

        <p className="text-[0.8125rem] leading-relaxed tracking-[0.01em] text-lux-ink/52 md:text-[0.84375rem]">
          {croMessaging.leadFormRoutingNote}
        </p>

        <div className="flex flex-col gap-3">
          <LeadSubmitButton />
          <CtaButton
            href={siteConfig.whatsAppUrl}
            external
            variant="whatsapp"
            size="lg"
            leadingIcon={<WhatsAppIcon className="size-[1.1rem]" />}
            className="w-full"
            data-track="whatsapp_click"
            data-track-placement="lead_form_whatsapp_escalation"
          >
            {croMessaging.leadFormWhatsappSecondary}
          </CtaButton>
        </div>
      </fieldset>
    </form>
  );
}
