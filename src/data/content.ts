import { CaseStudy, ServiceItem, TeamMember, InsightArticle, RegionHub } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'summit-energy-2025',
    title: {
      id: 'Indonesia International Energy Transition Summit 2025',
      en: 'Indonesia International Energy Transition Summit 2025'
    },
    category: 'mice',
    categoryLabel: {
      id: 'Konferensi MICE',
      en: 'MICE Conference'
    },
    client: 'Kementerian ESDM & Konsorsium Energi Terbarukan',
    clientType: 'Government',
    location: 'Bali Nusa Dua Convention Center (BNDCC)',
    province: 'Bali',
    year: '2025',
    attendance: '2.800+ Delegasi dari 44 Negara',
    scale: 'medium',
    tagline: {
      id: 'Presisi protokoler VVIP, sistem penerjemah simultan 6 bahasa, dan siaran satelit nir-latensi.',
      en: 'VVIP protocol precision, 6-language simultaneous interpreting, and zero-latency satellite broadcast.'
    },
    objective: {
      id: 'Menyelenggarakan konferensi multilateral transisi energi tingkat menteri dengan standar keamanan diplomatik internasional serta presentasi data multi-layar ultra-lebar.',
      en: 'Deliver a multilateral ministerial energy summit under international diplomatic security standards with ultra-wide multi-screen data presentation.'
    },
    technicalChallenge: {
      id: 'Penataan akustik ruang aula berkubah tinggi dengan RT60 tinggi, sinkronisasi audio sistem Bosch DCN nirkabel untuk 120 pembicara meja bundar, serta isolasi frekuensi bebas interferensi radar maritim.',
      en: 'Acoustic tuning of high-domed hall with high RT60, wireless Bosch DCN audio sync for 120 round-table speakers, and RF isolation free of maritime radar interference.'
    },
    technicalSolution: {
      id: 'Penggelaran acoustic baffle modular tersembunyi, sistem line-array terdistribusi d&b audiotechnik dengan pemrosesan delay digital per baris, serta redundansi jaringan optik ganda terpisah.',
      en: 'Deployment of concealed modular acoustic baffles, distributed d&b audiotechnik line-arrays with per-zone digital delay, and dual redundant isolated optical backbones.'
    },
    specs: {
      audio: 'd&b KSL Series + 6-ch Bosch Simultaneous Translation',
      visual: '48m x 6m Curved P1.8 Fine Pitch LED Wall (3840Hz)',
      riggingLoad: '14,5 Ton Certified Ground Support Aluminum Truss',
      turnaroundTime: '18 Jam Load-in & Rigging Calibration'
    },
    metrics: {
      satisfaction: '99,8%',
      punctuality: 'Tepat Waktu (Zero Rundown Slip)',
      safetyRecord: 'Zero Incident K3L'
    },
    highlights: {
      id: [
        'Protokol keamanan VVIP terintegrasi Paspampres & Kepolisian Daerah Bali',
        'Sistem registrasi biometrik delegasi dengan antrean kurang dari 45 detik',
        'Penerjemah simultan 6 bahasa (Inggris, Mandarin, Arab, Prancis, Spanyol, Indonesia)'
      ],
      en: [
        'VVIP security protocol coordinated with Presidential Security Force & Bali Police',
        'Biometric delegate accreditation system with under 45-second queue time',
        '6-language simultaneous interpretation (EN, ZH, AR, FR, ES, ID)'
      ]
    },
    visualTheme: 'from-blue-600/10 to-indigo-600/10'
  },
  {
    id: 'telkom-gathering-60th',
    title: {
      id: 'Telkom Indonesia Grand Corporate Gathering & Anniversary',
      en: 'Telkom Indonesia Grand Corporate Gathering & Anniversary'
    },
    client: 'PT Telkom Indonesia (Persero) Tbk',
    clientType: 'BUMN',
    category: 'corporate',
    categoryLabel: {
      id: 'Corporate & Gala Event',
      en: 'Corporate & Gala Event'
    },
    location: 'ICE BSD City Hall 1–3, Tangerang',
    province: 'Banten',
    year: '2025',
    attendance: '14.200 Karyawan & Jajaran Direksi',
    scale: 'large',
    tagline: {
      id: 'Panggung kinetik 360 derajat dengan sinkronisasi lighting DMX dan tata suara berdaya 160 kW.',
      en: '360-degree kinetic stage with synchronized DMX lighting and 160 kW sound reinforcement.'
    },
    objective: {
      id: 'Merayakan tonggak sejarah 6 dekade transformasi digital dengan pertunjukan kolosal lintas divisi serta penganugerahan kinerja tahunan.',
      en: 'Celebrate 6 decades of digital transformation with a colossal multi-division show and annual excellence awarding.'
    },
    technicalChallenge: {
      id: 'Kapasitas lantai aula seluas 15.000 m² yang memerlukan pemerataan SPL audio di angka 102 dB tanpa distorsi, dan pergantian panggung musikal 4 band papan atas dalam jeda 8 menit.',
      en: '15,000 sqm exhibition hall requiring uniform 102 dB audio SPL without distortion, and seamless 8-minute turnaround between 4 top headline bands.'
    },
    technicalSolution: {
      id: 'Panggung ganda revolving circular stage dengan rolling riser terkomputerisasi, serta pemodelan akustik EASE 5D untuk 36 unit subwoofer cardioid guna menjaga kejernihan pidato eksekutif.',
      en: 'Dual motorized revolving circular stage with rolling risers, and EASE 5D acoustic modeling for 36 cardioid subwoofers ensuring pristine executive speech intelligibility.'
    },
    specs: {
      audio: 'L-Acoustics K2 Sound System (160 kW Output)',
      visual: 'Kinetic LED Ceiling 120 Winch + 4-Sided Center Cube LED',
      riggingLoad: '38 Ton Certified Rigging Load with Load-Cell Monitoring',
      turnaroundTime: '12 Jam Setup & Load-out 8 Jam'
    },
    metrics: {
      satisfaction: '99,4%',
      punctuality: 'Rundown Akurat per Detik',
      safetyRecord: 'Zero Major Accident'
    },
    highlights: {
      id: [
        'Mobilisasi katering 14.000 pax dengan waktu saji buffet tuntas 25 menit',
        'Gelang gelang LED terprogram DMX disinkronkan ke seluruh audiens',
        'Penataan crowd flow dengan 24 gate keluar-masuk terpisah'
      ],
      en: [
        '14,000 pax catering mobilization completed within 25-minute buffet window',
        'DMX-synchronized interactive LED wristbands for all 14,000 attendees',
        'Structured crowd circulation with 24 dedicated entry and egress portals'
      ]
    },
    visualTheme: 'from-sky-600/10 to-blue-700/10'
  },
  {
    id: 'nusantara-music-festival',
    title: {
      id: 'Nusantara Creative & Music Expo 2025',
      en: 'Nusantara Creative & Music Expo 2025'
    },
    client: 'Promotor Festival Musik Nasional & Kemenparekraf',
    clientType: 'Private',
    category: 'festival',
    categoryLabel: {
      id: 'Festival Musik & Publik',
      en: 'Music Festival & Public'
    },
    location: 'Plaza Barat & Parkir Timur Gelora Bung Karno, Jakarta',
    province: 'DKI Jakarta',
    year: '2025',
    attendance: '48.000 Penonton (3 Hari Pelaksanaan)',
    scale: 'large',
    tagline: {
      id: 'Standardisasi tata kelola crowd control berstandar APMI dan sistem panggung atap beban berat.',
      en: 'APMI-certified crowd control protocols and heavy-load structural roof rigging.'
    },
    objective: {
      id: 'Menyelenggarakan festival musik dan pasar kreatif nusantara dengan 3 panggung paralel, zona kuliner UMKM, dan standar keselamatan publik tanpa kompromi.',
      en: 'Host a nationwide music and creative expo featuring 3 parallel stages, culinary bazaar, and uncompromising crowd safety.'
    },
    technicalChallenge: {
      id: 'Manajemen massa padat di area terbuka saat cuaca ekstrem tropis (angin kencang dan hujan deras), mitigasi sound bleed antar 3 panggung berjarak 180 meter.',
      en: 'Dense outdoor crowd management during tropical monsoon gusts, and sound bleed mitigation between 3 stages separated by only 180 meters.'
    },
    technicalSolution: {
      id: 'Pemasangan sistem panggung Layher Allround bersertifikasi ketahanan angin 80 km/jam, sensor anemometer digital real-time, dan orientasi beam cardioid yang memangkas pantulan suara belakang hingga 18 dB.',
      en: 'Installation of Layher Allround stage structures certified up to 80 km/h wind gusts, real-time digital anemometer telemetry, and cardioid beam angling reducing rear spillage by 18 dB.'
    },
    specs: {
      audio: 'Meyer Sound PANTHER Line Array System',
      visual: 'Outdoor Waterproof IP65 LED Screens 600 m²',
      riggingLoad: '52 Ton Layher Ground Support System',
      turnaroundTime: '72 Jam Konstruksi Panggung Berlapis'
    },
    metrics: {
      satisfaction: '98,9%',
      punctuality: 'Zero Delay antar Penampil',
      safetyRecord: 'Zero Stampede & Medical Response < 2 Menit'
    },
    highlights: {
      id: [
        'Izin keramaian Mabes Polri & Polda Metro Jaya terbit tuntas H-14',
        '3 posko medis terpadu dengan 8 unit ambulans ICU siaga',
        'Sistem Mojo Barrier baja dengan jalur evakuasi pit depan panggung terisolasi'
      ],
      en: [
        'National Police Headquarters crowd permit finalized 14 days in advance',
        '3 integrated medical stations with 8 standby ICU ambulance units',
        'Steel Mojo barrier configuration with dedicated stage-front evacuation pit'
      ]
    },
    visualTheme: 'from-indigo-600/10 to-violet-600/10'
  },
  {
    id: 'automotive-flagship-reveal',
    title: {
      id: 'National Flagship Electric Vehicle World Premiere',
      en: 'National Flagship Electric Vehicle World Premiere'
    },
    client: 'Global Automotive Corporation Indonesia',
    clientType: 'Multinational',
    category: 'activation',
    categoryLabel: {
      id: 'Brand Activation & Launch',
      en: 'Brand Activation & Launch'
    },
    location: 'Jakarta International Expo (JIExpo) Kemayoran',
    province: 'DKI Jakarta',
    year: '2025',
    attendance: '1.500 Media, VIP Dealer & Pejabat Pemerintahan',
    scale: 'medium',
    tagline: {
      id: 'Instalasi panggung anamorphic 3D terowongan LED dan peluncuran unit dengan efek mekanikal presisi.',
      en: 'Anamorphic 3D LED tunnel stage installation and high-precision mechanical vehicle reveal.'
    },
    objective: {
      id: 'Menciptakan momen pengungkapan (reveal) mobil listrik generasi terbaru yang memukau media internasional dengan standar tata cahaya otomotif non-glare.',
      en: 'Create a jaw-dropping international media reveal for next-generation electric vehicles with non-glare automotive studio lighting.'
    },
    technicalChallenge: {
      id: 'Menghindari pantulan silau (specular highlight) pada bodi mobil glossy saat peluncuran langsung disiarkan televisi 4K, serta lantai panggung yang harus menopang bobot kendaraan 2,4 ton bergerak.',
      en: 'Preventing specular glare on glossy vehicle paint during 4K live broadcast, while stage flooring accommodates 2.4-ton moving electric vehicle weight.'
    },
    technicalSolution: {
      id: 'Desain softbox overhead LED seluas 80 m² dengan diffuser film khusus, sub-struktur lantai panggung berbahan baja H-Beam dengan kapasitas 5 ton/m², dan sistem lift hidrolik mulus.',
      en: 'Custom 80 sqm overhead diffused LED softbox, reinforced H-Beam steel substructure rated for 5 tons/sqm, and silent hydraulic vehicle lift system.'
    },
    specs: {
      audio: 'D&B audiotechnik Y-Series with Dante Network',
      visual: '120m Seamless Curved Anamorphic LED Wall',
      riggingLoad: '18 Ton Overhead Rigging with Dimmer Bank',
      turnaroundTime: '16 Jam Fabrikasi Booth & Car Turntable'
    },
    metrics: {
      satisfaction: '99,6%',
      punctuality: 'Reveal Moment Sinkron 100%',
      safetyRecord: 'Zero Scratch & Zero Incident'
    },
    highlights: {
      id: [
        'Turntable kendaraan 360 derajat terintegrasi sensor gerak penari',
        'Liputan oleh 140+ media nasional dan internasional secara serentak',
        'Kerapian instalasi kabel panggung zero-clutter (underfloor trenching)'
      ],
      en: [
        '360-degree motorized car turntable synchronized to dancer choreography',
        'Simultaneous coverage by 140+ national and global automotive media outlets',
        'Zero-clutter underfloor cable trenching throughout entire VIP floor'
      ]
    },
    visualTheme: 'from-cyan-500/10 to-blue-600/10'
  },
  {
    id: 'ikn-state-ceremony',
    title: {
      id: 'Upacara Peresmian Kompleks Kawasan Strategis Nasional IKN',
      en: 'National Strategic Landmark Inauguration Ceremony IKN'
    },
    client: 'Otorita Ibu Kota Nusantara & Kementerian PUPR',
    clientType: 'Government',
    category: 'protocol',
    categoryLabel: {
      id: 'Pemerintahan & Protokoler',
      en: 'Government & Protocol'
    },
    location: 'Kawasan Inti Pusat Pemerintahan (KIPP), Nusantara',
    province: 'Kalimantan Timur',
    year: '2025',
    attendance: '850 Tamu Kehormatan & Dubes Negara Sahabat',
    scale: 'small',
    tagline: {
      id: 'Protokol kenegaraan VVIP, redundansi genset triple-sync, dan logistik perintis jarak jauh.',
      en: 'VVIP state protocol, triple-sync generator redundancy, and remote pioneer logistics.'
    },
    objective: {
      id: 'Mengeksekusi peresmian kenegaraan di lokasi pembangunan baru dengan pasokan daya mandiri, tenda roder ber-AC sejuk, dan standar protokoler Sekretariat Presiden.',
      en: 'Execute a state ceremonial inauguration at a remote development site with autonomous power, chilled roder tent structures, and Presidential Secretariat protocols.'
    },
    technicalChallenge: {
      id: 'Kondisi medan tanah berkontur dengan keterbatasan akses utilitas umum, cuaca panas terik luar ruangan, dan keharusan pasokan daya listrik 0% toleransi kedip (blackout-proof).',
      en: 'Unpaved terrain with zero municipal utility access, intense tropical heat, and strict zero-flicker power redundancy requirement.'
    },
    technicalSolution: {
      id: 'Mobilisasi 4 unit genset silent 500 kVA dengan sistem automatic transfer switch (ATS) sinkronisasi paralel, penyejuk ruangan 300 PK tersembunyi, dan konstruksi lantai panggung bertingkat modular.',
      en: 'Mobilization of 4 silent 500 kVA generators with parallel sync automatic transfer switches (ATS), concealed 300 HP climate control, and modular raised flooring.'
    },
    specs: {
      audio: 'Yamaha RIVAGE PM Series Digital Console + Shure Axient Digital',
      visual: 'High-Brightness Outdoor Daylight LED P2.9 (5000 nits)',
      riggingLoad: 'Tenda Roder Bersertifikat German TUV Standard',
      turnaroundTime: 'Mobilisasi Armada Kapal RORO dari Pelabuhan Tanjung Perak'
    },
    metrics: {
      satisfaction: '100%',
      punctuality: 'Presisi Jadwal RI-1 Tanpa Deviasi',
      safetyRecord: 'Zero Blackout & K3L Terverifikasi'
    },
    highlights: {
      id: [
        'Kepatuhan 100% SOP Keprotokolan Sekretariat Presiden',
        'Penyediaan fasilitas VIP Lounge temporer setara hotel bintang lima',
        'Logistik peralatan 8 kontainer 40ft tiba H-7 sebelum hari pelaksanaan'
      ],
      en: [
        '100% compliance with Presidential Protocol Standard Operating Procedures',
        'Temporary five-star equivalent executive VIP lounge buildout',
        'Logistical deployment of eight 40ft containers arriving 7 days prior'
      ]
    },
    visualTheme: 'from-emerald-600/10 to-teal-600/10'
  },
  {
    id: 'bumn-award-gala',
    title: {
      id: 'Malam Apresiasi & RUPS Tahunan BUMN Financial Group',
      en: 'BUMN Financial Group Annual General Meeting & Gala'
    },
    client: 'Holding BUMN Jasa Keuangan',
    clientType: 'BUMN',
    category: 'corporate',
    categoryLabel: {
      id: 'Corporate & Gala Event',
      en: 'Corporate & Gala Event'
    },
    location: 'Grand Ballroom The Ritz-Carlton Pacific Place, Jakarta',
    province: 'DKI Jakarta',
    year: '2024',
    attendance: '1.200 Tamu Undangan & Dewan Komisaris',
    scale: 'medium',
    tagline: {
      id: 'Kemewahan tata cahaya gala dinner terkoordinasi dan sistem voting elektronik RUPS real-time.',
      en: 'Sophisticated gala dinner lighting coordination and real-time electronic voting for AGM.'
    },
    objective: {
      id: 'Memadukan agenda formal Rapat Umum Pemegang Saham (RUPS) pagi hari yang membutuhkan kerahasiaan data dengan malam penghargaan gala spektakuler di tempat yang sama.',
      en: 'Blend morning formal Annual General Meeting with high-security voting and an evening awards gala in the same grand ballroom.'
    },
    technicalChallenge: {
      id: 'Pergantian tata ruang (re-setting) dari format rapat kelas meja panjang (classroom) 800 kursi ke format gala dinner 120 meja bundar dalam tenggat waktu 150 menit.',
      en: 'Complete room turnover from 800-seat classroom setup to 120 round gala dinner tables within a tight 150-minute window.'
    },
    technicalSolution: {
      id: 'Mobilisasi tim stage-crew berkekuatan 65 orang dengan pembagian zona kerja terukur, penggunaan trolley hidrolik modular, dan pre-programmed lighting presets.',
      en: 'Mobilization of 65 coordinated stage crew divided into mapped zones, hydraulic furniture handling, and pre-programmed lighting cues.'
    },
    specs: {
      audio: 'JBL VTX Series with Soundcraft Vi3000 Console',
      visual: 'Seamless P2.0 Ultra-Black LED Backdrop + 4 Relay Screens',
      riggingLoad: '12 Ton Ballroom Dead-Hang Certified Hoists',
      turnaroundTime: 'Transisi Aula Rampung dalam 110 Menit'
    },
    metrics: {
      satisfaction: '99,7%',
      punctuality: 'Transisi Rampung 40 Menit Lebih Awal',
      safetyRecord: 'Zero Damage Ballroom Heritage Interior'
    },
    highlights: {
      id: [
        'Sistem E-Voting terenkripsi berbasis tablet dengan hasil suara tampil dalam 3 detik',
        'Panggung penganugerahan dengan trofi lifting mechanism bermotor',
        'Menu dinner multi-course berstandar Michelin disajikan hangat serempak'
      ],
      en: [
        'Encrypted tablet e-voting tallying shareholder decisions within 3 seconds',
        'Automated motorized award trophy lifting display pedestal',
        'Michelin-level multi-course gala dinner served piping hot simultaneously'
      ]
    },
    visualTheme: 'from-slate-700/10 to-blue-800/10'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'mice',
    number: '01',
    title: {
      id: 'Konferensi, Summit & MICE Berskala Internasional',
      en: 'International Conferences, Summits & MICE'
    },
    subtitle: {
      id: 'Meetings, Incentives, Conferences, Exhibitions',
      en: 'Meetings, Incentives, Conferences, Exhibitions'
    },
    description: {
      id: 'Pengelolaan kongres multilateral, simposium ilmiah, dan forum bisnis bilateral dengan kepatuhan protokoler ketat, sistem penerjemah simultan, manajemen delegasi VIP, dan tata ruang audio visual presisi.',
      en: 'End-to-end execution of multilateral summits, scientific symposiums, and business forums featuring strict protocol adherence, simultaneous interpretation, VIP delegation management, and pristine AV systems.'
    },
    deliverables: {
      id: [
        'Sistem Akreditasi & Registrasi Delegasi Cerdas (RFID / Biometrik)',
        'Sistem Penerjemah Simultan Multibahasa (Bosch DCN Wireless)',
        'Panggung Keynote & Multi-Screen Ultra-Wide LED Display',
        'Ruang Bilateral & Breakout Rooms dengan Akustik Terisolasi',
        'Hospitality Delegasi & Transportasi Shuttle Protokoler'
      ],
      en: [
        'Smart Delegate Accreditation & Badge Printing (RFID / Biometrics)',
        'Multilingual Simultaneous Interpretation Systems (Bosch DCN Wireless)',
        'Keynote Stage & Ultra-Wide Fine-Pitch LED Displays',
        'Acoustically Isolated Bilateral Meeting & Breakout Rooms',
        'Delegate Hospitality & Protocol Chaperone Logistics'
      ]
    },
    technicalFeatures: {
      id: [
        'Kapasitas delegasi hingga 5.000 peserta dalam satu gedung',
        'Konektivitas internet terdedikasi simetris 1 Gbps dengan failover ganda',
        'Standardisasi kenyamanan akustik ISO 2603 untuk bilik penerjemah'
      ],
      en: [
        'Delegation capacity up to 5,000 attendees under single venue footprint',
        '1 Gbps dedicated symmetric internet backbone with dual automatic failover',
        'ISO 2603 acoustic standard compliance for translation booths'
      ]
    },
    typicalClients: ['Kementerian RI', 'Kedutaan Besar & Uni Eropa', 'Asosiasi Industri Global', 'Lembaga Keuangan Internasional']
  },
  {
    id: 'corporate',
    number: '02',
    title: {
      id: 'Corporate Gathering, Gala Dinner & RUPS Tahunan',
      en: 'Corporate Gatherings, Gala Dinners & AGMs'
    },
    subtitle: {
      id: 'Employee Engagement, Anniversary & Board Meetings',
      en: 'Employee Engagement, Anniversary & Board Meetings'
    },
    description: {
      id: 'Menghidupkan budaya perusahaan dan reputasi pemegang saham melalui perayaan ulang tahun kolosal, malam apresiasi penganugerahan bergengsi, dan Rapat Umum Pemegang Saham dengan sistem e-voting terenkripsi.',
      en: 'Elevating corporate culture and investor trust through monumental corporate milestones, prestigious annual galas, and legally sound Annual General Meetings with encrypted e-voting.'
    },
    deliverables: {
      id: [
        'Konseptualisasi Tema Kreatif & Produksi Video Pembuka Epik',
        'Panggung Kinetik Megah & Tata Cahaya Berkelas Studio Televisi',
        'Sistem Registrasi Barcode Terintegrasi Pengundian Door Prize',
        'Manajemen Jamuan Gala Dinner Massal (Buffet & Set Menu)',
        'Sistem E-Voting Terenkripsi & Notaris RUPS Resmi'
      ],
      en: [
        'Creative Theme Conceptualization & Cinematic Opening Visuals',
        'Kinetic Stage Engineering & Studio-Grade DMX Lighting',
        'Barcode Check-in Integrated with Live Interactive Door Prize System',
        'Mass Fine Dining & Gala Banquet Service Management',
        'Encrypted E-Voting Architecture & Official Notary Integration'
      ]
    },
    technicalFeatures: {
      id: [
        'Penanganan acara korporat mulai 300 hingga 20.000 karyawan',
        'Tata suara line-array dengan kejelasan vokal (STI > 0.65)',
        'Panggung rolling-riser untuk perpindahan cepat artis dan musisi'
      ],
      en: [
        'Corporate scale execution from 300 to 20,000 employees',
        'Line-array speech intelligibility index exceeding STI > 0.65',
        'Rolling-riser staging systems for rapid band changeovers'
      ]
    },
    typicalClients: ['BUMN Holding', 'Bank Nasional & Swasta', 'Perusahaan Telekomunikasi', 'Konglomerasi FMCG']
  },
  {
    id: 'activation',
    number: '03',
    title: {
      id: 'Brand Activation, Product Launch & Experiential Expo',
      en: 'Brand Activation, Product Launches & Experiential'
    },
    subtitle: {
      id: 'Consumer Engagement, Booth Fabrication & Roadshows',
      en: 'Consumer Engagement, Booth Fabrication & Roadshows'
    },
    description: {
      id: 'Menciptakan pengalaman tak terlupakan bagi konsumen dan media melalui instalasi panggung interaktif, fabrikasi stan arsitektural presisi, dan peluncuran produk dengan efek mekanikal canggih.',
      en: 'Crafting unforgettable sensory touchpoints for consumers and press through interactive installations, precision booth fabrication, and mechanical product reveal moments.'
    },
    deliverables: {
      id: [
        'Desain & Fabrikasi Booth Pameran Custom (Kayu, Akrilik, Baja)',
        'Instalasi Terowongan LED Interaktif & Mapping Proyeksi 3D',
        'Mekanisme Reveal Produk (Kabut Dingin, Tirai Kabuki, Meja Putar)',
        'Pengelolaan Media & Influencer Press Conference Terintegrasi',
        'Roadshow Aktivasi Multi-Kota di 10+ Kota Besar Indonesia'
      ],
      en: [
        'Custom Exhibition Booth Design & Fabrication (Wood, Metal, Acrylic)',
        'Interactive LED Tunnel Experiences & 3D Projection Mapping',
        'Dramatic Mechanical Product Reveals (Cryo Jets, Kabuki Drops, Turntables)',
        'Integrated Media & Key Opinion Leader Press Conference Facilitation',
        'Multi-City Activation Roadshow Operations across 10+ Metros'
      ]
    },
    technicalFeatures: {
      id: [
        'Finishing cat duco dan detail interior standar boutique luxury',
        'Pencahayaan produk tanpa silau CRI > 95 untuk kebutuhan foto media',
        'Sistem analitik lalu lintas pengunjung stan berbasis sensor'
      ],
      en: [
        'Luxury boutique lacquer finishing and meticulous joinery details',
        'High CRI > 95 non-glare product spotlights for press photography',
        'Sensor-based booth foot-traffic analytics and dwell-time telemetry'
      ]
    },
    typicalClients: ['Merek Otomotif Global', 'Perusahaan Teknologi & Gadget', 'Brand Fashion & Beauty', 'Consumer Electronics']
  },
  {
    id: 'festival',
    number: '04',
    title: {
      id: 'Konser Musik, Festival Budaya & Produksi Publik',
      en: 'Music Concerts, Cultural Festivals & Public Shows'
    },
    subtitle: {
      id: 'Mega Staging, Crowd Management & Heavy Production',
      en: 'Mega Staging, Crowd Management & Heavy Production'
    },
    description: {
      id: 'Produksi panggung skala mega di area terbuka dan tertutup dengan standardisasi keselamatan konstruksi panggung, mitigasi risiko massa (crowd dynamics), tata suara berdaya ratusan kilowatt, dan tata perizinan terpadu.',
      en: 'Mega-scale concert production in outdoor and indoor stadiums with rigorous stage engineering safety, crowd risk mitigation, 100+ kW sound systems, and integrated public permits.'
    },
    deliverables: {
      id: [
        'Konstruksi Rigging Heavy-Duty Bersertifikasi Uji Beban',
        'Sistem Tata Suara Stadion (L-Acoustics, Meyer Sound, d&b)',
        'Pengurusan Izin Keramaian Lengkap (Mabes Polri, Polda, Satgas K3)',
        'Desain Rencana Keselamatan & Barikade Massa (Mojo Steel Barrier)',
        'Posko Medis Triage, Jalur Evakuasi, & Kesiapsiagaan Pemadam'
      ],
      en: [
        'Heavy-Duty Structural Rigging Certified with Load-Cell Tests',
        'Stadium Sound Reinforcement (L-Acoustics, Meyer Sound, d&b)',
        'Comprehensive Public Crowd Permits (National Police, Regional Safety)',
        'Crowd Dynamics Design & Steel Mojo Crash Barrier Configuration',
        'Triage Medical Command, Dedicated Evacuation Corridors & Fire Safety'
      ]
    },
    technicalFeatures: {
      id: [
        'Kapasitas festival dari 5.000 hingga 60.000 penonton serempak',
        'Toleransi hembusan angin struktur panggung hingga 80 km/jam',
        'Redundansi sistem audio dan visual 100% hot-standby'
      ],
      en: [
        'Festival scale management from 5,000 to 60,000 concurrent patrons',
        'Structural wind-resistance rating up to 80 km/h with live monitoring',
        '100% hot-standby backup audio and video signal distribution'
      ]
    },
    typicalClients: ['Promotor Konser Musik', 'Pemerintah Provinsi & Pemkot', 'Yayasan Seni & Budaya', 'Media & Televisi Nasional']
  },
  {
    id: 'protocol',
    number: '05',
    title: {
      id: 'Acara Kenegaraan & Protokoler Kepresidenan',
      en: 'State Ceremonies & Presidential Protocols'
    },
    subtitle: {
      id: 'High-Security Ground Execution & Strategic Ceremonies',
      en: 'High-Security Ground Execution & Strategic Ceremonies'
    },
    description: {
      id: 'Spesialisasi eksekusi acara peresmian proyek strategis nasional, upacara kenegaraan, dan kunjungan pejabat tinggi negara dengan kepatuhan mutlak terhadap protokoler Sekretariat Presiden dan Paspampres.',
      en: 'Specialized execution of national strategic project inaugurations, state ceremonies, and head-of-state visits adhering strictly to Presidential Secretariat protocols.'
    },
    deliverables: {
      id: [
        'Rundown Berstandar Protokoler Menit-per-Menit Tanpa Deviasi',
        'Tenda Roder VVIP Berpendingin Udara & Lantai Karpet Presisi',
        'Sistem Pasokan Daya Mandiri Triple-Sync Bebas Kedip (Zero-Blink)',
        'Koordinasi Ring 1, 2, dan 3 Bersama Satuan Pengamanan VVIP',
        'Siaran Langsung Hybrid dengan Uplink Satelit Mandiri'
      ],
      en: [
        'Minute-by-Minute Protocol Rundown Execution with Zero Deviation',
        'Climate-Controlled VVIP Roder Tents with Seamless Flooring',
        'Autonomous Triple-Sync Zero-Blink Generator Infrastructure',
        'Ring 1, 2, and 3 Security Coordination with VIP Defense Units',
        'Hybrid Live Broadcast with Autonomous Satellite Uplink Trucks'
      ]
    },
    technicalFeatures: {
      id: [
        'Kesiapan mobilisasi alat ke remote area dan pulau terluar Indonesia',
        'Uji kelayakan teknis dan pemindaian keamanan H-24 bersama otoritas',
        'Cadangan genset dan UPS terpasang untuk 100% titik audio dan podium'
      ],
      en: [
        'Remote expedition capability across islands and greenfield sites',
        '24-hour prior technical safety verification and security sweep',
        'Dedicated UPS backup for 100% of podium microphones and broadcast rigs'
      ]
    },
    typicalClients: ['Kementerian Pekerjaan Umum (PUPR)', 'Sekretariat Negara', 'Otorita IKN', 'Pengelola Kawasan Industri']
  },
  {
    id: 'virtual',
    number: '06',
    title: {
      id: 'Produksi Virtual, Hybrid Broadcast & XR Studio',
      en: 'Virtual Production, Hybrid Broadcast & XR Studio'
    },
    subtitle: {
      id: 'Global Streaming, Interactive Hub & LED Volume Stages',
      en: 'Global Streaming, Interactive Hub & LED Volume Stages'
    },
    description: {
      id: 'Solusi produksi siaran langsung lintas benua menggabungkan studio LED interaktif, grafis augmented reality (AR), dan interaksi ribuan peserta daring dengan latensi sangat rendah.',
      en: 'Cross-continental live streaming and virtual event productions combining LED volumes, augmented reality (AR) graphics, and ultra-low latency delegate interaction.'
    },
    deliverables: {
      id: [
        'Studio Green Screen & LED Volume Virtual Production',
        'Sistem Streaming Multicast Global dengan Keamanan DRM',
        'Penerjemah Bahasa Isyarat & Subtitle Otomatis Multi-Bahasa',
        'Interaksi Audiens Interaktif (Polling, Q&A, Networking Room)',
        'Mastering Audio & Video Siaran Berstandar Televisi'
      ],
      en: [
        'Green Screen & LED Volume In-Camera VFX Production Suites',
        'Global DRM-Secured Multicast Streaming Architecture',
        'Live Sign Language Video Inset & Real-Time Multilingual Subtitling',
        'Audience Engagement Engines (Live Polls, Q&A, Breakout Lounges)',
        'Broadcast-Grade Video Color Correction & Audio Master Bus'
      ]
    },
    technicalFeatures: {
      id: [
        'Kapasitas streaming simultan hingga 100.000 penonton daring',
        'Sistem kamera tracking broadcast 4K dengan robotik PTZ',
        'Rekaman multitrack terpisah (ISO recording) untuk arsip perusahaan'
      ],
      en: [
        'Simultaneous broadcast capacity for up to 100,000 online attendees',
        '4K broadcast tracking cameras with automated robotic PTZ units',
        'Multi-channel ISO camera recordings delivered for permanent corporate archive'
      ]
    },
    typicalClients: ['Perusahaan FinTech', 'Lembaga Pendidikan Tinggi', 'Perusahaan Farmasi', 'Lembaga Non-Pemerintah']
  }
];

