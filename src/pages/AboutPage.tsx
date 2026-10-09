import React from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { InnerPageHero } from '../components/InnerPageHero';
import { PageQuickToc } from '../components/PageQuickToc';
import { AboutSection } from '../components/AboutSection';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/contact';
import { ShieldCheck, Download, MessageSquare, MapPin, PhoneCall, Mail } from 'lucide-react';

interface AboutPageProps {
  lang: Language;
  onOpenRfp: () => void;
  onOpenCompanyProfile: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  lang,
  onOpenRfp,
  onOpenCompanyProfile,
}) => {
  const tocItems = [
    { id: 'tentang-kami', label: lang === 'id' ? 'Filosofi & Identitas' : 'Philosophy & Identity' },
    { id: 'visi-misi', label: lang === 'id' ? 'Visi & Misi' : 'Vision & Mission' },
    { id: 'nilai-utama', label: lang === 'id' ? '4 Nilai Utama' : '4 Core Values' },
    { id: 'tim-ahli', label: lang === 'id' ? 'Struktur Tim Ahli' : 'Technical Directorate' },
    { id: 'legalitas', label: lang === 'id' ? 'Legalitas & NIB Resmi' : 'Legal Compliance' }
  ];

  return (
    <div className="bg-[#06142E]">
      <SeoHead
        title={lang === 'id' ? 'Tentang Kami - Filosofi, Visi & Legalitas Perusahaan' : 'About Us - Philosophy, Vision & Legal Credentials'}
        description="Profil resmi EO Indonesia (eoindonesia.id). Pelajari filosofi nama, visi misi, standar keselamatan K3L, struktur direktorat ahli, dan legalitas NIB resmi."
        keywords="Profil EO Indonesia, Legalitas EO Indonesia, Visi Misi Event Organizer, Tim Ahli Produksi Acara, NIB EO Indonesia"
        canonicalPath="/tentang-kami"
        breadcrumbs={[
          { name: lang === 'id' ? 'Tentang Kami' : 'About Us', path: '/tentang-kami' }
        ]}
      />

      {/* 1. Dedicated Compact Inner Page Hero */}
      <InnerPageHero
        badge={lang === 'id' ? 'Profil Perusahaan & Filosofi' : 'Company Profile & Philosophy'}
        breadcrumbLabel={lang === 'id' ? 'Tentang Kami' : 'About Us'}
        lang={lang}
        title={lang === 'id' ? 'Menghubungkan Gagasan,' : 'Connecting Ideas,'}
        titleHighlight={lang === 'id' ? 'Merayakan Pengalaman.' : 'Celebrating Experiences.'}
        description={
          lang === 'id'
            ? 'EO Indonesia (eoindonesia.id) adalah wadah terpadu yang mempertemukan penyelenggara acara profesional, talenta kreatif, dan penyedia kebutuhan event di seluruh penjuru negeri dengan standardisasi K3L dan presisi eksekusi.'
            : 'EO Indonesia (eoindonesia.id) is a unified ecosystem bringing together professional organizers, creative talent, and vetted production vendors nationwide under strict OHS safety standards.'
        }
      />

      {/* SEO & Fast Navigation: Page Table of Contents */}
      <PageQuickToc
        items={tocItems}
        lang={lang}
        title={lang === 'id' ? 'Daftar Isi Profil:' : 'About Navigation:'}
      />

      {/* 2. Full Rich About Content (Philosophy, Vision, Values, Leadership) */}
      <AboutSection lang={lang} />

      {/* 3. Official Legal & Governance Credentials Banner (Electric Blue Theme) */}
      <section id="legalitas" className="py-16 sm:py-20 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden scroll-mt-16">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0A2150]/70 backdrop-blur-md border border-[#008CFF]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06142E] border border-[#008CFF]/40 text-[#19E6FF] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Legalitas & Tata Kelola Perusahaan' : 'Governance & Legal Compliance'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                EO Indonesia
              </h3>
              <p className="text-sm text-[#A9B8D0] max-w-2xl leading-relaxed">
                {lang === 'id'
                  ? 'Entitas resmi terdaftar dengan NIB: 9120003491823, NPWP: 42.891.203.4-012.000, serta pengesahan SK Kemenkumham RI: AHU-0029144.AH.01.01.TAHUN 2021. Menjamin kepatuhan mutlak pada pengadaan tender instansi negara, kementerian, BUMN, dan korporasi multinasional.'
                  : 'Official registered entity with NIB: 9120003491823 and Ministry of Law authorization. Ensuring unbending procurement governance for government tenders and corporate compliance.'}
              </p>

              {/* Office Location & Contact Detail */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-[#A9B8D0]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#19E6FF] shrink-0" />
                  <span>{CONTACT_INFO.address.street}, {CONTACT_INFO.address.subdistrict}, D.I. Yogyakarta 55198</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-[#19E6FF] shrink-0" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto">
              <button
                onClick={onOpenCompanyProfile}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl shadow-[0_4px_20px_rgba(7,91,255,0.4)] transition-all cursor-pointer border border-[#19E6FF]/30"
              >
                <Download className="w-4 h-4 text-[#B6F4FF]" />
                <span>{lang === 'id' ? 'Unduh Dokumen Profil Resmi (.PDF)' : 'Download Official Company Deck'}</span>
              </button>

              <a
                href={getWhatsAppUrl('company_profile', {}, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#B6F4FF] hover:text-white bg-[#06142E] hover:bg-[#081A3A] border border-[#008CFF]/30 rounded-xl transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'WhatsApp Manajemen' : 'WhatsApp Management'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
