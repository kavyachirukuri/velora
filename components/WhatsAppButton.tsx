"use client";

import type { ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

type Props = {
  href: string;
  children: ReactNode;
  source: string;
  className?: string;
  variant?: "primary" | "outline" | "whatsapp";
};

export function WhatsAppButton({
  href,
  children,
  source,
  className = "",
  variant = "primary",
}: Props) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles = {
    primary:
      "bg-[var(--color-velora-maroon)] text-white hover:bg-[var(--color-velora-maroon-deep)] focus-visible:outline-[var(--color-velora-gold)]",
    outline:
      "border-2 border-[var(--color-velora-maroon)] text-[var(--color-velora-maroon)] hover:bg-[var(--color-velora-maroon)]/5 focus-visible:outline-[var(--color-velora-maroon)]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] focus-visible:outline-[#128C7E]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(source)}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
