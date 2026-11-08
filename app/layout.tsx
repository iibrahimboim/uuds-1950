import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UUDS 1950 — Arsip Interaktif",
  description:
    "Eksplorasi sejarah Undang-Undang Dasar Sementara 1950 — Demokrasi Parlementer Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={ebGaramond.variable}>
      <body
        className="min-h-screen font-sans text-[#2a221b] antialiased bg-cover bg-fixed bg-center bg-no-repeat selection:bg-[#8c6239]/30"
        style={{ backgroundImage: "url('/assets/kertas_usang.jpg')" }}
      >
        {/* Film-grain noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        <main className="relative z-10 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
