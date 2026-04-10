declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Call when user taps WhatsApp (wire to GA4 / GTM in production). */
export function trackWhatsAppClick(source: string): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "whatsapp_click", { source });
}
