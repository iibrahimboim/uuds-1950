"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ───────────────────── Custom Cursor ───────────────────── */
function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsClickable(
        target.closest("a, button, [role='button'], [data-clickable]") !== null
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let raf: number;
    const follow = () => {
      setTrailing((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      raf = requestAnimationFrame(follow);
    };
    raf = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  return (
    <>
      {/* Trailing aura */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full mix-blend-difference transition-transform duration-100"
        style={{
          left: trailing.x - 18,
          top: trailing.y - 18,
          width: 36,
          height: 36,
          border: "1.5px solid rgba(140,98,57,0.5)",
          transform: isClickable ? "scale(1.6)" : "scale(1)",
        }}
      />
      {/* Dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-[#8c6239]"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
        }}
      />
    </>
  );
}

/* ───────────────────── Typewriter Hook ───────────────────── */
function useTypewriter(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  const reset = useCallback(() => {
    setDisplayed("");
    setDone(false);
  }, []);

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

  return { displayed, done, reset };
}

/* ───────────────────── HeroSection ───────────────────── */
export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* Parallax transforms */
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const leftClipX = useTransform(scrollYProgress, [0.1, 0.6], [-400, 0]);
  const rightClipX = useTransform(scrollYProgress, [0.1, 0.6], [400, 0]);
  const clipOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  /* Sepia → warm filter */
  const sepiaVal = useTransform(scrollYProgress, [0, 1], [0.7, 0]);

  useEffect(() => {
    return sepiaVal.on("change", (v) => {
      document.body.style.filter = `sepia(${v})`;
    });
  }, [sepiaVal]);

  /* Typewriter */
  const { displayed, done } = useTypewriter(
    "Menelusuri Jejak Demokrasi Parlementer Indonesia",
    45
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[200vh] flex-col items-center overflow-hidden"
    >
      {/* Custom cursor */}
      <CustomCursor />

      {/* Sticky hero content */}
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-4">
        {/* Main title – parallax */}
        <motion.h1
          style={{ scale: titleScale, opacity: titleOpacity, y: titleY }}
          className="text-center text-6xl font-bold tracking-tight text-[#2a221b] sm:text-8xl md:text-9xl"
        >
          <span className="block leading-none">UUDS</span>
          <span className="block text-[#8c6239] leading-none">1950</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.p
          style={{ y: subtitleY }}
          className="mt-6 max-w-xl text-center text-lg leading-relaxed text-[#5a4a3a] sm:text-xl"
        >
          {displayed}
          {!done && (
            <span className="ml-0.5 inline-block w-[2px] h-5 bg-[#8c6239] animate-pulse" />
          )}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mt-8 h-px w-48 origin-center bg-[#8c6239]/50"
        />

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-12 flex flex-col items-center gap-2 text-sm text-[#8c6239]/60"
        >
          <span>Gulir ke bawah untuk menjelajah</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-6 w-4 rounded-full border border-[#8c6239]/40 flex items-start justify-center pt-1"
          >
            <div className="h-1.5 w-0.5 rounded-full bg-[#8c6239]/60" />
          </motion.div>
        </motion.div>

        {/* Floating newspaper clips – parallax side elements */}
        <motion.div
          style={{ x: leftClipX, opacity: clipOpacity }}
          className="absolute left-8 top-1/3 hidden w-56 -rotate-6 rounded border border-[#8c6239]/20 bg-[#f5e6d0]/80 p-4 shadow-lg backdrop-blur-sm md:block"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[#8c6239]">
            Koran Merdeka — 1950
          </p>
          <p className="mt-2 text-sm leading-snug text-[#3a2f24]">
            &ldquo;Negara Kesatuan Republik Indonesia resmi kembali
            diproklamasikan...&rdquo;
          </p>
        </motion.div>

        <motion.div
          style={{ x: rightClipX, opacity: clipOpacity }}
          className="absolute right-8 top-1/2 hidden w-52 rotate-3 rounded border border-[#8c6239]/20 bg-[#f5e6d0]/80 p-4 shadow-lg backdrop-blur-sm md:block"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[#8c6239]">
            Arsip Nasional — 1955
          </p>
          <p className="mt-2 text-sm leading-snug text-[#3a2f24]">
            &ldquo;Pemilu pertama Indonesia dilaksanakan dengan penuh semangat
            demokratis.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
