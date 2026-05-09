import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border border-lux-ink bg-lux-ink text-lux-paper shadow-[0_14px_42px_-26px_rgba(10,10,10,0.45),0_1px_0_rgba(250,248,245,0.1)_inset] hover:border-lux-ink hover:bg-lux-ink/[0.94] hover:shadow-[0_22px_56px_-34px_rgba(10,10,10,0.38)] motion-reduce:hover:shadow-[0_14px_42px_-26px_rgba(10,10,10,0.45)] active:translate-y-px active:shadow-none focus-visible:ring-lux-gold",
  secondary:
    "border border-lux-ink/22 bg-transparent text-lux-ink shadow-[0_1px_0_rgba(250,248,245,0.4)_inset] hover:border-lux-ink/36 hover:bg-lux-ink/[0.025] hover:shadow-[0_18px_48px_-38px_rgba(10,10,10,0.16)] motion-reduce:hover:shadow-[0_1px_0_rgba(250,248,245,0.4)_inset] active:translate-y-px focus-visible:ring-lux-gold",
  ghost:
    "border border-transparent bg-transparent text-lux-ink hover:border-lux-ink/[0.1] hover:bg-lux-ink/[0.035] active:translate-y-px focus-visible:ring-lux-gold",
  inverse:
    "border border-white/28 bg-white/[0.1] text-lux-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_16px_42px_-34px_rgba(0,0,0,0.45)] hover:border-white/38 hover:bg-white/[0.17] hover:shadow-[0_22px_54px_-34px_rgba(0,0,0,0.5)] motion-reduce:hover:shadow-[0_16px_42px_-34px_rgba(0,0,0,0.45)] active:translate-y-px focus-visible:ring-lux-gold",
} as const;

const sizes = {
  sm: "min-h-[2.75rem] px-[1.2rem] text-[13px] font-medium",
  md: "min-h-[2.875rem] px-5 py-2 text-[13.5px] font-medium",
  lg: "min-h-[3rem] px-8 py-3 text-[15px] font-semibold tracking-[0.015em]",
} as const;

export type CtaVariant = keyof typeof variants;
export type CtaSize = keyof typeof sizes;

type Common = {
  children: ReactNode;
  className?: string;
  variant?: CtaVariant;
  size?: CtaSize;
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
  "inline-flex cursor-pointer items-center justify-center rounded-[5px] tracking-[0.01em] transition-[color,background-color,border-color,transform,box-shadow] duration-400 ease-luxury motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-lux-paper disabled:pointer-events-none disabled:opacity-45";

export function CtaButton(props: CtaButtonProps) {
  const { children, className, variant = "primary", size = "md" } = props;
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
          {linkChildren}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {linkChildren}
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
    ...buttonRest
  } = p;

  return (
    <button type={type} className={classes} {...buttonRest}>
      {btnChildren}
    </button>
  );
}
