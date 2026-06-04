import type { ReactNode } from "react";
import "./globals.css";

/**
 * Pass-through root layout. The real <html>/<body> live in
 * [locale]/layout.tsx so the lang attribute can be locale-aware.
 * (This is the official Next.js App Router i18n pattern.)
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
