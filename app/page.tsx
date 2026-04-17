import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildWhatsAppUrl, generalOrderMessage } from "@/lib/whatsapp";
import { collections, products } from "@/lib/products";

const heroSrc =
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&q=85";

const testimonials = [
  {
    quote:
      "The drape and zari work exceeded my wedding photographer's expectations. Ordering on WhatsApp felt personal, not transactional.",
    name: "Ananya K.",
    place: "Bengaluru",
  },
  {
    quote:
      "I was unsure about sizing the blouse—Their team guided me on chat within minutes. The saree arrived beautifully packed.",
    name: "Meera S.",
    place: "Mumbai",
  },
  {
    quote:
      "Wholesale onboarding was straightforward. Clear MOQs and consistent quality across repeats.",
    name: "Ritu Fashions",
    place: "Hyderabad",
  },
];

export default function HomePage() {
  const waGeneral = buildWhatsAppUrl(generalOrderMessage());

  return (
    <>
      <section className="relative min-h-[85vh] flex flex-col justify-end">
        <Image
          src={heroSrc}
          alt="Elegant saree drape in rich fabric"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-velora-maroon-deep)] via-[var(--color-velora-maroon-deep)]/50 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-velora-gold-light)]">
            Premium sarees · WhatsApp checkout
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-serif)] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Where tradition drapes in modern light
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Curated silks and handlooms, transparent pricing, and a human
            conversation on WhatsApp—so you buy with confidence, not doubt.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/shop"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--color-velora-gold)] px-8 py-3.5 text-sm font-semibold text-[var(--color-velora-maroon-deep)] shadow-lg transition hover:bg-[var(--color-velora-gold-light)]"
            >
              Shop now
            </Link>
            <WhatsAppButton
              href={waGeneral}
              source="hero_secondary"
              variant="outline"
              className="border-white !text-white hover:bg-white/10"
            >
              Order on WhatsApp
            </WhatsAppButton>
          </div>
          <WhatsAppButton
            href={waGeneral}
            source="hero_whatsapp_green"
            variant="whatsapp"
            className="mt-4 sm:hidden w-full max-w-sm"
          >
            Quick chat on WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-velora-maroon)]">
              Featured collections
            </h2>
            <p className="mt-2 max-w-lg text-[var(--color-velora-muted)]">
              Start with a mood—each line is edited for drape, occasion, and
              ease of styling.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-sm font-semibold text-[var(--color-velora-maroon)] underline-offset-4 hover:underline"
          >
            View all pieces
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.id}
              href="/shop"
              className="group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-elevated)]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-velora-maroon)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-velora-muted)]">
                  {c.blurb}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-velora-maroon-deep)]/10 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center font-[family-name:var(--font-serif)] text-2xl text-[var(--color-velora-maroon)]">
            Why shoppers trust VELOra
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Fabric authenticity",
                d: "Sourced with paperwork where it matters—silks and zari you can feel.",
              },
              {
                t: "Human checkout",
                d: "WhatsApp keeps nuance: pleats, blouses, delivery windows—answered by people.",
              },
              {
                t: "Insured delivery",
                d: "Packed like heirlooms, tracked to your door.",
              },
              {
                t: "Easy exchanges",
                d: "We stand behind fit and color—reach out within 48 hours of delivery.",
              },
            ].map((item) => (
              <li
                key={item.t}
                className="rounded-2xl border border-[var(--color-velora-gold)]/30 bg-[var(--color-velora-cream)] p-6"
              >
                <p className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-velora-maroon)]">
                  {item.t}
                </p>
                <p className="mt-2 text-sm text-[var(--color-velora-muted)]">
                  {item.d}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-velora-maroon)]">
          Loved by our community
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl bg-white p-6 shadow-[var(--shadow-elevated)]"
            >
              <p className="text-[var(--color-velora-muted)] leading-relaxed">
                “{t.quote}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-[var(--color-velora-maroon)]">
                {t.name}
                <span className="font-normal text-[var(--color-velora-muted)]">
                  {" "}
                  · {t.place}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <WhatsAppButton
            href={waGeneral}
            source="home_mid_page"
            variant="whatsapp"
            className="min-w-[240px]"
          >
            Chat to stylists on WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="bg-[var(--color-velora-maroon)] py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl">
            Ready when you are
          </h2>
          <p className="mt-3 text-white/80">
            Browse {products.length} hand-picked pieces—then tap WhatsApp. We
            confirm availability and payment in one smooth thread.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/shop"
              className="inline-flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-full bg-[var(--color-velora-gold)] px-8 py-3.5 text-sm font-semibold text-[var(--color-velora-maroon-deep)] sm:w-auto"
            >
              Shop the edit
            </Link>
            <WhatsAppButton
              href={waGeneral}
              source="home_footer_cta"
              variant="whatsapp"
              className="w-full max-w-xs border-0"
            >
              Order on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
