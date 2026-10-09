import React from 'react';
import { Language } from '../types';
import { CORE_VALUES, TEAM_MEMBERS } from '../data/content';
import { Target, Compass, Check, Sparkles, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="tentang-kami" className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#19E6FF]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
            <span>{lang === 'id' ? 'Filosofi, Visi & Identitas' : 'Philosophy, Vision & Identity'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {lang === 'id'
              ? 'Wadah Terpadu Pelaku Industri Acara Nasional.'
              : 'The Unified Home for Indonesia’s National Event Industry.'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B8D0] leading-relaxed">
            {lang === 'id'
              ? 'EO Indonesia (eoindonesia.id) lahir dari tekad untuk merevolusi ekosistem penyelenggaraan acara di tanah air: menyederhanakan kurasi, menjamin standardisasi keselamatan K3L, serta membuka akses kolaborasi setara bagi penyelenggara dan vendor lokal di seluruh penjuru negeri.'
              : 'EO Indonesia (eoindonesia.id) was created to unify and standardize the national event production ecosystem: simplifying vendor curation, certifying structural and crowd safety, and unlocking seamless collaborative access across every province.'}
          </p>
        </div>

        {/* Philosophy Breakdown: EO, Indonesia, .id */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#075BFF] to-[#008CFF] text-white flex items-center justify-center font-display font-extrabold text-lg mb-5 shadow-[0_4px_16px_rgba(7,91,255,0.45)]">
              EO
            </div>
            <h3 className="text-xl font-bold text-white">
              {lang === 'id' ? 'Event Organizer (Eksekusi & Presisi)' : 'Event Organizer (Precision)'}
            </h3>
            <p className="mt-3 text-sm text-[#A9B8D0] leading-relaxed">
              {lang === 'id'
                ? 'Simbol komitmen terhadap eksekusi teknis, kedisiplinan rundown tanpa deviasi detik, dan kerja keras di balik panggung yang memastikan momentum berharga klien berlangsung mulus.'
                : 'A testament to uncompromising technical execution, minute-by-minute rundown discipline, and dedicated backstage craft ensuring client milestones happen flawlessly.'}
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-[#081A3A] border border-[#008CFF]/40 text-[#19E6FF] flex items-center justify-center font-display font-extrabold text-lg mb-5 shadow-[0_4px_16px_rgba(25,230,255,0.2)]">
              IDN
            </div>
            <h3 className="text-xl font-bold text-white">
              {lang === 'id' ? 'Indonesia (Cakupan & Gotong Royong)' : 'Indonesia (Scope & Synergy)'}
            </h3>
            <p className="mt-3 text-sm text-[#A9B8D0] leading-relaxed">
              {lang === 'id'
                ? 'Representasi jangkauan 38 provinsi dari Sabang sampai Merauke. Menghormati kekayaan narasi budaya lokal dan merajut semangat gotong royong vendor panggung daerah.'
                : 'Representing comprehensive reach across 38 provinces. Honoring rich regional cultural narratives while empowering local stage and production suppliers.'}
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#008CFF] to-[#19E6FF] text-[#06142E] flex items-center justify-center font-display font-extrabold text-lg mb-5 shadow-[0_4px_16px_rgba(25,230,255,0.35)]">
              .id
            </div>
            <h3 className="text-xl font-bold text-white">
              {lang === 'id' ? 'Domain .id (Legalitas & Otoritas)' : 'Domain .id (Authority & Trust)'}
            </h3>
            <p className="mt-3 text-sm text-[#A9B8D0] leading-relaxed">
              {lang === 'id'
                ? 'Domain tingkat atas identitas nasional yang menegaskan keabsahan badan hukum, kepatuhan pajak, dan rasa aman bagi institusi pemerintah, BUMN, maupun swasta internasional.'
                : 'The official national top-level domain guaranteeing certified corporate legality, tax compliance, and institutional trust for government and multinational entities.'}
            </p>
          </div>
        </div>

        {/* Vision & Mission Split Cards */}
        <div id="visi-misi" className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-mt-16">
          {/* Vision Card */}
          <div className="p-8 sm:p-9 rounded-2xl bg-gradient-to-br from-[#0A2150] to-[#06142E] text-white shadow-xl relative overflow-hidden border border-[#008CFF]/30">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#075BFF]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-2 text-[#19E6FF] text-xs font-bold uppercase tracking-wider mb-3">
              <Target className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Visi Utama' : 'Core Vision'}</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white leading-snug">
              {lang === 'id'
                ? 'Pusat Ekosistem Industri Kreatif & Penyelenggaraan Acara Terdepan di Indonesia.'
                : 'The Leading Ecosystem for Creative Production & Event Management in Indonesia.'}
            </h3>
            <p className="mt-4 text-[#A9B8D0] leading-relaxed text-sm sm:text-base">
              {lang === 'id'
                ? 'Menjadi entitas rujukan nasional yang dipercaya korporasi dunia dan institusi negara dalam menghadirkan perhelatan bernilai tinggi, inklusif bagi talenta lokal, serta berdaya saing global.'
                : 'Serving as the definitive national benchmark trusted by global enterprises and state institutions to deliver high-impact, inclusive, and globally competitive event experiences.'}
            </p>
            <div className="mt-6 pt-5 border-t border-[#0A2150] flex items-center gap-2 text-xs text-[#B6F4FF]">
              <ShieldCheck className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Kredibilitas, Standar K3L & Akuntabilitas Penuh' : 'Credibility, OHS Standards & Full Accountability'}</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-9 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/25 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-[#19E6FF] text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Empat Misi Penggerak' : 'Four Action Pillars'}</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {lang === 'id' ? 'Misi Kami' : 'Our Mission'}
            </h3>
            <ul className="mt-5 space-y-3.5">
              {[
                {
                  id: 'Membuka akses kemitraan transparan antara pencari jasa acara dan vendor lokal di berbagai daerah.',
                  en: 'Opening transparent procurement between event organizers and vetted local suppliers nationwide.'
                },
                {
                  id: 'Mendorong standardisasi operasional, keselamatan K3L, dan mutu produksi panggung nasional.',
                  en: 'Driving operational standards, OHS safety compliance, and national staging quality.'
                },
                {
                  id: 'Mengintegrasikan teknologi digital guna mempermudah perencanaan, penjadwalan, dan transaksi kebutuhan event.',
                  en: 'Integrating digital tools to streamline planning, scheduling, and request for proposal workflows.'
                },
                {
                  id: 'Mengangkat kekayaan narasi dan kearifan lokal ke dalam standar penyelenggaraan acara modern.',
                  en: 'Infusing indigenous cultural narratives into modern, high-tech event productions.'
                }
              ].map((m, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#A9B8D0]">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#081A3A] text-[#19E6FF] flex items-center justify-center shrink-0 border border-[#008CFF]/40 shadow-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{m[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Core Values */}
        <div id="nilai-utama" className="mt-20 scroll-mt-16">
          <div className="text-center sm:text-left mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#19E6FF]">
              {lang === 'id' ? 'Pilar Nilai Utama' : 'Core Values'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {lang === 'id' ? 'Standar Karakter Kerja EO Indonesia' : 'The EO Indonesia Guiding Values'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] hover:-translate-y-1 transition-all duration-200 group relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#075BFF] to-[#19E6FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-xs font-mono text-[#19E6FF] font-bold mb-2">
                  0{idx + 1}.
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-[#19E6FF] transition-colors">
                  {val.title[lang]}
                </h4>
                <div className="text-xs text-[#008CFF] font-semibold mt-1">
                  {val.subtitle[lang]}
                </div>
                <p className="mt-3 text-sm text-[#A9B8D0] leading-relaxed">
                  {val.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Production Directorate */}
        <div id="tim-ahli" className="mt-20 pt-16 border-t border-[#0A2150] scroll-mt-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#19E6FF]">
              {lang === 'id' ? 'Struktur Tim Ahli' : 'Technical Directorate'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {lang === 'id' ? 'Dipimpin Praktisi Senior Berpengalaman' : 'Led by Industry Veterans'}
            </h3>
            <p className="text-sm text-[#A9B8D0] mt-2">
              {lang === 'id'
                ? 'Figur kunci di balik layar yang mengawal keselamatan, estetika pertunjukan, dan kepatuhan regulasi.'
                : 'The key minds ensuring structural safety, show artistry, and uncompromised regulatory governance.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/20 hover:border-[#19E6FF]/50 hover:shadow-[0_8px_30px_rgba(7,91,255,0.25)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#075BFF] to-[#0A2150] border border-[#19E6FF]/40 text-[#19E6FF] flex items-center justify-center font-bold text-base mb-4 shadow-[0_4px_16px_rgba(7,91,255,0.3)]">
                    {member.name.split(' ')[0][0]}
                    {member.name.split(' ')[1] ? member.name.split(' ')[1][0] : ''}
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {member.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#19E6FF] mt-1">
                    {member.role[lang]}
                  </div>
                  <div className="text-[11px] text-[#A9B8D0] mt-1 font-mono">
                    {member.experience} · {member.credentials}
                  </div>
                  <p className="mt-3 text-xs text-[#A9B8D0] leading-relaxed">
                    {member.bio[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
