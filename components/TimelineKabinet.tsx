"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ───────── Data 7 Kabinet ───────── */
const kabinets = [
  {
    no: "1",
    name: "Kabinet Natsir",
    period: "September 1950 – Maret 1951",
    perdanaMenteri: "Mohammad Natsir (Masyumi)",
    desc: "Kabinet koalisi pertama era UUDS 1950. Berfokus pada konsolidasi integrasi NKRI pasca-RIS, reorganisasi angkatan perang, serta peletakan fondasi ekonomi nasional (Sumitro Plan).",
    jatuh: "Jatuh akibat mosi Hadikusumo dari PNI terkait pembentukan DPRD.",
  },
  {
    no: "2",
    name: "Kabinet Sukiman",
    period: "April 1951 – Februari 1952",
    perdanaMenteri: "Sukiman Wirjosandjojo (Masyumi)",
    desc: "Koalisi Masyumi-PNI. Menjalankan program nasionalisasi De Javasche Bank menjadi Bank Indonesia dan memperluas hubungan diplomatik luar negeri.",
    jatuh: "Jatuh akibat penandatanganan bantuan militer Mutual Security Act (MSA) dengan Amerika Serikat yang dinilai melanggar politik bebas-aktif.",
  },
  {
    no: "3",
    name: "Kabinet Wilopo",
    period: "April 1952 – Juni 1953",
    perdanaMenteri: "Wilopo (PNI)",
    desc: "Dikenal sebagai Zaken Kabinet (kabinet ahli). Mempersiapkan undang-undang pemilu dan berusaha menghemat anggaran belanja negara di tengah inflasi.",
    jatuh: "Jatuh pasca Peristiwa Tanjung Morawa (sengketa tanah perkebunan di Sumatera Timur) dan Peristiwa 17 Oktober 1952.",
  },
  {
    no: "4",
    name: "Kabinet Ali Sastroamidjojo I",
    period: "Juli 1953 – Juli 1955",
    perdanaMenteri: "Ali Sastroamidjojo (PNI)",
    desc: "Mencatatkan prestasi monumental diplomasi internasional dengan keberhasilan menyelenggarakan Konferensi Asia-Afrika (KAA) di Bandung pada tahun 1955.",
    jatuh: "Jatuh akibat perselisihan internal dengan pimpinan Angkatan Darat mengenai pengangkatan Kepala Staf AD (KSAD).",
  },
  {
    no: "5",
    name: "Kabinet Burhanuddin Harahap",
    period: "Agustus 1955 – Maret 1956",
    perdanaMenteri: "Burhanuddin Harahap (Masyumi)",
    desc: "Berhasil menyelenggarakan Pemilihan Umum pertama tahun 1955 secara sangat sukses, tertib, dan demokratis untuk memilih anggota DPR dan Konstituante.",
    jatuh: "Mengundurkan diri secara sukarela setelah tugas utamanya menyelenggarakan Pemilu 1955 selesai.",
  },
  {
    no: "6",
    name: "Kabinet Ali Sastroamidjojo II",
    period: "Maret 1956 – Maret 1957",
    perdanaMenteri: "Ali Sastroamidjojo (PNI)",
    desc: "Kabinet pertama yang terbentuk berdasarkan hasil Pemilu 1955 (koalisi PNI, Masyumi, dan NU). Mengembangkan Rencana Pembangunan Lima Tahun (RPLT).",
    jatuh: "Jatuh akibat gejolak daerah (tuntutan otonomi, Dewan Banteng, PRRI/Permesta) dan mundurnya menteri-menteri dari Masyumi.",
  },
  {
    no: "7",
    name: "Kabinet Djuanda (Kabinet Karya)",
    period: "April 1957 – Juli 1959",
    perdanaMenteri: "Ir. Djuanda Kartawidjaja (Non-partai)",
    desc: "Zaken Kabinet ekstra-parlementer yang dipimpin tokoh teknokrat. Menghasilkan Deklarasi Djuanda (13 Desember 1957) yang menetapkan batas laut teritorial 12 mil laut Indonesia.",
    jatuh: "Berakhir seiring dikeluarkannya Dekrit Presiden 5 Juli 1959 yang mengembalikan UUD 1945.",
  },
];

export default function TimelineKabinet() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollBy = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="kabinet" className="relative px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6239]">
            Rotasi Kekuasaan
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#2a221b] sm:text-4xl md:text-5xl">
            7 Kabinet dalam 9 Tahun
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#5a4a3a]">
            Dinamika rotasi pemerintahan era UUDS 1950. Geser kartu atau gunakan
            tombol navigasi untuk menelusuri tiap kabinet.
          </p>
        </motion.div>

        {/* Historical Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border-2 border-[#8c6239]/25 shadow-xl"
        >
          <Image
            src="/assets/kabinet.jpg"
            alt="Sidang Kabinet Era UUDS 1950"
            width={960}
            height={420}
            className="h-auto w-full object-cover sepia-[0.25]"
            priority
          />
          <div className="bg-[#f5e6d0]/90 px-4 py-2 text-center text-xs italic text-[#5a4a3a] border-t border-[#8c6239]/15">
            Suasana sidang kabinet pemerintahan masa demokrasi parlementer (1950–1959)
          </div>
        </motion.div>

        {/* Scroll Controls */}
        <div className="mt-8 flex items-center justify-between px-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8c6239]">
            Linimasa Kabinet (1950 – 1959)
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-340)}
              disabled={!canScrollLeft}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8c6239]/30 bg-[#f5e6d0]/80 text-[#8c6239] transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#8c6239] hover:text-white"
              data-clickable
              aria-label="Geser ke kiri"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy(340)}
              disabled={!canScrollRight}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8c6239]/30 bg-[#f5e6d0]/80 text-[#8c6239] transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#8c6239] hover:text-white"
              data-clickable
              aria-label="Geser ke kanan"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Timeline Cards */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="mt-4 flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {kabinets.map((kab) => (
            <div
              key={kab.no}
              className="w-[320px] sm:w-[360px] shrink-0 rounded-xl border border-[#8c6239]/25 bg-[#f5e6d0]/90 p-5 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-[#8c6239]/60 hover:shadow-xl"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8c6239] text-xs font-bold text-white">
                  {kab.no}
                </span>
                <span className="rounded-md bg-[#8c6239]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#8c6239]">
                  {kab.period}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-bold text-[#2a221b]">
                {kab.name}
              </h3>
              <p className="text-xs font-semibold text-[#8c6239]">
                PM: {kab.perdanaMenteri}
              </p>

              <div className="my-3 h-px w-full bg-[#8c6239]/15" />

              <p className="text-xs leading-relaxed text-[#4a3b2c]">
                {kab.desc}
              </p>

              <div className="mt-3 rounded-lg bg-amber-900/10 p-2.5 text-[11px] text-[#5a3a24]">
                <span className="font-bold">Faktor Kejatuhan: </span>
                {kab.jatuh}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
