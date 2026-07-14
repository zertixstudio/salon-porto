"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { SITE } from "@/lib/translations";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="visit" className="bg-charcoal-soft px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <span className="eyebrow block text-gold">{t.footer.visitUs}</span>
          <h3 className="mt-4 font-display text-2xl font-700 text-cream md:text-3xl">
            {SITE.name}
          </h3>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block max-w-xs text-sm leading-relaxed text-cream/60 underline decoration-cream/20 underline-offset-4 hover:text-cream"
          >
            {SITE.address}
          </a>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="mt-2 block text-sm text-cream/60 hover:text-cream"
          >
            {SITE.phone}
          </a>

          <div className="mt-8">
            <span className="eyebrow block text-cream/40">{t.footer.hoursTitle}</span>
            <dl className="mt-3 space-y-1 text-sm text-cream/70">
              {t.footer.hours.map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-6 max-w-xs">
                  <dt>{day}</dt>
                  <dd>{hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="h-64 w-full overflow-hidden rounded-sm border border-cream/10 md:h-full">
          <iframe
            title="G Beauty Concept location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              SITE.address
            )}&output=embed`}
            className="h-full w-full grayscale invert-[0.92] contrast-[1.1]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row">
        <span>
          © {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
        </span>
        <span>Porto, Portugal</span>
      </div>
    </footer>
  );
}
