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

  const active = solid || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 ${
        active ? "bg-cream/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <button
          onClick={() => setMenuOpen((value) => !value)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors ${
            active ? "text-ink" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{menuOpen ? "×" : "☰"}</span>
        </button>

        <button
          onClick={() => {
            (window as any).__lenis?.scrollTo(0);
            setMenuOpen(false);
          }}
          className={`font-display text-lg font-800 tracking-tight transition-colors ${active ? "text-ink" : "text-slate-100"}`}
        >
          {SITE.name}
        </button>

        <div className="flex items-center gap-3">
          <BookNowButton
            className={`hidden lg:inline-flex border-0 bg-transparent shadow-none hover:bg-transparent active:bg-transparent ${
              active ? "text-ink hover:text-gold active:text-gold" : "text-slate-100 hover:text-gold active:text-gold"
            }`}
          />
          <div className="w-10" />
        </div>
      </div>

      {menuOpen ? (
        <div className="px-6 py-4 md:px-10">
          <div className="flex flex-col items-center gap-3 px-4 py-3">
            <button onClick={() => scrollTo("philosophy")} className="w-full text-left text-sm uppercase tracking-[0.3em] text-ink transition-colors hover:text-ink">
              {t.nav.philosophy}
            </button>
            <button onClick={() => scrollTo("services")} className="w-full text-left text-sm uppercase tracking-[0.3em] text-ink transition-colors hover:text-ink">
              {t.nav.services}
            </button>
            <button onClick={() => scrollTo("gallery")} className="w-full text-left text-sm uppercase tracking-[0.3em] text-ink transition-colors hover:text-ink">
              {t.nav.gallery}
            </button>
            <button onClick={() => scrollTo("visit")} className="w-full text-left text-sm uppercase tracking-[0.3em] text-ink transition-colors hover:text-ink">
              {t.nav.visit}
            </button>
            <div className="w-full pt-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
