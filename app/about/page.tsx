import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the founder and learn how VELOra blends textile expertise with modern design.",
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      <div className="border-b border-[var(--color-velora-maroon-deep)]/10 bg-[var(--color-velora-cream)]/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-velora-maroon)] sm:text-5xl">
            About VELOra
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-velora-muted)]">
            A modern brand shaped by textile science, craft, and the belief that
            what you wear tells your story.
          </p>
        </div>
      </div>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:mt-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)] lg:mx-0 lg:max-w-none">
            <Image
              src="/padmaImage.jpeg"
              alt="Portrait of the VELOra founder"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-velora-gold)]">
              Our founder
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl text-[var(--color-velora-maroon)] sm:text-4xl">
              Passion, precision, purpose
            </h2>
            <div className="mt-6 space-y-4 text-[var(--color-velora-muted)] leading-relaxed">
              <p>
                Driven by a strong foundation in Textile Technology from
                Osmania University, the founder of the VELOra brand combines
                technical expertise with entrepreneurial vision to build a
                modern clothing brand rooted in quality, style, and innovation.
              </p>
              <p>
                With deep knowledge of fabrics, garment production, and industry
                standards, VELOra Venture was created to bring thoughtfully
                designed apparel that blends comfort, elegance, and contemporary
                fashion. Every product reflects a commitment to craftsmanship,
                premium materials, and attention to detail.
              </p>
              <p>
                More than just a clothing brand, VELOra represents ambition,
                creativity, and the journey of turning passion into purpose. The
                vision is to create apparel that inspires confidence and helps
                people express their individuality through fashion.
              </p>
              <p className="border-l-2 border-[var(--color-velora-gold)] pl-4 font-[family-name:var(--font-serif)] text-lg text-[var(--color-velora-maroon)]">
                At VELOra, we believe clothing is not only what you wear—it is
                how you present your story to the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
