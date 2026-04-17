import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-velora-maroon-deep)]/10 bg-[var(--color-velora-cream)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-serif)] text-xl tracking-wide text-[var(--color-velora-maroon)] sm:text-2xl"
        >
          VELO<span className="text-[var(--color-velora-gold)]">ra</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--color-velora-ink)] transition hover:text-[var(--color-velora-maroon)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/shop"
          className="rounded-full bg-[var(--color-velora-maroon)] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-velora-maroon-deep)] min-h-[44px] min-w-[44px] flex items-center justify-center md:min-h-0 md:min-w-0"
        >
          Shop
        </Link>
      </div>
      <nav
        className="flex justify-center gap-1 overflow-x-auto border-t border-[var(--color-velora-maroon-deep)]/5 px-2 py-2 md:hidden"
        aria-label="Mobile"
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="shrink-0 rounded-full px-3 py-2 text-xs font-medium text-[var(--color-velora-muted)] hover:bg-white/80 hover:text-[var(--color-velora-maroon)]"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
