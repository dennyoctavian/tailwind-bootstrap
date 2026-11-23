# 📘 Panduan Instalasi & Kustomisasi Komponen

Repository GitHub Resmi:  
👉 **[https://github.com/dennyoctavian/tailwind-bootstrap](https://github.com/dennyoctavian/tailwind-bootstrap)**

Panduan ini berisi dua bagian utama:
1. **Bagian 1:** Cara meng-install dan menjalankan proyek ini, serta cara memasangnya ke dalam proyek Anda yang lain langsung dari GitHub `dennyoctavian/tailwind-bootstrap`.
2. **Bagian 2:** Panduan lengkap cara mengkustomisasi, mengubah desain, dan menambahkan varian baru pada komponen yang sudah ada menggunakan Tailwind CSS.

---

## 📑 Daftar Isi
- [BAGIAN 1: CARA INSTALASI PROYEK](#bagian-1-cara-instalasi-proyek)
  - [1. Cara Menjalankan Proyek Ini Sendiri (Clone dari GitHub)](#1-cara-menjalankan-proyek-ini-sendiri-clone-dari-github)
  - [2. Cara Memasang Komponen Ini ke Proyek Anda yang Lain (via GitHub)](#2-cara-memasang-komponen-ini-ke-proyek-anda-yang-lain-via-github)
  - [3. Konfigurasi Wajib Tailwind di Proyek Baru](#3-konfigurasi-wajib-tailwind-di-proyek-baru)
  - [4. Contoh Pemakaian di Proyek Lain](#4-contoh-pemakaian-di-proyek-lain)
  - [5. Cara Update ke Versi Terbaru](#5-cara-update-ke-versi-terbaru)
- [BAGIAN 2: PANDUAN LENGKAP KUSTOMISASI KOMPONEN](#bagian-2-panduan-lengkap-kustomisasi-komponen)
  - [Level 1: Kustomisasi Cepat via `className` (Tanpa Mengubah Kode Sumber)](#level-1-kustomisasi-cepat-via-classname-tanpa-mengubah-kode-sumber)
  - [Level 2: Mengubah Palet Warna Global Brand di `tailwind.config.js`](#level-2-mengubah-palet-warna-global-brand-di-tailwindconfigjs)
  - [Level 3: Menambahkan Varian Baru ke Komponen (Misal: Varian Neon / Ungu)](#level-3-menambahkan-varian-baru-ke-komponen-misal-varian-neon--ungu)
  - [Level 4: Menambahkan Prop Baru ke Komponen (Misal: Prop `shadow` atau `glow`)](#level-4-menambahkan-prop-baru-ke-komponen-misal-prop-shadow-atau-glow)
  - [Level 5: Kustomisasi Ukuran Default Komponen](#level-5-kustomisasi-ukuran-default-komponen)
  - [Level 6: Kustomisasi Mode Gelap (Dark Mode)](#level-6-kustomisasi-mode-gelap-dark-mode)

---

# BAGIAN 1: CARA INSTALASI PROYEK

## 1. Cara Menjalankan Proyek Ini Sendiri (Clone dari GitHub)

Jika Anda atau rekan tim Anda ingin mengunduh dan menjalankan seluruh web dokumentasi interaktif ini di komputer lokal:

```bash
# 1. Clone repository dari GitHub
git clone https://github.com/dennyoctavian/tailwind-bootstrap.git

# 2. Masuk ke folder proyek
cd tailwind-bootstrap

# 3. Pasang semua dependensi
npm install

# 4. Jalankan server pengembangan
npm run dev
```
Buka browser di **`http://localhost:3000`** atau **`http://localhost:3001`**.

---

## 2. Cara Memasang Komponen Ini ke Proyek Anda yang Lain (via GitHub)

Jika Anda memiliki **proyek React lain** (misalnya website toko online, dashboard admin, portofolio, dll.) dan ingin menggunakan komponen Bootstrap Tailwind ini:

Buka terminal di **folder proyek Anda yang lain**, lalu jalankan:

### Menggunakan NPM:
```bash
npm install github:dennyoctavian/tailwind-bootstrap
```
*atau menggunakan format URL Git lengkap:*
```bash
npm install git+https://github.com/dennyoctavian/tailwind-bootstrap.git
```

### Menggunakan Yarn:
```bash
yarn add github:dennyoctavian/tailwind-bootstrap
```

### Menggunakan PNPM:
```bash
pnpm add github:dennyoctavian/tailwind-bootstrap
```

Setelah perintah di atas selesai, dependensi akan otomatis tercatat di `package.json` proyek baru Anda:
```json
{
  "dependencies": {
    "react-bootstrap-tailwind-ui": "github:dennyoctavian/tailwind-bootstrap"
  }
}
```

---

## 3. Konfigurasi Wajib Tailwind di Proyek Baru

> [!IMPORTANT]
> **PENTING:** Tailwind CSS menggunakan sistem *tree-shaking (purge)* yang hanya mengompilasi class CSS yang terdaftar pada array `content`. Agar semua class Tailwind pada komponen Bootstrap ini terbaca dan berwarna di proyek baru Anda, Anda **wajib** mendaftarkan `node_modules` di `tailwind.config.js` proyek baru.

Buka berkas `tailwind.config.js` di proyek baru Anda, lalu tambahkan baris berikut:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 👇 WAJIB DITAMBAHKAN agar styling komponen aktif:
    "./node_modules/react-bootstrap-tailwind-ui/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Pastikan juga proyek baru Anda telah menginstal pustaka ikon Lucide (digunakan oleh Modal, Alert, Carousel, Accordion, dll.):
```bash
npm install lucide-react clsx tailwind-merge
```

---

## 4. Contoh Pemakaian di Proyek Lain

Di dalam file komponen proyek baru Anda (misalnya `src/App.tsx` atau `src/pages/Dashboard.tsx`):

```tsx
import { useState } from 'react';
import { 
  Container, Row, Col, 
  Button, Card, Alert, 
  Modal,
  Statistic, Steps, Timeline, Rate, Avatar, Tag, Segmented, Result,
  Command, Kbd, Toggle, ToggleGroup, AspectRatio
} from 'react-bootstrap-tailwind-ui';

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [rate, setRate] = useState(5);

  return (
    <Container className="py-8 space-y-8">
      {/* Notifikasi Alert */}
      <Alert variant="primary" dismissible>
        Selamat datang di dashboard! Komponen Bootstrap + Ant Design diimpor langsung dari GitHub.
      </Alert>

      {/* METRIK DASHBOARD (Ant Design Statistic) */}
      <Row gutter={4}>
        <Col xs={12} sm={6} lg={3}>
          <Statistic title="Total Penjualan" value="184.250.000" prefix="Rp " trend="up" />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Statistic title="Pengguna Aktif" value="1.420" suffix=" org" trend="up" />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Statistic title="Rata-rata Rating" value={4.9} precision={1} suffix="/ 5.0" />
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Statistic title="Keluhan Terbuka" value="0" trend="neutral" />
        </Col>
      </Row>

      {/* ALUR KERJA (Ant Design Steps) */}
      <Card>
        <Card.Body>
          <Card.Title className="mb-4">Status Verifikasi Akun</Card.Title>
          <Steps
            current={activeStep}
            onChange={setActiveStep}
            items={[
              { title: 'Daftar', description: 'Buat akun' },
              { title: 'Verifikasi KYC', description: 'Upload KTP' },
              { title: 'Aktif', description: 'Akun siap pakai' },
            ]}
          />
        </Card.Body>
      </Card>

      {/* Grid Responsif Standar Bootstrap */}
      <Row gutter={4}>
        <Col xs={12} md={6} lg={4}>
          <Card hoverable>
            <Card.Body>
              <Card.Title>Data Penjualan</Card.Title>
              <Card.Text>Total transaksi bulan ini meningkat 25%.</Card.Text>
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Lihat Detail
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal Dialog Responsif */}
      <Modal show={showModal} onClose={() => setShowModal(false)} fullscreenSmDown>
        <Modal.Header onClose={() => setShowModal(false)}>
          <Modal.Title>Detail Penjualan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Rincian transaksi lengkap ditampilkan di sini.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Tutup</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
```

---

## 5. Cara Update ke Versi Terbaru

Jika Anda memperbarui komponen di repository GitHub `dennyoctavian/tailwind-bootstrap`:
1. Di repository komponen ini, lakukan push perubahan:
   ```bash
   git add .
   git commit -m "feat: perbarui komponen"
   git push origin main
   ```
2. Di proyek lain yang menggunakannya, cukup jalankan:
   ```bash
   npm update react-bootstrap-tailwind-ui
   ```

---

# BAGIAN 2: PANDUAN LENGKAP KUSTOMISASI KOMPONEN

Seluruh komponen dibuat dengan arsitektur **Tailwind Utility-First** dan fungsi pembantu `cn()` (`clsx` + `tailwind-merge`). Desain komponen dapat diubah dengan sangat mudah di berbagai tingkatan.

---

## Level 1: Kustomisasi Cepat via `className` (Tanpa Mengubah Kode Sumber)

Setiap komponen menerima prop `className`. Berkat pustaka **`tailwind-merge`**, class kustom yang Anda berikan akan **secara cerdas menimpa style default Bootstrap tanpa perlu menulis `!important`**.

### 1. Kustomisasi Tombol (`Button`)
```tsx
import { Button } from 'react-bootstrap-tailwind-ui';

// A. Tombol Gradasi Modern dengan Sudut Bulat Penuh (Pill)
<Button
  variant="primary"
  className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white rounded-full shadow-xl hover:shadow-purple-500/30 px-8 py-3.5 font-bold tracking-wide uppercase"
>
  Gradasi Mewah
</Button>

// B. Tombol Efek Neon Glow (Cyberpunk)
<Button
  variant="outline-primary"
  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] font-mono"
>
  Cyber Neon
</Button>

// C. Tombol dengan Animasi Interaktif
<Button
  variant="success"
  className="hover:scale-105 active:scale-95 transition-transform duration-150 rounded-2xl"
>
  Hover Mengembang
</Button>
```

### 2. Kustomisasi Kartu (`Card`) Menjadi Efek Kaca (*Glassmorphism*)
```tsx
import { Card } from 'react-bootstrap-tailwind-ui';

<Card className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-6">
  <Card.Body>
    <Card.Title className="text-2xl font-black text-white">Glassmorphism Card</Card.Title>
    <Card.Text className="text-slate-200">
      Efek blur dan transparansi modern langsung aktif hanya dengan mengoper class Tailwind.
    </Card.Text>
  </Card.Body>
</Card>
```

### 3. Kustomisasi Input Formulir (`FormControl`)
```tsx
import { FormControl } from 'react-bootstrap-tailwind-ui';

// Input Pencarian Oval dengan Glow Ring Khusus
<FormControl
  type="text"
  placeholder="Cari data..."
  className="rounded-full border-2 border-indigo-200 focus:border-indigo-600 focus:ring-8 focus:ring-indigo-500/20 px-6 py-3 bg-slate-50"
/>
```

---

## Level 2: Mengubah Palet Warna Global Brand di `tailwind.config.js`

Jika perusahaan atau aplikasi Anda memiliki warna identitas sendiri (misalnya warna biru utama diganti dengan warna Indigo `#4f46e5` atau Hijau Zamrud `#059669`), Anda bisa mengubahnya sekali saja di `tailwind.config.js`.

Buka berkas `tailwind.config.js`:
```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        bs: {
          primary: {
            DEFAULT: '#4f46e5', // 👈 Ubah warna biru default Bootstrap ke warna Brand Anda
            hover: '#4338ca',
            light: '#e0e7ff',
            text: '#312e81',
          },
          success: {
            DEFAULT: '#059669', // 👈 Ubah warna hijau
            hover: '#047857',
            light: '#d1fae5',
            text: '#064e3b',
          }
        }
      }
    }
  }
}
```
**Hasilnya:** Seluruh komponen `Button variant="primary"`, `Badge variant="primary"`, `Alert variant="primary"`, `Tabs`, dan `ProgressBar` akan otomatis serentak berubah mengikuti warna brand baru Anda!

---

## Level 3: Menambahkan Varian Baru ke Komponen (Misal: Varian Neon / Ungu)

Jika Anda ingin menambahkan varian baru seperti `variant="purple"` atau `variant="gradient"` agar dapat dipanggil seperti `<Button variant="purple">`:

Buka berkas komponen yang ingin ditambah variannya, contohnya: [`src/components/buttons/Button.tsx`](file:///Volumes/Data/Programming/tailwind/src/components/buttons/Button.tsx):

### 1. Tambahkan tipe varian baru:
```tsx
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  // 👇 Tambahkan varian baru di sini:
  | 'purple'
  | 'gradient'
  | 'outline-purple';
```

### 2. Daftarkan styling Tailwind untuk varian tersebut:
```tsx
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#0d6efd] text-white hover:bg-[#0b5ed7] ...',
  // ...
  // 👇 Tambahkan konfigurasi class varian baru Anda:
  purple: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 border border-purple-600 active:bg-purple-800',
  gradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md',
  'outline-purple': 'text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white focus:ring-4 focus:ring-purple-200',
};
```

Sekarang Anda bisa langsung menggunakannya di mana saja:
```tsx
<Button variant="purple">Tombol Ungu Resmi</Button>
<Button variant="gradient">Tombol Gradasi Resmi</Button>
```

---

## Level 4: Menambahkan Prop Baru ke Komponen (Misal: Prop `shadow` atau `glow`)

Misalnya Anda ingin menambahkan prop `glow?: boolean` pada `Button.tsx` agar tombol memiliki efek cahaya neon otomatis:

Buka [`src/components/buttons/Button.tsx`](file:///Volumes/Data/Programming/tailwind/src/components/buttons/Button.tsx):

```tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  block?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  glow?: boolean; // 👈 1. Tambahkan prop baru di interface
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      pill = false,
      block = false,
      isLoading = false,
      glow = false, // 👈 2. Ambil nilai prop
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-150',
          pill ? 'rounded-full' : 'rounded-md',
          glow && 'shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]', // 👈 3. Masukkan styling Tailwind
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
```

Penggunaan:
```tsx
<Button variant="primary" glow>Tombol Bersinar</Button>
```

---

## Level 5: Kustomisasi Ukuran Default Komponen

Jika Anda ingin tombol ukuran `md` atau `lg` menjadi sedikit lebih besar atau memiliki padding yang lebih lega:

Buka `sizeClasses` di [`src/components/buttons/Button.tsx`](file:///Volumes/Data/Programming/tailwind/src/components/buttons/Button.tsx):

```tsx
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-xs px-2.5 py-1.5 min-h-[32px] gap-1.5',
  md: 'text-sm px-5 py-2.5 min-h-[42px] gap-2',     // 👈 Sesuaikan padding dan tinggi di sini
  lg: 'text-base px-6 py-3.5 min-h-[50px] gap-2.5', // 👈 Ukuran besar untuk tombol hero
};
```

---

## Level 6: Kustomisasi Mode Gelap (Dark Mode)

Seluruh komponen sudah memiliki selector `dark:` Tailwind bawaan:
- Background: `dark:bg-slate-800` / `dark:bg-slate-900`
- Teks: `dark:text-slate-100` / `dark:text-white`
- Border: `dark:border-slate-700`

Jika Anda ingin warna tema gelap yang berbeda (misalnya hitam pekat AMOLED `#000000` atau biru navy gelap):
1. Anda bisa menimpa langsung via `className`:
   ```tsx
   <Card className="dark:bg-black dark:border-zinc-800">
   ```
2. Atau sesuaikan warna latar belakang di `index.html` dan `index.css`:
   ```css
   @layer base {
     .dark body {
       background-color: #0b0f19; /* Navy gelap */
       color: #f8fafc;
     }
   }
   ```

---

## 📌 Rangkuman

| Kebutuhan Anda | Solusi Terbaik |
| :--- | :--- |
| **Kustomisasi satu tombol / kartu saja** | Gunakan `className="..."` langsung pada komponen (didukung auto-override `tailwind-merge`). |
| **Mengubah warna tema seluruh website** | Ubah palet warna `bs.primary` di `tailwind.config.js`. |
| **Menambah varian baru permanen** | Buka berkas komponen terkait dan tambahkan tipe serta class di `variantClasses`. |
| **Menambah fitur/perilaku baru** | Tambahkan prop baru pada interface komponen. |

Panduan ini tersimpan langsung di file [PANDUAN_INSTALLASI_DAN_KUSTOMISASI.md](file:///Volumes/Data/Programming/tailwind/PANDUAN_INSTALLASI_DAN_KUSTOMISASI.md).