export const CORE_VALUES = [
  {
    title: {
      id: 'Presisi',
      en: 'Precision'
    },
    subtitle: {
      id: 'Zero Margin of Error',
      en: 'Zero Margin of Error'
    },
    description: {
      id: 'Menjaga keandalan teknis, ketepatan detik dalam setiap lembar rundown, dan kalibrasi peralatan tanpa celah.',
      en: 'Maintaining technical reliability, second-by-second rundown discipline, and flawless equipment calibration.'
    }
  },
  {
    title: {
      id: 'Kolaborasi',
      en: 'Collaboration'
    },
    subtitle: {
      id: 'Gotong Royong Ekosistem',
      en: 'Ecosystem Synergy'
    },
    description: {
      id: 'Tumbuh bersama jaringan talenta lokal, vendor rigging, audio, dekorasi, hingga perizinan di seluruh 34 provinsi.',
      en: 'Thriving together with certified local talent, staging crews, AV providers, and authorities across 34 provinces.'
    }
  },
  {
    title: {
      id: 'Integritas',
      en: 'Integrity'
    },
    subtitle: {
      id: 'Transparansi & Akuntabilitas',
      en: 'Transparency & Accountability'
    },
    description: {
      id: 'Menyajikan data portofolio terverifikasi, struktur biaya transparan, serta kepatuhan hukum dan perpajakan resmi.',
      en: 'Providing verified portfolio metrics, transparent pricing structures, and unbending governance compliance.'
    }
  },
  {
    title: {
      id: 'Daya Cipta',
      en: 'Creativity'
    },
    subtitle: {
      id: 'Sentuhan Narasi Modern',
      en: 'Modern Narrative Touch'
    },
    description: {
      id: 'Memadukan kekayaan estetika nusantara dengan tren teknologi panggung mutakhir yang memikat generasi masa kini.',
      en: 'Blending Indonesia’s rich aesthetic heritage with cutting-edge stage innovations that captivate modern audiences.'
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Baskara Dananjaya, S.Sn.',
    role: {
      id: 'Executive Show Director & Co-Founder',
      en: 'Executive Show Director & Co-Founder'
    },
    experience: '16+ Tahun Pengalaman',
    credentials: 'Direktur Acara Utama Pekan Olahraga Nasional & KTT Internasional',
    bio: {
      id: 'Telah memimpin lebih dari 280 produksi pertunjukan kolosal, upacara kenegaraan, dan gala malam penganugerahan multinasional di Indonesia dan Asia Tenggara.',
      en: 'Has directed over 280 colossal stadium productions, state ceremonies, and multinational gala nights across Indonesia and Southeast Asia.'
    }
  },
  {
    name: 'Ir. Hendra Wicaksono, IPM, ASEAN Eng.',
    role: {
      id: 'Head of Technical Production & Rigging',
      en: 'Head of Technical Production & Rigging'
    },
    experience: '18+ Tahun Pengalaman',
    credentials: 'Sertifikasi Ahli K3 Konstruksi & Asosiasi Rigger Internasional (PLASA)',
    bio: {
      id: 'Pakar kalkulasi beban struktur panggung dan pemodelan akustik aula besar. Memastikan setiap instalasi panggung lulus uji sertifikasi keselamatan beban berat.',
      en: 'Structural engineering specialist for concert rigging load calculation and large-hall acoustic modeling, ensuring every truss passes certified safety factors.'
    }
  },
  {
    name: 'Dewi Anggraini, M.M., CMP',
    role: {
      id: 'Director of MICE & Protocol Hospitality',
      en: 'Director of MICE & Protocol Hospitality'
    },
    experience: '14+ Tahun Pengalaman',
    credentials: 'Certified Meeting Professional (CMP) & Asosiasi MICE Indonesia (INCCA)',
    bio: {
      id: 'Memimpin koordinasi delegasi tingkat menteri, sistem akreditasi biometrik, dan manajemen jamuan berskala ribuan peserta dengan standar bintang lima.',
      en: 'Leads ministerial delegation protocols, smart accreditation logistics, and multi-thousand delegate hospitality with five-star hospitality finesse.'
    }
  },
  {
    name: 'Kompol (Purn.) Drs. Rahmat Setyadi',
    role: {
      id: 'Chief Compliance & Crowd Safety Officer',
      en: 'Chief Compliance & Crowd Safety Officer'
    },
    experience: '22+ Tahun Pengalaman',
    credentials: 'Spesialis Manajemen Risiko Keramaian & Hubungan Antar-Lembaga',
    bio: {
      id: 'Memastikan legalitas perizinan keramaian Mabes Polri/Polda tuntas tepat waktu, simulasi kontinjensi darurat, dan koordinasi terpadu jalur evakuasi medis.',
      en: 'Guarantees on-time national and regional police crowd permits, contingency drill execution, and rapid triage evacuation protocols.'
    }
  }
];

export const SAFETY_STANDARDS = [
  {
    id: 'k3l',
    title: {
      id: 'Kepatuhan K3L & Sertifikasi Konstruksi',
      en: 'OHS Compliance & Structural Rigging Audits'
    },
    points: {
      id: [
        'Kalkulasi load-cell terkomputerisasi dengan batas keamanan 5:1 untuk seluruh gantungan truss',
        'Uji kelayakan struktur panggung oleh insinyur sipil berlisensi sebelum handover',
        'Semua kru teknis dilengkapi APD wajib (Helm Keselamatan, Harness Full-Body, Rompi Reflektor)'
      ],
      en: [
        'Computerized load-cell calculations with 5:1 safety design factor for all truss suspensions',
        'Licensed structural civil engineer sign-off on temporary stages prior to venue handover',
        'Mandatory PPE compliance for all technical crew (Safety Helmets, Fall Arrest Harness, Vests)'
      ]
    }
  },
  {
    id: 'perizinan',
    title: {
      id: 'Legalitas & Manajemen Perizinan Polri Terpadu',
      en: 'Integrated Police & Municipal Permitting'
    },
    points: {
      id: [
        'Pengurusan Izin Keramaian Resmi (Mabes Polri, Polda, Polres) dengan dokumen mitigasi risiko lengkap',
        'Rekomendasi Satgas Kesehatan, Dinas Pemadam Kebakaran, dan Dinas Perhubungan Daerah',
        'Penyusunan dokumen SOP Kontinjensi & Evakuasi Darurat berstandar APMI'
      ],
      en: [
        'Official crowd permit processing (National & Regional Police) with full risk assessments',
        'Authorizations from Regional Health Taskforce, Fire Department, and Traffic Authorities',
        'Comprehensive Contingency & Evacuation Action Plan certified by promotor guidelines'
      ]
    }
  },
  {
    id: 'crowd',
    title: {
      id: 'Crowd Dynamic & Sanitasi Penyelenggaraan',
      en: 'Crowd Dynamics & Medical Readiness'
    },
    points: {
      id: [
        'Pemisahan jalur masuk, keluar, dan koridor darurat pit depan panggung berpenghalang baja',
        'Rasio tenaga medis bersertifikat BLS (Basic Life Support) dan ambulans ICU siaga',
        'Manajemen sanitasi, tata kelola sampah ramah lingkungan, dan fasilitas akses difabel'
      ],
      en: [
        'Separated entry, egress, and dedicated front-of-stage steel barrier evacuation corridors',
        'Strict ratio of BLS-certified emergency medical responders and standby ICU ambulances',
        'Zero-waste recycling stations, sanitary facilities, and universal accessibility ramps'
      ]
    }
  }
];

export const REGION_HUBS: RegionHub[] = [
  {
    id: 'jawa-bali',
    name: 'Hub 1: Jawa & Bali',
    provinces: ['DKI Jakarta', 'Banten', 'Jawa Barat', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur', 'Bali'],
    mainWarehouse: 'Logistics Hub Cakung (Jakarta) & Denpasar (Bali)',
    activePartners: 320,
    specialties: ['MICE Skala Besar', 'Konser Stadion 60k+', 'Produksi LED Anamorphic 3D']
  },
  {
    id: 'sumatera',
    name: 'Hub 2: Sumatera',
    provinces: ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kep. Riau', 'Jambi', 'Sumatera Selatan', 'Bangka Belitung', 'Bengkulu', 'Lampung'],
    mainWarehouse: 'Logistics Hub Medan & Palembang',
    activePartners: 145,
    specialties: ['Corporate Gathering Resort', 'Festival Budaya', 'Roadshow Komersial']
  },
  {
    id: 'kalimantan',
    name: 'Hub 3: Kalimantan & IKN',
    provinces: ['Kalimantan Timur (IKN)', 'Kalimantan Selatan', 'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Utara'],
    mainWarehouse: 'Logistics Hub Balikpapan & Samarinda',
    activePartners: 88,
    specialties: ['Protokoler Kenegaraan IKN', 'Mining & Energy Corporate Summit', 'Tenda Roder Mandiri']
  },
  {
    id: 'sulawesi-timur',
    name: 'Hub 4: Sulawesi, Maluku & Papua',
    provinces: ['Sulawesi Selatan', 'Sulawesi Utara', 'Sulawesi Tenggara', 'Sulawesi Tengah', 'Gorontalo', 'Sulawesi Barat', 'Maluku', 'Papua'],
    mainWarehouse: 'Logistics Hub Makassar & Manado',
    activePartners: 96,
    specialties: ['Maritime Tourism Forum', 'National Sports Event', 'Bilateral Trade Expo']
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'izin-keramaian-polri-guide',
    title: {
      id: 'Panduan Lengkap Pengurusan Izin Keramaian Mabes Polri & Polda untuk Acara Skala Besar',
      en: 'Complete Guide to National Police Crowd Permitting for Large-Scale Events in Indonesia'
    },
    category: {
      id: 'Kepatuhan & Regulasi',
      en: 'Compliance & Regulation'
    },
    readTime: '6 min read',
    date: 'Maret 2026',
    summary: {
      id: 'Kompilasi syarat administrasi, timeline pengajuan H-30, analisis dampak lalu lintas (Andalalin), dan tips koordinasi taktis bersama jajaran intelkam kepolisian.',
      en: 'Administrative requirements compilation, 30-day timeline roadmaps, traffic impact assessments, and tactical coordination with police intelligence.'
    },
    content: {
      id: 'Keberhasilan penyelenggaraan acara publik berskala besar di Indonesia bertumpu pada ketertiban perizinan. Tanpa Surat Izin Keramaian yang sah dari jajaran Kepolisian Republik Indonesia (Polri), sebuah perhelatan berisiko tinggi menghadapi penundaan atau pembatalan sepihak. Artikel ini menguraikan tahapan esensial mulai dari penyusunan Dokumen Rencana Keamanan (Security Concept), pengurusan rekomendasi Gugus K3, hingga penentuan titik muster point dan posko komando taktis gabungan.',
      en: 'The viability of any large-scale gathering in Indonesia hinges on formal compliance. Without a valid Police Crowd Permit (Surat Izin Keramaian), productions face severe cancellation risks. This guide details the mandatory step-by-step roadmap from drafting comprehensive Event Safety Concepts to municipal agency concurrences and tactical emergency command centers.'
    },
    sections: [
      {
        id: 'dasar-hukum',
        heading: {
          id: '1. Dasar Hukum & Tingkatan Wewenang Kepolisian (Polsek s/d Mabes Polri)',
          en: '1. Legal Basis & Police Jurisdictional Levels (Sector to Headquarters)'
        },
        body: {
          id: 'Pengurusan izin keramaian mengacu pada Petunjuk Lapangan Kapolri No. Pol/02/XII/95 dan PP No. 60 Tahun 2017. Kewenangan penerbitan izin ditentukan oleh skala peserta dan profil pengisi acara: tingkat Polsek (di bawah 500 penonton), Polres (500–5.000 penonton lokal), Polda (5.000–10.000 penonton atau melibatkan artis nasional lintas kota), dan Mabes Polri (di atas 10.000 penonton atau mendatangkan talenta internasional / tamu VVIP kenegaraan).',
          en: 'Police crowd permits adhere to National Police Operational Directives and Government Regulation No. 60/2017. Authority tiers depend on crowd capacity: Sector Police (<500 attendees), Resort Police (500–5,000), Regional Police Polda (5,000–10,000 or national artists), and National Police Headquarters Mabes Polri (>10,000 attendees or international artists / state VVIP dignitaries).'
        },
        keyTakeaway: {
          id: 'Ketahui jenjang wewenang seawal mungkin untuk menghindari salah sasaran surat pengantar.',
          en: 'Identify the exact jurisdictional tier early to avoid misdirected submissions.'
        }
      },
      {
        id: 'syarat-dokumen',
        heading: {
          id: '2. Sembilan Dokumen Wajib Berkas Pengajuan Izin',
          en: '2. Nine Mandatory Documents for Permit Filing'
        },
        body: {
          id: 'Berkas resmi harus memuat: (1) Proposal acara & rundown lengkap, (2) Surat izin pemakaian lokasi/venue, (3) Surat persetujuan lingkungan warga setempat, (4) Rekomendasi Dinas Perhubungan/Andalalin, (5) Rekomendasi Dinas Pemadam Kebakaran & Dinas Kesehatan/Ambulans, (6) Denah panggung, jalur evakuasi & titik kumpul, (7) Daftar pengisi acara & kru, (8) Rekomendasi Satgas Pengamanan Wilayah, dan (9) Surat permohonan resmi dari EO Indonesia bermaterai.',
          en: 'Mandatory documentation includes: (1) Complete event proposal & minute-by-minute rundown, (2) Venue lease authorization, (3) Neighborhood consent approval, (4) Department of Transportation traffic assessment, (5) Fire & health ambulance concurrency, (6) Stage blueprint, emergency exits & muster point diagrams, (7) Talent & crew roster, (8) Regional security task force endorsements, and (9) Formal legal affidavit from EO Indonesia.'
        },
        keyTakeaway: {
          id: 'Seluruh berkas harus dilegalisasi minimal H-30 hari kalender sebelum perakitan panggung.',
          en: 'All dossiers must be formalized at least 30 days prior to structural rigging load-in.'
        }
      },
      {
        id: 'timeline-h-30',
        heading: {
          id: '3. Roadmap Timeline Koordinasi: Dari H-30 sampai H-3',
          en: '3. Coordination Timeline Roadmap: H-30 to H-3'
        },
        body: {
          id: 'Pada H-30 berkas awal diserahkan ke Sat Intelkam untuk verifikasi administrasi. Pada H-14 dilakukan Tactical Floor Game (TFG) dan survei kelayakan venue bersama jajaran Binmas dan Lantas. Pada H-7 terbit Surat Rekomendasi Intelkam, dan pada H-3 Surat Izin Keramaian final resmi dikeluarkan setelah inspeksi fisik panggung dan tata barikade.',
          en: 'At H-30 initial documentation is lodged at Intelligence Directorate for administrative verification. At H-14 a Tactical Floor Game (TFG) and joint site survey is conducted with Traffic & Public Order divisions. At H-7 Intelligence recommendations are issued, followed by final permit clearance at H-3 post physical stage barrier inspection.'
        },
        keyTakeaway: {
          id: 'Jangan menunda hingga H-7; peninjauan teknis kepolisian memerlukan minimal 10 hari kerja.',
          en: 'Never defer to H-7; police technical reviews mandate at least 10 business days.'
        }
      },
      {
        id: 'tactical-briefing',
        heading: {
          id: '4. Posko Komando Taktis Gabungan & Simulasi Pengamanan',
          en: '4. Joint Tactical Command Post & Security Simulations'
        },
        body: {
          id: 'Pada hari pelaksanaan, posko terpadu (Joint Command Center) wajib disiapkan dekat pintu evakuasi utama. Posko ini mempertemukan Show Director EO Indonesia, perwira pengendali kepolisian (Padal Pam), komandan tim medis, dan dinas perhubungan dengan pemantauan CCTV real-time dan jalur komunikasi frekuensi radio repeater khusus.',
          en: 'On show day, a Joint Command Center must operate adjacent to primary extraction corridors. This unified desk brings together EO Indonesia Show Directors, Police Control Commanders, head medical officers, and transport marshals linked via real-time CCTV feeds and dedicated repeater radio channels.'
        },
        keyTakeaway: {
          id: 'Satu komando terpadu menjamin respons insiden cepat di bawah 90 detik.',
          en: 'A unified desk guarantees emergency incident reaction times under 90 seconds.'
        }
      }
    ]
  },
  {
    id: 'sop-crowd-management-festival',
    title: {
      id: 'SOP Crowd Dynamics & Barrier Design: Mencegah Kepadatan Berlebih di Depan Panggung',
      en: 'SOP Crowd Dynamics & Barrier Engineering: Preventing Front-of-Stage Crushes'
    },
    category: {
      id: 'Keselamatan Produksi',
      en: 'Production Safety'
    },
    readTime: '8 min read',
    date: 'Februari 2026',
    summary: {
      id: 'Penerapan standar Mojo Barrier berbentuk sayap ganda, zonasi pit penonton, dan kalkulasi kepadatan maksimal 4 orang per meter persegi.',
      en: 'Implementing dual-winged Mojo barriers, audience pit compartmentalization, and 4-person per square meter density thresholds.'
    },
    content: {
      id: 'Manajemen pergerakan massa (crowd dynamics) bukan sekadar menaruh petugas keamanan di pintu masuk, melainkan rekayasa fisika dan psikologi massa. Dalam festival musik terbuka, tekanan gelombang dorongan dari belakang ke arah panggung dapat menghasilkan gaya dorong melebihi 300 kg. EO Indonesia menerapkan sistem barikade terkotak-kotak (penning system) dengan koridor steril selebar 1,8 meter bagi tim evakuasi medis darurat.',
      en: 'Crowd management is an exercise in structural physics and behavioral psychology. In open-air stadium events, longitudinal pressure waves directed toward headline acts can generate surge forces exceeding 300 kg. EO Indonesia mandates compartmentalized barrier pens with dedicated 1.8m sterile medical extraction corridors.'
    },
    sections: [
      {
        id: 'prinsip-fisika-massa',
        heading: {
          id: '1. Rekayasa Fisika Massa: Batas Toleransi Kepadatan Penonton',
          en: '1. Crowd Physics Engineering: Density Tolerance Thresholds'
        },
        body: {
          id: 'Kepadatan aman penonton festival berdiri (standing festival) adalah 3 sampai maksimal 4 orang per meter persegi. Ketika kepadatan melebihi 5 orang/m², kontak fisik antar individu menyebabkan transfer gelombang dorong tak terkendali. EO Indonesia menggunakan penghitungan kapasitas berbasis grid dan sistem sensor penghitung kuota masuk otomatis di setiap gate.',
          en: 'The safe operating threshold for standing festival crowds is 3 to 4 persons per square meter. Above 5 persons/sqm, physical contact triggers fluid shockwave surges where individuals lose autonomous balance. EO Indonesia applies grid capacity algorithms and digital gate turnstile counters to strictly maintain zone limits.'
        },
        keyTakeaway: {
          id: 'Batas maksimal mutlak: 4 orang per meter persegi di seluruh area festival.',
          en: 'Absolute maximum threshold: 4 persons per square meter across all festival zones.'
        }
      },
      {
        id: 'konfigurasi-barrier',
        heading: {
          id: '2. Konfigurasi Barrier Sayap Ganda (Dual-Wing Mojo Configuration)',
          en: '2. Dual-Wing Mojo Barrier Staging Configuration'
        },
        body: {
          id: 'Alih-alih menggunakan satu baris barikade lurus di depan panggung, EO Indonesia menyusun konfigurasi sayap melengkung (curved wing) dengan barikade pembagi tengah (center thrust barrier). Desain ini memecah gelombang massa dari arah tengah menjadi dua arus terpisah ke kiri dan kanan, sekaligus menciptakan koridor aman bagi tim medis dan pemadam api.',
          en: 'Rather than a straight barrier line, EO Indonesia engineers a curved dual-wing layout integrated with a center thrust barrier. This deflects central surge forces into split lateral directions while providing safe access catwalks for security stewards and medical responders.'
        },
        keyTakeaway: {
          id: 'Center thrust barrier memotong gaya impak massa hingga 60% dibanding barikade lurus.',
          en: 'Center thrust barrier layout cuts longitudinal crowd surges by up to 60%.'
        }
      },
      {
        id: 'koridor-medis-steril',
        heading: {
          id: '3. Koridor Steril Evakuasi Medis & Water Station Bebas Hambatan',
          en: '3. Sterile Medical Extraction Corridors & Free Hydration Gates'
        },
        body: {
          id: 'Di antara barikade panggung dan pit pertama wajib terdapat koridor selebar minimal 1,8 meter. Koridor ini dilarang keras diisi kabel melintang atau perlengkapan teknis tanpa protektor karet kuning (cable crossover bridge). Tim medis terlatih ditempatkan setiap 10 meter dengan tandu scoop dan pasokan air mineral gratis guna mencegah dehidrasi massal.',
          en: 'A sterile buffer zone measuring at least 1.8 meters must separate front barriers from technical stage footprints. This alley must remain free of unsecured cabling via heavy-duty rubber cable protectors. Trained paramedics equipped with scoop stretchers and hydration packs are stationed every 10 meters.'
        },
        keyTakeaway: {
          id: 'Waktu evakuasi korban pingsan dari bibir panggung ke pos medis maksimal 45 detik.',
          en: 'Extraction time from front barrier to triage post must remain under 45 seconds.'
        }
      }
    ]
  },
  {
    id: 'teknologi-led-3d-anamorphic',
    title: {
      id: 'Tren Produksi Panggung 2026: Integrasi LED 3D Anamorphic dan AI Delegate Check-In',
      en: '2026 Stage Trends: 3D Anamorphic LED Integration & AI Delegate Check-In'
    },
    category: {
      id: 'Inovasi Teknologi',
      en: 'Technology Innovation'
    },
    readTime: '5 min read',
    date: 'Januari 2026',
    summary: {
      id: 'Bagaimana ilusi optik kedalaman ruang 3D pada layar melengkung dan sistem registrasi nirkontak mendongkrak engagement konferensi modern.',
      en: 'How curved-screen anamorphic optical illusions and touchless facial check-in elevate modern international summit engagement.'
    },
    content: {
      id: 'Era layar datar konvensional mulai berganti ke pengalaman visual berdimensi. Melalui panel LED berpitch halus (P1.8) dengan sudut lengkung 90 derajat yang dikalibrasi titik pandang audiens utama (sweet spot), materi pembuka acara mampu memberikan ilusi obyek melayang di udara. Dipadukan dengan sistem registrasi berteknologi pemindai cerdas, delegasi konferensi dapat mencetak tanda pengenal hanya dalam 3 detik tanpa antrean manual.',
      en: 'Flat backdrops are giving way to spatial dimensional illusions. Utilizing fine-pitch P1.8 LED panels configured with calculated 90-degree curve radii relative to audience sweet spots, stage intros project floating 3D brand assets without requiring 3D glasses. When coupled with automated smart check-in kiosks, attendee badging completes in under 3 seconds.'
    },
    sections: [
      {
        id: 'prinsip-anamorphic-3d',
        heading: {
          id: '1. Prinsip Ilusi Kedalaman Ruang & Sweet Spot Audiens',
          en: '1. Spatial Depth Illusion Principles & Audience Sweet Spot'
        },
        body: {
          id: 'Visual anamorphic 3D memanfaatkan distorsi perspektif gambar pada sudut layar lengkung (biasanya sudut 90 derajat). Ketika dilihat dari sudut pandang sentral (sweet spot) area VIP/Plenary, gambar tampak menonjol keluar dari bingkai fisik panggung tanpa memerlukan kacamata 3D khusus.',
          en: 'Anamorphic 3D exploits perspective distortion across angled corner screens. When viewed from the primary audience focal apex (sweet spot), rendered 3D objects appear to leap out of physical display confines into open air without requiring stereoscopic eyewear.'
        },
        keyTakeaway: {
          id: 'Sudut kelengkungan layar wajib disimulasikan melalui render 3D ruang sebelum fabrikasi.',
          en: 'Screen curvature angles must be pre-simulated in 3D spatial renders prior to staging.'
        }
      },
      {
        id: 'spesifikasi-led-p18',
        heading: {
          id: '2. Kalibrasi Hardware: Pixel Pitch P1.8 & Refresh Rate 3840Hz',
          en: '2. Hardware Calibration: Fine-Pitch P1.8 & 3840Hz Refresh Rates'
        },
        body: {
          id: 'Untuk rekaman kamera siaran langsung tanpa efek moiré dan garis kedip (flicker), panel LED wajib memiliki refresh rate minimal 3840Hz dengan kartu prosesor NovaStar UHD. Diperlukan server media bertenaga GPU ganda (Disguise atau Resolume Arena) untuk pemutaran konten resolusi ultra-tinggi 8K 60fps.',
          en: 'To eliminate moiré patterns and broadcast scanning lines, LED walls must utilize 3840Hz driver ICs paired with NovaStar UHD processors. Synchronized media servers (Disguise d3 or Resolume Arena) running dual enterprise GPUs drive native 8K 60fps frame rates.'
        },
        keyTakeaway: {
          id: 'Gunakan panel berkualitas tinggi anti-pantulan untuk pencahayaan panggung studio.',
          en: 'Deploy matte black anti-reflective panels under high-output stage luminaires.'
        }
      },
      {
        id: 'ai-delegate-badging',
        heading: {
          id: '3. Registrasi AI & Cetak ID Card Nirkontak 3 Detik',
          en: '3. AI Delegate Check-In & 3-Second Touchless Badge Printing'
        },
        body: {
          id: 'Menghilangkan antrean delegasi konferensi dengan kios mandiri bertenaga pengenal QR cepat atau pemindai wajah optik. Begitu delegasi mendekati kios, lencana peserta berbahan ramah lingkungan langsung dicetak bersamaan dengan penulisan chip RFID untuk pelacakan kehadiran sesi breakout.',
          en: 'Eliminate registration bottlenecks via self-service kiosks with high-speed QR and facial identification optics. Delegates trigger instant thermal badge printing under 3 seconds while encoding embedded RFID chips for attendance tracking in concurrent breakout halls.'
        },
        keyTakeaway: {
          id: 'Mampu memproses hingga 1.200 delegasi per jam pada 4 terminal kios mandiri.',
          en: 'Processes up to 1,200 delegates per hour across 4 automated self-check kiosks.'
        }
      }
    ]
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: {
      id: 'Discovery & Briefing',
      en: 'Discovery & Briefing'
    },
    desc: {
      id: 'Menganalisis tujuan strategis, target audiens, batasan anggaran, dan profil lokasi acara.',
      en: 'Analyzing strategic goals, attendee profiles, budget parameters, and venue characteristics.'
    }
  },
  {
    step: '02',
    title: {
      id: 'Konseptualisasi & Budgeting',
      en: 'Conceptualization & Budgeting'
    },
    desc: {
      id: 'Menyusun rancangan panggung 3D, alur rundown, rekomendasi talent, dan rincian RAB transparan.',
      en: 'Developing 3D stage renders, rundown cues, talent curation, and line-item transparent budgets.'
    }
  },
  {
    step: '03',
    title: {
      id: 'Pra-Produksi & Perizinan',
      en: 'Pre-Production & Permitting'
    },
    desc: {
      id: 'Uji beban rigging teknis, koordinasi izin keramaian Polri, dan gladi resik virtual.',
      en: 'Structural load testing, national police permit sign-offs, and technical dry runs.'
    }
  },
  {
    step: '04',
    title: {
      id: 'Eksekusi Hari-H Presisi',
      en: 'Precision Ground Execution'
    },
    desc: {
      id: 'Komando terpusat show director, monitoring frekuensi radio nirkabel, dan pengawalan VVIP.',
      en: 'Central show director command, wireless RF spectrum surveillance, and VIP protocol escort.'
    }
  },
  {
    step: '05',
    title: {
      id: 'Evaluasi & Audit Transparan',
      en: 'Evaluation & Transparent Audit'
    },
    desc: {
      id: 'Dokumentasi high-res 4K, laporan metrik kehadiran, audit kepuasan, dan serah terima dokumen.',
      en: 'High-res 4K documentation, attendance metric analytics, stakeholder audits, and final closeout.'
    }
  }
];

export const CLIENT_LOGOS = [
  { name: 'PT Pertamina (Persero)', type: 'BUMN Energi' },
  { name: 'PT Telkom Indonesia', type: 'BUMN Telekomunikasi' },
  { name: 'Bank Mandiri', type: 'BUMN Perbankan' },
  { name: 'Bank Central Asia (BCA)', type: 'Perbankan Nasional' },
  { name: 'PT Astra International', type: 'Konglomerasi Otomotif' },
  { name: 'Kementerian BUMN RI', type: 'Kementerian & Instansi' },
  { name: 'Kementerian ESDM RI', type: 'Kementerian & Instansi' },
  { name: 'Kemenparekraf RI', type: 'Kementerian & Instansi' },
  { name: 'PT PLN (Persero)', type: 'BUMN Ketenagalistrikan' },
  { name: 'Otorita Ibu Kota Nusantara', type: 'Lembaga Negara' }
];

export const TESTIMONIALS = [
  {
    quote: {
      id: '“Presisi waktu dan kesiapsiagaan teknis tim EO Indonesia saat menangani 2.800 delegasi internasional di BNDCC luar biasa. Sistem penerjemah simultan dan pengamanan protokoler berjalan tanpa satu pun komplain dari delegasi negara sahabat.”',
      en: '“The time precision and technical readiness demonstrated by the EO Indonesia team when managing 2,800 international delegates at BNDCC was extraordinary. Simultaneous translation and protocol security executed without a single friction point.”'
    },
    author: 'Dr. Raden Wicaksono',
    role: {
      id: 'Project Director KTT Energi Internasional',
      en: 'Project Director International Energy Summit'
    },
    organization: 'Kementerian ESDM & Koordinator Bilateral'
  },
  {
    quote: {
      id: '“Mengumpulkan 14.000 karyawan di ICE BSD dengan panggung 360 derajat adalah tantangan raksasa. EO Indonesia membuktikan bahwa kapasitas mereka setara dengan agensi produksi kelas dunia. Transparansi biaya dan disiplin K3 patut diacungi jempol.”',
      en: '“Gathering 14,000 employees at ICE BSD around a 360-degree stage was a massive operational feat. EO Indonesia proved their technical capacity matches world-class production agencies. Total cost transparency and OHS discipline.”'
    },
    author: 'Siti Sarah Iskandar',
    role: {
      id: 'VP Corporate Communications & Culture',
      en: 'VP Corporate Communications & Culture'
    },
    organization: 'BUMN Telekomunikasi Indonesia'
  },
  {
    quote: {
      id: '“Dalam dunia festival terbuka berkapasitas puluhan ribu orang, keselamatan penonton adalah harga mati. Rekayasa barikade Mojo dan koordinasi taktis kepolisian mereka membuat kami tenang sejak hari pertama.”',
      en: '“In large-scale festival operations with tens of thousands of music lovers, crowd safety is non-negotiable. Their Mojo barrier design and police coordination gave our stakeholders complete confidence from day one.”'
    },
    author: 'Farhan Maulana',
    role: {
      id: 'Chief Executive Producer',
      en: 'Chief Executive Producer'
    },
    organization: 'Asosiasi Promotor & Festival Nusantara'
  }
];
