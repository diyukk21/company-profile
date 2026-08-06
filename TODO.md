# TODO - Perbaikan Company Profile

## Daftar Perbaikan yang Diperlukan

### 🔴 P1 - Kritis
- [x] Hapus `@import "bootstrap/dist/css/bootstrap.min.css"` dari `style.css` (redundan & gagal via file://)
- [x] Pastikan Bootstrap JS ter-load (kolom `node_modules` dibuat via `npm install`)

### 🟠 P2 - Penting
- [x] Gabungkan dua blok `DOMContentLoaded` listener
- [x] Perbaiki map kategori filter agar konsisten (Indoor/Outdoor/Merchandise)
- [x] Perbaiki posisi slider filter saat halaman pertama dimuat (recalculate setelah window load)

### 🟡 P3 - Konten & Desain
- [x] Ganti kelas custom tidak terdefinisi (`display-md-3`, `fs-md-1`)
- [x] Perbaiki link menu yang mati (`href="#"`)
- [x] Perbaiki menu "Beranda" menuju `#home`
- [x] Perbaiki tahun footer (`© 2026` -> tahun berjalan otomatis)
- [x] Hapus duplikasi CSS `.site-footer .btn-outline-primary`
- [x] Perbaiki nama file gambar ber-spasi (`X-Banner 1.png` -> `x-banner-1.png`, `Frame 37.png` -> `frame-37.png`)

## Status
- [x] `npm install` dijalankan (untuk membuat node_modules)
- [x] Semua perbaikan HTML & CSS selesai
