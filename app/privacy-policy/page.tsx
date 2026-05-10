import Link from "next/link";

import { SectionMain } from "@/components/layout/section-main";
import { privacyPolicyPageSeo } from "@/data/seo/routes";
import { siteConfig } from "@/data/site";
import { buildPageMetadata } from "@/seo/build-metadata";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata(privacyPolicyPageSeo);

const linkClass = cn(
  "font-sans text-[0.9375rem] font-normal tracking-[0.012em] text-lux-ink/[0.88]",
  "underline decoration-lux-gold/32 underline-offset-[0.38em]",
  "transition-[color,decoration-color] hover:text-lux-ink hover:decoration-lux-gold/55",
);

export default function PrivacyPolicyPage() {
  return (
    <SectionMain>
      <article className="mx-auto max-w-readable" aria-labelledby="privacy-heading">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">Legal</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1 id="privacy-heading" className="mt-lux-stack-xs max-w-[min(38ch,100%)] font-display text-display-xl text-lux-ink">
            Privacy policy — Solana West New Zayed enquiries
          </h1>
          <p className="lux-body mt-lux-stack-sm text-lux-ink/67 md:mt-lux-stack-md">
            This notice describes how {siteConfig.shortName} ({siteConfig.url}) handles information you share when you
            enquire by form, phone, email, WhatsApp, or tracked links. It is not legal advice.
          </p>
        </header>

        <div className="space-y-10 py-10 md:space-y-12 md:py-12">
          <section aria-labelledby="privacy-controller">
            <h2 id="privacy-controller" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Who manages data &amp; how to reach the desk
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              Operational enquiries route through the channels published on this site:&nbsp;
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className={linkClass}>
                {siteConfig.phone}
              </a>
              ,&nbsp;
              <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                {siteConfig.email}
              </a>
              , and the WhatsApp entry point linked in the header and footer.
            </p>
          </section>

          <section aria-labelledby="privacy-data">
            <h2 id="privacy-data" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Personal &amp; technical data this site may touch
            </h2>
            <ul className="lux-body mt-4 list-disc space-y-2 pl-5 text-lux-ink/70">
              <li>Identifiers you supply: name, phone number, email (if provided), and message content.</li>
              <li>
                Technical data from your visit: IP address, device/browser type, pages viewed, and approximate region
                (via analytics or advertising pixels if enabled).
              </li>
              <li>Referral parameters from campaign URLs when present in the link you used.</li>
            </ul>
          </section>

          <section aria-labelledby="privacy-use">
            <h2 id="privacy-use" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Why enquiries, analytics &amp; measurement exist here
            </h2>
            <ul className="lux-body mt-4 list-disc space-y-2 pl-5 text-lux-ink/70">
              <li>Responding to pricing, payment-plan, brochure, and site-visit requests.</li>
              <li>Measuring site performance, ad effectiveness, and conversion quality.</li>
              <li>Securing the service and investigating abuse or fraud attempts.</li>
            </ul>
          </section>

          <section aria-labelledby="privacy-cookies">
            <h2 id="privacy-cookies" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Cookies, pixels &amp; blocking choices
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              We may use cookies or local storage for analytics (e.g. Google Analytics), advertising measurement (e.g.
              Google Ads tags), and social pixels (e.g. Meta) where implemented. Use your browser controls to limit
              storage; blocking some tags may affect measurement only—not your ability to read public pages.
            </p>
          </section>

          <section aria-labelledby="privacy-retention">
            <h2 id="privacy-retention" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Retention
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              Enquiry records are kept only as long as needed to service your request, meet applicable legal or
              accounting obligations, and defend claims. Aggregated analytics data may persist in vendor dashboards under
              their own policies.
            </p>
          </section>

          <section aria-labelledby="privacy-rights">
            <h2 id="privacy-rights" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Access, correction &amp; vendor-side controls
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              You may ask to access, correct, or delete enquiry data we hold, subject to law. Contact us using the
              details above. For third-party platforms (Meta, Google), use their privacy tools for ad preferences.
            </p>
          </section>

          <section aria-labelledby="privacy-changes">
            <h2 id="privacy-changes" className="font-display text-lux-display-sm font-medium text-lux-ink">
              When &amp; how this privacy notice updates
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              We may update this page when our practices or partners change. The effective date is the date shown in your
              browser when you last loaded this policy. Continue to the{" "}
              <Link href="/" className={linkClass}>
                homepage
              </Link>{" "}
              or{" "}
              <Link href="/contact" className={linkClass}>
                contact
              </Link>{" "}
              desk.
            </p>
          </section>
        </div>
      </article>
    </SectionMain>
  );
}
