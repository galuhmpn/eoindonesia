/**
 * EO Indonesia - Regional City Hubs Data & Localized SEO Content
 * Deeply researched for high search intent keywords:
 * - "eo [kota]", "event organizer [kota]", "jasa eo [kota]", "biaya eo [kota]"
 * - "harga eo [kota]", "paket eo [kota]", "rekomendasi eo [kota] terbaik"
 * Structured for Google AI Overviews (SGE) & anti-cannibalization standards.
 */

export interface CityPricingTier {
  name: string;
  priceEstimate: string;
  scale: string;
  deliverables: string[];
  techSpecs: string;
  idealFor: string;
}

export interface CityVenue {
  name: string;
  type: string;
  capacity: string;
  location: string;
  notes: string;
}

export interface CityFaq {
  q: string;
  a: string;
}

export interface CityHubDetail {
  slug: string; // e.g. 'eo-jogja'
  cityName: string; // e.g. 'Jogja'
  province: string;
  fullName: string; // e.g. 'D.I. Yogyakarta'
  h1Title: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  geo: {
    lat: number;
    lng: number;
    address: string;
    phone: string;
    email: string;
    postalCode: string;
  };
  overviewSnippet: string; // concise answer for Google AI Overview
  definition: string;
  whyChooseUs: string[];
  pricingTiers: CityPricingTier[];
  topVenues: CityVenue[];
  permitGuide: {
    authority: string;
    jurisdictionNotes: string;
    leadTime: string;
    requirements: string[];
  };
  localFleet: {
    depotName: string;
    mobilizationTime: string;
    equipmentReady: string[];
  };
  caseStudy: {
    title: string;
    venue: string;
    attendance: string;
    summary: string;
    specs: string;
  };
  faqs: CityFaq[];
}

