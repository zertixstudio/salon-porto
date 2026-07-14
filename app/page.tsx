import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StackPanel from "@/components/StackPanel";
import { ChapterOne, ChapterTwo } from "@/components/Chapters";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />

      {/* Sticky stacking sequence: Hero -> Chapter I -> Chapter II */}
      <div className="relative">
        <StackPanel zIndex={10}>
          <Hero />
        </StackPanel>

        <StackPanel zIndex={20}>
          <ChapterOne />
        </StackPanel>

        <StackPanel zIndex={30} isLast>
          <ChapterTwo />
        </StackPanel>
      </div>

      {/* Normal scroll flow */}
      <div className="relative z-40 bg-cream">
        <Services />
        <Gallery />
        <Booking />
        <Footer />
      </div>
    </main>
  );
}
