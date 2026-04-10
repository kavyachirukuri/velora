import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-velora-maroon)]">
        Page not found
      </h1>
      <p className="mt-3 text-[var(--color-velora-muted)]">
        That piece may have sold out—or the link shifted. Let’s get you back to
        the collection.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-flex min-h-[48px] items-center rounded-full bg-[var(--color-velora-maroon)] px-8 py-3 text-sm font-semibold text-white"
      >
        Go to shop
      </Link>
    </div>
  );
}
