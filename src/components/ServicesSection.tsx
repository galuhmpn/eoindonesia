import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { SERVICES } from '../data/content';
import { ArrowUpRight, Check, CheckCircle2, Sparkles, X } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectServiceForRfp: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectServiceForRfp
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden">
      {/* Luminous Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#19E6FF]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Layanan Terpadu End-to-End' : 'Integrated End-to-End Services'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {lang === 'id'
                ? 'Standardisasi Eksekusi Acara Lintas Format.'
                : 'Standardized Execution Across Every Event Format.'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#A9B8D0]">
              {lang === 'id'
                ? 'Dari konferensi diplomatik VVIP hingga panggung festival 60.000 penonton, setiap format ditopang SOP keselamatan dan teknologi panggung mutakhir.'
                : 'From VVIP diplomatic summits to 60,000-patron festival stages, backed by rigorous OHS protocols and next-generation production tech.'}
            </p>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group bg-[#0A2150]/60 backdrop-blur-md rounded-2xl border border-[#008CFF]/20 p-7 flex flex-col justify-between hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] hover:-translate-y-1 transition-all duration-200 relative overflow-hidden"
            >
              {/* Top Electric Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#075BFF] via-[#008CFF] to-[#19E6FF] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between text-xs text-[#A9B8D0] font-mono mb-4">
                  <span className="text-[#19E6FF] font-bold font-sans text-sm">{srv.number}.</span>
                  <span className="text-[#A9B8D0] font-sans text-xs">{srv.subtitle[lang]}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#19E6FF] transition-colors">
                  {srv.title[lang]}
                </h3>

                <p className="mt-3 text-sm text-[#A9B8D0] leading-relaxed">
                  {srv.description[lang]}
                </p>

                {/* Highlights Deliverables */}
                <div className="mt-6 pt-5 border-t border-[#0A2150] space-y-2.5">
                  <div className="text-[11px] font-semibold uppercase text-[#19E6FF] tracking-wider">
                    {lang === 'id' ? 'Cakupan Produksi:' : 'Core Deliverables:'}
                  </div>
                  {srv.deliverables[lang].slice(0, 3).map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#A9B8D0]">
                      <Check className="w-3.5 h-3.5 text-[#19E6FF] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-8 pt-4 border-t border-[#0A2150] flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(srv)}
                  className="text-xs font-semibold text-[#B6F4FF] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>{lang === 'id' ? 'Detail Spesifikasi & SOP' : 'View Specs & SOP'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#19E6FF]" />
                </button>

                <button
                  onClick={() => onSelectServiceForRfp(srv.title[lang])}
                  className="px-3 py-1.5 text-xs font-bold text-[#19E6FF] bg-[#075BFF]/20 hover:bg-[#075BFF] hover:text-white rounded-lg transition-colors cursor-pointer border border-[#008CFF]/40 shadow-xs"
                >
                  {lang === 'id' ? '+ RFP Acara' : '+ RFP Event'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal for Selected Service (Electric Blue Theme) */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#040D1F]/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#0A2150] text-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-[#008CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-5 sm:p-8 relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#06142E] gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#19E6FF] uppercase">
                  <span>{selectedService.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedService.subtitle[lang]}</span>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-[#A9B8D0] hover:text-white p-2 cursor-pointer rounded-lg hover:bg-[#06142E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
                  aria-label="Tutup Detail Layanan"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4">
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  {selectedService.title[lang]}
                </h3>
                <p className="mt-3 text-sm text-[#A9B8D0] leading-relaxed">
                  {selectedService.description[lang]}
                </p>

                {/* Deliverables */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#19E6FF] mb-3">
                    {lang === 'id' ? 'Rincian Deliverables & Output Kerja' : 'Detailed Work Deliverables'}
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedService.deliverables[lang].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#A9B8D0]">
                        <CheckCircle2 className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Capacities */}
                <div className="mt-6 p-5 rounded-xl bg-[#06142E]/70 border border-[#008CFF]/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#19E6FF] mb-3">
                    {lang === 'id' ? 'Kapasitas Teknis & Fasilitas' : 'Technical Capacities'}
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.technicalFeatures[lang].map((f, idx) => (
                      <li key={idx} className="text-xs text-[#A9B8D0] flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#19E6FF] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Typical Clients */}
                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#A9B8D0]">
                  <span className="font-semibold text-white">
                    {lang === 'id' ? 'Klien Ideal:' : 'Ideal For:'}
                  </span>
                  {selectedService.typicalClients.map((client, idx) => (
                    <span key={idx} className="text-white bg-[#06142E] border border-[#008CFF]/30 px-3 py-1 rounded-md font-medium text-xs">
                      {client}
                    </span>
                  ))}
                </div>

                {/* Modal CTA */}
                <div className="mt-8 pt-5 border-t border-[#06142E] flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2 text-sm text-[#A9B8D0] hover:text-white cursor-pointer transition-colors"
                  >
                    {lang === 'id' ? 'Tutup' : 'Close'}
                  </button>
                  <button
                    onClick={() => {
                      const title = selectedService.title[lang];
                      setSelectedService(null);
                      onSelectServiceForRfp(title);
                    }}
                    className="px-5 py-2.5 text-sm font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl shadow-[0_4px_16px_rgba(7,91,255,0.35)] transition-colors cursor-pointer border border-[#19E6FF]/20"
                  >
                    {lang === 'id' ? 'Pilih untuk Request Proposal (RFP)' : 'Select for RFP Request'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
