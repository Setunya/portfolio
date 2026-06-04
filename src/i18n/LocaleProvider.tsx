"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import { getDictionary, type Dictionary } from "./dictionaries";
import type { Localized } from "@/content/types";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
  /** Pick the current-locale string from a Localized value. */
  t: (value: Localized) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const dict = getDictionary(locale);
  const t = (value: Localized) => value[locale];
  return (
    <LocaleContext.Provider value={{ locale, dict, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
