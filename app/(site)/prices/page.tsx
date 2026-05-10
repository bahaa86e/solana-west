import { TransactionalPageView } from "@/components/transactions/transactional-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPricesTransactionalModel } from "@/data/transactions/transaction-page-model";
import { pricesPageSeo } from "@/data/seo/routes";
import { getTransactionalStructuredData } from "@/lib/schema/jsonld/transactional-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(pricesPageSeo);

export default function PricesPage() {
  const model = buildPricesTransactionalModel();

  return (
    <>
      <JsonLd data={getTransactionalStructuredData(pricesPageSeo, model)} />
      <PageMain>
        <TransactionalPageView model={model} />
      </PageMain>
    </>
  );
}
