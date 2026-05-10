import { notFound } from "next/navigation";

import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { ProjectPageView } from "@/components/projects/project-page-view";
import { createSolanaWestPageContentAr } from "@/data/projects/content/solana-west-ar";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { solanaWestProjectPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getProjectStructuredDataGraph } from "@/lib/schema/jsonld/project-graph";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(solanaWestProjectPageSeoAr);

export default function ArabicSolanaWestProjectPage() {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) notFound();

  const page = { ...bundle, content: createSolanaWestPageContentAr(bundle.entry) };

  return (
    <>
      <JsonLd data={getProjectStructuredDataGraph(page, solanaWestProjectPageSeoAr)} />
      <PageMain>
        <ProjectPageView page={page} />
      </PageMain>
    </>
  );
}
