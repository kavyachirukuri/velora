/**
 * Business WhatsApp: country code, no + or spaces.
 * Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` for production.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function productInquiryMessage(params: {
  productName: string;
  priceLabel: string;
  quantity: number;
}): string {
  const { productName, priceLabel, quantity } = params;
  return `Hello VELOra! ✨

I'd love to order this piece:

• Product: ${productName}
• Price: ${priceLabel}
• Quantity: ${quantity}

Please confirm availability and next steps. Thank you!`;
}

export function generalOrderMessage(): string {
  return `Hello VELOra! I'd like to explore your saree collection and place an order. Could you help me?`;
}

export function wholesaleMessage(): string {
  return `Hello VELOra team,

I'm interested in your wholesale program for sarees. Please share details and minimum order information.

Thank you!`;
}
