import React, { useState } from 'react';
import { Language, CaseStudy, EventCategory, EventScale } from '../types';
import { CASE_STUDIES } from '../data/content';
import { MapPin, Users, Calendar, ArrowUpRight, CheckCircle, Clock, Volume2, Monitor, Anchor, X } from 'lucide-react';

interface PortfolioSectionProps {
  lang: Language;
  onOpenRfpForProject?: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  lang,
  onOpenRfpForProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('all');
  const [selectedScale, setSelectedScale] = useState<EventScale>('all');
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  const categories: { id: EventCategory; label: { id: string; en: string } }[] = [
    { id: 'all', label: { id: 'Semua Acara', en: 'All Events' } },
    { id: 'mice', label: { id: 'Konferensi & MICE', en: 'Conferences & MICE' } },
    { id: 'corporate', label: { id: 'Corporate & Gala', en: 'Corporate & Gala' } },
    { id: 'festival', label: { id: 'Konser & Festival', en: 'Concerts & Festivals' } },
    { id: 'activation', label: { id: 'Brand Activation', en: 'Brand Activation' } },
    { id: 'protocol', label: { id: 'Protokoler Kenegaraan', en: 'State & Protocol' } },
  ];

  const scales: { id: EventScale; label: { id: string; en: string } }[] = [
    { id: 'all', label: { id: 'Semua Skala', en: 'All Sizes' } },
    { id: 'small', label: { id: '< 1.000 Pax', en: '< 1,000 Pax' } },
    { id: 'medium', label: { id: '1.000 – 5.000 Pax', en: '1,000 – 5,000 Pax' } },
    { id: 'large', label: { id: '10.000+ Pax', en: '10,000+ Pax' } },
  ];

  const filteredCases = CASE_STUDIES.filter((cs) => {
    const matchCategory = selectedCategory === 'all' || cs.category === selectedCategory;
    const matchScale = selectedScale === 'all' || cs.scale === selectedScale;
    return matchCategory && matchScale;
  });

