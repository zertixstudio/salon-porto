"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

/**
 * StackPanel: a full-height panel that pins itself to the viewport via
 * position: sticky, and is visually "covered" by the next panel scrolling
 * up over it. As the next panel arrives, this panel gently scales down and
 * dims, so the transition feels like one page settling under another.
 */
export default function StackPanel({
  children,
  zIndex,
  isLast = false,
  className = "",
}: {
  children: React.ReactNode;
  zIndex: number;
  isLast?: boolean;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isLast || !wrapRef.current || !innerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { scale: 1, filter: "brightness(1)" },
        {
          scale: 0.92,
          filter: "brightness(0.55)",
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, [isLast]);

  return (
    <section
      ref={wrapRef}
      className={`sticky top-0 h-screen w-full overflow-hidden ${className}`}
      style={{ zIndex }}
    >
      <div ref={innerRef} className="h-full w-full pin-wrap">
        {children}
      </div>
    </section>
  );
}
