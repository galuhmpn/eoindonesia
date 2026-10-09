/**
 * EO Indonesia - Dynamic Sitemap Generator
 * Generates XML sitemaps adhering to standard sitemaps.org protocols (v0.9),
 * including multilingual xhtml:link hreflang alternates, priority scoring,
 * change frequencies, and Google crawler compliance.
 */

export interface SitemapRoute {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  category: 'primary' | 'service' | 'portfolio' | 'article' | 'region';
}

export const CANONICAL_DOMAIN = 'https://eoindonesia.id';

/**
 * Primary Core Routes of EO Indonesia
 * Directly requested: /tentang-kami, /layanan, /portofolio, /artikel, /kontak, plus home and hubs
 */
export const PRIMARY_SITEMAP_ROUTES: SitemapRoute[] = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly',
    title: {
      id: 'Beranda - EO Indonesia | Mitra Resmi Penyelenggara Event Nasional',
      en: 'Home - EO Indonesia | Official National Event Production & Staging'
    },
    description: {
      id: 'Layanan terpadu event organizer dan manajemen produksi acara berstandar internasional di 38 provinsi Indonesia.',
      en: 'Integrated national event organizer and international-standard technical production across 38 Indonesian provinces.'
    },
    category: 'primary'
  },
  {
    path: '/tentang-kami',
    priority: 0.9,
    changefreq: 'monthly',
    title: {
      id: 'Tentang Kami - Filosofi, Legalitas Resmi & Standar K3L | EO Indonesia',
      en: 'About Us - Philosophy, Legal Compliance & HSE Safety | EO Indonesia'
    },
    description: {
      id: 'Profil resmi EO Indonesia: filosofi nama, legalitas NIB terverifikasi, rekam jejak teknis, dan komitmen K3L zero incident.',
      en: 'Official profile of EO Indonesia: brand philosophy, verified legal licensing, technical track record, and zero-incident HSE commitment.'
    },
    category: 'primary'
  },
  {
    path: '/layanan',
    priority: 0.9,
    changefreq: 'weekly',
    title: {
      id: 'Layanan & Spesifikasi Produksi Acara | EO Indonesia',
      en: 'Services & Technical Production Scope | EO Indonesia'
    },
    description: {
      id: 'Katalog layanan lengkap: Konferensi MICE, Corporate Gala Dinner & RUPS, Brand Activation, Konser Musik, dan Protokol Kenegaraan.',
      en: 'Complete service catalog: MICE Summits, Corporate Gala & AGMs, Brand Activations, Music Festivals, and State Protocol Engagements.'
    },
    category: 'primary'
  },
  {
    path: '/portofolio',
    priority: 0.9,
    changefreq: 'weekly',
    title: {
      id: 'Portofolio & Rekam Jejak Acara Nasional | EO Indonesia',
      en: 'Portfolio & National Event Track Record | EO Indonesia'
    },
    description: {
      id: 'Dokumentasi studi kasus teknis dan keberhasilan penyelenggaraan acara VVIP di Bali, Jakarta, Yogyakarta, hingga Papua.',
      en: 'Technical case studies and successful executions of VVIP events across Bali, Jakarta, Yogyakarta, and Papua.'
    },
    category: 'primary'
  },
  {
    path: '/artikel',
    priority: 0.85,
    changefreq: 'weekly',
    title: {
      id: 'Wawasan & Regulasi Acara Indonesia | EO Indonesia',
      en: 'Event Industry Insights & Regulations | EO Indonesia'
    },
    description: {
      id: 'Panduan izin keramaian Mabes Polri & Polda, SOP rekayasa massa Mojo Barrier, tren teknologi LED 3D anamorphic, dan panduan K3L.',
      en: 'National Police permitting blueprints, crowd engineering SOPs, 3D anamorphic stage innovations, and HSE checklists.'
    },
    category: 'primary'
  },
  {
    path: '/kontak',
    priority: 0.8,
    changefreq: 'monthly',
    title: {
      id: 'Kontak Resmi, Hotline Konsultasi & Lokasi Kantor | EO Indonesia',
      en: 'Official Contact, 24/7 Hotline & Hub Offices | EO Indonesia'
    },
    description: {
      id: 'Hubungi kantor pusat EO Indonesia di Banguntapan, Bantul, D.I. Yogyakarta, hotline 24/7 +62 853-6082-1111, dan form RFP resmi.',
      en: 'Connect with EO Indonesia headquarters in Banguntapan, Bantul, D.I. Yogyakarta, 24/7 hotline +62 853-6082-1111, and official RFP desk.'
    },
    category: 'primary'
  },
  {
    path: '/wilayah',
    priority: 0.85,
    changefreq: 'monthly',
    title: {
      id: 'Cakupan 38 Provinsi & Hub Logistik Nusantara | EO Indonesia',
      en: '38 Provinces Coverage & National Logistics Hubs | EO Indonesia'
    },
    description: {
      id: 'Infrastruktur pergudangan rigging, lighting, dan genset di 5 regional hub: Jawa, Sumatera, Bali-Nusa, Kalimantan, dan Sulawesi-Papua.',
      en: 'Rigging, lighting, and power generator warehousing across 5 regional hubs spanning all 38 Indonesian provinces.'
    },
    category: 'region'
  },
  // Dedicated High-Intent City Hub Pages
  {
    path: '/eo-jogja',
    priority: 0.9,
    changefreq: 'weekly',
    title: {
      id: 'EO Jogja Terbaik & Profesional - Jasa Event Organizer Yogyakarta Resmi',
      en: 'EO Jogja Professional Event Organizer - Official Yogyakarta Production'
    },
    description: {
      id: 'Kantor Pusat EO Indonesia di Yogyakarta. Layanan MICE, gathering korporat, konser musik & persewaan panggung rigging berstandar K3L.',
      en: 'EO Indonesia Headquarters in Yogyakarta. Comprehensive MICE, corporate gatherings, concerts, and TUV rigging staging.'
    },
    category: 'region'
  },
  {
    path: '/eo-solo',
    priority: 0.9,
    changefreq: 'weekly',
    title: {
      id: 'EO Solo Terbaik & Profesional - Jasa Event Organizer Surakarta & Solo Raya',
      en: 'EO Solo Professional Event Organizer - Surakarta & Solo Raya'
    },
    description: {
      id: 'Layanan event organizer di Solo, De Tjolomadoe, Tirtonadi Hall & Edutorium UMS. Spesialis event heritage, gathering & konser.',
      en: 'Premier event management in Surakarta at De Tjolomadoe, Tirtonadi Hall & Edutorium UMS. Heritage and corporate gala staging.'
    },
    category: 'region'
  },
  {
    path: '/eo-semarang',
    priority: 0.9,
    changefreq: 'weekly',
    title: {
      id: 'EO Semarang Terbaik & Profesional - Jasa Event Organizer Ibu Kota Jateng',
      en: 'EO Semarang Professional Event Organizer - Central Java Capital Hub'
    },
    description: {
      id: 'Jasa EO Semarang berstandar K3L. Penyelenggaraan MICE di MCC Semarang, expo B2B di PRPP, dan gathering korporasi industri.',
      en: 'OHS-compliant event management in Semarang. Regional MICE at MCC Semarang, PRPP exhibitions, and industrial corporate galas.'
    },
    category: 'region'
  },
  {
    path: '/eo-surabaya',
    priority: 0.9,
    changefreq: 'weekly',
    title: {
      id: 'EO Surabaya Terbaik & Profesional - Jasa Event Organizer Jawa Timur',
      en: 'EO Surabaya Professional Event Organizer - East Java Metropolitan Hub'
    },
    description: {
      id: 'Manajemen acara RUPS korporat, brand activation otomotif, dan pameran B2B di Grand City Convex & Jatim Expo Surabaya.',
      en: 'Corporate AGM, automotive brand activation, and B2B trade exhibitions at Grand City Convex & Jatim Expo Surabaya.'
    },
    category: 'region'
  },
  {
    path: '/eo-jakarta',
    priority: 0.95,
    changefreq: 'weekly',
    title: {
      id: 'EO Jakarta Terbaik & Profesional - Jasa Event Organizer Jabodetabek Berstandar Global',
      en: 'EO Jakarta Premier Event Organizer - Global Standard Production in Jabodetabek'
    },
    description: {
      id: 'Penyelenggara KTT internasional di JCC Senayan & ICE BSD, gala dinner konglomerasi, dan mega konser dengan protokol Paspampres & Mabes Polri.',
      en: 'Multilateral international summits at JCC Senayan & ICE BSD, conglomerate galas, and mega concerts under Presidential protocol.'
    },
    category: 'region'
  }
];

