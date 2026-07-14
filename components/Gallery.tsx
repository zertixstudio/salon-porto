"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLanguage } from "@/lib/LanguageContext";
import { useGyroscope } from "@/hooks/useGyroscope";

const IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Salon interior, natural light", speed: 0.15, span: "md:col-span-7" },
  { src: "/images/gallery-2.jpg", alt: "Manicure in progress", speed: 0.3, span: "md:col-span-5" },
  { src: "/images/gallery-3.jpg", alt: "Nail polish shades", speed: 0.25, span: "md:col-span-5" },
  { src: "/images/gallery-4.jpg", alt: "Finished nail art detail", speed: 0.1, span: "md:col-span-7" },
];

export default function Gallery() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  useGyroscope(sectionRef, ".gallery-tilt", 10);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gallery-item").forEach((item) => {
        const speed = parseFloat(item.dataset.speed || "0.2");
        gsap.fromTo(
          item.querySelector("img"),
          { yPercent: -speed * 60 },
          {
            yPercent: speed * 60,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 88%" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative overflow-hidden bg-cream-dim px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow block text-gold">{t.gallery.eyebrow}</span>
        <h2 className="mt-4 font-display text-4xl font-700 text-ink md:text-6xl">
          {t.gallery.title}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              data-speed={img.speed}
              className={`gallery-item gallery-tilt relative aspect-[4/3] overflow-hidden rounded-sm ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 h-[130%] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
