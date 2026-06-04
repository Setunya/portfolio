import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-navy-100 bg-card p-6 shadow-sm dark:border-navy-800",
        interactive &&
          "transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-500/10 dark:hover:border-accent-600/60",
        className
      )}
    >
      {children}
    </div>
  );
}
