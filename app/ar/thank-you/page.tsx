import Link from "next/link";

import { SectionMain } from "@/components/layout/section-main";
import { SectionHeader } from "@/components/sections/section-header";
import { ThankYouVerifiedLeadPulse } from "@/components/tracking/thank-you-conversions";
import { CtaButton } from "@/components/ui/cta-button";
import { thankYouPageSeoAr } from "@/data/seo/thank-you-ar";
import { siteConfig } from "@/data/site";
import { englishPathToArabicPath } from "@/lib/i18n/paths";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(thankYouPageSeoAr);

function firstParam(v: string | string[] | undefined): string | undefined {
  if (typeof v === "string") return v;
  return undefined;
}

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function ArabicThankYouPage({ searchParams }: PageProps) {
  const conversion = firstParam(searchParams?.conversion);
  const rid = firstParam(searchParams?.rid);
  const isLeadAck = conversion === "lead" && Boolean(rid);
  const homeAr = englishPathToArabicPath["/"]!;
  const contactAr = englishPathToArabicPath["/contact"]!;

  return (
    <SectionMain>
      <ThankYouVerifiedLeadPulse conversion={conversion} requestId={rid} />

      <div className="max-w-2xl space-y-12" dir="rtl">
        <SectionHeader
          id="thank-you-ar-heading"
          titleAs="h1"
          eyebrow="إقرار"
          title={isLeadAck ? "تم استلام الاستفسار — سنرد قريباً" : "شكراً — تم استلام الطلب"}
          kicker={
            <p>
              {isLeadAck ?
                <>
                  يوازن المكتب الردود مع بيانات مطابقة للإصدار. تفضِّلون خيطاً حياً على نفس المكتب؟ اتصلوا أو واتساب
                  على {siteConfig.phone}.
                </>
              : <>لا تُعرَض تأكيدات إضافية على هذا المسار.</>}
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
            data-track-placement="thank_you_confirmation_ar"
          >
            فتح واتساب
          </CtaButton>

          <CtaButton href={homeAr} variant="ghost" size="lg" data-track="cta_click">
            العودة للرئيسية العربية
          </CtaButton>

          <Link
            href={contactAr}
            className="text-sm font-normal tracking-[0.01em] text-lux-ink/52 underline decoration-lux-ink/[0.18] underline-offset-[10px] transition-colors hover:text-lux-ink hover:decoration-lux-gold/48 sm:mr-auto"
            data-track="cta_click"
            data-track-placement="thank_you_secondary_ar"
          >
            مكتب التواصل
          </Link>
        </div>
      </div>
    </SectionMain>
  );
}
