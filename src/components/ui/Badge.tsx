import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-navy-200/70 bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700 dark:border-navy-700 dark:bg-navy-800/60 dark:text-navy-200",
        className
      )}
    >
      {children}
    </span>
  );
}

export function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-accent-50 px-2.5 py-1 text-xs font-medium text-accent-700 dark:bg-accent-950/50 dark:text-accent-300">
      {children}
    </span>
  );
}
