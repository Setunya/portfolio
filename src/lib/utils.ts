/** Minimal className combiner (no extra deps). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Smooth-scroll to an in-page anchor, accounting for the sticky navbar. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  // Update the hash without jumping
  history.replaceState(null, "", `#${id}`);
}
