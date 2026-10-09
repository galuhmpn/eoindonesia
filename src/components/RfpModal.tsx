import React, { useState } from 'react';
import { Language, RfpFormData } from '../types';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/contact';
import { CheckCircle2, Sparkles, MessageSquare, Copy, Check, X } from 'lucide-react';

interface RfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialService?: string;
}

export const RfpModal: React.FC<RfpModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialService = ''
}) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [rfpCode, setRfpCode] = useState('');
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<RfpFormData>({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    eventType: initialService || 'Konferensi Internasional & MICE',
    audienceScale: '500 – 1.000 Pax (Medium Conference)',
    targetDate: '',
    budgetRange: 'Rp 50 Jt – 100 Juta (Corporate Gathering & Workshop)',
    locationCity: 'D.I. Yogyakarta',
    technicalNeeds: ['Tata Suara Line Array Berdaya Tinggi', 'LED Screen P1.8/P2.5 & Wall Display'],
    additionalNotes: ''
  });

  if (!isOpen) return null;

  const eventTypes = [
    'Konferensi Internasional & MICE',
    'Corporate Gathering & RUPS BUMN',
    'Brand Activation & Peluncuran Produk',
    'Konser Musik & Festival Publik',
    'Upacara Kenegaraan & Protokoler VVIP',
    'Virtual & Hybrid Broadcast Event'
  ];

  const cityOptions = [
    'D.I. Yogyakarta & Solo Raya',
    'DKI Jakarta & Bodetabek',
    'Surabaya & Jawa Timur',
    'Bali (Denpasar, Nusa Dua & Kuta)',
    'Medan & Sumatra Utara',
    'Makassar & Sulawesi Selatan',
    'Balikpapan & Ibu Kota Nusantara (IKN)',
    'Kota Lainnya (Seluruh Indonesia)'
  ];

  const scaleOptions = [
    '< 500 Pax (Intimate/Executive)',
    '500 – 1.000 Pax (Medium Conference)',
    '1.000 – 5.000 Pax (Grand Gathering)',
    '5.000 – 20.000 Pax (Arena/Exhibition)',
    '20.000+ Pax (Stadium Festival)'
  ];

  const budgetOptions = [
    'Mulai Rp 2.500.000 (Sesuai Kebutuhan & Skala)',
    'Di bawah Rp 50 Juta (Intimate Event)',
    'Rp 50 Jt – 100 Juta (Corporate Gathering & Workshop)',
    'Rp 100 Jt – 150 Juta (MICE & Konferensi Regional)',
    'Rp 150 Jt – 200 Juta (Plafon Maksimal Produksi Panggung)'
  ];

  const technicalChecklist = [
    'Tata Suara Line Array Berdaya Tinggi',
    'LED Screen P1.8/P2.5 & Wall Display',
    'Panggung & Rigging Heavy-Duty TUV',
    'Perizinan Keramaian Mabes/Polda Lengkap',
    'Tenda Roder VVIP Berpendingin Udara',
    'Sistem Penerjemah Simultan Multibahasa',
    'Genset Silent & Redundansi Triple-Sync',
    'Simulasi Evakuasi Medis & Barikade Mojo'
  ];

  const toggleTechnicalNeed = (item: string) => {
    if (formData.technicalNeeds.includes(item)) {
      setFormData({
        ...formData,
        technicalNeeds: formData.technicalNeeds.filter((t) => t !== item)
      });
    } else {
      setFormData({
        ...formData,
        technicalNeeds: [...formData.technicalNeeds, item]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = `EOID-RFP-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfpCode(generatedCode);
    setSubmitted(true);
  };

  const getSummaryText = () => {
    return `[REQUEST PROPOSAL EOINDONESIA.ID]
Kode RFP: ${rfpCode || 'DRAFT'}
Organisasi/Perusahaan: ${formData.organizationName}
PIC: ${formData.contactPerson} (${formData.phone} / ${formData.email})
Jenis Acara: ${formData.eventType}
Lokasi Kota: ${formData.locationCity}
Skala Peserta: ${formData.audienceScale}
Target Tanggal: ${formData.targetDate || 'Fleksibel'}
Rentang Anggaran: ${formData.budgetRange}
Kebutuhan Teknis: ${formData.technicalNeeds.join(', ')}
Catatan Tambahan: ${formData.additionalNotes || 'N/A'}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppDirect = () => {
    const waUrl = getWhatsAppUrl('rfp_submitted', {
      rfpCode,
      organization: formData.organizationName,
      contactPerson: formData.contactPerson,
      eventType: formData.eventType,
      audienceScale: formData.audienceScale,
      targetDate: formData.targetDate,
      locationCity: formData.locationCity,
      budgetRange: formData.budgetRange
    }, lang);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#040D1F]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0A2150] text-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-[#008CFF]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-5 sm:p-8 relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#06142E]">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#19E6FF] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Formulir Request Proposal (RFP)' : 'Request for Proposal (RFP)'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
              {lang === 'id' ? 'Perencanaan Acara & Estimasi Anggaran' : 'Event Planning & RFP Brief'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A9B8D0] hover:text-white rounded-lg hover:bg-[#06142E] transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Tutup Formulir"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Submission Confirmation & Executive Summary */
          <div className="py-6 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-[#081A3A] border border-[#19E6FF] text-[#19E6FF] flex items-center justify-center mx-auto shadow-[0_0_20px_#19E6FF]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {lang === 'id' ? 'Brief Acara Berhasil Diajukan!' : 'Event Brief Submitted Successfully!'}
              </h4>
              <p className="text-xs text-[#A9B8D0] max-w-md mx-auto leading-relaxed">
                {lang === 'id'
                  ? `Proposal Anda telah tercatat dengan Nomor Referensi Resmi: ${rfpCode}. Tim Strategic Event Planner kami di Kantor Pusat (Yogyakarta) akan merespon dalam waktu 1x24 jam kerja.`
                  : `Your project brief has been registered under Official Code: ${rfpCode}. Our Event Strategists at Headquarters (Yogyakarta) will contact your procurement lead within 24 hours.`}
              </p>
            </div>

            {/* Structured Summary Box */}
            <div className="p-5 rounded-xl bg-[#06142E] border border-[#008CFF]/30 text-xs space-y-2 text-[#A9B8D0] font-mono">
              <div className="flex justify-between border-b border-[#0A2150] pb-2 text-white font-sans font-semibold">
                <span>{lang === 'id' ? 'Rangkuman Brief Acara' : 'Brief Summary'}</span>
                <span className="text-[#19E6FF] font-bold">{rfpCode}</span>
              </div>
              <div><strong className="font-sans text-white">Organisasi:</strong> {formData.organizationName}</div>
              <div><strong className="font-sans text-white">PIC:</strong> {formData.contactPerson} ({formData.phone})</div>
              <div><strong className="font-sans text-white">Jenis Acara:</strong> {formData.eventType}</div>
              <div><strong className="font-sans text-white">Lokasi & Skala:</strong> {formData.locationCity} · {formData.audienceScale}</div>
              <div><strong className="font-sans text-white">Target Anggaran:</strong> {formData.budgetRange}</div>
              <div><strong className="font-sans text-white">Kebutuhan:</strong> {formData.technicalNeeds.join(', ')}</div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-all cursor-pointer shadow-[0_4px_16px_rgba(7,91,255,0.4)] border border-[#19E6FF]/30"
              >
                <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Kirim ke WhatsApp Hotline (6285360821111)' : 'Send to WhatsApp Desk'}</span>
              </button>

              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-[#06142E] hover:bg-[#081A3A] rounded-xl transition-all cursor-pointer border border-[#008CFF]/30"
              >
                {copied ? <Check className="w-4 h-4 text-[#19E6FF]" /> : <Copy className="w-4 h-4 text-[#A9B8D0]" />}
                <span>{copied ? (lang === 'id' ? 'Tersalin!' : 'Copied!') : (lang === 'id' ? 'Salin Ringkasan Brief' : 'Copy Brief Text')}</span>
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-[#A9B8D0]">
              Kantor Pusat: {CONTACT_INFO.address.full} · Hotline: {CONTACT_INFO.phoneDisplay}
            </div>

            <div className="text-center">
              <button
                onClick={onClose}
                className="text-xs text-[#A9B8D0] hover:text-white cursor-pointer transition-colors"
              >
                {lang === 'id' ? 'Tutup Formulir' : 'Close Form'}
              </button>
            </div>
          </div>
        ) : (
          /* Multi-step RFP Form */
          <form onSubmit={handleSubmit} className="mt-5 space-y-5 text-xs">
            {/* Step Indicators */}
            <div className="flex items-center justify-between pb-3 border-b border-[#06142E]">
              <div className="flex items-center gap-3">
                <span className={`font-bold ${step === 1 ? 'text-[#19E6FF]' : 'text-[#A9B8D0]'}`}>
                  1. {lang === 'id' ? 'Konsep Acara' : 'Event Concept'}
                </span>
                <span className="text-[#0A2150]">/</span>
                <span className={`font-bold ${step === 2 ? 'text-[#19E6FF]' : 'text-[#A9B8D0]'}`}>
                  2. {lang === 'id' ? 'Spesifikasi Teknis' : 'Technical Needs'}
                </span>
                <span className="text-[#0A2150]">/</span>
                <span className={`font-bold ${step === 3 ? 'text-[#19E6FF]' : 'text-[#A9B8D0]'}`}>
                  3. {lang === 'id' ? 'Kontak Organisasi' : 'Contact & Submit'}
                </span>
              </div>
            </div>

            {/* STEP 1: EVENT CONCEPT & SCALE */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold text-[#A9B8D0] mb-1">
                    {lang === 'id' ? 'Pilih Format / Kategori Acara' : 'Select Event Format / Category'} *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                  >
                    {eventTypes.map((type, idx) => (
                      <option key={idx} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#A9B8D0] mb-1">
                      {lang === 'id' ? 'Rencana Lokasi (Kota/Provinsi)' : 'Planned Location (City/Province)'} *
                    </label>
                    <select
                      value={formData.locationCity}
                      onChange={(e) => setFormData({ ...formData, locationCity: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                    >
                      {cityOptions.map((c, i) => (
                        <option key={i} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#A9B8D0] mb-1">
                      {lang === 'id' ? 'Estimasi Jumlah Peserta/Audiens' : 'Estimated Attendees / Scale'} *
                    </label>
                    <select
                      value={formData.audienceScale}
                      onChange={(e) => setFormData({ ...formData, audienceScale: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                    >
                      {scaleOptions.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#A9B8D0] mb-1">
                      {lang === 'id' ? 'Perkiraan Tanggal Pelaksanaan' : 'Target Event Date'}
                    </label>
                    <input
                      type="date"
                      value={formData.targetDate}
                      onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#A9B8D0] mb-1">
                      {lang === 'id' ? 'Rentang Estimasi Anggaran (Opsional)' : 'Budget Range Parameter'}
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                    >
                      {budgetOptions.map((b, i) => (
                        <option key={i} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-all cursor-pointer shadow-[0_4px_16px_rgba(7,91,255,0.35)] border border-[#19E6FF]/20"
                  >
                    {lang === 'id' ? 'Lanjut: Kebutuhan Teknis →' : 'Next: Technical Needs →'}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: TECHNICAL SPECIFICATIONS */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold text-[#A9B8D0] mb-2">
                    {lang === 'id' ? 'Centang Kebutuhan Produksi & Standardisasi Teknis:' : 'Check Required Production & Technical Services:'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {technicalChecklist.map((item, idx) => {
                      const isChecked = formData.technicalNeeds.includes(item);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleTechnicalNeed(item)}
                          className={`text-left p-3 rounded-xl border transition-all flex items-start gap-2.5 cursor-pointer ${
                            isChecked
                              ? 'bg-[#081A3A] border-[#19E6FF] text-white font-semibold'
                              : 'bg-[#06142E] border-[#008CFF]/25 text-[#A9B8D0] hover:border-[#008CFF]/60'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-[#075BFF] text-white' : 'border border-[#008CFF]/40'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 text-[#19E6FF]" />}
                          </div>
                          <span className="text-xs">{item}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#A9B8D0] mb-1">
                    {lang === 'id' ? 'Catatan Kebutuhan Khusus / Harapan Spesifik' : 'Specific Requirements / Notes'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={lang === 'id' ? 'Contoh: Perlu panggung putar, perizinan Paspampres Ring 1, dan katering 1.200 porsi.' : 'E.g. VIP protocol requirement, simultaneous translation booths, or custom kinetic stage.'}
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-[#A9B8D0] hover:text-white cursor-pointer transition-colors"
                  >
                    ← {lang === 'id' ? 'Kembali' : 'Back'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-5 py-2.5 font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-all cursor-pointer shadow-[0_4px_16px_rgba(7,91,255,0.35)] border border-[#19E6FF]/20"
                  >
                    {lang === 'id' ? 'Lanjut: Data Kontak →' : 'Next: Contact Info →'}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT & PROCUREMENT SUBMISSION */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold text-[#A9B8D0] mb-1">
                    {lang === 'id' ? 'Nama Perusahaan / Kementerian / Lembaga' : 'Company / Ministry / Entity Name'} *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Telkom Indonesia / Bank Indonesia / Kementerian ESDM"
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#A9B8D0] mb-1">
                      {lang === 'id' ? 'Nama PIC / Project Manager' : 'Contact Person (PIC)'} *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Raden Dananjaya"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#A9B8D0] mb-1">
                      {lang === 'id' ? 'Nomor WhatsApp / Hotline PIC' : 'WhatsApp Number'} *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="081234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#A9B8D0] mb-1">
                    {lang === 'id' ? 'Email Resmi Perusahaan / Kedinasan' : 'Corporate / Official Email'} *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="proposals@perusahaan.co.id"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                  />
                </div>

                <div className="p-3.5 bg-[#06142E] rounded-xl border border-[#008CFF]/30 text-xs text-[#A9B8D0] leading-relaxed">
                  {lang === 'id'
                    ? 'Dokumen brief Anda akan diproses secara rahasia (Non-Disclosure). Tim Strategic Production EO Indonesia akan menyiapkan dokumen proposal teknis & estimasi RAB awal.'
                    : 'Your brief details are protected under NDA governance. The EO Indonesia technical team will prepare preliminary 3D staging renders and budgeting.'}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 text-[#A9B8D0] hover:text-white cursor-pointer transition-colors"
                  >
                    ← {lang === 'id' ? 'Kembali' : 'Back'}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl shadow-[0_4px_20px_rgba(7,91,255,0.4)] transition-all cursor-pointer border border-[#19E6FF]/20"
                  >
                    {lang === 'id' ? 'Kirim Brief & Request Proposal' : 'Submit Brief & Request RFP'}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
