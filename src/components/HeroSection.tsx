import React from 'react';
import { Language } from '../types';
import { HeroStageVisual } from './HeroStageVisual';
import { CLIENT_LOGOS } from '../data/content';
import { ShieldCheck, Award, Sparkles, ArrowRight, FileCheck, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onExploreServices: () => void;
  onOpenRfp: () => void;
  onOpenCompanyProfile: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onExploreServices,
  onOpenRfp,
  onOpenCompanyProfile
}) => {
  return (
    <section className="relative pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-[#06142E] text-white">
      {/* Background Radial Electric Illumination */}
      <div className="absolute top-0 inset-x-0 h-[42rem] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[36rem] bg-gradient-to-b from-[#0A2150] via-[#075BFF]/15 to-transparent rounded-full blur-[110px]" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#19E6FF]/10 rounded-full blur-[100px]" />
        <div className="absolute top-40 left-10 w-80 h-80 bg-[#075BFF]/15 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary Headline with Electric Blue / Cyan Gradient Accent - Posisi paling atas */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
            {lang === 'id' ? (
              <>
                Solusi Manajemen Acara Terpadu{' '}
                <span className="bg-gradient-to-r from-[#075BFF] via-[#008CFF] to-[#19E6FF] bg-clip-text text-transparent">
                  Berskala Nasional.
                </span>
              </>
            ) : (
              <>
                Integrated Event Solutions on a{' '}
                <span className="bg-gradient-to-r from-[#075BFF] via-[#008CFF] to-[#19E6FF] bg-clip-text text-transparent">
                  National Scale.
                </span>
              </>
            )}
          </h1>

          {/* Editorial Subtitle Kicker with Subtle Luminous Cyan - Ditempatkan di bawah H1 */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase mt-4 mb-5">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A2150]/80 border border-[#008CFF]/30 text-[#19E6FF] shadow-[0_0_12px_rgba(25,230,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Agensi Produksi Acara & MICE Terintegrasi' : 'Integrated Event Production & MICE Agency'}</span>
            </div>
            <span aria-hidden="true" className="text-[#334E7A]">·</span>
            <span className="text-[#A9B8D0] font-mono">eoindonesia.id</span>
          </div>

          <p className="mt-5 text-lg sm:text-xl text-[#A9B8D0] leading-relaxed max-w-3xl">
            {lang === 'id'
              ? 'Menghubungkan gagasan, merayakan pengalaman. Lebih dari satu dekade mewujudkan konferensi internasional, corporate gathering prestisius, dan festival spektakuler dengan presisi teknik serta standardisasi K3L di 34 provinsi.'
              : 'Connecting ideas, celebrating experiences. Over a decade delivering international summits, prestigious corporate galas, and mega festivals with structural engineering precision and certified safety across 34 Indonesian provinces.'}
          </p>

          {/* Action Points */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Primary CTA with Electric Glow */}
            <button
              onClick={onOpenRfp}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] active:scale-98 rounded-xl shadow-[0_4px_24px_rgba(7,91,255,0.45)] hover:shadow-[0_4px_30px_rgba(7,91,255,0.65)] transition-all cursor-pointer border border-[#19E6FF]/30"
            >
              <span>{lang === 'id' ? 'Request Proposal (RFP)' : 'Request Proposal (RFP)'}</span>
              <ArrowRight className="w-4 h-4 text-[#B6F4FF]" />
            </button>

            {/* Secondary Action */}
            <button
              onClick={onExploreServices}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#B6F4FF] bg-[#0A2150]/60 hover:bg-[#0A2150] active:scale-98 border border-[#008CFF]/40 rounded-xl transition-all cursor-pointer hover:border-[#19E6FF]/60"
            >
              <span>{lang === 'id' ? 'Eksplorasi Layanan' : 'Explore Services'}</span>
            </button>

            {/* Company Profile Action */}
            <button
              onClick={onOpenCompanyProfile}
              className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-[#A9B8D0] hover:text-white transition-colors cursor-pointer"
            >
              <FileCheck className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Unduh Company Profile (.PDF)' : 'Download Company Profile (.PDF)'}</span>
            </button>
          </div>

          {/* Trust Markers */}
          <div className="mt-7 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#A9B8D0]">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Badan Usaha Resmi (PT)' : 'Officially Registered Entity'}</span>
            </div>
            <span aria-hidden="true" className="text-[#334E7A]">·</span>
            <div className="flex items-center gap-1.5 text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Sertifikasi K3L & APMI' : 'OHS & APMI Certified'}</span>
            </div>
            <span aria-hidden="true" className="text-[#334E7A]">·</span>
            <div className="flex items-center gap-1.5 text-white font-medium">
              <Award className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Akreditasi MICE BNSP' : 'BNSP MICE Accredited'}</span>
            </div>
          </div>
        </div>

        {/* Hero Dominant Focal Asset: Live Stage Engineering Visual */}
        <div className="mt-12">
          <HeroStageVisual />
        </div>

        {/* Social Proof Metric Bar (Deep Navy Glass Surface) */}
        <div className="mt-12 bg-[#0A2150]/70 rounded-2xl border border-[#008CFF]/25 shadow-[0_8px_32px_rgba(6,20,46,0.6)] backdrop-blur-md p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#1D3B6C]/60">
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                500+
              </div>
              <div className="mt-1 text-sm font-semibold text-[#B6F4FF]">
                {lang === 'id' ? 'Acara Sukses Terlaksana' : 'Successful Events Executed'}
              </div>
              <div className="text-xs text-[#A9B8D0] mt-0.5">
                {lang === 'id' ? 'Konferensi, gala, konser & kenegaraan' : 'Conferences, galas, concerts & state'}
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:pl-8">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                34
              </div>
              <div className="mt-1 text-sm font-semibold text-[#B6F4FF]">
                {lang === 'id' ? 'Provinsi Jangkauan Logistik' : 'Provinces Logistical Reach'}
              </div>
              <div className="text-xs text-[#A9B8D0] mt-0.5">
                {lang === 'id' ? 'Dari Sabang sampai Merauke & IKN' : 'From Sabang to Merauke & IKN'}
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:pl-8">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#19E6FF] font-display tabular-nums tracking-tight drop-shadow-[0_0_10px_rgba(25,230,255,0.4)]">
                99.2%
              </div>
              <div className="mt-1 text-sm font-semibold text-[#B6F4FF]">
                {lang === 'id' ? 'Tingkat Kepuasan Klien' : 'Client Satisfaction Rating'}
              </div>
              <div className="text-xs text-[#A9B8D0] mt-0.5">
                {lang === 'id' ? 'Berdasarkan 320+ audit pasca-acara' : 'Based on 320+ post-event audits'}
              </div>
            </div>

            <div className="pt-4 lg:pt-0 lg:pl-8">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display tabular-nums tracking-tight drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                Zero
              </div>
              <div className="mt-1 text-sm font-semibold text-[#B6F4FF]">
                {lang === 'id' ? 'Major Accident Record' : 'Major Accident Record'}
              </div>
              <div className="text-xs text-[#A9B8D0] mt-0.5">
                {lang === 'id' ? 'Kepatuhan K3L & simulasi evakuasi' : 'OHS safety & evacuation drill protocol'}
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Stakeholders Strip */}
        <div className="mt-12 pt-8 border-t border-[#0A2150]">
          <div className="text-center sm:text-left mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A9B8D0]">
              {lang === 'id'
                ? 'Dipercaya oleh Kementerian RI, BUMN Holding, dan Korporasi Multinasional'
                : 'Trusted by Indonesian Ministries, State-Owned Enterprises, and Global Corporations'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0A2150]/40 border border-[#008CFF]/15 text-center transition-all hover:border-[#19E6FF]/40 hover:bg-[#0A2150]/70"
              >
                <span className="text-xs font-bold text-white leading-tight">
                  {client.name}
                </span>
                <span className="text-[10px] text-[#A9B8D0] mt-0.5">
                  {client.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
