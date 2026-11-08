"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Pengertian UUDS", href: "#pengertian" },
  { label: "Latar Belakang", href: "#latar-belakang" },
  { label: "Periode Konstitusi", href: "#periode" },
  { label: "Indikator", href: "#indikator" },
  { label: "Kabinet", href: "#kabinet" },
  { label: "Kesimpulan", href: "#kesimpulan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-[#f5e6d0]/95 backdrop-blur-md shadow-md border-b border-[#8c6239]/20"
          : "bg-[#f5e6d0]/60 backdrop-blur-xs border-b border-[#8c6239]/10"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <a
          href="#beranda"
          className="text-xl font-bold tracking-tight text-[#2a221b] transition-colors hover:text-[#8c6239]"
          data-clickable
        >
          UUDS <span className="text-[#8c6239]">1950</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-clickable
              className="text-base font-medium text-[#4a3b2c] transition-colors duration-200 hover:text-[#8c6239]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 rounded border border-[#8c6239]/20 text-[#2a221b]"
          data-clickable
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-4 bg-[#2a221b] transition-transform duration-200 ${
              mobileOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-4 bg-[#2a221b] transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-4 bg-[#2a221b] transition-transform duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#f5e6d0]/98 border-t border-[#8c6239]/15 px-6 py-3 shadow-lg"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-1.5 text-base font-medium text-[#4a3b2c] transition-colors hover:text-[#8c6239]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
