"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale: current, dict } = useLocale();

  const swapLocale = (target: Locale) => {
    const segments = pathname.split("/");
    // segments[0] === "" , segments[1] === current locale
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  return (
    <div
      className="inline-flex items-center rounded-full border border-navy-200 p-0.5 dark:border-navy-700"
      role="group"
      aria-label={dict.misc.languageSwitch}
    >
      {locales.map((loc) => (
        <Link
          key={loc}
          href={swapLocale(loc)}
          aria-current={loc === current ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors",
            loc === current
              ? "bg-accent-600 text-white"
              : "text-navy-500 hover:text-navy-800 dark:text-navy-400 dark:hover:text-navy-100"
          )}
          title={localeNames[loc]}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}
