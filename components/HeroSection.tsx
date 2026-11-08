"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ───────────────────── Smooth Custom Cursor (ref-based) ───────────────────── */
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const trailing = useRef({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    let hasMoved = false;

    const onMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        setActive(true);
      }
      mouse.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      const clickable =
        target?.closest("a, button, [role='button'], [data-clickable]") !== null;
      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${trailing.current.x - 18}px, ${trailing.current.y - 18}px, 0) scale(${clickable ? 1.5 : 1})`;
      }
    };

    let raf: number;
    const follow = () => {
      trailing.current.x += (mouse.current.x - trailing.current.x) * 0.15;
      trailing.current.y += (mouse.current.y - trailing.current.y) * 0.15;
      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${trailing.current.x - 18}px, ${trailing.current.y - 18}px, 0)`;
      }
      raf = requestAnimationFrame(follow);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      <div
        ref={auraRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full mix-blend-difference"
        style={{
          border: "1.5px solid rgba(140,98,57,0.55)",
          transition: "transform 0.08s ease-out",
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[#8c6239]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}

/* ───────────────────── Typewriter Hook (Clean & Stable) ───────────────────── */
function useTypewriter(text: string, speed = 45) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (displayed.length >= text.length) {
      setDone(true);
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, text, speed, done]);

  return { displayed, done };
}

/* ───────────────────── HeroSection ───────────────────── */
export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const { displayed, done } = useTypewriter(
    "Menelusuri Jejak Demokrasi Parlementer Indonesia (1950 – 1959)",
    40
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-16"
    >
      {/* Custom cursor on desktop */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center text-center">
        {/* Badge era */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8c6239]/30 bg-[#f5e6d0]/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#8c6239] shadow-sm backdrop-blur-sm"
        >
          <span>🏛️</span>
          <span>Arsip Konstitusi Nasional</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          style={{ scale: titleScale, y: titleY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-extrabold tracking-tight text-[#2a221b] sm:text-8xl md:text-9xl"
        >
          <span className="block leading-none">UUDS</span>
          <span className="block text-[#8c6239] leading-none mt-1">1950</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <div className="mt-6 min-h-[3.5rem] max-w-2xl">
          <p           className="text-xl leading-relaxed text-[#5a4a3a] sm:text-2xl font-medium">
            {displayed}
            {!done && (
              <span className="ml-1 inline-block h-5 w-[2px] bg-[#8c6239] animate-pulse align-middle" />
            )}
          </p>
        </div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-6 h-px w-48 origin-center bg-[#8c6239]/40"
        />

        {/* Quick description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-[#4a3b2c] sm:text-xl"
        >
          Era kebebasan politik terluas dalam sejarah konstitusi Indonesia.
          Menjalankan sistem pemerintahan parlementer dengan multipartai, pemilu
          pertama 1955, dan 7 pergantian kabinet.
        </motion.p>

        {/* Action Button & Scroll Hint */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href="#latar-belakang"
            data-clickable
            className="group inline-flex items-center gap-2 rounded-full border border-[#8c6239]/40 bg-[#8c6239]/10 px-6 py-2.5 text-sm font-semibold text-[#8c6239] transition-all duration-300 hover:bg-[#8c6239] hover:text-[#f5e6d0] shadow-sm hover:shadow-md"
          >
            <span>Mulai Eksplorasi</span>
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>

          <div className="flex items-center gap-2 text-xs text-[#8c6239]/60">
            <span>Gulir ke bawah untuk membaca arsip</span>
          </div>
        </motion.div>
      </div>

      {/* Floating newspaper clips (Desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        className="absolute left-6 top-1/3 hidden w-60 -rotate-3 rounded-lg border border-[#8c6239]/25 bg-[#f5e6d0]/90 p-4 shadow-lg backdrop-blur-sm lg:block"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8c6239]">
          Koran Merdeka — 17 Agustus 1950
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-[#3a2f24]">
          &ldquo;Negara Kesatuan Republik Indonesia resmi kembali berdiri dengan
          UUDS 1950 sebagai dasar konstitusional.&rdquo;
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
        className="absolute right-6 top-1/2 hidden w-60 rotate-2 rounded-lg border border-[#8c6239]/25 bg-[#f5e6d0]/90 p-4 shadow-lg backdrop-blur-sm lg:block"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8c6239]">
          Arsip Nasional — 1955
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-[#3a2f24]">
          &ldquo;Pemilu pertama 1955 berlangsung damai dan jujur, menjadi tonggak
          sejarah demokrasi paling bersih di Indonesia.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
