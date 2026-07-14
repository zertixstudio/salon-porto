"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import BookNowButton from "./BookNowButton";
import { SITE } from "@/lib/translations";

export default function Nav() {
  const { t } = useLanguage();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    const lenis = (window as any).__lenis;
    if (el && lenis) lenis.scrollTo(el, { offset: 0 });
    else el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 ${
        solid ? "bg-cream/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <button
          onClick={() => {
            (window as any).__lenis?.scrollTo(0);
            setMenuOpen(false);
          }}
          className="font-display text-lg font-800 tracking-tight text-ink"
        >
          {SITE.name}
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          <button onClick={() => scrollTo("philosophy")} className="eyebrow text-ink/70 hover:text-ink transition-colors">
            {t.nav.philosophy}
          </button>
          <button onClick={() => scrollTo("services")} className="eyebrow text-ink/70 hover:text-ink transition-colors">
            {t.nav.services}
          </button>
          <button onClick={() => scrollTo("gallery")} className="eyebrow text-ink/70 hover:text-ink transition-colors">
            {t.nav.gallery}
          </button>
          <button onClick={() => scrollTo("visit")} className="eyebrow text-ink/70 hover:text-ink transition-colors">
            {t.nav.visit}
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <BookNowButton className="hidden lg:inline-flex" />
          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-label="Toggle mobile menu"
          >
            <span className="text-2xl">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-line bg-cream/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <button onClick={() => scrollTo("philosophy")} className="text-left eyebrow text-ink/80 hover:text-ink transition-colors">
              {t.nav.philosophy}
            </button>
            <button onClick={() => scrollTo("services")} className="text-left eyebrow text-ink/80 hover:text-ink transition-colors">
              {t.nav.services}
            </button>
            <button onClick={() => scrollTo("gallery")} className="text-left eyebrow text-ink/80 hover:text-ink transition-colors">
              {t.nav.gallery}
            </button>
            <button onClick={() => scrollTo("visit")} className="text-left eyebrow text-ink/80 hover:text-ink transition-colors">
              {t.nav.visit}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
