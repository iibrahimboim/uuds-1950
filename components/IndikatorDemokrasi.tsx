"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ───────── Data ───────── */
const indikators = [
  {
    id: "akuntabilitas",
    title: "1. Akuntabilitas",
    subtitle: "Pertanggungjawaban Langsung ke Parlemen",
    icon: "⚖️",
    content:
      "Tingkat akuntabilitas pemegang jabatan dan politisi pada masa ini sangat tinggi. Kabinet dan para menteri harus mempertanggungjawabkan setiap kebijakan pemerintahannya langsung kepada parlemen (DPR). Jika parlemen menganggap kabinet gagal atau melakukan kesalahan, DPR dapat mengeluarkan mosi tidak percaya yang berakibat jatuhnya kabinet tersebut.",
    highlight: "Mosi Tidak Percaya sebagai kontrol ketat parlemen terhadap jalannya roda pemerintahan.",
    gridSpan: "md:col-span-2",
  },
  {
    id: "rotasi",
    title: "2. Rotasi Kekuasaan",
    subtitle: "7 Kabinet Berganti dalam 9 Tahun",
    icon: "🔄",
    content:
      "Rotasi kekuasaan terjadi sangat intens dan cepat. Tercatat ada 7 pergantian kabinet dalam kurun waktu 9 tahun: Kabinet Natsir (1950–1951), Kabinet Sukiman (1951–1952), Kabinet Wilopo (1952–1953), Kabinet Ali Sastroamidjojo I (1953–1955), Kabinet Burhanuddin Harahap (1955–1956), Kabinet Ali Sastroamidjojo II (1956–1957), dan Kabinet Djuanda (1957–1959).",
    highlight: "Rata-rata masa kerja satu kabinet hanya berkisar 1 hingga 2 tahun.",
    gridSpan: "md:col-span-1",
  },
  {
    id: "rekrutmen",
    title: "3. Pola Rekrutmen Politik",
    subtitle: "Sistem Terbuka & Multipartai",
    icon: "🏛️",
    content:
      "Rekrutmen politik berjalan dengan sistem yang sangat terbuka. Berlakunya sistem multipartai memberikan kebebasan bagi masyarakat untuk mendirikan partai politik. Partai-partai politik ini menjadi instrumen utama dalam rekrutmen para pemimpin politik, baik untuk kursi di parlemen maupun posisi menteri di kabinet.",
    highlight: "Kaderisasi dan keterwakilan ideologi berjalan bebas dan kompetitif.",
    gridSpan: "md:col-span-1",
  },
  {
    id: "pemilu",
    title: "4. Pemilu 1955",
    subtitle: "Pemilihan Umum Paling Demokratis",
    icon: "🗳️",
    content:
      "Masa ini mencatatkan sejarah pelaksanaan Pemilu pertama di Indonesia pada tahun 1955. Pemilu 1955 diakui sebagai salah satu pemilu paling demokratis dalam sejarah Republik Indonesia. Pemilu diadakan dua kali: Tahap 1 (September 1955) untuk memilih anggota DPR, dan Tahap 2 (Desember 1955) untuk memilih anggota Dewan Konstituante. Pemilu ini diikuti oleh puluhan partai politik tanpa kecurangan atau intimidasi aparat.",
    highlight: "Tingkat partisipasi rakyat mencapai lebih dari 90% dengan suasana aman dan tertib.",
    gridSpan: "md:col-span-2",
  },
  {
    id: "hak-dasar",
    title: "5. Pemenuhan Hak-Hak Dasar",
    subtitle: "Kebebasan Berpendapat & Pers Bebas",
    icon: "📜",
    content:
      "Hak-hak dasar warga negara, seperti kebebasan berpendapat, kebebasan berserikat, dan kebebasan pers, terjamin dengan sangat baik. Masyarakat dan pers bebas memberikan kritik keras kepada pemerintah tanpa takut dibredel atau ditangkap. Hal ini sejalan dengan jiwa liberalisme yang mendasari konstitusi UUDS 1950.",
    highlight: "Pers era ini sangat vokal, kritis, dan bebas dari sensor penguasa.",
    gridSpan: "md:col-span-3",
  },
];

/* ───────── Main Component ───────── */
export default function IndikatorDemokrasi() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = indikators.find((i) => i.id === selectedId) ?? null;

  return (
    <section id="indikator" className="relative px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c6239]">
            Arsip Analisis
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#2a221b] sm:text-4xl md:text-5xl">
            5 Indikator Demokrasi Era UUDS 1950
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#4a3b2c] sm:text-lg">
            Klik pada setiap kartu dokumen untuk membuka dokumen arsip lengkap
            mengenai indikator pelaksanaan demokrasi parlementer.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {indikators.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={item.gridSpan}
            >
              <div
                onClick={() => setSelectedId(item.id)}
                data-clickable
                className="group relative h-full cursor-pointer overflow-hidden rounded-xl border border-[#8c6239]/25 bg-[#f5e6d0]/85 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-[#8c6239]/60 hover:shadow-[0_8px_30px_rgba(140,98,57,0.18)]"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8c6239]/15 text-2xl transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2a221b]">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-[#8c6239]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-[#8c6239]/70 transition-colors duration-200 group-hover:text-[#8c6239]">
                    Buka ↗
                  </span>
                </div>

                {/* Content preview */}
                <p className="mt-4 text-base leading-relaxed text-[#3a2f24] line-clamp-3">
                  {item.content}
                </p>

                {/* Highlight tag */}
                <div className="mt-4 rounded-lg bg-[#8c6239]/10 px-3 py-2 text-sm text-[#6b4828] font-medium">
                  📌 {item.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl border-2 border-[#8c6239]/40 bg-[#fbf5eb] p-6 sm:p-8 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#8c6239]/30 text-[#8c6239] hover:bg-[#8c6239]/15"
                data-clickable
                aria-label="Tutup"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedItem.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-[#2a221b]">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#8c6239]">
                    {selectedItem.subtitle}
                  </p>
                </div>
              </div>

              <div className="my-4 h-px w-full bg-[#8c6239]/20" />

              <div className="space-y-4 text-base leading-relaxed text-[#3a2f24] sm:text-lg">
                <p>{selectedItem.content}</p>
                <div className="rounded-xl border border-[#8c6239]/30 bg-[#8c6239]/10 p-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#8c6239]">
                    Kesimpulan Utama:
                  </h4>
                  <p className="mt-1 text-base font-medium text-[#2a221b]">
                    {selectedItem.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
