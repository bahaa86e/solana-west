import { TransactionalPageView } from "@/components/transactions/transactional-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { pricesPageSeoAr } from "@/data/seo/ar-routes-registry";
import { buildPricesTransactionalModelAr } from "@/data/transactions/transaction-page-model-ar";
import { getTransactionalStructuredData } from "@/lib/schema/jsonld/transactional-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(pricesPageSeoAr);

export default function ArabicPricesPage() {
  const model = buildPricesTransactionalModelAr();

  return (
    <>
      <JsonLd data={getTransactionalStructuredData(pricesPageSeoAr, model)} />
      <PageMain>
        <TransactionalPageView model={model} />
      </PageMain>
    </>
  );
}
