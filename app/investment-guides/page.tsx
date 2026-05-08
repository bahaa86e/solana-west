import { SectionMain } from "@/components/layout/section-main";
import { investmentGuidesPageSeo } from "@/data/seo/routes";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(investmentGuidesPageSeo);

export default function InvestmentGuidesPage() {
  return <SectionMain />;
}
