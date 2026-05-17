"use client";



import { useState } from "react";



import { LeadFormHiddenFields } from "@/components/forms/lead-form-hidden-fields";

import { useSiteLocale } from "@/components/i18n/site-locale-context";

import { WhatsAppIcon } from "@/components/icons/whatsapp";

import { CtaButton } from "@/components/ui/cta-button";
import { LuxurySelect } from "@/components/ui/luxury-select";

import { heroEnquiryCopyAr, heroEnquiryCopyEn } from "@/data/cro/hero-enquiry";

import { siteConfig } from "@/data/site";

import { useLeadFormSubmit } from "@/hooks/use-lead-form-submit";

import { heroLeadProjectArabicDisplay, heroLeadUnitArabicDisplay } from "@/lib/hero-lead-display-ar";

import {

  HERO_ENQUIRY_FORM_SURFACE,

  HERO_LEAD_PROJECT_OPTIONS,

  HERO_LEAD_UNIT_OPTIONS,

} from "@/lib/hero-lead-options";

import { createLeadRequestId } from "@/lib/lead-form-rid";
import { formSubmitConfig } from "@/data/lead-formsubmit";

import { cn } from "@/lib/utils";



export function HeroEnquiryForm() {

  const locale = useSiteLocale();

  const ar = locale === "ar";

  const copy = ar ? heroEnquiryCopyAr : heroEnquiryCopyEn;



  const [leadRid] = useState(createLeadRequestId);

  const { handleSubmit, submitting, errorMessage, errorAlertRef } = useLeadFormSubmit({
    formKind: "hero",
  });



  const labels = ar

    ? {

        aria: "نموذج استفسار — الاسم والهاتف والبريد ونوع الوحدة والمشروع",

        legend: "استفسار — جميع الحقول مطلوبة",

        fullName: "الاسم الكامل",

        fullNamePh: "الاسم الثلاثي",

        phone: "رقم الهاتف",

        email: "البريد الإلكتروني",

        emailPh: "name@email.com",

        unitType: "نوع الوحدة",

        chooseUnit: "اختر نوع الوحدة",

        project: "اختر المشروع",

      }

    : {

        aria: "Luxury enquiry form",

        legend: "Enquiry — full name, phone, email, unit type, and project (required)",

        fullName: "Full Name",

        fullNamePh: "Full name",

        phone: "Phone Number",

        email: "Email Address",

        emailPh: "name@email.com",

        unitType: "Unit Type",

        chooseUnit: "Select unit type",

        project: "Select Project",

      };



  return (

    <form
      method="POST"
      action={formSubmitConfig.action}
      onSubmit={handleSubmit}
      aria-label={labels.aria}
      className="w-full"
      noValidate
    >

      <LeadFormHiddenFields formSurface={HERO_ENQUIRY_FORM_SURFACE} rid={leadRid} />



      <fieldset className="m-0 min-w-0 space-y-6 border-0 p-0 max-lg:space-y-7 lg:space-y-[1.875rem]" disabled={submitting}>

        <legend className="sr-only">{labels.legend}</legend>



        <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6 lg:gap-y-7 max-lg:gap-y-6">

          <div className={cn("lux-enquiry-field", "sm:col-span-2")}>

            <label htmlFor="hero-enquiry-name" className="lux-enquiry-label">

              {labels.fullName}

            </label>

            <input

              id="hero-enquiry-name"

              name="name"

              type="text"

              autoComplete="name"

              required

              className="lux-enquiry-input"

              placeholder={labels.fullNamePh}

            />

          </div>



          <div className="lux-enquiry-field">

            <label htmlFor="hero-enquiry-phone" className="lux-enquiry-label">

              {labels.phone}

            </label>

            <input

              id="hero-enquiry-phone"

              name="phone"

              type="tel"

              autoComplete="tel"

              required

              className="lux-enquiry-input"

              placeholder={siteConfig.phone}

            />

          </div>



          <div className="lux-enquiry-field">

            <label htmlFor="hero-enquiry-email" className="lux-enquiry-label">

              {labels.email}

            </label>

            <input

              id="hero-enquiry-email"

              name="email"

              type="email"

              autoComplete="email"

              required

              className="lux-enquiry-input"

              placeholder={labels.emailPh}

            />

          </div>



          <div className="lux-enquiry-field">

            <label htmlFor="hero-enquiry-unit" className="lux-enquiry-label">

              {labels.unitType}

            </label>

            <LuxurySelect
              id="hero-enquiry-unit"
              name="interestedIn"
              required
              defaultValue=""
              aria-required="true"
              placeholder={labels.chooseUnit}
              variant="dark"
              options={HERO_LEAD_UNIT_OPTIONS.map((opt) => ({
                value: opt,
                label: ar ? heroLeadUnitArabicDisplay[opt] : opt,
              }))}
            />

          </div>



          <div className="lux-enquiry-field">

            <label htmlFor="hero-enquiry-project" className="lux-enquiry-label">

              {labels.project}

            </label>

            <LuxurySelect
              id="hero-enquiry-project"
              name="selectedProject"
              required
              defaultValue="Solana West New Zayed"
              aria-required="true"
              variant="dark"
              options={HERO_LEAD_PROJECT_OPTIONS.map((opt) => ({
                value: opt,
                label: ar ? heroLeadProjectArabicDisplay[opt] : opt,
              }))}
            />

          </div>

        </div>



        {errorMessage ?

          <p ref={errorAlertRef} role="alert" tabIndex={-1} className="lux-enquiry-alert">

            {errorMessage}

          </p>

        : null}




        <div className="lux-enquiry-actions">

          <CtaButton

            type="submit"

            variant="navy"

            size="lg"

            disabled={submitting}

            className="w-full !min-h-[3.25rem] !rounded-[12px] !tracking-[0.04em] max-lg:!min-h-[3.375rem]"

          >

            {submitting ? copy.submitPending : copy.submitLabel}

          </CtaButton>

          <CtaButton

            href={siteConfig.whatsAppUrl}

            external

            variant="whatsappIvory"

            size="lg"

            leadingIcon={
              <WhatsAppIcon className="size-[1.05rem] shrink-0 text-[#213459]/65" aria-hidden />
            }

            className="w-full !min-h-[3.25rem] !rounded-[12px] !tracking-[0.036em] max-lg:!min-h-[3.375rem]"

            data-track="whatsapp_click"

            data-track-placement="hero_enquiry_whatsapp"

          >

            {copy.whatsappEscalation}

          </CtaButton>

        </div>

      </fieldset>

    </form>

  );

}

