import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-extrabold text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-2 text-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        href="/en"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-600 to-accent-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-600/20 transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </section>
  );
}
