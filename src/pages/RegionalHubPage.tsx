import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { InnerPageHero } from '../components/InnerPageHero';
import { PageQuickToc } from '../components/PageQuickToc';
import { SeoHead } from '../components/SeoHead';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/contact';
import { REGION_HUBS } from '../data/content';
import { MapPin, Warehouse, Truck, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, Building2, Sparkles, PhoneCall } from 'lucide-react';

interface RegionalHubPageProps {
  lang: Language;
  onOpenRfp: () => void;
}

interface RegionalSpotlight {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  coverage: string[];
  specs: string;
  leadTime: string;
  highlightEvent: string;
}

const SPOTLIGHTS: RegionalSpotlight[] = [
  {
    id: 'hq-jogja',
    name: 'Kantor Pusat & Central Command (D.I. Yogyakarta)',
    type: 'Headquarters & Creative Studio',
    address: 'Gg. Nuri No.99, Pringgolayan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198',
    phone: '+62 853-6082-1111',
    coverage: ['D.I. Yogyakarta (Bantul, Sleman, Kota Jogja, Kulon Progo, Gunungkidul)', 'Solo Raya', 'Semarang', 'Jawa Tengah'],
    specs: 'Studio Render 3D Staging, Show Director Command Center, Rigging & Audio Lab',
    leadTime: 'Mobilisasi < 6 Jam Area DIY & Jateng',
    highlightEvent: 'Gala Gathering & Konvensi Akademik Gadjah Mada'
  },
  {
    id: 'hub-jakarta',
    name: 'Hub Logistik DKI Jakarta & Bodetabek',
    type: 'Major Production Fleet Depot',
    address: 'Kawasan Pergudangan Logistik Terpadu Jakarta Selatan & BSD',
    phone: '+62 853-6082-1111',
    coverage: ['DKI Jakarta (Pusat, Selatan, Barat, Timur, Utara)', 'Tangerang & BSD ICE', 'Bogor & Sentul SICC', 'Bekasi & Cikarang'],
    specs: '600+ Panel LED P1.8/P2.6, d&b Line Array, Heavy Aluminum Truss TUV 52 Ton',
    leadTime: 'Mobilisasi 12 Jam Seluruh Bodetabek',
    highlightEvent: 'Telkom Indonesia 60th Diamond Gathering di ICE BSD'
  },
  {
    id: 'hub-bali',
    name: 'Hub MICE Internasional Bali (Nusa Dua & Denpasar)',
    type: 'International Summit & Diplomatic Hub',
    address: 'Kawasan Staging Nusa Dua & Denpasar Selatan, Bali',
    phone: '+62 853-6082-1111',
    coverage: ['Bali (Nusa Dua BNDCC/BICC, Denpasar, Jimbaran, Kuta, Sanur)', 'Lombok & Mandalika', 'Labuan Bajo NTT'],
    specs: 'Bosch DCN Wireless Translation 6 Bahasa, Curved Micro-LED Wall, Pengawalan Paspampres',
    leadTime: 'Standar KTT VVIP Nir-Deviasi',
    highlightEvent: 'Indonesia International Energy Transition Summit di BNDCC Bali'
  },
  {
    id: 'hub-surabaya',
    name: 'Hub Jawa Timur & Indonesia Tengah (Surabaya)',
    type: 'Regional Warehouse & Industrial Staging',
    address: 'Kompleks Staging Rungkut & Tanjung Perak, Surabaya',
    phone: '+62 853-6082-1111',
    coverage: ['Surabaya Grand City & Jatim Expo', 'Sidoarjo', 'Malang Raya', 'Gresik & Pasuruan'],
    specs: 'Rigging Konser Terbuka, Genset Silent 500 kVA ATS, Tenda Roder VVIP AC',
    leadTime: 'Mobilisasi 12–24 Jam Jawa Timur',
    highlightEvent: 'Pameran Manufaktur & Gathering BUMN Industri'
  },
  {
    id: 'hub-ikn',
    name: 'Hub Kalimantan & Ibu Kota Nusantara (IKN / Balikpapan)',
    type: 'Strategic Capital Growth Staging',
    address: 'Kawasan Logistik Kariangau Balikpapan & Akses Samboja - Sepaku IKN',
    phone: '+62 853-6082-1111',
    coverage: ['Ibu Kota Nusantara (IKN Sepaku)', 'Balikpapan', 'Samarinda', 'Kalimantan Timur & Selatan'],
    specs: 'Panggung Groundbreaking Kenegaraan, Tenda Roder Modular, Heavy Fleet Genset',
    leadTime: 'Prioritas Proyek Strategis Nasional',
    highlightEvent: 'Seremoni Konstruksi & Aktivasi BUMN di IKN'
  },
  {
    id: 'hub-medan-makassar',
    name: 'Hub Sumatra (Medan) & Hub Timur (Makassar)',
    type: 'Archipelagic Island Hubs',
    address: 'Medan Deli & Makassar Panakkukang',
    phone: '+62 853-6082-1111',
    coverage: ['Sumatra Utara, Riau, Batam', 'Sulawesi Selatan, Manado, Kendari, Maluku & Papua'],
    specs: 'Jaringan 250+ Rekanan Vendor Terakreditasi K3L Lokal',
    leadTime: 'Efisiensi Mobilisasi Tanpa Beban Kargo Antar-Pulau Berlebih',
    highlightEvent: 'Tur Konser Musik Multi-Kota Sumatra & Sulawesi'
  }
];

