import type { TransactionalPageModel } from "@/data/transactions/transaction-page-model";

import { TransactionalBreakdownSection } from "@/components/transactions/transactional-breakdown-section";
import { TransactionalFaqPreviewSection } from "@/components/transactions/transactional-faq-preview-section";
import { TransactionalFinalCtaSection } from "@/components/transactions/transactional-final-cta-section";
import { TransactionalHeroSection } from "@/components/transactions/transactional-hero-section";
import { TransactionalInternalLinksSection } from "@/components/transactions/transactional-internal-links-section";
import { TransactionalOverviewSection } from "@/components/transactions/transactional-overview-section";

export function TransactionalPageView({ model }: { model: TransactionalPageModel }) {
  return (
    <>
      <TransactionalHeroSection model={model} />
      <TransactionalOverviewSection model={model} />
      <TransactionalBreakdownSection model={model} />
      <TransactionalInternalLinksSection model={model} />
      <TransactionalFaqPreviewSection model={model} />
      <TransactionalFinalCtaSection model={model} />
    </>
  );
}
