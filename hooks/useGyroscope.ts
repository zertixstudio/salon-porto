"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Applies a subtle parallax tilt to elements matching `selector` inside
 * `containerRef`, driven by the device orientation on mobile (gyroscope)
 * and by mouse position on desktop. Respects prefers-reduced-motion.
 */
export function useGyroscope(
  containerRef: React.RefObject<HTMLElement>,
  selector: string,
  strength = 14
) {
  const permissionRequested = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const container = containerRef.current;
    if (!container) return;

    const els = Array.from(container.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;

    const applyTilt = (xNorm: number, yNorm: number) => {
      els.forEach((el, i) => {
        const depth = 1 + (i % 3) * 0.6;
        gsap.to(el, {
          x: xNorm * strength * depth,
          y: yNorm * strength * depth,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
      applyTilt(xNorm, yNorm);
    };

    const onOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma ?? 0; // left-right tilt, -90..90
      const beta = e.beta ?? 0; // front-back tilt, -180..180
      const xNorm = Math.max(-1, Math.min(1, gamma / 30));
      const yNorm = Math.max(-1, Math.min(1, (beta - 40) / 30));
      applyTilt(xNorm, yNorm);
    };

    const isTouch = "ontouchstart" in window;

    if (isTouch && typeof (DeviceOrientationEvent as any).requestPermission === "function") {
      // iOS 13+: request permission on first user gesture
      const request = () => {
        if (permissionRequested.current) return;
        permissionRequested.current = true;
        (DeviceOrientationEvent as any)
          .requestPermission()
          .then((state: string) => {
            if (state === "granted") {
              window.addEventListener("deviceorientation", onOrientation);
            }
          })
          .catch(() => {});
        window.removeEventListener("touchstart", request);
      };
      window.addEventListener("touchstart", request, { once: true });
    } else if (isTouch) {
      window.addEventListener("deviceorientation", onOrientation);
    } else {
      container.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      window.removeEventListener("deviceorientation", onOrientation);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, [containerRef, selector, strength]);
}
