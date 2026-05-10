"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { usePathname } from "next/navigation";

import type { LeadFormState } from "@/app/(site)/contact/actions";
import { submitLeadInquiry } from "@/app/(site)/contact/actions";
import { ConversionValueChips } from "@/components/conversion/conversion-value-chips";
import { useEditorialCopy } from "@/components/i18n/editorial-copy-context";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CtaButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/data/site";
import { LEAD_INTEREST_OPTIONS, type LeadInterestOption } from "@/lib/lead-interest-options";
import { leadInterestArabicDisplay } from "@/lib/lead-interest-display-ar";
import { cn } from "@/lib/utils";

const initialLeadState: LeadFormState = { ok: false };

/** Same-origin path only — blocks open redirects if server state were ever tampered with */
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

const selectClass = cn(inputClass, "cursor-pointer");

function LeadSubmitButton({ disabled }: { disabled?: boolean }) {
  const { pending } = useFormStatus();
  const { croMessaging } = useEditorialCopy();

  return (
    <CtaButton type="submit" variant="primary" size="lg" disabled={pending || disabled} className="w-full">
      {pending ? croMessaging.leadFormSubmitPending : croMessaging.leadFormSubmitIdle}
    </CtaButton>
  );
}

export function LeadInquiryForm() {
  const pathname = usePathname() ?? "/";
  const locale = useSiteLocale();
  const { croMessaging } = useEditorialCopy();
  const ar = locale === "ar";

  const [clientContext, setClientContext] = useState({ domain: "", referrer: "" });

  /** Full-page navigation after success so thank-you conversions and cookies fire reliably */
  const redirectOnce = useRef(false);
  const [redirecting, setRedirecting] = useState(false);
  const errorAlertRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setClientContext({
      domain: typeof window !== "undefined" ? window.location.hostname : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    });
  }, []);

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
    <form action={formAction} aria-label={labels.aria} className="max-w-md space-y-8 max-lg:space-y-9">
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

      <fieldset className="m-0 min-w-0 space-y-7 border-0 p-0 max-lg:space-y-8">
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
          <select
            id="lead-interest"
            name="interestedIn"
            required
            className={selectClass}
            defaultValue=""
            aria-required="true"
          >
            <option value="" disabled>
              {labels.chooseTypology}
            </option>
            {LEAD_INTEREST_OPTIONS.map((opt: LeadInterestOption) => (
              <option key={opt} value={opt}>
                {ar ? leadInterestArabicDisplay[opt] : opt}
              </option>
            ))}
          </select>
        </div>

        {!state.ok && state.message ? (
          <p
            ref={errorAlertRef}
            role="alert"
            tabIndex={-1}
            className="rounded-sm border border-lux-ink/[0.1] bg-lux-mist/40 px-4 py-3 text-sm leading-relaxed text-lux-ink/78"
          >
            {state.message}
          </p>
        ) : null}

        {redirecting ?
          <p className="text-[0.8125rem] leading-relaxed text-lux-ink/52" aria-live="polite">
            {ar ? "إعادة التوجيه إلى صفحة التأكيد…" : "Taking you to the confirmation page…"}
          </p>
        : null}

        <p className="text-[0.8125rem] leading-relaxed tracking-[0.01em] text-lux-ink/52 md:text-[0.84375rem]">
          {croMessaging.leadFormRoutingNote}
        </p>

        <div className="flex flex-col gap-2.5 max-lg:gap-3">
          <LeadSubmitButton disabled={redirecting} />
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