  return (
    <section id="portofolio" className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden">
      {/* Ambient Lighting in Dark Showcase */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#19E6FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2">
            {lang === 'id' ? 'Portofolio & Rekam Jejak Produksi' : 'Production Track Record'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {lang === 'id'
              ? 'Studi Kasus: Bukti Kompetensi Teknis Tanpa Celah.'
              : 'Case Studies: Verified Technical Competence in the Field.'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A9B8D0]">
            {lang === 'id'
              ? 'Bukan sekadar galeri dokumentasi foto, melainkan transparansi tantangan teknis akustik, flow puluhan ribu massa, dan solusi rekayasa panggung yang kami eksekusi.'
              : 'Beyond standard gallery photos: transparent technical challenges in acoustics, massive crowd dynamics, and structural engineering solutions we delivered.'}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#0A2150]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0A2150]/60 border border-[#008CFF]/20 rounded-xl max-w-full overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-[#075BFF] text-white shadow-[0_2px_10px_rgba(7,91,255,0.4)] font-bold'
                    : 'text-[#A9B8D0] hover:text-white'
                }`}
              >
                {c.label[lang]}
              </button>
            ))}
          </div>

          {/* Scale Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#A9B8D0] whitespace-nowrap">
              {lang === 'id' ? 'Kapasitas:' : 'Scale:'}
            </span>
            <div className="flex items-center gap-1 p-1 bg-[#0A2150]/60 border border-[#008CFF]/20 rounded-xl">
              {scales.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedScale(s.id)}
                  className={`px-2.5 py-1 text-xs rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    selectedScale === s.id
                      ? 'bg-[#19E6FF] text-[#06142E] font-bold shadow-xs'
                      : 'text-[#A9B8D0] hover:text-white'
                  }`}
                >
                  {s.label[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="group bg-[#0A2150]/60 backdrop-blur-md rounded-2xl border border-[#008CFF]/20 overflow-hidden flex flex-col justify-between hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] hover:-translate-y-1 transition-all duration-200"
            >
              {/* Card Graphical Header / Visual Bar */}
              <div className="p-6 bg-gradient-to-br from-[#0A2150] to-[#06142E] border-b border-[#0A2150] relative">
                {/* Clean unboxed metadata header */}
                <div className="flex items-center justify-between text-xs text-[#A9B8D0] font-medium mb-3">
                  <span className="font-semibold text-[#19E6FF]">{cs.categoryLabel[lang]}</span>
                  <div className="flex items-center gap-1.5 text-[#A9B8D0]">
                    <Calendar className="w-3.5 h-3.5 text-[#075BFF]" />
                    <span>{cs.year}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#19E6FF] transition-colors leading-snug">
                  {cs.title[lang]}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-xs text-[#A9B8D0]">
                  <MapPin className="w-3.5 h-3.5 text-[#075BFF] shrink-0" />
                  <span className="truncate">{cs.location}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-[#A9B8D0]">
                  <Users className="w-3.5 h-3.5 text-[#075BFF] shrink-0" />
                  <span>{cs.attendance}</span>
                </div>
              </div>

              {/* Card Body with Technical Highlights */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-1">
                    {lang === 'id' ? 'Klien & Institusi:' : 'Client Entity:'}
                  </div>
                  <div className="text-xs font-bold text-white mb-3">
                    {cs.client}
                  </div>

                  <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-1">
                    {lang === 'id' ? 'Tantangan Teknis Kunci:' : 'Technical Challenge:'}
                  </div>
                  <p className="text-xs text-[#A9B8D0] line-clamp-3 leading-relaxed">
                    {cs.technicalChallenge[lang]}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="pt-3 border-t border-[#0A2150] grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 bg-[#06142E] rounded-lg border border-[#0A2150]">
                    <div className="text-[#A9B8D0] text-[10px]">
                      {lang === 'id' ? 'Kepuasan' : 'Satisfaction'}
                    </div>
                    <div className="font-bold text-[#19E6FF] tabular-nums">
                      {cs.metrics.satisfaction}
                    </div>
                  </div>
                  <div className="p-2 bg-[#06142E] rounded-lg border border-[#0A2150]">
                    <div className="text-[#A9B8D0] text-[10px]">
                      {lang === 'id' ? 'Keselamatan' : 'Safety'}
                    </div>
                    <div className="font-bold text-emerald-400">
                      {cs.metrics.safetyRecord}
                    </div>
                  </div>
                </div>

                {/* Open Full Case Details */}
                <div className="pt-3 border-t border-[#0A2150] flex items-center justify-between">
                  <button
                    onClick={() => setActiveCase(cs)}
                    className="text-xs font-bold text-white hover:text-[#19E6FF] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{lang === 'id' ? 'Baca Studi Kasus Lengkap' : 'Read Case Study'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#075BFF]" />
                  </button>

                  <span className="text-[11px] font-mono text-[#A9B8D0]">
                    {cs.province}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Case Study Inspector */}
        {activeCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#040D1F]/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#0A2150] text-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-[#008CFF]/40 shadow-2xl p-5 sm:p-8">
              <div className="flex items-start justify-between pb-4 border-b border-[#06142E] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#19E6FF] uppercase">
                    <span>{activeCase.categoryLabel[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeCase.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeCase.year}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-white mt-1 leading-snug">
                    {activeCase.title[lang]}
                  </h3>
                  <div className="text-xs text-[#A9B8D0] mt-1 font-medium">
                    {lang === 'id' ? 'Klien:' : 'Client:'} <span className="text-white font-bold">{activeCase.client}</span> ({activeCase.clientType})
                  </div>
                </div>
                <button
                  onClick={() => setActiveCase(null)}
                  className="p-2 text-[#A9B8D0] hover:text-white rounded-lg hover:bg-[#06142E] cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
                  aria-label="Tutup Studi Kasus"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Case Narrative */}
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#19E6FF]">
                    {lang === 'id' ? 'Objektif & Target Acara' : 'Event Objectives'}
                  </h4>
                  <p className="text-sm text-[#A9B8D0] mt-1 leading-relaxed">
                    {activeCase.objective[lang]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#06142E] border border-[#008CFF]/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B6F4FF]">
                    {lang === 'id' ? 'Tantangan Teknis di Lapangan' : 'Engineering & Field Challenge'}
                  </h4>
                  <p className="text-sm text-[#A9B8D0] mt-1 leading-relaxed">
                    {activeCase.technicalChallenge[lang]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#075BFF]/15 border border-[#075BFF]/40">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#19E6FF]">
                    {lang === 'id' ? 'Solusi Rekayasa & Eksekusi EO Indonesia' : 'Engineered Solution & Execution'}
                  </h4>
                  <p className="text-sm text-white mt-1 leading-relaxed">
                    {activeCase.technicalSolution[lang]}
                  </p>
                </div>

                {/* Technical Rigging & Production Specs Table */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {lang === 'id' ? 'Spesifikasi Rigging & Perangkat Produksi' : 'Rigging & Technical Gear Specs'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#06142E] rounded-xl border border-[#0A2150] flex items-start gap-2.5">
                      <Volume2 className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#A9B8D0]">Audio System</div>
                        <div className="font-bold text-white mt-0.5">{activeCase.specs.audio}</div>
                      </div>
                    </div>
                    <div className="p-3 bg-[#06142E] rounded-xl border border-[#0A2150] flex items-start gap-2.5">
                      <Monitor className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#A9B8D0]">Visual & LED Wall</div>
                        <div className="font-bold text-white mt-0.5">{activeCase.specs.visual}</div>
                      </div>
                    </div>
                    <div className="p-3 bg-[#06142E] rounded-xl border border-[#0A2150] flex items-start gap-2.5">
                      <Anchor className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#A9B8D0]">Rigging Structural Load</div>
                        <div className="font-bold text-white mt-0.5">{activeCase.specs.riggingLoad}</div>
                      </div>
                    </div>
                    <div className="p-3 bg-[#06142E] rounded-xl border border-[#0A2150] flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#A9B8D0]">Load-in & Turnaround</div>
                        <div className="font-bold text-white mt-0.5">{activeCase.specs.turnaroundTime}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Milestones Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {lang === 'id' ? 'Pencapaian & Standardisasi Terverifikasi' : 'Key Milestones & Certified Proof'}
                  </h4>
                  <ul className="space-y-2 text-sm text-[#A9B8D0]">
                    {activeCase.highlights[lang].map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Modal Action */}
                <div className="pt-6 border-t border-[#06142E] flex items-center justify-between">
                  <div className="text-xs text-[#A9B8D0] font-mono">
                    ID Dokumen: EOID-CS-{activeCase.id.toUpperCase()}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActiveCase(null)}
                      className="px-4 py-2 text-xs font-medium text-[#A9B8D0] hover:text-white cursor-pointer"
                    >
                      {lang === 'id' ? 'Tutup' : 'Close'}
                    </button>
                    {onOpenRfpForProject && (
                      <button
                        onClick={() => {
                          const title = activeCase.title[lang];
                          setActiveCase(null);
                          onOpenRfpForProject(title);
                        }}
                        className="px-4.5 py-2 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-lg cursor-pointer transition-colors shadow-[0_2px_12px_rgba(7,91,255,0.4)]"
                      >
                        {lang === 'id' ? 'Ajukan Acara Serupa' : 'Request Similar Event'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
