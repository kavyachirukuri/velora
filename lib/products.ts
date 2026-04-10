export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  story: string;
  priceINR: number;
  compareAtINR?: number;
  stockLeft: number;
  collection: string;
  images: string[];
  fabric?: string;
  care?: string;
};

export const products: Product[] = [
  {
    slug: "midnight-kanjivaram-silk",
    name: "Midnight Kanjivaram Silk",
    shortDescription: "Handwoven zari borders on deep maroon silk.",
    story:
      "Woven for evenings that deserve quiet grandeur. The zari catches candlelight like memory—each motif placed by hand so no two drapes fall quite the same. Pair with heirloom gold; let the silk do the talking.",
    priceINR: 24999,
    compareAtINR: 28999,
    stockLeft: 4,
    collection: "Heritage Silk",
    fabric: "Pure Kanjivaram silk, tested zari",
    care: "Dry clean only. Store folded with muslin.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e5b?w=1200&q=80",
    ],
  },
  {
    slug: "sunrise-organza-floral",
    name: "Sunrise Organza Floral",
    shortDescription: "Sheer organza with gold-thread florals.",
    story:
      "Morning light, bottled in fabric. Light enough for daytime celebrations, detailed enough for the camera. The floral work is delicate—made to feel like a garden moving with you.",
    priceINR: 12999,
    stockLeft: 9,
    collection: "Occasion Edit",
    fabric: "Organza with hand embroidery",
    care: "Dry clean. Steam on low from reverse.",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80",
    ],
  },
  {
    slug: "royal-blue-banarasi",
    name: "Royal Blue Banarasi",
    shortDescription: "Classic brocade in jewel blue and antique gold.",
    story:
      "A timeless palette for weddings and milestones. The brocade is dense but fluid—structured drape, soft fall. When you walk in, the room notices before you speak.",
    priceINR: 18999,
    compareAtINR: 21999,
    stockLeft: 3,
    collection: "Heritage Silk",
    fabric: "Banarasi silk blend",
    care: "Dry clean only.",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=1200&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e5b?w=1200&q=80",
    ],
  },
  {
    slug: "blush-linen-handloom",
    name: "Blush Linen Handloom",
    shortDescription: "Breathable linen in soft rose with gold border.",
    story:
      "For brunches, art openings, and cities that stay warm. Handloom texture meets a whisper of gold—effortless, modern, still unmistakably VELOra.",
    priceINR: 8999,
    stockLeft: 12,
    collection: "Everyday Luxe",
    fabric: "Handloom linen with zari border",
    care: "Dry clean recommended; cold wash if needed.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatINR(n: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export const collections = [
  {
    id: "heritage",
    title: "Heritage Silk",
    blurb: "Handwoven classics for life's biggest moments.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
  },
  {
    id: "occasion",
    title: "Occasion Edit",
    blurb: "Light-catching pieces for daytime celebrations.",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
  },
  {
    id: "everyday",
    title: "Everyday Luxe",
    blurb: "Breathable elegance you can live in.",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
  },
];
