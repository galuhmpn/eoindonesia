import React from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { InnerPageHero } from '../components/InnerPageHero';
import { PageQuickToc } from '../components/PageQuickToc';
import { PortfolioSection } from '../components/PortfolioSection';
import { getWhatsAppUrl } from '../utils/contact';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface PortfolioPageProps {
  lang: Language;
  onOpenRfp: () => void;
  onOpenRfpForProject: (projectName: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  lang,
  onOpenRfp,
  onOpenRfpForProject,
}) => {
  const tocItems = [
    { id: 'portofolio', label: lang === 'id' ? 'Katalog Studi Kasus & Filter Kategori' : 'Case Studies & Category Filters' },
    { id: 'konsultasi-portofolio', label: lang === 'id' ? 'Konsultasi Proyek Berskala Serupa' : 'Consult on Similar Scale Projects' }
  ];

  return (
    <div className="bg-[#06142E]">
      <SeoHead
        title={lang === 'id' ? 'Portofolio & Rekam Jejak Produksi Acara Nasional' : 'Portfolio & Production Track Record'}
        description="Dokumentasi dan studi kasus 500+ acara sukses EO Indonesia: KTT Transisi Energi BNDCC Bali, Telkom Diamond Gathering 14.000 Pax ICE BSD, Nusantara Music Fest, dan peluncuran produk BUMN."
        keywords="Portofolio Event Organizer, Studi Kasus Acara MICE, Dokumentasi Konser Musik, Rekam Jejak Produksi Panggung, EO Indonesia Portofolio"
        canonicalPath="/portofolio"
        breadcrumbs={[
          { name: lang === 'id' ? 'Portofolio' : 'Portfolio', path: '/portofolio' }
        ]}
      />

      {/* 1. Dedicated Compact Inner Page Hero */}
      <InnerPageHero
        badge={lang === 'id' ? 'Rekam Jejak & Portofolio' : 'Track Record & Case Studies'}
        breadcrumbLabel={lang === 'id' ? 'Portofolio' : 'Portfolio'}
        lang={lang}
        title={lang === 'id' ? 'Studi Kasus & Eksekusi' : 'Case Studies & Production'}
        titleHighlight={lang === 'id' ? 'Panggung Tanpa Celah.' : 'Flawless Execution.'}
        description={
          lang === 'id'
            ? 'Dokumentasi transparan mengenai tantangan akustik ruang, pengamanan protokoler kenegaraan, dan rekayasa alur puluhan ribu penonton yang telah kami sukseskan di berbagai penjuru Nusantara.'
            : 'Transparent documentation of challenging hall acoustics, diplomatic protocol management, and massive crowd dynamics successfully delivered across the Indonesian archipelago.'
        }
      />

      {/* SEO & Fast Navigation: Page Table of Contents */}
      <PageQuickToc
        items={tocItems}
        lang={lang}
        title={lang === 'id' ? 'Daftar Isi Portofolio:' : 'Portfolio Quick Navigation:'}
      />

      {/* 2. Full Portfolio Grid with Filters & Details Modal */}
      <PortfolioSection
        lang={lang}
        onOpenRfpForProject={onOpenRfpForProject}
      />

      {/* 3. Direct Consultation Banner */}
      <section id="konsultasi-portofolio" className="py-16 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0A2150]/70 backdrop-blur-md border border-[#008CFF]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06142E] border border-[#008CFF]/30 text-[#19E6FF] text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Pengalaman Serupa untuk Acara Anda' : 'Tailored Event Solution'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === 'id' ? 'Ingin Menyelenggarakan Acara dengan Skala Serupa?' : 'Planning an Event on a Similar Scale?'}
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B8D0] mt-1 max-w-xl">
                {lang === 'id'
                  ? 'Diskusikan studi kelayakan lokasi, tantangan akustik, dan estimasi anggaran produksi bersama tim teknis kami.'
                  : 'Consult on venue feasibility, acoustic treatments, and budgetary parameters with our lead producers.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={getWhatsAppUrl('project_case', { projectName: 'Proyek Serupa dari Portofolio' }, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#B6F4FF] hover:text-white bg-[#06142E] hover:bg-[#081A3A] border border-[#008CFF]/30 rounded-xl transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Tanya via WhatsApp' : 'Inquire on WhatsApp'}</span>
              </a>

              <button
                onClick={onOpenRfp}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl shadow-[0_4px_16px_rgba(7,91,255,0.35)] transition-all cursor-pointer border border-[#19E6FF]/20"
              >
                <span>{lang === 'id' ? 'Ajukan RFP Proyek' : 'Submit Project RFP'}</span>
                <ArrowRight className="w-4 h-4 text-[#B6F4FF]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
