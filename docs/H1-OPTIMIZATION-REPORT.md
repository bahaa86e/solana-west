# Solana West — H1 optimization audit & implementation (2026)

Single **H1 per route** policy: one primary heading per page (hero, hub copy, or thin-page header). **Thank-you** previously rendered the main title as **H2** via `SectionHeader` default — fixed with `titleAs="h1"`.

**Scoring legend (SEO / intent / luxury / AI):** Each 1–10 is a practical quality score for luxury real estate SERP and answer surfaces; not a third-party metric.

---

## Core marketing & transactional routes

| Route | Former H1 | New H1 | Primary keyword | Intent | Why it’s stronger |
|-------|-----------|--------|-----------------|--------|-------------------|
| `/` | Solana West New Zayed | Solana West — New Zayed homes by ORA Developers Egypt | Solana West + New Zayed + ORA | Broad estate + transaction discovery | Names project, geography, and issuer in one editorial line; distinguishes from project hub. **WebPage JSON-LD `name` now matches visible H1.** |
| `/projects/solana-west` | Solana West New Zayed | Solana West New Zayed · project briefing — units, amenities & access | Solana West project | Deep compound research | Signals “inside the project” vs homepage positioning. |
| `/projects` | Master-planned ORA residences | ORA Developers Egypt · project index anchored by Solana West | ORA Developers + Solana West | Developer / portfolio orientation | Anchors hub to flagship project; avoids generic “luxury residences” without entities. |
| `/prices` | Pricing posture at Solana West New Zayed | Solana West prices — issuance-led brackets in New Zayed | Solana West prices | Price / bracket research | Drops insider jargon (“posture”); mirrors real buyer vocabulary and compliance tone. |
| `/payment-plan` | Payment plan structure at Solana West New Zayed | Solana West payment plan — down payment, tenor & milestones | Solana West payment plan | Financing / installments | Parallel structure to prices removed; leads with financing nouns buyers query. |
| `/properties/villas` | Standalone villas in Solana West New Zayed | Detached villas facing open green — Solana West New Zayed | Solana West villas | Villa buyer | Describes product story, not templated “X in Y”. |
| `/properties/townhouses` | Townhouses in Solana West New Zayed | Townhouses on landscaped avenues — Solana West | Solana West townhouses | Townhouse buyer | Different sentence shape; walkway / landscape intent. |
| `/properties/apartments` | Apartments in Solana West New Zayed | Finished apartments inside the compound — Solana West New Zayed | Solana West apartments | Apartment buyer | Finishing + compound context for AI excerpts. |
| `/properties/twin-houses` | Twin houses in Solana West New Zayed | Twin villas with paired frontage — Solana West | Solana West twin houses | Twin / paired villa buyer | Architectural clarity without repeating prior patterns. |
| `/master-plan` | A Solana West blueprint across 316 acres | The Solana West master plan — 316 acres in New Zayed | Solana West master plan | Planning / spatial diligence | Cleaner grammar + explicit New Zayed geographic entity. |
| `/location` | Solana West on Mehwar El Dabaa | Solana West location — Mehwar El Dabaa & New Zayed access | Solana West location Mehwar | Geo / commuter research | Combines arterial + district for maps and AI location answers. |
| `/contact` | Consultation & enquiry · Solana West New Zayed | Contact Solana West sales — New Zayed buyer enquiries | Solana West contact sales | Conversion / routing | Transactional wording matches contact SERP behaviour. |
| `/about` | Developer authority · ORA Developers Egypt | ORA Developers Egypt — stewardship behind Solana West | ORA Developers Egypt | Issuer credibility | Institutional tone without decorative bullet trope; ties to project. |
| `/blog` | Research journal | Solana West research journal — briefings for serious buyers | Solana West + editorial | Thought leadership hub | Adds entity + audience; avoids empty “journal”. |
| `/faq` | Frequently asked questions | Solana West FAQs — pricing, payments, delivery & location | Solana West FAQ | AI Q&A extraction | Names entity + question themes for featured snippets / overviews. |
| `/comparison-pages` | Compare West Cairo compounds · Solana West context | Compare New Zayed compounds — how Solana West benchmarks | New Zayed compound comparison | Competitive evaluation | Centres district + benchmark intent (not duplicated blog titles). |
| `/investment-guides` | Investment guides · West Cairo · Solana West | Investing in West Cairo — diligence guides anchored on Solana West | West Cairo investment + Solana West | Investor diligence index | Matches investment lane without stacking keywords. |
| `/privacy-policy` | Privacy policy | Privacy policy — Solana West New Zayed enquiries | privacy + brand | Legal / trust | Disambiguates site scope for crawlers supporting brand entity. |

---

## Confirmation & acknowledgement

| Route | Former visible title level | New H1 | Primary keyword | Intent | Notes |
|-------|----------------------------|--------|-----------------|--------|-------|
| `/thank-you` | **H2** (bug) via `SectionHeader` | **H1**: “Enquiry received — we will reply shortly” / “Thank you — enquiry received” | (non-index UX) | Post-submit reassurance | Semantic fix: `titleAs="h1"`. |

