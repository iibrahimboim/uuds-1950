"use client";

import { motion } from "framer-motion";

const periodes = [
  {
    no: "1",
    title: "UUD 1945 (Masa Revolusi)",
    period: "18 Agustus 1945 – 27 Desember 1949",
    desc: "Konstitusi pertama Indonesia pasca-Proklamasi Kemerdekaan. Diterapkan di tengah perjuangan mempertahankan kemerdekaan dari agresi militer Belanda.",
    icon: "🇮🇩",
    isFocus: false,
  },
  {
    no: "2",
    title: "Konstitusi RIS",
    period: "27 Desember 1949 – 17 Agustus 1950",
    desc: "Diberlakukan saat Indonesia berbentuk Republik Indonesia Serikat hasil dari Konferensi Meja Bundar (KMB). Berlangsung kurang dari satu tahun.",
    icon: "🤝",
    isFocus: false,
  },
  {
    no: "3",
    title: "UUDS 1950",
    period: "17 Agustus 1950 – 5 Juli 1959",
    desc: "Undang-Undang Dasar Sementara 1950. Mengembalikan bentuk NKRI dengan sistem Demokrasi Parlementer, multipartai, dan kebebasan berserikat.",
    icon: "📜",
    isFocus: true,
  },
  {
    no: "4",
    title: "UUD NRI Tahun 1945",
    period: "5 Juli 1959 – 19 Oktober 1999",
    desc: "Diberlakukan kembali melalui Dekrit Presiden 5 Juli 1959 setelah Dewan Konstituante gagal menyusun UUD baru, memulai era Demokrasi Terpimpin hingga Orde Baru.",
    icon: "⚖️",
    isFocus: false,
  },
];

const komponenAnalisis = [
  {
    label: "Akuntabilitas",
    desc: "Pertanggungjawaban kabinet langsung kepada parlemen (DPR).",
  },
  {
    label: "Rotasi Kekuasaan",
    desc: "Pergantian kabinet yang sangat dinamis (7 kali pergantian dalam 9 tahun).",
  },
  {
    label: "Pola Rekrutmen Politik",
    desc: "Sistem multipartai terbuka memberi ruang luas bagi kaderisasi partai.",
  },
  {
    label: "Pemilu",
    desc: "Terselenggaranya Pemilu 1955 untuk DPR dan Konstituante secara demokratis.",
  },
  {
    label: "Pemenuhan Hak-Hak Dasar",
    desc: "Jaminan kebebasan berpendapat, pers bebas tanpa bredel, dan hak berserikat.",
  },
];

export default function PeriodeKonstitusi() {
  return (
    <section id="periode" className="relative px-4 py-20 sm:px-8">
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
            Linimasa Konstitusi
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#2a221b] sm:text-4xl md:text-5xl">
            Pembagian Periode Konstitusi
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#4a3b2c] sm:text-lg">
            Empat fase perkembangan konstitusi Indonesia sejak kemerdekaan, dengan
            UUDS 1950 sebagai tonggak era demokrasi parlementer.
          </p>
        </motion.div>

        {/* Periode Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {periodes.map((item, idx) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-xl border p-6 shadow-md backdrop-blur-sm transition-all duration-300 ${
                item.isFocus
                  ? "border-[#8c6239] bg-[#8c6239]/15 shadow-[0_0_25px_rgba(140,98,57,0.2)] ring-1 ring-[#8c6239]/50"
                  : "border-[#8c6239]/25 bg-[#f5e6d0]/85 hover:border-[#8c6239]/50"
              }`}
            >
              {item.isFocus && (
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-[#8c6239] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-xs">
                    ★ Fokus Kajian
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8c6239]/20 text-2xl">
                  {item.icon}
                </span>
                <div className="flex-1 pr-12">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#8c6239]">
                      Periode {item.no}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2a221b]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#8c6239]">
                    {item.period}
                  </p>
                  <p className="mt-2.5 text-base leading-relaxed text-[#3a2f24]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Box Komponen Analisis (Sesuai Catatan di Foto) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 rounded-2xl border-2 border-[#8c6239]/30 bg-[#f5e6d0]/90 p-6 sm:p-8 shadow-lg backdrop-blur-sm"
        >
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#8c6239]/20 px-3 py-1 text-sm font-bold uppercase tracking-wider text-[#8c6239]">
              Parameter Evaluasi
            </span>
            <h3 className="mt-2 text-2xl font-bold text-[#2a221b]">
              Komponen yang Dianalisis dalam Periode
            </h3>
            <p className="mt-1 text-base text-[#4a3b2c]">
              Lima tolok ukur pelaksanaan demokrasi era UUDS 1950:
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {komponenAnalisis.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                className="flex items-start gap-3 rounded-lg border border-[#8c6239]/20 bg-[#f5e6d0]/70 p-4 transition-colors hover:bg-[#8c6239]/10"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700/20 text-emerald-800 text-sm font-bold">
                  ✓
                </span>
                <div>
                  <h4 className="text-base font-bold text-[#2a221b]">
                    {item.label}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-[#4a3b2c]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