/**
 * Secondary deep-dive routes for enhanced crawler indexing of high-intent keywords
 */
export const SUB_SITEMAP_ROUTES: SitemapRoute[] = [
  // Specific services deep-links
  {
    path: '/layanan?service=mice',
    priority: 0.8,
    changefreq: 'weekly',
    title: {
      id: 'Layanan Konferensi MICE, Summit & Bilateral Forum | EO Indonesia',
      en: 'MICE Conference, Summit & Bilateral Forum Services | EO Indonesia'
    },
    description: {
      id: 'Penyelenggaraan MICE dengan sistem penerjemah simultan Bosch DCN, registrasi biometrik RFID, dan stage LED ultra-wide.',
      en: 'MICE execution with Bosch simultaneous translation, RFID biometric badging, and ultra-wide staging.'
    },
    category: 'service'
  },
  {
    path: '/layanan?service=corporate',
    priority: 0.8,
    changefreq: 'weekly',
    title: {
      id: 'Layanan Corporate Gathering, Gala Dinner & RUPS | EO Indonesia',
      en: 'Corporate Gathering, Gala Dinner & AGM Services | EO Indonesia'
    },
    description: {
      id: 'Produksi corporate anniversary megah, award ceremony, dan sistem voting RUPS tersertifikasi.',
      en: 'Monumental corporate anniversaries, recognition galas, and certified AGM e-voting.'
    },
    category: 'service'
  },
  {
    path: '/layanan?service=brand-activation',
    priority: 0.8,
    changefreq: 'weekly',
    title: {
      id: 'Layanan Brand Activation & Peluncuran Produk | EO Indonesia',
      en: 'Brand Activation & Product Reveal Services | EO Indonesia'
    },
    description: {
      id: 'Peluncuran produk otomotif & teknologi dengan panggung anamorphic 3D dan mechanical reveal.',
      en: 'Automotive and high-tech reveals with anamorphic 3D tunnels and precision mechanics.'
    },
    category: 'service'
  },
  {
    path: '/layanan?service=concert-festival',
    priority: 0.8,
    changefreq: 'weekly',
    title: {
      id: 'Layanan Konser Musik & Festival Ruang Terbuka | EO Indonesia',
      en: 'Music Concert & Open-Air Festival Production | EO Indonesia'
    },
    description: {
      id: 'Produksi festival musik kapasitas 10.000+ penonton dengan rigging sertifikasi TUV dan sound line-array.',
      en: 'Festival production for 10,000+ crowds with TUV rigging and d&b audiotechnik line-arrays.'
    },
    category: 'service'
  },
  {
    path: '/layanan?service=government-protocol',
    priority: 0.8,
    changefreq: 'weekly',
    title: {
      id: 'Layanan Protokol Kenegaraan & Groundbreaking VVIP | EO Indonesia',
      en: 'State Protocol & VVIP Groundbreaking Services | EO Indonesia'
    },
    description: {
      id: 'Pengawalan protokoler kenegaraan bersinergi Paspampres, Kemensetneg, dan perizinan lengkap.',
      en: 'State protocol execution in coordination with Presidential Guards and national ministries.'
    },
    category: 'service'
  },

  // Deep-dive articles for ranking on national queries
  {
    path: '/artikel?id=izin-keramaian-polri-guide',
    priority: 0.85,
    changefreq: 'weekly',
    title: {
      id: 'Panduan Lengkap Pengurusan Izin Keramaian Mabes Polri & Polda | EO Indonesia',
      en: 'Guide to National Police Crowd Permitting for Large Events | EO Indonesia'
    },
    description: {
      id: 'Syarat administrasi izin keramaian Mabes Polri, timeline H-30, rekomendasi Intelkam, dan standar Andalalin.',
      en: 'National Police crowd permit roadmap, 30-day timeline, intelligence reviews, and traffic assessments.'
    },
    category: 'article'
  },
  {
    path: '/artikel?id=sop-crowd-management-festival',
    priority: 0.8,
    changefreq: 'weekly',
    title: {
      id: 'SOP Crowd Dynamics & Desain Mojo Barrier Festival | EO Indonesia',
      en: 'SOP Crowd Dynamics & Barrier Engineering for Festivals | EO Indonesia'
    },
    description: {
      id: 'Teknik pemasangan sayap ganda Mojo Barrier, zonasi pit penonton, dan mitigasi gelombang dorong panggung.',
      en: 'Dual-wing Mojo barrier setups, pit zoning, and crowd surge mitigation for festivals.'
    },
    category: 'article'
  },
  {
    path: '/artikel?id=teknologi-led-3d-anamorphic',
    priority: 0.8,
    changefreq: 'weekly',
    title: {
      id: 'Tren Produksi Panggung: LED 3D Anamorphic & AI Delegate Check-In | EO Indonesia',
      en: 'Stage Trends: 3D Anamorphic LED & AI Delegate Check-In | EO Indonesia'
    },
    description: {
      id: 'Penerapan panel LED lengkung P1.8, kalkulasi sweet spot audiens, dan cetak id-card 3 detik.',
      en: 'Fine-pitch curved LED P1.8 deployment, audience sweet spots, and touchless 3-second badging.'
    },
    category: 'article'
  }
];

