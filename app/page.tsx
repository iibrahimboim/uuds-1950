import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LatarBelakang from "@/components/LatarBelakang";
import PeriodeKonstitusi from "@/components/PeriodeKonstitusi";
import IndikatorDemokrasi from "@/components/IndikatorDemokrasi";
import TimelineKabinet from "@/components/TimelineKabinet";
import Kesimpulan from "@/components/Kesimpulan";

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="beranda">
        <HeroSection />
      </div>

      <LatarBelakang />
      <PeriodeKonstitusi />
      <IndikatorDemokrasi />
      <TimelineKabinet />
      <Kesimpulan />

      {/* Footer */}
      <footer className="border-t border-[#8c6239]/10 px-4 py-12 text-center">
        <p className="text-sm text-[#8c6239]/50">
          Arsip Interaktif UUDS 1950 — Dibuat untuk memahami jejak demokrasi
          Indonesia
        </p>
        <p className="mt-1 text-xs text-[#8c6239]/30">
          © 2024 · Proyek Pembelajaran Sejarah
        </p>
      </footer>
    </>
  );
}
