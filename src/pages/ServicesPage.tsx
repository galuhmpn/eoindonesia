import React from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { InnerPageHero } from '../components/InnerPageHero';
import { PageQuickToc } from '../components/PageQuickToc';
import { ServicesSection } from '../components/ServicesSection';
import { EventBudgetEstimator } from '../components/EventBudgetEstimator';
import { getWhatsAppUrl } from '../utils/contact';
import { Volume2, Monitor, ShieldCheck, Zap, MessageSquare, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  lang: Language;
  onOpenRfp: () => void;
  onSelectServiceForRfp: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  lang,
  onOpenRfp,
  onSelectServiceForRfp,
}) => {
  const tocItems = [
    { id: 'layanan', label: lang === 'id' ? '6 Pilar Layanan Acara' : '6 Core Services' },
    { id: 'standar-alat', label: lang === 'id' ? 'Standar Alat & Armada SLA' : 'Hardware Fleet & SLA' },
    { id: 'kalkulator-rab', label: lang === 'id' ? 'Kalkulator Simulasi Anggaran' : 'Budget Estimator' },
    { id: 'konsultasi-layanan', label: lang === 'id' ? 'Konsultasi Teknis & RFP' : 'Technical Consultation' }
  ];

  return (
    <div className="bg-[#06142E]">
      <SeoHead
        title={lang === 'id' ? 'Layanan Event Organizer & Produksi Panggung Lengkap' : 'Full Event Organizer & Staging Production Services'}
        description="Layanan terpadu eoindonesia.id: Konferensi MICE, Corporate Gathering, Brand Activation, Konser Musik Festival, Acara Kenegaraan, dan Virtual Hybrid XR berstandar APMI & K3L."
        keywords="Layanan Event Organizer, Jasa EO MICE, Sewa Rigging Panggung, Vendor Sound System Line Array, Sewa LED Screen P2, Event Production Indonesia"
        canonicalPath="/layanan"
        breadcrumbs={[
          { name: lang === 'id' ? 'Layanan' : 'Services', path: '/layanan' }
        ]}
      />

      {/* 1. Dedicated Compact Inner Page Hero */}
      <InnerPageHero
        badge={lang === 'id' ? 'Layanan & Kapasitas Produksi' : 'Services & Production Scope'}
        breadcrumbLabel={lang === 'id' ? 'Layanan' : 'Services'}
        lang={lang}
        title={lang === 'id' ? 'Standardisasi Eksekusi Acara' : 'Standardized Execution Across'}
        titleHighlight={lang === 'id' ? 'Lintas Format & Skala.' : 'Every Event Format.'}
        description={
          lang === 'id'
            ? 'Dari konferensi diplomatik VVIP di Bali hingga festival stadion 60.000 penonton di Jakarta, seluruh format ditopang tata suara presisi, visual LED mutakhir, dan manajemen risiko terintegrasi.'
            : 'From VVIP diplomatic assemblies to 60,000-patron open-air festivals, backed by calibrated acoustics, fine-pitch LED volumes, and certified structural rigging.'
        }
      />

      {/* SEO & Fast Navigation: Page Table of Contents */}
      <PageQuickToc
        items={tocItems}
        lang={lang}
        title={lang === 'id' ? 'Daftar Isi Layanan:' : 'Services Navigation:'}
      />

      {/* 2. Full Services Hub with Deliverables & Interactive Modal */}
      <ServicesSection
        lang={lang}
        onSelectServiceForRfp={onSelectServiceForRfp}
      />

      {/* 3. Technical Asset & Capability Standards Grid (Electric Blue Theme) */}
      <section id="standar-alat" className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden scroll-mt-14">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2">
              {lang === 'id' ? 'Standar Peralatan Produksi' : 'Hardware Fleet & SLA'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'id' ? 'Kapasitas Inventaris Panggung Nasional' : 'National Technical Fleet Standards'}
            </h2>
            <p className="mt-3 text-sm text-[#A9B8D0]">
              {lang === 'id'
                ? 'Armada perangkat keras terakreditasi internasional yang dikalibrasi berkala untuk memastikan zero failure pada pertunjukan krusial.'
                : 'Internationally accredited production hardware routinely calibrated to ensure zero failure in critical show environments.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 hover:border-[#19E6FF]/50 transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#081A3A] border border-[#008CFF]/40 text-[#19E6FF] flex items-center justify-center mb-4 shadow-[0_0_12px_rgba(25,230,255,0.2)]">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Tata Suara (Audio SPL)</h3>
              <p className="mt-2 text-xs text-[#A9B8D0] leading-relaxed">
                d&b audiotechnik, L-Acoustics K2 & Meyer Sound. Kalibrasi EASE 5D dengan pemerataan SPL ±2 dB di seluruh titik dengar penonton.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 hover:border-[#19E6FF]/50 transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#081A3A] border border-[#008CFF]/40 text-[#19E6FF] flex items-center justify-center mb-4 shadow-[0_0_12px_rgba(25,230,255,0.2)]">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Visual & LED Wall</h3>
              <p className="mt-2 text-xs text-[#A9B8D0] leading-relaxed">
                Panel indoor P1.8/P2.6 dan outdoor IP65 5.000 nits. Pengontrol Barco E2 4K60p & Novastar MX40 Pro dengan redundansi kabel optik ganda.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 hover:border-[#19E6FF]/50 transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#081A3A] border border-[#008CFF]/40 text-[#19E6FF] flex items-center justify-center mb-4 shadow-[0_0_12px_rgba(25,230,255,0.2)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Rigging & TUV Certified</h3>
              <p className="mt-2 text-xs text-[#A9B8D0] leading-relaxed">
                Sistem truss aluminium bersertifikat uji beban hingga 52 ton. Rigger berlisensi K3 Konstruksi dan pemantauan beban nirkabel load-cell.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 hover:border-[#19E6FF]/50 transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#081A3A] border border-[#008CFF]/40 text-[#19E6FF] flex items-center justify-center mb-4 shadow-[0_0_12px_rgba(25,230,255,0.2)]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Daya Mandiri Zero-Blink</h3>
              <p className="mt-2 text-xs text-[#A9B8D0] leading-relaxed">
                Armada genset silent 500 kVA dengan sistem sinkronisasi otomatis (ATS/AMF) dan cadangan UPS terdedikasi untuk sistem kontrol VVIP.
              </p>
            </div>
          </div>

          {/* Action Box */}
          <div id="konsultasi-layanan" className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0A2150] to-[#06142E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#008CFF]/30 shadow-2xl scroll-mt-14">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === 'id' ? 'Membutuhkan Spesifikasi Kustom untuk RFP?' : 'Need Custom Staging Specs for Your RFP?'}
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B8D0] mt-1 max-w-xl">
                {lang === 'id'
                  ? 'Diskusikan kebutuhan tata panggung, denah 3D, dan perhitungan anggaran bersama konsultan produksi kami via WhatsApp atau formulir proposal.'
                  : 'Consult on custom stage layouts, 3D renders, and line-item budgeting with our production specialists.'}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={getWhatsAppUrl('service_custom', { serviceTitle: 'Kustom Spesifikasi Teknis Panggung' }, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#B6F4FF] hover:text-white bg-[#06142E] hover:bg-[#081A3A] border border-[#008CFF]/30 rounded-xl transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Chat WhatsApp Teknis' : 'WhatsApp Technical Desk'}</span>
              </a>

              <button
                onClick={onOpenRfp}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl shadow-[0_4px_16px_rgba(7,91,255,0.35)] transition-all whitespace-nowrap cursor-pointer border border-[#19E6FF]/20"
              >
                <span>{lang === 'id' ? 'Mulai Request Proposal (RFP)' : 'Request Proposal (RFP)'}</span>
                <ArrowRight className="w-4 h-4 text-[#B6F4FF]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Event Budget Simulator */}
      <EventBudgetEstimator
        lang={lang}
        onOpenRfp={onOpenRfp}
      />
    </div>
  );
};
