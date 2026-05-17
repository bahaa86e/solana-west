import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border border-lux-ink/[0.55] bg-lux-ink text-lux-paper shadow-[0_8px_28px_-18px_rgba(45,42,37,0.18),0_1px_0_rgba(252,250,247,0.1)_inset] hover:border-lux-ink hover:bg-lux-charcoal hover:shadow-[0_12px_36px_-22px_rgba(45,42,37,0.2)] motion-reduce:hover:shadow-[0_8px_28px_-18px_rgba(45,42,37,0.18)] active:translate-y-px active:shadow-[0_4px_14px_-8px_rgba(45,42,37,0.12)] focus-visible:ring-lux-gold/[0.75]",
  /** WhatsApp — bright editorial sage (not dark dashboard) */
  whatsapp:
    "border border-[#5a7a6c]/25 bg-[#eaf2ee] text-[#1f3b30] shadow-[0_8px_28px_-20px_rgba(40,72,58,0.14),inset_0_1px_0_rgba(255,255,255,0.85)] hover:border-[#4d6f62]/35 hover:bg-[#e3ede8] hover:shadow-[0_10px_32px_-22px_rgba(40,72,58,0.16)] motion-reduce:hover:shadow-[0_8px_28px_-20px_rgba(40,72,58,0.14)] active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
  /** Hero / glass plate — crisp primary, minimal frosted gradient */
  whatsappOnDark:
    "border border-[#2a4a40]/55 bg-gradient-to-b from-[#1e3d34] via-[#183229] to-[#122820] text-[#f2f7f4] shadow-[0_14px_42px_-24px_rgba(12,32,24,0.55),inset_0_1px_0_rgba(255,255,255,0.14)] hover:border-[#3d6a5a]/45 hover:from-[#234a3e] hover:via-[#1d3f35] hover:to-[#16342b] hover:shadow-[0_16px_46px_-22px_rgba(14,36,28,0.58)] motion-reduce:hover:shadow-[0_14px_42px_-24px_rgba(12,32,24,0.55)] active:translate-y-px focus-visible:ring-lux-gold/[0.8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e14]",
  secondary:
    "border border-lux-ink/14 bg-transparent text-lux-ink shadow-none hover:border-lux-ink/22 hover:bg-lux-ink/[0.02] hover:shadow-[0_8px_24px_-20px_rgba(45,42,37,0.06)] motion-reduce:hover:shadow-none active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
  ghost:
    "border border-transparent bg-transparent text-lux-ink hover:border-lux-ink/[0.08] hover:bg-lux-ink/[0.025] active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
  inverse:
    "border border-white/26 bg-white/[0.12] text-lux-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_28px_-22px_rgba(45,42,37,0.12)] hover:border-white/34 hover:bg-white/[0.18] hover:shadow-[0_10px_32px_-22px_rgba(45,42,37,0.14)] motion-reduce:hover:shadow-[0_8px_28px_-22px_rgba(45,42,37,0.12)] active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
  gold:
    "border border-[#d4bc94]/55 bg-gradient-to-b from-[#f0e2c8] via-[#d9c29a] to-[#b89562] text-[#1a1610] shadow-[0_16px_44px_-20px_rgba(196,165,116,0.62),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(120,96,62,0.18)] hover:border-[#e2cda8]/65 hover:from-[#f5e8d0] hover:via-[#e0c8a0] hover:to-[#c4a06c] hover:shadow-[0_18px_48px_-18px_rgba(196,165,116,0.72)] motion-reduce:hover:shadow-[0_16px_44px_-20px_rgba(196,165,116,0.62)] active:translate-y-px focus-visible:ring-lux-gold/[0.85] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e14]",
  /** Hero enquiry — refined ORA navy primary */
  navy:
    "border border-[#213459] bg-[#213459] text-white shadow-[0_12px_32px_rgba(33,52,89,0.18)] hover:border-[#182846] hover:bg-[#182846] hover:shadow-[0_14px_36px_rgba(33,52,89,0.22)] motion-reduce:hover:shadow-[0_12px_32px_rgba(33,52,89,0.18)] active:translate-y-px focus-visible:ring-[rgba(33,52,89,0.28)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f5ef]",
  /** Hero enquiry — muted navy secondary (WhatsApp path) */
  whatsappIvory:
    "border border-[#213459]/12 bg-[#213459]/[0.06] text-[#213459] shadow-none hover:border-[#213459]/18 hover:bg-[#213459]/10 hover:shadow-none motion-reduce:hover:shadow-none active:translate-y-px focus-visible:ring-[rgba(33,52,89,0.22)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f5ef]",
} as const;

const sizes = {
  sm: "min-h-[2.75rem] px-[1.15rem] text-[0.796875rem] font-semibold tracking-[0.048em] max-lg:min-h-[2.6875rem]",
  md: "min-h-[2.875rem] px-5 py-2 text-[0.828125rem] font-semibold tracking-[0.044em] max-lg:min-h-[2.8125rem]",
  lg: "min-h-[3.0625rem] px-8 py-3 text-lux-cta font-semibold tracking-[0.038em] max-lg:min-h-[3rem] max-lg:px-7 max-lg:tracking-[0.034em]",
} as const;

export type CtaVariant = keyof typeof variants;
export type CtaSize = keyof typeof sizes;

type Common = {
  children: ReactNode;
  className?: string;
  variant?: CtaVariant;
  size?: CtaSize;
  leadingIcon?: ReactNode;
};

type CtaAsLink = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & {
    href: string;
    external?: boolean;
  };

type CtaAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
    type?: "button" | "submit" | "reset";
  };

export type CtaButtonProps = CtaAsLink | CtaAsButton;

const baseUi =
  "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[4px] font-sans transition-[color,background-color,border-color,transform,box-shadow,filter] duration-400 ease-luxury motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-lux-paper disabled:pointer-events-none disabled:opacity-45";

function CtaContent({ leadingIcon, children }: { leadingIcon?: ReactNode; children: ReactNode }) {
  return (
    <>
      {leadingIcon ? <span className="inline-flex shrink-0 items-center justify-center">{leadingIcon}</span> : null}
      <span className="text-center leading-[1.38]">{children}</span>
    </>
  );
}

export function CtaButton(props: CtaButtonProps) {
  const { children, className, variant = "primary", size = "md", leadingIcon } = props;
  const classes = cn(baseUi, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const p = props as CtaAsLink;
    const {
      href,
      external,
      children: linkChildren,
      className: _c,
      variant: _v,
      size: _s,
      leadingIcon: _li,
      ...rest
    } = p;

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          rel="noopener noreferrer"
          target="_blank"
          {...rest}
        >
          <CtaContent leadingIcon={leadingIcon}>{linkChildren}</CtaContent>
        </a>
      );
    }

    /** Hash-only anchors use native `<a>` so same-page scroll works in Next.js, Safari, and Chrome. */
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes} {...rest}>
          <CtaContent leadingIcon={leadingIcon}>{linkChildren}</CtaContent>
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        <CtaContent leadingIcon={leadingIcon}>{linkChildren}</CtaContent>
      </Link>
    );
  }

  const p = props as CtaAsButton;
  const {
    type = "button",
    children: btnChildren,
    className: _c,
    variant: _v,
    size: _s,
    leadingIcon: _li,
    ...buttonRest
  } = p;

  return (
    <button type={type} className={classes} {...buttonRest}>
      <CtaContent leadingIcon={leadingIcon}>{btnChildren}</CtaContent>
    </button>
  );
}
