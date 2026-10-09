import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/contact';

interface FaqSectionProps {
  lang: Language;
}

interface FaqItem {
  q: { id: string; en: string };
  a: { id: string; en: string };
}

const FAQ_DATA: FaqItem[] = [
  {
    q: {
      id: 'Berapa perkiraan biaya / anggaran untuk menyewa jasa Event Organizer di Indonesia?',
      en: 'What is the estimated cost of hiring a professional Event Organizer in Indonesia?'
    },
    a: {
      id: 'Biaya penyelenggaraan acara sangat fleksibel & transparan: harga start mulai dari Rp 2.500.000 tergantung kebutuhan spesifik dan skala acara (seperti jasa konseptor, show director, atau modul peralatan tertentu). Untuk produksi panggung skala besar (konferensi MICE, brand activation, festival), seluruh alokasi anggaran kami kawal ketat agar tidak melebihi plafon Rp 200 Juta sesuai pagu anggaran instansi Anda, lengkap dengan rincian RAB line-by-line tanpa markup tersembunyi.',
      en: 'Event production costs are highly flexible and transparent: starting rates begin from IDR 2,500,000 depending on exact requirements and event scale. For full staging productions (MICE summits, brand activations, festivals), we strictly enforce budgetary discipline ensuring total expenditures do not exceed an IDR 200 Million ceiling with line-item transparency.'
    }
  },
  {
    q: {
      id: 'Bagaimana alur pengurusan Surat Izin Keramaian dari Kepolisian (Mabes Polri, Polda, dan Polres)?',
      en: 'How does the police crowd permitting process (Mabes Polri, Polda, and Polres) work?'
    },
    a: {
      id: 'Untuk acara berskala besar (>1.000 pax) atau yang menghadirkan penonton publik dan artis nasional/internasional, izin keramaian diproses secara bertingkat: rekomendasi Satgas setempat, izin Polres, hingga rekomendasi Intelkam Polda dan Mabes Polri. Tim legal dan K3L EO Indonesia mendampingi seluruh proses penyusunan proposal teknis, denah evakuasi medis, audit rekayasa barikade, serta audiensi resmi kepolisian.',
      en: 'For large-scale gatherings (>1,000 attendees) or public ticketed festivals, crowd permits require a multi-tier regulatory pathway through local precincts, regional police (Polda), and National Police Headquarters (Mabes Polri). EO Indonesia’s compliance division handles the technical dossiers, medical evacuation plans, and formal police assemblies.'
    }
  },
  {
    q: {
      id: 'Apakah EO Indonesia melayani acara di luar Jawa seperti Bali, Sumatra, Kalimantan, dan IKN?',
      en: 'Does EO Indonesia service projects outside Java such as Bali, Sumatra, Kalimantan, and IKN?'
    },
    a: {
      id: 'Ya, mutlak. Kantor Pusat kami berkedudukan di Banguntapan, Bantul, D.I. Yogyakarta, dan kami mengoperasikan 4 Hub Pergudangan & Logistik Strategis yang mencakup 38 provinsi di seluruh Indonesia: Hub Jawa-Bali (Yogyakarta, Jakarta, Surabaya, Denpasar), Hub Sumatra (Medan & Palembang), Hub Kalimantan (Balikpapan & IKN Nusantara), serta Hub Sulawesi & Indonesia Timur (Makassar). Kami bermitra dengan 600+ rekanan vendor lokal terkurasi.',
      en: 'Yes, absolutely. Headquartered in Banguntapan, Bantul, D.I. Yogyakarta, we operate 4 Strategic Staging Hubs spanning 38 provinces: Java-Bali Hub, Sumatra Hub (Medan), Kalimantan Hub (Balikpapan & IKN Nusantara), and Eastern Indonesia Hub (Makassar), supported by 600+ vetted local production partners.'
    }
  },
  {
    q: {
      id: 'Apa yang membedakan EO Indonesia dengan agensi event organizer konvensional?',
      en: 'What sets EO Indonesia apart from conventional event organizers?'
    },
    a: {
      id: 'Dua pilar utama kami adalah Presisi Teknis dan Keselamatan K3L Tanpa Kompromi. Setiap tata panggung melewati Uji Beban Rigging bersertifikat TUV rasio 5:1, kalibrasi akustik audio EASE 5D, sistem kelistrikan genset sinkronisasi otomatis (zero-blink), serta tata kelola pengadaan badan hukum resmi (NIB terdaftar) yang aman bagi audit BUMN, kementerian, dan instansi global.',
      en: 'Our primary differentiators are technical engineering discipline and uncompromising OHS safety. Every stage undergoes 5:1 load testing, EASE 5D acoustic tuning, automatic synchronized generator grids (zero-blink), and full corporate procurement governance.'
    }
  },
  {
    q: {
      id: 'Apakah EO Indonesia memiliki legalitas resmi untuk pengadaan tender kementerian & BUMN?',
      en: 'Does EO Indonesia possess legal authorization for government and state enterprise tenders?'
    },
    a: {
      id: 'Ya. Entitas resmi kami adalah EO Indonesia dengan NIB: 9120003491823, NPWP: 42.891.203.4-012.000, serta SK Pengesahan Kemenkumham RI: AHU-0029144.AH.01.01.TAHUN 2021. Kami terbiasa dengan kepatuhan faktur pajak, pakta integritas, tata kelola anti-suap, dan sistem e-Procurement BUMN.',
      en: 'Yes. Our official entity is EO Indonesia with official NIB: 9120003491823 and Ministry of Law authorization. We are fully compliant with tax invoices, integrity pacts, anti-bribery governance, and corporate e-procurement portals.'
    }
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Inject Schema.org FAQPage Structured Data into document head for Google Rich Snippets
  useEffect(() => {
    const scriptId = 'jsonld-faq-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_DATA.map((item) => ({
        '@type': 'Question',
        name: item.q[lang],
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a[lang]
        }
      }))
    };

    script.text = JSON.stringify(faqSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [lang]);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden scroll-mt-14">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A2150] border border-[#008CFF]/30 text-[#19E6FF] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#19E6FF]" />
            <span>{lang === 'id' ? 'Pertanyaan Umum (FAQ)' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'id'
              ? 'Hal yang Kerap Ditanyakan Klien Acara'
              : 'Everything You Need to Know Before Briefing'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A9B8D0]">
            {lang === 'id'
              ? 'Jawaban komprehensif seputar biaya, regulasi perizinan polisi, jangkauan wilayah 38 provinsi, dan jaminan keselamatan panggung.'
              : 'Clear answers regarding budgets, police crowd permits, national logistics, and structural staging standards.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0A2150] border-[#19E6FF]/50 shadow-[0_4px_24px_rgba(7,91,255,0.2)]'
                    : 'bg-[#0A2150]/60 border-[#008CFF]/20 hover:border-[#008CFF]/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white leading-snug">
                    {faq.q[lang]}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#06142E] border border-[#008CFF]/30 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#19E6FF]' : 'text-[#A9B8D0]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#A9B8D0] leading-relaxed border-t border-[#06142E]">
                    <p>{faq.a[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#081A3A] border border-[#008CFF]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#075BFF]/20 text-[#19E6FF] flex items-center justify-center shrink-0 border border-[#008CFF]/40">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'id' ? 'Punya pertanyaan teknis spesifik yang belum terjawab?' : 'Have a specific technical inquiry not answered here?'}
              </h4>
              <p className="text-xs text-[#A9B8D0]">
                {lang === 'id' ? 'Hubungi tim konsultan kami via WhatsApp Hotline resmi (6285360821111).' : 'Chat directly with our production consulting desk.'}
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('general', {}, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-all shadow-[0_4px_16px_rgba(7,91,255,0.4)] border border-[#19E6FF]/30 shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#19E6FF]" />
            <span>{lang === 'id' ? 'Tanya di WhatsApp' : 'Ask on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
