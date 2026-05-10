# Content governance — Solana West New Zayed

## Voice

- Luxury, calm, architectural, investor-grade. No fake urgency, fake scarcity, or invented ROI.
- Marketing lines (reference pricing, payment summaries, delivery) are **orientation**; **ORA-issued documentation** is authoritative for reservations.

## SEO

- One primary intent per page; meta title, H1, first paragraph, and JSON-LD must agree.
- Internal links: every long-form piece links **4–7** routes — always include relevant money pages (`/prices`, `/payment-plan`, `/location`, etc.) and **2+** sibling blogs where helpful.
- Canonical URLs: single URL per resource; avoid duplicate blog slugs.

## FAQ

- FAQs on the page must **match** FAQ schema (no hidden-only answers).
- Prefer direct answers with numbers (prices, down payment, tenor, delivery) where collateral supports them, plus issuance disclaimer.

## AI search

- Lead with a **snippet-style** block where appropriate (definition, short list).
- Use predictable H2s (“What is…”, “How to…”, “Solana West vs…”).

## CTAs

- Primary: WhatsApp (prices + payment plan + availability).
- Secondary: contact form → thank-you (tracked).
- Sticky mobile: WhatsApp + call.

## Media

- One canonical path per slot in `data/media/solana-west/cinematic-registry.ts`.
- ALT: project + scene + geography + ORA Developers Egypt (see `image-copy.ts`).

## Blog ops

- New article: add `BlogArticleDocument` under `data/blog/articles/`, register in `data/blog/catalog.ts`, add row in `data/blog/governance/taxonomy.ts`.
