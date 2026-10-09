import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { HeroSection } from '../components/HeroSection';
import { SERVICES, CASE_STUDIES } from '../data/content';
import { SafetyAndWorkflowSection } from '../components/SafetyAndWorkflowSection';
import { VendorNetworkSection } from '../components/VendorNetworkSection';
import { InsightsSection } from '../components/InsightsSection';
import { EventBudgetEstimator } from '../components/EventBudgetEstimator';
import { FaqSection } from '../components/FaqSection';
import { getWhatsAppUrl } from '../utils/contact';
import { ArrowRight, ArrowUpRight, Check, Sparkles, ShieldCheck, Target, Award, MessageSquare } from 'lucide-react';

interface HomePageProps {
  lang: Language;
  onOpenRfp: () => void;
  onOpenCompanyProfile: () => void;
  onSelectServiceForRfp: (serviceTitle: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onOpenRfp,
  onOpenCompanyProfile,
  onSelectServiceForRfp,
}) => {
  const featuredServices = SERVICES.slice(0, 3);
  const featuredCases = CASE_STUDIES.slice(0, 3);

  return (
    <div className="bg-[#06142E]">
      <SeoHead
        title={lang === 'id' ? 'Platform Manajemen Acara & Event Production Nasional' : 'National Event Production & Management Platform'}
        description="Platform terpadu manajemen acara dan agensi produksi panggung berskala nasional eoindonesia.id. Layanan MICE, corporate gathering, konser festival di 38 provinsi berstandar K3L."
        keywords="Event Organizer Indonesia, EO Indonesia, EO Jakarta, EO Jogja, EO Bali, MICE Organizer, Rigging Panggung K3L, Vendor Sound System"
        canonicalPath="/"
      />

      {/* 1. Full High-Impact Hero with Live Stage Visual */}
      <HeroSection
        lang={lang}
        onExploreServices={() => {
          const elem = document.getElementById('featured-services');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenRfp={onOpenRfp}
        onOpenCompanyProfile={onOpenCompanyProfile}
      />

      {/* 2. Core Capabilities & Brand Introduction Teaser (Electric Blue Corporate) */}
      <section className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Profil & Kapabilitas' : 'Profile & Capabilities'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
                {lang === 'id'
                  ? 'Wadah Terpadu Manajemen Acara Profesional se-Indonesia.'
                  : 'Indonesia’s Unified Event Production & Management Ecosystem.'}
              </h2>
              <p className="mt-4 text-base text-[#A9B8D0] leading-relaxed">
                {lang === 'id'
                  ? 'EO Indonesia (eoindonesia.id) menggabungkan standar keselamatan K3L ketat, dedikasi waktu presisi, dan jangkauan logistik 38 provinsi. Kami merancang dan memproduksi konferensi kenegaraan, perhelatan BUMN, peluncuran produk global, hingga konser puluhan ribu penonton.'
                  : 'EO Indonesia integrates rigorous OHS safety protocols, minute-by-minute execution discipline, and nationwide logistics spanning 38 provinces. We engineer and deliver state ceremonies, corporate galas, and mega stadium festivals.'}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-white">
                <div className="flex items-center gap-1.5 bg-[#0A2150]/70 border border-[#008CFF]/30 px-3.5 py-2 rounded-xl shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#19E6FF]" />
                  <span>{lang === 'id' ? 'Legalitas & NIB Resmi' : 'Registered Legal NIB'}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#0A2150]/70 border border-[#008CFF]/30 px-3.5 py-2 rounded-xl shadow-xs">
                  <Award className="w-4 h-4 text-[#19E6FF]" />
                  <span>{lang === 'id' ? 'Sertifikasi MICE BNSP' : 'BNSP MICE Certified'}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#0A2150]/70 border border-[#008CFF]/30 px-3.5 py-2 rounded-xl shadow-xs">
                  <Target className="w-4 h-4 text-[#19E6FF]" />
                  <span>{lang === 'id' ? 'Standar Uji Beban Rigging' : 'Certified Rigging Loads'}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/tentang-kami"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#19E6FF] hover:text-white transition-colors group"
                >
                  <span>{lang === 'id' ? 'Pelajari Filosofi, Visi & Tim Ahli Kami' : 'Explore Philosophy, Vision & Our Team'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={getWhatsAppUrl('hero', {}, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B6F4FF] hover:text-white bg-[#0A2150] px-3.5 py-2 rounded-xl border border-[#008CFF]/30 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#19E6FF]" />
                  <span>{lang === 'id' ? 'Konsultasi Tim Ahli' : 'Consult Specialists'}</span>
                </a>
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0A2150] to-[#06142E] text-white border border-[#008CFF]/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-56 h-56 bg-[#075BFF]/25 rounded-full blur-3xl pointer-events-none" />
                <div className="text-xs font-mono uppercase text-[#19E6FF] font-bold mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#19E6FF] animate-pulse" />
                  <span>THE EO INDONESIA STANDARD</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {lang === 'id'
                    ? 'Eksekusi Tanpa Deviasi. Keselamatan Tanpa Kompromi.'
                    : 'Zero Deviation Timing. Uncompromising Safety.'}
                </h3>
                <p className="mt-3 text-xs text-[#A9B8D0] leading-relaxed">
                  {lang === 'id'
                    ? 'Setiap panggung diuji beban dengan rasio keselamatan 5:1, dilengkapi izin keramaian Mabes Polri resmi, serta jalur evakuasi medis terisolasi.'
                    : 'Every stage suspension verified with a 5:1 engineering safety factor, authorized police crowd permits, and sterile medical evacuation corridors.'}
                </p>
                <div className="mt-6 pt-5 border-t border-[#0A2150] flex items-center justify-between">
                  <span className="text-xs text-[#19E6FF] font-medium">38 Provinsi Terintegrasi</span>
                  <button
                    onClick={onOpenCompanyProfile}
                    className="text-xs font-bold text-white hover:text-[#19E6FF] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{lang === 'id' ? 'Unduh Profil' : 'Download Deck'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#19E6FF]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Bento Preview */}
      <section id="featured-services" className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2">
                {lang === 'id' ? 'Layanan Terpadu' : 'Core Services'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {lang === 'id' ? 'Solusi Penyelenggaraan Acara' : 'Event Production Solutions'}
              </h2>
            </div>
            <Link
              to="/layanan"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#19E6FF] hover:text-white transition-colors"
            >
              <span>{lang === 'id' ? 'Lihat Semua 6 Layanan Lengkap' : 'View All 6 Services'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((srv) => (
              <div
                key={srv.id}
                className="group bg-[#0A2150]/60 backdrop-blur-md rounded-2xl border border-[#008CFF]/20 p-7 flex flex-col justify-between hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] hover:-translate-y-1 transition-all duration-200 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#075BFF] via-[#008CFF] to-[#19E6FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="flex items-center justify-between text-xs text-[#A9B8D0] font-mono mb-4">
                    <span className="text-[#19E6FF] font-bold font-sans text-sm">{srv.number}.</span>
                    <span className="text-[#A9B8D0] font-sans text-xs">{srv.subtitle[lang]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#19E6FF] transition-colors">
                    {srv.title[lang]}
                  </h3>
                  <p className="mt-3 text-sm text-[#A9B8D0] leading-relaxed line-clamp-3">
                    {srv.description[lang]}
                  </p>
                  <div className="mt-6 pt-5 border-t border-[#0A2150] space-y-2">
                    {srv.deliverables[lang].slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#A9B8D0]">
                        <Check className="w-3.5 h-3.5 text-[#19E6FF] shrink-0 mt-0.5" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#0A2150] flex items-center justify-between">
                  <Link
                    to="/layanan"
                    className="text-xs font-semibold text-[#B6F4FF] hover:text-white flex items-center gap-1"
                  >
                    <span>{lang === 'id' ? 'Detail Spesifikasi' : 'View Specs'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#19E6FF]" />
                  </Link>
                  <button
                    onClick={() => onSelectServiceForRfp(srv.title[lang])}
                    className="px-3 py-1.5 text-xs font-bold text-[#19E6FF] bg-[#075BFF]/20 hover:bg-[#075BFF] hover:text-white rounded-lg transition-colors cursor-pointer border border-[#008CFF]/40"
                  >
                    + RFP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Portfolio Showcase Teaser */}
      <section className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2">
                {lang === 'id' ? 'Rekam Jejak Eksekusi' : 'Production Track Record'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {lang === 'id' ? 'Studi Kasus & Pembuktian Lapangan' : 'Featured Case Studies'}
              </h2>
            </div>
            <Link
              to="/portofolio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#19E6FF] hover:text-white transition-colors"
            >
              <span>{lang === 'id' ? 'Eksplorasi Seluruh Portofolio' : 'Explore All Projects'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCases.map((cs) => (
              <div
                key={cs.id}
                className="group bg-[#0A2150]/60 backdrop-blur-md rounded-2xl border border-[#008CFF]/20 overflow-hidden flex flex-col justify-between hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="p-6 bg-gradient-to-br from-[#0A2150] to-[#06142E] border-b border-[#0A2150]">
                  <div className="flex items-center justify-between text-xs text-[#A9B8D0] font-medium mb-3">
                    <span className="font-semibold text-[#19E6FF]">{cs.categoryLabel[lang]}</span>
                    <span>{cs.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#19E6FF] transition-colors leading-snug">
                    {cs.title[lang]}
                  </h3>
                  <div className="mt-2 text-xs text-[#A9B8D0] truncate">
                    {cs.location} · {cs.attendance}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-[#A9B8D0] line-clamp-3 leading-relaxed">
                    {cs.technicalChallenge[lang]}
                  </p>
                  <div className="pt-3 border-t border-[#0A2150] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#19E6FF]">
                      {cs.metrics.satisfaction} Kepuasan
                    </span>
                    <Link
                      to="/portofolio"
                      className="text-xs font-bold text-white hover:text-[#19E6FF] flex items-center gap-1"
                    >
                      <span>{lang === 'id' ? 'Detail Proyek' : 'View Project'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#19E6FF]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Safety, Workflow & Action Banner */}
      <SafetyAndWorkflowSection
        lang={lang}
        onOpenRfp={onOpenRfp}
        showTestimonials={true}
        showBanner={true}
      />

      {/* 6. Interactive Event Budget Simulator (Dwell Time Booster) */}
      <EventBudgetEstimator
        lang={lang}
        onOpenRfp={onOpenRfp}
      />

      {/* 7. Regional Staging & Vendor Logistics Preview */}
      <VendorNetworkSection lang={lang} />

      {/* 8. Industry Insights & Knowledge Preview */}
      <InsightsSection lang={lang} />

      {/* 9. Comprehensive FAQ Section with FAQPage Schema */}
      <FaqSection lang={lang} />
    </div>
  );
};
