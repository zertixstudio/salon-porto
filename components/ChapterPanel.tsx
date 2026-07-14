"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ChapterPanel({
  index,
  title,
  body,
  image,
  imageAlt,
  reverse = false,
}: {
  index: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".chapter-reveal",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 65%",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="flex h-full w-full items-center bg-charcoal-soft px-6 md:px-10"
    >
      <div
        className={`mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-10 md:grid-cols-12 ${
          reverse ? "" : ""
        }`}
      >
        <div
          className={`md:col-span-6 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <span className="chapter-reveal eyebrow block text-gold">{index}</span>
          <h2 className="chapter-reveal mt-4 font-display text-4xl font-700 leading-tight text-cream md:text-6xl">
            {title}
          </h2>
          <p className="chapter-reveal mt-6 max-w-md text-base leading-relaxed text-cream/65 md:text-lg">
            {body}
          </p>
        </div>
        <div
          className={`chapter-reveal md:col-span-6 ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm md:ml-auto">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
