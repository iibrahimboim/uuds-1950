"use client";

import { motion } from "framer-motion";

export default function PengertianUUDS() {
  return (
    <section id="pengertian" className="relative px-4 py-16 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl rounded-2xl border-2 border-[#8c6239]/30 bg-[#f5e6d0]/95 p-6 shadow-lg backdrop-blur-sm sm:p-10"
      >
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8c6239]">
          Mengenal Konstitusinya
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-[#2a221b] sm:text-4xl">
          Apa itu UUDS 1950?
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#3a2f24] sm:text-xl">
          UUDS 1950 adalah singkatan dari{" "}
          <strong>Undang-Undang Dasar Sementara 1950</strong>, yaitu konstitusi
          yang menjadi dasar hukum Negara Kesatuan Republik Indonesia setelah
          Indonesia kembali dari bentuk negara serikat (RIS).
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#8c6239]/20 bg-white/40 p-5">
            <h3 className="text-lg font-bold text-[#2a221b]">Masa berlaku</h3>
            <p className="mt-2 text-base leading-relaxed text-[#4a3b2c]">
              Berlaku mulai 17 Agustus 1950 hingga Dekrit Presiden 5 Juli 1959.
            </p>
          </div>
          <div className="rounded-xl border border-[#8c6239]/20 bg-white/40 p-5">
            <h3 className="text-lg font-bold text-[#2a221b]">
              Mengapa disebut sementara?
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#4a3b2c]">
              UUDS menjadi dasar negara sementara sambil menunggu
              Konstituante menyusun undang-undang dasar yang tetap.
            </p>
          </div>
        </div>
        <p className="mt-5 text-base leading-relaxed text-[#4a3b2c] sm:text-lg">
          Pada masa ini, Indonesia menjalankan demokrasi parlementer: kabinet
          dipimpin perdana menteri dan bertanggung jawab kepada parlemen,
          sedangkan presiden bertindak sebagai kepala negara.
        </p>
      </motion.div>
    </section>
  );
}
