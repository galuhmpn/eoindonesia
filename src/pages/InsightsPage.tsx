import React from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { InnerPageHero } from '../components/InnerPageHero';
import { PageQuickToc } from '../components/PageQuickToc';
import { InsightsSection } from '../components/InsightsSection';
import { FaqSection } from '../components/FaqSection';
import { getWhatsAppUrl } from '../utils/contact';
import { BookOpen, MessageSquare, ArrowRight, ShieldCheck, FileCheck } from 'lucide-react';

interface InsightsPageProps {
  lang: Language;
  onOpenRfp: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  lang,
  onOpenRfp
}) => {
  const tocItems = [
    { id: 'wawasan', label: lang === 'id' ? '3 Panduan Utama & Studi Teknis' : '3 Featured Technical Guides' },
    { id: 'pendampingan-izin', label: lang === 'id' ? 'Konsultasi Perizinan Mabes/Polda' : 'Police Permitting Advisory' },
    { id: 'faq', label: lang === 'id' ? 'FAQ Regulasi & Standar K3L' : 'Regulatory & OHS FAQ' }
  ];

  return (
    <div className="bg-[#06142E]">
      <SeoHead
        title={lang === 'id' ? 'Wawasan, Regulasi Izin Polisi & Panduan K3L Acara' : 'Event Regulatory Guides, Police Permits & OHS Insights'}
        description="Pusat edukasi industri acara eoindonesia.id: Panduan izin keramaian Mabes Polri/Polda, SOP crowd dynamics & barrier Mojo, kalibrasi akustik tata suara, dan tips pengadaan tender BUMN."
        keywords="Panduan Izin Keramaian Polisi, Syarat Izin Acara Konser, SOP K3L Panggung, Regulasi Event Organizer, Artikel Event Management"
        canonicalPath="/artikel"
        breadcrumbs={[
          { name: lang === 'id' ? 'Wawasan & Artikel' : 'Insights', path: '/artikel' }
        ]}
      />

      {/* 1. Dedicated Compact Inner Page Hero */}
      <InnerPageHero
        badge={lang === 'id' ? 'Edukasi & Regulasi Acara' : 'Event Education & Regulations'}
        breadcrumbLabel={lang === 'id' ? 'Wawasan & Artikel' : 'Insights'}
        lang={lang}
        title={lang === 'id' ? 'Panduan Regulasi, K3L &' : 'Regulatory Guides, OHS &'}
        titleHighlight={lang === 'id' ? 'Teknologi Panggung.' : 'Staging Technology.'}
        description={
          lang === 'id'
            ? 'Artikel berbasis pengalaman lapangan untuk membantu panitia acara, divisi procurement, dan komite korporat merancang acara yang aman, taat hukum, dan sukses spektakuler.'
            : 'Field-tested technical articles helping event committees, procurement managers, and planners design safe, fully compliant, and high-impact productions.'
        }
      />

      {/* SEO & Fast Navigation: Page Table of Contents */}
      <PageQuickToc
        items={tocItems}
        lang={lang}
        title={lang === 'id' ? 'Daftar Isi Halaman Wawasan:' : 'Insights Topics Navigation:'}
      />

      {/* 2. Full Insights Section Grid & Reader Modal with Article Table of Contents */}
      <InsightsSection lang={lang} />

      {/* 3. Regulatory Consultation Assistance Banner */}
      <section id="pendampingan-izin" className="py-16 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0A2150]/70 backdrop-blur-md border border-[#008CFF]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06142E] border border-[#008CFF]/30 text-[#19E6FF] text-xs font-bold uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Pendampingan Izin Keramaian' : 'Police Permit Advisory'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === 'id' ? 'Butuh Pendampingan Regulasi Acara & Izin Mabes/Polda?' : 'Need Advisory on Police Crowd Permitting & Safety?'}
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B8D0] mt-1 max-w-xl">
                {lang === 'id'
                  ? 'Tim perizinan dan K3L kami siap mendampingi pengurusan berkas rekomendasi, simulasi evakuasi medis, serta audiensi kepolisian.'
                  : 'Our compliance and OHS team advises on safety documentation, medical evacuation routes, and formal police coordinating assemblies.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={getWhatsAppUrl('insight_consultation', { articleTitle: 'Konsultasi Perizinan & Regulasi Acara' }, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#B6F4FF] hover:text-white bg-[#06142E] hover:bg-[#081A3A] border border-[#008CFF]/30 rounded-xl transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Tanya Tim Regulasi' : 'Chat Compliance Lead'}</span>
              </a>

              <button
                onClick={onOpenRfp}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl shadow-[0_4px_16px_rgba(7,91,255,0.35)] transition-all cursor-pointer border border-[#19E6FF]/20"
              >
                <span>{lang === 'id' ? 'Konsultasi Acara Penuh' : 'Full Project Consultation'}</span>
                <ArrowRight className="w-4 h-4 text-[#B6F4FF]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comprehensive FAQ Section */}
      <FaqSection lang={lang} />
    </div>
  );
};
