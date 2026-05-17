"use client";

import * as Select from "@radix-ui/react-select";
import { useId, useState } from "react";

import { cn } from "@/lib/utils";

export type LuxurySelectOption = {
  value: string;
  label: string;
};

type LuxurySelectProps = {
  id: string;
  name: string;
  options: LuxurySelectOption[];
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  variant?: "dark" | "light";
  className?: string;
  "aria-required"?: boolean | "true" | "false";
};

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 4.25L6 7.75L9.5 4.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.25 6.25L4.75 8.75L9.75 3.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const triggerEnquiry = cn(
  "lux-enquiry-select group flex w-full items-center justify-between gap-2 text-start",
  "data-[placeholder]:text-[rgb(23_23_23/42%)]",
  "data-[state=open]:border-[rgb(33_52_89/0.32)] data-[state=open]:bg-white",
  "data-[state=open]:shadow-[0_0_0_1px_rgb(33_52_89/0.12),0_0_0_3px_rgb(33_52_89/0.18),inset_0_1px_0_rgb(255_255_255/0.8)]",
);

const triggerLight = cn(
  "flex w-full min-h-[3.25rem] items-center justify-between gap-2 rounded-[6px] border border-lux-ink/[0.1] bg-lux-paper px-[1.1rem] py-[0.95rem]",
  "text-[0.953125rem] font-normal tracking-[0.012em] text-lux-ink max-lg:min-h-[3.375rem] max-lg:py-[1.05rem] max-lg:text-[1rem]",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_1px_0_rgba(45,42,37,0.04)]",
  "transition-[border-color,box-shadow,background-color] duration-480 ease-luxury motion-reduce:transition-none",
  "hover:border-lux-ink/[0.14] hover:bg-white",
  "data-[placeholder]:text-lux-ink/38",
  "data-[state=open]:border-lux-gold/38 data-[state=open]:bg-white data-[state=open]:ring-2 data-[state=open]:ring-lux-gold/22",
  "focus:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-55",
);

const contentPanelDark = cn(
  "z-[220] min-w-[var(--radix-select-trigger-width)] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[8px] border border-[rgb(255_255_255/0.1)]",
  "bg-[linear-gradient(165deg,rgb(22_28_40/96%)_0%,rgb(10_14_22/98%)_52%,rgb(6_9_14/99%)_100%)]",
  "shadow-[0_28px_72px_-32px_rgb(0_0_0/78%),0_12px_36px_-20px_rgb(0_0_0/55%),inset_0_1px_0_rgb(255_255_255/0.08)]",
  "backdrop-blur-xl backdrop-saturate-150",
  "data-[state=open]:animate-lux-select-in data-[state=closed]:animate-lux-select-out",
  "motion-reduce:animate-none",
);

const contentPanelLight = cn(
  "z-[220] min-w-[var(--radix-select-trigger-width)] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[10px] border border-[rgb(186_160_112/0.18)]",
  "bg-[linear-gradient(180deg,rgb(255_255_255/0.98)_0%,rgb(252_250_247/0.96)_100%)]",
  "shadow-[0_24px_80px_rgb(15_15_15/0.08)]",
  "backdrop-blur-md backdrop-saturate-125",
  "data-[state=open]:animate-lux-select-in data-[state=closed]:animate-lux-select-out",
  "motion-reduce:animate-none",
);

const itemBaseDark = cn(
  "relative flex cursor-pointer select-none items-center rounded-[6px] px-3 py-2.5 ps-8",
  "font-sans text-[0.9375rem] leading-snug tracking-[0.012em] outline-none",
  "text-[rgb(253_250_245/92%)]",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
  "data-[highlighted]:bg-[rgb(196_165_116/14%)] data-[highlighted]:text-[rgb(253_250_245/98%)]",
  "data-[state=checked]:text-[rgb(243_236_226/98%)]",
  "focus-visible:bg-[rgb(196_165_116/14%)]",
);

