import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border border-lux-ink/[0.88] bg-lux-ink text-lux-paper shadow-[0_10px_32px_-20px_rgba(28,26,23,0.22),0_1px_0_rgba(252,250,247,0.08)_inset] hover:border-lux-ink hover:bg-lux-charcoal/[0.96] hover:shadow-[0_14px_40px_-24px_rgba(28,26,23,0.26)] motion-reduce:hover:shadow-[0_10px_32px_-20px_rgba(28,26,23,0.22)] active:translate-y-px active:shadow-[0_4px_16px_-8px_rgba(28,26,23,0.14)] focus-visible:ring-lux-gold/[0.75]",
  /** Editorial WhatsApp — muted forest on light canvas */
  whatsapp:
    "border border-[#3d5248]/28 bg-gradient-to-b from-[#465c52]/92 to-[#323f38]/94 text-lux-paper shadow-[0_12px_36px_-24px_rgba(24,42,34,0.28),inset_0_1px_0_rgba(255,255,255,0.09)] hover:border-[#4a6056]/38 hover:brightness-[1.02] hover:shadow-[0_14px_40px_-26px_rgba(20,38,30,0.24)] motion-reduce:hover:brightness-100 active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
  /** WhatsApp on hero / ink */
  whatsappOnDark:
    "border border-lux-gold/22 bg-gradient-to-b from-white/[0.13] via-white/[0.08] to-white/[0.035] text-lux-paper shadow-[0_16px_46px_-30px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-lux-gold/32 hover:from-white/[0.17] hover:via-white/[0.1] hover:to-white/[0.05] active:translate-y-px focus-visible:ring-lux-gold/[0.75] focus-visible:ring-offset-lux-charcoal",
  secondary:
    "border border-lux-ink/16 bg-transparent text-lux-ink shadow-none hover:border-lux-ink/26 hover:bg-lux-ink/[0.02] hover:shadow-[0_10px_28px_-22px_rgba(28,26,23,0.08)] motion-reduce:hover:shadow-none active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
  ghost:
    "border border-transparent bg-transparent text-lux-ink hover:border-lux-ink/[0.08] hover:bg-lux-ink/[0.025] active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
  inverse:
    "border border-white/22 bg-white/[0.08] text-lux-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_32px_-26px_rgba(0,0,0,0.28)] hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_14px_38px_-26px_rgba(0,0,0,0.32)] motion-reduce:hover:shadow-[0_12px_32px_-26px_rgba(0,0,0,0.28)] active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
} as const;

const sizes = {
  sm: "min-h-[2.8125rem] px-[1.25rem] text-[0.8125rem] font-semibold tracking-[0.055em]",
  md: "min-h-[2.9375rem] px-5 py-2 text-[0.84375rem] font-semibold tracking-[0.048em]",
  lg: "min-h-[3.125rem] px-8 py-3 text-lux-cta font-semibold tracking-[0.042em]",
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
