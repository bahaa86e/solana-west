"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import type { LeadFormState } from "@/app/(site)/contact/actions";
import { submitLeadInquiry } from "@/app/(site)/contact/actions";
import { LeadFormHiddenFields } from "@/components/forms/lead-form-hidden-fields";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CtaButton } from "@/components/ui/cta-button";
import { heroEnquiryCopyAr, heroEnquiryCopyEn } from "@/data/cro/hero-enquiry";
import { siteConfig } from "@/data/site";
import { heroLeadProjectArabicDisplay, heroLeadUnitArabicDisplay } from "@/lib/hero-lead-display-ar";
import {
  HERO_ENQUIRY_FORM_SURFACE,
  HERO_LEAD_PROJECT_OPTIONS,
  HERO_LEAD_UNIT_OPTIONS,
} from "@/lib/hero-lead-options";
import { createLeadRequestId } from "@/lib/lead-form-rid";
import { cn } from "@/lib/utils";

const initialLeadState: LeadFormState = { ok: false };

function isSafeLeadThankYouRedirect(href: string): boolean {
  if (!href.startsWith("/") || href.startsWith("//")) return false;
  try {
    const u = new URL(href, "http://localhost");
    if (u.username || u.password) return false;
  } catch {
    return false;
  }
  const pathOnly = href.split(/[?#]/)[0] ?? "";
  return pathOnly === "/thank-you" || pathOnly === "/ar/thank-you";
}

const fieldWrap = "flex flex-col gap-2.5";

const labelClass =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-lux-paper/52";

const inputClass = cn(
  "w-full rounded-[6px] border border-white/[0.14] bg-white/[0.06] px-4 py-3.5",
  "text-[0.9375rem] font-normal tracking-[0.01em] text-lux-paper max-lg:text-[1rem] max-lg:py-[1.05rem]",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm",
  "placeholder:text-lux-paper/36",
  "transition-[border-color,box-shadow,background-color] duration-400 ease-luxury motion-reduce:transition-none",
  "focus:border-lux-gold/42 focus:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-lux-gold/28",
);

const selectClass = cn(inputClass, "cursor-pointer");

function HeroEnquirySubmitButton({
  disabled,
  idleLabel,
  pendingLabel,
}: {
  disabled?: boolean;
  idleLabel: string;
  pendingLabel: string;
}) {
  const { pending } = useFormStatus();

  return (
    <CtaButton type="submit" variant="gold" size="lg" disabled={pending || disabled} className="w-full">
      {pending ? pendingLabel : idleLabel}
    </CtaButton>
  );
}

export function HeroEnquiryForm() {
  const locale = useSiteLocale();
  const ar = locale === "ar";
  const copy = ar ? heroEnquiryCopyAr : heroEnquiryCopyEn;

  const [leadRid] = useState(createLeadRequestId);
  const redirectOnce = useRef(false);
  const [redirecting, setRedirecting] = useState(false);
  const errorAlertRef = useRef<HTMLParagraphElement>(null);

  const [state, formAction] = useFormState(submitLeadInquiry, initialLeadState);

  useEffect(() => {
    if (state.ok && state.redirectTo && !redirectOnce.current && isSafeLeadThankYouRedirect(state.redirectTo)) {
      redirectOnce.current = true;
      setRedirecting(true);
      window.location.assign(state.redirectTo);
    }
  }, [state.ok, state.redirectTo]);

  useEffect(() => {
    if (!state.ok && state.message && errorAlertRef.current) {
      errorAlertRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [state.ok, state.message]);

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
    <form action={formAction} aria-label={labels.aria} className="w-full">
      <LeadFormHiddenFields formSurface={HERO_ENQUIRY_FORM_SURFACE} rid={leadRid} />

      <fieldset className="m-0 min-w-0 space-y-5 border-0 p-0">
        <legend className="sr-only">{labels.legend}</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className={cn(fieldWrap, "sm:col-span-2")}>
            <label htmlFor="hero-enquiry-name" className={labelClass}>
              {labels.fullName}
            </label>
            <input
              id="hero-enquiry-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={inputClass}
              placeholder={labels.fullNamePh}
            />
          </div>

          <div className={fieldWrap}>
            <label htmlFor="hero-enquiry-phone" className={labelClass}>
              {labels.phone}
            </label>
            <input
              id="hero-enquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className={inputClass}
              placeholder={siteConfig.phone}
            />
          </div>

          <div className={fieldWrap}>
            <label htmlFor="hero-enquiry-email" className={labelClass}>
              {labels.email}
            </label>
            <input
              id="hero-enquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClass}
              placeholder={labels.emailPh}
            />
          </div>

          <div className={fieldWrap}>
            <label htmlFor="hero-enquiry-unit" className={labelClass}>
              {labels.unitType}
            </label>
            <select
              id="hero-enquiry-unit"
              name="interestedIn"
              required
              className={selectClass}
              defaultValue=""
              aria-required="true"
            >
              <option value="" disabled>
                {labels.chooseUnit}
              </option>
              {HERO_LEAD_UNIT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {ar ? heroLeadUnitArabicDisplay[opt] : opt}
                </option>
              ))}
            </select>
          </div>

          <div className={fieldWrap}>
            <label htmlFor="hero-enquiry-project" className={labelClass}>
              {labels.project}
            </label>
            <select
              id="hero-enquiry-project"
              name="selectedProject"
              required
              className={selectClass}
              defaultValue="Solana West New Zayed"
              aria-required="true"
            >
              {HERO_LEAD_PROJECT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {ar ? heroLeadProjectArabicDisplay[opt] : opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {!state.ok && state.message ? (
          <p
            ref={errorAlertRef}
            role="alert"
            tabIndex={-1}
            className="rounded-[6px] border border-white/12 bg-white/[0.06] px-4 py-3 text-sm leading-relaxed text-lux-paper/82"
          >
            {state.message}
          </p>
        ) : null}

        {redirecting ?
          <p className="text-[0.8125rem] leading-relaxed text-lux-paper/55" aria-live="polite">
            {ar ? "إعادة التوجيه إلى صفحة التأكيد…" : "Taking you to the confirmation page…"}
          </p>
        : null}

        <div className="flex flex-col gap-3 pt-1">
          <HeroEnquirySubmitButton
            disabled={redirecting}
            idleLabel={copy.submitLabel}
            pendingLabel={copy.submitPending}
          />
          <CtaButton
            href={siteConfig.whatsAppUrl}
            external
            variant="whatsappOnDark"
            size="lg"
            leadingIcon={<WhatsAppIcon className="size-[1.1rem]" />}
            className="w-full"
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