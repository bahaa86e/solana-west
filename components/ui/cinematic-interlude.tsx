import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export type CinematicInterludeMood = "line" | "breath" | "twilight" | "nocturne";

type CinematicInterludeProps = {
  /** Optional editorial beat — omit for a quiet composition without copy. */
  label?: string;
  className?: string;
  /** Visual cadence: hairline only · tall wash · dark gold · deep ink (each paces the scroll differently). */
  mood?: CinematicInterludeMood;
};

const moodShell: Record<CinematicInterludeMood, string> = {
  line: "bg-transparent py-[clamp(1.75rem,4.5vw,2.75rem)]",
  breath: cn(
    "bg-[radial-gradient(ellipse_120%_100%_at_50%_0%,rgba(243,239,232,0.55),transparent_52%),linear-gradient(to_bottom,rgb(252_250_248),rgb(243_239_232/0.5))]",
    "py-[clamp(3rem,8vw,4.75rem)]",
  ),
  twilight: cn(
    "bg-gradient-to-b from-[#f4f1eb] via-[#ebe6de] to-[#e3ddd4] py-[clamp(2.75rem,7.25vw,4.25rem)]",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]",
  ),
  nocturne: cn(
    "bg-[linear-gradient(180deg,rgb(236_231_223)_0%,rgb(228_222_212)_52%,rgb(220_212_202)_100%)] py-[clamp(2.875rem,7.75vw,4.375rem)]",
  ),
};

const labelTone: Record<CinematicInterludeMood, string> = {
  line: "text-lux-ink/28",
  breath: "text-lux-ink/34",
  twilight: "text-lux-ink/36",
  nocturne: "text-lux-ink/34",
};

const hairlineTone: Record<CinematicInterludeMood, string> = {
  line:
    "bg-gradient-to-r from-transparent via-lux-gold/28 to-transparent shadow-[0_1px_0_rgba(252,250,247,0.28)]",
  breath:
    "bg-gradient-to-r from-transparent via-lux-gold/32 to-transparent shadow-[0_1px_0_rgba(252,250,247,0.34)]",
  twilight: "bg-gradient-to-r from-transparent via-lux-gold/28 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
  nocturne: "bg-gradient-to-r from-transparent via-lux-gold/24 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]",
};

/**
 * Chapter pacing between homepage story blocks — hairline, breathing room, or nocturnal bridges.
 */
export function CinematicInterlude({ label, className, mood = "line" }: CinematicInterludeProps) {
  const hasCopy = Boolean(label);

  return (
    <div
      className={cn("relative isolate overflow-hidden", moodShell[mood], className)}
      aria-hidden={!hasCopy}
    >
      {mood === "breath" ?
        <>
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-lux-ink/[0.06] to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-[12%] top-1/2 z-0 h-[min(280px,42vw)] w-[min(280px,42vw)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,165,116,0.08),transparent_68%)] blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-[10%] bottom-0 z-0 h-[min(220px,36vw)] w-[min(220px,36vw)] rounded-full bg-[radial-gradient(circle,rgba(232,226,217,0.22),transparent_70%)] blur-2xl"
            aria-hidden
          />
        </>
      : null}

      {(mood === "twilight" || mood === "nocturne") && (
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,253,249,0.35)_50%,transparent_100%)] opacity-50"
          aria-hidden
        />
      )}

      <Container as="div" size="wide" className="relative z-[1] px-gutter">
        <div className={cn("mx-auto h-px max-w-[min(72rem,94vw)]", hairlineTone[mood])} />
        {mood === "breath" ?
          <div className="mx-auto mt-7 h-px max-w-[42%] bg-gradient-to-r from-transparent via-lux-ink/[0.055] to-transparent md:max-w-[32%]" aria-hidden />
        : null}
        {hasCopy ?
          <p
            className={cn(
              "mt-5 text-center font-sans text-[9.5px] font-semibold uppercase tracking-[0.34em] md:text-[10px]",
              labelTone[mood],
            )}
          >
            {label}
          </p>
        : null}
      </Container>
    </div>
  );
}