export const RegionalHubPage: React.FC<RegionalHubPageProps> = ({ lang, onOpenRfp }) => {
  const [selectedSpotlight, setSelectedSpotlight] = useState<RegionalSpotlight>(SPOTLIGHTS[0]);

  return (
    <div className="bg-[#06142E]">
      <SeoHead
        title={lang === 'id' ? 'Jangkauan 38 Provinsi & Hub Logistik Nasional' : 'Nationwide 38 Provinces Logistics Hubs'}
        description="Jangkauan logistik dan event production EO Indonesia di 38 provinsi. Kantor Pusat Yogyakarta, Hub DKI Jakarta, Hub Bali MICE, Surabaya, Medan, Makassar, dan Balikpapan/IKN."
        keywords="EO Jogja, EO Jakarta, EO Bali, EO Surabaya, EO IKN Balikpapan, EO Medan, Event Organizer Seluruh Indonesia, Vendor Rigging Sound Daerah"
        canonicalPath="/wilayah"
        breadcrumbs={[
          { name: lang === 'id' ? 'Jangkauan Wilayah' : 'Regional Hubs', path: '/wilayah' }
        ]}
      />

      {/* 1. Inner Hero */}
      <InnerPageHero
        badge={lang === 'id' ? 'Cakupan 38 Provinsi & Hub Nasional' : '38 Provinces Logistics Hubs'}
        breadcrumbLabel={lang === 'id' ? 'Wilayah & Hub' : 'Regional Hubs'}
        lang={lang}
        title={lang === 'id' ? 'Infrastruktur Produksi Panggung' : 'Nationwide Production Logistics'}
        titleHighlight={lang === 'id' ? 'Dari Sabang Sampai Merauke.' : 'Across All 38 Provinces.'}
        description={
          lang === 'id'
            ? 'Mengatasi tantangan kepulauan Nusantara melalui integrasi Kantor Pusat D.I. Yogyakarta, 4 hub pergudangan regional, serta 600+ rekanan vendor lokal terverifikasi K3L.'
            : 'Overcoming Indonesian archipelagic challenges through our Yogyakarta Headquarters, 4 regional warehousing depots, and 600+ OHS-certified local equipment suppliers.'
        }
      />

      {/* SEO & Fast Navigation: Page Table of Contents */}
      <PageQuickToc
        items={[
          { id: 'hub-kota-utama', label: lang === 'id' ? 'Hub Kota Metropolitan (Jogja, Solo, dll)' : 'Metro City Hubs' },
          { id: 'pilih-wilayah', label: lang === 'id' ? 'Pilih Wilayah 38 Provinsi' : 'Select 38 Provinces' },
          { id: 'hq-jogja', label: lang === 'id' ? 'Kantor Pusat HQ (Jogja)' : 'Headquarters (HQ)' },
          { id: 'hub-jakarta', label: 'Hub DKI Jakarta & Bodetabek' },
          { id: 'hub-bali', label: 'Hub Bali MICE' },
          { id: 'hub-ikn', label: 'Hub IKN Nusantara' },
          { id: 'hub-medan-makassar', label: 'Hub Sumatra & Sulawesi' }
        ]}
        lang={lang}
        title={lang === 'id' ? 'Daftar Hub Logistik:' : 'Regional Hubs Navigation:'}
      />

      {/* 2. Metropolitan City Hubs Showcase (Jogja, Solo, Semarang, Surabaya, Jakarta) */}
      <section id="hub-kota-utama" className="py-16 bg-[#040D1E] text-white border-b border-[#0A2150] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Layanan Terpadu Kota Metropolitan' : 'Metropolitan City Hubs'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'id' ? 'Halaman Resmi Event Organizer per Kota' : 'Dedicated City Event Hubs'}
            </h2>
            <p className="mt-3 text-sm text-[#A9B8D0] leading-relaxed">
              {lang === 'id'
                ? 'Informasi lengkap estimasi biaya, rekomendasi venue, prosedur izin keramaian kepolisian, dan kapasitas rigging panggung mandiri di setiap kota utama.'
                : 'Complete pricing guides, top venues, police permitting procedures, and in-house technical staging capacity in key metropolitan markets.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* EO Jogja */}
            <div className="bg-[#06142E] border border-[#008CFF]/40 rounded-2xl p-6 hover:border-[#19E6FF] transition-all hover:shadow-[0_8px_32px_rgba(7,91,255,0.2)] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white bg-[#075BFF] px-2.5 py-0.5 rounded-full border border-[#19E6FF]">
                    Kantor Pusat (HQ)
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold font-mono">
                    Mulai Rp 25 Jt
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">EO Jogja (Yogyakarta)</h3>
                <p className="text-xs text-[#A9B8D0] leading-relaxed">
                  Layanan MICE, corporate gathering di Kaliurang/Prambanan, dan konser musik di JEC/Ambarrukmo.
                </p>
                <div className="text-[11px] text-slate-300 space-y-1">
                  <div><strong>Venue:</strong> JEC, Royal Ambarrukmo, Alana, Prambanan</div>
                  <div><strong>Perizinan:</strong> Dit Intelkam Polda DIY & Polresta</div>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-[#0A2150]">
                <Link
                  to="/eo-jogja"
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#19E6FF] hover:text-white"
                >
                  <span>Buka Halaman Lengkap EO Jogja</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* EO Solo */}
            <div className="bg-[#06142E] border border-[#0A2150] rounded-2xl p-6 hover:border-[#19E6FF] transition-all hover:shadow-[0_8px_32px_rgba(7,91,255,0.2)] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#19E6FF] bg-[#0A2150] px-2.5 py-0.5 rounded-full border border-[#008CFF]/30">
                    Solo Raya Hub
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold font-mono">
                    Mulai Rp 28 Jt
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">EO Solo (Surakarta)</h3>
                <p className="text-xs text-[#A9B8D0] leading-relaxed">
                  Spesialis event heritage di De Tjolomadoe, Edutorium UMS, dan gathering korporat Solo Baru & Tawangmangu.
                </p>
                <div className="text-[11px] text-slate-300 space-y-1">
                  <div><strong>Venue:</strong> De Tjolomadoe, Tirtonadi Hall, Edutorium</div>
                  <div><strong>Perizinan:</strong> Polresta Surakarta & Polda Jateng</div>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-[#0A2150]">
                <Link
                  to="/eo-solo"
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#19E6FF] hover:text-white"
                >
                  <span>Buka Halaman Lengkap EO Solo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* EO Semarang */}
            <div className="bg-[#06142E] border border-[#0A2150] rounded-2xl p-6 hover:border-[#19E6FF] transition-all hover:shadow-[0_8px_32px_rgba(7,91,255,0.2)] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#19E6FF] bg-[#0A2150] px-2.5 py-0.5 rounded-full border border-[#008CFF]/30">
                    Ibu Kota Jateng
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold font-mono">
                    Mulai Rp 32 Jt
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">EO Semarang</h3>
                <p className="text-xs text-[#A9B8D0] leading-relaxed">
                  Eksekusi MICE regional, pameran industri maritim di Marina Convention Center, dan festival PRPP Semarang.
                </p>
                <div className="text-[11px] text-slate-300 space-y-1">
                  <div><strong>Venue:</strong> MCC Semarang, Muladi Dome Undip, PRPP</div>
                  <div><strong>Perizinan:</strong> Polrestabes Semarang & Polda Jateng</div>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-[#0A2150]">
                <Link
                  to="/eo-semarang"
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#19E6FF] hover:text-white"
                >
                  <span>Buka Halaman Lengkap EO Semarang</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* EO Surabaya */}
            <div className="bg-[#06142E] border border-[#0A2150] rounded-2xl p-6 hover:border-[#19E6FF] transition-all hover:shadow-[0_8px_32px_rgba(7,91,255,0.2)] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#19E6FF] bg-[#0A2150] px-2.5 py-0.5 rounded-full border border-[#008CFF]/30">
                    Metropolitan Jatim
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold font-mono">
                    Mulai Rp 48 Jt
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">EO Surabaya</h3>
                <p className="text-xs text-[#A9B8D0] leading-relaxed">
                  Tata panggung RUPS korporat, brand activation otomotif, dan expo B2B di Grand City Convex & Jatim Expo.
                </p>
                <div className="text-[11px] text-slate-300 space-y-1">
                  <div><strong>Venue:</strong> Grand City Convex, Jatim Expo, Westin</div>
                  <div><strong>Perizinan:</strong> Polrestabes Surabaya & Polda Jatim</div>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-[#0A2150]">
                <Link
                  to="/eo-surabaya"
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#19E6FF] hover:text-white"
                >
                  <span>Buka Halaman Lengkap EO Surabaya</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* EO Jakarta */}
            <div className="bg-[#06142E] border border-[#008CFF]/40 rounded-2xl p-6 hover:border-[#19E6FF] transition-all hover:shadow-[0_8px_32px_rgba(7,91,255,0.2)] flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white bg-[#075BFF] px-2.5 py-0.5 rounded-full border border-[#19E6FF]">
                    Ibu Kota & MICE Internasional
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold font-mono">
                    Mulai Rp 60 Jt
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">EO Jakarta (Jabodetabek)</h3>
                <p className="text-xs text-[#A9B8D0] leading-relaxed">
                  Standar internasional untuk KTT multilateral kementerian, gala dinner konglomerasi, dan pameran akbar di JCC Senayan & ICE BSD City dengan protokol Paspampres & Mabes Polri.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300 pt-1">
                  <div><strong>Venue:</strong> JCC Senayan, ICE BSD, JIExpo, Ritz-Carlton SCBD</div>
                  <div><strong>Perizinan:</strong> Dit Intelkam Polda Metro Jaya & Baintelkam Mabes Polri</div>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-[#0A2150]">
                <Link
                  to="/eo-jakarta"
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#19E6FF] hover:text-white"
                >
                  <span>Buka Halaman Lengkap EO Jakarta</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Regional Selector */}
      <section id="pilih-wilayah" className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Pusat Distribusi & Kantor Lapangan' : 'Distribution Depots & Staging Offices'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'id' ? 'Pilih Wilayah Operasional Acara Anda' : 'Explore Your Event Region'}
            </h2>
            <p className="mt-3 text-base text-[#A9B8D0]">
              {lang === 'id'
                ? 'Klik untuk melihat spesifikasi armada peralatan panggung, cakupan provinsi, estimasi waktu mobilisasi, dan kontak PIC regional.'
                : 'Click to inspect staging hardware capacity, provincial coverage, lead times, and regional coordinator contacts.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* List of Regions (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {SPOTLIGHTS.map((spot) => {
                const isSelected = selectedSpotlight.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    id={spot.id}
                    type="button"
                    onClick={() => setSelectedSpotlight(spot)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden scroll-mt-20 ${
                      isSelected
                        ? 'bg-[#0A2150] border-[#19E6FF] shadow-[0_4px_24px_rgba(7,91,255,0.35)] ring-1 ring-[#19E6FF]/50'
                        : 'bg-[#0A2150]/60 backdrop-blur-md border-[#008CFF]/20 hover:border-[#008CFF]/60 hover:bg-[#0A2150]/80'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#075BFF] to-[#19E6FF]" />
                    )}
                    <div className="text-[11px] font-bold text-[#19E6FF] uppercase tracking-wider">
                      {spot.type}
                    </div>
                    <div className="text-base font-bold text-white mt-1 leading-snug">
                      {spot.name}
                    </div>
                    <div className="mt-2 text-xs text-[#A9B8D0] truncate">
                      {spot.leadTime}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Region Detailed Inspector (7 cols) */}
            <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-[#0A2150] to-[#06142E] border border-[#008CFF]/35 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#075BFF]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[#06142E]">
                <div className="text-xs font-mono text-[#19E6FF] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
                  <span>PROFIL HUB LOGISTIK TERPILIH</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#06142E] text-[#B6F4FF] border border-[#008CFF]/30 font-medium">
                  {selectedSpotlight.leadTime}
                </span>
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {selectedSpotlight.name}
                  </h3>
                  <div className="mt-2 flex items-start gap-2 text-xs text-[#A9B8D0] leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                    <span>{selectedSpotlight.address}</span>
                  </div>
                </div>

                {/* Covered Provinces */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#19E6FF] mb-2">
                    {lang === 'id' ? 'Cakupan Area & Kota Utama:' : 'Covered Municipalities:'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedSpotlight.coverage.map((c, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-white bg-[#06142E] px-3 py-1.5 rounded-lg border border-[#008CFF]/30"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specs */}
                <div className="p-4 rounded-xl bg-[#06142E]/70 border border-[#008CFF]/30 text-xs space-y-1.5 text-[#A9B8D0]">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Warehouse className="w-4 h-4 text-[#19E6FF]" />
                    <span>Spesifikasi Armada Peralatan:</span>
                  </div>
                  <p>{selectedSpotlight.specs}</p>
                  <div className="pt-2 border-t border-[#0A2150] text-[11px] text-[#B6F4FF]">
                    <strong>Studi Kasus Representatif:</strong> {selectedSpotlight.highlightEvent}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#06142E] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-white flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#19E6FF]" />
                    <span>Hotline: {CONTACT_INFO.phoneDisplay}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={getWhatsAppUrl('general', { locationCity: selectedSpotlight.name }, lang)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-all shadow-[0_4px_16px_rgba(7,91,255,0.4)] border border-[#19E6FF]/30 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                      <span>{lang === 'id' ? 'Chat PIC Wilayah' : 'Chat Regional Lead'}</span>
                    </a>

                    <button
                      onClick={onOpenRfp}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#B6F4FF] hover:text-white bg-[#06142E] hover:bg-[#081A3A] rounded-xl transition-all border border-[#008CFF]/30 cursor-pointer"
                    >
                      <span>{lang === 'id' ? 'RFP Acara' : 'Submit RFP'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
