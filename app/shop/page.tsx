import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { formatINR, products } from "@/lib/products";
import { buildWhatsAppUrl, productInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse VELOra premium sarees. Transparent prices, limited batches, order on WhatsApp.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-velora-maroon)]">
          Shop
        </h1>
        <p className="mt-3 text-[var(--color-velora-muted)]">
          Each piece is photographed in natural light. Tap through for the full
          story, then order on WhatsApp with one tap—we’ll confirm fabric,
          dispatch, and care.
        </p>
      </header>

      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {products.map((p) => {
          const wa = buildWhatsAppUrl(
            productInquiryMessage({
              productName: p.name,
              priceLabel: formatINR(p.priceINR),
              quantity: 1,
            }),
          );
          const scarce = p.stockLeft <= 5;

          return (
            <li
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-elevated)]"
            >
              <Link href={`/product/${p.slug}`} className="relative block aspect-[3/4]">
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  className="object-cover transition hover:opacity-95"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {scarce && (
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--color-velora-maroon)] px-3 py-1 text-xs font-semibold text-white">
                    Only {p.stockLeft} left
                  </span>
                )}
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-velora-gold)]">
                  {p.collection}
                </p>
                <Link href={`/product/${p.slug}`}>
                  <h2 className="mt-1 font-[family-name:var(--font-serif)] text-xl text-[var(--color-velora-maroon)] hover:underline">
                    {p.name}
                  </h2>
                </Link>
                <p className="mt-2 flex-1 text-sm text-[var(--color-velora-muted)]">
                  {p.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-velora-ink)]">
                    {formatINR(p.priceINR)}
                  </span>
                  {p.compareAtINR != null && (
                    <span className="text-sm text-[var(--color-velora-muted)] line-through">
                      {formatINR(p.compareAtINR)}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href={`/product/${p.slug}`}
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border-2 border-[var(--color-velora-maroon)] text-sm font-semibold text-[var(--color-velora-maroon)] hover:bg-[var(--color-velora-maroon)]/5"
                  >
                    View details
                  </Link>
                  <WhatsAppButton
                    href={wa}
                    source={`shop_card:${p.slug}`}
                    variant="whatsapp"
                    className="flex-1"
                  >
                    WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
