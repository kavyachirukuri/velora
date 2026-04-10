"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildWhatsAppUrl, productInquiryMessage } from "@/lib/whatsapp";
import type { Product } from "@/lib/products";
import { formatINR } from "@/lib/products";

type Props = { product: Product };

export function ProductOrderPanel({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);

  const priceLabel = formatINR(product.priceINR);
  const waHref = useMemo(
    () =>
      buildWhatsAppUrl(
        productInquiryMessage({
          productName: product.name,
          priceLabel,
          quantity,
        }),
      ),
    [product.name, priceLabel, quantity],
  );

  const lowStock = product.stockLeft <= 5;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-3">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-elevated)]">
          <Image
            src={product.images[imageIndex] ?? product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        {product.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {product.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setImageIndex(i)}
                className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  i === imageIndex
                    ? "border-[var(--color-velora-gold)]"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-velora-gold)]">
          {product.collection}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-serif)] text-3xl text-[var(--color-velora-maroon)] sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-3 text-[var(--color-velora-muted)]">
          {product.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap items-baseline gap-3">
          <span className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-velora-ink)]">
            {priceLabel}
          </span>
          {product.compareAtINR != null && (
            <span className="text-lg text-[var(--color-velora-muted)] line-through">
              {formatINR(product.compareAtINR)}
            </span>
          )}
        </div>

        {lowStock && (
          <p className="mt-3 rounded-lg border border-[var(--color-velora-maroon)]/20 bg-white/80 px-3 py-2 text-sm text-[var(--color-velora-maroon)]">
            Only {product.stockLeft} left in this batch—order soon to secure
            yours.
          </p>
        )}

        <div className="mt-8 rounded-2xl border border-[var(--color-velora-maroon-deep)]/10 bg-white/60 p-6 shadow-sm">
          <label
            htmlFor="qty"
            className="text-sm font-medium text-[var(--color-velora-ink)]"
          >
            Quantity
          </label>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-[var(--color-velora-maroon-deep)]/15 bg-[var(--color-velora-cream)]">
              <button
                type="button"
                className="min-h-[48px] min-w-[48px] rounded-l-full text-lg font-medium hover:bg-white"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <input
                id="qty"
                type="number"
                min={1}
                max={99}
                value={quantity}
                onChange={(e) => {
                  const v = parseInt(e.target.value, 10);
                  if (!Number.isNaN(v)) setQuantity(Math.min(99, Math.max(1, v)));
                }}
                className="w-14 border-x border-[var(--color-velora-maroon-deep)]/10 bg-transparent py-2 text-center text-base font-semibold outline-none"
              />
              <button
                type="button"
                className="min-h-[48px] min-w-[48px] rounded-r-full text-lg font-medium hover:bg-white"
                onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <WhatsAppButton
              href={waHref}
              source={`product:${product.slug}`}
              variant="whatsapp"
              className="flex-1 min-w-[200px]"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </WhatsAppButton>
          </div>
          <p className="mt-3 text-xs text-[var(--color-velora-muted)]">
            Opens WhatsApp with your selection pre-filled—just send to confirm.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-velora-maroon)]">
            The story
          </h2>
          <p className="mt-3 whitespace-pre-line leading-relaxed text-[var(--color-velora-muted)]">
            {product.story}
          </p>
        </div>

        {(product.fabric || product.care) && (
          <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            {product.fabric && (
              <div className="rounded-xl bg-white/80 p-4 shadow-sm">
                <dt className="font-semibold text-[var(--color-velora-maroon)]">
                  Fabric
                </dt>
                <dd className="mt-1 text-[var(--color-velora-muted)]">
                  {product.fabric}
                </dd>
              </div>
            )}
            {product.care && (
              <div className="rounded-xl bg-white/80 p-4 shadow-sm">
                <dt className="font-semibold text-[var(--color-velora-maroon)]">
                  Care
                </dt>
                <dd className="mt-1 text-[var(--color-velora-muted)]">
                  {product.care}
                </dd>
              </div>
            )}
          </dl>
        )}

        <ul className="mt-10 flex flex-wrap gap-3 text-xs font-medium text-[var(--color-velora-maroon)]">
          {[
            "Authentic sourcing",
            "Careful QC",
            "Insured shipping",
            "Personal styling help",
          ].map((b) => (
            <li
              key={b}
              className="rounded-full border border-[var(--color-velora-gold)]/40 bg-[var(--color-velora-gold-light)]/25 px-3 py-1.5"
            >
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-8 lg:hidden">
          <WhatsAppButton
            href={waHref}
            source={`product_footer:${product.slug}`}
            variant="whatsapp"
            className="w-full"
          >
            Order on WhatsApp — {priceLabel}
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
