import { TransactionalPageView } from "@/components/transactions/transactional-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { paymentPlanPageSeoAr } from "@/data/seo/ar-routes-registry";
import { buildPaymentPlanTransactionalModelAr } from "@/data/transactions/transaction-page-model-ar";
import { getTransactionalStructuredData } from "@/lib/schema/jsonld/transactional-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(paymentPlanPageSeoAr);

export default function ArabicPaymentPlanPage() {
  const model = buildPaymentPlanTransactionalModelAr();

  return (
    <>
      <JsonLd data={getTransactionalStructuredData(paymentPlanPageSeoAr, model)} />
      <PageMain>
        <TransactionalPageView model={model} />
      </PageMain>
    </>
  );
}
