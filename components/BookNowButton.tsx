"use client";

import { SITE } from "@/lib/translations";
import { useLanguage } from "@/lib/LanguageContext";

export default function BookNowButton({
  variant = "solid",
  className = "",
}: {
  variant?: "solid" | "outline";
  className?: string;
}) {
  const { t } = useLanguage();

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out";
  const solid =
    "bg-gold text-charcoal hover:bg-gold-bright hover:scale-[1.03] active:scale-[0.98]";
  const outline =
    "border border-gold text-gold bg-transparent hover:bg-gold/15 hover:text-cream active:bg-gold/25 active:text-cream hover:scale-[1.02] active:scale-[0.98]";

  return (
    <a
      href={SITE.freshaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
    >
      {t.nav.book}
      <span aria-hidden>→</span>
    </a>
  );
}
