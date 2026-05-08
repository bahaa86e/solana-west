import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border border-lux-ink bg-lux-ink text-lux-paper shadow-[0_1px_0_rgba(250,248,245,0.08)] hover:border-lux-ink hover:bg-lux-ink/92 hover:shadow-[0_20px_50px_-32px_rgba(10,10,10,0.22)] active:translate-y-px active:shadow-none focus-visible:ring-lux-gold",
  secondary:
    "border border-lux-ink/18 bg-transparent text-lux-ink hover:border-lux-ink/32 hover:bg-lux-ink/[0.02] hover:shadow-[0_16px_48px_-40px_rgba(10,10,10,0.12)] active:translate-y-px focus-visible:ring-lux-gold",
  ghost:
    "border border-transparent bg-transparent text-lux-ink hover:border-lux-ink/[0.08] hover:bg-lux-ink/[0.03] active:translate-y-px focus-visible:ring-lux-gold",
  inverse:
    "border border-white/22 bg-white/[0.08] text-lux-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-white/32 hover:bg-white/[0.14] hover:shadow-[0_28px_60px_-40px_rgba(0,0,0,0.45)] active:translate-y-px focus-visible:ring-lux-gold",
} as const;

const sizes = {
  sm: "min-h-[2.625rem] px-[1.125rem] text-[13px]",
  md: "min-h-11 px-5 py-2 text-[13.5px]",
  lg: "min-h-12 px-8 py-3 text-[15px] tracking-[0.01em]",
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
  "inline-flex cursor-pointer items-center justify-center rounded-[3px] font-medium tracking-[0.01em] transition-[color,background-color,border-color,transform,box-shadow] duration-400 ease-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-lux-paper disabled:pointer-events-none disabled:opacity-45";

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
