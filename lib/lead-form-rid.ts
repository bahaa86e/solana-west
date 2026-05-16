const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function createLeadRequestId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

export function isValidLeadRequestId(value: string): boolean {
  return UUID_RE.test(value) || /^lead-\d+-[a-z0-9]+$/i.test(value);
}

export function resolveLeadRequestId(raw: string): string {
  const trimmed = raw.trim();
  if (isValidLeadRequestId(trimmed)) {
    return trimmed;
  }
  return createLeadRequestId();
}
