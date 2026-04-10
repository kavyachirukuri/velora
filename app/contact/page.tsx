import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildWhatsAppUrl, generalOrderMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach VELOra for orders, styling help, or partnerships.",
};

export default function ContactPage() {
  const wa = buildWhatsAppUrl(generalOrderMessage());

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-velora-maroon)]">
        Contact
      </h1>
      <p className="mt-4 text-[var(--color-velora-muted)]">
        We reply fastest on WhatsApp—whether you are choosing a wedding drape,
        tracking a shipment, or exploring wholesale.
      </p>

      <div className="mt-10 space-y-6 rounded-2xl border border-[var(--color-velora-maroon-deep)]/10 bg-white/80 p-8 shadow-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-velora-gold)]">
            WhatsApp
          </p>
          <p className="mt-2 text-sm text-[var(--color-velora-muted)]">
            Primary line for orders and styling. Typical reply under a few hours
            on business days.
          </p>
          <WhatsAppButton
            href={wa}
            source="contact_page"
            variant="whatsapp"
            className="mt-4"
          >
            Message VELOra
          </WhatsAppButton>
        </div>
        <div className="border-t border-[var(--color-velora-maroon-deep)]/10 pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-velora-gold)]">
            Email
          </p>
          <a
            href="mailto:hello@velora.example.com"
            className="mt-2 inline-block text-sm font-medium text-[var(--color-velora-maroon)] underline-offset-4 hover:underline"
          >
            hello@velora.example.com
          </a>
          <p className="mt-2 text-xs text-[var(--color-velora-muted)]">
            Replace with your domain when you go live.
          </p>
        </div>
        <div className="border-t border-[var(--color-velora-maroon-deep)]/10 pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-velora-gold)]">
            Visit
          </p>
          <p className="mt-2 text-sm text-[var(--color-velora-muted)]">
            Studio visits by appointment. Mention your city on WhatsApp and we
            will coordinate.
          </p>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-[var(--color-velora-muted)]">
        Retailers: see{" "}
        <Link
          href="/wholesale"
          className="font-semibold text-[var(--color-velora-maroon)] underline-offset-4 hover:underline"
        >
          Wholesale
        </Link>{" "}
        for MOQ and linesheets.
      </p>
    </div>
  );
}
