import Link from "next/link";

import { LeadInquiryForm } from "@/components/forms/lead-inquiry-form";
import { SectionHeader } from "@/components/sections/section-header";
import { SectionShell } from "@/components/sections/section-shell";
import { CtaButton } from "@/components/ui/cta-button";
import type { ContactPageModel } from "@/data/contact/contact-page-model";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const subtleLink =
  "text-[0.9375rem] font-normal tracking-[0.01em] text-lux-ink/62 underline decoration-lux-ink/[0.14] underline-offset-[10px] transition-colors duration-400 hover:text-lux-ink hover:decoration-lux-gold/42";

export function ContactChannelsAndFormSection({ model }: { model: ContactPageModel }) {
  const { channels, formColumn, idPrefix } = model;
  const tel = siteConfig.phone.replace(/\s/g, "");
  const channelsHeadingId = `${idPrefix}-channels-heading`;
  const formHeadingId = `${idPrefix}-form-heading`;

  return (
    <SectionShell
      id={`${idPrefix}-inquiry`}
      aria-labelledby={`${channelsHeadingId} ${formHeadingId}`}
      tone="sand"
      containerSize="wide"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-20 xl:gap-28">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <div>
            <SectionHeader
              id={channelsHeadingId}
              eyebrow={channels.eyebrow}
              title={channels.title}
              kicker={<p className="font-normal text-lux-ink/64">{channels.intro}</p>}
            />

            <ul className="mt-14 flex list-none flex-col gap-10 p-0" role="list">
              <li>
                <p className="text-micro uppercase tracking-[0.22em] text-lux-ink/40">WhatsApp</p>
                <p className="mt-3 max-w-xs text-[0.9375rem] leading-[1.72] tracking-[0.012em] text-lux-ink/66 md:text-base">
                  Fast context for issuance questions — mirrors how many buyers coordinate abroad.
                </p>
                <div className="mt-8">
                  <CtaButton
                    href={siteConfig.whatsAppUrl}
                    external
                    variant="secondary"
                    size="lg"
                    className="w-full px-12 sm:w-auto"
                    data-track="whatsapp_click"
                    data-track-placement="contact_hero_whatsapp"
                  >
                    Open WhatsApp
                  </CtaButton>
                </div>
              </li>

              <li className="border-t border-lux-ink/[0.07] pt-10">
                <p className="text-micro uppercase tracking-[0.22em] text-lux-ink/40">Phone</p>
                <p className="mt-3 max-w-xs text-[0.9375rem] leading-[1.72] tracking-[0.012em] text-lux-ink/66 md:text-base">
                  Voice desks suit multi-party briefings — same commercial posture as authorised ORA issuance.
                </p>
                <div className="mt-8">
                  <CtaButton
                    href={`tel:${tel}`}
                    variant="ghost"
                    size="lg"
                    className={cn(
                      "w-full border border-lux-ink/[0.12] bg-lux-paper/50 px-10 sm:w-auto",
                      "hover:border-lux-ink/[0.2] hover:bg-lux-paper",
                    )}
                    data-track="phone_call_click"
                    data-track-placement="contact_editorial_phone"
                  >
                    Call {siteConfig.phone}
                  </CtaButton>
                </div>
              </li>

              <li className="border-t border-lux-ink/[0.07] pt-10">
                <p className="text-micro uppercase tracking-[0.22em] text-lux-ink/40">Email</p>
                <p className="mt-3 max-w-xs text-[0.9375rem] leading-[1.72] tracking-[0.012em] text-lux-ink/66 md:text-base">
                  For attachments or formal routing when your organisation requires documentation trails.
                </p>
                <p className="mt-8">
                  <a href={`mailto:${siteConfig.email}`} className={subtleLink}>
                    {siteConfig.email}
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 lg:border-l lg:border-lux-ink/[0.06] lg:pl-[clamp(1.75rem,4vw,3.75rem)]">
          <SectionHeader id={formHeadingId} eyebrow={formColumn.eyebrow} title={formColumn.title} />
          <p className="mt-8 max-w-md text-[0.9375rem] font-normal leading-[1.72] tracking-[0.014em] text-lux-ink/62 md:text-base">
            {formColumn.intro}
          </p>
          <div className="mt-12 rounded-[11px] border border-lux-ink/[0.065] bg-gradient-to-br from-white/92 via-lux-paper/96 to-[#e8e0d6]/90 p-[clamp(1.75rem,4vw,2.75rem)] shadow-[0_34px_86px_-44px_rgba(10,10,10,0.22),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-[18px] md:p-11">
            <LeadInquiryForm />
          </div>
          <p className="mt-10">
            <Link href="/privacy-policy" className={subtleLink}>
              Privacy policy
            </Link>
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
