import Link from "next/link";

import { SectionMain } from "@/components/layout/section-main";
import { SectionHeader } from "@/components/sections/section-header";
import { ThankYouVerifiedLeadPulse } from "@/components/tracking/thank-you-conversions";
import { CtaButton } from "@/components/ui/cta-button";
import { thankYouPageSeo } from "@/data/seo/thank-you";
import { siteConfig } from "@/data/site";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(thankYouPageSeo);

function firstParam(v: string | string[] | undefined): string | undefined {
  if (typeof v === "string") return v;
  return undefined;
}

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function ThankYouPage({ searchParams }: PageProps) {
  const conversion = firstParam(searchParams?.conversion);
  const rid = firstParam(searchParams?.rid);

  const isLeadAck = conversion === "lead" && Boolean(rid);

  return (
    <SectionMain>
      <ThankYouVerifiedLeadPulse conversion={conversion} requestId={rid} />

      <div className="max-w-2xl space-y-12">
        <SectionHeader
          id="thank-you-heading"
          eyebrow="Acknowledgement"
          title={isLeadAck ? "Enquiry logged" : "Thank you"}
          kicker={
            <p>
              {isLeadAck ? (
                <>
                  Sales aligns responses with issuance-accurate data. Prefer live thread on the same desk? Reach{" "}
                  {siteConfig.phone} by call or WhatsApp.
                </>
              ) : (
                <>No further confirmation is exposed on this route.</>
              )}
            </p>
          }
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <CtaButton
            href={siteConfig.whatsAppUrl}
            external
            variant="secondary"
            size="lg"
            data-track="whatsapp_click"
            data-track-placement="thank_you_confirmation"
          >
            Open WhatsApp
          </CtaButton>

          <CtaButton href="/" variant="ghost" size="lg" data-track="cta_click">
            Back to home
          </CtaButton>

          <Link
            href="/contact"
            className="text-sm font-normal tracking-[0.01em] text-lux-ink/52 underline decoration-lux-ink/[0.18] underline-offset-[10px] transition-colors hover:text-lux-ink hover:decoration-lux-gold/48 sm:ml-auto"
            data-track="cta_click"
            data-track-placement="thank_you_secondary"
          >
            Contact desk
          </Link>
        </div>
      </div>
    </SectionMain>
  );
}
