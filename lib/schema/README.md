# Schema (JSON-LD)

- **`jsonld/`** — page-level structured data builders consumed by `app/**/page.tsx`.
- Keep page titles/descriptions sourced from `data/seo/*` where applicable; JSON-LD must mirror visible content.

Do not duplicate Organization / WebSite definitions across routes without a single source of truth (`organization.ts`).
