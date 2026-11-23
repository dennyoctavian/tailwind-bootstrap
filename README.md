# React Bootstrap Tailwind UI (100% Bootstrap 5 Complete & Responsive)

Proyek React + TypeScript modern dengan kumpulan **SELURUH komponen standar Bootstrap 5** yang dibangun menggunakan utility styling dari **Tailwind CSS**. Setiap komponen dirancang dengan prinsip **Mobile-First Responsive Design** agar tampil rapi dan nyaman digunakan di smartphone, tablet, maupun layar desktop lebar.

---

## 🚀 Memulai Proyek

### 1. Jalankan Development Server
```bash
npm run dev
```
Akses di browser: `http://localhost:3000`

### 2. Build untuk Produksi
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

## 📱 Fitur Responsivitas Utama

1. **Pendekatan Mobile-First:** Semua elemen menggunakan span 12 kolom secara default di ponsel (`xs`) dan secara proporsional membagi kolom pada layar tablet (`sm`/`md`) dan desktop (`lg`/`xl`).
2. **Carousel Touch Swipe:** Slider gambar mendukung gesekan jari (*touch swipe*) langsung di smartphone.
3. **Modal Layar Penuh di HP:** Melalui properti `fullscreenSmDown`, jendela dialog akan membuka layar penuh di smartphone untuk keterbacaan optimal.
4. **Offcanvas Drawer:** Menu samping untuk kenyamanan navigasi satu tangan di perangkat mobile.
5. **Tabel Horizontal Scroll:** Mencegah kolom tabel menghimpit atau merusak tata letak di layar kecil.
6. **Tabs Horizontal Swipe:** Tabulasi dapat digeser ke samping jika judul tab melebihi lebar layar.

---

## 📦 Impor Komponen

Semua komponen dapat diimpor langsung dari `src/components`:

```tsx
import {
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
  Table,
  ProgressBar, Spinner,
  Tabs,
  Toast, ToastContainer, useToast
} from './components';
```
