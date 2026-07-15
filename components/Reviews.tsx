"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const REVIEWS = [
  {
    name: "Victoria",
    url: "https://www.google.com/maps/contrib/106413832729658479201/reviews?hl=en-GB",
    date: "2 years ago",
    text: "É sempre uma alegria. Mais do que uma profissional, também é uma amiga. Três anos com ela e todas as vezes saiu de lá feliz, com a minha autoestima no auge porque ela tratou de o fazer de uma melhor forma. Ela supera quaisquer expectativas que eu tenha criadas quando chego ao instituto. Amo!",
    meta: "1 review · 11 photos",
  },
  {
    name: "Fatima",
    url: "https://www.google.com/maps/contrib/100896751874526003102/reviews?hl=en-GB",
    date: "2 years ago",
    text: "Without a doubt, an excellent professional. An excellent friend, a wonderful and welcoming environment, contagious joy. Thank you, sweetie, a thousand kisses 😘",
    meta: "Google review",
  },
  {
    name: "Zaki",
    url: "https://www.google.com/maps/contrib/118361913304090879692/reviews?hl=en-GB",
    date: "2 years ago",
    text: "Kindness, professionalism, friendship, love, and so much quality! I love it 🥰 And the best nails ever 😍",
    meta: "Google review",
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".review-card").forEach((card, index) => {
        const offsetX = index % 2 === 0 ? -50 : 50;
        gsap.fromTo(
          card,
          { x: offsetX, y: 30, opacity: 0, scale: 0.96 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="relative bg-cream px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow block text-gold">What clients say</span>
        <h2 className="mt-4 font-display text-4xl font-700 text-ink md:text-6xl">
          Reviews that speak for themselves
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="review-card rounded-sm border border-line bg-cream-dim p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-lg font-700 text-ink hover:text-gold"
                  >
                    {review.name}
                  </a>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-ink/40">
                    {review.meta}
                  </p>
                </div>
                <span className="text-sm text-ink/60">{review.date}</span>
              </div>

              <p className="text-sm leading-relaxed text-ink/80">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
