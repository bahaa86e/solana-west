# Solana West Arabic / multilingual system — implementation reports

Arabic lives under `/ar` and English remains on the existing surface (`/`, `/prices`, …). This document consolidates the architecture, SEO, hreflang, RTL, routing, and indexing posture after implementation.

---

## 1. Arabic architecture report

- **Route tree**: Dedicated `app/ar/**` mirrors transactional, content, hub, utility, and blog routes mapped in `lib/i18n/paths.ts` (`englishPathToArabicPath` / `localizedPathname`).
- **Shell**: `app/ar/layout.tsx` wraps content in `SiteShell locale="ar"` (RTL, Arabic font stack, editorial CRO bundles). English uses `app/(site)/layout.tsx` with `locale="en"` — URLs unchanged.
- **Data layering**: Arabic SEO payloads live in `data/seo/ar-routes-registry.ts`; Arabic-first models live beside English (`*-model-ar.ts`, `solana-west-ar.ts`, FAQ Arabic module). Blog articles remain English-authored; Arabic routes expose Arabic metadata plus `lang="en"` wrapper on the article body route.
- **Components**: Shared views (`ContactExperienceView`, `ProjectPageView`, property hubs, etc.) consume locale-specific models or URL-localized models without replacing English-only components wholesale.
- **Client bridges**: Blog index topics and projects hub cards use `useSiteLocale()` + `localizedPathname()` so list links stay `/ar/*` under Arabic.

---

## 2. Multilingual SEO report

- **Canonicals & metadata**: Arabic pages use `buildPageMetadata()` with `RouteSeoDefinition` entries that include `locale: "ar"` (OG `ar_EG`, titles/descriptions keyed to Arabic buyer intent).
- **English preservation**: Existing `data/seo/routes.ts` and English pages are untouched; Arabic definitions are additive (`ar-routes-registry.ts`, `*-ar.ts`).
- **Sitemap**: `app/sitemap.ts` merges English indexables + `/blog/:slug`, then appends Arabic static twins + `/ar/blog/:slug` so Google Search Console can ingest both locales.
- **AI / snippet posture**: Arabic pages carry issuance-safe numbers (9.8M, 5%, 10y, delivery framing) aligned with workspace rules; blog Arabic shell explains English body honestly in metadata (`blogArticleRouteSeoArabic`).
- **Internal linking discipline**: Arabic models and nav data (`data/navigation/ar.ts`) emit `/ar` paths only; English nav stays on `/` routes.

---

## 3. Hreflang report

- **Implementation**: `seo/build-metadata.ts` calls `alternatePairForPathname()` for every localized pathname and emits `alternates.languages` with **`en`**, **`ar`**, and **`x-default` → English URL** per product choice (English remains default for indexing breadth).
- **Coverage**: Twins exist for paths in `englishPathToArabicPath` and for `/blog/:slug` ↔ `/ar/blog/:slug`.
- **`noIndex` parity**: Arabic thank-you inherits `noIndex` like English; languages block is suppressed when `noIndex` is true (same helper as EN).

---

## 4. RTL implementation report

- **`dir`/`lang`**: `SiteShell` sets document direction and language via providers for `locale="ar"` (English subtree unchanged).
- **Typography**: Arabic uses `Noto Sans Arabic` (root layout) + Tailwind `font-arabic` where applied; RTL spacing leverages logical properties in newer UI (e.g. thank-you link uses `sm:mr-auto` on AR page).
- **Forms & hero**: Editorial copy bundles switch labels/CTAs client-side (`EditorialCopyProvider`). Lead redirects now honor `/ar` thank-you when `page_pathname` starts with `/ar`.
- **English-in-RTL islands**: Arabic blog articles wrap `BlogArticlePageView` with `lang="en" dir="ltr"` so long-form English renders legibly inside the Arabic shell.

---

## 5. Arabic routing report

| English | Arabic |
| --- | --- |
| `/` | `/ar` |
| `/about` | `/ar/ora-developers-egypt` |
| `/contact` | `/ar/contact` |
| `/projects` | `/ar/projects` |
| `/projects/solana-west` | `/ar/projects/solana-west` |
| `/prices` | `/ar/solana-west-prices` |
| `/payment-plan` | `/ar/solana-west-payment-plan` |
| `/location` | `/ar/solana-west-location` |
| `/master-plan` | `/ar/solana-west-master-plan` |
| `/faq` | `/ar/solana-west-faq` |
| `/blog`, `/blog/:slug` | `/ar/blog`, `/ar/blog/:slug` |
| `/properties/...` | `/ar/solana-west-villas|townhouses|apartments|twin-houses` |
| `/investment-guides` | `/ar/solana-west-investment` |
| `/comparison-pages` | `/ar/comparison-pages` |
| `/privacy-policy`, `/thank-you` | `/ar/privacy-policy`, `/ar/thank-you` |

Language switching uses `LanguageSwitcher` + `localizedPathname` to preserve twin-page context (`lib/i18n/paths.ts`).

---

## 6. Indexing safety report

- **Duplicate mitigation**: Canonical on each locale points to itself; reciprocal `hreflang` links pair EN↔AR; blog content language is signaled honestly (`Article.inLanguage = en-US` on English prose, Arabic `WebPage` shell uses `ar-EG`).
- **Thank-you routes**: `/thank-you` and `/ar/thank-you` remain `noIndex`/`noFollow`; sitemap excludes them (inherits from indexable registry only — thank-you absent).
- **Schema**: Shared JSON-LD helpers gained `schemaLocaleFromSeo()` (`lib/schema/jsonld/schema-locale.ts`) for `inLanguage`, Arabic breadcrumb home (`/ar`), and localized geography strings where relevant.
- **Regression guard**: English `app/(site)/*`, `generateStaticParams`, and `/projects/[slug]` graph calls remain backward compatible (`getProjectStructuredDataGraph(bundle)` optional Arabic `RouteSeo`).

---

### QA checklist (post-deploy)

1. Spot-check `/` vs `/ar` renders (EN LTR vs AR RTL).
2. `curl`/View Source alternates (`hreflang`) on twins.
3. Rich Results test on `/ar/solana-west-prices` + `/blog/:slug`.
4. Submit refreshed sitemap in Search Console (`/sitemap.xml`).
5. Submit lead from `/ar/contact` → redirects to `/ar/thank-you?...`.
