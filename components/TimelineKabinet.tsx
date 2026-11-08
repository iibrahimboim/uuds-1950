"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";

/* ───────── Data 7 Kabinet ───────── */
const kabinets = [
  {
    name: "Kabinet Natsir",
    period: "1950 – 1951",
    desc: "Kabinet pertama era UUDS 1950. Dipimpin oleh Mohammad Natsir dari Masyumi. Fokus pada konsolidasi negara kesatuan pasca-RIS.",
  },
  {
    name: "Kabinet Sukiman",
    period: "1951 – 1952",
    desc: "Dipimpin Sukiman Wirjosandjojo. Menjalin hubungan erat dengan AS melalui penandatanganan Mutual Security Act, memicu kontroversi.",
  },
  {
    name: "Kabinet Wilopo",
    period: "1952 – 1953",
    desc: "Dipimpin Wilopo dari PNI. Berupaya memperbaiki ekonomi dan menghadapi peristiwa 17 Oktober 1952 terkait parlemen.",
  },
  {
    name: "Kabinet Ali I",
    period: "1953 – 1955",
    desc: "Kabinet Ali Sastroamidjojo I. Berhasil menyelenggarakan Konferensi Asia-Afrika (KAA) di Bandung tahun 1955.",
  },
  {
    name: "Kabinet Burhanuddin",
    period: "1955 – 1956",
    desc: "Dipimpin Burhanuddin Harahap. Berhasil menyelenggarakan Pemilu 1955 yang diakui sebagai pemilu paling demokratis.",
  },
  {
    name: "Kabinet Ali II",
    period: "1956 – 1957",
    desc: "Kabinet Ali Sastroamidjojo II. Menghadapi gejolak daerah dan tuntutan otonomi yang semakin kuat.",
  },
  {
    name: "Kabinet Djuanda",
    period: "1957 – 1959",
    desc: "Kabinet terakhir era liberal. Dikenal sebagai Kabinet Karya (Zaken Kabinet). Menghasilkan Deklarasi Djuanda tentang wilayah perairan.",
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 20;
const TOTAL_WIDTH =
  kabinets.length * CARD_WIDTH + (kabinets.length - 1) * CARD_GAP;

/* ───────── Progress bar sub-component ───────── */
function ProgressBar({ progress }: { progress: MotionValue<number> }) {
  const width = useTransform(progress, (v: number) => `${Math.max(5, v)}%`);
  return (
    <div className="mx-auto mt-10 max-w-xl">
      <div className="h-1 w-full overflow-hidden rounded-full bg-[#8c6239]/10">
        <motion.div
          className="h-full rounded-full bg-[#8c6239]/60"
          style={{ width }}
        />
      </div>
      <p className="mt-2 text-center text-xs text-[#8c6239]/50">
        ◀ Geser untuk menjelajah ▶
      </p>
    </div>
  );
}

/* ───────── Main Component ───────── */
export default function TimelineKabinet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(320);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 40, mass: 0.8 });

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxDrag = Math.max(0, TOTAL_WIDTH - containerWidth);
  const progress = useTransform(springX, [0, -maxDrag], [0, 100]);

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-8">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#8c6239]">
          Rotasi Kekuasaan
        </p>
        <h2 className="mt-2 text-4xl font-bold text-[#2a221b] sm:text-5xl">
          7 Kabinet dalam 9 Tahun
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#5a4a3a]/80">
          Geser timeline ke kiri untuk menelusuri pergantian kabinet yang cepat
          pada era demokrasi parlementer.
        </p>
      </motion.div>

      {/* Kabinet image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-[#8c6239]/20 shadow-lg"
      >
        <Image
          src="/assets/kabinet.jpg"
          alt="Kabinet era UUDS 1950"
          width={960}
          height={400}
          className="h-auto w-full object-cover sepia-[0.3]"
          priority
        />
      </motion.div>

      {/* Progress bar */}
      <ProgressBar progress={progress} />

      {/* Draggable timeline */}
      <div
        ref={containerRef}
        className="relative mx-auto mt-6 max-w-5xl overflow-hidden"
      >
        {/* Timeline line */}
        <div className="absolute left-0 right-0 top-1/2 z-0 h-px -translate-y-1/2 bg-[#8c6239]/20" />

        <motion.div
          drag="x"
          dragConstraints={{
            left: -maxDrag,
            right: 0,
          }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          style={{ x: springX }}
          className="flex cursor-grab active:cursor-grabbing"
          data-clickable
        >
          {kabinets.map((kab, i) => (
            <motion.div
              key={kab.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex-shrink-0"
              style={{
                width: CARD_WIDTH,
                marginRight: i < kabinets.length - 1 ? CARD_GAP : 0,
              }}
            >
              {/* Timeline dot */}
              <div className="absolute -top-3 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#8c6239] bg-[#f5e6d0]" />

              {/* Card */}
              <div className="mt-4 rounded-xl border border-[#8c6239]/20 bg-[#f5e6d0]/80 p-5 shadow-md backdrop-blur-sm transition-shadow hover:shadow-lg">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8c6239]">
                  {kab.period}
                </span>
                <h3 className="mt-2 text-lg font-bold text-[#2a221b]">
                  {kab.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5a4a3a]/80">
                  {kab.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Era markers */}
      <div className="mx-auto mt-8 flex max-w-5xl justify-between px-4 text-xs text-[#8c6239]/40">
        <span>1950</span>
        <span>•</span>
        <span>1953</span>
        <span>•</span>
        <span>1955</span>
        <span>•</span>
        <span>1959</span>
      </div>
    </section>
  );
}
