import { SectionMain } from "@/components/layout/section-main";
import { comparisonPagesSeo } from "@/data/seo/routes";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(comparisonPagesSeo);

export default function ComparisonPagesHub() {
  return <SectionMain />;
}