---

## Blog articles (`/blog/[slug]`)

H1 equals `BlogArticleDocument.title` (see `blog-article-hero-section.tsx`). Registry titles were already differentiated by topic; one headline was softened for **Google Ads / trust alignment**.

| Route | Previous title | Updated? | Primary keyword lane | Notes |
|-------|----------------|---------|---------------------|-------|
| `/blog/solana-west-payment-plan-explained-issuer-guide-2026` | Solana West payment plan explained — schedule literacy… | No | Payment plan issuer literacy | Strong FAQ-style extraction. |
| `/blog/solana-west-mehwar-new-zayed-location-buyer-guide-2026` | Solana West location guide — Mehwar… | No | Location / Mehwar | Entity-rich. |
| `/blog/solana-west-villas-prices-buyer-guide-new-zayed-2026` | Solana West villas prices — buyer guide… | No | Villas + prices | Intent-specific. |
| `/blog/solana-west-apartments-prices-buyer-guide-new-zayed-2026` | Solana West apartments prices — buyer guide… | No | Apartments + prices | Intent-specific. |
| `/blog/solana-west-vs-vye-belle-vie-buyer-framework-2026` | Solana West vs VYE & Belle Vie — … | No | Compound comparison | Unique vs hub comparison page. |
| `/blog/solana-west-new-zayed-prices-payment-plan-2026` | Solana West New Zayed prices & payment plan 2026 | No | Combined commercial | Distinct from `/prices` and `/payment-plan` (long-form journal). |
| `/blog/solana-west-new-zayed-investment-strength-2026` | ~~Why Solana West is becoming one of the strongest…~~ | **Yes** → *Solana West in New Zayed — a calm read on investment merit & risk* | Investment thesis | Avoids hypey superlative; aligns with diligence tone. Meta `description` tightened to match. |
| `/blog/solana-west-villas-vs-apartments-lifestyle-investment` | Solana West villas vs apartments — … | No | Lifestyle vs economics | Unique juxtaposition intent. |
| `/blog/ora-developers-egypt-vision-projects-strategy` | ORA Developers Egypt — vision… | No | ORA strategy | Portfolio education. |
| `/blog/new-zayed-vs-sheikh-zayed-luxury-buyers-2026` | New Zayed vs Sheikh Zayed — … | No | Area comparison | Geography-extraction friendly. |

---

## Uniqueness & overlap QA

| Check | Status |
|-------|--------|
| Homepage vs project hub H1 duplicated brand-only naming | **Resolved** — homepage = positioning; hub = briefing scoping |
| Prices vs payment-plan mirrored “structure at…” pattern | **Resolved** — parallel formula replaced |
| Property routes identical “Typology in full project name” | **Resolved** — varied grammar + focal benefit |
| `/thank-you` missing H1 | **Resolved** |
| WebPage schema vs homepage H1 | **Aligned** (`getHomeWebPageJsonLd({ headline })`) |
| Thin pages (FAQ, comparison, guides) generic titles | **Improved** with entity-led H1 |

---

## Mobile / wrapping

- Homepage hero `h1`: widened responsive `max-width` ch units + `text-balance` (`hero-section.tsx`).
- FAQ / comparison / investment / privacy: `max-w` uses `min(Nch, 100%)` for long editorial H1s.

---

## Files changed (implementation)

- `data/seo/home.ts` — homepage H1
- `data/projects/content/solana-west.ts` — project hero H1
- `data/projects/projects-hub-model.ts`
- `data/about/about-page-model.ts`
- `data/transactions/transaction-page-model.ts`
- `data/properties/property-type-experience.ts`
- `data/master-plan/master-plan-page-model.ts`
- `data/location/location-page-model.ts`
- `data/contact/contact-page-model.ts`
- `data/blog/blog-index-model.ts`
- `data/blog/articles/solana-west-new-zayed-investment-strength-2026.ts`
- `app/faq/page.tsx`, `comparison-pages/page.tsx`, `investment-guides/page.tsx`, `privacy-policy/page.tsx`, `thank-you/page.tsx`
- `app/page.tsx`, `lib/schema/jsonld/webpage.ts`
- `components/home/hero-section.tsx` — H1 measure / balance

---

## Per-page scorecard template (filled for key surfaces)

Abbreviated numeric scores (**SEO** | **Intent** | **Luxury editorial** | **AI extractability**):

| Route | SEO | Intent | Luxury | AI |
|-------|-----|--------|--------|-----|
| `/` | 9 | 9 | 8 | 9 |
| `/projects/solana-west` | 9 | 9 | 8 | 8 |
| `/prices` | 9 | 10 | 7 | 9 |
| `/payment-plan` | 9 | 10 | 7 | 9 |
| `/faq` | 8 | 9 | 7 | 10 |
| `/blog` | 8 | 8 | 8 | 8 |

Thin utility pages deliberately trade keyword density for clarity and crawl disambiguation (e.g. privacy).

---

*Implementation verified with `npm run build` after changes.*
