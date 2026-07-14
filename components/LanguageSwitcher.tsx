"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { locales } from "@/lib/translations";

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`flex items-center gap-1 rounded-full border px-1 py-1 text-xs font-semibold ${
        dark ? "border-cream/25" : "border-ink/15"
      }`}
    >
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded-full px-2.5 py-1 transition-colors duration-200 ${
            locale === code
              ? "bg-gold text-charcoal"
              : dark
              ? "text-cream/60 hover:text-cream"
              : "text-ink/50 hover:text-ink"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
