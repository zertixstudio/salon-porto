"use client";

import { useLanguage } from "@/lib/LanguageContext";
import ChapterPanel from "./ChapterPanel";

export function ChapterOne() {
  const { t } = useLanguage();
  return (
    <div id="philosophy" className="h-full">
      <ChapterPanel
        index={t.chapters.one.index}
        title={t.chapters.one.title}
        body={t.chapters.one.body}
        image="/images/chapter-1.jpg"
        imageAlt="Nail technician at work"
      />
    </div>
  );
}

export function ChapterTwo() {
  const { t } = useLanguage();
  return (
    <ChapterPanel
      index={t.chapters.two.index}
      title={t.chapters.two.title}
      body={t.chapters.two.body}
      image="/images/chapter-2.jpg"
      imageAlt="Close-up of finished manicure"
      reverse
    />
  );
}
