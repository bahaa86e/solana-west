import { MasterPlanPageView } from "@/components/master-plan/master-plan-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMasterPlanPageModelAr } from "@/data/master-plan/master-plan-page-model-ar";
import { masterPlanPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getMasterPlanStructuredData } from "@/lib/schema/jsonld/master-plan-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(masterPlanPageSeoAr);

export default function ArabicMasterPlanPage() {
  const model = buildMasterPlanPageModelAr();

  return (
    <>
      <JsonLd data={getMasterPlanStructuredData(masterPlanPageSeoAr, model)} />
      <PageMain>
        <MasterPlanPageView model={model} />
      </PageMain>
    </>
  );
}
