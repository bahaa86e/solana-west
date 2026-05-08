import Link from "next/link";

import { SectionMain } from "@/components/layout/section-main";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata({
  title: "Page not found",
  description: "The requested page could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <SectionMain>
      <p className="font-display text-display-lg text-lux-ink">Page not found</p>
      <p className="mt-gutter max-w-readable text-lux-ink/80">
        Return to the{" "}
        <Link href="/" className="underline decoration-lux-gold/50 underline-offset-4">
          homepage
        </Link>
        .
      </p>
    </SectionMain>
  );
}
