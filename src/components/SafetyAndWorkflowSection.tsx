import React from 'react';
import { Language } from '../types';
import { WORKFLOW_STEPS, SAFETY_STANDARDS, TESTIMONIALS } from '../data/content';
import { ShieldCheck, FileCheck, HardHat, CheckCircle2, Quote, Sparkles } from 'lucide-react';

interface SafetyAndWorkflowSectionProps {
  lang: Language;
  onOpenRfp: () => void;
  showTestimonials?: boolean;
  showBanner?: boolean;
}

export const SafetyAndWorkflowSection: React.FC<SafetyAndWorkflowSectionProps> = ({
  lang,
  onOpenRfp,
  showTestimonials = true,
  showBanner = true,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden">
      {/* Subtle Luminous Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#19E6FF]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Workflow Part */}
        <div>
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Alur Kerja Kemitraan' : 'Partnership Workflow'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {lang === 'id'
                ? '5 Tahap Eksekusi: Dari Briefing Hingga Laporan Akuntabel.'
                : '5-Stage Execution: From Discovery to Transparent Audit.'}
            </h2>
            <p className="mt-3 text-base text-[#A9B8D0]">
              {lang === 'id'
                ? 'Metodologi kerja terstruktur yang dirancang untuk memastikan keselarasan anggaran, kepatuhan teknis, dan presisi waktu di setiap lini.'
                : 'A structured methodology ensuring budget alignment, structural compliance, and second-by-second stage discipline.'}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            {WORKFLOW_STEPS.map((w, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 relative flex flex-col justify-between hover:border-[#19E6FF]/50 hover:shadow-[0_8px_24px_rgba(7,91,255,0.25)] hover:-translate-y-1 transition-all duration-200 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#081A3A] text-[#19E6FF] flex items-center justify-center font-display font-extrabold text-base border border-[#008CFF]/40 shadow-xs group-hover:border-[#19E6FF] transition-colors">
                    {w.step}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white leading-snug group-hover:text-[#19E6FF] transition-colors">
                    {w.title[lang]}
                  </h3>
                  <p className="mt-2 text-xs text-[#A9B8D0] leading-relaxed">
                    {w.desc[lang]}
                  </p>
                </div>
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#19E6FF]/60 z-10 pointer-events-none font-bold text-sm">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Safety & OHS K3L Standards (The Crucial Differentiator) */}
        <div className="mt-20 pt-16 border-t border-[#0A2150]">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'The EO Indonesia Standard' : 'The EO Indonesia Standard'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {lang === 'id'
                ? 'Standar Keselamatan Panggung, K3L & Perizinan Terpadu.'
                : 'Stage Safety Standards, OHS & Integrated Police Permitting.'}
            </h2>
            <p className="mt-3 text-base text-[#A9B8D0]">
              {lang === 'id'
                ? 'Membedakan agensi produksi papan atas dengan EO amatir. Kami memprioritaskan keselamatan jiwa ribuan audiens melalui audit rekayasa beban dan kepatuhan perizinan Polri.'
                : 'What separates elite event production from amateurs: uncompromising human safety through certified load testing, crowd dynamics engineering, and national police permitting.'}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAFETY_STANDARDS.map((std) => (
              <div
                key={std.id}
                className="p-6 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 shadow-xs hover:border-[#19E6FF]/50 hover:shadow-[0_8px_24px_rgba(7,91,255,0.25)] transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#081A3A] text-[#19E6FF] flex items-center justify-center font-bold mb-4 border border-[#008CFF]/40 shadow-xs">
                  {std.id === 'k3l' ? <HardHat className="w-5 h-5" /> : std.id === 'perizinan' ? <FileCheck className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                </div>

                <h3 className="text-lg font-bold text-white">
                  {std.title[lang]}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {std.points[lang].map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#A9B8D0] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Quotes */}
        {showTestimonials && (
          <div className="mt-20 pt-16 border-t border-[#0A2150]">
            <div className="max-w-2xl mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-1">
                {lang === 'id' ? 'Apresiasi & Testimoni' : 'Client Testimonials'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {lang === 'id' ? 'Apa Kata Project Director & Klien Kami' : 'What Project Directors Say'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 flex flex-col justify-between hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] transition-all duration-200"
                >
                  <div>
                    <Quote className="w-6 h-6 text-[#19E6FF] mb-3 opacity-80" />
                    <p className="text-sm text-slate-200 leading-relaxed italic">
                      "{t.quote[lang]}"
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#0A2150]">
                    <div className="text-sm font-bold text-white">
                      {t.author}
                    </div>
                    <div className="text-xs text-[#19E6FF] font-semibold mt-0.5">
                      {t.role[lang]}
                    </div>
                    <div className="text-[11px] text-[#A9B8D0] mt-0.5 font-medium">
                      {t.organization}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Electric Blue Accent Banner */}
        {showBanner && (
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#075BFF] via-[#008CFF] to-[#19E6FF] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(7,91,255,0.35)] relative overflow-hidden border border-white/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
                {lang === 'id'
                  ? 'Siap Mewujudkan Acara Prestisius Anda?'
                  : 'Ready to Bring Your Event Vision to Life?'}
              </h3>
              <p className="text-sm sm:text-base text-white/90 mt-1 max-w-xl">
                {lang === 'id'
                  ? 'Konsultasikan konsep panggung, perkiraan anggaran, dan lokasi acara bersama tim strategic production kami.'
                  : 'Consult on stage designs, budgetary parameters, and venue logistics with our production leads.'}
              </p>
            </div>
            <button
              onClick={onOpenRfp}
              className="relative z-10 px-7 py-3.5 text-sm font-bold text-[#06142E] bg-white hover:bg-[#F7FAFF] active:scale-98 rounded-xl transition-all whitespace-nowrap cursor-pointer shadow-xl hover:shadow-2xl"
            >
              {lang === 'id' ? 'Mulai Request Proposal (RFP)' : 'Start RFP Request'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
