import { MasterPlanPageView } from "@/components/master-plan/master-plan-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMasterPlanPageModel } from "@/data/master-plan/master-plan-page-model";
import { masterPlanPageSeo } from "@/data/seo/routes";
import { getMasterPlanStructuredData } from "@/schemas/master-plan-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(masterPlanPageSeo);

export default function MasterPlanPage() {
  const model = buildMasterPlanPageModel();

  return (
    <>
      <JsonLd data={getMasterPlanStructuredData(masterPlanPageSeo, model)} />
      <PageMain>
        <MasterPlanPageView model={model} />
      </PageMain>
    </>
  );
}
