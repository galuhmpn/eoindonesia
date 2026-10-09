import React, { useState } from 'react';
import { Language } from '../types';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/contact';
import { Download, CheckCircle2, ShieldCheck, MessageSquare, X, MapPin, PhoneCall, Mail } from 'lucide-react';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    // Simulating instant official PDF download trigger
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#040D1F]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0A2150] text-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-[#008CFF]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-5 sm:p-8 relative">
        {/* Document Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#06142E] gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#19E6FF] font-bold uppercase">
              <span>DOKUMEN RESMI</span>
              <span aria-hidden="true">·</span>
              <span>NO: EOID-CORP-2026/Q1</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mt-1 leading-snug">
              {lang === 'id'
                ? 'Company Profile & Executive Capability Deck'
                : 'Official Company Profile & Capability Deck'}
            </h3>
            <p className="text-xs text-[#19E6FF] font-semibold mt-0.5">
              EO INDONESIA (eoindonesia.id)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A9B8D0] hover:text-white rounded-lg hover:bg-[#06142E] transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
            aria-label="Tutup Profil"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Executive Document Preview */}
        <div className="mt-6 space-y-6 text-xs text-[#A9B8D0] leading-relaxed">
          {/* Legal Identity Banner */}
          <div className="p-5 rounded-xl bg-[#06142E] border border-[#008CFF]/30 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="font-semibold text-[#19E6FF] text-[11px] uppercase tracking-wider">
                {lang === 'id' ? 'Entitas Resmi:' : 'Official Entity:'}
              </div>
              <div className="font-bold text-white text-base mt-0.5">
                EO Indonesia
              </div>
              <div className="text-[11px] text-[#A9B8D0] mt-0.5 font-mono">
                NIB: 9120003491823 · NPWP: 42.891.203.4-012.000
              </div>
            </div>

            <div>
              <div className="font-semibold text-[#19E6FF] text-[11px] uppercase tracking-wider">
                {lang === 'id' ? 'Sertifikasi & Kualifikasi:' : 'Certifications & Accreditations:'}
              </div>
              <div className="font-bold text-white text-xs mt-0.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#19E6FF] shrink-0" />
                <span>Ahli K3 Konstruksi Panggung & Standar APMI</span>
              </div>
              <div className="text-[11px] text-[#A9B8D0] mt-0.5 font-mono">
                SK Kemenkumham: AHU-0029144.AH.01.01.TAHUN 2021
              </div>
            </div>
          </div>

          {/* Executive Overview */}
          <div>
            <h4 className="font-bold text-white text-sm mb-1.5 uppercase tracking-wider">
              1. {lang === 'id' ? 'Ringkasan Eksekutif Perusahaan' : 'Executive Company Summary'}
            </h4>
            <p>
              {lang === 'id'
                ? 'EO Indonesia adalah platform terpadu dan agensi manajemen acara berskala nasional yang mengintegrasikan perancangan konsep kreatif, perizinan kepolisian terpadu, serta eksekusi produksi panggung presisi. Dengan jangkauan logistik di 38 provinsi dan rekam jejak lebih dari 500 acara sukses, kami siap mendukung agenda kementerian, perhelatan BUMN, dan kegiatan korporasi multinasional.'
                : 'EO Indonesia is a unified national event management and stage production agency integrating creative concepting, nationwide police permitting, and high-precision technical delivery. With logistics footprints across 38 provinces and over 500 executed events, we serve ministerial summits, state enterprise milestones, and global corporation assemblies.'}
            </p>
          </div>

          {/* Capability Matrix */}
          <div>
            <h4 className="font-bold text-white text-sm mb-2.5 uppercase tracking-wider">
              2. {lang === 'id' ? 'Matriks Kapasitas Produksi & Peralatan' : 'Technical Capacity & Asset Matrix'}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 bg-[#06142E] rounded-xl border border-[#008CFF]/30">
                <div className="font-extrabold text-white text-lg font-display">60.000+</div>
                <div className="text-[10px] text-[#A9B8D0] mt-0.5">Maks. Kapasitas Audiens</div>
              </div>
              <div className="p-3.5 bg-[#06142E] rounded-xl border border-[#008CFF]/30">
                <div className="font-extrabold text-[#19E6FF] text-lg font-display">1.200 m²</div>
                <div className="text-[10px] text-[#A9B8D0] mt-0.5">Inventaris LED P1.8/P2.9</div>
              </div>
              <div className="p-3.5 bg-[#06142E] rounded-xl border border-[#008CFF]/30">
                <div className="font-extrabold text-white text-lg font-display">52 Ton</div>
                <div className="text-[10px] text-[#A9B8D0] mt-0.5">Certified Rigging Load</div>
              </div>
              <div className="p-3.5 bg-[#06142E] rounded-xl border border-[#008CFF]/30">
                <div className="font-extrabold text-[#19E6FF] text-lg font-display">4 Hub</div>
                <div className="text-[10px] text-[#A9B8D0] mt-0.5">Pergudangan Nasional</div>
              </div>
            </div>
          </div>

          {/* Standard Operating Procedure (SOP) Safety */}
          <div>
            <h4 className="font-bold text-white text-sm mb-1.5 uppercase tracking-wider">
              3. {lang === 'id' ? 'Komitmen K3L & Zero Incident Policy' : 'OHS & Zero Incident Policy'}
            </h4>
            <p>
              {lang === 'id'
                ? 'Setiap perhelatan di bawah naungan EO Indonesia wajib melewati tahapan Uji Kelayakan Struktural Rigging (Structural Rigging Audit), penempatan tim evakuasi medis darurat berlisensi BLS, serta kepatuhan mutlak terhadap Surat Izin Keramaian dari Kepolisian Republik Indonesia.'
                : 'Every production under EO Indonesia undergoes mandatory structural load verification, licensed emergency medical deployment, and full alignment with Indonesian National Police crowd permits.'}
            </p>
          </div>

          {/* Official HQ & Contact Verification */}
          <div className="p-4 rounded-xl bg-[#06142E] border border-[#008CFF]/30 space-y-2 text-[#A9B8D0] text-[11px]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Alamat Kantor Pusat:</strong> {CONTACT_INFO.address.full}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <div className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#19E6FF] shrink-0" />
                <span><strong className="text-white">Hotline / WA:</strong> {CONTACT_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#19E6FF] shrink-0" />
                <span><strong className="text-white">Email:</strong> {CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-[#06142E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#A9B8D0]">
            {downloadSuccess ? (
              <span className="text-[#19E6FF] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {lang === 'id' ? 'Mempersiapkan dokumen cetak...' : 'Preparing document printout...'}
              </span>
            ) : (
              <span>Versi Digital Terakreditasi 2026 · eoindonesia.id</span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={getWhatsAppUrl('company_profile', {}, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#B6F4FF] hover:text-white bg-[#06142E] hover:bg-[#081A3A] border border-[#008CFF]/30 rounded-xl transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Tanya via WhatsApp' : 'Inquire on WhatsApp'}</span>
            </a>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-all cursor-pointer shadow-[0_4px_16px_rgba(7,91,255,0.35)] border border-[#19E6FF]/20"
            >
              <Download className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Cetak / Unduh PDF' : 'Print / Download PDF'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
