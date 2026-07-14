"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/lib/LanguageContext";
import BookNowButton from "./BookNowButton";

export default function Hero() {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.set(".hero-reveal", { opacity: 0 })
        .fromTo(
          ".hero-video-wrap",
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4 }
        )
        .to(".hero-reveal", { opacity: 1, duration: 0.01 }, "-=0.9")
        .fromTo(
          ".hero-line",
          { y: "110%" },
          { y: "0%", duration: 1.1, stagger: 0.08 },
          "-=1.0"
        )
        .fromTo(
          ".hero-photo",
          { y: 60, opacity: 0, scale: 1.05 },
          { y: 0, opacity: 1, scale: 1, duration: 1.1 },
          "-=0.8"
        )
        .fromTo(
          ".hero-sub",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative h-full w-full bg-charcoal">
      {/* Full-width video */}
      <div className="hero-video-wrap absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-treatment.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/50" />
      </div>

      {/* Asymmetrical layered content */}
      <div className="hero-reveal relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:justify-center md:px-10 md:pb-0">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7 lg:col-span-6">
            <p className="hero-line overflow-hidden">
              <span className="eyebrow block text-gold">{t.hero.eyebrow}</span>
            </p>
            <h1 className="mt-4 font-display text-[13vw] font-800 leading-[0.95] text-cream md:text-[6.2vw]">
              <span className="block overflow-hidden">
                <span className="hero-line block">{t.hero.title1}</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line block">{t.hero.title2}</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line block text-gold">{t.hero.title3}</span>
              </span>
            </h1>
            <p className="hero-sub mt-6 max-w-md text-base leading-relaxed text-cream/70 md:text-lg">
              {t.hero.sub}
            </p>
            <div className="hero-cta mt-8">
              <BookNowButton />
            </div>
          </div>

          {/* Overlapping floating photo, offset to break the grid */}
          <div className="hero-photo relative hidden md:col-span-5 md:block lg:col-span-6">
            <div className="relative ml-auto aspect-[3/4] w-[70%] -translate-y-10 overflow-hidden rounded-sm border border-cream/10 shadow-2xl">
              <img
                src="/images/hero-detail.jpg"
                alt="Close-up of a manicured hand"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 bottom-0 aspect-square w-[38%] translate-y-1/4 overflow-hidden rounded-sm border-4 border-cream/90 shadow-xl">
              <img
                src="/images/hero-detail-2.jpg"
                alt="Nail art detail"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-reveal absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 md:flex">
        <span className="eyebrow">{t.hero.scroll}</span>
        <span className="h-10 w-px animate-pulse bg-cream/40" />
      </div>
    </div>
  );
}
