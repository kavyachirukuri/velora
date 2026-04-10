import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildWhatsAppUrl, wholesaleMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Wholesale",
  description:
    "Partner with VELOra for wholesale sarees. Clear benefits, minimums, and WhatsApp onboarding.",
};

export default function WholesalePage() {
  const wa = buildWhatsAppUrl(wholesaleMessage());

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-velora-gold)]">
        For retailers & stylists
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-serif)] text-4xl text-[var(--color-velora-maroon)]">
        Wholesale, simplified
      </h1>
      <p className="mt-4 text-lg text-[var(--color-velora-muted)]">
        Stock pieces your clients will feel proud to wear—consistent quality,
        predictable timelines, and a single WhatsApp thread for reorders.
      </p>

      <WhatsAppButton
        href={wa}
        source="wholesale_hero"
        variant="whatsapp"
        className="mt-8"
      >
        Join on WhatsApp
      </WhatsAppButton>

      <section className="mt-14 space-y-8">
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-velora-maroon)]">
          What you get
        </h2>
        <ul className="space-y-4">
          {[
            {
              title: "Curated drops",
              body: "Seasonal edits aligned to weddings, festivals, and gifting peaks—so your rack stays relevant.",
            },
            {
              title: "Transparent grading",
              body: "Fabric notes, care, and photography that match what arrives—fewer surprises, happier clients.",
            },
            {
              title: "Reorder rhythm",
              body: "Repeat SKUs where it makes sense; bespoke lots when you need exclusivity in your city.",
            },
            {
              title: "Dedicated channel",
              body: "One WhatsApp line for quotes, invoices, and dispatch—no ticket queues.",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-[var(--color-velora-maroon-deep)]/10 bg-white/80 p-6 shadow-sm"
            >
              <p className="font-semibold text-[var(--color-velora-maroon)]">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-[var(--color-velora-muted)]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-2xl bg-[var(--color-velora-maroon)] p-8 text-white">
        <h2 className="font-[family-name:var(--font-serif)] text-xl">
          Minimal form, fast start
        </h2>
        <p className="mt-3 text-sm text-white/80">
          Tell us your store name, city, and rough monthly volume on WhatsApp.
          We’ll reply with linesheets and MOQ within one business day.
        </p>
        <form className="mt-6 grid gap-4 sm:grid-cols-2" action="#" noValidate>
          {/* Static MVP: wire action to your backend, Formspree, or Google Forms */}
          <label className="block text-sm">
            <span className="text-white/70">Store name</span>
            <input
              name="store"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-3 text-white placeholder:text-white/40 outline-none focus:border-[var(--color-velora-gold)]"
              placeholder="e.g. Ritu Fashions"
            />
          </label>
          <label className="block text-sm">
            <span className="text-white/70">City</span>
            <input
              name="city"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-3 text-white placeholder:text-white/40 outline-none focus:border-[var(--color-velora-gold)]"
              placeholder="e.g. Hyderabad"
            />
          </label>
          <label className="sm:col-span-2 block text-sm">
            <span className="text-white/70">Email (optional)</span>
            <input
              name="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-3 text-white placeholder:text-white/40 outline-none focus:border-[var(--color-velora-gold)]"
              placeholder="you@boutique.com"
            />
          </label>
          <p className="sm:col-span-2 text-xs text-white/60">
            This demo form is visual only—connect it to your CRM or email
            service. Primary path: WhatsApp below.
          </p>
        </form>
        <WhatsAppButton
          href={wa}
          source="wholesale_form_footer"
          variant="whatsapp"
          className="mt-6 border-0"
        >
          Start on WhatsApp instead
        </WhatsAppButton>
      </section>
    </div>
  );
}
