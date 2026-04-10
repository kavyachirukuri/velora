import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-velora-maroon-deep)]/15 bg-[var(--color-velora-maroon-deep)] text-[var(--color-velora-cream)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-serif)] text-2xl text-white">
              VELO<span className="text-[var(--color-velora-gold)]">ra</span>
            </p>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              Premium sarees, woven stories, and a buying experience built on
              trust—crafted for the modern woman who honors tradition.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-velora-gold)]">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/wholesale"
                  className="text-white/80 hover:text-white"
                >
                  Wholesale
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-velora-gold)]">
              Trust
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Authentic fabrics & craftsmanship</li>
              <li>Secure WhatsApp ordering</li>
              <li>Pan-India shipping</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} VELOra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
