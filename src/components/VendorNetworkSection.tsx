import React, { useState } from 'react';
import { Language, RegionHub } from '../types';
import { REGION_HUBS } from '../data/content';
import { Warehouse, Truck, CheckCircle2, UserPlus, Sparkles, X } from 'lucide-react';

interface VendorNetworkSectionProps {
  lang: Language;
}

export const VendorNetworkSection: React.FC<VendorNetworkSectionProps> = ({ lang }) => {
  const [selectedHub, setSelectedHub] = useState<RegionHub>(REGION_HUBS[0]);
  const [vendorModalOpen, setVendorModalOpen] = useState(false);
  const [vendorFormSubmitted, setVendorFormSubmitted] = useState(false);
  const [vendorData, setVendorData] = useState({
    companyName: '',
    category: 'Audio Visual & Sound System',
    city: '',
    contactName: '',
    phone: '',
    email: '',
    experienceYears: '3-5 Tahun',
    hasNib: true
  });

  const handleVendorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVendorFormSubmitted(true);
  };

  return (
    <section id="jaringan-vendor" className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#19E6FF]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Ekosistem Sabang Sampai Merauke' : 'National Supply Chain'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {lang === 'id'
                ? 'Jaringan Logistik & Kurasi Vendor Terstandarisasi.'
                : 'National Logistics Hubs & Vetted Vendor Network.'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#A9B8D0]">
              {lang === 'id'
                ? 'Mengatasi tantangan geografis kepulauan Indonesia melalui 4 hub pergudangan regional dan jaringan 600+ rekanan vendor lokal terverifikasi.'
                : 'Overcoming Indonesia’s archipelagic logistics through 4 regional staging hubs and 600+ certified local equipment suppliers.'}
            </p>
          </div>

          <button
            onClick={() => {
              setVendorModalOpen(true);
              setVendorFormSubmitted(false);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-all cursor-pointer whitespace-nowrap self-start md:self-auto shadow-[0_4px_16px_rgba(7,91,255,0.35)] hover:shadow-[0_4px_24px_rgba(7,91,255,0.55)] border border-[#19E6FF]/20"
          >
            <UserPlus className="w-4 h-4 text-[#19E6FF]" />
            <span>{lang === 'id' ? 'Gabung Jaringan Rekanan Vendor' : 'Join Verified Vendor Network'}</span>
          </button>
        </div>

        {/* Regional Hubs Interactive Selector */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {REGION_HUBS.map((hub) => {
            const isSelected = selectedHub.id === hub.id;
            return (
              <button
                key={hub.id}
                onClick={() => setSelectedHub(hub)}
                className={`text-left p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#0A2150] border-[#19E6FF] shadow-[0_4px_25px_rgba(7,91,255,0.35)] ring-1 ring-[#19E6FF]/50'
                    : 'bg-[#0A2150]/60 backdrop-blur-md border-[#008CFF]/20 hover:border-[#008CFF]/60 hover:bg-[#0A2150]/80'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#075BFF] to-[#19E6FF]" />
                )}
                <div className="text-xs font-bold text-[#19E6FF] uppercase tracking-wider">
                  {hub.name.split(':')[0]}
                </div>
                <div className="text-lg font-bold text-white mt-1">
                  {hub.name.split(':')[1]}
                </div>
                <div className="mt-3 text-xs text-[#A9B8D0] flex items-center gap-1.5">
                  <Warehouse className="w-3.5 h-3.5 text-[#19E6FF]" />
                  <span className="truncate">{hub.mainWarehouse}</span>
                </div>
                <div className="mt-2 text-xs font-semibold text-[#19E6FF] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#19E6FF] shadow-[0_0_6px_#19E6FF]" />
                  <span>{hub.activePartners} {lang === 'id' ? 'Mitra Terverifikasi' : 'Certified Partners'}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Regional Inspection Panel */}
        <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#0A2150]/70 backdrop-blur-md border border-[#008CFF]/30 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#06142E]">
            <div>
              <span className="text-xs font-mono text-[#19E6FF] font-bold uppercase">
                {lang === 'id' ? 'Profil Wilayah Terpilih' : 'Selected Regional Profile'}
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">
                {selectedHub.name}
              </h3>
              <p className="text-xs text-[#A9B8D0] mt-1">
                {lang === 'id' ? 'Pusat Distribusi Utama:' : 'Central Logistics Depot:'} <span className="text-white font-medium">{selectedHub.mainWarehouse}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B6F4FF] bg-[#06142E] px-3.5 py-2 rounded-xl border border-[#008CFF]/30">
              <Truck className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Waktu Mobilisasi Cepat: 12–24 Jam Area Utama' : 'Rapid Mobilization: 12–24h in Metro Areas'}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#19E6FF] mb-3">
                {lang === 'id' ? 'Cakupan Provinsi Terlayani:' : 'Covered Provinces:'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedHub.provinces.map((prov, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-white bg-[#06142E] px-3 py-1.5 rounded-lg border border-[#008CFF]/30"
                  >
                    {prov}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#19E6FF] mb-3">
                {lang === 'id' ? 'Spesialisasi Kapasitas Produksi:' : 'Regional Production Specialties:'}
              </h4>
              <ul className="space-y-2">
                {selectedHub.specialties.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#A9B8D0] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#19E6FF] shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Vendor Registration Modal (Dark Electric Blue Theme) */}
        {vendorModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#040D1F]/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#0A2150] text-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-[#008CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-5 sm:p-8 relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#06142E] gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {lang === 'id' ? 'Registrasi Kemitraan Vendor Acara' : 'Event Supplier Partner Registration'}
                  </h3>
                  <p className="text-xs text-[#A9B8D0] mt-0.5">
                    {lang === 'id' ? 'Standardisasi pengadaan eoindonesia.id' : 'Official vendor curation by eoindonesia.id'}
                  </p>
                </div>
                <button
                  onClick={() => setVendorModalOpen(false)}
                  className="text-[#A9B8D0] hover:text-white p-2 rounded-lg hover:bg-[#06142E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
                  aria-label="Tutup Registrasi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {vendorFormSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#081A3A] border border-[#19E6FF] text-[#19E6FF] flex items-center justify-center mx-auto shadow-[0_0_16px_#19E6FF]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {lang === 'id' ? 'Pendaftaran Kemitraan Diterima' : 'Partner Application Received'}
                  </h4>
                  <p className="text-xs text-[#A9B8D0] max-w-md mx-auto leading-relaxed">
                    {lang === 'id'
                      ? 'Terima kasih telah mendaftar. Tim Procurement eoindonesia.id akan memverifikasi legalitas NIB dan portofolio teknis Anda dalam 2x24 jam kerja.'
                      : 'Thank you for applying. The eoindonesia.id Procurement desk will review your business license (NIB) and technical portfolio within 2 working days.'}
                  </p>
                  <button
                    onClick={() => setVendorModalOpen(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-colors cursor-pointer min-h-[44px]"
                  >
                    {lang === 'id' ? 'Selesai' : 'Done'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVendorSubmit} className="mt-4 space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#A9B8D0] mb-1">
                      {lang === 'id' ? 'Nama Perusahaan / Usaha Vendor' : 'Company / Vendor Name'} *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Cahaya Megah Rigging Sound"
                      value={vendorData.companyName}
                      onChange={(e) => setVendorData({ ...vendorData, companyName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#06142E] border border-[#008CFF]/30 text-white placeholder-slate-500 focus:outline-none focus:border-[#19E6FF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#A9B8D0] mb-1">
                        {lang === 'id' ? 'Kategori Spesialisasi' : 'Specialization Category'}
                      </label>
                      <select
                        value={vendorData.category}
                        onChange={(e) => setVendorData({ ...vendorData, category: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#06142E] border border-[#008CFF]/30 text-white focus:outline-none focus:border-[#19E6FF]"
                      >
                        <option value="Audio Visual & Sound System">Audio Visual & Sound System</option>
                        <option value="Rigging, Stage & Scaffolding">Rigging, Stage & Scaffolding</option>
                        <option value="LED Screen & Video Mapping">LED Screen & Video Mapping</option>
                        <option value="Tenda Roder & Pendingin (AC/Misty)">Tenda Roder & Pendingin (AC/Misty)</option>
                        <option value="Genset Silent & Power Supply">Genset Silent & Power Supply</option>
                        <option value="Dekorasi Panggung & Booth Fabrication">Dekorasi Panggung & Booth Fabrication</option>
                        <option value="Katering VIP & Perhotelan">Katering VIP & Perhotelan</option>
                        <option value="Tenaga Keamanan & Medis Darurat">Tenaga Keamanan & Medis Darurat</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#A9B8D0] mb-1">
                        {lang === 'id' ? 'Kota Domisili Warehouse' : 'Warehouse City Location'} *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Surabaya / Balikpapan / Denpasar"
                        value={vendorData.city}
                        onChange={(e) => setVendorData({ ...vendorData, city: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#06142E] border border-[#008CFF]/30 text-white placeholder-slate-500 focus:outline-none focus:border-[#19E6FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#A9B8D0] mb-1">
                        {lang === 'id' ? 'Nama Kontak Person (PIC)' : 'Contact Person (PIC)'} *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Hendra Saputra"
                        value={vendorData.contactName}
                        onChange={(e) => setVendorData({ ...vendorData, contactName: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#06142E] border border-[#008CFF]/30 text-white placeholder-slate-500 focus:outline-none focus:border-[#19E6FF]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#A9B8D0] mb-1">
                        {lang === 'id' ? 'Nomor WhatsApp Aktif' : 'WhatsApp Number'} *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="08123456789"
                        value={vendorData.phone}
                        onChange={(e) => setVendorData({ ...vendorData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#06142E] border border-[#008CFF]/30 text-white placeholder-slate-500 focus:outline-none focus:border-[#19E6FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#A9B8D0] mb-1">
                      {lang === 'id' ? 'Email Resmi Korespondensi' : 'Official Correspondence Email'} *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="mitra@perusahaan.com"
                      value={vendorData.email}
                      onChange={(e) => setVendorData({ ...vendorData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#06142E] border border-[#008CFF]/30 text-white placeholder-slate-500 focus:outline-none focus:border-[#19E6FF]"
                    />
                  </div>

                  <div className="p-3 bg-[#06142E] rounded-xl border border-[#008CFF]/30">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={vendorData.hasNib}
                        onChange={(e) => setVendorData({ ...vendorData, hasNib: e.target.checked })}
                        className="rounded text-[#075BFF] focus:ring-[#075BFF] accent-[#075BFF]"
                      />
                      <span className="text-xs text-[#A9B8D0] font-medium">
                        {lang === 'id'
                          ? 'Memiliki Nomor Induk Berusaha (NIB) / Legalitas Usaha yang Masih Berlaku'
                          : 'Possesses valid Indonesian Business Identification Number (NIB) / legal credentials'}
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#06142E] flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setVendorModalOpen(false)}
                      className="px-4 py-2 text-[#A9B8D0] hover:text-white transition-colors cursor-pointer"
                    >
                      {lang === 'id' ? 'Batal' : 'Cancel'}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl shadow-[0_4px_16px_rgba(7,91,255,0.35)] transition-all cursor-pointer border border-[#19E6FF]/20"
                    >
                      {lang === 'id' ? 'Kirim Pengajuan Kemitraan' : 'Submit Partner Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
