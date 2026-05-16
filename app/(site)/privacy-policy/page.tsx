import { GlobalHeroEnquirySection } from "@/components/conversion/global-hero-enquiry-section";
import { SectionMain } from "@/components/layout/section-main";
import { privacyPolicyPageSeo } from "@/data/seo/routes";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(privacyPolicyPageSeo);

export default function PrivacyPolicyPage() {
  return (
    <SectionMain>
      <article className="mx-auto max-w-readable" aria-labelledby="privacy-heading">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">Privacy</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1 id="privacy-heading" className="mt-lux-stack-xs max-w-[min(38ch,100%)] font-display text-display-xl text-lux-ink">
            Privacy Policy
          </h1>
          <p className="lux-body mt-lux-stack-sm text-lux-ink/67 md:mt-lux-stack-md">
            We respect the privacy of all visitors to this website and are committed to protecting any information shared
            with us through contact forms, WhatsApp, phone calls, or other communication methods.
          </p>
        </header>

        <GlobalHeroEnquirySection />

        <div className="space-y-10 py-10 md:space-y-12 md:py-12">
          <section aria-labelledby="privacy-information">
            <h2 id="privacy-information" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Information We Collect
            </h2>
            <div className="lux-body mt-4 space-y-4 text-lux-ink/70">
              <p>We may collect certain information voluntarily provided by users, including:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Any information submitted through contact forms or messaging platforms</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="privacy-use">
            <h2 id="privacy-use" className="font-display text-lux-display-sm font-medium text-lux-ink">
              How We Use Information
            </h2>
            <div className="lux-body mt-4 space-y-4 text-lux-ink/70">
              <p>The information collected may be used for:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Responding to inquiries and customer requests</li>
                <li>Providing property details, prices, payment plans, and project information</li>
                <li>Improving website content and user experience</li>
                <li>Sharing updates, offers, and real estate opportunities</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="privacy-data-protection">
            <h2 id="privacy-data-protection" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Data Protection
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              We take appropriate measures to help protect user information and prevent unauthorized access, disclosure,
              or misuse of personal data.
            </p>
          </section>

          <section aria-labelledby="privacy-cookies">
            <h2 id="privacy-cookies" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Cookies
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              This website may use cookies and analytics tools to improve browsing experience, analyze website
              performance, and measure advertising effectiveness.
            </p>
          </section>

          <section aria-labelledby="privacy-external-links">
            <h2 id="privacy-external-links" className="font-display text-lux-display-sm font-medium text-lux-ink">
              External Links
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              This website may contain links to external websites or third-party platforms. We are not responsible for
              the privacy practices or content of those external websites.
            </p>
          </section>

          <section aria-labelledby="privacy-disclaimer">
            <h2 id="privacy-disclaimer" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Disclaimer
            </h2>
            <div className="lux-body mt-4 space-y-4 text-lux-ink/70">
              <p>
                This website is created for informational, educational, and marketing purposes related to real estate
                projects in Egypt, including prices, payment plans, unit types, and project-related information.
              </p>
              <p>
                This website is an independent real estate marketing and informational platform and is not the official
                website of ORA Developers Egypt.
              </p>
              <p>
                Prices, availability, specifications, payment plans, and project details may change without prior notice.
                Visitors are encouraged to verify the latest information before making any purchasing decisions.
              </p>
              <p>
                All trademarks, logos, project names, and visual materials displayed on this website remain the property
                of their respective owners.
              </p>
            </div>
          </section>

          <section aria-labelledby="privacy-consent">
            <h2 id="privacy-consent" className="font-display text-lux-display-sm font-medium text-lux-ink">
              Consent
            </h2>
            <p className="lux-body mt-4 text-lux-ink/70">
              By using this website, you agree to this Privacy Policy and consent to the collection and use of information
              as described on this page.
            </p>
          </section>
        </div>
      </article>
    </SectionMain>
  );
}
