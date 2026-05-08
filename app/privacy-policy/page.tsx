import { SectionMain } from "@/components/layout/section-main";
import { privacyPolicyPageSeo } from "@/data/seo/routes";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(privacyPolicyPageSeo);

export default function PrivacyPolicyPage() {
  return <SectionMain />;
}
