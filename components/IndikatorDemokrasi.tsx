"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ───────── Data ───────── */
const indikators = [
  {
    id: "akuntabilitas",
    title: "Akuntabilitas",
    subtitle: "Pertanggungjawaban",
    icon: "⚖️",
    content:
      "Tingkat akuntabilitas pemegang jabatan dan politisi pada masa ini sangat tinggi. Kabinet dan para menteri harus mempertanggungjawabkan setiap kebijakan pemerintahannya langsung kepada parlemen (DPR). Jika parlemen menganggap kabinet gagal atau melakukan kesalahan, DPR dapat mengeluarkan mosi tidak percaya yang berakibat jatuhnya kabinet tersebut.",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: "rotasi",
    title: "Rotasi Kekuasaan",
    subtitle: "Pergantian Cepat",
    icon: "🔄",
    content:
      "Rotasi kekuasaan terjadi sangat intens dan cepat. Tercatat ada 7 pergantian kabinet dalam kurun waktu 9 tahun: Kabinet Natsir (1950–1951), Kabinet Sukiman (1951–1952), Kabinet Wilopo (1952–1953), Kabinet Ali Sastroamidjojo I (1953–1955), Kabinet Burhanuddin Harahap (1955–1956), Kabinet Ali Sastroamidjojo II (1956–1957), dan Kabinet Djuanda (1957–1959).",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "rekrutmen",
    title: "Rekrutmen Politik",
    subtitle: "Sistem Terbuka",
    icon: "🏛️",
    content:
      "Rekrutmen politik berjalan dengan sistem yang sangat terbuka. Berlakunya sistem multipartai memberikan kebebasan bagi masyarakat untuk mendirikan partai politik. Partai-partai politik ini menjadi instrumen utama dalam rekrutmen para pemimpin politik, baik untuk kursi di parlemen maupun posisi menteri di kabinet.",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "pemilu",
    title: "Pemilu",
    subtitle: "Pemilihan Umum 1955",
    icon: "🗳️",
    content:
      "Masa ini mencatatkan sejarah pelaksanaan Pemilu pertama di Indonesia pada tahun 1955. Pemilu 1955 diakui sebagai salah satu pemilu paling demokratis di Indonesia. Pemilu diadakan dua kali: Tahap 1 (September 1955) untuk memilih anggota DPR, dan Tahap 2 (Desember 1955) untuk memilih anggota Dewan Konstituante. Pemilu ini diikuti oleh puluhan partai politik tanpa adanya paksaan atau kecurangan yang masif.",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "hak-dasar",
    title: "Hak-Hak Dasar",
    subtitle: "Kebebasan Terjamin",
    icon: "📜",
    content:
      "Hak-hak dasar warga negara, seperti kebebasan berpendapat, kebebasan berserikat, dan kebebasan pers, terjamin dengan sangat baik. Masyarakat dan pers bebas memberikan kritik keras kepada pemerintah tanpa takut dibredel atau ditangkap. Hal ini sejalan dengan jiwa liberalisme yang mendasari konstitusi UUDS 1950.",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

/* ───────── 3D Tilt Card ───────── */
function TiltCard({
  item,
  onSelect,
}: {
  item: (typeof indikators)[0];
  onSelect: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  };

  return (
    <motion.div
      layoutId={`card-${item.id}`}
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      data-clickable
      className={`group relative cursor-pointer overflow-hidden rounded-xl border border-[#8c6239]/20 bg-[#f5e6d0]/70 p-6 shadow-md backdrop-blur-sm transition-[box-shadow] duration-300 hover:shadow-[0_0_30px_rgba(140,98,57,0.25)] ${item.gridClass}`}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.15s ease-out, box-shadow 0.3s" }}
    >
      {/* Lamp glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(140,98,57,0.12)_0%,transparent_70%)]" />

      <motion.div layoutId={`icon-${item.id}`}>
        <span className="text-3xl">{item.icon}</span>
      </motion.div>
      <motion.h3
        layoutId={`title-${item.id}`}
        className="mt-3 text-xl font-bold text-[#2a221b]"
      >
        {item.title}
      </motion.h3>
      <motion.p
        layoutId={`subtitle-${item.id}`}
        className="mt-1 text-sm text-[#8c6239]"
      >
        {item.subtitle}
      </motion.p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#5a4a3a]/80">
        {item.content}
      </p>

      {/* Corner indicator */}
      <div className="absolute bottom-3 right-3 text-xs text-[#8c6239]/40 transition-colors group-hover:text-[#8c6239]">
        Klik untuk membuka ▸
      </div>
    </motion.div>
  );
}

/* ───────── Expanded Card Overlay ───────── */
function ExpandedCard({
  item,
  onClose,
}: {
  item: (typeof indikators)[0];
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          layoutId={`card-${item.id}`}
          className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#8c6239]/30 bg-[#f5e6d0]/95 p-8 shadow-2xl backdrop-blur-md sm:p-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#8c6239]/20 text-[#8c6239] transition-colors hover:bg-[#8c6239]/10"
            data-clickable
          >
            <X size={16} />
          </button>

          <motion.div layoutId={`icon-${item.id}`}>
            <span className="text-5xl">{item.icon}</span>
          </motion.div>

          <motion.h3
            layoutId={`title-${item.id}`}
            className="mt-4 text-3xl font-bold text-[#2a221b]"
          >
            {item.title}
          </motion.h3>

          <motion.p
            layoutId={`subtitle-${item.id}`}
            className="mt-1 text-base text-[#8c6239]"
          >
            {item.subtitle}
          </motion.p>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-[#8c6239]/20" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base leading-relaxed text-[#3a2f24]"
          >
            {item.content}
          </motion.p>

          {/* Decorative stamp */}
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 0.15, rotate: -12 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -right-6 text-[120px] leading-none select-none"
          >
            {item.icon}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

/* ───────── Main Component ───────── */
export default function IndikatorDemokrasi() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedItem = indikators.find((i) => i.id === selected) ?? null;

  return (
    <section className="relative px-4 py-24 sm:px-8">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#8c6239]">
          Arsip Rahasia
        </p>
        <h2 className="mt-2 text-4xl font-bold text-[#2a221b] sm:text-5xl">
          5 Indikator Demokrasi
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#5a4a3a]/80">
          Klik salah satu peta arsip di bawah untuk membuka dokumen rahasia
          mengenai indikator demokrasi pada era UUDS 1950.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3">
        {indikators.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <TiltCard item={item} onSelect={() => setSelected(item.id)} />
          </motion.div>
        ))}
      </div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {selectedItem && (
          <ExpandedCard
            key={selectedItem.id}
            item={selectedItem}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