/**
 * Gets all sitemap routes combined
 */
export function getAllSitemapRoutes(): SitemapRoute[] {
  return [...PRIMARY_SITEMAP_ROUTES, ...SUB_SITEMAP_ROUTES];
}

/**
 * Generates standards-compliant XML sitemap string
 * @param domain Base domain (default: https://eoindonesia.id)
 * @param includeSubRoutes Whether to include deep service and article query routes
 */
export function generateSitemapXml(
  domain: string = CANONICAL_DOMAIN,
  includeSubRoutes: boolean = true
): string {
  const cleanDomain = domain.replace(/\/+$/, '');
  const today = new Date().toISOString().split('T')[0];
  const routes = includeSubRoutes ? getAllSitemapRoutes() : PRIMARY_SITEMAP_ROUTES;

  const urlElements = routes
    .map((route) => {
      const loc = `${cleanDomain}${route.path}`;
      // Clean XML encoding
      const escapedLoc = escapeXml(loc);
      const lastmod = route.lastmod || today;

      // Hreflang alternates for Google Multilingual Indexing
      const idUrl = escapeXml(`${cleanDomain}${route.path}`);
      const enParam = route.path.includes('?') ? '&amp;lang=en' : '?lang=en';
      const enUrl = escapeXml(`${cleanDomain}${route.path}${enParam}`);

      return `  <url>
    <loc>${escapedLoc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
    <xhtml:link rel="alternate" hreflang="id" href="${idUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${idUrl}" />
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!--
  EO Indonesia - Sitemap XML Resmi
  Disusun otomatis sesuai kaidah Google Webmaster Tools & Protokol W3C.
  Total Entri: ${routes.length} Halaman
  Cakupan: 38 Provinsi Republik Indonesia
  Kontak Teknis: eoindonesia.id@gmail.com
-->
${urlElements}
</urlset>`;
}

/**
 * Escapes characters for XML validity
 */
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

/**
 * Browser-side download helper
 */
export function triggerSitemapDownload(
  filename: string = 'sitemap.xml',
  domain: string = CANONICAL_DOMAIN
): void {
  const xmlContent = generateSitemapXml(domain);
  const blob = new Blob([xmlContent], { type: 'application/xml;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
