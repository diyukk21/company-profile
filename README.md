# Ed'Sign Digital Print

Website company profile statis berbasis HTML5, Bootstrap 5, CSS, dan JavaScript vanilla.

## Menjalankan proyek

```bash
npm install
```

Lalu buka `index.html` melalui static server agar perilaku aset dan navigasi sama seperti lingkungan produksi.

## Pemeriksaan kualitas

```bash
npm test
```

Perintah tersebut memeriksa format seluruh HTML, CSS, dan JavaScript menggunakan Prettier.

## Struktur

- `style.css`: gaya bersama dan komponen Beranda.
- `produk.css` dan `tentangkami.css`: gaya yang khusus halaman.
- `js/site.js`: navigasi sticky dan tahun footer.
- `js/product-filter.js`: filter dan modal produk di Beranda.
- `dump/`: aset gambar lokal.
