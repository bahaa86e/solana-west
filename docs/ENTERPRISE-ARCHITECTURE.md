# Enterprise architecture — Solana West (post-restructure)

## 1. Final project shape (high level)

| Layer | Location | Role |
|--------|----------|------|
| Routes | `app/` | Next.js App Router — **unchanged URLs** |
| UI | `components/` | Route-scoped sections + shared `layout/`, `media/`, `blog/`, etc. |
| Content models | `data/**` | Page copy, SEO, blog documents, navigation, FAQ |
| Media **data** | `data/media/solana-west/` | Canonical paths, ALT strings, `solanaWestMedia` slots |
| JSON-LD | `lib/schema/jsonld/` | Structured data builders (migrated from root `schemas/`) |
| Utilities | `lib/` | Shared helpers (`utils`, `env`, `routes`, `media/luxury-image-crops`, tracking) |
| Public binaries | `public/images/projects/solana-west/` | WebP tree (see `MEDIA-TREE.md`) |

## 2. What changed in this pass

- **Centralised Solana media modules** under `data/media/solana-west/` with barrel export `@/data/media/solana-west`. Removed root `data/solana-west-*.ts` files.
- **Moved JSON-LD** from `schemas/*.ts` → `lib/schema/jsonld/*.ts`; updated all `app/` imports. Empty `schemas/` holds `README.md` pointer only.
- **Navigation data** → `data/navigation/index.ts` (replaces single `navigation.ts` file; import `@/data/navigation` unchanged).
- **Image crops** → `lib/media/luxury-image-crops.ts`.
- **Blog governance** → `data/blog/governance/taxonomy.ts` (funnel + AI role + money-page support per slug).
- **Documentation** — `docs/CONTENT-GOVERNANCE.md`, this file, `public/.../MEDIA-TREE.md`, `data/media/README.md`, `lib/schema/README.md`.

## 3. Naming

- **Routes:** unchanged (`/prices`, `/payment-plan`, `/blog/[slug]`, …).
- **Imports:** prefer `@/data/media/solana-west` and `@/lib/schema/jsonld/...`.
- **Public images:** kebab-case, `solana-west-new-zayed-<descriptor>-NN.webp` (see `MEDIA-TREE.md`).

## 4. SEO system

- Route metadata: `data/seo/routes.ts`, `defaults`, page-specific modules.
- Schema: page components call builders in `lib/schema/jsonld/`; keep in sync with visible copy.
- Sitemap/robots: `app/sitemap.ts`, `app/robots.ts` — **unchanged paths**.

## 5. Blog scaling

- Article modules: flat `data/blog/articles/*.ts` (scales to subfolders later if needed — update `catalog` imports once).
- Registry: `data/blog/catalog.ts`.
- Governance: `data/blog/governance/taxonomy.ts` for funnel/AI/money-page matrix.

## 6. What was not moved (intentionally)

- **Components** — no mass rename of `projects/` vs `project/` to avoid churn; structure already maps to routes.
- **Binary images** — workspace may omit `public/` binaries; tree documented via `MEDIA-TREE.md`.
- **Duplicate hero/footer components** across routes — candidate for a future shared template; not refactored here to preserve behaviour.

## 7. Future recommendations

1. Introduce `components/templates/` for repeated **hero + final CTA** patterns when safe.
2. Split `data/seo/*.ts` stubs (e.g. empty pages) into **page-model-only** vs **route metadata** to reduce confusion.
3. Optional: blog articles in subfolders `articles/pricing/`, `articles/location/` with barrel re-exports.
4. Run `npm run build` after any media registry path change; run `scripts/verify-solana-west-canonical.mjs` when assets exist on disk.
