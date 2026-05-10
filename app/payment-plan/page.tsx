import { TransactionalPageView } from "@/components/transactions/transactional-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPaymentPlanTransactionalModel } from "@/data/transactions/transaction-page-model";
import { paymentPlanPageSeo } from "@/data/seo/routes";
import { getTransactionalStructuredData } from "@/lib/schema/jsonld/transactional-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(paymentPlanPageSeo);

export default function PaymentPlanPage() {
  const model = buildPaymentPlanTransactionalModel();

  return (
    <>
      <JsonLd data={getTransactionalStructuredData(paymentPlanPageSeo, model)} />
      <PageMain>
        <TransactionalPageView model={model} />
      </PageMain>
    </>
  );
}
