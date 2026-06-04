import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-600 to-accent-500 text-white shadow-lg shadow-accent-600/20 hover:shadow-accent-600/35 hover:-translate-y-0.5",
  secondary:
    "border border-navy-200 bg-card text-navy-900 hover:border-accent-400 hover:text-accent-700 dark:border-navy-700 dark:text-navy-100 dark:hover:text-accent-300",
  ghost:
    "text-navy-700 hover:bg-navy-100 dark:text-navy-200 dark:hover:bg-navy-800",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  external,
  href,
  children,
  ...props
}: CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href">) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
