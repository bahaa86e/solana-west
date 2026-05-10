# Form functionality report — Solana West

**Pass date:** May 2026  
**Scope:** All user-submittable forms in the application codebase.

## Inventory

| Surface | Component | Mechanism |
|---------|-----------|-----------|
| Contact / private enquiry | `components/forms/lead-inquiry-form.tsx` | Next.js **Server Action** `submitLeadInquiry` via `useFormState` |

No other `<form>` + server submit flows were found (search: `useFormState`, `submitLead`, `type="submit"`).

## Behaviour verified in code

1. **Submit path**  
   - `action={formAction}` wires the form to `app/contact/actions.ts` → `submitLeadInquiry`.

2. **Validation**  
   - **Name:** length 2–120.  
   - **Phone:** minimum 6 characters after trim.  
   - **Interest:** must match `LEAD_INTEREST_OPTIONS` via `isValidLeadInterest`.

3. **Error UX**  
   - Failed validation or server errors return `{ ok: false, message }`.  
   - UI renders **`role="alert"`** paragraph when `!state.ok && state.message`.

4. **Success UX**  
   - On successful POST to configured webhook, server calls **`redirect('/thank-you?conversion=lead&rid=...')`** — no inline success panel (by design).

5. **Loading state**  
   - `LeadSubmitButton` uses `useFormStatus().pending` to disable submit and swap label (idle vs pending from `croMessaging`).

6. **Tracking / hidden context**  
   - Hidden fields: `page_pathname`, `website_domain_client`, `referrer_client` for routing analytics and support.

7. **Accessibility**  
   - `<fieldset>` + **sr-only** `<legend>`.  
   - Labels associated with inputs via `htmlFor` / `id`.  
   - Required fields use native **`required`** (and `aria-required` on select).

8. **Mobile keyboard**  
   - Inputs use **`max-lg:text-[1rem]`** to reduce iOS zoom-on-focus behaviour.  
   - **Phone** field: `type="tel"`, `autoComplete="tel"`.  
   - **Name**: `autoComplete="name"`.

## Email delivery & webhooks

- There is **no direct SMTP send** in this repo. Leads are posted as JSON to **`process.env.LEAD_WEBHOOK_URL`**.  
- If `LEAD_WEBHOOK_URL` is **unset**, the action returns a **clear user-facing message** directing users to WhatsApp or phone (not a silent failure).

## Mobile polish applied (this pass)

- Removed heavy **gradient + blur** field chrome; **solid paper** fields with light inset shadow.  
- Tighter vertical spacing between groups on small screens.

## Recommended ops checks (not automated here)

- Confirm **`LEAD_WEBHOOK_URL`** in production and that the endpoint returns **2xx** for valid payloads.  
- End-to-end test: submit from **contact** on real iOS + Android, confirm **redirect** and downstream email/CRM from the webhook consumer.
