"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/config";

export function Providers({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LocaleProvider locale={locale}>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
