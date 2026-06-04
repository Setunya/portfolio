import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-20 sm:py-28", className)}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  tag,
  title,
  subtitle,
}: {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
        {tag}
      </p>
      <h2
        id={`${id}-heading`}
        className="text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
      )}
    </Reveal>
  );
}