export const CITY_HUBS_DATA: Record<string, CityHubDetail> = {
  'eo-jogja': {
    slug: 'eo-jogja',
    cityName: 'Jogja',
    province: 'D.I. Yogyakarta',
    fullName: 'Yogyakarta',
    h1Title: 'EO Jogja - Jasa Event Organizer Yogyakarta Resmi & Profesional',
    tagline: 'Kantor Pusat EO Indonesia. Presisi Produksi MICE, Corporate Gathering, Konser Musik & Gala Dinner di Yogyakarta.',
    metaTitle: 'EO Jogja Terbaik & Profesional - Biaya & Jasa Event Organizer Yogyakarta',
    metaDescription: 'Jasa EO Jogja resmi & bersertifikat K3L. Layanan event organizer gathering, MICE, pernikahan akbar & konser musik di Yogyakarta. Estimasi biaya transparan.',
    keywords: [
      'eo jogja',
      'event organizer jogja',
      'jasa eo jogja',
      'biaya eo jogja',
      'harga jasa event organizer yogyakarta',
      'eo gathering jogja',
      'rekomendasi eo jogja terbaik',
      'eo mice yogyakarta',
      'vendor sound system jogja'
    ],
    geo: {
      lat: -7.8228,
      lng: 110.3985,
      address: 'Gg. Nuri No.99, Pringgolayan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198',
      phone: '+62 853-6082-1111',
      email: 'eoindonesia.id@gmail.com',
      postalCode: '55198'
    },
    overviewSnippet: 'EO Jogja adalah layanan event organizer profesional dari EO Indonesia yang berkantor pusat di Yogyakarta. Kami mengelola perencanaan konsep, perizinan kepolisian (Polda DIY/Polresta), penyediaan panggung rigging TUV, sound system line-array, LED display P1.8, hingga manajemen rundown acara berskala 100 hingga 15.000+ peserta dengan standar keselamatan K3L.',
    definition: 'Sebagai kota budaya dan pusat pendidikan nasional, penyelenggaraan acara di Yogyakarta menuntut perpaduan antara etika protokoler, estetika artistik, dan presisi teknis. EO Indonesia hadir dengan kantor pusat langsung di Banguntapan, Bantul, menjamin respon survei lapangan di bawah 2 jam dan mobilisasi armada panggung tercepat di seluruh wilayah Sleman, Bantul, Kota Jogja, Kulon Progo, dan Gunungkidul.',
    whyChooseUs: [
      'Kantor Pusat Langsung di Yogyakarta (Bantul & Sleman Hub)',
      'Gudang Sound System, Rigging & LED Screen Mandiri Tanpa Pihak Ketiga',
      'Jalur Koordinasi Resmi Polda DIY & Polresta Sleman/Bantul/Kota',
      'Tim Produksi Berlisensi K3L & Rigging Rancang Bangun TUV',
      'Transparansi Estimasi Biaya & Format Proposal RFP Profesional'
    ],
    pricingTiers: [
      {
        name: 'Paket Corporate Gathering & Outbound Jogja',
        priceEstimate: 'Mulai Rp 2.500.000 (Tergantung Kebutuhan & Skala, s/d Rp 75 Jt / Acara)',
        scale: '50 – 350 Peserta',
        deliverables: [
          'Konsep tema acara & Master Rundown',
          'MC Profesional & Fun Outbound Facilitator',
          'Panggung Backdrop 3D / Modul Custom 6x3m',
          'Audio System 5.000 Watt + Wireless Mic',
          'Dokumentasi Foto & Video Cinematic Highlight Drone',
          'Perizinan tempat & koordinasi pengamanan lokal'
        ],
        techSpecs: 'Sound System JBL/Yamaha DSR, Lighting Par LED + Moving Beam, Rigging Mini',
        idealFor: 'Gathering Perusahaan di Kaliurang, Prambanan, Malioboro, atau Pantai Gunungkidul'
      },
      {
        name: 'Paket Konferensi MICE & Seminar Nasional Yogyakarta',
        priceEstimate: 'Mulai Rp 55.000.000 – Rp 145.000.000',
        scale: '200 – 1.500 Delegasi',
        deliverables: [
          'Sistem Registrasi QR Code / RFID Kios Cerdas',
          'Panggung Keynote dengan Curved LED Wall P2.6',
          'Tata Suara Akustik Terdistribusi (Delay Tuning)',
          'Sistem Penerjemah Simultan Multibahasa (Opsional)',
          'Backdrop Galeri Sponsor & Bilik Booth Modular',
          'Manajemen VIP & Protokoler Akademik / Pemerintahan'
        ],
        techSpecs: 'Fine Pitch LED Screen 12x4m, Line-Array Sound, Live Cam Multi-Switching 4K',
        idealFor: 'Simposium Kedokteran, Rapat Kerja Nasional (Rakernas), Forum Ilmiah di JEC / Hotel Bintang 5'
      },
      {
        name: 'Paket Konser Musik & Festival Seni Budaya Jogja',
        priceEstimate: 'Mulai Rp 95.000.000 – Rp 198.000.000 (Maksimal ≤ 200 Jt)',
        scale: '1.000 – 10.000 Penonton',
        deliverables: [
          'Struktur Rigging Panggung Heavy Aluminum Truss TUV',
          'Dual-Wing Mojo Barrier Anti-Dorong Sesuai SOP',
          'Izin Keramaian Lengkap Polda DIY, Sat Intelkam & Dishub',
          'Sistem Tiketing Gate Turnstile & Tim Medis Ambulans',
          'Show Director & Stage Manager Profesional',
          'Genset Silent Sinkronisasi Ganda (ATS Failover)'
        ],
        techSpecs: 'd&b audiotechnik KSL Series, LED Anamorphic 3D, Moving Beam 380W, Genset 350 kVA',
        idealFor: 'Festival Musik Kampus, Konser Terbuka Candi Prambanan, Stadion Kridosono, Maguwoharjo'
      }
    ],
    topVenues: [
      {
        name: 'Jogja Expo Center (JEC)',
        type: 'Exhibition & Convention Center',
        capacity: 'Hingga 10.000 orang',
        location: 'Jl. Raya Janti, Banguntapan, Bantul',
        notes: 'Pusat pameran terbesar di DIY, ideal untuk expo industri, wisuda akbar, konser indoor, dan konferensi B2B.'
      },
      {
        name: 'The Alana Hotel & Convention Center Yogyakarta',
        type: 'Grand Ballroom & Hotel Bintang 4',
        capacity: 'Hingga 3.000 orang (Mataram Grand Ballroom)',
        location: 'Jl. Palagan Tentara Pelajar, Sleman',
        notes: 'Ballroom termewah di koridor utara Jogja dengan akustik terisolasi tinggi untuk MICE dan Gala Dinner corporate.'
      },
      {
        name: 'Royal Ambarrukmo Yogyakarta',
        type: 'Heritage Ballroom & Pendopo Agung',
        capacity: 'Hingga 2.000 orang (The Kasultanan Ballroom)',
        location: 'Jl. Laksda Adisucipto, Sleman',
        notes: 'Sentuhan nuansa aristokrat Keraton dengan fasilitas modern, sangat cocok untuk acara kenegaraan dan royal wedding.'
      },
      {
        name: 'Pelataran Candi Prambanan (Open Air Theater)',
        type: 'World Heritage Outdoor Amphitheater',
        capacity: 'Hingga 5.000 penonton',
        location: 'Prambanan, Klaten / Sleman',
        notes: 'Pemandangan eksotis mahakarya candi, venue legendaris untuk konser jazz, orkestra, dan peluncuran produk prestisius.'
      }
    ],
    permitGuide: {
      authority: 'Polda DIY (Dit Intelkam) & Polresta Sleman / Polresta Yogyakarta / Polres Bantul',
      jurisdictionNotes: 'Untuk acara di atas 1.000 penonton atau melibatkan artis nasional, izin wajib diajukan melalui Dit Intelkam Polda DIY minimal H-21. Untuk venue cagar budaya seperti kawasan Keraton atau Candi, diperlukan rekomendasi Balai Pelestarian Kebudayaan (BPK).',
      leadTime: '14 – 30 Hari Kalender sebelum hari pelaksanaan',
      requirements: [
        'Surat Rekomendasi Tempat (Venue Authorization Letter)',
        'Analisis Dampak Lalu Lintas (Andalalin) Polresta / Dishub DIY',
        'Denah Panggung, Jalur Evakuasi & Titik Kumpul K3L',
        'Rundown Acara & Roster Pengisi Acara / Artis',
        'Surat Kuasa dan Legalitas Resmi EO Indonesia'
      ]
    },
    localFleet: {
      depotName: 'Central Command & Fleet Depot Banguntapan, Bantul',
      mobilizationTime: '< 2 Jam Seluruh Wilayah Kota Jogja & Sleman',
      equipmentReady: [
        'Rigging Aluminum Heavy Duty 16x12m TUV Certified',
        'Sound System Line Array d&b & JBL VTX Series',
        'Fine-Pitch LED Screen P2.6 & P3.9 Outdoor Waterproof (200+ m²)',
        'Genset Cummins Silent 150 kVA - 300 kVA Twin Pack ATS',
        'Mojo Barrier Baja Standar Mabes Polri (300 Meter Lari)'
      ]
    },
    caseStudy: {
      title: 'Simposium Akademik Nasional & Gala Gathering Nusantara 2025',
      venue: 'The Kasultanan Ballroom, Royal Ambarrukmo Yogyakarta',
      attendance: '1.200 Delegasi & Tamu VVIP',
      summary: 'Eksekusi konferensi saintifik dan gala dinner dengan tata panggung 3D curved LED, sistem penerjemah simultan, dan siaran langsung multi-kamera tanpa latensi.',
      specs: 'LED P2.6 Curved 24m x 4.5m, Bosch Wireless Translation, Zero Rundown Slip'
    },
    faqs: [
      {
        q: 'Berapa rata-rata biaya jasa EO di Jogja?',
        a: 'Biaya jasa EO di Jogja sangat terjangkau & fleksibel: harga start mulai dari Rp 2.500.000 tergantung kebutuhan spesifik dan skala acara (seperti jasa konseptor/modul teknis tertentu atau mini event). Untuk paket corporate gathering berkisar Rp 25 juta – Rp 75 juta; seminar MICE Rp 55 juta – Rp 145 juta; dan festival panggung seni dirancang presisi dengan jaminan anggaran tidak melebihi plafon Rp 200 juta tanpa biaya tersembunyi.'
      },
      {
        q: 'Apakah EO Indonesia mengurus seluruh perizinan acara di Yogyakarta?',
        a: 'Ya, tim legal operasional kami mengurus perizinan menyeluruh dari Sat Intelkam Polresta/Polda DIY, rekomendasi Satpol PP, Dinas Perhubungan (Andalalin), Dinas Kesehatan (standby ambulans), hingga izin lingkungan warga sekitar venue.'
      },
      {
        q: 'Di mana kantor fisik EO Indonesia di Yogyakarta?',
        a: 'Kantor pusat dan workshop staging kami beralamat di Gg. Nuri No.99, Pringgolayan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, D.I. Yogyakarta 55198. Klien dapat berkonsultasi langsung di studio kami atau tim kami mengunjungi kantor Anda.'
      },
      {
        q: 'Apakah bisa menyewa peralatan panggung (sound, lighting, LED) saja tanpa konsep acara?',
        a: 'Bisa. Selain manajemen acara menyeluruh (full-service EO), kami juga melayani rental perlengkapan teknis panggung (technical staging provider) dengan operator sound engineer dan lighting programmer berlisensi.'
      }
    ]
  },

  'eo-solo': {
    slug: 'eo-solo',
    cityName: 'Solo',
    province: 'Jawa Tengah',
    fullName: 'Surakarta (Solo Raya)',
    h1Title: 'EO Solo - Jasa Event Organizer Surakarta & Solo Raya Profesional',
    tagline: 'Mitra Produksi Acara Tepercaya di Solo, Karanganyar, Sukoharjo, Klaten & Boyolali. Pengalaman MICE, Corporate Event & Heritage Staging.',
    metaTitle: 'EO Solo Terbaik & Profesional - Jasa Event Organizer Surakarta & Biaya',
    metaDescription: 'Jasa EO Solo resmi & berpengalaman di Surakarta. Melayani corporate gathering, MICE di De Tjolomadoe, konser musik & peluncuran produk di Solo Raya.',
    keywords: [
      'eo solo',
      'event organizer solo',
      'jasa eo solo',
      'biaya eo solo',
      'eo surakarta',
      'harga jasa event organizer solo',
      'eo gathering solo',
      'eo de tjolomadoe',
      'vendor sound system solo'
    ],
    geo: {
      lat: -7.5666,
      lng: 110.8166,
      address: 'Koridor Staging Solo Raya - Akses Jl. Slamet Riyadi & Colomadu, Surakarta',
      phone: '+62 853-6082-1111',
      email: 'eoindonesia.id@gmail.com',
      postalCode: '57141'
    },
    overviewSnippet: 'EO Solo adalah layanan produksi acara dan event management dari EO Indonesia untuk wilayah Surakarta dan Solo Raya. Kami menyediakan layanan lengkap: perizinan Polresta Surakarta, panggung megah berstandar K3L, sound system line-array, layar LED panggung modern, hingga penataan acara di venue bersejarah seperti De Tjolomadoe, Tirtonadi Hall, dan Edutorium UMS.',
    definition: 'Karakter acara di Surakarta (Solo) memadukan keelokan budaya Jawa dengan kemajuan infrastruktur modern seperti akses jalan tol dan ruang konvensi berskala ribuan orang. Didukung kedekatan strategis dari workshop Jogja (45 menit via Tol Jogja-Solo), EO Indonesia memberikan efisiensi biaya logistik terbaik untuk acara di Kota Surakarta, Sukoharjo (Solo Baru), Karanganyar, Boyolali, dan Klaten.',
    whyChooseUs: [
      'Mobilisasi Cepat (< 1 Jam) dari Central Depot via Tol Jogja-Solo',
      'Pemahaman Mendalam Tata Krama & Protokoler Acara Budaya Keraton Solo',
      'Kemitraan Eksklusif dengan De Tjolomadoe, Tirtonadi Hall & Hotel Bintang Solo',
      'Inventaris Peralatan Panggung Mandiri (Rigging, LED P2.6, Line Array Sound)',
      'Pengalaman Menangani Kunjungan Tokoh Nasional & Pejabat Negara'
    ],
    pricingTiers: [
      {
        name: 'Paket Corporate Gathering Solo & Tawangmangu',
        priceEstimate: 'Mulai Rp 2.500.000 (Tergantung Kebutuhan & Skala, s/d Rp 80 Jt / Acara)',
        scale: '80 – 400 Peserta',
        deliverables: [
          'Konsep tema batik/modern & Rundown Presisi',
          'MC & Team Building Fasilitator Berpengalaman',
          'Panggung Modular, Backdrop 3D & Mini Lighting',
          'Sound System 7.500 Watt + Mic Wireless UHF',
          'Liputan Video Cinematic & Foto Dokumentasi',
          'Transportasi Shuttle & Koordinasi Keamanan'
        ],
        techSpecs: 'JBL VRX Line Array, Par LED Full Color, Rigging Truss 8x6m',
        idealFor: 'Family Gathering Korporasi di Solo Baru, Colomadu, atau Resort Tawangmangu Karanganyar'
      },
      {
        name: 'Paket Seminar Nasional & Konvensi MICE Solo',
        priceEstimate: 'Mulai Rp 50.000.000 – Rp 140.000.000',
        scale: '300 – 1.500 Peserta',
        deliverables: [
          'Sistem Akreditasi Registrasi Delegasi QR Scanner',
          'Layar Panggung LED Wall P2.6 Ultra-Wide',
          'Akustik Audio Terdistribusi Anti-Dengung',
          'Booth Pameran & Area Sponsor Terstruktur',
          'Protokoler VVIP & Pengawalan Kedatangan Tamu'
        ],
        techSpecs: 'LED Screen 16x4m P2.6, Digital Mixer Allen & Heath, Live Streaming Multicam 4K',
        idealFor: 'Muktamar, Rapat Kerja Asosiasi, Simposium Ilmiah di Edutorium UMS atau Solo Paragon'
      },
      {
        name: 'Paket Konser Heritage & Festival Musik Solo Raya',
        priceEstimate: 'Mulai Rp 90.000.000 – Rp 195.000.000 (Maksimal ≤ 200 Jt)',
        scale: '1.500 – 8.000 Penonton',
        deliverables: [
          'Rigging Panggung Heavy Duty Aluminum Truss 18x12m',
          'Barikade Mojo Standar K3L Pemecah Massa',
          'Izin Keramaian Polresta Surakarta & Polda Jateng',
          'Manajemen Pintu Masuk Tiket & Pengamanan Gabungan',
          'Genset Sinkron Ganda 250 kVA + 150 kVA'
        ],
        techSpecs: 'd&b audiotechnik Sound, Moving Beam 380W, Strobo Atomic LED, Rigging Load Certified',
        idealFor: 'Konser Terbuka di De Tjolomadoe, Benteng Vastenburg, atau Stadion Manahan'
      }
    ],
    topVenues: [
      {
        name: 'De Tjolomadoe (Colomadu)',
        type: 'Heritage Convention & Concert Hall',
        capacity: 'Hingga 5.000 orang (Tjolomadoe Hall & Sarkara Hall)',
        location: 'Jl. Adi Sucipto, Colomadu, Karanganyar (Solo Barat)',
        notes: 'Pabrik gula bersejarah yang direvitalisasi menjadi pusat konvensi paling ikonik di Jawa Tengah, sempurna untuk konser, gala dinner, dan expo.'
      },
      {
        name: 'Tirtonadi Convention Hall',
        type: 'Integrated Multi-Function Hall',
        capacity: 'Hingga 2.500 orang',
        location: 'Kompleks Terminal Tirtonadi, Gilingan, Surakarta',
        notes: 'Gedung konvensi di lantai atas terminal dengan akses logistik lift barang memadai untuk seminar dan pameran publik.'
      },
      {
        name: 'Edutorium KH Ahmad Dahlan UMS',
        type: 'Mega Arena & Convention Center',
        capacity: 'Hingga 10.000 orang',
        location: 'Jl. Adi Sumarmo, Karanganyar / Surakarta',
        notes: 'Gedung pertemuan terbesar di Solo Raya berstandar stadion indoor, cocok untuk muktamar akbar, wisuda, dan konser musisi internasional.'
      },
      {
        name: 'Solo Paragon Hotel & Residences Ballroom',
        type: 'Luxury Hotel Ballroom',
        capacity: 'Hingga 1.500 orang',
        location: 'Jl. Dr. Soetomo, Mangkubumen, Banjarsari, Surakarta',
        notes: 'Terhubung langsung dengan pusat perbelanjaan, pilihan favorit untuk seminar korporasi dan pesta pernikahan elegan.'
      }
    ],
    permitGuide: {
      authority: 'Polresta Surakarta (Sat Intelkam) & Dit Intelkam Polda Jawa Tengah',
      jurisdictionNotes: 'Untuk acara yang diselenggarakan di area cagar budaya seperti Benteng Vastenburg atau Keraton Kasunanan, dibutuhkan izin koordinasi tambahan bersama Balai Pelestarian Kebudayaan dan Dinas Kebudayaan Surakarta.',
      leadTime: '14 – 25 Hari Kalender sebelum hari perakitan panggung',
      requirements: [
        'Surat Perjanjian Sewa Tempat / Gedung di Solo',
        'Rekomendasi Satgas Pengamanan & Polsek Setempat',
        'Rencana Rekayasa Lalu Lintas Dishub Kota Surakarta',
        'Gambar Layout Panggung & Jalur Evakuasi K3L',
        'Berkas Resmi EO Indonesia'
      ]
    },
    localFleet: {
      depotName: 'Sub-Hub Solo Raya & Akses Cepat Tol Jogja-Solo',
      mobilizationTime: '< 45 Menit Seluruh Kota Solo & Sukoharjo',
      equipmentReady: [
        'Heavy Rigging Truss Aluminum 14x10m',
        'Sound System Line Array 20.000 Watt',
        'LED P2.6 Indoor & P3.9 Outdoor 120 m²',
        'Genset Silent 150 kVA & 250 kVA',
        'Mojo Barrier 200 Meter'
      ]
    },
    caseStudy: {
      title: 'Solo Cultural Gala & Corporate Milestone 2025',
      venue: 'Sarkara Hall, De Tjolomadoe Surakarta',
      attendance: '1.500 Eksekutif & Stakeholder BUMN',
      summary: 'Perhelatan makan malam korporasi dengan perpaduan orkestra gamelan kontemporer, tata cahaya moving-beam dramatis pada pilar heritage, dan sistem registrasi nirkontak.',
      specs: 'Tata Panggung 360 Derajat, Akustik Delay Tuning, Zero Slip Rundown'
    },
    faqs: [
      {
        q: 'Berapa perkiraan biaya menyewa EO di Solo?',
        a: 'Biaya EO di Solo sangat kompetitif & fleksibel: harga start mulai dari Rp 2.500.000 tergantung kebutuhan dan skala acara; paket employee gathering berkisar Rp 28 juta – Rp 80 juta; Rp 50 juta – Rp 140 juta untuk konferensi MICE; serta paket panggung musik heritage mulai Rp 90 juta – Rp 195 juta dengan garansi alokasi anggaran tidak melampaui batas plafon Rp 200 juta. Kami menghitung estimasi secara detail berdasarkan item kebutuhan nyata.'
      },
      {
        q: 'Apakah EO Indonesia memiliki armada panggung sendiri di Solo?',
        a: 'Ya, kami memiliki armada panggung dan peralatan mandiri yang didukung workshop regional terdekat dengan waktu tempuh kurang dari 45 menit melalui jalan tol, sehingga menghemat biaya sewa pihak ketiga dan menekan risiko keterlambatan.'
      },
      {
        q: 'Apakah bisa mengorganisir acara di luar kota Solo seperti Tawangmangu atau Boyolali?',
        a: 'Sangat bisa. Kami berpengalaman mengeksekusi event gathering di kawasan pegunungan Tawangmangu Karanganyar, resort Selo Boyolali, hingga pabrik industri di Sukoharjo dan Klaten.'
      }
    ]
  },

  'eo-semarang': {
    slug: 'eo-semarang',
    cityName: 'Semarang',
    province: 'Jawa Tengah',
    fullName: 'Kota Semarang (Ibu Kota Jateng)',
    h1Title: 'EO Semarang - Jasa Event Organizer Semarang Profesional & Berstandar K3L',
    tagline: 'Solusi Lengkap Penyelenggaraan Konvensi MICE, Gathering Korporasi, Pameran B2B & Konser Musik di Ibu Kota Jawa Tengah.',
    metaTitle: 'EO Semarang Terbaik - Biaya & Jasa Event Organizer Semarang Profesional',
    metaDescription: 'Jasa EO Semarang resmi & berpengalaman. Melayani event organizer corporate gathering, pameran PRPP, MICE di MCC & peluncuran produk di Kota Semarang.',
    keywords: [
      'eo semarang',
      'event organizer semarang',
      'jasa eo semarang',
      'biaya eo semarang',
      'harga jasa event organizer semarang',
      'eo gathering semarang',
      'eo mice semarang',
      'rekomendasi eo semarang',
      'vendor sound system semarang'
    ],
    geo: {
      lat: -6.9666,
      lng: 110.4166,
      address: 'Kawasan Staging Industri Marina & Simpang Lima, Kota Semarang, Jawa Tengah',
      phone: '+62 853-6082-1111',
      email: 'eoindonesia.id@gmail.com',
      postalCode: '50134'
    },
    overviewSnippet: 'EO Semarang adalah layanan event management dan technical production profesional dari EO Indonesia untuk Kota Semarang dan sekitarnya. Kami menghadirkan solusi menyeluruh untuk acara B2B dan pemerintahan di Ibu Kota Jawa Tengah, mencakup perizinan Polrestabes Semarang dan Polda Jateng, tata panggung truss bersertifikasi, LED display indoor/outdoor, dan tata suara line-array presisi.',
    definition: 'Sebagai pusat pemerintahan provinsi dan episentrum industri Jawa Tengah, Kota Semarang memiliki kebutuhan tinggi akan acara korporasi, rapat koordinasi regional, serta pameran dagang berskala besar. Dari venue tepi pantai seperti Marina Convention Center hingga gedung modern Muladi Dome Undip di dataran tinggi Tembalang, EO Indonesia siap mengeksekusi konsep acara Anda dengan zero error.',
    whyChooseUs: [
      'Jaringan Hub Logistik Langsung di Kota Semarang & Koridor Pantura',
      'Pengalaman Luas Acara Dinas Pemerintahan Provinsi Jawa Tengah & BUMN',
      'Kemampuan Teknis Mengatasi Akustik Gedung Beratap Tinggi (Dome & Hanggar)',
      'Perizinan Lengkap Berkoordinasi Langsung Dit Intelkam Polda Jawa Tengah',
      'Armada Genset Silent dengan Automatic Transfer Switch (ATS) Bebas Kedip'
    ],
    pricingTiers: [
      {
        name: 'Paket Corporate Gathering & Gala Dinner Semarang',
        priceEstimate: 'Mulai Rp 2.500.000 (Tergantung Kebutuhan & Skala, s/d Rp 85 Jt / Acara)',
        scale: '100 – 500 Karyawan / Undangan',
        deliverables: [
          'Konsep tema kreatif, visual 3D & Agenda Acara',
          'Master of Ceremony (MC) & Live Band Entertainment',
          'Panggung Modul Kayu H-Beam dilapisi karpet premium',
          'Sound System 10.000 Watt + Full Band Audio Set',
          'Lighting Par LED, Moving Beam & Hazer Atmosferik',
          'Video Highlight Cinematic & Dokumentasi Foto'
        ],
        techSpecs: 'JBL VRX / RCF Line Array, Moving Beam 380W, Stage 10x6m',
        idealFor: 'Annual Dinner & Awarding Perusahaan di Ballroom Hotel Bintang 5 Semarang'
      },
      {
        name: 'Paket Pameran B2B & Konferensi Regional Semarang',
        priceEstimate: 'Mulai Rp 65.000.000 – Rp 150.000.000',
        scale: '500 – 2.000 Pengunjung / Delegasi',
        deliverables: [
          'Partisi Booth Pameran Standar R8 / Custom Fabrikasi',
          'Panggung Plenary dengan Curved LED Wall P2.6',
          'Sistem Registrasi Tiket Pengunjung Terintegrasi',
          'Instalasi Jalur Kelistrikan Standar K3L ke Setiap Booth',
          'Protokol Pengamanan VVIP Pejabat Pemprov Jateng'
        ],
        techSpecs: 'Fine Pitch LED 14x4m, Sound System Line Array, Genset 200 kVA ATS',
        idealFor: 'Expo Industri Manufaktur di Marina Convention Center atau PRPP Semarang'
      },
      {
        name: 'Paket Konser Musik & Festival Kampus Semarang',
        priceEstimate: 'Mulai Rp 95.000.000 – Rp 198.000.000 (Maksimal ≤ 200 Jt)',
        scale: '1.500 – 8.000 Penonton',
        deliverables: [
          'Rigging Panggung Konser Heavy Truss TUV 18x12m',
          'Sistem Barikade Sayap Ganda Mojo Barrier Anti-Dorong',
          'Izin Keramaian Lengkap Polda Jateng & Polrestabes Semarang',
          'Sistem Gate Pemindaian Barcode & Keamanan Terpadu',
          'Genset Sinkronisasi Otomatis 250 kVA Bebas Padam'
        ],
        techSpecs: 'd&b KSL Series Line Array, 80 Panel Moving Head, LED P3.9 Outdoor 150 m²',
        idealFor: 'Konser Terbuka di Stadion Diponegoro, Lapangan Simpang Lima, atau Muladi Dome'
      }
    ],
    topVenues: [
      {
        name: 'Marina Convention Center (MCC) Semarang',
        type: 'Waterfront Multi-Purpose Hall',
        capacity: 'Hingga 5.000 orang',
        location: 'Jl. Villa Marina No.1, Tawangsari, Semarang Barat',
        notes: 'Pusat konvensi terbesar di pesisir Semarang, memiliki akses bongkar muat kontainer langsung dan parkir ribuan kendaraan.'
      },
      {
        name: 'Muladi Dome Undip (Universitas Diponegoro)',
        type: 'Modern Convention Dome',
        capacity: 'Hingga 4.500 orang',
        location: 'Kampus Undip Tembalang, Semarang Selatan',
        notes: 'Bangunan kubah modern berteknologi mutakhir di kawasan kampus perbukitan, sangat representatif untuk wisuda dan summit B2B.'
      },
      {
        name: 'PRPP Jawa Tengah (Grand Maerakaca)',
        type: 'Exhibition Ground & Open-Air Arena',
        capacity: 'Hingga 15.000 penonton outdoor',
        location: 'Jl. Anjasmoro - Tawangsari, Semarang Barat',
        notes: 'Area pameran ikonik Jawa Tengah dengan hanggar indoor dan lapangan terbuka luas untuk festival musik berskala kolosal.'
      },
      {
        name: 'PO Hotel & Grand Ballroom Pollux Mall Paragon',
        type: 'Luxury Hotel Convention',
        capacity: 'Hingga 2.000 orang',
        location: 'Jl. Pemuda No.118, Sekayu, Semarang Tengah',
        notes: 'Ballroom termegah di jantung kota Semarang, menjadi pilihan utama untuk gala dinner korporat dan rapat pleno perbankan.'
      }
    ],
    permitGuide: {
      authority: 'Polrestabes Semarang (Sat Intelkam) & Dit Intelkam Polda Jawa Tengah',
      jurisdictionNotes: 'Untuk acara di kawasan Simpang Lima atau yang menutup badan jalan protokol, diperlukan rekomendasi rekayasa lalu lintas dari Satlantas Polrestabes dan Dishub Kota Semarang minimal H-14.',
      leadTime: '14 – 28 Hari Kalender sebelum hari H',
      requirements: [
        'Surat Bukti Sewa Gedung di Semarang',
        'Analisis Dampak Lalu Lintas (Andalalin) & Kantong Parkir',
        'Surat Izin Keramaian dari Polsek Setempat',
        'Struktur Organisasi Tanggap Darurat K3L',
        'Dokumen Portofolio & NIB EO Indonesia'
      ]
    },
    localFleet: {
      depotName: 'Semarang Fleet Base - Akses Tol Krapyak & Kaligawe',
      mobilizationTime: '< 1 Jam Seluruh Wilayah Kota Semarang',
      equipmentReady: [
        'Rigging Aluminum Heavy Duty 16x12m',
        'Sound System Line Array 25.000 Watt',
        'LED Wall P2.6 & P3.9 (180 m²)',
        'Genset Silent 200 kVA Twin ATS',
        'Mojo Barrier 250 Meter'
      ]
    },
    caseStudy: {
      title: 'Central Java Maritime Logistics Expo & B2B Summit 2025',
      venue: 'Marina Convention Center (MCC), Semarang',
      attendance: '2.800 Peserta Industri & Pelabuhan',
      summary: 'Penyelenggaraan pameran logistik terpadu dengan 85 booth modular, panggung pembukaan dengan efek mapping, dan sistem akreditasi biometrik nir-antrean.',
      specs: '85 Booth R8 Standar Internasional, Rigging Ground Support, Zero Accident K3L'
    },
    faqs: [
      {
        q: 'Berapa tarif jasa EO di Semarang untuk corporate gathering?',
        a: 'Paket jasa EO di Semarang memiliki harga start fleksibel mulai dari Rp 2.500.000 tergantung kebutuhan dan skala acara. Untuk gathering perusahaan skala 100–500 orang berkisar Rp 30 juta – Rp 85 juta lengkap dengan panggung, sound system, lighting, MC, hiburan, dan dokumentasi. Untuk event MICE dan festival panggung, estimasi berada di rentang Rp 65 juta – Rp 198 juta, dipastikan terkendali agar tidak melebihi pagu anggaran maksimal Rp 200 juta.'
      },
      {
        q: 'Apakah EO Indonesia sanggup menangani konser musik besar di Semarang?',
        a: 'Sangat sanggup. Kami memiliki inventaris rigging panggung aluminum TUV, barikade Mojo Barrier berstandar K3L nasional, sound system line-array berdaya tinggi, serta tim produksi yang berpengalaman mengurus perizinan Polda Jateng.'
      },
      {
        q: 'Bagaimana alur konsultasi dan pengajuan proposal acara di Semarang?',
        a: 'Cukup klik tombol "Request Proposal (RFP)" di web kami atau hubungi nomor WhatsApp hotline resmi +62 853-6082-1111. Tim show director kami akan merespons dalam waktu 15 menit dan menyusun proposal teknis serta RAB lengkap dalam 1x24 jam.'
      }
    ]
  },

  'eo-surabaya': {
    slug: 'eo-surabaya',
    cityName: 'Surabaya',
    province: 'Jawa Timur',
    fullName: 'Kota Surabaya (Metropolitan Jawa Timur)',
    h1Title: 'EO Surabaya - Jasa Event Organizer Surabaya Profesional & Bersertifikat',
    tagline: 'Mitra Event Production Terpercaya di Surabaya, Sidoarjo, Gresik & Malang. Spesialis MICE Internasional, Brand Activation & Corporate Gala.',
    metaTitle: 'EO Surabaya Terbaik & Profesional - Jasa Event Organizer Surabaya & Biaya',
    metaDescription: 'Jasa EO Surabaya resmi & bersertifikat K3L. Melayani event organizer corporate gathering, peluncuran produk, MICE di Grand City Convex & konser musik Surabaya.',
    keywords: [
      'eo surabaya',
      'event organizer surabaya',
      'jasa eo surabaya',
      'biaya eo surabaya',
      'harga jasa event organizer surabaya',
      'eo gathering surabaya',
      'eo grand city surabaya',
      'eo mice surabaya',
      'vendor sound system surabaya'
    ],
    geo: {
      lat: -7.2575,
      lng: 112.7521,
      address: 'Kompleks Staging Rungkut Industri & Surabaya Pusat, Kota Surabaya, Jawa Timur',
      phone: '+62 853-6082-1111',
      email: 'eoindonesia.id@gmail.com',
      postalCode: '60293'
    },
    overviewSnippet: 'EO Surabaya adalah layanan manajemen acara dan produksi teknis berstandar internasional dari EO Indonesia untuk Surabaya dan kawasan Gerbangkertosusila (Gresik, Bangkalan, Mojokerto, Surabaya, Sidoarjo, Lamongan). Kami menyediakan sistem panggung bersertifikasi TUV, layar LED ultra-wide, sound system d&b audiotechnik, dan pengurusan izin keramaian Polrestabes Surabaya hingga Polda Jatim.',
    definition: 'Sebagai kota metropolitan terbesar kedua di Indonesia dan gerbang ekonomi Indonesia Timur, Surabaya menuntut standar penyelenggaraan acara yang setara dengan ibu kota Jakarta. EO Indonesia hadir dengan infrastruktur armada staging mandiri di kawasan Rungkut dan Surabaya Barat, memastikan keandalan eksekusi tanpa kompromi untuk rapat umum pemegang saham (RUPS), pameran B2B di Grand City Convex, hingga aktivasi brand otomotif multinasional.',
    whyChooseUs: [
      'Depot Peralatan Staging & Rigging Mandiri di Surabaya',
      'Spesialis Tata Acara RUPS Korporat, Perbankan & BUMN Industri',
      'Hubungan Resmi dengan Venue Utama (Grand City, Jatim Expo, Dyandra)',
      'Sistem Audio Visual Canggih (LED Anamorphic 3D, Dante Network Sound)',
      'Kepatuhan Standar Keselamatan Kerja K3L Zero-Incident Bersertifikasi'
    ],
    pricingTiers: [
      {
        name: 'Paket Corporate Gala Dinner & RUPS Tahunan Surabaya',
        priceEstimate: 'Mulai Rp 2.500.000 (Tergantung Kebutuhan & Skala, s/d Rp 120 Jt / Acara)',
        scale: '150 – 800 Peserta',
        deliverables: [
          'Konsep tema panggung elegan & Screen Graphics Kontemporer',
          'Sistem e-Voting & Registrasi Terenkripsi untuk RUPS',
          'Panggung Leveling Modular & Karpet High-Grade',
          'Tata Suara Terisolasi Jernih (Speech Intelligibility Tinggi)',
          'Layar LED P2.6 Ultra-Wide 14x4m',
          'Protokoler VIP & Show Director Pengendali Waktu Ketat'
        ],
        techSpecs: 'd&b Y-Series Line Array, LED P2.6 UHD, Console Lighting GrandMA2',
        idealFor: 'Gala Dinner BUMN & RUPS Perusahaan Terbuka di Ballroom Shangri-La / Westin Surabaya'
      },
      {
        name: 'Paket Brand Activation & Peluncuran Produk Surabaya',
        priceEstimate: 'Mulai Rp 75.000.000 – Rp 165.000.000',
        scale: '1.000 – 5.000 Pengunjung Mal / Expo',
        deliverables: [
          'Booth Desain Futuristik / Instalasi Panggung 3D Reveal',
          'Efek Mekanikal Pembukaan (Turntable / Kabuki Drop / CO2 Jets)',
          'Sistem Interaktif Pengunjung Berteknologi AI & Touchscreen',
          'Liputan Media Massa Nasional & Kolaborasi Key Opinion Leader (KOL)',
          'Penerbitan Izin Keramaian & Manajemen Pengunjung Mal'
        ],
        techSpecs: 'Curved LED 3D Anamorphic, Lighting Stage Automotive Studio, Heavy Truss Support',
        idealFor: 'Peluncuran Mobil Baru, Smartphone, atau Fashion Expo di Pakuwon Mall / Grand City'
      },
      {
        name: 'Paket Festival Terbuka & Konser Musik Surabaya',
        priceEstimate: 'Mulai Rp 110.000.000 – Rp 198.000.000 (Maksimal ≤ 200 Jt)',
        scale: '2.000 – 10.000 Penonton',
        deliverables: [
          'Panggung Konser Ukuran 20x12m Heavy Roof Truss',
          'Barikade Mojo Barrier Baja Standar Mabes Polri',
          'Izin Keramaian Lengkap Polda Jatim & Sat Intelkam Polrestabes',
          'Sistem Tiketing RFID Turnstile & Koordinasi Koramil/Polsek',
          'Genset Sinkronisasi Ganda 350 kVA ATS'
        ],
        techSpecs: 'd&b KSL Series 48 Box, 120 Unit Moving Beam, Wall LED P3.9 Outdoor 220 m²',
        idealFor: 'Festival Musik Terbuka di Jatim Expo, Lapangan Kodam V Brawijaya, Parkir Timur Delta Plaza'
      }
    ],
    topVenues: [
      {
        name: 'Grand City Convex Surabaya',
        type: 'Integrated Convention & Exhibition Hall',
        capacity: 'Hingga 8.000 orang (Convention Hall + Exhibition Hall)',
        location: 'Jl. Walikota Mustajab No.1, Genteng, Surabaya',
        notes: 'Pusat konvensi paling bergengsi di tengah kota Surabaya, terhubung dengan mal dan akses langsung jalan tol.'
      },
      {
        name: 'Jatim Expo (JX International)',
        type: 'Mega Exhibition Arena',
        capacity: 'Hingga 15.000 orang',
        location: 'Jl. Ahmad Yani No.99, Wonocolo, Surabaya Selatan',
        notes: 'Hanggar pameran tanpa pilar terluas di Surabaya, sangat cocok untuk konser musik indoor berskala ribuan penonton dan expo mesin industri.'
      },
      {
        name: 'Dyandra Convention Center Surabaya',
        type: 'Modern Convention Center',
        capacity: 'Hingga 3.000 orang',
        location: 'Jl. Basuki Rahmat No.93-105, Tegalsari, Surabaya',
        notes: 'Terletak di kawasan bisnis utama (CBD) Surabaya, lokasi ideal untuk seminar B2B, simposium kedokteran, dan pesta pernikahan prestisius.'
      },
      {
        name: 'The Westin Surabaya & Pakuwon Grand Ballroom',
        type: '5-Star Luxury Ballroom',
        capacity: 'Hingga 5.000 orang',
        location: 'Pakuwon Mall, Jl. Puncak Indah Lontar, Surabaya Barat',
        notes: 'Ballroom hotel terbesar di Indonesia Timur dengan langit-langit setinggi 10 meter bebas pilar, standar kemewahan tertinggi di Surabaya.'
      }
    ],
    permitGuide: {
      authority: 'Polrestabes Surabaya (Sat Intelkam) & Dit Intelkam Polda Jawa Timur',
      jurisdictionNotes: 'Untuk acara dengan kapasitas lebih dari 3.000 orang atau menghadirkan talent artis internasional di Kota Surabaya, verifikasi teknis dilakukan langsung oleh jajaran Dit Intelkam Polda Jatim minimal H-30 hari kalender.',
      leadTime: '14 – 30 Hari Kalender sebelum hari H',
      requirements: [
        'Surat Konfirmasi Sewa Venue di Surabaya',
        'Kajian Teknis Dampak Lalu Lintas (Andalalin) & Parkir',
        'Rencana Penanganan Medis & Kerjasama Rumah Sakit Terdekat',
        'Sertifikasi Kelayakan Uji Beban Rigging Panggung K3L',
        'Legalitas Perusahaan EO Indonesia Berbadan Hukum'
      ]
    },
    localFleet: {
      depotName: 'Surabaya Staging Hub - Rungkut Industri & Pergudangan Barat',
      mobilizationTime: '< 1 Jam Seluruh Area Surabaya, Sidoarjo & Gresik',
      equipmentReady: [
        'Rigging Aluminum Truss Heavy Duty 20x14m TUV',
        'Sound System Line Array d&b & RCF 35.000 Watt',
        'Layar LED P2.6 & P3.9 Outdoor (250 m²)',
        'Genset Silent 250 kVA & 500 kVA ATS',
        'Mojo Barrier 350 Meter'
      ]
    },
    caseStudy: {
      title: 'East Java EV Automotive Reveal & National Dealer Summit 2025',
      venue: 'Grand City Convention Hall, Surabaya',
      attendance: '1.800 Tamu VIP, Media & Dealer',
      summary: 'Peluncuran armada mobil listrik nasional dengan instalasi terowongan anamorphic 3D LED, panggung turntable hidrolik bergerak, dan audio presisi zero-distortion.',
      specs: '120m² P1.8 Curved LED Wall, Turntable Kapasitas 3 Ton, Standar K3L Otomotif'
    },
    faqs: [
      {
        q: 'Berapa rata-rata biaya jasa EO di Surabaya?',
        a: 'Biaya EO di Surabaya memiliki harga start fleksibel mulai dari Rp 2.500.000 tergantung skala dan kebutuhan teknis acara. Untuk program gathering korporasi dan gala dinner berkisar Rp 45 juta – Rp 120 juta; brand activation & expo Rp 75 juta – Rp 165 juta; serta festival terbuka dirancang dalam batas plafon anggaran maksimal Rp 200 juta tanpa pembengkakan biaya.'
      },
      {
        q: 'Apakah EO Indonesia bisa melayani acara di luar Surabaya seperti Malang atau Sidoarjo?',
        a: 'Tentu. Tim dan armada kami secara rutin menangani acara gathering di kawasan wisata Kota Batu & Malang, kawasan industri Sidoarjo dan Pasuruan, serta pabrik semen di Gresik dan Tuban.'
      },
      {
        q: 'Bagaimana standar keselamatan K3L yang diterapkan EO Indonesia di Surabaya?',
        a: 'Setiap instalasi panggung kami wajib memenuhi sertifikasi uji beban rigging rasio 5:1, perlindungan kabel underfloor rubber bridge, proteksi kelistrikan RCD/ELCB pemutus arus otomatis, dan penyiapan jalur evakuasi darurat bertanda fosfor.'
      }
    ]
  },

  'eo-jakarta': {
    slug: 'eo-jakarta',
    cityName: 'Jakarta',
    province: 'DKI Jakarta',
    fullName: 'DKI Jakarta (Jabodetabek)',
    h1Title: 'EO Jakarta - Jasa Event Organizer Jakarta Profesional Berstandar Internasional',
    tagline: 'Penyelenggara Acara Papan Atas di Jakarta, BSD & Sentul. Spesialis KTT Internasional, Gala Dinner Konglomerasi, Peluncuran Produk & Mega Konser.',
    metaTitle: 'EO Jakarta Terbaik & Profesional - Jasa Event Organizer Jakarta & Biaya',
    metaDescription: 'Jasa EO Jakarta resmi berstandar K3L & protokol VVIP. Melayani MICE internasional di JCC/ICE BSD, corporate gathering, konser musik & brand activation Jakarta.',
    keywords: [
      'eo jakarta',
      'event organizer jakarta',
      'jasa eo jakarta',
      'biaya eo jakarta',
      'harga jasa event organizer jakarta',
      'eo gathering jakarta',
      'eo mice jakarta',
      'eo jcc senayan',
      'eo ice bsd',
      'rekomendasi eo jakarta'
    ],
    geo: {
      lat: -6.2088,
      lng: 106.8456,
      address: 'Kawasan Staging Terpadu Koridor TB Simatupang & Kawasan BSD ICE, DKI Jakarta & Banten',
      phone: '+62 853-6082-1111',
      email: 'eoindonesia.id@gmail.com',
      postalCode: '12430'
    },
    overviewSnippet: 'EO Jakarta adalah layanan event organizer dan manajemen produksi tingkat tinggi dari EO Indonesia untuk DKI Jakarta dan area Jabodetabek. Kami melayani konferensi MICE multilateral, gala dinner korporasi konglomerat, pameran internasional, dan mega konser musik dengan dukungan protokol kepresidenan (Paspampres), perizinan Mabes Polri/Polda Metro Jaya, dan teknologi panggung mutakhir.',
    definition: 'Sebagai pusat bisnis dan diplomasi nasional, DKI Jakarta menuntut standar eksekusi acara tanpa celah toleransi (zero-defect standard). Dari ruang konvensi megah Jakarta Convention Center (JCC) di Senayan, Indonesia Convention Exhibition (ICE) di BSD, hingga JIExpo Kemayoran, EO Indonesia memiliki kapasitas teknis, izin resmi, dan tim show director berkaliber global untuk merealisasikan visi acara Anda.',
    whyChooseUs: [
      'Pengalaman Protokoler Kenegaraan VVIP Bersinergi Paspampres & Kemensetneg',
      'Jaringan Izin Mabes Polri (Baintelkam) & Polda Metro Jaya Cepat & Sah',
      'Inventaris Peralatan Mutakhir (LED P1.8, d&b KSL, Console GrandMA3)',
      'Standar Keselamatan Rigging K3L Internasional Tersertifikasi TUV',
      'Dukungan Armada Logistik Terpadu di Jakarta Selatan & Koridor BSD ICE'
    ],
    pricingTiers: [
      {
        name: 'Paket Corporate Gathering & Anniversary Jakarta',
        priceEstimate: 'Mulai Rp 2.500.000 (Tergantung Kebutuhan & Skala, s/d Rp 135 Jt / Acara)',
        scale: '150 – 800 Eksekutif / Karyawan',
        deliverables: [
          'Konsep tema panggung 3D render & Storyline Acara',
          'Master of Ceremony (MC) Papan Atas & Entertainment Live',
          'Panggung Modular Custom dengan Tata Cahaya Spektakuler',
          'Layar LED P2.6 Ultra-Wide High Refresh Rate',
          'Sistem Audio Kejernihan Akustik Tinggi (Zero Feedback)',
          'Manajemen Rundown Menit ke Menit & Live Multicam 4K'
        ],
        techSpecs: 'd&b audiotechnik Sound, Moving Beam 420W, Console Avolites/GrandMA, LED P2.6',
        idealFor: 'Anniversary Korporasi, RUPS, & Malam Apresiasi di Hotel Bintang 5 Jakarta'
      },
      {
        name: 'Paket KTT Internasional & Konvensi MICE Jakarta',
        priceEstimate: 'Mulai Rp 85.000.000 – Rp 175.000.000',
        scale: '300 – 1.500 Delegasi Multinasional',
        deliverables: [
          'Sistem Penerjemah Simultan 6 Bahasa (Bosch DCN Wireless)',
          'Sistem Akreditasi Biometrik & Cetak ID Card Kios 3 Detik',
          'Panggung Keynote dengan Curved Micro-LED P1.8',
          'Ruang Breakout & Bilateral Meeting Akustik Terisolasi',
          'Protokoler VVIP Kenegaraan Terkoordinasi Paspampres',
          'Backbone Internet Simetris Cadangan Ganda (Dual ISP Failover)'
        ],
        techSpecs: 'Fine-Pitch LED P1.8 14x4m, Audio Bosch Integrus, Optical Network Redundancy',
        idealFor: 'KTT Menteri, Forum Multilateral, Simposium Energi & Keuangan di JCC Senayan / ICE BSD'
      },
      {
        name: 'Paket Konser Musik & Brand Activation Spektakuler Jakarta',
        priceEstimate: 'Mulai Rp 120.000.000 – Rp 199.000.000 (Maksimal ≤ 200 Jt)',
        scale: '2.000 – 10.000 Penonton',
        deliverables: [
          'Struktur Mega Truss Rigging Aluminum Bersertifikat Uji Beban',
          'Konfigurasi Sayap Ganda Mojo Barrier Sesuai Pedoman Mabes Polri',
          'Izin Keramaian Lengkap Mabes Polri & Polda Metro Jaya',
          'Sistem Pintu Putar Barcode Turnstile & Barikade Anti-Penerobos',
          'Sistem Kelistrikan Multi-Genset Sinkronisasi Otomatis Bebas Kedip'
        ],
        techSpecs: 'Line Array d&b KSL 64 Box, 150 Unit Beam & Profile, Anamorphic 3D LED, Genset 1.000 kVA',
        idealFor: 'Mega Festival Musik di JIExpo Kemayoran, GBK Senayan, atau Hall 1-3 ICE BSD'
      }
    ],
    topVenues: [
      {
        name: 'Jakarta Convention Center (JCC Senayan)',
        type: 'National Convention Center',
        capacity: 'Hingga 15.000 orang (Plenary Hall & Exhibition Halls)',
        location: 'Jl. Jenderal Gatot Subroto, Senayan, Jakarta Pusat',
        notes: 'Pusat konvensi paling bersejarah dan strategis di Indonesia, venue utama KTT tingkat kepala negara dan pameran internasional.'
      },
      {
        name: 'Indonesia Convention Exhibition (ICE BSD City)',
        type: 'Mega Exhibition & Convention Center',
        capacity: 'Hingga 50.000+ orang (10 Exhibition Halls)',
        location: 'Kawasan BSD City, Tangerang / Jakarta Barat',
        notes: 'Pusat pameran terbesar di Asia Tenggara dengan fasilitas mutakhir, sangat ideal untuk konser musisi dunia dan pameran otomotif GIIAS.'
      },
      {
        name: 'Jakarta International Expo (JIExpo Kemayoran)',
        type: 'Exhibition & Arena Convention',
        capacity: 'Hingga 40.000 orang (Hall A-D & Grand Ballroom)',
        location: 'Gedung Pusat Niaga, Kemayoran, Jakarta Pusat',
        notes: 'Area pameran serbaguna berskala masif dengan kapasitas muat logistik dan daya listrik terbesar di Indonesia.'
      },
      {
        name: 'The Ritz-Carlton Pacific Place Grand Ballroom',
        type: 'Luxury 5-Star Hotel Ballroom',
        capacity: 'Hingga 8.000 orang (Grand Ballroom Bebas Pilar Terluas)',
        location: 'Sudirman Central Business District (SCBD), Jakarta Selatan',
        notes: 'Ballroom hotel termegah di kawasan bisnis SCBD, pilihan eksklusif para konglomerat dan peluncuran produk prestisius.'
      }
    ],
    permitGuide: {
      authority: 'Dit Intelkam Polda Metro Jaya & Baintelkam Mabes Polri',
      jurisdictionNotes: 'Untuk acara dengan penonton lebih dari 5.000 orang atau melibatkan artis mancanegara / diplomat asing, pengajuan izin wajib dilakukan melalui Baintelkam Mabes Polri minimal H-30 hari kalender. Kami memproses seluruh rekomendasi dari Ditlantas, Dinkes, dan Damkar DKI.',
      leadTime: '21 – 35 Hari Kalender sebelum hari H',
      requirements: [
        'Surat Bukti Izin Tempat / Venue Authorization dari Pengelola Gedung',
        'Rencana Pengamanan Taktis (Security Concept) & Gambar Denah K3L',
        'Analisis Dampak Lalu Lintas (Andalalin) Ditlantas Polda Metro Jaya',
        'Roster Artis, Visa Kerja Artis Asing (jika ada) & Rundown Acara',
        'Surat Permohonan Resmi Bermaterai dari EO Indonesia'
      ]
    },
    localFleet: {
      depotName: 'DKI Jakarta Production Depot & BSD Logistics Hub',
      mobilizationTime: '< 1 Jam Seluruh Wilayah DKI Jakarta & Tangerang',
      equipmentReady: [
        'Rigging Aluminum Heavy Duty 24x16m Load Rated',
        'Line Array Sound System d&b KSL & Y-Series (60.000 Watt)',
        'Fine-Pitch LED P1.8 & P2.6 Indoor, P3.9 Outdoor (350+ m²)',
        'Genset Silent Cummins 500 kVA Twin ATS',
        'Mojo Barrier Baja Mabes Polri (500 Meter)'
      ]
    },
    caseStudy: {
      title: 'Multilateral Ministerial Energy Transition Summit & Exhibition 2025',
      venue: 'Plenary Hall, Jakarta Convention Center (JCC) Senayan',
      attendance: '3.500 Delegasi dari 48 Negara',
      summary: 'Konferensi tingkat menteri dengan sistem audio penerjemah simultan nirkabel, kontrol akses biometrik delegasi VIP, dan curved fine-pitch LED display panggung ultra-wide.',
      specs: 'Fine-Pitch Curved LED P1.8 48x6m, Pengawalan Paspampres & Protokol Kenegaraan'
    },
    faqs: [
      {
        q: 'Berapa rata-rata biaya sewa jasa EO di Jakarta?',
        a: 'Biaya sewa jasa EO di Jakarta memiliki harga start mulai dari Rp 2.500.000 tergantung kebutuhan spesifik dan skala acara. Untuk paket corporate gathering berkisar Rp 50 juta – Rp 135 juta; konferensi MICE Rp 85 juta – Rp 175 juta; serta program panggung & brand activation dirancang ketat dengan garansi efisiensi anggaran maksimal tidak lebih dari Rp 200 juta tanpa biaya tersembunyi.'
      },
      {
        q: 'Bagaimana penanganan izin keramaian untuk acara VVIP di Jakarta?',
        a: 'EO Indonesia memiliki tim protokoler dan legal khusus yang berpengalaman mengurus perizinan di tingkat Baintelkam Mabes Polri, Polda Metro Jaya, serta berkoordinasi langsung dengan Paspampres dan Kementerian Sekretariat Negara untuk perhelatan yang dihadiri Presiden, Menteri, atau duta besar negara sahabat.'
      },
      {
        q: 'Apakah EO Indonesia menyediakan peralatan panggung sendiri di Jakarta?',
        a: 'Ya, kami memiliki armada panggung, panggung rigging TUV, sound system d&b audiotechnik, panel LED P1.8/P2.6, dan genset silent mandiri di depot logistik Jakarta Selatan & koridor BSD, sehingga menjamin kualitas produksi kelas dunia tanpa bergantung pada pihak ketiga.'
      }
    ]
  }
};

/**
 * Helper to get all city keys
 */
export const ALL_CITY_SLUGS = ['eo-jogja', 'eo-solo', 'eo-semarang', 'eo-surabaya', 'eo-jakarta'] as const;
export type CitySlug = typeof ALL_CITY_SLUGS[number];
