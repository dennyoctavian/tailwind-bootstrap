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
  Timeline,
  Steps,
  Statistic,
  Rate,
  Avatar,
  Empty,
  Result,
  Segmented,
  Divider,
  Tag,
  Command,
  Kbd,
  AspectRatio,
  Toggle,
  ToggleGroup,
  PinInput,
  CopyButton,
  NumberInput,
  FileDropzone,
  ColorSwatch,
  ColorSwatchGroup,
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
  Clock,
  TrendingUp,
  UserCheck,
  Inbox,
  SplitSquareVertical,
  Sparkles,
  Terminal,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Search,
  KeyRound,
  Copy,
  UploadCloud,
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

  // Ant Design Hybrid Demo States
  const [activeStep, setActiveStep] = useState(1);
  const [rateVal, setRateVal] = useState(4);
  const [segmentedPeriod, setSegmentedPeriod] = useState('Bulan Ini');
  const [selectedTags, setSelectedTags] = useState<string[]>(['React', 'Tailwind']);
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // shadcn/ui Demo States
  const [openCommand, setOpenCommand] = useState(false);
  const [toggleFormats, setToggleFormats] = useState<string[]>(['bold']);
  const [toggleAlign, setToggleAlign] = useState<string>('center');

  // Modern Toolkit Demo States
  const [otpCode, setOtpCode] = useState('');
  const [pinMask, setPinMask] = useState(false);
  const [cartQty, setCartQty] = useState(2);
  const [activeColor, setActiveColor] = useState('#2563eb');

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
    {
      title: 'Ant Design Hybrid (Enterprise)',
      links: [
        { id: 'steps-timeline', label: 'Steps & Timeline', icon: <Clock className="w-4 h-4" /> },
        { id: 'statistic-rate', label: 'Statistic & Rate', icon: <TrendingUp className="w-4 h-4" /> },
        { id: 'avatar-tag', label: 'Avatar & Tag', icon: <UserCheck className="w-4 h-4" /> },
        { id: 'segmented-divider', label: 'Segmented & Divider', icon: <SplitSquareVertical className="w-4 h-4" /> },
        { id: 'empty-result', label: 'Empty & Result State', icon: <Inbox className="w-4 h-4" /> },
      ],
    },
    {
      title: 'shadcn/ui Modern Primitives',
      links: [
        { id: 'command-kbd', label: 'Command & Kbd (⌘K)', icon: <Terminal className="w-4 h-4" /> },
        { id: 'toggle-group', label: 'Toggle & ToggleGroup', icon: <Bold className="w-4 h-4" /> },
        { id: 'aspect-ratio', label: 'Aspect Ratio', icon: <Images className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Modern High-Utility Toolkit',
      links: [
        { id: 'pin-input', label: 'Pin / OTP Input', icon: <KeyRound className="w-4 h-4" /> },
        { id: 'copy-number', label: 'CopyButton & NumberInput', icon: <Copy className="w-4 h-4" /> },
        { id: 'file-color', label: 'FileDropzone & ColorSwatch', icon: <UploadCloud className="w-4 h-4" /> },
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
            <Nav.Link inNavbar href="#steps-timeline">
              <span className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                AntD
              </span>
            </Nav.Link>
            <Nav.Link inNavbar href="#command-kbd">
              <span className="inline-flex items-center gap-1 text-slate-800 dark:text-slate-200 font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                shadcn/ui
              </span>
            </Nav.Link>
            <Nav.Link inNavbar href="#pin-input">
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                <KeyRound className="w-3.5 h-3.5" />
                Toolkit
              </span>
            </Nav.Link>
            <Nav.Link inNavbar href="#forms">Form</Nav.Link>
          </Nav>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-3 lg:pt-0 w-full lg:w-auto border-t lg:border-t-0 border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setOpenCommand(true)}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400 transition-colors shadow-xs"
              title="Cari perintah atau buka modul (Tekan ⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Cari...</span>
              <Kbd size="sm">⌘K</Kbd>
            </button>
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

            {/* 16. STEPS & TIMELINE (ANT DESIGN HYBRID) */}
            <section id="steps-timeline" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="primary" pill>Ant Design Hybrid</Badge>
                  <span className="text-xs text-slate-400 font-mono">Enterprise Flow</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Steps & Timeline</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Komponen alur multi-langkah (*stepper/wizard*) dan pelacakan riwayat aktivitas berurutan (*audit trail / log status*).
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Steps Multi-Langkah Interaktif"
                  description="Mendukung navigasi dinamis, indikator status selesai/aktif/tunggu/error, serta otomatis beradaptasi pada layar ponsel:"
                  code={`const [activeStep, setActiveStep] = useState(1);

<Steps
  current={activeStep}
  onChange={setActiveStep}
  items={[
    { title: 'Identitas', description: 'Verifikasi akun KTP' },
    { title: 'Pembayaran', description: 'Pilih metode transfer' },
    { title: 'Konfirmasi', description: 'Order siap diproses' },
  ]}
/>

<div className="flex gap-2 mt-4">
  <Button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep - 1)}>Sebelumnya</Button>
  <Button disabled={activeStep === 2} onClick={() => setActiveStep(activeStep + 1)}>Selanjutnya</Button>
</div>`}
                >
                  <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 space-y-6">
                    <Steps
                      current={activeStep}
                      onChange={setActiveStep}
                      items={[
                        { title: 'Identitas Akun', description: 'Data diri & KYC' },
                        { title: 'Metode Bayar', description: 'Transfer atau QRIS' },
                        { title: 'Selesai & Aktif', description: 'Akses langsung terbuka' },
                      ]}
                    />

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        disabled={activeStep === 0}
                        onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                      >
                        ← Sebelumnya
                      </Button>
                      <span className="text-xs text-slate-500 font-medium">
                        Langkah {activeStep + 1} dari 3
                      </span>
                      <Button
                        variant="primary"
                        size="sm"
                        disabled={activeStep === 2}
                        onClick={() => setActiveStep((prev) => Math.min(2, prev + 1))}
                      >
                        Selanjutnya →
                      </Button>
                    </div>
                  </div>
                </CodePreview>

                <CodePreview
                  title="Timeline Audit Trail & Pelacakan Kurir"
                  description="Visualisasi urutan kronologis pengiriman barang atau riwayat status sistem:"
                  code={`<Timeline mode="left">
  <Timeline.Item color="blue" label="10:30 WIB">
    <span className="font-semibold">Pesanan Dibuat</span>
    <p className="text-xs text-slate-500">Pelanggan menyelesaikan checkout pembayaran</p>
  </Timeline.Item>
  <Timeline.Item color="purple" label="11:15 WIB">
    <span className="font-semibold">Pembayaran Terverifikasi</span>
    <p className="text-xs text-slate-500">Pembayaran Rp 450.000 via QRIS otomatis diverifikasi</p>
  </Timeline.Item>
  <Timeline.Item color="amber" label="13:40 WIB">
    <span className="font-semibold">Diproses Gudang</span>
    <p className="text-xs text-slate-500">Barang sedang dikemas & diberi label resi</p>
  </Timeline.Item>
  <Timeline.Item color="green" label="15:00 WIB">
    <span className="font-semibold text-emerald-600">Dalam Pengiriman Kurir</span>
    <p className="text-xs text-slate-500">Kurir JNE (Resi #BDG-899120) menuju alamat tujuan</p>
  </Timeline.Item>
  <Timeline.Item color="gray" label="Estimasi">
    <span className="text-slate-400">Paket Diterima</span>
  </Timeline.Item>
</Timeline>`}
                >
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 max-w-lg">
                    <Timeline mode="left">
                      <Timeline.Item color="blue" label="10:30 WIB">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block text-xs sm:text-sm">Pesanan Dibuat</span>
                        <p className="text-xs text-slate-500">Pelanggan menyelesaikan checkout pesanan</p>
                      </Timeline.Item>
                      <Timeline.Item color="purple" label="11:15 WIB">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block text-xs sm:text-sm">Pembayaran Terverifikasi</span>
                        <p className="text-xs text-slate-500">Sistem otomatis mencocokkan mutasi QRIS</p>
                      </Timeline.Item>
                      <Timeline.Item color="amber" label="13:40 WIB">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block text-xs sm:text-sm">Diproses di Gudang</span>
                        <p className="text-xs text-slate-500">Pengecekan stok fisik & packaging pesanan</p>
                      </Timeline.Item>
                      <Timeline.Item color="green" label="15:00 WIB">
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400 block text-xs sm:text-sm">Sedang Diantar Kurir</span>
                        <p className="text-xs text-slate-500">No Resi: JNE-09281742 menuju alamat penerima</p>
                      </Timeline.Item>
                      <Timeline.Item color="gray" label="Besok">
                        <span className="text-slate-400 text-xs sm:text-sm">Pesanan Tiba di Tujuan</span>
                      </Timeline.Item>
                    </Timeline>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* 17. STATISTIC & RATE (ANT DESIGN HYBRID) */}
            <section id="statistic-rate" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="primary" pill>Ant Design Hybrid</Badge>
                  <span className="text-xs text-slate-400 font-mono">Metrics & Feedback</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Statistic & Rate</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Menampilkan angka metrik dashboard performa bisnis dan sistem penilaian bintang interaktif.
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Kartu Metrik Statistic Dashboard"
                  description="Mendukung tren kenaikan/penurunan warna, penambahan prefix/suffix unit mata uang, dan angka presisi desimal:"
                  code={`<Row gutter={3}>
  <Col xs={12} sm={6} lg={3}>
    <Statistic title="Total Pendapatan" value="248.500.000" prefix="Rp " trend="up" />
  </Col>
  <Col xs={12} sm={6} lg={3}>
    <Statistic title="Pengguna Aktif" value="12.450" trend="up" suffix=" user" />
  </Col>
  <Col xs={12} sm={6} lg={3}>
    <Statistic title="Tingkat Keluar (Bounce)" value="2.8" precision={1} suffix="%" trend="down" />
  </Col>
  <Col xs={12} sm={6} lg={3}>
    <Statistic title="Kepuasan Layanan" value="99.2" precision={1} suffix="%" />
  </Col>
</Row>`}
                >
                  <Row gutter={3}>
                    <Col xs={12} sm={6} lg={3} className="mb-3 lg:mb-0">
                      <Statistic
                        title="Total Omzet Penjualan"
                        value="248.500.000"
                        prefix="Rp "
                        trend="up"
                        trendValue="+14.2%"
                      />
                    </Col>
                    <Col xs={12} sm={6} lg={3} className="mb-3 lg:mb-0">
                      <Statistic
                        title="Pengguna Aktif"
                        value="12.450"
                        trend="up"
                        trendValue="+8.1%"
                        suffix=" user"
                      />
                    </Col>
                    <Col xs={12} sm={6} lg={3} className="mb-3 sm:mb-0">
                      <Statistic
                        title="Tingkat Keluar (Bounce)"
                        value="2.8"
                        precision={1}
                        suffix="%"
                        trend="down"
                        trendValue="-0.8%"
                      />
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                      <Statistic
                        title="Kepuasan Pelanggan"
                        value="99.4"
                        precision={1}
                        suffix="%"
                      />
                    </Col>
                  </Row>
                </CodePreview>

                <CodePreview
                  title="Penilaian Bintang Interaktif (Rate)"
                  description="Mendukung seleksi bintang dengan hover tooltip umpan balik secara realtime:"
                  code={`const [rateVal, setRateVal] = useState(4);

<Rate
  value={rateVal}
  onChange={setRateVal}
  tooltips={['Sangat Buruk', 'Kurang Memuaskan', 'Cukup Baik', 'Sangat Baik', 'Luar Biasa Sempurna!']}
/>
<span className="text-sm">Nilai: {rateVal} dari 5 bintang</span>`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                    <Rate
                      value={rateVal}
                      onChange={setRateVal}
                      tooltips={['Sangat Buruk', 'Kurang Memuaskan', 'Cukup Baik', 'Sangat Baik', 'Luar Biasa Sempurna!']}
                    />
                    <div className="flex items-center gap-2">
                      <Badge variant="warning" pill>
                        Skor: {rateVal} / 5
                      </Badge>
                      <span className="text-xs text-slate-500">
                        {rateVal === 5 ? '⭐️ Sempurna!' : rateVal >= 4 ? '👍 Sangat Bagus' : rateVal >= 3 ? '👌 Cukup' : '⚠️ Perlu Perbaikan'}
                      </span>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* 18. AVATAR & TAG (ANT DESIGN HYBRID) */}
            <section id="avatar-tag" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="primary" pill>Ant Design Hybrid</Badge>
                  <span className="text-xs text-slate-400 font-mono">Profile & Taxonomy</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Avatar & Tag</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Foto profil avatar bertumpuk (*group stacking*) dengan indikator status online, serta label tag warna-warni yang dapat ditutup (*closable*) atau difilter (*checkable*).
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Avatar & Avatar.Group Tumpuk"
                  description="Mendukung ukuran sm, md, lg, xl, titik status online/away/busy, dan counter +extra otomatis:"
                  code={`<div className="flex items-center gap-3">
  <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" size="lg" status="online" />
  <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" size="lg" status="busy" />
  <Avatar name="Budi Santoso" size="lg" />
</div>

<Avatar.Group max={3}>
  <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" />
  <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" />
  <Avatar name="Dewi Lestari" />
  <Avatar name="Eko Prasetyo" />
  <Avatar name="Rini Amelia" />
</Avatar.Group>`}
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Avatar Tunggal dengan Status:</span>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                          size="lg"
                          status="online"
                        />
                        <Avatar
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                          size="lg"
                          status="busy"
                        />
                        <Avatar
                          name="Budi Santoso"
                          size="lg"
                          status="away"
                        />
                        <Avatar
                          shape="square"
                          name="Admin IT"
                          size="lg"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Avatar.Group Bertumpuk (Maksimal 3 + Sisa Counter):</span>
                      <Avatar.Group max={3}>
                        <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" />
                        <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" />
                        <Avatar name="Dewi Lestari" />
                        <Avatar name="Eko Prasetyo" />
                        <Avatar name="Rini Amelia" />
                      </Avatar.Group>
                    </div>
                  </div>
                </CodePreview>

                <CodePreview
                  title="Tag Palet Warna, Closable, & Checkable Filter"
                  description="Variasi palet warna lembut, tag bertombol silang untuk menghapus, dan tag interaktif untuk filter kategori:"
                  code={`// Palet warna bawaan
<Tag color="green">Sukses</Tag>
<Tag color="blue">Processing</Tag>
<Tag color="magenta">Promo 70%</Tag>
<Tag color="gold">VIP Gold</Tag>

// Closable tag
<Tag color="red" closable onClose={() => alert('Tag dihapus')}>Hapus Saya</Tag>

// Checkable tag (Filter interaktif)
<Tag checkable checked={isSelected} onChange={toggleSelect}>React</Tag>`}
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Palet Warna Presets:</span>
                      <div className="flex flex-wrap gap-2">
                        <Tag color="blue">#Teknologi</Tag>
                        <Tag color="green">#Tersedia</Tag>
                        <Tag color="purple">#AI & Machine Learning</Tag>
                        <Tag color="magenta">#Promo Hari Ini</Tag>
                        <Tag color="orange">#Populer</Tag>
                        <Tag color="gold">#Member VIP</Tag>
                        <Tag color="cyan">#Cloud Native</Tag>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Closable (Dapat Ditutup):</span>
                      <div className="flex flex-wrap gap-2">
                        <Tag color="blue" closable>Filter: Jakarta</Tag>
                        <Tag color="green" closable>Rating &gt; 4.5</Tag>
                        <Tag color="red" closable>Kategori: Elektronik</Tag>
                      </div>
                    </div>

                    <div className="pt-1">
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Checkable Filter (Klik untuk Memilih):</span>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Tailwind', 'Bootstrap', 'TypeScript', 'Vite', 'Next.js'].map((tech) => (
                          <Tag
                            key={tech}
                            checkable
                            checked={selectedTags.includes(tech)}
                            onChange={() => toggleTag(tech)}
                          >
                            {tech}
                          </Tag>
                        ))}
                      </div>
                      <p className="text-xs text-slate-400 mt-2">
                        Terpilih: <strong>{selectedTags.join(', ') || 'Belum ada filter dipilih'}</strong>
                      </p>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* 19. SEGMENTED & DIVIDER (ANT DESIGN HYBRID) */}
            <section id="segmented-divider" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="primary" pill>Ant Design Hybrid</Badge>
                  <span className="text-xs text-slate-400 font-mono">Controls & Layout</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Segmented & Divider</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Kontrol tombol geser bergaya pil (*segmented control*) dan garis pemisah dengan teks judul di posisi kiri, tengah, atau kanan.
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Segmented Control (Sliding Switcher)"
                  description="Alternatif tab atau radio button yang sangat ringkas untuk menyaring filter data secara cepat:"
                  code={`const [period, setPeriod] = useState('Bulan Ini');

<Segmented
  value={period}
  onChange={setPeriod}
  options={['Hari Ini', 'Minggu Ini', 'Bulan Ini', 'Tahun Ini']}
/>`}
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Ukuran Sedang (Default):</span>
                      <Segmented
                        value={segmentedPeriod}
                        onChange={setSegmentedPeriod}
                        options={['Hari Ini', 'Minggu Ini', 'Bulan Ini', 'Tahun Ini']}
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100 dark:bg-slate-800/60 p-2.5 rounded-lg">
                      <Sparkles className="w-4 h-4 text-indigo-500" />
                      <span>Periode aktif: <strong className="text-slate-800 dark:text-slate-200">{segmentedPeriod}</strong></span>
                    </div>

                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Ukuran Kecil & Block Width:</span>
                      <Segmented
                        size="sm"
                        block
                        defaultValue="Kanban"
                        options={['Tabel Data', 'Kanban Board', 'Kalender Jadwal']}
                      />
                    </div>
                  </div>
                </CodePreview>

                <CodePreview
                  title="Divider Pemisah dengan Orientasi Teks"
                  description="Garis pemisah horizontal berorientasi teks kiri, tengah, atau kanan serta garis putus-putus (*dashed*):"
                  code={`<Divider orientation="left">Informasi Akun</Divider>
<p>Form isi data pengguna...</p>

<Divider orientation="center">Atau Masuk Melalui</Divider>
<div className="text-center">Tombol OAuth...</div>

<Divider dashed orientation="right">Syarat & Ketentuan</Divider>`}
                >
                  <div className="space-y-2 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                    <Divider orientation="left">Pengaturan Profil Pengguna</Divider>
                    <p className="text-xs text-slate-500">Kelola informasi nama lengkap, email, dan nomor kontak Anda di sini.</p>

                    <Divider orientation="center">Atau Lanjutkan Menggunakan Akun Lain</Divider>
                    <div className="flex justify-center gap-2">
                      <Button variant="outline-secondary" size="sm">Google SSO</Button>
                      <Button variant="outline-secondary" size="sm">GitHub SSO</Button>
                    </div>

                    <Divider dashed orientation="right">Catatan Keamanan Sistem</Divider>
                    <p className="text-xs text-slate-400 text-right">Data dienkripsi end-to-end menggunakan standar AES-256.</p>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* 20. EMPTY & RESULT (ANT DESIGN HYBRID) */}
            <section id="empty-result" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="primary" pill>Ant Design Hybrid</Badge>
                  <span className="text-xs text-slate-400 font-mono">State Presentations</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Empty & Result State</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Komponen visual status kosong (*empty state*) ketika data tidak tersedia dan tampilan hasil transaksi berhasil/gagal/404.
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Empty State (Data Kosong)"
                  description="Memberikan petunjuk yang jelas kepada pengguna saat data tabel atau daftar masih kosong disertai tombol aksi CTA:"
                  code={`<Empty
  description="Belum ada transaksi di bulan ini"
  action={<Button variant="primary" size="sm">Mulai Buat Transaksi</Button>}
/>`}
                >
                  <Empty
                    description="Belum ada transaksi di riwayat akun Anda. Silakan mulai berbelanja produk!"
                    action={
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => addToast({ title: 'Aksi Diklik', message: 'Mengarahkan ke halaman katalog produk...', variant: 'info' })}
                      >
                        Jelajahi Produk Baru
                      </Button>
                    }
                  />
                </CodePreview>

                <CodePreview
                  title="Result Presentation (Berhasil & Halaman 404)"
                  description="Layar hasil operasi dengan status success, error, warning, info, 404, 403, atau 500:"
                  code={`// Status Sukses
<Result
  status="success"
  title="Pembayaran Berhasil Dikonfirmasi!"
  subTitle="Nomor pesanan #INV-2026-9921 telah diterbitkan. Konfirmasi pembayaran dikirim ke email Anda."
  extra={[
    <Button variant="primary" key="dash">Ke Dashboard</Button>,
    <Button variant="outline-secondary" key="again">Beli Lagi</Button>,
  ]}
/>

// Status 404 Tidak Ditemukan
<Result
  status="404"
  title="404 - Halaman Tidak Ditemukan"
  subTitle="Maaf, halaman yang Anda tuju tidak tersedia atau telah dipindahkan."
  extra={<Button variant="primary">Kembali ke Beranda</Button>}
/>`}
                >
                  <Row gutter={4}>
                    <Col xs={12} lg={6}>
                      <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                        <Result
                          status="success"
                          title="Transaksi Berhasil!"
                          subTitle="Pesanan #INV-2026-9921 berhasil dibayar via QRIS."
                          extra={[
                            <Button
                              variant="primary"
                              size="sm"
                              key="print"
                              onClick={() => addToast({ title: 'Unduh Resi', message: 'Mengunduh invoice PDF...', variant: 'success' })}
                            >
                              Unduh Resi
                            </Button>,
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              key="order"
                              onClick={() => addToast({ title: 'Status Order', message: 'Membuka pelacakan pengiriman...', variant: 'info' })}
                            >
                              Lacak Order
                            </Button>,
                          ]}
                        />
                      </div>
                    </Col>

                    <Col xs={12} lg={6}>
                      <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                        <Result
                          status="404"
                          title="404 Tidak Ditemukan"
                          subTitle="Halaman yang Anda tuju tidak ada atau telah dipindahkan."
                          extra={
                            <Button
                              variant="outline-primary"
                              size="sm"
                              onClick={() => {
                                const el = document.getElementById('overview');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                              }}
                            >
                              Kembali ke Beranda
                            </Button>
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                </CodePreview>
              </div>
            </section>

            {/* 21. COMMAND & KBD (SHADCN/UI MODERN) */}
            <section id="command-kbd" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="dark" pill>shadcn/ui Modern</Badge>
                  <span className="text-xs text-slate-400 font-mono">Spotlight Search & Keycaps</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Command Palette & Kbd</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Menu pencarian perintah cepat bergaya spotlight dengan navigasi keyboard (`⌘K` / `Ctrl+K`) serta elemen tombol keyboard (*keycaps*).
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Command Palette Spotlight Dialog"
                  description="Dapat dibuka dengan menekan tombol di bawah atau kombinasi shortcut keyboard ⌘K kapan saja:"
                  code={`// Buka dialog Command Palette (⌘K)
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>
  Buka Command (⌘K)
</Button>

<Command.Dialog open={open} onOpenChange={setOpen}>
  <Command>
    <Command.Input placeholder="Ketik perintah atau cari fitur..." />
    <Command.List>
      <Command.Empty>Tidak ada perintah ditemukan.</Command.Empty>
      <Command.Group heading="Saran Cepat">
        <Command.Item onSelect={() => navigate('/grid')}>
          <LayoutGrid className="w-4 h-4 mr-2 text-blue-500" />
          <span>Sistem Grid Responsif</span>
          <Command.Shortcut><Kbd size="sm">G</Kbd></Command.Shortcut>
        </Command.Item>
      </Command.Group>
    </Command.List>
  </Command>
</Command.Dialog>`}
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        variant="primary"
                        onClick={() => setOpenCommand(true)}
                        icon={<Terminal className="w-4 h-4 mr-2" />}
                      >
                        Buka Spotlight Command Palette
                      </Button>
                      <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl">
                        <span>Tekan</span>
                        <Kbd size="sm">⌘</Kbd>
                        <span>+</span>
                        <Kbd size="sm">K</Kbd>
                        <span className="text-slate-400 dark:text-slate-500">(atau Ctrl + K di Windows)</span>
                      </div>
                    </div>

                    {/* Inline Command Preview */}
                    <div className="max-w-md pt-2">
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Pratinjau Inline (Langsung di Halaman):</span>
                      <Command className="border border-slate-200 dark:border-slate-800 shadow-md">
                        <Command.Input placeholder="Coba ketik 'grid', 'tombol', 'tema'..." />
                        <Command.List>
                          <Command.Empty>Tidak ada fitur cocok.</Command.Empty>
                          <Command.Group heading="Navigasi Cepat">
                            <Command.Item onSelect={() => { const el = document.getElementById('grid'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
                              <div className="flex items-center gap-2">
                                <LayoutGrid className="w-4 h-4 text-blue-500" />
                                <span>Tata Letak Grid 12 Kolom</span>
                              </div>
                              <Command.Shortcut><Kbd size="sm">G</Kbd></Command.Shortcut>
                            </Command.Item>
                            <Command.Item onSelect={() => { const el = document.getElementById('buttons'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                                <span>Buttons & Button Group</span>
                              </div>
                              <Command.Shortcut><Kbd size="sm">B</Kbd></Command.Shortcut>
                            </Command.Item>
                          </Command.Group>
                          <Command.Separator />
                          <Command.Group heading="Aksi Pengaturan">
                            <Command.Item onSelect={toggleDarkMode}>
                              <div className="flex items-center gap-2">
                                {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-500" />}
                                <span>Ganti Mode Gelap / Terang</span>
                              </div>
                              <Command.Shortcut><Kbd size="sm">T</Kbd></Command.Shortcut>
                            </Command.Item>
                          </Command.Group>
                        </Command.List>
                      </Command>
                    </div>
                  </div>
                </CodePreview>

                <CodePreview
                  title="Keyboard Keycaps (Kbd)"
                  description="Menampilkan tombol keyboard dengan visual 3D realistis dan ukuran sm, md, lg:"
                  code={`<div className="flex items-center gap-2">
  <Kbd size="sm">⌘</Kbd>
  <Kbd size="sm">K</Kbd>
  <Kbd>Ctrl</Kbd>
  <Kbd>Shift</Kbd>
  <Kbd>P</Kbd>
  <Kbd size="lg">Enter ↵</Kbd>
  <Kbd size="lg">Esc</Kbd>
</div>`}
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Kombinasi Shortcut Umum:</span>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700 dark:text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-slate-400">Cari:</span>
                          <Kbd size="sm">⌘</Kbd>
                          <Kbd size="sm">K</Kbd>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-slate-400">Perintah VSCode:</span>
                          <Kbd size="sm">Ctrl</Kbd>
                          <Kbd size="sm">Shift</Kbd>
                          <Kbd size="sm">P</Kbd>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-slate-400">Simpan:</span>
                          <Kbd size="sm">⌘</Kbd>
                          <Kbd size="sm">S</Kbd>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Variasi Ukuran (sm, md, lg):</span>
                      <div className="flex items-center gap-3">
                        <Kbd size="sm">sm (Kecil)</Kbd>
                        <Kbd size="md">md (Sedang)</Kbd>
                        <Kbd size="lg">lg (Besar)</Kbd>
                      </div>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* 22. TOGGLE & TOGGLEGROUP (SHADCN/UI MODERN) */}
            <section id="toggle-group" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="dark" pill>shadcn/ui Modern</Badge>
                  <span className="text-xs text-slate-400 font-mono">Interactive Toolbar</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Toggle & ToggleGroup</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Tombol status aktif/nonaktif bergaya toolbar untuk editor teks, perataan paragraf, atau filter kontrol.
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Toggle Tunggal & Toolbar Editor Teks"
                  description="Mendukung multi-select (multiple) untuk format tebal, miring, dan garis bawah, serta single-select untuk perataan teks:"
                  code={`// Text formatting (multiple selection)
const [formats, setFormats] = useState(['bold']);

<ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
  <ToggleGroup.Item value="bold" aria-label="Bold"><Bold className="w-4 h-4" /></ToggleGroup.Item>
  <ToggleGroup.Item value="italic" aria-label="Italic"><Italic className="w-4 h-4" /></ToggleGroup.Item>
  <ToggleGroup.Item value="underline" aria-label="Underline"><Underline className="w-4 h-4" /></ToggleGroup.Item>
</ToggleGroup>

// Alignment (single selection)
const [align, setAlign] = useState('center');

<ToggleGroup type="single" value={align} onValueChange={setAlign} variant="outline">
  <ToggleGroup.Item value="left"><AlignLeft className="w-4 h-4" /></ToggleGroup.Item>
  <ToggleGroup.Item value="center"><AlignCenter className="w-4 h-4" /></ToggleGroup.Item>
  <ToggleGroup.Item value="right"><AlignRight className="w-4 h-4" /></ToggleGroup.Item>
  <ToggleGroup.Item value="justify"><AlignJustify className="w-4 h-4" /></ToggleGroup.Item>
</ToggleGroup>`}
                >
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Toggle Tunggal (Standalone):</span>
                      <div className="flex items-center gap-2">
                        <Toggle variant="outline" aria-label="Toggle Bold">
                          <Bold className="w-4 h-4 mr-1.5" />
                          <span>Tebal</span>
                        </Toggle>
                        <Toggle variant="outline" aria-label="Toggle Italic">
                          <Italic className="w-4 h-4 mr-1.5" />
                          <span>Miring</span>
                        </Toggle>
                        <Toggle aria-label="Toggle Underline">
                          <Underline className="w-4 h-4 mr-1.5" />
                          <span>Garis Bawah</span>
                        </Toggle>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Format Teks (Multiple Selection):</span>
                      <div className="flex items-center gap-3">
                        <ToggleGroup
                          type="multiple"
                          value={toggleFormats}
                          onValueChange={(val) => setToggleFormats(val)}
                        >
                          <ToggleGroup.Item value="bold" title="Tebal (Bold)">
                            <Bold className="w-4 h-4" />
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value="italic" title="Miring (Italic)">
                            <Italic className="w-4 h-4" />
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value="underline" title="Garis Bawah (Underline)">
                            <Underline className="w-4 h-4" />
                          </ToggleGroup.Item>
                        </ToggleGroup>
                        <span className="text-xs text-slate-500">
                          Format aktif: <strong>{toggleFormats.join(', ') || 'Normal'}</strong>
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Perataan Paragraf (Single Selection - Varian Outline):</span>
                      <div className="flex items-center gap-3">
                        <ToggleGroup
                          type="single"
                          variant="outline"
                          value={toggleAlign}
                          onValueChange={(val) => setToggleAlign(val || 'left')}
                        >
                          <ToggleGroup.Item value="left" title="Rata Kiri">
                            <AlignLeft className="w-4 h-4" />
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value="center" title="Rata Tengah">
                            <AlignCenter className="w-4 h-4" />
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value="right" title="Rata Kanan">
                            <AlignRight className="w-4 h-4" />
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value="justify" title="Rata Kiri-Kanan">
                            <AlignJustify className="w-4 h-4" />
                          </ToggleGroup.Item>
                        </ToggleGroup>
                        <span className="text-xs text-slate-500">
                          Alignment: <strong>{toggleAlign}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* 23. ASPECT RATIO (SHADCN/UI MODERN) */}
            <section id="aspect-ratio" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="dark" pill>shadcn/ui Modern</Badge>
                  <span className="text-xs text-slate-400 font-mono">Media Containers</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Aspect Ratio</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Kontainer rasio aspek terjamin (16:9, 4:3, 1:1) untuk gambar, video, dan peta interaktif tanpa lonjakan tata letak (*layout shift*).
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Rasio Aspek 16:9 & 1:1"
                  description="Memastikan media gambar atau video selalu mempertahankan proporsinya secara konsisten di seluruh ukuran layar:"
                  code={`<Row gutter={4}>
  <Col xs={12} md={8}>
    <AspectRatio ratio={16 / 9}>
      <img src="..." alt="Widescreen 16:9" />
    </AspectRatio>
  </Col>
  <Col xs={12} md={4}>
    <AspectRatio ratio={1 / 1}>
      <img src="..." alt="Square 1:1" />
    </AspectRatio>
  </Col>
</Row>`}
                >
                  <Row gutter={4}>
                    <Col xs={12} md={7} className="mb-4 md:mb-0">
                      <div className="space-y-1.5">
                        <span className="text-xs font-semibold text-slate-500 block">Rasio Bioskop / YouTube (16:9):</span>
                        <AspectRatio ratio={16 / 9} className="shadow-md ring-1 ring-slate-200 dark:ring-slate-800">
                          <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                            alt="16:9 Preview"
                          />
                        </AspectRatio>
                      </div>
                    </Col>
                    <Col xs={12} md={5}>
                      <div className="space-y-1.5">
                        <span className="text-xs font-semibold text-slate-500 block">Rasio Persegi Instagram (1:1):</span>
                        <AspectRatio ratio={1 / 1} className="shadow-md ring-1 ring-slate-200 dark:ring-slate-800">
                          <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                            alt="1:1 Preview"
                          />
                        </AspectRatio>
                      </div>
                    </Col>
                  </Row>
                </CodePreview>
              </div>
            </section>

            {/* 24. PIN / OTP INPUT (MODERN TOOLKIT) */}
            <section id="pin-input" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="success" pill>Modern Toolkit</Badge>
                  <span className="text-xs text-slate-400 font-mono">Verification & Auth</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">Pin / OTP Input</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Input verifikasi kode OTP / PIN satu digit per kotak dengan auto-focus otomatis, navigasi backspace mundur, dan dukungan *paste* teks langsung.
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Input Kode OTP 6 Digit"
                  description="Ketik atau tempel (paste) kode verifikasi 6 digit dari SMS atau WhatsApp:"
                  code={`const [otp, setOtp] = useState('');

<PinInput
  length={6}
  value={otp}
  onChange={setOtp}
  onComplete={(code) => alert('Kode OTP lengkap: ' + code)}
/>
<p>Kode saat ini: {otp}</p>`}
                >
                  <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
                    <div>
                      <span className="text-xs text-slate-500 block mb-3 font-medium">Masukkan Kode Verifikasi (6 Digit):</span>
                      <PinInput
                        length={6}
                        value={otpCode}
                        onChange={setOtpCode}
                        onComplete={(code) =>
                          addToast({
                            title: 'OTP Lengkap!',
                            message: `Kode ${code} siap diverifikasi ke server.`,
                            variant: 'success',
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>Nilai input:</span>
                      <strong className="font-mono text-slate-900 dark:text-white bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {otpCode || 'Belum diisi'}
                      </strong>
                    </div>
                  </div>
                </CodePreview>

                <CodePreview
                  title="PIN 4 Digit dengan Masking Titik Rahasia"
                  description="Cocok untuk PIN transaksi keuangan atau password akun:"
                  code={`const [mask, setMask] = useState(true);

<PinInput length={4} mask={mask} size="lg" />
<Button onClick={() => setMask(!mask)}>
  {mask ? 'Tampilkan PIN' : 'Sembunyikan PIN'}
</Button>`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <PinInput length={4} mask={pinMask} size="lg" />
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => setPinMask(!pinMask)}
                    >
                      {pinMask ? '👁️ Tampilkan Angka' : '🔒 Sembunyikan (Masking)'}
                    </Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* 25. COPYBUTTON & NUMBERINPUT (MODERN TOOLKIT) */}
            <section id="copy-number" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="success" pill>Modern Toolkit</Badge>
                  <span className="text-xs text-slate-400 font-mono">Utility Actions</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">CopyButton & NumberInput</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Tombol salin ke clipboard sekali klik dengan animasi konfirmasi centang, serta stepper jumlah kuantitas produk belanja.
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Tombol Salin Clipboard (CopyButton)"
                  description="Otomatis menyalin teks ke clipboard pengguna dan beralih ke ikon centang 'Tersalin!':"
                  code={`<div className="flex items-center gap-2">
  <input value="https://myapp.com/invite/ref-8921" readOnly className="border px-3 py-1.5 rounded" />
  <CopyButton value="https://myapp.com/invite/ref-8921" />
</div>`}
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Salin Tautan Referensi / Kupon:</span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 max-w-md">
                        <div className="flex-1 px-3 py-2 text-xs font-mono rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 truncate">
                          DISKON-RAMADHAN-2026
                        </div>
                        <CopyButton
                          value="DISKON-RAMADHAN-2026"
                          onCopySuccess={() =>
                            addToast({ title: 'Tersalin!', message: 'Kode kupon berhasil disalin ke clipboard.', variant: 'success' })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Varian Tombol (Outline & Subtle):</span>
                      <div className="flex items-center gap-2">
                        <CopyButton value="git clone https://github.com/dennyoctavian/tailwind-bootstrap.git" variant="outline" label="Salin URL Git" />
                        <CopyButton value="API_KEY_LIVE_9981248" variant="subtle" label="Salin API Key" />
                      </div>
                    </div>
                  </div>
                </CodePreview>

                <CodePreview
                  title="Stepper Kuantitas Angka (NumberInput)"
                  description="Sangat ideal untuk keranjang belanja e-commerce dengan kontrol batas minimal dan maksimal:"
                  code={`const [qty, setQty] = useState(2);

<div className="flex items-center gap-3">
  <span>Jumlah Produk:</span>
  <NumberInput
    value={qty}
    onChange={setQty}
    min={1}
    max={10}
  />
  <span>Total: Rp {qty * 150000}</span>
</div>`}
                >
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4 max-w-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Kemeja Linen Premium</h4>
                        <span className="text-xs text-slate-500">Rp 175.000 / pcs</span>
                      </div>
                      <NumberInput
                        value={cartQty}
                        onChange={setCartQty}
                        min={1}
                        max={10}
                      />
                    </div>
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-slate-500">Total Harga ({cartQty} barang):</span>
                      <strong className="text-blue-600 dark:text-blue-400 font-bold">
                        Rp {(cartQty * 175000).toLocaleString('id-ID')}
                      </strong>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* 26. FILEDROPZONE & COLORSWATCH (MODERN TOOLKIT) */}
            <section id="file-color" className="scroll-mt-24">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="success" pill>Modern Toolkit</Badge>
                  <span className="text-xs text-slate-400 font-mono">Upload & Palette</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">FileDropzone & ColorSwatch</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Area drag-and-drop unggah berkas modern dan palet pemilih warna produk interaktif.
                </p>
              </div>

              <div className="space-y-6">
                <CodePreview
                  title="Area Unggah Berkas Drag & Drop (FileDropzone)"
                  description="Seret berkas dari komputer atau klik area di bawah untuk memilih file dengan pratinjau daftar berkas:"
                  code={`<FileDropzone
  maxSizeMb={5}
  accept="image/*,.pdf"
  onFilesChange={(files) => console.log('File diunggah:', files)}
/>`}
                >
                  <FileDropzone
                    maxSizeMb={5}
                    title="Klik atau seret foto/dokumen ke sini"
                    description="Mendukung JPG, PNG, PDF hingga maksimal 5MB"
                  />
                </CodePreview>

                <CodePreview
                  title="Pilihan Warna Lingkaran (ColorSwatch & Group)"
                  description="Sangat populer untuk memilih varian warna baju/gadget pada halaman detail produk e-commerce:"
                  code={`const [color, setColor] = useState('#2563eb');

<ColorSwatchGroup
  value={color}
  onChange={setColor}
  colors={['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#0f172a']}
/>`}
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Swatch Tunggal Berukuran sm, md, lg:</span>
                      <div className="flex items-center gap-3">
                        <ColorSwatch color="#2563eb" selected size="sm" />
                        <ColorSwatch color="#10b981" selected size="md" />
                        <ColorSwatch color="#f59e0b" selected size="lg" />
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-slate-500 block mb-2 font-medium">Pilih Varian Warna Produk (Group):</span>
                      <ColorSwatchGroup
                        value={activeColor}
                        onChange={setActiveColor}
                        colors={[
                          '#2563eb', // Royal Blue
                          '#10b981', // Emerald Green
                          '#f59e0b', // Amber Gold
                          '#ef4444', // Ruby Red
                          '#8b5cf6', // Violet Purple
                          '#ec4899', // Pink Magenta
                          '#0f172a', // Midnight Black
                        ]}
                      />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>Warna aktif:</span>
                      <div className="w-3.5 h-3.5 rounded-full ring-1 ring-slate-300" style={{ backgroundColor: activeColor }} />
                      <strong className="font-mono">{activeColor}</strong>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* GLOBAL SPOTLIGHT COMMAND DIALOG */}
            <Command.Dialog open={openCommand} onOpenChange={setOpenCommand}>
              <Command>
                <Command.Input placeholder="Ketik perintah atau cari fitur..." />
                <Command.List>
                  <Command.Empty>Tidak ada perintah ditemukan.</Command.Empty>
                  <Command.Group heading="Saran Cepat">
                    <Command.Item
                      onSelect={() => {
                        setOpenCommand(false);
                        const el = document.getElementById('grid');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <LayoutGrid className="w-4 h-4 text-blue-500" />
                        <span>Sistem Grid Responsif</span>
                      </div>
                      <Command.Shortcut><Kbd size="sm">G</Kbd></Command.Shortcut>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        setOpenCommand(false);
                        const el = document.getElementById('buttons');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>Buttons & Button Group</span>
                      </div>
                      <Command.Shortcut><Kbd size="sm">B</Kbd></Command.Shortcut>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        setOpenCommand(false);
                        const el = document.getElementById('steps-timeline');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-500" />
                        <span>Steps & Timeline (AntD)</span>
                      </div>
                      <Command.Shortcut><Kbd size="sm">S</Kbd></Command.Shortcut>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        setOpenCommand(false);
                        const el = document.getElementById('command-kbd');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                        <span>Command & Kbd (shadcn/ui)</span>
                      </div>
                      <Command.Shortcut><Kbd size="sm">K</Kbd></Command.Shortcut>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        setOpenCommand(false);
                        const el = document.getElementById('pin-input');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <KeyRound className="w-4 h-4 text-emerald-500" />
                        <span>Pin / OTP Input (Toolkit)</span>
                      </div>
                      <Command.Shortcut><Kbd size="sm">O</Kbd></Command.Shortcut>
                    </Command.Item>
                  </Command.Group>
                  <Command.Separator />
                  <Command.Group heading="Aksi & Pengaturan">
                    <Command.Item
                      onSelect={() => {
                        toggleDarkMode();
                        setOpenCommand(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-500" />}
                        <span>Ganti Tema ({darkMode ? 'Terang' : 'Gelap'})</span>
                      </div>
                      <Command.Shortcut><Kbd size="sm">T</Kbd></Command.Shortcut>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        setShowModal(true);
                        setOpenCommand(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-indigo-500" />
                        <span>Buka Modal Dialog</span>
                      </div>
                      <Command.Shortcut><Kbd size="sm">M</Kbd></Command.Shortcut>
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </Command.Dialog>

            {/* FOOTER */}
            <footer className="pt-8 pb-12 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
              <p className="font-semibold text-slate-600 dark:text-slate-300 mb-1">
                React Bootstrap 5 + Ant Design + shadcn/ui + Mantine Modern Hybrid UI Kit (Tailwind Powered)
              </p>
              <p>
                Koleksi lengkap 45+ komponen UI siap pakai: Layout Bootstrap, Enterprise Ant Design, Developer Primitives shadcn/ui, dan High-Utility Toolkit modern dengan 100% utilitas Tailwind CSS.
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
