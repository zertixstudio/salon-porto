"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLanguage } from "@/lib/LanguageContext";
import BookNowButton from "./BookNowButton";

export default function Booking() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".booking-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-charcoal px-6 py-28 text-center md:px-10 md:py-40">
      <span className="booking-reveal eyebrow block text-gold">{t.booking.eyebrow}</span>
      <h2 className="booking-reveal mx-auto mt-4 max-w-2xl font-display text-5xl font-800 leading-tight text-cream md:text-7xl">
        {t.booking.title}
      </h2>
      <p className="booking-reveal mx-auto mt-6 max-w-md text-base leading-relaxed text-cream/60 md:text-lg">
        {t.booking.body}
      </p>
      <div className="booking-reveal mt-10">
        <BookNowButton />
      </div>
    </section>
  );
}
