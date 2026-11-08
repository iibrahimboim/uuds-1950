"use client";

import { motion } from "framer-motion";

const latarBelakangData = [
  {
    icon: "📋",
    title: "Dari RIS ke NKRI",
    desc: "Setelah penyerahan kedaulatan dari Belanda pada 27 Desember 1949, Indonesia berbentuk Republik Indonesia Serikat (RIS) dengan Konstitusi RIS 1949. Namun, rakyat di berbagai negara bagian menghendaki kembali ke bentuk negara kesatuan. Satu per satu negara bagian menggabungkan diri hingga akhirnya RIS dibubarkan.",
  },
  {
    icon: "📜",
    title: "Lahirnya UUDS 1950",
    desc: "Pada 17 Agustus 1950, Indonesia resmi kembali menjadi Negara Kesatuan Republik Indonesia dengan berlakunya Undang-Undang Dasar Sementara (UUDS) 1950. UUDS ini bersifat sementara sambil menunggu konstitusi tetap yang akan disusun oleh Dewan Konstituante hasil pemilu.",
  },
  {
    icon: "🏛️",
    title: "Sistem Demokrasi Parlementer",
    desc: "UUDS 1950 menerapkan sistem pemerintahan parlementer (liberal). Presiden bertindak sebagai kepala negara yang kedudukannya tidak dapat diganggu gugat, sedangkan kepala pemerintahan dipegang oleh Perdana Menteri bersama kabinet yang bertanggung jawab kepada parlemen (DPR).",
  },
  {
    icon: "⚡",
    title: "Dekrit Presiden 5 Juli 1959",
    desc: "Perdebatan berkepanjangan di Dewan Konstituante dan instabilitas politik akibat sering bergantinya kabinet mendorong Presiden Soekarno mengeluarkan Dekrit Presiden 5 Juli 1959. Dekrit ini membubarkan Konstituante dan menyatakan berlakunya kembali UUD 1945, mengakhiri era UUDS 1950.",
  },
];

export default function LatarBelakang() {
  return (
    <section id="latar-belakang" className="relative px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6239]">
            Konteks Sejarah
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#2a221b] sm:text-4xl md:text-5xl">
            Latar Belakang UUDS 1950
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#5a4a3a]">
            Perjalanan peralihan dari negara serikat hasil KMB kembali menuju
            Negara Kesatuan Republik Indonesia dengan landasan demokrasi parlementer.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {latarBelakangData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl border border-[#8c6239]/25 bg-[#f5e6d0]/85 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-[#8c6239]/50 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8c6239]/15 text-2xl">
                  {item.icon}
                </span>
                <h3 className="text-lg font-bold text-[#2a221b]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#4a3b2c]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Historic Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl rounded-xl border-l-4 border-[#8c6239] bg-[#8c6239]/10 p-6 shadow-sm"
        >
          <p className="text-base italic leading-relaxed text-[#2a221b]">
            &ldquo;Meskipun sering menghadapi jatuh-bangunnya kabinet, era UUDS 1950
            mencerminkan masa di mana hak asasi manusia, kebebasan pers, dan
            kedaulatan rakyat melalui pemilu ditegakkan paling nyata dalam
            sejarah bangsa Indonesia.&rdquo;
          </p>
          <p className="mt-2 text-right text-xs font-semibold uppercase tracking-wider text-[#8c6239]">
            — Catatan Kajian Hukum Tata Negara
          </p>
        </motion.div>
      </div>
    </section>
  );
}
