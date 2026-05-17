const DEFAULT_FROM = "Solana West Leads <onboarding@resend.dev>";

/** Extract bare address from `Name <email@domain>` or plain email. */
export function extractEmailAddress(from: string): string | null {
  const bracket = from.match(/<([^>]+)>/);
  if (bracket?.[1]) {
    const inner = bracket[1].trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inner) ? inner : null;
  }
  const trimmed = from.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? trimmed : null;
}

export function isValidResendFromAddress(from: string): boolean {
  return extractEmailAddress(from) !== null;
}

export type ResolvedResendFrom = {
  from: string;
  usedFallback: boolean;
  envProvided: boolean;
  invalidEnvValue: boolean;
};

/**
 * Resolve sender for Resend — env override when valid, otherwise onboarding fallback.
 */
export function resolveResendFromEmail(): ResolvedResendFrom {
  const raw = process.env.RESEND_FROM_EMAIL?.trim();

  if (!raw) {
    return {
      from: DEFAULT_FROM,
      usedFallback: true,
      envProvided: false,
      invalidEnvValue: false,
    };
  }

  if (!isValidResendFromAddress(raw)) {
    return {
      from: DEFAULT_FROM,
      usedFallback: true,
      envProvided: true,
      invalidEnvValue: true,
    };
  }

  return {
    from: raw,
    usedFallback: false,
    envProvided: true,
    invalidEnvValue: false,
  };
}

export { DEFAULT_FROM as RESEND_DEFAULT_FROM_EMAIL };
