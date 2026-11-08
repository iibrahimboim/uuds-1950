"use client";

import { motion } from "framer-motion";

const kesimpulanPoints = [
  {
    icon: "✅",
    title: "Capaian Demokrasi Riil",
    desc: "UUDS 1950 membuktikan bahwa Indonesia mampu menjalankan demokrasi yang menjunjung tinggi kebebasan berpendapat, pers bebas tanpa sensor, multipartai yang dinamis, serta penghormatan hak asasi warga negara.",
  },
  {
    icon: "🗳️",
    title: "Pemilu 1955 Sebagai Standar Emas",
    desc: "Penyelenggaraan Pemilu 1955 menjadi tonggak emas pemilu paling demokratis, jujur, dan berintegritas tinggi dalam sejarah bangsa yang diakui oleh dunia internasional.",
  },
  {
    icon: "⚠️",
    title: "Tantangan Instabilitas Kabinet",
    desc: "Sistem multipartai yang tajam dan polarisasi politik di parlemen menyebabkan kabinet mudah dijatuhkan mosi tidak percaya, sehingga program pembangunan jangka panjang sulit terlaksana.",
  },
  {
    icon: "📚",
    title: "Pelajaran Konstitusional Berharga",
    desc: "Pengalaman UUDS 1950 memberikan pelajaran penting bagi pembentukan sistem ketatanegaraan modern Indonesia bahwa kebebasan politik harus diimbangi dengan stabilitas pemerintahan.",
  },
];

export default function Kesimpulan() {
  return (
    <section id="kesimpulan" className="relative px-4 py-20 sm:px-8">
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
            Rangkuman & Refleksi
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#2a221b] sm:text-4xl md:text-5xl">
            Kesimpulan & Refleksi Sejarah
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#4a3b2c] sm:text-lg">
            Menyimpulkan dinamika perjalanan demokrasi parlementer di bawah naungan
            Undang-Undang Dasar Sementara 1950.
          </p>
        </motion.div>

        {/* Kesimpulan Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {kesimpulanPoints.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl border border-[#8c6239]/25 bg-[#f5e6d0]/85 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-[#8c6239]/50 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8c6239]/15 text-2xl">
                  {item.icon}
                </span>
                <h3 className="text-lg font-bold text-[#2a221b]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-base leading-relaxed text-[#3a2f24] sm:text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl border-2 border-[#8c6239]/30 bg-[#8c6239]/10 p-8 text-center shadow-lg"
        >
          <span className="text-4xl">🕊️</span>
          <p className="mx-auto mt-4 max-w-2xl text-lg italic leading-relaxed text-[#2a221b] sm:text-xl">
            &ldquo;Demokrasi adalah proses pembelajaran tanpa akhir. Era UUDS 1950
            menunjukkan komitmen luhur para pendiri bangsa dalam menegakkan hak
            rakyat dan martabat demokrasi di bumi nusantara.&rdquo;
          </p>
          <div className="mx-auto mt-5 h-px w-24 bg-[#8c6239]/40" />
          <p className="mt-3 text-sm font-bold uppercase tracking-wider text-[#8c6239]">
            Masa Demokrasi Parlementer Indonesia (17 Agustus 1950 — 5 Juli 1959)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
