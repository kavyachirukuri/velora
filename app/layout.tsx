import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://velora.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VELOra — Premium Sarees | Order on WhatsApp",
    template: "%s | VELOra",
  },
  description:
    "Discover handpicked sarees with a trust-first buying journey. Shop premium silks and order seamlessly on WhatsApp.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "VELOra",
    title: "VELOra — Premium Sarees",
    description:
      "Tradition, tailored for today. Discover collections and order on WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELOra — Premium Sarees",
    description:
      "Tradition, tailored for today. Discover collections and order on WhatsApp.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#5c1a1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
