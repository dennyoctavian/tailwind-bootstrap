# React Bootstrap + Ant Design Hybrid UI (Tailwind CSS)

[![GitHub Repo](https://img.shields.io/badge/GitHub-dennyoctavian%2Ftailwind--bootstrap-blue?logo=github)](https://github.com/dennyoctavian/tailwind-bootstrap)

Proyek React + TypeScript modern yang memadukan **100% komponen standar Bootstrap 5** dengan komponen **Enterprise Ant Design (AntD)** yang tidak ada di Bootstrap, dibangun secara murni menggunakan utility styling dari **Tailwind CSS**.

Kombinasi ini menghasilkan UI Kit yang sangat tangguh: kemudahan layout responsif dan form dari Bootstrap berpadu sempurna dengan fitur dashboard enterprise, alur multi-langkah, dan audit trail dari Ant Design.

👉 **[Baca Panduan Lengkap Instalasi & Kustomisasi Komponen (PANDUAN_INSTALLASI_DAN_KUSTOMISASI.md)](./PANDUAN_INSTALLASI_DAN_KUSTOMISASI.md)**

---

## 🚀 Memulai Proyek

### 1. Clone & Jalankan Development Server
```bash
git clone https://github.com/dennyoctavian/tailwind-bootstrap.git
cd tailwind-bootstrap
npm install
npm run dev
```
Akses web dokumentasi interaktif di browser: `http://localhost:3000` atau `http://localhost:3001`

### 2. Memasang di Proyek Lain via GitHub
```bash
npm install github:dennyoctavian/tailwind-bootstrap
```

### 3. Build untuk Produksi
```bash
npm run build
```

---

## 📋 Checklist Seluruh Komponen Bootstrap 5

Proyek ini telah mencakup **100% komponen resmi Bootstrap 5**:

| No | Komponen Bootstrap 5 | Komponen di Proyek Ini | Status | Fitur Responsif |
|:---|:---|:---|:---:|:---|
| 1 | **Accordion** | `Accordion`, `Accordion.Item`, `Accordion.Header`, `Accordion.Body` | ✅ Lengkap | Animasi chevron, flush mode, always open |
| 2 | **Alerts** | `Alert`, `Alert.Heading`, `Alert.Link` | ✅ Lengkap | Dismissible, auto-hide, ikon kontekstual |
| 3 | **Badge** | `Badge` | ✅ Lengkap | Pill badge, status dot online/offline, icon |
| 4 | **Breadcrumb** | `Breadcrumb`, `Breadcrumb.Item` | ✅ Lengkap | Wrap fleksibel di layar kecil |
| 5 | **Buttons** | `Button` | ✅ Lengkap | Solid & outline variants, size sm/md/lg, pill, loading state |
| 6 | **Button group** | `ButtonGroup` | ✅ Lengkap | Horizontal & vertical |
| 7 | **Card** | `Card`, `Card.Header`, `Card.Body`, `Card.Title`, `Card.Text`, `Card.Footer`, `Card.Img` | ✅ Lengkap | **Horizontal responsive** (`horizontal="md"`) |
| 8 | **Carousel** | `Carousel` | ✅ Lengkap | Image slider, touch swipe smartphone, autoplay, pause-on-hover |
| 9 | **Close button** | `CloseButton` | ✅ Lengkap | Standalone close button putih & dark |
| 10 | **Collapse** | Terintegrasi di Accordion & Navbar | ✅ Lengkap | Smooth height collapse |
| 11 | **Dropdowns** | `Dropdown`, `Dropdown.Toggle`, `Dropdown.Menu`, `Dropdown.Item`, `Dropdown.Divider` | ✅ Lengkap | Click-outside close, ESC key, align start/end |
| 12 | **List group** | `ListGroup`, `ListGroup.Item` | ✅ Lengkap | Flush, horizontal responsive, badges, action hover |
| 13 | **Modal** | `Modal`, `Modal.Header`, `Modal.Title`, `Modal.Body`, `Modal.Footer` | ✅ Lengkap | **`fullscreenSmDown`** (layar penuh di HP, modal di desktop), ESC key, backdrop lock |
| 14 | **Navs & tabs** | `Nav`, `Nav.Link`, `Nav.Item`, `Tabs`, `Tabs.Tab` | ✅ Lengkap | Pills, underline, tabs klasik, horizontal scroll di HP |
| 15 | **Navbar** | `Navbar`, `Navbar.Brand`, `Navbar.Toggle`, `Navbar.Collapse` | ✅ Lengkap | Hamburger animasi, auto collapsible di bawah breakpoint |
| 16 | **Offcanvas** | `Offcanvas`, `Offcanvas.Header`, `Offcanvas.Title`, `Offcanvas.Body` | ✅ Lengkap | Slide drawer start/end/top/bottom untuk navigasi mobile |
| 17 | **Pagination** | `Pagination` | ✅ Lengkap | Touch friendly target, truncate ellipsis |
| 18 | **Placeholders** | `Placeholder` | ✅ Lengkap | Skeleton loading (glow & wave animation), berbagai ukuran |
| 19 | **Popovers** | `Popover` | ✅ Lengkap | Popup judul & konten saat tombol diklik, auto-dismiss |
| 20 | **Progress** | `ProgressBar` | ✅ Lengkap | Striped animasi, label persentase, varian warna |
| 21 | **Spinners** | `Spinner` | ✅ Lengkap | Border spinner & grow spinner, ukuran sm/md/lg |
| 22 | **Toasts** | `Toast`, `ToastContainer`, `useToast` | ✅ Lengkap | Auto-close timer, penempatan pojok layar, hook global |
| 23 | **Tooltips** | `Tooltip` | ✅ Lengkap | Hover & focus tooltip dengan panah penunjuk (top, bottom, left, right) |
| 24 | **Form Controls** | `FormControl`, `FormGroup`, `FormLabel` | ✅ Lengkap | Input text, email, textarea, status validasi error/sukses |
| 25 | **Form Select** | `FormSelect` | ✅ Lengkap | Custom styled select dengan chevron |
| 26 | **Checks & radios** | `FormCheck` | ✅ Lengkap | Checkbox & radio button bergaya modern |
| 27 | **Form Range** | `FormRange` | ✅ Lengkap | Slider rentang nilai dengan display label nilai |
| 28 | **Form Switch** | `FormSwitch` | ✅ Lengkap | Toggle switch modern gaya iOS |
| 29 | **Floating labels** | `FloatingLabel` | ✅ Lengkap | Animasi label mengambang halus saat input fokus/terisi |
| 30 | **Input group** | `InputGroup`, `InputGroup.Text` | ✅ Lengkap | Prepend & append teks/ikon/tombol |
| 31 | **Layout & Grid** | `Container`, `Row`, `Col` | ✅ Lengkap | Sistem 12 kolom mobile-first (xs, sm, md, lg, xl) |
| 32 | **Tables** | `Table` | ✅ Lengkap | Striped, bordered, hover, **horizontal scroll wrapper** |

---

## ⚡ Tambahan Komponen Ant Design (AntD Hybrid)

Untuk melengkapi keterbatasan Bootstrap dalam kebutuhan aplikasi enterprise dan dashboard modern, proyek ini menambahkan **10 komponen unggulan dari Ant Design**:

| No | Komponen Ant Design | Komponen di Proyek Ini | Keunggulan Dibandingkan Bootstrap |
|:---|:---|:---|:---|
| 1 | **Steps** | `Steps` | Alur pendaftaran multi-langkah (*wizard*) interaktif dengan status tunggu/proses/selesai/error responsif. |
| 2 | **Timeline** | `Timeline`, `Timeline.Item` | Pelacakan kronologis pengiriman ekspedisi, riwayat tiket support, dan audit log sistem. |
| 3 | **Statistic** | `Statistic` | Kartu indikator KPI dashboard dengan badge tren kenaikan/penurunan hijau/merah, prefix mata uang, dan presisi desimal. |
| 4 | **Rate** | `Rate` | Sistem penilaian bintang 5 interaktif dengan tooltip umpan balik skor realtime. |
| 5 | **Avatar & Group** | `Avatar`, `Avatar.Group` | Foto profil inisial otomatis dengan titik status aktif (online/busy/away) dan susunan tumpuk +extra counter. |
| 6 | **Tag** | `Tag` | Label kategori warna-warni lembut dengan dukungan tombol hapus (*closable*) dan filter interaktif (*checkable*). |
| 7 | **Segmented** | `Segmented` | Kontrol geser bergaya pil (*sliding toggle*) alternatif yang jauh lebih ringkas dari tabs atau radio button. |
| 8 | **Divider** | `Divider` | Garis pemisah dengan teks judul di posisi kiri, tengah, atau kanan, serta garis putus-putus (*dashed*). |
| 9 | **Empty** | `Empty` | Ilustrasi status data kosong yang informatif lengkap dengan tombol aksi (*call to action*). |
| 10 | **Result** | `Result` | Layar konfirmasi transaksi sukses, halaman galat 404, 403, 500, dan peringatan dengan tombol navigasi. |

---

## 📱 Fitur Responsivitas Utama

1. **Pendekatan Mobile-First:** Semua elemen menggunakan span 12 kolom secara default di ponsel (`xs`) dan secara proporsional membagi kolom pada layar tablet (`sm`/`md`) dan desktop (`lg`/`xl`).
2. **Carousel Touch Swipe:** Slider gambar mendukung gesekan jari (*touch swipe*) langsung di smartphone.
3. **Modal Layar Penuh di HP:** Melalui properti `fullscreenSmDown`, jendela dialog akan membuka layar penuh di smartphone untuk keterbacaan optimal.
4. **Offcanvas Drawer:** Menu samping untuk kenyamanan navigasi satu tangan di perangkat mobile.
5. **Tabel Horizontal Scroll:** Mencegah kolom tabel menghimpit atau merusak tata letak di layar kecil.
6. **Tabs Horizontal Swipe:** Tabulasi dapat digeser ke samping jika judul tab melebihi lebar layar.
7. **Steps Responsive Mode:** Otomatis berubah dari orientasi horizontal ke orientasi tumpuk vertikal di layar smartphone.

---

## 📦 Impor Komponen

Semua komponen dapat diimpor langsung dari paket `react-bootstrap-tailwind-ui` (atau `./src/components`):

```tsx
import {
  // Bootstrap Standard Components
  Container, Row, Col,
  Button, ButtonGroup, CloseButton,
  Badge, Alert,
  Card,
  Navbar, Nav, Breadcrumb, Pagination,
  Modal, Offcanvas,
  Carousel, ListGroup,
  Tooltip, Popover, Placeholder,
  Accordion, Dropdown,
  FormGroup, FormLabel, FormControl, FormSelect, FormCheck, FormSwitch, InputGroup, FloatingLabel, FormRange,
  Table, ProgressBar, Spinner,
  Tabs,
  Toast, ToastContainer, useToast,

  // Ant Design Hybrid (Enterprise Components)
  Steps,
  Timeline,
  Statistic,
  Rate,
  Avatar,
  Tag,
  Segmented,
  Divider,
  Empty,
  Result
} from 'react-bootstrap-tailwind-ui';
```
