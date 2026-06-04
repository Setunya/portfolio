"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { dict } = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={dict.misc.themeSwitch}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-navy-600 transition-colors hover:bg-navy-100 dark:text-navy-300 dark:hover:bg-navy-800"
    >
      {mounted && isDark ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
