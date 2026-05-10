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
    "border border-white/28 bg-[#2f5c4c] text-lux-paper shadow-[0_12px_40px_-26px_rgba(30,62,48,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] hover:border-white/38 hover:bg-[#347055] hover:shadow-[0_14px_44px_-26px_rgba(28,56,44,0.3)] active:translate-y-px focus-visible:ring-lux-gold/[0.8] focus-visible:ring-offset-2 focus-visible:ring-offset-white/25",
  secondary:
    "border border-lux-ink/14 bg-transparent text-lux-ink shadow-none hover:border-lux-ink/22 hover:bg-lux-ink/[0.02] hover:shadow-[0_8px_24px_-20px_rgba(45,42,37,0.06)] motion-reduce:hover:shadow-none active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
  ghost:
    "border border-transparent bg-transparent text-lux-ink hover:border-lux-ink/[0.08] hover:bg-lux-ink/[0.025] active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
  inverse:
    "border border-white/26 bg-white/[0.12] text-lux-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_28px_-22px_rgba(45,42,37,0.12)] hover:border-white/34 hover:bg-white/[0.18] hover:shadow-[0_10px_32px_-22px_rgba(45,42,37,0.14)] motion-reduce:hover:shadow-[0_8px_28px_-22px_rgba(45,42,37,0.12)] active:translate-y-px focus-visible:ring-lux-gold/[0.75]",
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
