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
      <p className="font-display text-display-xl text-balance text-lux-ink">Page not found</p>
      <p className="mt-lux-stack-sm max-w-readable text-body-lg text-lux-ink/78">
        Return to the{" "}
        <Link href="/" className="underline decoration-lux-gold/50 underline-offset-4">
          homepage
        </Link>
        .
      </p>
    </SectionMain>
  );
}
