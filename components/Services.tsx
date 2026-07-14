"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLanguage } from "@/lib/LanguageContext";

const ICONS = ["✦", "✂", "◒", "◇", "✎", "◡", "❋", "◈"];

export default function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      const rows = gsap.utils.toArray<HTMLElement>(".service-row");
      rows.forEach((row, i) => {
        const fromLeft = i % 2 === 0;
        const initial = isDesktop
          ? { x: fromLeft ? -70 : 70, y: 20, opacity: 0 }
          : { x: 0, y: 30, opacity: 0 };

        gsap.fromTo(
          row,
          initial,
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: isDesktop ? 0.9 : 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [t]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-cream px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-5xl">
        <span className="eyebrow block text-gold">{t.services.eyebrow}</span>
        <h2 className="mt-4 font-display text-4xl font-700 text-ink md:text-6xl">
          {t.services.title}
        </h2>

        <div className="mt-16 divide-y divide-line border-y border-line">
          {t.services.list.map((s, i) => (
            <div
              key={s.name}
              className="service-row flex flex-col gap-3 py-8 md:flex-row md:items-center md:gap-10"
            >
              <span className="font-display text-3xl text-gold md:w-16 md:text-4xl">
                {ICONS[i % ICONS.length]}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-xl font-700 text-ink md:text-2xl">
                  {s.name}
                </h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-ink/60 md:text-base">
                  {s.desc}
                </p>
              </div>
              <span className="hidden font-display text-sm text-ink/30 md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
