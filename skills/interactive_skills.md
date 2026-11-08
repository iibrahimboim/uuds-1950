# Blueprint Fitur Interaktif Website Sejarah UUDS 1950

Fokuskan pengembangan antarmuka (UI) pada pengalaman eksplorasi yang imersif, dinamis, dan tidak monoton. Implementasikan fitur-fitur "skill" frontend berikut menggunakan Framer Motion dan Tailwind CSS:

## 1. Skill Layout: 3D Dynamic Bento Grid (Map Arsip Rahasia)
Untuk menampilkan 5 Indikator Demokrasi (Akuntabilitas, Rotasi Kekuasaan, Rekrutmen Politik, Pemilu, Pemenuhan Hak), tinggalkan format list tradisional.
*   **Interaksi Hover:** Gunakan *Bento Grid* asimetris. Saat kursor berada di atas kartu indikator, berikan efek 3D tilt (kartu miring mengikuti arah mouse) dan *subtle glow* seolah tersorot lampu meja tua.
*   **Transisi Expand:** Saat kartu diklik, gunakan `layoutId` dari Framer Motion agar kartu tersebut bertransisi secara mulus (*seamless expand*) memenuhi layar, membuka detail teks layaknya membuka map arsip rahasia negara.

## 2. Skill Scroll: Parallax Depth & Filter Dekade
Pergerakan halaman harus terasa seperti menembus lorong waktu.
*   **Hero Section:** Tampilkan tipografi masif "UUDS 1950". Saat user melakukan *scroll*, teks utama mengecil dan memudar ke latar belakang, sementara elemen kliping koran jadul dan siluet tokoh sejarah melayang masuk dari sisi kiri-kanan dengan kecepatan berbeda (efek Parallax berlapis).
*   **Transisi Warna:** Halaman dimulai dengan filter *grayscale/sepia* pekat. Semakin jauh user melakukan *scroll* ke bawah menuju indikator ke-5, warna halaman secara perlahan menjadi lebih hangat dan *muted* (pudar).

## 3. Skill Mikro-Interaksi: Typewriter & Film Grain
Tambahkan detail kecil untuk memperkuat tema historis tanpa mengorbankan performa.
*   **Noise Overlay:** Aplikasikan layer CSS *pointer-events-none* dengan animasi *film grain* tipis (opacity 3-5%) di seluruh halaman agar tidak terlihat terlalu bersih seperti web modern.
*   **Typewriter Reveal:** Gunakan properti `whileInView` pada Framer Motion untuk memunculkan teks penting (seperti sub-judul atau kutipan sejarah) huruf demi huruf, mensimulasikan mesin tik tua yang sedang mengetik secara *real-time*.
*   **Custom Cursor:** Ubah kursor kaku default menjadi titik kecil yang memiliki *trailing aura* tipis, atau ikon kaca pembesar vintage saat melewati elemen yang bisa di-klik.

## 4. Skill Interaksi Unik: Draggable Horizontal Timeline
Karena era UUDS 1950 terkenal dengan pergantian kabinet yang sangat cepat (Rotasi Kekuasaan), visualisasikan dengan cara yang berbeda.
*   **Mekanisme Drag:** Buat komponen *timeline* kabinet/peristiwa yang membentang horizontal. User tidak melakukan klik, melainkan harus men-*drag* (geser tarik) secara horizontal untuk melihat pergantian waktu.
*   **Physics Feedback:** Berikan efek *snap-to-center* dengan *spring bounce* yang memuaskan setiap kali timeline digeser ke tahun atau kabinet yang baru.