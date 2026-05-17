export function thankYouRedirectPath(pagePathname: string, rid: string): string | null {
  const path =
    pagePathname.startsWith("/ar") ?
      `/ar/thank-you?conversion=lead&rid=${encodeURIComponent(rid)}`
    : `/thank-you?conversion=lead&rid=${encodeURIComponent(rid)}`;
  const pathnameOnly = path.split("?")[0] ?? "";
  if (pathnameOnly !== "/thank-you" && pathnameOnly !== "/ar/thank-you") return null;
  return path;
}

export function isSafeLeadThankYouRedirect(href: string): boolean {
  if (!href.startsWith("/") || href.startsWith("//")) return false;
  try {
    const u = new URL(href, "http://localhost");
    if (u.username || u.password) return false;
  } catch {
    return false;
  }
  const pathOnly = href.split(/[?#]/)[0] ?? "";
  return pathOnly === "/thank-you" || pathOnly === "/ar/thank-you";
}
