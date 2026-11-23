import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  CloseButton,
  Badge,
  Alert,
  Card,
  Navbar,
  Nav,
  Breadcrumb,
  Pagination,
  Modal,
  Offcanvas,
  Accordion,
  Dropdown,
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  FormCheck,
  FormSwitch,
  InputGroup,
  FloatingLabel,
  FormRange,
  Table,
  ProgressBar,
  Spinner,
  Tabs,
  Toast,
  ToastContainer,
  useToast,
  Carousel,
  ListGroup,
  Tooltip,
  Popover,
  Placeholder,
  CodePreview,
} from './components';

import {
  Smartphone,
  Tablet,
  Monitor,
  Moon,
  Sun,
  LayoutGrid,
  CheckCircle,
  Bell,
  Sliders,
  Send,
  Layers,
  Shield,
  HelpCircle,
  Menu,
  Images,
  List,
  MessageSquare,
  BookOpen,
} from 'lucide-react';

export default function App() {
  // Check if loaded inside simulator iframe
  const isPreview = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('preview') !== null;

  // Device viewport simulator state: 'fluid' | 'mobile' (375px) | 'tablet' (768px)
  const [deviceView, setDeviceView] = useState<'fluid' | 'mobile' | 'tablet'>('fluid');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  // Active section for showcase
  const [activeSection, setActiveSection] = useState('overview');

  // Modal & Offcanvas demo states
  const [showModal, setShowModal] = useState(false);
  const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'fullscreen'>('md');
  const modalFullscreenSm = true;
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(2);

  // Range slider state
  const [rangeVal, setRangeVal] = useState(65);

  // Toast hook
  const { toasts, addToast, removeToast } = useToast();

  // Form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formAgree, setFormAgree] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const carouselItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      title: 'Desain Responsif Terdepan',
      caption: 'Menyesuaikan tampilan secara cerdas di ponsel, tablet, laptop, dan monitor ultra-wide.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      title: 'Performa Tinggi & Ringan',
      caption: 'Dibangun di atas Vite dan React dengan utilitas styling Tailwind CSS murni.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      title: 'Standar Komponen Bootstrap 5',
      caption: 'API yang familier: Button, Card, Modal, Offcanvas, Accordion, hingga Popover.',
    },
  ];

  const docNavGroups = [
    {
      title: 'Memulai',
      links: [
        { id: 'overview', label: 'Pengantar & Instalasi', icon: <BookOpen className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Tata Letak (Layout)',
      links: [
        { id: 'grid', label: 'Grid & Kolom', icon: <LayoutGrid className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Konten & Media',
      links: [
        { id: 'carousel', label: 'Carousel', icon: <Images className="w-4 h-4" /> },
        { id: 'cards', label: 'Card (Kartu)', icon: <Layers className="w-4 h-4" /> },
        { id: 'table', label: 'Tabel', icon: <LayoutGrid className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Formulir (Forms)',
      links: [
        { id: 'forms', label: 'Form Controls & Inputs', icon: <Send className="w-4 h-4" /> },
        { id: 'floating-labels', label: 'Floating Labels', icon: <Send className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Komponen (Components)',
      links: [
        { id: 'buttons', label: 'Buttons & Group', icon: <CheckCircle className="w-4 h-4" /> },
        { id: 'badges-alerts', label: 'Badges & Alerts', icon: <Bell className="w-4 h-4" /> },
        { id: 'list-group', label: 'List Group', icon: <List className="w-4 h-4" /> },
        { id: 'navbar', label: 'Navbar & Navigasi', icon: <Menu className="w-4 h-4" /> },
        { id: 'modal-offcanvas', label: 'Modal & Offcanvas', icon: <Sliders className="w-4 h-4" /> },
        { id: 'tooltips-popovers', label: 'Tooltips & Popovers', icon: <MessageSquare className="w-4 h-4" /> },
        { id: 'accordion-dropdown', label: 'Accordion & Dropdown', icon: <HelpCircle className="w-4 h-4" /> },
        { id: 'placeholders', label: 'Placeholders (Skeleton)', icon: <Layers className="w-4 h-4" /> },
        { id: 'progress-spinners', label: 'Progress & Spinners', icon: <Sliders className="w-4 h-4" /> },
      ],
    },
  ];

  // MAIN PAGE CONTENT COMPONENT
  const MainContent = () => (
    <div className="w-full">
      {/* BOOTSTRAP DOCS STYLE HEADER NAVBAR */}
      <Navbar expand="lg" theme={darkMode ? 'dark' : 'light'} sticky="top" className="border-b border-slate-200 dark:border-slate-800">
        <Navbar.Brand href="#">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg shadow-sm">
            <Layers className="w-5 h-5 inline-block" />
          </span>
          <span className="font-extrabold tracking-tight">Bootstrap React</span>
          <span className="text-xs bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-mono ml-1">
            v5.3 UI
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav navbar className="mr-auto my-2 lg:my-0">
            <Nav.Link inNavbar href="#overview" active>Dokumentasi</Nav.Link>
            <Nav.Link inNavbar href="#grid">Layout</Nav.Link>
            <Nav.Link inNavbar href="#buttons">Komponen</Nav.Link>
            <Nav.Link inNavbar href="#forms">Form</Nav.Link>
          </Nav>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-3 lg:pt-0 w-full lg:w-auto border-t lg:border-t-0 border-slate-200 dark:border-slate-700">
            <Button
              variant="outline-primary"
              size="sm"
              block
              className="lg:w-auto"
              onClick={() => setShowOffcanvas(true)}
            >
              Menu Drawer
            </Button>
            <Button
              variant="primary"
              size="sm"
              block
              className="lg:w-auto"
              onClick={() => setShowModal(true)}
            >
              Buka Modal
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* MAIN BODY CONTAINER */}
      <Container className="py-4 sm:py-8 max-w-7xl">
        <Row gutter={4}>
          {/* SIDEBAR NAVIGATION (Mirroring Bootstrap Docs Left Nav) */}
          <Col xs={12} lg={3} className="mb-6 lg:mb-0">
            <div className="lg:sticky lg:top-20 space-y-4">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
                <div className="space-y-5 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-1">
                  {docNavGroups.map((group, gIdx) => (
                    <div key={gIdx}>
                      <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-2">
                        {group.title}
                      </h5>
                      <div className="space-y-0.5">
                        {group.links.map((link) => (
                          <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveSection(link.id);
                              const el = document.getElementById(link.id);
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                              activeSection === link.id
                                ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            <span className="text-slate-400">{link.icon}</span>
                            <span>{link.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Quick Drawer Button */}
              <div className="block lg:hidden">
                <Button
                  variant="outline-primary"
                  block
                  icon={<Sliders className="w-4 h-4 mr-2" />}
                  onClick={() => setShowOffcanvas(true)}
                >
                  Buka Menu Navigasi Lengkap
                </Button>
              </div>
            </div>
          </Col>

          {/* MAIN DOCUMENTATION CONTENT */}
          <Col xs={12} lg={9} className="space-y-12">

            {/* 1. OVERVIEW & GETTING STARTED */}
            <section id="overview" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
                <Badge variant="primary" pill className="mb-2">Dokumentasi Resmi</Badge>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                  Komponen Bootstrap di React
                </h1>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Dokumentasi lengkap komponen standar Bootstrap 5 yang diimplementasikan menggunakan React functional components dan styling utility-first dari Tailwind CSS. Setiap contoh di bawah dilengkapi kode sumber yang dapat langsung disalin (*copy-paste*) ke dalam proyek Anda.
                </p>
              </div>

              <CodePreview
                title="Cara Mengimpor Komponen"
                description="Semua komponen dapat diimpor langsung secara terpusat dari modul components:"
                code={`import {
  Container, Row, Col,
  Button, ButtonGroup, CloseButton,
  Badge, Alert,
  Card, Carousel,
  Navbar, Nav, Breadcrumb, Pagination,
  Modal, Offcanvas,
  ListGroup, Tooltip, Popover, Placeholder,
  Accordion, Dropdown,
  FormGroup, FormLabel, FormControl, FormSelect, FormCheck, FormSwitch, InputGroup, FloatingLabel, FormRange,
  Table, ProgressBar, Spinner, Tabs, Toast, ToastContainer, useToast
} from './components';`}
              >
                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-sm text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                  <Shield className="w-5 h-5 shrink-0" />
                  <span>
                    Siap digunakan dengan <strong>TypeScript penuh</strong>, autocomplete props, dan 100% responsif mobile-first.
                  </span>
                </div>
              </CodePreview>
            </section>

            {/* 2. GRID SYSTEM */}
            <section id="grid" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Grid & Layout</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Gunakan sistem grid 12 kolom responsif untuk menyusun tata letak berbagai perangkat.
                </p>
              </div>

              <CodePreview
                title="Sistem Grid Responsif"
                description="Kolom otomatis membesar dan mengecil sesuai breakpoint xs, sm, md, lg, xl:"
                code={`<Container>
  <Row gutter={3}>
    <Col xs={12} sm={6} lg={3}>Kolom 1</Col>
    <Col xs={12} sm={6} lg={3}>Kolom 2</Col>
    <Col xs={12} sm={6} lg={3}>Kolom 3</Col>
    <Col xs={12} sm={6} lg={3}>Kolom 4</Col>
  </Row>
</Container>`}
              >
                <Row gutter={3}>
                  {[1, 2, 3, 4].map((num) => (
                    <Col key={num} xs={12} sm={6} lg={3} className="mb-2 sm:mb-0">
                      <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-center">
                        <span className="font-bold text-blue-600 dark:text-blue-400 block text-sm">Kolom {num}</span>
                        <span className="text-[11px] text-slate-500">xs=12, sm=6, lg=3</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </CodePreview>
            </section>

            {/* 3. BUTTONS & BUTTON GROUP */}
            <section id="buttons" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Buttons (Tombol)</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Berbagai varian warna solid, outline, ukuran (sm, md, lg), status loading, dan tombol close.
                </p>
              </div>

              <CodePreview
                title="Varian Tombol Solid"
                description="Gunakan properti variant untuk memilih palet warna standar Bootstrap:"
                code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="light">Light</Button>
<Button variant="dark">Dark</Button>
<Button variant="link">Link</Button>`}
              >
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="info">Info</Button>
                  <Button variant="light">Light</Button>
                  <Button variant="dark">Dark</Button>
                  <Button variant="link">Link</Button>
                </div>
              </CodePreview>

              <CodePreview
                title="Varian Outline & Ukuran"
                description="Gunakan varian outline-* dan properti size (sm, md, lg), pill, serta loading spinner:"
                code={`<Button variant="outline-primary" size="sm">Small Outline</Button>
<Button variant="outline-success" size="md">Medium Outline</Button>
<Button variant="outline-danger" size="lg">Large Outline</Button>
<Button variant="primary" pill>Pill Button</Button>
<Button variant="primary" isLoading>Menyimpan...</Button>`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="outline-primary" size="sm">Small Outline</Button>
                  <Button variant="outline-success" size="md">Medium Outline</Button>
                  <Button variant="outline-danger" size="lg">Large Outline</Button>
                  <Button variant="primary" pill>Pill Button</Button>
                  <Button variant="primary" isLoading size="sm">Menyimpan...</Button>
                </div>
              </CodePreview>

              <CodePreview
                title="Button Group & Close Button"
                description="Pengelompokan beberapa tombol dan tombol Close mandiri:"
                code={`<ButtonGroup>
  <Button variant="outline-primary">Kiri</Button>
  <Button variant="outline-primary">Tengah</Button>
  <Button variant="outline-primary">Kanan</Button>
</ButtonGroup>

<CloseButton onClick={() => console.log('Ditutup')} />`}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <ButtonGroup>
                    <Button variant="outline-primary">Kiri</Button>
                    <Button variant="outline-primary">Tengah</Button>
                    <Button variant="outline-primary">Kanan</Button>
                  </ButtonGroup>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">Close Button:</span>
                    <CloseButton onClick={() => addToast({ message: 'Close Button ditekan', variant: 'secondary' })} />
                  </div>
                </div>
              </CodePreview>
            </section>

            {/* 4. BADGES & ALERTS */}
            <section id="badges-alerts" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Badges & Alerts</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Indikator status kecil dan kotak dialog notifikasi kontekstual.
                </p>
              </div>

              <CodePreview
                title="Badges"
                description="Status dot online/offline, varian pill, dan ukuran badge:"
                code={`<Badge variant="primary">Primary</Badge>
<Badge variant="success" dot pill>Online</Badge>
<Badge variant="danger" dot pill>Offline</Badge>
<Badge variant="warning" pill>Perhatian</Badge>
<Badge variant="info" size="lg">Besar (lg)</Badge>`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success" dot pill>Online</Badge>
                  <Badge variant="danger" dot pill>Offline</Badge>
                  <Badge variant="warning" pill>Perhatian</Badge>
                  <Badge variant="info" size="lg">Besar (lg)</Badge>
                </div>
              </CodePreview>

              <CodePreview
                title="Alerts (Kotak Notifikasi)"
                description="Mendukung tombol dismissible, heading, dan link:"
                code={`<Alert variant="primary" dismissible>
  <Alert.Heading>Pemberitahuan Sistem</Alert.Heading>
  Seluruh komponen Bootstrap telah aktif dan siap dipakai.
</Alert>

<Alert variant="success" dismissible>
  <strong>Berhasil!</strong> Data berhasil disimpan dengan aman.
</Alert>`}
              >
                <div className="space-y-3">
                  <Alert variant="primary" dismissible>
                    <Alert.Heading>Pemberitahuan Sistem</Alert.Heading>
                    Seluruh komponen Bootstrap telah aktif dan siap dipakai.
                  </Alert>

                  <Alert variant="success" dismissible>
                    <strong>Berhasil!</strong> Data berhasil disimpan dengan aman.
                  </Alert>
                </div>
              </CodePreview>
            </section>

            {/* 5. CAROUSEL */}
            <section id="carousel" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Carousel (Image Slider)</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Slideshow gambar dengan tombol next/prev, indikator titik, autoplay, dan dukungan gesekan swipe di smartphone.
                </p>
              </div>

              <CodePreview
                title="Carousel dengan Touch Gesture"
                description="Memberikan pengalaman mobile native dengan gesture sentuhan jari (swipe left/right):"
                code={`const items = [
  { id: 1, image: 'https://...', title: 'Slide 1', caption: 'Deskripsi slide 1' },
  { id: 2, image: 'https://...', title: 'Slide 2', caption: 'Deskripsi slide 2' },
];

<Carousel items={items} autoPlay interval={4000} controls indicators />`}
              >
                <Carousel items={carouselItems} />
              </CodePreview>
            </section>

            {/* 6. CARDS */}
            <section id="cards" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Card (Kartu)</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Kontainer modular untuk menampilkan informasi yang saling terkait dengan header, body, gambar, dan footer.
                </p>
              </div>

              <CodePreview
                title="Card Vertikal & Horizontal Responsif"
                description="Mode horizontal='md' menumpuk gambar di atas pada smartphone dan memindahkannya ke samping pada tablet/desktop:"
                code={`{/* Card Vertikal Standar */}
<Card hoverable>
  <Card.Img src="https://..." alt="Preview" />
  <Card.Body>
    <Card.Title>Judul Kartu</Card.Title>
    <Card.Text>Deskripsi kartu singkat.</Card.Text>
    <Button variant="primary" size="sm">Aksi</Button>
  </Card.Body>
</Card>

{/* Card Horizontal Responsif */}
<Card horizontal="md" hoverable>
  <div className="md:w-5/12 shrink-0">
    <img src="https://..." alt="Preview" className="w-full h-full object-cover" />
  </div>
  <Card.Body>
    <Card.Title>Layout Horizontal di Desktop</Card.Title>
    <Card.Text>Gambar berada di samping pada layar lebar.</Card.Text>
  </Card.Body>
</Card>`}
              >
                <Row gutter={4}>
                  <Col xs={12} md={6}>
                    <Card hoverable className="h-full border border-slate-200 dark:border-slate-800">
                      <Card.Img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
                        alt="Code editor preview"
                      />
                      <Card.Body>
                        <Card.Title>Komponen React Modern</Card.Title>
                        <Card.Text>
                          Komponen dibuat menggunakan React functional components dengan TypeScript penuh.
                        </Card.Text>
                        <Button variant="primary" size="sm">Jelajahi Modul</Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} md={6}>
                    <Card horizontal="md" hoverable className="h-full border border-slate-200 dark:border-slate-800">
                      <div className="md:w-5/12 shrink-0 bg-slate-100 dark:bg-slate-800">
                        <img
                          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
                          alt="Technology"
                          className="w-full h-40 md:h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <Card.Body>
                          <Badge variant="success" size="sm" className="mb-2">Horizontal Card</Badge>
                          <Card.Title>Layout Horizontal</Card.Title>
                          <Card.Text>
                            Tumpuk vertikal di smartphone, dan gambar berpindah otomatis ke samping di tablet/desktop.
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </CodePreview>
            </section>

            {/* 7. LIST GROUP */}
            <section id="list-group" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">List Group</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Komponen fleksibel untuk menampilkan deretan konten berurutan.
                </p>
              </div>

              <CodePreview
                title="List Group dengan Action & Badge"
                description="Mendukung varian flush, active, disabled, dan action hover:"
                code={`<ListGroup>
  <ListGroup.Item active>
    <span>Inbox Pesan Masuk</span>
    <Badge variant="light" pill>14</Badge>
  </ListGroup.Item>
  <ListGroup.Item action onClick={() => alert('Item diklik')}>
    <span>Draft Tersimpan</span>
    <Badge variant="primary" pill>2</Badge>
  </ListGroup.Item>
  <ListGroup.Item disabled>
    <span>Item Dinonaktifkan</span>
  </ListGroup.Item>
</ListGroup>`}
              >
                <Row gutter={4}>
                  <Col xs={12} md={6}>
                    <ListGroup>
                      <ListGroup.Item active>
                        <span>Inbox Pesan Masuk</span>
                        <Badge variant="light" pill>14</Badge>
                      </ListGroup.Item>
                      <ListGroup.Item action onClick={() => addToast({ message: 'Draft dibuka', variant: 'info' })}>
                        <span>Draft Tersimpan</span>
                        <Badge variant="primary" pill>2</Badge>
                      </ListGroup.Item>
                      <ListGroup.Item disabled>
                        <span>Arsip Lama (Terkunci)</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>

                  <Col xs={12} md={6}>
                    <ListGroup flush>
                      <ListGroup.Item variant="success">Item Berstatus Sukses</ListGroup.Item>
                      <ListGroup.Item variant="warning">Item Berstatus Peringatan</ListGroup.Item>
                      <ListGroup.Item variant="danger">Item Berstatus Bahaya</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </CodePreview>
            </section>

            {/* 8. NAVBAR & NAVS */}
            <section id="navbar" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Navbar, Tabs & Pagination</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Elemen navigasi utama website yang secara otomatis menciut ke hamburger di layar sempit.
                </p>
              </div>

              <CodePreview
                title="Navbar Responsif"
                description="Otomatis menciutkan menu navigasi ke tombol hamburger saat lebar layar di bawah breakpoint expand='lg':"
                code={`<Navbar expand="lg" theme="light">
  <Navbar.Brand href="#">Brand Saya</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Nav navbar className="mr-auto">
      <Nav.Link inNavbar href="#home" active>Beranda</Nav.Link>
      <Nav.Link inNavbar href="#features">Fitur</Nav.Link>
    </Nav>
    <Button variant="primary" size="sm">Masuk</Button>
  </Navbar.Collapse>
</Navbar>`}
              >
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300">
                  Lihat navbar utama di bagian atas halaman ini untuk melihat implementasi langsung secara live!
                </div>
              </CodePreview>

              <CodePreview
                title="Breadcrumb & Pagination"
                description="Navigasi hierarki lokasi halaman dan kontrol paginasi nomor halaman:"
                code={`<Breadcrumb>
  <Breadcrumb.Item href="#">Beranda</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Komponen</Breadcrumb.Item>
  <Breadcrumb.Item active>Halaman Aktif</Breadcrumb.Item>
</Breadcrumb>

<Pagination currentPage={1} totalPages={10} onPageChange={(p) => setPage(p)} />`}
              >
                <div className="space-y-4">
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Beranda</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Komponen</Breadcrumb.Item>
                    <Breadcrumb.Item active>Halaman Aktif</Breadcrumb.Item>
                  </Breadcrumb>

                  <Pagination
                    currentPage={currentPage}
                    totalPages={10}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                </div>
              </CodePreview>

              <CodePreview
                title="Tabs Interaktif"
                description="Tabulasi dengan varian pills/tabs dan tabpanel aktif:"
                code={`<Tabs defaultActiveKey="tab1" variant="pills">
  <Tabs.Tab eventKey="tab1" title="Tab Desain">Konten Desain</Tabs.Tab>
  <Tabs.Tab eventKey="tab2" title="Tab Responsif">Konten Responsif</Tabs.Tab>
</Tabs>`}
              >
                <Tabs defaultActiveKey="tab1" variant="pills">
                  <Tabs.Tab eventKey="tab1" title="Tab Desain" icon={<Layers className="w-4 h-4" />}>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Menggunakan palet warna Bootstrap 5 yang dimodernisasi dengan utility Tailwind CSS.
                    </div>
                  </Tabs.Tab>
                  <Tabs.Tab eventKey="tab2" title="Tab Responsif" icon={<Smartphone className="w-4 h-4" />}>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Setiap tab dapat digulir (*scrollable*) tanpa memecah susunan tata letak pada ponsel.
                    </div>
                  </Tabs.Tab>
                </Tabs>
              </CodePreview>
            </section>

            {/* 9. MODALS & OFFCANVAS */}
            <section id="modal-offcanvas" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Modal & Offcanvas (Drawer)</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Dialog overlay dengan dukungan fullscreen otomatis di smartphone dan panel drawer samping.
                </p>
              </div>

              <CodePreview
                title="Modal dengan fullscreenSmDown"
                description="Pada ponsel modal otomatis menjadi layar penuh (fullscreen sheet), dan di desktop menjadi jendela dialog terpusat:"
                code={`<Modal show={showModal} onClose={() => setShowModal(false)} fullscreenSmDown>
  <Modal.Header onClose={() => setShowModal(false)}>
    <Modal.Title>Judul Modal</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Isi konten modal responsif.
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowModal(false)}>Tutup</Button>
    <Button variant="primary">Simpan</Button>
  </Modal.Footer>
</Modal>`}
              >
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button variant="primary" onClick={() => { setModalSize('md'); setShowModal(true); }}>
                    Buka Live Modal
                  </Button>
                  <Button variant="success" onClick={() => setShowOffcanvas(true)}>
                    Buka Offcanvas Drawer
                  </Button>
                </div>
              </CodePreview>

              {/* LIVE MODAL */}
              <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                size={modalSize}
                fullscreenSmDown={modalFullscreenSm}
              >
                <Modal.Header onClose={() => setShowModal(false)}>
                  <Modal.Title>Modal Dialog Responsif</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Pada perangkat mobile, modal ini otomatis beralih menjadi <strong>fullscreen sheet dialog</strong> yang sangat nyaman untuk layar sentuh ponsel.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" size="sm" onClick={() => setShowModal(false)}>
                    Tutup
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setShowModal(false);
                      addToast({
                        title: 'Aksi Berhasil',
                        message: 'Perubahan pada modal telah dikonfirmasi!',
                        variant: 'success',
                      });
                    }}
                  >
                    Konfirmasi
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* LIVE OFFCANVAS */}
              <Offcanvas
                show={showOffcanvas}
                onClose={() => setShowOffcanvas(false)}
                placement="start"
              >
                <Offcanvas.Header onClose={() => setShowOffcanvas(false)}>
                  <Offcanvas.Title>Menu Drawer Responsif</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p className="text-sm mb-4">
                    Drawer Offcanvas sempurna untuk navigasi mobile dan filter katalog produk.
                  </p>
                  <Button variant="primary" block onClick={() => setShowOffcanvas(false)}>
                    Tutup Drawer
                  </Button>
                </Offcanvas.Body>
              </Offcanvas>
            </section>

            {/* 10. TOOLTIPS & POPOVERS */}
            <section id="tooltips-popovers" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Tooltips & Popovers</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Balon petunjuk saat kursor hover / fokus, dan popover popup dengan judul saat tombol diklik.
                </p>
              </div>

              <CodePreview
                title="Tooltips & Popovers"
                description="Mendukung penempatan di top, bottom, left, dan right:"
                code={`{/* Tooltip pada saat hover */}
<Tooltip content="Tooltip di atas!" placement="top">
  <Button variant="secondary" size="sm">Arahkan Kursor</Button>
</Tooltip>

{/* Popover pada saat diklik */}
<Popover title="Judul Popover" content="Isi deskripsi popup." placement="top">
  <Button variant="outline-primary" size="sm">Klik Popover</Button>
</Popover>`}
              >
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-slate-500 block mb-2 font-medium">Tooltips (Arahkan Kursor):</span>
                    <div className="flex flex-wrap items-center gap-3">
                      <Tooltip content="Tooltip di atas!" placement="top">
                        <Button variant="secondary" size="sm">Tooltip Top</Button>
                      </Tooltip>
                      <Tooltip content="Tooltip di bawah!" placement="bottom">
                        <Button variant="secondary" size="sm">Tooltip Bottom</Button>
                      </Tooltip>
                      <Tooltip content="Tooltip di kiri!" placement="left">
                        <Button variant="secondary" size="sm">Tooltip Left</Button>
                      </Tooltip>
                      <Tooltip content="Tooltip di kanan!" placement="right">
                        <Button variant="secondary" size="sm">Tooltip Right</Button>
                      </Tooltip>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs text-slate-500 block mb-2 font-medium">Popovers (Klik untuk membuka):</span>
                    <div className="flex flex-wrap items-center gap-3">
                      <Popover
                        title="Informasi Popover"
                        content="Ini adalah konten popover yang muncul saat tombol diklik. Klik di luar untuk menutup."
                        placement="top"
                      >
                        <Button variant="outline-primary" size="sm">Popover Top</Button>
                      </Popover>

                      <Popover
                        title="Panduan Cepat"
                        content="Dapat disematkan berbagai petunjuk dan opsi interaktif."
                        placement="bottom"
                      >
                        <Button variant="outline-success" size="sm">Popover Bottom</Button>
                      </Popover>
                    </div>
                  </div>
                </div>
              </CodePreview>
            </section>

            {/* 11. FORMS & FLOATING LABELS */}
            <section id="forms" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Formulir & Kontrol Validasi</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Kontrol formulir lengkap dengan status validasi, select, switch, range slider, dan floating labels.
                </p>
              </div>

              <CodePreview
                title="Formulir dengan Validasi & Status"
                description="Status validasi isInvalid dan isValid dengan pesan error otomatis:"
                code={`<FormGroup>
  <FormLabel required>Alamat Email</FormLabel>
  <FormControl
    type="email"
    placeholder="nama@domain.com"
    isInvalid={hasError}
    isValid={isSuccess}
    errorMessage="Email tidak valid!"
  />
</FormGroup>

<FormSwitch label="Aktifkan notifikasi otomatis" defaultChecked />
<FormRange label="Volume Suara" showValue value={65} />`}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                    if (formName && formEmail && formAgree) {
                      addToast({
                        title: 'Formulir Berhasil Dikirim',
                        message: `Terima kasih, ${formName}! Data telah tervalidasi.`,
                        variant: 'success',
                      });
                    }
                  }}
                >
                  <Row gutter={3}>
                    <Col xs={12} md={6}>
                      <FormGroup>
                        <FormLabel required>Nama Lengkap</FormLabel>
                        <FormControl
                          type="text"
                          placeholder="Nama Lengkap Anda"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          isInvalid={formSubmitted && !formName}
                          isValid={formSubmitted && Boolean(formName)}
                          errorMessage="Nama lengkap wajib diisi!"
                        />
                      </FormGroup>
                    </Col>

                    <Col xs={12} md={6}>
                      <FormGroup>
                        <FormLabel required>Alamat Email</FormLabel>
                        <FormControl
                          type="email"
                          placeholder="contoh@domain.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          isInvalid={formSubmitted && !formEmail}
                          isValid={formSubmitted && Boolean(formEmail)}
                          errorMessage="Alamat email wajib diisi!"
                        />
                      </FormGroup>
                    </Col>

                    <Col xs={12} md={6}>
                      <FormGroup>
                        <FormLabel>Pekerjaan / Bidang</FormLabel>
                        <FormSelect defaultValue="frontend">
                          <option value="frontend">Frontend Developer</option>
                          <option value="backend">Backend Developer</option>
                          <option value="fullstack">Fullstack Engineer</option>
                        </FormSelect>
                      </FormGroup>
                    </Col>

                    <Col xs={12} md={6}>
                      <FormGroup>
                        <FormLabel>Username (Input Group)</FormLabel>
                        <InputGroup>
                          <InputGroup.Text>@</InputGroup.Text>
                          <FormControl placeholder="username_anda" />
                        </InputGroup>
                      </FormGroup>
                    </Col>

                    <Col xs={12}>
                      <FormGroup>
                        <FormRange
                          label="Tingkat Kemampuan / Pengalaman:"
                          showValue
                          value={rangeVal}
                          onChange={(e) => setRangeVal(Number(e.target.value))}
                        />
                      </FormGroup>
                    </Col>

                    <Col xs={12} className="space-y-3 pt-2">
                      <FormCheck
                        type="checkbox"
                        label="Saya menyetujui syarat & ketentuan layanan"
                        checked={formAgree}
                        onChange={(e) => setFormAgree(e.target.checked)}
                      />
                      <FormSwitch
                        label="Aktifkan notifikasi email otomatis"
                        defaultChecked
                      />
                    </Col>

                    <Col xs={12} className="pt-3">
                      <Button type="submit" variant="primary" size="md" block className="sm:w-auto">
                        Kirim Formulir Pendaftaran
                      </Button>
                    </Col>
                  </Row>
                </form>
              </CodePreview>

              <CodePreview
                title="Floating Labels"
                description="Label yang secara otomatis mengambang ke atas saat input terisi atau difokuskan:"
                code={`<FloatingLabel
  label="Alamat Email (Floating Label)"
  type="email"
  placeholder="name@example.com"
/>`}
              >
                <div className="max-w-md">
                  <FloatingLabel
                    label="Alamat Email (Floating Label)"
                    type="email"
                    placeholder="nama@domain.com"
                  />
                </div>
              </CodePreview>
            </section>

            {/* 12. TABLES */}
            <section id="table" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Tabel Responsif</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Tabel data dengan scrollbar horizontal otomatis pada layar kecil agar kolom tidak terhimpit.
                </p>
              </div>

              <CodePreview
                title="Tabel dengan Horizontal Scroll"
                description="Properti responsive memastikan tabel aman dan rapi di semua ukuran layar ponsel:"
                code={`<Table striped hover responsive>
  <thead>
    <tr>
      <th># ID</th>
      <th>Nama Pengguna</th>
      <th>Status</th>
      <th>Progres</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#101</td>
      <td>Denny Octavian</td>
      <td><Badge variant="success" dot pill>Aktif</Badge></td>
      <td><ProgressBar value={85} variant="success" label /></td>
    </tr>
  </tbody>
</Table>`}
              >
                <Table striped hover responsive>
                  <thead>
                    <tr>
                      <th># ID</th>
                      <th>Nama Pengguna</th>
                      <th>Peran / Role</th>
                      <th>Status Akun</th>
                      <th>Progres Tugas</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-mono text-xs">#USR-101</td>
                      <td className="font-medium text-slate-900 dark:text-white">Denny Octavian</td>
                      <td>Software Architect</td>
                      <td><Badge variant="success" dot pill>Aktif</Badge></td>
                      <td><ProgressBar value={85} variant="success" label height="0.65rem" /></td>
                      <td><Button variant="outline-primary" size="sm">Detail</Button></td>
                    </tr>
                    <tr>
                      <td className="font-mono text-xs">#USR-102</td>
                      <td className="font-medium text-slate-900 dark:text-white">Sarah Jenkins</td>
                      <td>Product Designer</td>
                      <td><Badge variant="primary" dot pill>Online</Badge></td>
                      <td><ProgressBar value={60} variant="primary" label height="0.65rem" /></td>
                      <td><Button variant="outline-primary" size="sm">Detail</Button></td>
                    </tr>
                  </tbody>
                </Table>
              </CodePreview>
            </section>

            {/* 13. ACCORDION & DROPDOWNS */}
            <section id="accordion-dropdown" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Accordion & Dropdown</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Panel lipat tanya jawab (FAQ) dan menu sembulan yang otomatis tertutup jika klik di luar.
                </p>
              </div>

              <CodePreview
                title="Accordion & Dropdown Menu"
                description="Mendukung multi-open (alwaysOpen), flush mode, dan deteksi click-outside:"
                code={`<Accordion defaultActiveKey="acc-1">
  <Accordion.Item eventKey="acc-1">
    <Accordion.Header>Pertanyaan 1</Accordion.Header>
    <Accordion.Body>Jawaban pertanyaan 1.</Accordion.Body>
  </Accordion.Item>
</Accordion>

<Dropdown>
  <Dropdown.Toggle>Opsi Aksi</Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>Lihat Profil</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item className="text-red-600">Keluar</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}
              >
                <Row gutter={4}>
                  <Col xs={12} md={7}>
                    <Accordion defaultActiveKey="acc-1">
                      <Accordion.Item eventKey="acc-1">
                        <Accordion.Header>Apakah semua komponen Bootstrap sudah ada?</Accordion.Header>
                        <Accordion.Body>
                          <strong>Ya, 100% lengkap!</strong> Seluruh komponen standar Bootstrap 5 mulai dari Grid, Buttons, Alerts, Cards, Carousel, List Group, Modals, Offcanvas, Tooltips, Popovers, Placeholders/Skeleton, Form Controls, hingga Toasts telah diimplementasikan secara modular dan responsif.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="acc-2">
                        <Accordion.Header>Bagaimana cara menyalin kodenya?</Accordion.Header>
                        <Accordion.Body>
                          Cukup klik tombol <strong>"Salin Kode"</strong> di pojok kanan atas setiap blok kode JSX untuk langsung menyalin sintaks ke clipboard.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>

                  <Col xs={12} md={5}>
                    <Dropdown>
                      <Dropdown.Toggle>
                        Pilih Opsi Aksi
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>Opsi Pengguna</Dropdown.Header>
                        <Dropdown.Item onClick={() => addToast({ message: 'Profil dibuka', variant: 'info' })}>
                          Lihat Profil
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          className="text-red-600"
                          onClick={() => addToast({ message: 'Sesi berakhir', variant: 'danger' })}
                        >
                          Keluar (Logout)
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </CodePreview>
            </section>

            {/* 14. PLACEHOLDERS */}
            <section id="placeholders" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Placeholders (Skeleton Loading)</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Animasi pemuat skeleton saat data sedang dimuat dari server.
                </p>
              </div>

              <CodePreview
                title="Skeleton Shimmer"
                description="Mendukung kontrol ukuran xs, sm, md, lg dan kolom span col-1 s/d col-12:"
                code={`<Placeholder col={12} size="md" />
<Placeholder col={8} size="md" />
<Placeholder col={4} size="lg" className="rounded-lg" />`}
              >
                <div className="space-y-3 max-w-md">
                  <Placeholder col={12} size="md" />
                  <Placeholder col={8} size="md" />
                  <Placeholder col={5} size="sm" />
                </div>
              </CodePreview>
            </section>

            {/* 15. PROGRESS & SPINNERS */}
            <section id="progress-spinners" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Progress & Spinners</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Indikator progres persentase berlabel dan pemuat animasi spinner border / grow.
                </p>
              </div>

              <CodePreview
                title="Progress Bars & Spinners"
                description="Striped beranimasi dan spinner dengan berbagai varian warna:"
                code={`<ProgressBar value={75} variant="primary" label />
<ProgressBar value={90} variant="success" striped animated label />

<Spinner variant="primary" size="sm" />
<Spinner animation="grow" variant="info" size="md" />`}
              >
                <Row gutter={4}>
                  <Col xs={12} md={6}>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs text-slate-500 block mb-1 font-medium">Primary Berlabel:</span>
                        <ProgressBar value={75} variant="primary" label />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 block mb-1 font-medium">Success Garis Strip Animasi:</span>
                        <ProgressBar value={90} variant="success" striped animated label />
                      </div>
                    </div>
                  </Col>

                  <Col xs={12} md={6}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Spinner variant="primary" size="sm" />
                        <Spinner variant="success" size="md" />
                        <Spinner variant="danger" size="lg" />
                      </div>
                      <div className="flex items-center gap-4 pt-2">
                        <Spinner animation="grow" variant="primary" size="sm" />
                        <Spinner animation="grow" variant="info" size="md" />
                        <Spinner animation="grow" variant="warning" size="lg" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </CodePreview>
            </section>

            {/* FOOTER */}
            <footer className="pt-8 pb-12 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
              <p className="font-semibold text-slate-600 dark:text-slate-300 mb-1">
                React Bootstrap Tailwind Responsive Component Library (100% Bootstrap 5 Complete)
              </p>
              <p>
                Dokumentasi komponen resmi bergaya Bootstrap 5 dengan fitur live preview dan tombol copy kode instan.
              </p>
            </footer>

          </Col>
        </Row>
      </Container>
    </div>
  );

  // If this window is inside an iframe (preview mode), render only the main website content!
  if (isPreview) {
    return (
      <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
        <ToastContainer position="top-end">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              variant={toast.variant}
              title={toast.title}
              subtitle={toast.subtitle}
              onClose={() => removeToast(toast.id)}
            >
              {toast.message}
            </Toast>
          ))}
        </ToastContainer>
        <MainContent />
      </div>
    );
  }

  // Normal window: includes top toolbar and genuine device simulator
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      {/* Toast Notification Container */}
      <ToastContainer position="top-end">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            title={toast.title}
            subtitle={toast.subtitle}
            onClose={() => removeToast(toast.id)}
          >
            {toast.message}
          </Toast>
        ))}
      </ToastContainer>

      {/* TOP CONTROLS BAR: Device Switcher & Theme */}
      <div className="sticky top-0 z-50 bg-slate-900 text-white px-3 sm:px-4 py-2 border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xs sm:text-base tracking-tight text-blue-400 flex items-center gap-1.5">
              <span className="bg-blue-600 text-white px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs">React + Bootstrap</span>
              Tailwind UI Docs
            </span>
          </div>

          {/* Viewport device selector */}
          <div className="flex items-center bg-slate-800 rounded-lg p-0.5 sm:p-1 border border-slate-700 text-xs">
            <button
              type="button"
              onClick={() => setDeviceView('mobile')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded transition-colors text-[11px] sm:text-xs ${
                deviceView === 'mobile' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
              title="Pratinjau Mobile (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile (375px)</span>
            </button>
            <button
              type="button"
              onClick={() => setDeviceView('tablet')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded transition-colors text-[11px] sm:text-xs ${
                deviceView === 'tablet' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
              title="Pratinjau Tablet (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet (768px)</span>
            </button>
            <button
              type="button"
              onClick={() => setDeviceView('fluid')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded transition-colors text-[11px] sm:text-xs ${
                deviceView === 'fluid' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
              title="Fluid Desktop (100%)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop Asli</span>
            </button>
          </div>

          {/* Theme & Quick actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Ganti Mode Gelap/Terang"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* RENDER VIEW: SIMULATOR OR NATIVE FLUID */}
      {deviceView === 'mobile' ? (
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-950/80">
          <div className="relative border-[12px] border-slate-900 rounded-[50px] shadow-2xl bg-white dark:bg-slate-900 overflow-hidden ring-2 ring-slate-800" style={{ width: '375px', height: '740px' }}>
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-20 pointer-events-none" />
            <iframe
              src="/?preview=mobile"
              title="Mobile Viewport (375px)"
              className="w-full h-full border-0 pt-4"
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Layar Ponsel Asli: <strong>375px × 740px</strong> (Media Query @media aktif murni)</span>
          </div>
        </div>
      ) : deviceView === 'tablet' ? (
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-950/80">
          <div className="relative border-[12px] border-slate-900 rounded-[30px] shadow-2xl bg-white dark:bg-slate-900 overflow-hidden ring-2 ring-slate-800" style={{ width: '768px', height: '820px' }}>
            <iframe
              src="/?preview=tablet"
              title="Tablet Viewport (768px)"
              className="w-full h-full border-0"
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
            <span>Layar Tablet Asli: <strong>768px × 820px</strong> (Breakpoint Tablet @media aktif)</span>
          </div>
        </div>
      ) : (
        <MainContent />
      )}
    </div>
  );
}
