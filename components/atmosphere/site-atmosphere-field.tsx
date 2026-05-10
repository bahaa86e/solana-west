/**
 * Fixed, non-interactive cinematic atmosphere — warmth, sunset story, depth, grain.
 * Sits behind all site chrome (`z-0`); content stacks above at `z-[1]`.
 */
export function SiteAtmosphereField() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Sunset / golden-hour story — restrained, investor-calm */}
      <div
        className="absolute inset-0 lux-atmosphere-sunset-drift"
        style={{
          background: `
            radial-gradient(ellipse 95% 72% at 18% -8%, rgba(212, 175, 130, 0.19) 0%, transparent 58%),
            radial-gradient(ellipse 88% 65% at 92% 8%, rgba(180, 120, 88, 0.11) 0%, transparent 52%),
            radial-gradient(ellipse 70% 45% at 50% 0%, rgba(250, 245, 235, 0.45) 0%, transparent 48%)
          `,
        }}
      />

      {/* Architectural depth — cool floor shadow (grounds the canvas) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 50% 118%, rgba(88, 82, 74, 0.045) 0%, rgba(88, 82, 74, 0.018) 42%, transparent 62%)",
        }}
      />

      {/* Lateral tension: warm key left, soft fill right — internationally editorial */}
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-90"
        style={{
          background:
            "linear-gradient(105deg, rgba(255,252,247,0.14) 0%, transparent 38%, transparent 58%, rgba(196,165,116,0.09) 100%)",
        }}
      />

      {/* Premium “room” lighting — soft ceiling bounce */}
      <div
        className="absolute inset-0 opacity-55 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(ellipse 115% 55% at 50% -5%, rgba(255,255,255,0.22) 0%, transparent 52%)",
        }}
      />

      {/* Horizon memory line — cinematic without illustration */}
      <div
        className="absolute inset-x-0 top-[38%] h-px bg-gradient-to-r from-transparent via-lux-gold/20 to-transparent opacity-70"
      />

      {/* Architectural atmosphere — micro grid (blueprint calm) */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(72,66,58,0.014) 1px, transparent 1px),
            linear-gradient(90deg, rgba(72,66,58,0.012) 1px, transparent 1px)
          `,
          backgroundSize: "min(72px, 12vw) min(72px, 12vw)",
        }}
      />

      {/* Cinematic grain — masks digital flatness */}
      <div
        className="absolute inset-0 opacity-[0.022] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* Edge vignette — focus + depth */}
      <div
        className="absolute inset-0 shadow-[inset_0_0_100px_42px_rgba(72,66,58,0.028),inset_0_-72px_88px_rgba(72,66,58,0.022)]"
      />
    </div>
  );
}
