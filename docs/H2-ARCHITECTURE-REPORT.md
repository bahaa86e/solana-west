# Solana West — H2 architecture & optimization report (2026)

## Scope

- **Optimized:** All primary **SectionHeader** titles (default `h2`), conversion panels that use `SectionHeader`, thin-page **`<h2>`** blocks (`/comparison-pages`, `/investment-guides`, `/privacy-policy`), **footer** authority `h2`, **transactional FAQ** and **property-type FAQ** previews (previously duplicated copy), **blog index** taxonomy + intro + spine CTA, **property features** headlines (per typology), **transactional** breakdown *parent* headings (child typology blocks remain **`h3`** by design).
- **Hierarchy note:** `/blog` topical lanes render group titles as **`h3`** beneath one parent **`h2`** (“Research lanes…”) — intentional outline: taxonomy surface → lane detail.
- **Deferred (optional pass):** **`BlogArticleDocument.sections[].heading`** strings (10 long-form articles × many sections). Current article headings are already query-oriented; a future pass can align them to the same tone system without code changes (data-only).

---

## Design principles applied

1. **Intent-specific H2** — each heading answers one buyer or crawler job (trust, plan, place, money, product, proof, next step).
2. **Varied syntax** — rotated em-dash leads, questions implied in noun phrases, “who / what / why / how” mixes; avoided repeating “Overview / Framework / Next steps” patterns.
3. **Entity clarity** — Solana West, New Zayed, Mehwar El Dabaa, ORA Developers Egypt appear where they disambiguate, not in every line.
4. **FAQ H2 differentiation** — transactional **prices** vs **payment-plan** vs **about / location / contact / master-plan / hub** no longer share one generic “Straight answers…” string.
5. **Conversion H2** — final panels state the *action* (dated quotation, instalment exhibit, desk routing) without countdown language.

---

## Route → H2 keyword cluster & intent map (summary)

| Route | Primary H2 keyword cluster | Dominant intents |
|-------|---------------------------|------------------|
| `/` | Solana West · ORA · New Zayed · master plan · payment reference | Authority, trust, SKU mix, commercial reference, FAQ proof |
| `/projects/solana-west` | Project hub · FAQs · payment · amenities | Deep compound diligence |
| `/projects` | ORA · project index · New Zayed | Portfolio → flagship |
| `/prices` | Prices · phased release · SKU economics · New Zayed | Transactional brackets |
| `/payment-plan` | Down payment · instalments · delivery 2027 | Financing mechanics |
| `/properties/*` | Villas / townhouses / apartments / twins · checklist · FAQs | Typology-led purchase |
| `/master-plan` | 316 acres · clusters · landscape investment | Spatial / snippet-friendly |
| `/location` | Mehwar · ring roads · airport · comps | Geo + accessibility |
| `/contact` | Desk routing · WhatsApp · form · trust | Conversion + reassurance |
| `/about` | ORA · Naguib Sawiris · diligence | Issuer credibility |
| `/blog` | Briefing taxonomy · lanes · spine URLs | Editorial topical authority |
| `/comparison-pages` | Diligence lenses · SKU lines · journals | Comparative evaluation |
| `/investment-guides` | Corridor · instalments · segmentation | Investor education hub |
| `/privacy-policy` | Data categories · cookies · retention | Legal clarity |
| **Footer** | Compound companion · disclosure | Sitewide entity reinforcement |

---

## Internal linking opportunities (post-H2)

- **Transactional:** New H2s explicitly point mental model to **`/faq`**, **`/prices`**, **`/payment-plan`**, **`/projects/solana-west`**, **`/properties/*`** — keep anchor text aligned with visible H2 nouns when adding in-body links later.
- **Blog index:** Topics’ **pillar labels** unchanged; refreshed H2s echo those routes for consistent anchor text (`/investment-guides`, `/location`, `/projects`, `/prices`, `/payment-plan`, `/comparison-pages`).

---

## Section length guidance

| Section type | Recommendation |
|--------------|----------------|
| **Snapshot / KPI lattices** | Remain short (no `h2`; `dt/dd` lattice on homepage). |
| **FAQ previews** | Short excerpt + link to **`/faq`** (long canonical answers stay on FAQ route). |
| **Transactional breakdown** | Parent `h2` + substantive `h3` columns — **long-form** typology/analysis belongs in **`h3` bodies**. |
| **Investment / corridor editorials** | **Long-form** body under **`PropertyTypeEditorialStackSection`** and hub corridor blocks. |
| **Footer authority** | **Short** factual deck; legal disclaimer unchanged. |

---

## Conversion-focused H2 surfaces

- Homepage **`finalCta`**, **`payment`**, **`propertyTypes`**.
- Project **`finalCta`**, **`payment`**, **`propertyTypes`**.
- Typology **`finalCta`** (now **unique per SKU**).
- **`FinalConversionPanel`** on blog index (dark rail).
- Contact **`channels`**, **`formColumn`**, **`finalCta`**.

---

## Trust / compliance H2 surfaces

- About **`buyerTrust`**, **`portfolio`**, reassurance on **contact**.
- Privacy **rewritten procedural `h2`s** (“who manages data”, “cookies & blocking choices”, retention, rights).
- Transactional FAQs emphasise **corroboration with canonical FAQ**.

---

## QA checklist

| Check | Status |
|-------|--------|
| Duplicate FAQ preview H2 across routes | Mitigated (**per-route strings** + transactional **key** split + property **slug** map) |
| Generic “Overview / Related / Next steps” monoculture | Reduced (comparison, investment guides, privacy updated) |
| Keyword cannibalization | Reviewed — H2s **nest under distinct H1 intents** established in prior H1 pass |
| Hierarchy **h1 → h2 → h3** | Preserved (**transactional breakdown** keeps typology **`h3`**) |
| Build / types | **`npm run build`** OK |

---

## Files touched (implementation index)

- `data/seo/home.ts`
- `data/projects/content/solana-west.ts`
- `data/transactions/transaction-page-model.ts`
- `data/properties/property-type-experience.ts`
- `data/master-plan/master-plan-page-model.ts`
- `data/location/location-page-model.ts`
- `data/contact/contact-page-model.ts`
- `data/about/about-page-model.ts`
- `data/projects/projects-hub-model.ts`
- `data/blog/blog-index-model.ts`
- `data/footer-authority.ts`
- `app/comparison-pages/page.tsx`
- `app/investment-guides/page.tsx`
- `app/privacy-policy/page.tsx`
- `components/blog/blog-index-topics-section.tsx`
- `components/properties/property-type-features-section.tsx`
- `components/properties/property-type-related-project-section.tsx`
- `components/properties/property-type-faq-preview-section.tsx`
- `components/transactions/transactional-faq-preview-section.tsx`
- `components/about/about-faq-preview-section.tsx`
- `components/contact/contact-faq-preview-section.tsx`
- `components/location/location-faq-preview-section.tsx`
- `components/master-plan/master-plan-faq-preview-section.tsx`
- `components/projects-hub/projects-hub-faq-preview-section.tsx`
- `components/projects/project-property-types-section.tsx` (eyebrow + title alignment)

---

*For the exhaustive “every H2 text” CSV-style listing, concatenate `SectionHeader` `title` props and thin-page `h2` from the routes above — all source strings now live in the files listed.*
