"use client";

import { useState } from "react";

import { ConversionValueChips } from "@/components/conversion/conversion-value-chips";
import { LeadFormHiddenFields } from "@/components/forms/lead-form-hidden-fields";
import { useLeadFormSubmit } from "@/hooks/use-lead-form-submit";
import { useEditorialCopy } from "@/components/i18n/editorial-copy-context";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CtaButton } from "@/components/ui/cta-button";
import { LuxurySelect } from "@/components/ui/luxury-select";
import { siteConfig } from "@/data/site";
import { formSubmitConfig } from "@/data/lead-formsubmit";
import { CONTACT_FORM_SURFACE } from "@/lib/lead-form-surfaces";
import { createLeadRequestId } from "@/lib/lead-form-rid";
import { LEAD_INTEREST_OPTIONS, type LeadInterestOption } from "@/lib/lead-interest-options";
import { leadInterestArabicDisplay } from "@/lib/lead-interest-display-ar";
import { cn } from "@/lib/utils";

const fieldWrap = "flex flex-col gap-3";

const labelClass =
  "text-[10.75px] font-semibold uppercase tracking-[0.24em] text-lux-ink/48";

const inputClass = cn(
  "w-full rounded-[6px] border border-lux-ink/[0.1] bg-lux-paper px-[1.1rem] py-[0.95rem]",
  "text-[0.953125rem] font-normal tracking-[0.012em] text-lux-ink max-lg:text-[1rem] max-lg:py-[1.05rem]",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_1px_0_rgba(45,42,37,0.04)]",
  "transition-[border-color,box-shadow,background-color] duration-480 ease-luxury motion-reduce:transition-none",
  "placeholder:text-lux-ink/38 focus:border-lux-gold/38 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lux-gold/22",
);


export function LeadInquiryForm() {
  const locale = useSiteLocale();
  const { croMessaging } = useEditorialCopy();
  const ar = locale === "ar";

  const [leadRid] = useState(createLeadRequestId);
  const { handleSubmit, submitting, errorMessage, errorAlertRef } = useLeadFormSubmit({
    formKind: "contact",
  });

  const labels = ar
    ? {
        aria: "استفسار — الاسم ورقم الهاتف ونوع الوحدة (حقول مطلوبة)",
        legend: "استفسار — الاسم الكامل ورقم الهاتف ونوع الوحدة المطلوب (مطلوب)",
        fullName: "الاسم الكامل",
        fullNamePh: "الاسم الثلاثي",
        phone: "رقم الهاتف",
        interest: "الاهتمام",
        chooseTypology: "اختر نوع الوحدة",
      }
    : {
        aria: "Private enquiry form",
        legend: "Private inquiry — full name, phone number, and property interest (required)",
        fullName: "Full Name",
        fullNamePh: "Full name",
        phone: "Phone Number",
        interest: "Interested In",
        chooseTypology: "Choose typology",
      };

  return (
    <form
      method="POST"
      action={formSubmitConfig.action}
      onSubmit={handleSubmit}
      aria-label={labels.aria}
      className="max-w-md space-y-8 max-lg:space-y-9"
      noValidate
    >
      <div className="space-y-4">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-lux-ink/40">
          {croMessaging.leadFormEyebrow}
        </p>
        <ConversionValueChips tone="light" />
        <p className="text-[0.8125rem] font-normal leading-relaxed tracking-[0.018em] text-lux-ink/54 md:text-[0.84375rem]">
          {croMessaging.leadFormSubtitle}
        </p>
      </div>

      <LeadFormHiddenFields formSurface={CONTACT_FORM_SURFACE} rid={leadRid} />

      <fieldset className="m-0 min-w-0 space-y-7 border-0 p-0 max-lg:space-y-8" disabled={submitting}>
        <legend className="sr-only">{labels.legend}</legend>

        <div className={fieldWrap}>
          <label htmlFor="lead-name" className={labelClass}>
            {labels.fullName}
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            placeholder={labels.fullNamePh}
          />
        </div>

        <div className={fieldWrap}>
          <label htmlFor="lead-phone" className={labelClass}>
            {labels.phone}
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
            {labels.interest}
          </label>
          <LuxurySelect
            id="lead-interest"
            name="interestedIn"
            required
            defaultValue=""
            aria-required="true"
            placeholder={labels.chooseTypology}
            variant="light"
            options={LEAD_INTEREST_OPTIONS.map((opt: LeadInterestOption) => ({
              value: opt,
              label: ar ? leadInterestArabicDisplay[opt] : opt,
            }))}
          />
        </div>

        {errorMessage ?
          <p
            ref={errorAlertRef}
            role="alert"
            tabIndex={-1}
            className="rounded-sm border border-lux-ink/[0.1] bg-lux-mist/40 px-4 py-3 text-sm leading-relaxed text-lux-ink/78"
          >
            {errorMessage}
          </p>
        : null}

        <p className="text-[0.8125rem] leading-relaxed tracking-[0.01em] text-lux-ink/52 md:text-[0.84375rem]">
          {croMessaging.leadFormRoutingNote}
        </p>

        <div className="flex flex-col gap-2.5 max-lg:gap-3">
          <CtaButton type="submit" variant="primary" size="lg" disabled={submitting} className="w-full">
            {submitting ? croMessaging.leadFormSubmitPending : croMessaging.leadFormSubmitIdle}
          </CtaButton>
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
