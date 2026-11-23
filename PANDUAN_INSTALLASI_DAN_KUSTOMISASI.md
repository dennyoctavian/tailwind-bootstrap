# 📘 Panduan Instalasi & Kustomisasi Komponen di Proyek Lain

Panduan lengkap cara memasang (*install*) library komponen **React Bootstrap Tailwind UI** ke proyek Anda yang lain langsung dari **GitHub**, serta cara mengkustomisasi seluruh desain visualnya menggunakan utility classes dari **Tailwind CSS**.

---

## 📑 Daftar Isi
1. [Langkah 1: Mengunggah Library ke GitHub](#-langkah-1-mengunggah-library-ke-github)
2. [Langkah 2: Memasang Library di Proyek Baru](#-langkah-2-memasang-library-di-proyek-baru)
3. [Langkah 3: Konfigurasi Tailwind di Proyek Baru (Wajib)](#-langkah-3-konfigurasi-tailwind-di-proyek-baru-wajib)
4. [Langkah 4: Cara Menggunakan Komponen](#-langkah-4-cara-menggunakan-komponen)
5. [Langkah 5: Cara Memperbarui Komponen (Update)](#-langkah-5-cara-memperbarui-komponen-update)
6. [🎨 Panduan Lengkap Kustomisasi Desain dengan Tailwind CSS](#-panduan-lengkap-kustomisasi-desain-dengan-tailwind-css)
   - [A. Mengapa Sangat Mudah Dikustomisasi?](#a-mengapa-sangat-mudah-dikustomisasi)
   - [B. Kustomisasi Tombol (Button)](#b-kustomisasi-tombol-button)
   - [C. Kustomisasi Kartu (Card) Bergaya Glassmorphism](#c-kustomisasi-kartu-card-bergaya-glassmorphism)
   - [D. Kustomisasi Formulir & Input](#d-kustomisasi-formulir--input)
   - [E. Kustomisasi Responsivitas per Komponen](#e-kustomisasi-responsivitas-per-komponen)
   - [F. Kustomisasi Dark Mode](#f-kustomisasi-dark-mode)
7. [💡 Alternatif Instalasi Lainnya](#-alternatif-instalasi-lainnya)
8. [❓ Tanya Jawab & Pemecahan Masalah (Troubleshooting)](#-tanya-jawab--pemecahan-masalah-troubleshooting)

---

## 🐙 Langkah 1: Mengunggah Library ke GitHub

Proyek ini telah selesai dikompilasi dan diinisialisasi Git di komputer Anda. Anda hanya perlu membuat repository di akun GitHub Anda dan melakukan push.

1. Buka [GitHub New Repository](https://github.com/new).
2. Beri nama repository, misalnya: `react-bootstrap-tailwind-ui`.
3. Pilih visibilitas **Public** atau **Private** (keduanya didukung oleh npm).
4. Klik **Create repository** (tidak perlu centang *Initialize with README*).
5. Buka terminal di folder proyek ini (`/Volumes/Data/Programming/tailwind`) dan jalankan:

```bash
git remote add origin https://github.com/USERNAME_GITHUB_ANDA/react-bootstrap-tailwind-ui.git
git branch -M main
git push -u origin main
```
*(Ganti `USERNAME_GITHUB_ANDA` dengan username GitHub Anda).*

---

## 📦 Langkah 2: Memasang Library di Proyek Baru

Buka terminal di folder **proyek Anda yang lain** (misalnya proyek Next.js, Vite, atau Create React App), kemudian jalankan salah satu perintah berikut:

### Opsi A: Jika Repository GitHub Publik
```bash
npm install github:USERNAME_GITHUB_ANDA/react-bootstrap-tailwind-ui
```
*atau menggunakan format URL Git:*
```bash
npm install git+https://github.com/USERNAME_GITHUB_ANDA/react-bootstrap-tailwind-ui.git
```

### Opsi B: Jika Repository GitHub Privat
Jika repository bersifat private dan komputer Anda sudah memiliki SSH Key GitHub:
```bash
npm install git+ssh://git@github.com:USERNAME_GITHUB_ANDA/react-bootstrap-tailwind-ui.git
```

Setelah selesai, dependensi akan otomatis ditambahkan ke `package.json` proyek baru Anda:
```json
{
  "dependencies": {
    "react-bootstrap-tailwind-ui": "github:USERNAME_GITHUB_ANDA/react-bootstrap-tailwind-ui"
  }
}
```

---

## ⚙️ Langkah 3: Konfigurasi Tailwind di Proyek Baru (Wajib)

> [!IMPORTANT]
> **Mengapa langkah ini wajib?**  
> Tailwind CSS menggunakan sistem *tree-shaking (purge)* yang hanya mengompilasi class CSS yang ada di dalam berkas yang didaftarkan pada opsi `content`. Agar class Tailwind yang digunakan oleh komponen ikut ter-generate di proyek baru, daftarkan path `node_modules`-nya.

Buka berkas `tailwind.config.js` di proyek baru Anda, lalu tambahkan baris berikut pada array `content`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 👇 WAJIB: Tambahkan baris ini agar style komponen terbaca:
    "./node_modules/react-bootstrap-tailwind-ui/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Opsional: jika ingin mendukung dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Pastikan juga proyek baru Anda telah memasang dependensi pendukung ikon:
```bash
npm install lucide-react clsx tailwind-merge
```

---

## 🚀 Langkah 4: Cara Menggunakan Komponen

Setelah dipasang, Anda dapat langsung mengimpor komponen apa pun di halaman React proyek baru Anda:

```tsx
// src/App.tsx di proyek baru Anda
import { 
  Container, Row, Col, 
  Button, Card, Alert, 
  Modal, useState 
} from 'react-bootstrap-tailwind-ui';

export default function MyDashboard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container className="py-8">
      {/* Notifikasi Alert */}
      <Alert variant="success" dismissible className="mb-6">
        <strong>Sukses!</strong> Komponen berhasil diimpor dari GitHub.
      </Alert>

      {/* Grid Responsif */}
      <Row gutter={4}>
        <Col xs={12} md={6} lg={4}>
          <Card hoverable>
            <Card.Body>
              <Card.Title>Kartu Produk</Card.Title>
              <Card.Text>
                Komponen ini responsif dan langsung siap pakai.
              </Card.Text>
              <Button variant="primary" onClick={() => setOpenModal(true)}>
                Buka Modal
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal Dialog */}
      <Modal show={openModal} onClose={() => setOpenModal(false)} fullscreenSmDown>
        <Modal.Header onClose={() => setOpenModal(false)}>
          <Modal.Title>Konfirmasi Aksi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah Anda yakin ingin memproses pesanan ini?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>Batal</Button>
          <Button variant="primary" onClick={() => setOpenModal(false)}>Ya, Lanjutkan</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
```

---

## 🔄 Langkah 5: Cara Memperbarui Komponen (Update)

Jika Anda melakukan perubahan, perbaikan bug, atau menambahkan komponen baru di repository GitHub:
1. Di repository komponen ini, lakukan commit & push perubahan:
   ```bash
   git add .
   git commit -m "feat: tambah komponen baru"
   git push origin main
   ```
2. Di proyek lain yang menggunakannya, Anda cukup menjalankan:
   ```bash
   npm update react-bootstrap-tailwind-ui
   ```
NPM akan otomatis mengunduh versi komit terbaru dari GitHub!

---

## 🎨 Panduan Lengkap Kustomisasi Desain dengan Tailwind CSS

### A. Mengapa Sangat Mudah Dikustomisasi?
Setiap komponen dibangun menggunakan utility `cn(...)` yang menggabungkan `clsx` dan **`tailwind-merge`**.

```tsx
// Di balik layar setiap komponen:
className={cn(
  defaultBootstrapClasses,
  variantClasses,
  className // 👈 className kustom Anda diletakkan paling akhir
)}
```

`tailwind-merge` secara cerdas menyelesaikan konflik class CSS tanpa memerlukan `!important`. Jika Anda memberikan `className="bg-purple-600 rounded-full"`, Tailwind akan otomatis **menimpa** warna biru bawaan dan sudut kotak default Bootstrap!

---

### B. Kustomisasi Tombol (Button)

```tsx
import { Button } from 'react-bootstrap-tailwind-ui';

// 1. Tampilan Default Bootstrap:
<Button variant="primary">Tombol Standar</Button>

// 2. Tombol Modern Gradasi Ungu-Pink:
<Button
  variant="primary"
  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-purple-500/30 px-8 py-3 font-semibold"
>
  Gradasi Modern
</Button>

// 3. Tombol Outline Gaya Neon:
<Button
  variant="outline-primary"
  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.4)]"
>
  Glow Neon
</Button>

// 4. Tombol dengan Animasi Hover Scale:
<Button
  variant="success"
  className="hover:scale-105 active:scale-95 transition-transform duration-200"
>
  Efek Animasi
</Button>
```

---

### C. Kustomisasi Kartu (Card) Bergaya Glassmorphism

```tsx
import { Card } from 'react-bootstrap-tailwind-ui';

// Mengubah Card standar menjadi Card Kaca Transparan (Glassmorphism):
<Card className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-6">
  <Card.Body>
    <Card.Title className="text-2xl font-black text-white">Glassmorphism Card</Card.Title>
    <Card.Text className="text-slate-200">
      Efek blur dan transparansi mewah langsung aktif hanya dengan class Tailwind bawaan.
    </Card.Text>
  </Card.Body>
</Card>
```

---

### D. Kustomisasi Formulir & Input

```tsx
import { FormControl, FloatingLabel } from 'react-bootstrap-tailwind-ui';

// 1. Input Pencarian Oval dengan Border Khusus:
<FormControl
  type="text"
  placeholder="Cari artikel atau produk..."
  className="rounded-full border-2 border-indigo-300 focus:border-indigo-600 focus:ring-8 focus:ring-indigo-500/20 px-6 py-3 bg-slate-50 dark:bg-slate-800"
/>

// 2. Floating Label Kustom dengan Warna Aksen Brand:
<FloatingLabel
  label="Alamat Email Perusahaan"
  type="email"
  className="[&_input]:border-amber-400 [&_input]:focus:border-amber-600 [&_label]:text-amber-700"
/>
```

---

### E. Kustomisasi Responsivitas per Komponen

Semua class responsif Tailwind (`sm:`, `md:`, `lg:`, `xl:`) dapat langsung disisipkan pada `className`:

```tsx
// Tombol yang memanjang penuh (100%) di layar ponsel, namun berukuran ringkas di desktop:
<Button variant="primary" className="w-full md:w-auto md:px-8">
  Kirim Data
</Button>

// Teks Card yang lebih kecil di HP dan membesar di layar lebar:
<Card.Title className="text-base sm:text-lg lg:text-2xl font-bold">
  Judul Responsif
</Card.Title>
```

---

### F. Kustomisasi Dark Mode

Semua komponen sudah dilengkapi selector `dark:` Tailwind bawaan. Di proyek baru Anda:

1. Di `tailwind.config.js`, pastikan `darkMode: 'class'` sudah diaktifkan.
2. Ketika elemen `html` atau `body` diberi class `dark`:
   ```html
   <html class="dark">
   ```
3. Seluruh warna background, border, teks, dan status validasi komponen akan otomatis beralih ke palet mode gelap secara instan.
4. Anda juga bisa menimpa warna dark mode secara spesifik:
   ```tsx
   <Card className="dark:bg-indigo-950 dark:border-indigo-800">
   ```

---

## 💡 Alternatif Instalasi Lainnya

### Opsi 1: Pasang Langsung via Local Path (Offline / Tanpa GitHub)
Jika kedua proyek berada di laptop yang sama:
```bash
npm install /Volumes/Data/Programming/tailwind
```
Atau di `package.json` proyek baru:
```json
{
  "dependencies": {
    "react-bootstrap-tailwind-ui": "file:/Volumes/Data/Programming/tailwind"
  }
}
```

### Opsi 2: Salin Folder `components/` (Metode ala Shadcn UI)
Salin folder `src/components/` dan `src/utils/` dari proyek ini langsung ke folder `src/` proyek baru Anda. Dengan cara ini Anda memiliki 100% kepemilikan kode tanpa perlu package eksternal.

---

## ❓ Tanya Jawab & Pemecahan Masalah (Troubleshooting)

### Q1: Style komponen tidak muncul / tidak berwarna di proyek baru?
**Penyebab:** Berkas `tailwind.config.js` di proyek baru belum menyertakan `node_modules/react-bootstrap-tailwind-ui` di bagian `content`.  
**Solusi:** Pastikan baris berikut ada di `tailwind.config.js` proyek baru Anda:
```js
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/react-bootstrap-tailwind-ui/**/*.{js,ts,jsx,tsx}"
]
```

### Q2: Ikon tidak muncul?
**Solusi:** Pastikan proyek baru telah menginstal paket ikon:
```bash
npm install lucide-react
```

### Q3: Error `git@github.com: Permission denied (publickey)` saat install repo private?
**Solusi:** Pastikan SSH Key komputer Anda sudah didaftarkan di pengaturan akun GitHub Anda ([github.com/settings/keys](https://github.com/settings/keys)).
