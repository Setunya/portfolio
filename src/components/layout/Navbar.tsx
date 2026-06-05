"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn, scrollToId } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SECTION_IDS = [
  "about",
  "skills",
  "projects",
  "journey",
  "certifications",
  "contact",
] as const;

export function Navbar() {
  const { locale, dict } = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const home = `/${locale}`;
  const isHome = pathname === home || pathname === `${home}/`;

  const navItems: { id: (typeof SECTION_IDS)[number]; label: string }[] = [
    { id: "about", label: dict.nav.about },
    { id: "skills", label: dict.nav.skills },
    { id: "projects", label: dict.nav.projects },
    { id: "journey", label: dict.nav.journey },
    { id: "certifications", label: dict.nav.certifications },
    { id: "contact", label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for active section highlighting
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const handleNav = (id: string) => (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      scrollToId(id);
    }
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy-100/80 bg-white/80 backdrop-blur-md dark:border-navy-800/80 dark:bg-navy-950/80"
          : "bg-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          href={home}
          onClick={isHome ? (e) => { e.preventDefault(); scrollToId("home"); } : undefined}
          className="flex items-center gap-2 font-bold tracking-tight text-navy-900 dark:text-white"
          aria-label="Ayşe Sena Bağdat — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-600 to-accent-500 text-sm text-white">
            AS
          </span>
          <span className="hidden sm:inline">Ayşe Sena Bağdat</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`${home}#${item.id}`}
              onClick={handleNav(item.id)}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                active === item.id && isHome
                  ? "text-accent-600 dark:text-accent-400"
                  : "text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-navy-700 hover:bg-navy-100 dark:text-navy-200 dark:hover:bg-navy-800 md:hidden"
            aria-label={open ? dict.nav.close : dict.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-navy-100 bg-white px-5 pb-6 pt-2 dark:border-navy-800 dark:bg-navy-950 md:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`${home}#${item.id}`}
                  onClick={handleNav(item.id)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-navy-700 hover:bg-navy-50 dark:text-navy-200 dark:hover:bg-navy-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