const itemBaseLight = cn(
  "relative flex cursor-pointer select-none items-center rounded-[6px] px-3 py-2.5 ps-8",
  "font-sans text-[0.9375rem] leading-snug tracking-[0.012em] outline-none",
  "text-[#171717]",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
  "data-[highlighted]:bg-[rgb(33_52_89/0.06)] data-[highlighted]:text-[#171717]",
  "data-[state=checked]:text-[#171717]",
  "focus-visible:bg-[rgb(33_52_89/0.06)]",
);

export function LuxurySelect({
  id,
  name,
  options,
  placeholder,
  defaultValue = "",
  required,
  disabled,
  variant = "dark",
  className,
  "aria-required": ariaRequired,
}: LuxurySelectProps) {
  const listboxId = useId();
  const [value, setValue] = useState(defaultValue);
  const isDark = variant === "dark";
  const radixValue = value === "" ? undefined : value;

  return (
    <MotionSafeSelect
      value={radixValue}
      onValueChange={setValue}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      listboxId={listboxId}
      className={className}
      ariaRequired={ariaRequired}
      isDark={isDark}
      placeholder={placeholder}
      options={options}
      hiddenValue={value}
    />
  );
}

type InnerLuxurySelectProps = {
  value: string | undefined;
  onValueChange: (v: string) => void;
  disabled?: boolean;
  required?: boolean;
  name: string;
  id: string;
  listboxId: string;
  className?: string;
  ariaRequired?: boolean | "true" | "false";
  isDark: boolean;
  placeholder?: string;
  options: LuxurySelectOption[];
  hiddenValue: string;
};

function MotionSafeSelect({
  value,
  onValueChange,
  disabled,
  required,
  name,
  id,
  listboxId,
  className,
  ariaRequired,
  isDark,
  placeholder,
  options,
  hiddenValue,
}: InnerLuxurySelectProps) {
  return (
    <div
      className={cn("lux-enquiry-select-wrap lux-enquiry-select-wrap--radix", className)}
    >
      <input
        type="text"
        name={name}
        value={hiddenValue}
        required={required}
        tabIndex={-1}
        aria-hidden
        readOnly
        className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        onChange={() => undefined}
      />

      <Select.Root value={value} onValueChange={onValueChange} disabled={disabled} required={required}>
        <Select.Trigger
          id={id}
          aria-required={ariaRequired}
          aria-controls={listboxId}
          className={cn(isDark ? triggerEnquiry : triggerLight)}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon asChild>
            <ChevronIcon
              className={cn(
                "shrink-0 transition-transform duration-300 ease-luxury motion-reduce:transition-none",
                isDark ? "me-0.5 text-[rgb(138_116_82/72%)]" : "text-[rgb(138_116_82/72%)]",
                "group-data-[state=open]:rotate-180",
              )}
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            id={listboxId}
            position="popper"
            sideOffset={6}
            collisionPadding={{ top: 12, right: 12, bottom: 12, left: 12 }}
            className={isDark ? contentPanelDark : contentPanelLight}
          >
            <Select.ScrollUpButton
              className={cn(
                "flex h-6 cursor-default items-center justify-center",
                isDark ? "text-[rgb(196_165_116/70%)]" : "text-[rgb(138_116_82/70%)]",
              )}
            >
              <ChevronIcon className="rotate-180" />
            </Select.ScrollUpButton>

            <Select.Viewport className="max-h-[min(16.5rem,52dvh)] p-1.5">
              {options.map((opt) => (
                <Select.Item
                  key={opt.value}
                  value={opt.value}
                  className={isDark ? itemBaseDark : itemBaseLight}
                >
                  <Select.ItemIndicator
                    className={cn(
                      "absolute start-2.5 inline-flex items-center justify-center",
                      isDark ? "text-[rgb(196_165_116/88%)]" : "text-[rgb(33_52_89/72%)]",
                    )}
                  >
                    <CheckIcon />
                  </Select.ItemIndicator>
                  <Select.ItemText>{opt.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>

            <Select.ScrollDownButton
              className={cn(
                "flex h-6 cursor-default items-center justify-center",
                isDark ? "text-[rgb(196_165_116/70%)]" : "text-[rgb(138_116_82/70%)]",
              )}
            >
              <ChevronIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
