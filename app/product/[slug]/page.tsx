import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductOrderPanel } from "@/components/ProductOrderPanel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  formatINR,
  getProductBySlug,
  products,
} from "@/lib/products";
import { buildWhatsAppUrl, productInquiryMessage } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      images: product.images[0] ? [{ url: product.images[0] }] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const waAboveFold = buildWhatsAppUrl(
    productInquiryMessage({
      productName: product.name,
      priceLabel: formatINR(product.priceINR),
      quantity: 1,
    }),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mb-6 lg:hidden">
        <WhatsAppButton
          href={waAboveFold}
          source={`product_sticky_top:${product.slug}`}
          variant="whatsapp"
          className="w-full"
        >
          Order on WhatsApp — {formatINR(product.priceINR)}
        </WhatsAppButton>
      </div>
      <ProductOrderPanel product={product} />
    </div>
  );
}
