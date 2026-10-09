import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { InnerPageHero } from '../components/InnerPageHero';
import { PageQuickToc } from '../components/PageQuickToc';
import { SeoHead } from '../components/SeoHead';
import { CITY_HUBS_DATA, ALL_CITY_SLUGS, CitySlug } from '../data/cityHubsData';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/contact';
import {
  MapPin,
  Building2,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  HelpCircle,
  FileText,
  Truck,
  Sparkles,
  ArrowRight,
  MessageSquare,
  PhoneCall,
  ChevronDown,
  Layers,
  Award,
  Clock,
  Send
} from 'lucide-react';

interface CityHubLandingPageProps {
  lang: Language;
  onOpenRfp: (initialService?: string) => void;
  cityParam?: CitySlug;
}

export const CityHubLandingPage: React.FC<CityHubLandingPageProps> = ({
  lang,
  onOpenRfp,
  cityParam
}) => {
  const params = useParams<{ citySlug?: string }>();
  const navigate = useNavigate();

  // Resolve current city slug from prop or route param
  let currentSlug: CitySlug = 'eo-jogja';
  if (cityParam && CITY_HUBS_DATA[cityParam]) {
    currentSlug = cityParam;
  } else if (params.citySlug && CITY_HUBS_DATA[params.citySlug]) {
    currentSlug = params.citySlug as CitySlug;
  }

  const city = CITY_HUBS_DATA[currentSlug] || CITY_HUBS_DATA['eo-jogja'];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // TOC items
  const tocItems = [
    { id: 'definisi-layanan', label: `1. Definisi & Keunggulan EO ${city.cityName}` },
    { id: 'biaya-dan-paket', label: `2. Biaya & Estimasi Paket Jasa EO ${city.cityName}` },
    { id: 'rekomendasi-venue', label: `3. Rekomendasi Venue Event Terbaik di ${city.cityName}` },
    { id: 'prosedur-izin', label: `4. Prosedur Izin Keramaian Polri & K3L` },
    { id: 'armada-teknis', label: `5. Spesifikasi Rigging & Audio Visual Lokal` },
    { id: 'studi-kasus', label: `6. Rekam Jejak Acara di ${city.cityName}` },
    { id: 'faq-eo', label: `7. Tanya Jawab (FAQ) EO ${city.cityName}` }
  ];

  // Schema.org Structured Data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `https://eoindonesia.id/${city.slug}#service`,
        name: `EO ${city.cityName} - EO Indonesia`,
        alternateName: [`Event Organizer ${city.cityName}`, `Jasa EO ${city.cityName}`],
        url: `https://eoindonesia.id/${city.slug}`,
        logo: 'https://eoindonesia.id/logo.png',
        image: 'https://eoindonesia.id/logo.png',
        description: city.metaDescription,
        telephone: city.geo.phone,
        email: city.geo.email,
        priceRange: 'IDR 2.500.000 - IDR 200.000.000',
        address: {
          '@type': 'PostalAddress',
          streetAddress: city.geo.address,
          addressLocality: city.fullName,
          addressRegion: city.province,
          postalCode: city.geo.postalCode,
          addressCountry: 'ID'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.geo.lat,
          longitude: city.geo.lng
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '20:00'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `https://eoindonesia.id/${city.slug}#faq`,
        mainEntity: city.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://eoindonesia.id/${city.slug}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: lang === 'id' ? 'Beranda' : 'Home',
            item: 'https://eoindonesia.id/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: lang === 'id' ? 'Wilayah & Hub' : 'Regional Hubs',
            item: 'https://eoindonesia.id/wilayah'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `EO ${city.cityName}`,
            item: `https://eoindonesia.id/${city.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div>
      <SeoHead
        title={city.metaTitle}
        description={city.metaDescription}
        canonicalPath={`/${city.slug}`}
        keywords={city.keywords.join(', ')}
        breadcrumbs={[
          {
            name: lang === 'id' ? 'Beranda' : 'Home',
            path: '/'
          },
          {
            name: lang === 'id' ? 'Wilayah & Hub' : 'Regional Hubs',
            path: '/wilayah'
          },
          {
            name: `EO ${city.cityName}`,
            path: `/${city.slug}`
          }
        ]}
      />

      {/* Inject City-Specific Schema.org JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 1. Hero Section - Berada di posisi paling atas dengan Breadcrumbs dan H1 */}
      <InnerPageHero
        badge={
          currentSlug === 'eo-jogja'
            ? 'Kantor Pusat & Central Command Nasional'
            : `Hub Produksi & Staging Depot ${city.fullName}`
        }
        breadcrumbLabel={`EO ${city.cityName}`}
        lang={lang}
        title={city.h1Title}
        description={city.tagline}
        parentBreadcrumb={{
          name: lang === 'id' ? 'Wilayah & Hub' : 'Regional Hubs',
          path: '/wilayah'
        }}
      />

      {/* 2. Multi-City Navigation Switcher Bar - Sticky navigasi antar-hub kota */}
      <nav aria-label="Pilih Hub Regional" className="bg-[#030914] border-b border-[#0A2150] sticky top-[68px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 shrink-0 text-xs font-bold text-[#19E6FF] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Pilih Hub Kota:' : 'Select City Hub:'}</span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {ALL_CITY_SLUGS.map((slugKey) => {
                const c = CITY_HUBS_DATA[slugKey];
                const isActive = slugKey === currentSlug;
                return (
                  <button
                    key={slugKey}
                    onClick={() => navigate(`/${slugKey}`)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#075BFF] text-white shadow-[0_2px_12px_rgba(7,91,255,0.4)] border border-[#19E6FF]/50'
                        : 'bg-[#06142E] text-[#A9B8D0] hover:text-white hover:bg-[#0A2150] border border-[#0A2150]'
                    }`}
                  >
                    <span>EO {c.cityName}</span>
                    {slugKey === 'eo-jogja' && (
                      <span className="text-[10px] bg-[#19E6FF]/20 text-[#19E6FF] px-1 py-0.2 rounded font-bold">
                        HQ
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a
                href={getWhatsAppUrl('general', { locationCity: city.cityName }, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#19E6FF] hover:text-white font-medium flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Hotline {city.cityName}: {city.geo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. AI Overview Direct Answer Box (Google AI SGE Snippet Target) */}
      <div className="bg-[#030914] border-b border-[#0A2150] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#06142E] via-[#0A2150]/60 to-[#06142E] border border-[#008CFF]/40 rounded-2xl p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,140,255,0.15)] relative overflow-hidden">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#075BFF]/20 border border-[#19E6FF]/40 flex items-center justify-center text-[#19E6FF] shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#19E6FF] bg-[#0A2150] px-2.5 py-0.5 rounded border border-[#008CFF]/30">
                    Google AI Overview & Ringkasan Resmi
                  </span>
                  <span className="text-xs text-slate-400">
                    {city.fullName} · Terverifikasi EO Indonesia
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {lang === 'id' ? `Ringkasan Resmi Layanan EO ${city.cityName}` : `Official Overview of EO ${city.cityName}`}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  {city.overviewSnippet}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#A9B8D0]">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Legalitas NIB & K3L Resmi</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#19E6FF] font-medium">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Armada Staging Mandiri di {city.cityName}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{city.localFleet.mobilizationTime}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Table of Contents (Daftar Isi Cepat) */}
      <PageQuickToc items={tocItems} lang={lang} />

      {/* 5. Main Body Sections */}
      <div className="bg-[#040D1E] py-12 space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* SECTION 1: Definisi & Mengapa Memilih EO Indonesia di Kota ini */}
          <section id="definisi-layanan" className="scroll-mt-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2150] border border-[#008CFF]/40 text-[#19E6FF] text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Karakteristik & Lanskap Event {city.cityName}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Mengapa Memilih Jasa EO Indonesia untuk Event di {city.fullName}?
                </h3>
                <p className="text-sm text-[#A9B8D0] leading-relaxed">
                  {city.definition}
                </p>

                <div className="pt-4 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Standar Mutu Produksi di {city.cityName}:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {city.whyChooseUs.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#06142E] border border-[#0A2150] text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Local Contact & Fleet Badge Card */}
              <div className="lg:col-span-5 bg-[#06142E] border border-[#008CFF]/30 rounded-2xl p-6 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-[#0A2150] pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#19E6FF] tracking-wider">
                      Kantor & Staging Base
                    </span>
                    <h4 className="text-base font-bold text-white">
                      EO Indonesia ({city.cityName})
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#075BFF]/20 flex items-center justify-center text-[#19E6FF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3 text-xs text-[#A9B8D0]">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{city.geo.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white font-medium">
                    <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{city.geo.phone} (Hotline Resmi)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Respon Survei Lokasi: &lt; 2 Jam</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#0A2150] space-y-2">
                  <a
                    href={getWhatsAppUrl('general', { locationCity: city.cityName }, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#075BFF] hover:bg-[#008CFF] text-white text-xs font-bold rounded-xl transition-all shadow-[0_4px_16px_rgba(7,91,255,0.4)] border border-[#19E6FF]/30 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#19E6FF]" />
                    <span>Chat WhatsApp Desk {city.cityName}</span>
                  </a>

                  <button
                    onClick={() => onOpenRfp(`Acara di ${city.cityName}`)}
                    className="w-full py-2 px-4 bg-[#0A2150] hover:bg-[#0A2150]/80 text-[#B6F4FF] hover:text-white text-xs font-semibold rounded-xl transition-all border border-[#008CFF]/30 cursor-pointer text-center"
                  >
                    Minta Proposal & Estimasi RAB
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Transparansi Biaya & Estimasi Paket Jasa EO */}
          <section id="biaya-dan-paket" className="scroll-mt-36">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2150] border border-[#008CFF]/40 text-[#19E6FF] text-xs font-semibold">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Transparansi Biaya & Paket Penyelenggaraan</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Berapa Biaya Jasa EO di {city.cityName}? Estimasi Paket Produksi Acara
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                  Harga Start Mulai Rp 2.500.000 (Tergantung Kebutuhan & Skala)
                </span>
                <span className="px-3 py-1 rounded-full bg-[#075BFF]/20 border border-[#19E6FF]/40 text-[#19E6FF] text-xs font-semibold">
                  Garansi Plafon Anggaran Maksimal ≤ Rp 200 Juta
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#A9B8D0] leading-relaxed">
                Biaya jasa event organizer di {city.cityName} dihitung transparan: harga awal mulai dari Rp 2.500.000 tergantung kebutuhan spesifik dan skala acara hingga produksi panggung penuh dengan batas pagu anggaran tidak melebihi Rp 200 Juta (RAB itemized detail tanpa markup tersembunyi).
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {city.pricingTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all relative ${
                    idx === 1
                      ? 'bg-gradient-to-b from-[#0A2150]/90 to-[#06142E] border-[#19E6FF]/60 shadow-[0_8px_32px_rgba(7,91,255,0.25)]'
                      : 'bg-[#06142E] border-[#0A2150] hover:border-[#008CFF]/40'
                  }`}
                >
                  {idx === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#075BFF] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#19E6FF]">
                      Paling Banyak Dipilih Korporasi
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-[#19E6FF] uppercase tracking-wider">
                        Paket {idx + 1}
                      </span>
                      <h4 className="text-base font-bold text-white mt-1">
                        {tier.name}
                      </h4>
                    </div>

                    <div className="bg-[#030914] p-3.5 rounded-xl border border-[#0A2150]">
                      <div className="text-[11px] text-[#A9B8D0]">Estimasi Biaya Produksi:</div>
                      <div className="text-base sm:text-lg font-extrabold text-emerald-400 font-mono mt-0.5">
                        {tier.priceEstimate}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                        <Layers className="w-3 h-3 text-[#19E6FF]" />
                        <span>Kapasitas: {tier.scale}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-white">Item Cakupan Produksi:</div>
                      <ul className="space-y-2 text-xs text-[#A9B8D0]">
                        {tier.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#19E6FF] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#0A2150] text-[11px] text-slate-300">
                      <span className="font-semibold text-white">Spesifikasi Alat:</span> {tier.techSpecs}
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#0A2150]/40 border border-[#008CFF]/20 text-[11px] text-[#B6F4FF]">
                      <span className="font-semibold text-white">Cocok Untuk:</span> {tier.idealFor}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#0A2150]">
                    <button
                      onClick={() => onOpenRfp(`${tier.name} (${city.cityName})`)}
                      className="w-full py-2.5 px-4 bg-[#075BFF] hover:bg-[#008CFF] text-white text-xs font-bold rounded-xl transition-all shadow-[0_4px_16px_rgba(7,91,255,0.4)] border border-[#19E6FF]/30 cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Ajukan Penawaran Paket Ini</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Budget Banner */}
            <div className="mt-8 bg-gradient-to-r from-[#06142E] via-[#0A2150] to-[#06142E] border border-[#008CFF]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#A9B8D0] space-y-1 text-center sm:text-left">
                <div className="font-bold text-white text-sm flex items-center justify-center sm:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Fleksibilitas Anggaran & Garansi Anti-Overbudget</span>
                </div>
                <div>
                  Mulai dari skala kebutuhan modular Rp 2.500.000 hingga perhelatan panggung besar, kami memastikan total pembiayaan presisi terkunci di bawah batas plafon Rp 200 Juta instansi Anda dengan standar K3L & APMI terlindungi penuh.
                </div>
              </div>
              <a
                href={getWhatsAppUrl('service_custom', { locationCity: city.cityName }, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 bg-[#075BFF] hover:bg-[#008CFF] text-white border border-[#19E6FF]/40 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-[0_2px_12px_rgba(7,91,255,0.3)]"
              >
                Konsultasikan Plafon Anggaran Anda
              </a>
            </div>
          </section>

          {/* SECTION 3: Rekomendasi Venue Event Terbaik di Kota Ini */}
          <section id="rekomendasi-venue" className="scroll-mt-36">
            <div className="max-w-3xl mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2150] border border-[#008CFF]/40 text-[#19E6FF] text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Panduan Venue & Konvensi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Rekomendasi Gedung & Venue Event Terbaik di {city.fullName}
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B8D0]">
                EO Indonesia memiliki pengalaman staging langsung di seluruh venue prestisius ini, termasuk pemahaman tata letak pintu bongkar muat logistik (loading dock), batas beban lantai, dan akustik ruang.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {city.topVenues.map((venue, idx) => (
                <div
                  key={idx}
                  className="bg-[#06142E] border border-[#0A2150] hover:border-[#008CFF]/40 rounded-2xl p-5 sm:p-6 transition-all hover:shadow-lg space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-[#19E6FF] uppercase tracking-wider bg-[#0A2150] px-2 py-0.5 rounded">
                        {venue.type}
                      </span>
                      <h4 className="text-base font-bold text-white mt-1.5">
                        {venue.name}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-1 rounded-md shrink-0">
                      {venue.capacity}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#19E6FF] shrink-0" />
                    <span>{venue.location}</span>
                  </div>

                  <p className="text-xs text-[#A9B8D0] leading-relaxed pt-2 border-t border-[#0A2150]">
                    {venue.notes}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: Prosedur Izin Keramaian Polri & K3L */}
          <section id="prosedur-izin" className="scroll-mt-36">
            <div className="bg-gradient-to-br from-[#06142E] via-[#040D1E] to-[#0A2150]/60 border border-[#008CFF]/30 rounded-2xl p-6 sm:p-8">
              <div className="max-w-3xl mb-8 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2150] border border-[#008CFF]/40 text-[#19E6FF] text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Kepatuhan Hukum & Kepolisian</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Panduan Pengurusan Izin Keramaian & K3L di {city.cityName}
                </h3>
                <p className="text-xs sm:text-sm text-[#A9B8D0] leading-relaxed">
                  Menyelenggarakan acara publik dan korporasi tanpa izin sah berisiko tinggi dibubarkan. Tim legal operasional EO Indonesia mendampingi seluruh proses perizinan dari tingkat Polsek hingga Polda/Mabes Polri.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#06142E] p-5 rounded-xl border border-[#0A2150]">
                  <div className="text-[11px] font-bold uppercase text-[#19E6FF] mb-1">Tingkat Wewenang</div>
                  <div className="text-sm font-bold text-white mb-2">{city.permitGuide.authority}</div>
                  <p className="text-xs text-[#A9B8D0] leading-relaxed">
                    {city.permitGuide.jurisdictionNotes}
                  </p>
                </div>

                <div className="bg-[#06142E] p-5 rounded-xl border border-[#0A2150]">
                  <div className="text-[11px] font-bold uppercase text-[#19E6FF] mb-1">Timeline Pengajuan</div>
                  <div className="text-sm font-bold text-amber-400 mb-2">{city.permitGuide.leadTime}</div>
                  <p className="text-xs text-[#A9B8D0] leading-relaxed">
                    Pengajuan berkas resmi wajib diserahkan minimal H-14 hingga H-30 hari kalender guna mengakomodasi Tactical Floor Game (TFG) kepolisian dan inspeksi K3L venue.
                  </p>
                </div>

                <div className="bg-[#06142E] p-5 rounded-xl border border-[#0A2150]">
                  <div className="text-[11px] font-bold uppercase text-[#19E6FF] mb-1">5 Berkas Wajib</div>
                  <ul className="space-y-1.5 text-xs text-[#A9B8D0]">
                    {city.permitGuide.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#19E6FF] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#030914] border border-[#0A2150] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="text-[#A9B8D0]">
                  <span className="font-bold text-white">Butuh bantuan pengurusan izin mendesak?</span> Tim kepatuhan kami siap melakukan pendampingan berkas di {city.cityName}.
                </div>
                <a
                  href={getWhatsAppUrl('general', { locationCity: city.cityName }, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#075BFF] hover:bg-[#008CFF] text-white font-bold rounded-lg transition-all shrink-0 cursor-pointer"
                >
                  Konsultasi Perizinan {city.cityName}
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 5: Spesifikasi Rigging & Audio Visual Lokal */}
          <section id="armada-teknis" className="scroll-mt-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2150] border border-[#008CFF]/40 text-[#19E6FF] text-xs font-semibold">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Inventaris Mandiri Lokal</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Kapasitas Rigging, LED Screen & Sound System Mandiri di {city.cityName}
                </h3>
                <p className="text-xs sm:text-sm text-[#A9B8D0] leading-relaxed">
                  Salah satu kelemahan EO perantara adalah ketergantungan pada vendor sewa pihak ketiga yang kerap memicu keterlambatan loading dan mark-up harga. EO Indonesia memiliki armada gudang staging mandiri untuk area {city.fullName}.
                </p>
                <div className="p-4 rounded-xl bg-[#06142E] border border-[#0A2150] space-y-2">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#19E6FF]" />
                    <span>Basis Depo: {city.localFleet.depotName}</span>
                  </div>
                  <div className="text-xs text-[#19E6FF] font-semibold">
                    Kecepatan Mobilisasi: {city.localFleet.mobilizationTime}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#06142E] border border-[#008CFF]/30 rounded-2xl p-6 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                  Daftar Alat Siap Mobilisasi di Area {city.cityName}:
                </div>
                <div className="space-y-2.5">
                  {city.localFleet.equipmentReady.map((eq, eIdx) => (
                    <div
                      key={eIdx}
                      className="p-3 rounded-xl bg-[#030914] border border-[#0A2150] flex items-center gap-3 text-xs text-slate-200"
                    >
                      <div className="w-6 h-6 rounded bg-[#075BFF]/20 flex items-center justify-center text-[#19E6FF] font-mono font-bold shrink-0">
                        {eIdx + 1}
                      </div>
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: Rekam Jejak Acara di Kota Ini */}
          <section id="studi-kasus" className="scroll-mt-36">
            <div className="bg-[#06142E] border border-[#008CFF]/30 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0A2150] pb-4">
                <div>
                  <span className="text-xs font-bold text-[#19E6FF] uppercase tracking-wider">
                    Studi Kasus & Rekam Jejak Sukses di {city.cityName}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {city.caseStudy.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1.5 rounded-lg shrink-0">
                  <Award className="w-4 h-4" />
                  <span>Zero Accident K3L</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-[#030914] border border-[#0A2150]">
                  <div className="text-slate-400 mb-0.5">Lokasi Venue:</div>
                  <div className="font-semibold text-white">{city.caseStudy.venue}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#030914] border border-[#0A2150]">
                  <div className="text-slate-400 mb-0.5">Jumlah Kehadiran:</div>
                  <div className="font-semibold text-[#19E6FF]">{city.caseStudy.attendance}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#030914] border border-[#0A2150]">
                  <div className="text-slate-400 mb-0.5">Spesifikasi Teknis:</div>
                  <div className="font-semibold text-slate-200">{city.caseStudy.specs}</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A9B8D0] leading-relaxed">
                {city.caseStudy.summary}
              </p>

              <div className="pt-4 border-t border-[#0A2150] flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/portofolio"
                  className="text-xs text-[#19E6FF] hover:text-white font-semibold flex items-center gap-1.5"
                >
                  <span>Lihat Seluruh Portofolio Nasional EO Indonesia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => onOpenRfp(`Acara Seperti ${city.caseStudy.title}`)}
                  className="px-4 py-2 bg-[#075BFF] hover:bg-[#008CFF] text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Rancang Acara Serupa Bersama Kami
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 7: Tanya Jawab (FAQ) EO Kota Ini */}
          <section id="faq-eo" className="scroll-mt-36">
            <div className="max-w-3xl mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2150] border border-[#008CFF]/40 text-[#19E6FF] text-xs font-semibold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Pertanyaan yang Sering Diajukan</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                FAQ Jasa Event Organizer di {city.cityName}
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B8D0]">
                Jawaban faktual dan transparan untuk pertanyaan paling sering dari calon klien dan penyelenggara acara di {city.fullName}.
              </p>
            </div>

            <div className="space-y-3">
              {city.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="bg-[#06142E] border border-[#0A2150] rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-white hover:text-[#19E6FF] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#19E6FF] shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-[#A9B8D0] leading-relaxed border-t border-[#0A2150]/60">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 8. Bottom Regional CTA Banner */}
          <section className="bg-gradient-to-r from-[#075BFF] to-[#0A2150] rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-[0_12px_40px_rgba(7,91,255,0.35)] border border-[#19E6FF]/50 relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B6F4FF] bg-black/20 px-3 py-1 rounded-full">
                Konsultasi Bebas Biaya · Respon Cepat 15 Menit
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold">
                Siap Mewujudkan Acara Spektakuler di {city.cityName}?
              </h3>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                Hubungi show director dan tim teknis EO Indonesia untuk wilayah {city.fullName}. Kami siap membantu penyusunan konsep, survei gedung, perizinan, dan penawaran RAB transparan.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl('general', { locationCity: city.cityName }, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#06142E] font-bold text-xs rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#075BFF]" />
                <span>Chat WhatsApp Tim {city.cityName}</span>
              </a>

              <button
                onClick={() => onOpenRfp(`Acara di ${city.cityName}`)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#030914] hover:bg-black text-[#19E6FF] hover:text-white font-bold text-xs rounded-xl border border-[#19E6FF]/50 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Request Proposal (RFP) Resmi</span>
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
