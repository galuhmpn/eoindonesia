import React, { useState, useEffect } from 'react';
import { Language, InsightArticle } from '../types';
import { INSIGHTS } from '../data/content';
import { getWhatsAppUrl } from '../utils/contact';
import {
  BookOpen,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  X,
  ListTree,
  ChevronRight,
  CheckCircle2,
  Clock,
  Calendar,
  Share2,
} from 'lucide-react';

interface InsightsSectionProps {
  lang: Language;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ lang }) => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeTocId, setActiveTocId] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Schema.org Article Structured Data injection when an article is inspected
  useEffect(() => {
    if (!selectedArticle) return;

    const scriptId = `jsonld-article-${selectedArticle.id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: selectedArticle.title[lang],
        description: selectedArticle.summary[lang],
        articleSection: selectedArticle.category[lang],
        author: {
          '@type': 'Organization',
          name: 'EO Indonesia',
          url: 'https://eoindonesia.id',
        },
        publisher: {
          '@type': 'Organization',
          name: 'EO Indonesia',
          logo: {
            '@type': 'ImageObject',
            url: 'https://eoindonesia.id/logo.png',
          },
        },
        datePublished: '2026-01-15T08:00:00+07:00',
        dateModified: '2026-03-20T10:00:00+07:00',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://eoindonesia.id/artikel#${selectedArticle.id}`,
        },
      });
      document.head.appendChild(script);
    }

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [selectedArticle, lang]);

  const scrollToSection = (sectionId: string) => {
    setActiveTocId(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="wawasan" className="py-12 sm:py-20 lg:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#19E6FF]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#19E6FF]" />
            <span>{lang === 'id' ? 'Pusat Wawasan & Panduan Teknis' : 'Technical Insights & Knowledge'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            {lang === 'id'
              ? 'Edukasi Industri, Kepatuhan Regulasi & Tren Panggung.'
              : 'Industry Education, Regulatory Compliance & Staging Trends.'}
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#A9B8D0]">
            {lang === 'id'
              ? 'Artikel berbasis pengalaman lapangan untuk membantu panitia acara, divisi procurement, dan komite korporat merancang acara yang aman serta sukses.'
              : 'Field-tested insights assisting corporate committees and procurement divisions in structuring compliant, high-impact events.'}
          </p>
        </div>

        {/* Articles Grid - Mobile Optimized */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {INSIGHTS.map((article) => (
            <article
              key={article.id}
              className="group bg-[#0A2150]/60 backdrop-blur-md rounded-2xl border border-[#008CFF]/20 p-5 sm:p-7 flex flex-col justify-between hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] hover:-translate-y-1 transition-all duration-200 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#075BFF] to-[#19E6FF] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Clean unboxed metadata */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#A9B8D0] mb-3">
                  <span className="font-semibold text-[#19E6FF]">{article.category[lang]}</span>
                  <span aria-hidden="true" className="text-[#334E7A]">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#334E7A]" />
                    {article.date}
                  </span>
                  <span aria-hidden="true" className="text-[#334E7A]">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#334E7A]" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#19E6FF] transition-colors leading-snug">
                  {article.title[lang]}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#A9B8D0] leading-relaxed line-clamp-3">
                  {article.summary[lang]}
                </p>

                {/* Table of Contents preview chips */}
                {article.sections && article.sections.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#0A2150]/80">
                    <div className="text-[11px] font-semibold text-[#19E6FF] flex items-center gap-1 mb-1.5">
                      <ListTree className="w-3 h-3" />
                      <span>{lang === 'id' ? 'Daftar Pembahasan:' : 'Topics Covered:'}</span>
                    </div>
                    <ul className="text-[11px] text-[#A9B8D0] space-y-0.5">
                      {article.sections.slice(0, 2).map((sec, i) => (
                        <li key={i} className="truncate flex items-center gap-1">
                          <span className="text-[#19E6FF]">›</span>
                          <span>{sec.heading[lang]}</span>
                        </li>
                      ))}
                      {article.sections.length > 2 && (
                        <li className="text-[10px] text-[#19E6FF]/80 italic">
                          +{article.sections.length - 2} {lang === 'id' ? 'bab lainnya...' : 'more chapters...'}
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-5 sm:mt-6 pt-4 border-t border-[#0A2150] flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-bold text-[#B6F4FF] hover:text-white flex items-center gap-1 cursor-pointer transition-colors min-h-[38px]"
                >
                  <span>{lang === 'id' ? 'Baca Panduan & Daftar Isi' : 'Read Guide & TOC'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#19E6FF]" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Full Article Reader Modal with Complete Table of Contents (SEO & UX Optimized) */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#040D1F]/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#0A2150] text-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-[#008CFF]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-5 sm:p-8 relative">
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-[#06142E] gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#A9B8D0] mb-2">
                    <span className="font-bold text-[#19E6FF] bg-[#06142E] px-2.5 py-0.5 rounded-full border border-[#008CFF]/30">
                      {selectedArticle.category[lang]}
                    </span>
                    <span aria-hidden="true" className="text-[#334E7A]">·</span>
                    <span>{selectedArticle.date}</span>
                    <span aria-hidden="true" className="text-[#334E7A]">·</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-snug">
                    {selectedArticle.title[lang]}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 text-[#A9B8D0] hover:text-white rounded-lg hover:bg-[#06142E] cursor-pointer transition-colors shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Tutup Artikel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Summary Lead */}
              <div className="mt-5 p-4 rounded-xl bg-[#06142E]/80 border border-[#008CFF]/30 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {selectedArticle.summary[lang]}
              </div>

              {/* CRITICAL SEO & UX: Table of Contents (Daftar Isi) */}
              {selectedArticle.sections && selectedArticle.sections.length > 0 && (
                <div className="my-6 p-4 sm:p-5 rounded-xl bg-[#06142E] border border-[#19E6FF]/30 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#19E6FF] uppercase tracking-wider">
                      <ListTree className="w-4 h-4 text-[#19E6FF]" />
                      <span>{lang === 'id' ? 'Daftar Isi Panduan (Table of Contents)' : 'Table of Contents'}</span>
                    </div>
                    <span className="text-[10px] text-[#A9B8D0] hidden sm:inline">
                      {lang === 'id' ? 'Klik untuk lompat langsung ke bab' : 'Click to jump to section'}
                    </span>
                  </div>

                  <nav aria-label="Daftar Isi Artikel" className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedArticle.sections.map((sec, idx) => (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => scrollToSection(`section-${sec.id}`)}
                        className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-start gap-2 ${
                          activeTocId === `section-${sec.id}`
                            ? 'bg-[#075BFF]/30 border-[#19E6FF] text-[#19E6FF] font-semibold'
                            : 'bg-[#0A2150]/60 border-[#008CFF]/20 text-[#A9B8D0] hover:text-white hover:border-[#19E6FF]/40 hover:bg-[#0A2150]'
                        }`}
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#19E6FF] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{sec.heading[lang]}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* Main Content Body */}
              <div className="mt-6 space-y-6 text-xs sm:text-sm text-[#A9B8D0] leading-relaxed">
                <p className="text-slate-200">
                  {selectedArticle.content[lang]}
                </p>

                {/* Structured Subsections with Target Anchor IDs */}
                {selectedArticle.sections && (
                  <div className="space-y-6 pt-2">
                    {selectedArticle.sections.map((sec) => (
                      <section
                        key={sec.id}
                        id={`section-${sec.id}`}
                        className="p-4 sm:p-5 rounded-xl bg-[#06142E]/50 border border-[#008CFF]/25 scroll-mt-6"
                      >
                        <h4 className="text-sm sm:text-base font-bold text-white mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#19E6FF] shadow-[0_0_8px_#19E6FF]" />
                          <span>{sec.heading[lang]}</span>
                        </h4>

                        <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                          {sec.body[lang]}
                        </p>

                        {sec.keyTakeaway && (
                          <div className="mt-3.5 flex items-start gap-2.5 p-3 rounded-lg bg-[#075BFF]/15 border border-[#19E6FF]/30 text-xs text-white">
                            <CheckCircle2 className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-[#19E6FF] mr-1">
                                {lang === 'id' ? 'Poin Kunci:' : 'Key Takeaway:'}
                              </span>
                              <span>{sec.keyTakeaway[lang]}</span>
                            </div>
                          </div>
                        )}
                      </section>
                    ))}
                  </div>
                )}

                {/* Editorial Notice & Consultation Guarantee */}
                <div className="p-4 rounded-xl bg-[#06142E] border border-[#008CFF]/30 text-xs text-slate-300 space-y-2">
                  <div className="font-bold text-[#19E6FF] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
                    <span>{lang === 'id' ? 'Layanan Pendampingan Teknis EO Indonesia' : 'EO Indonesia Advisory Service'}</span>
                  </div>
                  <p>
                    {lang === 'id'
                      ? 'Sebagai penyedia produksi terintegrasi, tim EO Indonesia menyediakan pendampingan perizinan keramaian Mabes Polri/Polda, audit K3L beban rigging, dan simulasi crowd control tanpa biaya terpisah untuk setiap paket manajemen acara Anda.'
                      : 'As a full-scope production agency, EO Indonesia delivers police permit advisory, OHS structural rigging audits, and crowd control simulations built directly into our management frameworks.'}
                  </p>
                </div>
              </div>

              {/* Modal Footer Actions - Mobile Stack Friendly */}
              <div className="mt-8 pt-5 border-t border-[#06142E] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsAppUrl('insight_consultation', { articleTitle: selectedArticle.title[lang] }, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] active:scale-98 rounded-xl transition-all shadow-[0_4px_16px_rgba(7,91,255,0.4)] border border-[#19E6FF]/30 min-h-[44px]"
                  >
                    <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                    <span>{lang === 'id' ? 'Konsultasi Topik Ini di WA' : 'Discuss on WhatsApp'}</span>
                  </a>

                  <button
                    onClick={handleShare}
                    className="p-2.5 text-[#A9B8D0] hover:text-white bg-[#06142E] hover:bg-[#0A2150] border border-[#008CFF]/30 rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                    title={lang === 'id' ? 'Salin Tautan Artikel' : 'Copy Article Link'}
                  >
                    <Share2 className="w-4 h-4 text-[#19E6FF]" />
                  </button>
                  {copiedLink && (
                    <span className="text-[11px] text-[#19E6FF] font-semibold animate-fade-in">
                      {lang === 'id' ? 'Tautan disalin!' : 'Link copied!'}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 text-xs font-semibold text-[#A9B8D0] hover:text-white bg-[#06142E] hover:bg-[#081A3A] border border-[#008CFF]/30 rounded-xl cursor-pointer transition-colors min-h-[44px] flex items-center justify-center"
                >
                  {lang === 'id' ? 'Tutup Artikel' : 'Close Article'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
