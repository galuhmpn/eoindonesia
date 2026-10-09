import React, { useState } from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { InnerPageHero } from '../components/InnerPageHero';
import { PageQuickToc } from '../components/PageQuickToc';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/contact';
import { MapPin, PhoneCall, Mail, Clock, MessageSquare, Send, CheckCircle2, Building2, ShieldAlert, Sparkles } from 'lucide-react';

interface ContactPageProps {
  lang: Language;
  onOpenRfp: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  onOpenRfp
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    eventType: 'Konferensi / MICE',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const tocItems = [
    { id: 'kantor-pusat', label: lang === 'id' ? 'Kantor Pusat & Hotline 24/7' : 'Headquarters & Hotline' },
    { id: 'formulir-pesan', label: lang === 'id' ? 'Formulir Janji Temu & Konsultasi' : 'Inquiry & Consultation Form' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const customMessage = `Halo Tim EO Indonesia (Kantor Pusat Bantul, Yogyakarta),

Saya ingin berkonsultasi mengenai rencana acara:
- Nama: ${formData.name || 'PIC'}
- Organisasi: ${formData.organization || '-'}
- Kontak: ${formData.phone || '-'} / ${formData.email || '-'}
- Jenis Acara: ${formData.eventType}
- Pesan: ${formData.message || 'Mohon info ketersediaan jadwal konsultasi'}

Terima kasih!`;

    const encoded = encodeURIComponent(customMessage);
    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-[#06142E]">
      <SeoHead
        title={lang === 'id' ? 'Kontak Kantor Pusat & Hotline Proyek 24/7' : 'Contact Headquarters & 24/7 Production Hotline'}
        description="Hubungi Kantor Pusat EO Indonesia: Gg. Nuri No.99, Pringgolayan, Banguntapan, Bantul, D.I. Yogyakarta 55198. Hotline/WhatsApp: +62 853-6082-1111, Email: eoindonesia.id@gmail.com."
        keywords="Kontak EO Indonesia, Alamat Kantor EO Yogyakarta, Nomor Telepon Event Organizer, Hotline EO 24 Jam, WhatsApp EO Indonesia"
        canonicalPath="/kontak"
        breadcrumbs={[
          { name: lang === 'id' ? 'Kontak' : 'Contact', path: '/kontak' }
        ]}
      />

      {/* 1. Dedicated Compact Inner Page Hero */}
      <InnerPageHero
        badge={lang === 'id' ? 'Kontak & Hub Produksi' : 'Contact & Production Hubs'}
        breadcrumbLabel={lang === 'id' ? 'Kontak & Lokasi' : 'Contact'}
        lang={lang}
        title={lang === 'id' ? 'Hubungi Kami & Buat' : 'Connect with Our'}
        titleHighlight={lang === 'id' ? 'Janji Temu Produksi.' : 'Production Team.'}
        description={
          lang === 'id'
            ? 'Kantor Pusat kami berkedudukan di Banguntapan, Bantul, D.I. Yogyakarta, melayani koordinasi produksi acara berskala nasional di 38 provinsi didukung hotline operasional 24 jam.'
            : 'Our Headquarters is based in Banguntapan, Bantul, D.I. Yogyakarta, driving national event production across 38 provinces backed by our 24/7 technical hotline.'
        }
      />

      {/* SEO & Fast Navigation: Page Table of Contents */}
      <PageQuickToc
        items={tocItems}
        lang={lang}
        title={lang === 'id' ? 'Daftar Isi Kontak:' : 'Contact Quick Navigation:'}
      />

      <section className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden">
        {/* Ambient Lighting */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#19E6FF]/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: HQ Cards & Direct Hotlines */}
            <div id="kantor-pusat" className="lg:col-span-5 space-y-6 scroll-mt-14">
              {/* Primary Headquarters Card */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#0A2150]/70 backdrop-blur-md border border-[#008CFF]/30 shadow-2xl space-y-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#075BFF]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 text-xs font-mono text-[#19E6FF] font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-[#19E6FF]" />
                  <span>KANTOR PUSAT UTAMA (HQ)</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    EO Indonesia
                  </h3>
                  <div className="mt-3 flex items-start gap-2.5 text-xs text-[#A9B8D0] leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
                    <span>
                      {CONTACT_INFO.address.full}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#06142E] space-y-3 text-xs">
                  <div className="flex items-center gap-2.5 text-white">
                    <PhoneCall className="w-4 h-4 text-[#19E6FF] shrink-0" />
                    <div>
                      <span className="text-[#A9B8D0] block text-[11px]">Hotline Proyek & Telepon:</span>
                      <a href={CONTACT_INFO.phoneTel} className="font-bold hover:text-[#19E6FF] transition-colors">
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-white">
                    <Mail className="w-4 h-4 text-[#19E6FF] shrink-0" />
                    <div>
                      <span className="text-[#A9B8D0] block text-[11px]">Email Resmi Pengadaan:</span>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="font-mono font-bold hover:text-[#19E6FF] transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-[#A9B8D0]">
                    <Clock className="w-4 h-4 text-[#19E6FF] shrink-0" />
                    <span>{CONTACT_INFO.hours}</span>
                  </div>
                </div>

                {/* Direct WhatsApp Buttons with Tailored Greetings */}
                <div className="pt-3 space-y-2.5">
                  <a
                    href={getWhatsAppUrl('contact_office_visit', {}, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-all shadow-[0_4px_16px_rgba(7,91,255,0.4)] border border-[#19E6FF]/30 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                    <span>{lang === 'id' ? 'Chat WhatsApp Janji Temu Kantor' : 'WhatsApp Office Appointment'}</span>
                  </a>

                  <a
                    href={getWhatsAppUrl('emergency_hotline', {}, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-rose-300 hover:text-white bg-rose-950/40 hover:bg-rose-900/60 rounded-xl transition-all border border-rose-500/30 cursor-pointer"
                  >
                    <ShieldAlert className="w-4 h-4 text-rose-400" />
                    <span>{lang === 'id' ? 'Hotline Darurat Lapangan 24/7' : '24/7 Emergency Field Hotline'}</span>
                  </a>
                </div>
              </div>

              {/* Legal Credential Badge */}
              <div className="p-5 rounded-2xl bg-[#0A2150]/40 border border-[#008CFF]/20 text-xs text-[#A9B8D0] space-y-1">
                <div className="text-white font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
                  <span>Kepatuhan Tata Kelola & Pengadaan</span>
                </div>
                <div>NIB: 9120003491823 · SK Kemenkumham Terdaftar</div>
                <div>Wilayah Cakupan: 38 Provinsi di Seluruh Indonesia</div>
              </div>
            </div>

            {/* Right Column: Inquiry & Brief Form */}
            <div id="formulir-pesan" className="lg:col-span-7 scroll-mt-14">
              <div className="p-7 sm:p-9 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/25 shadow-2xl">
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-1">
                    {lang === 'id' ? 'Kirim Pesan Langsung' : 'Direct Project Inquiry'}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {lang === 'id' ? 'Konsultasi Perencanaan Acara' : 'Consult on Your Upcoming Event'}
                  </h3>
                  <p className="text-xs text-[#A9B8D0] mt-1">
                    {lang === 'id'
                      ? 'Isi formulir ringkas di bawah ini atau teruskan langsung ke nomor WhatsApp resmi kami (+62 853-6082-1111).'
                      : 'Fill in the quick form below or forward directly to our official WhatsApp desk (+62 853-6082-1111).'}
                  </p>
                </div>

                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#081A3A] border border-[#19E6FF] text-[#19E6FF] flex items-center justify-center mx-auto shadow-[0_0_20px_#19E6FF]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      {lang === 'id' ? 'Pesan Konsultasi Siap Diteruskan!' : 'Inquiry Ready to Dispatch!'}
                    </h4>
                    <p className="text-xs text-[#A9B8D0] max-w-md mx-auto leading-relaxed">
                      {lang === 'id'
                        ? 'Klik tombol di bawah ini untuk langsung membuka WhatsApp Hotline resmi dengan pesan yang telah disusun secara rapi.'
                        : 'Click below to launch the official WhatsApp Hotline with your pre-formatted message.'}
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleWhatsAppSend}
                        className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl shadow-[0_4px_20px_rgba(7,91,255,0.4)] transition-all cursor-pointer border border-[#19E6FF]/30"
                      >
                        <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                        <span>{lang === 'id' ? 'Buka WhatsApp (6285360821111)' : 'Launch WhatsApp Desk'}</span>
                      </button>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-4 py-3 text-xs font-semibold text-[#A9B8D0] hover:text-white cursor-pointer"
                      >
                        {lang === 'id' ? 'Tulis Pesan Baru' : 'Write New Message'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#A9B8D0] mb-1">
                          {lang === 'id' ? 'Nama Anda / PIC Acara' : 'Your Name / PIC'} *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Raden Dananjaya"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-[#A9B8D0] mb-1">
                          {lang === 'id' ? 'Perusahaan / Lembaga' : 'Organization / Company'} *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Telkom Indonesia / Kementerian ESDM"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#A9B8D0] mb-1">
                          {lang === 'id' ? 'Nomor WhatsApp Aktif' : 'WhatsApp Number'} *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="08123456789"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-[#A9B8D0] mb-1">
                          {lang === 'id' ? 'Email Resmi' : 'Official Email'} *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="pic@perusahaan.co.id"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#A9B8D0] mb-1">
                        {lang === 'id' ? 'Kategori Acara yang Direncanakan' : 'Planned Event Category'}
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                      >
                        <option value="Konferensi / Summit MICE">Konferensi / Summit MICE</option>
                        <option value="Corporate Gathering & Gala">Corporate Gathering & Gala</option>
                        <option value="Brand Activation & Peluncuran Produk">Brand Activation & Peluncuran Produk</option>
                        <option value="Konser Musik & Festival Publik">Konser Musik & Festival Publik</option>
                        <option value="Upacara Kenegaraan & Protokoler VVIP">Upacara Kenegaraan & Protokoler VVIP</option>
                        <option value="Virtual & Hybrid XR Production">Virtual & Hybrid XR Production</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#A9B8D0] mb-1">
                        {lang === 'id' ? 'Catatan Konsep / Pertanyaan Anda' : 'Notes / Inquiry Details'}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={lang === 'id' ? 'Ceritakan gambaran singkat acara Anda: tanggal target, perkiraan jumlah tamu, dan kebutuhan panggung.' : 'Briefly describe your event targets, attendance expectations, and staging ideas.'}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#008CFF]/30 bg-[#06142E] text-white focus:outline-none focus:border-[#19E6FF]"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-[11px] text-[#A9B8D0]">
                        Respon cepat: &lt; 2 jam kerja via WhatsApp / Hotline.
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl shadow-[0_4px_20px_rgba(7,91,255,0.4)] transition-all cursor-pointer border border-[#19E6FF]/30"
                      >
                        <Send className="w-4 h-4 text-[#19E6FF]" />
                        <span>{lang === 'id' ? 'Kirim Brief ke WhatsApp' : 'Dispatch Brief to WhatsApp'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
