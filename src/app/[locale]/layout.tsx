import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { portfolio } from "@/content/profile";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ayse-sena-bagdat.vercel.app";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : "en";
  const { profile } = portfolio;
  const title = `${profile.name} — ${profile.role[loc]}`;
  const description = profile.subtitle[loc];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s — ${profile.name}`,
    },
    description,
    keywords: [
      profile.name,
      "Management Information Systems",
      "Yönetim Bilişim Sistemleri",
      "portfolio",
      "internship",
      "data analysis",
      "SAP ERP",
      "UI/UX",
      "Python",
      "React",
    ],
    authors: [{ name: profile.name }],
    creator: profile.name,
    alternates: {
      canonical: `/${loc}`,
      languages: {
        en: "/en",
        tr: "/tr",
      },
    },
    openGraph: {
      type: "website",
      locale: loc === "tr" ? "tr_TR" : "en_US",
      url: `${SITE_URL}/${loc}`,
      title,
      description,
      siteName: profile.name,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: profile.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
    icons: { icon: "/favicon.svg", apple: "/apple-icon.png" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { profile } = portfolio;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role[locale],
    url: `${SITE_URL}/${locale}`,
    email: profile.social.email,
    address: { "@type": "PostalAddress", addressLocality: "Ankara", addressCountry: "TR" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Ankara Medipol University" },
    sameAs: [profile.social.github, profile.social.linkedin],
    knowsAbout: ["Management Information Systems", "Data Analysis", "SAP ERP", "UI/UX Design", "Software Development"],
  };

  return (
    <html lang={locale} suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers locale={locale}>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
