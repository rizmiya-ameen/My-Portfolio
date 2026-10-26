import React from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  children: React.ReactNode;
  // faint oversized word behind the title (from `sm` up)
  watermark?: string;
  // for sections with a coloured background
  onDark?: boolean;
};

export default function SectionHeading({
  children,
  watermark,
  onDark,
}: SectionHeadingProps) {
  return (
    <div className="relative flex flex-col items-center justify-center mb-8 sm:mb-10 sm:h-20 text-center">
      {watermark && (
        <span
          aria-hidden="true"
          className={clsx(
            "hidden sm:block absolute inset-x-0 top-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap text-[4.5rem] font-extrabold uppercase leading-none tracking-[0.18em]",
            onDark
              ? "text-white/10"
              : "text-sky-900/[0.06] dark:text-sky-200/[0.07]"
          )}
        >
          {watermark}
        </span>
      )}
      <h2 className="relative text-2xl sm:text-[1.7rem] font-bold tracking-tight leading-tight">
        {children}
      </h2>
    </div>
  );
}
