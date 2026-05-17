import Link from "next/link";

import { GlobalHeroEnquirySection } from "@/components/conversion/global-hero-enquiry-section";
import { SectionMain } from "@/components/layout/section-main";
import { privacyPolicyPageSeoAr } from "@/data/seo/ar-routes-registry";
import { siteConfig } from "@/data/site";
import { englishPathToArabicPath } from "@/lib/i18n/paths";
import { buildPageMetadata } from "@/seo/build-metadata";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata(privacyPolicyPageSeoAr);

const linkClass = cn(
  "font-sans text-[0.9375rem] font-normal tracking-[0.012em] text-lux-ink/[0.88]",
  "underline decoration-lux-gold/32 underline-offset-[0.38em]",
  "transition-[color,decoration-color] hover:text-lux-ink hover:decoration-lux-gold/55",
);

export default function ArabicPrivacyPolicyPage() {
  const homeAr = englishPathToArabicPath["/"]!;
  const contactAr = englishPathToArabicPath["/contact"]!;

  return (
    <SectionMain>
      <article className="mx-auto max-w-readable" aria-labelledby="privacy-ar-heading" dir="rtl">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">قانوني</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1 id="privacy-ar-heading" className="mt-lux-stack-xs max-w-[min(38ch,100%)] font-display text-display-xl text-lux-ink">
            سياسة الخصوصية — استفسارات {siteConfig.name}
          </h1>
          <p className="lux-body mt-lux-stack-sm text-lux-ink/67 md:mt-lux-stack-md">
            توضّح هذه الصفحة كيف يتعامل {siteConfig.shortName} ({siteConfig.url}) مع معلومات الاستفسار التي تُرسل
            عبر النموذج أو الهاتف أو البريد أو واتساب أو روابط القياس. النص للتوضيح ولا يُعد استشارة قانونية.
          </p>
        </header>

        <GlobalHeroEnquirySection />

        <div className="space-y-10 py-10 md:space-y-12 md:py-12">
          <section
            aria-labelledby="privacy-controller-ar"
            className={cn("lux-post-hero-section rounded-sm px-1 py-1 md:px-2")}
          >
            <h2 id="privacy-controller-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
              بيانات التواصل ومكتب المبيعات
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              تُوجَّه الاستفسارات عبر القنوات المنشورة على الموقع:&nbsp;
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className={linkClass}>
                {siteConfig.phone}
              </a>
              ،&nbsp;
              <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                {siteConfig.email}
              </a>
              ، وروابط واتساب الظاهرة في رأس الصفحة وتذييلها.
            </p>
          </section>

          <section aria-labelledby="privacy-data-ar">
            <h2 id="privacy-data-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
              البيانات التي قد نستخدمها للرد على الاستفسار
            </h2>
            <ul className="lux-body mt-4 list-disc space-y-2 pr-5 text-lux-ink/70">
              <li>معرّفات تزوّدونها: الاسم، الهاتف، البريد إن وُجد، ومحتوى الرسالة.</li>
              <li>بيانات تقنية عن الزيارة: عنوان IP، نوع الجهاز/المتصفح، الصفحات، ومنطقة تقريبية إن فُعِّل التحليل.</li>
              <li>معرّفات حملات من العنوان الذي دخلتم منه إن وُجدت.</li>
            </ul>
          </section>

          <section aria-labelledby="privacy-use-ar">
            <h2 id="privacy-use-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
              لماذا نستخدم البيانات في استفسارات سولانا ويست
            </h2>
            <ul className="lux-body mt-4 list-disc space-y-2 pr-5 text-lux-ink/70">
              <li>الرد على طلبات الأسعار، أنظمة السداد، البروشور، أو ترتيب زيارة للمشروع.</li>
              <li>قياس الأداء والتحويلات وفاعلية الإعلان حيث يُفعَّل.</li>
              <li>تأمين الخدمة والتحقيق في إساءات محتملة.</li>
            </ul>
          </section>

          <section aria-labelledby="privacy-cookies-ar">
            <h2 id="privacy-cookies-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
              ملفات الارتباط وقياس الإعلانات
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              قد نستخدم التخزين المحلي والتحليلات وقياس الإعلانات عند تفعيلها، بما يشمل Google Ads وMeta. يمكنكم
              الحد من التتبع من إعدادات المتصفح دون أن تتأثر قراءة الصفحات العامة.
            </p>
          </section>

          <section aria-labelledby="privacy-retention-ar">
            <h2 id="privacy-retention-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
              مدة الاحتفاظ بالاستفسارات
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              تُحفَظ الاستفسارات بالقدر اللازم لخدمتكم والوفاء بالالتزامات القانونية أو المحاسبية. وقد تبقى بيانات
              قياس مجمّعة لدى مزودي الخدمة وفق سياساتهم.
            </p>
          </section>

          <section aria-labelledby="privacy-rights-ar">
            <h2 id="privacy-rights-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
              حقوقك في الوصول والتصحيح
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              يمكنكم طلب الاطلاع أو التصحيح أو المحو وفق القانون المعمول. لتفضيلات الإعلان على Google وMeta استخدموا
              أدوات الخصوصية لديهم.
            </p>
          </section>

          <section aria-labelledby="privacy-changes-ar">
            <h2 id="privacy-changes-ar" className="font-display text-lux-display-sm font-medium text-lux-ink">
              تحديثات سياسة الخصوصية
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              قد نحدِّث هذه الصفحة مع تغيُّر الممارسات أو الشركاء. تابعوا{" "}
              <Link href={homeAr} className={linkClass}>
                العربية الرئيسية
              </Link>{" "}
              أو{" "}
              <Link href={contactAr} className={linkClass}>
                التواصل
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </SectionMain>
  );
}
