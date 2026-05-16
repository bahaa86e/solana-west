import Link from "next/link";

import { GlobalHeroEnquirySection } from "@/components/conversion/global-hero-enquiry-section";
import { SectionMain } from "@/components/layout/section-main";
import { comparisonPagesSeoAr } from "@/data/seo/ar-routes-registry";
import { siteConfig } from "@/data/site";
import { localizedPathname } from "@/lib/i18n/paths";
import { buildPageMetadata } from "@/seo/build-metadata";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata(comparisonPagesSeoAr);

const linkClass = cn(
  "font-sans text-[0.9375rem] font-normal tracking-[0.012em] text-lux-ink/[0.88]",
  "underline decoration-lux-gold/32 underline-offset-[0.38em]",
  "transition-[color,decoration-color] hover:text-lux-ink hover:decoration-lux-gold/55",
);

export default function ArabicComparisonPagesHub() {
  return (
    <SectionMain>
      <article className="mx-auto max-w-readable" aria-labelledby="comparison-ar-heading" dir="rtl">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">مقارنة هادئة</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1
            id="comparison-ar-heading"
            className="mt-lux-stack-xs max-w-[min(42ch,100%)] font-display text-display-xl text-lux-ink"
          >
            مقارنة كمبوندات نيو زايد حول {siteConfig.shortName}
          </h1>
          <p className="lux-body mt-lux-stack-sm max-w-[54ch] text-lux-ink/68 md:mt-lux-stack-md">
            قارن كل مشروع من خلال كثافة المخطط، جودة المساحات الخضراء، سهولة الوصول، وضوح جهة البيع، وما تراه وحدتك
            عند التسليم. تُذكر VYE وBelle Vie كمراجع سوقية في نيو زايد فقط، دون انتماء أو شراكة.
          </p>
        </header>

        <GlobalHeroEnquirySection />

        <section className="border-b border-lux-ink/[0.06] py-10 md:py-12" aria-labelledby="comparison-framework-ar">
          <h2 id="comparison-framework-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
            معايير مقارنة كمبوندات نيو زايد قبل الشراء
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pr-5 text-lux-ink/68">
            <li>توزيع الأرض والكثافة قبل الانبهار بالواجهة أو الصورة التسويقية.</li>
            <li>سهولة الوصول عبر محور الضبعة والطرق المحيطة مع الحفاظ على الخصوصية اليومية.</li>
            <li>خطة السداد المكتوبة مقابل العناوين المختصرة في الإعلانات.</li>
            <li>مواعيد التسليم حسب المرحلة، لا حسب عبارة عامة تصلح لكل الوحدات.</li>
          </ul>
          <p className="lux-body mt-6 max-w-[52ch] text-lux-ink/68">
            تعميق:&nbsp;
            <Link href={localizedPathname("/blog/solana-west-vs-vye-belle-vie-buyer-framework-2026", "ar")} className={linkClass}>
              مقارنة سولانا ويست مع VYE وBelle Vie
            </Link>
          </p>
        </section>

        <section className="border-b border-lux-ink/[0.06] py-10 md:py-12" aria-labelledby="comparison-product-ar">
          <h2 id="comparison-product-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
            أنواع وحدات سولانا ويست من الفلل إلى الشقق
          </h2>
          <p className="lux-body mt-4 max-w-[52ch] text-lux-ink/68">
            اقرأ أنواع الوحدات معاً قبل مقارنة المجمعات؛ فالواجهة، التشطيب، المساحة، وموقع المرحلة كلها تغيّر معنى السعر.
          </p>
          <ul className="lux-body mt-5 max-w-[52ch] list-disc space-y-2 pr-5 text-lux-ink/68">
            <li>
              <Link href={localizedPathname("/properties/villas", "ar")} className={linkClass}>
                فلل سولانا ويست
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/properties/townhouses", "ar")} className={linkClass}>
                تاون هاوس سولانا ويست
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/properties/twin-houses", "ar")} className={linkClass}>
                توين هاوس سولانا ويست
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/properties/apartments", "ar")} className={linkClass}>
                شقق سولانا ويست
              </Link>
            </li>
          </ul>
        </section>

        <section className="py-10 md:py-12" aria-labelledby="comparison-journal-ar">
          <h2 id="comparison-journal-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
            مقالات مقارنة للمشتري الجاد في غرب القاهرة
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pr-5 text-lux-ink/68">
            <li>
              <Link href={localizedPathname("/blog/solana-west-villas-vs-apartments-lifestyle-investment", "ar")} className={linkClass}>
                فلل سولانا ويست أم الشقق: أسلوب حياة واستثمار
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/blog/solana-west-new-zayed-prices-payment-plan-2026", "ar")} className={linkClass}>
                أسعار سولانا ويست وخطة السداد
              </Link>
            </li>
            <li>
              <Link href={localizedPathname("/location", "ar")} className={linkClass}>
                موقع سولانا ويست نيو زايد
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </SectionMain>
  );
}
