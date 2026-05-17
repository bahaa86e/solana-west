/** Production-safe lead pipeline logging — never logs PII. */
export function leadLog(event: string, meta?: Record<string, string | number | boolean | undefined>): void {
  const payload = meta ?
    Object.fromEntries(Object.entries(meta).filter(([, v]) => v !== undefined))
  : undefined;

  if (process.env.NODE_ENV === "production") {
    console.info(`[lead] ${event}`, payload ? JSON.stringify(payload) : "");
    return;
  }

  console.log(`[lead] ${event}`, payload ?? "");
}
