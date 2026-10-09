import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { EoMonogramLogo } from './EoMonogramLogo';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/contact';
import { ShieldCheck, PhoneCall, Mail, MapPin, ArrowUpRight, MessageSquare } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenRfp: () => void;
  onOpenCompanyProfile: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenRfp,
  onOpenCompanyProfile,
}) => {
  return (
    <footer className="bg-[#040D1F] text-white pt-16 pb-12 border-t border-[#0A2150] relative overflow-hidden">
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-48 bg-[#075BFF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#0A2150]">
          {/* Column 1: Brand & Entity Profile */}
          <div className="space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <EoMonogramLogo size="md" variant="dark" />
            </Link>
            <p className="text-xs text-[#A9B8D0] leading-relaxed">
              {lang === 'id'
                ? 'Penyedia jasa manajemen acara dan produksi panggung profesional terintegrasi di Indonesia. Solusi end-to-end berstandar K3L ketat untuk korporasi, pemerintah, dan publik.'
                : 'Integrated professional event management and stage production provider in Indonesia. End-to-end solutions under strict OHS safety for corporate, state, and public events.'}
            </p>
            <div className="pt-2 text-[11px] text-[#A9B8D0] space-y-1.5">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-[#19E6FF] shrink-0" />
                <span>EO Indonesia</span>
              </div>
              <div className="font-mono text-[#19E6FF]/90">NIB: 9120003491823 · SK Kemenkumham RI Terdaftar</div>
              <div className="text-[#A9B8D0]">Akreditasi MICE & Sertifikasi K3 Konstruksi Panggung</div>
            </div>
          </div>

          {/* Column 2: Core Services Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-4">
              {lang === 'id' ? 'Layanan Spesialisasi' : 'Core Specializations'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A9B8D0]">
              <li>
                <Link
                  to="/layanan"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Konferensi, Summit & MICE' : 'Conferences, Summits & MICE'}
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Corporate Gathering & RUPS' : 'Corporate Gathering & AGM'}
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Brand Activation & Product Launch' : 'Brand Activation & Launch'}
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Konser Musik & Festival Publik' : 'Music Concerts & Festivals'}
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Upacara Kenegaraan & Protokoler VVIP' : 'State & Protocol Ceremonies'}
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Produksi Virtual & Hybrid XR' : 'Virtual & Hybrid XR Production'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-4">
              {lang === 'id' ? 'Navigasi & Sumber Daya' : 'Navigation & Resources'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A9B8D0]">
              <li>
                <Link
                  to="/tentang-kami"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Tentang Perusahaan & Tim Ahli' : 'About Us & Directorate'}
                </Link>
              </li>
              <li>
                <Link
                  to="/portofolio"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Studi Kasus & Portofolio Acara' : 'Case Studies & Track Record'}
                </Link>
              </li>
              <li>
                <Link
                  to="/wilayah"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Jangkauan 38 Provinsi & Hub Logistik' : '38 Provinces & Logistics Hubs'}
                </Link>
              </li>
              <li className="pt-2 text-[10px] font-bold text-[#19E6FF] uppercase tracking-wider">
                {lang === 'id' ? 'Layanan EO Kota Metropolitan:' : 'Metropolitan Event Hubs:'}
              </li>
              <li className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-[#8EA2C6] pb-1">
                <Link to="/eo-jogja" className="hover:text-[#19E6FF] transition-colors">· EO Jogja (HQ)</Link>
                <Link to="/eo-solo" className="hover:text-[#19E6FF] transition-colors">· EO Solo</Link>
                <Link to="/eo-semarang" className="hover:text-[#19E6FF] transition-colors">· EO Semarang</Link>
                <Link to="/eo-surabaya" className="hover:text-[#19E6FF] transition-colors">· EO Surabaya</Link>
                <Link to="/eo-jakarta" className="hover:text-[#19E6FF] transition-colors col-span-2">· EO Jakarta (Jabodetabek)</Link>
              </li>
              <li>
                <Link
                  to="/artikel"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Wawasan, Regulasi & Panduan' : 'Insights & Regulations'}
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block"
                >
                  {lang === 'id' ? 'Kontak Kantor & Gudang Logistik' : 'Contact & Warehouses'}
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="hover:text-white hover:text-[#19E6FF] transition-colors block text-[#19E6FF]/90 font-medium"
                >
                  {lang === 'id' ? 'Peta Situs XML (Sitemap Generator)' : 'XML Sitemap & Crawler Index'}
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenCompanyProfile}
                  className="hover:text-white hover:text-[#19E6FF] transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>{lang === 'id' ? 'Unduh Company Profile (.PDF)' : 'Download Company Profile (.PDF)'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#19E6FF]" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRfp}
                  className="hover:text-white hover:text-[#19E6FF] transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>{lang === 'id' ? 'Panduan Pengajuan Proposal (RFP)' : 'RFP Submission Guidelines'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#19E6FF]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: HQ & Project Desk Contact (User Designated Data) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-4">
              {lang === 'id' ? 'Kantor Pusat & Kontak Resmi' : 'Headquarters & Official Desk'}
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#A9B8D0] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#19E6FF] shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address.full}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-white">
              <PhoneCall className="w-4 h-4 text-[#19E6FF] shrink-0" />
              <a
                href={CONTACT_INFO.phoneTel}
                className="hover:text-[#19E6FF] transition-colors font-medium"
              >
                Hotline: {CONTACT_INFO.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-white">
              <Mail className="w-4 h-4 text-[#19E6FF] shrink-0" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-[#19E6FF] transition-colors font-mono"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={getWhatsAppUrl('general', {}, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-all shadow-[0_4px_16px_rgba(7,91,255,0.4)] border border-[#19E6FF]/30 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Chat WhatsApp Hotline' : 'WhatsApp Hotline Chat'}</span>
              </a>

              <Link
                to="/kontak"
                className="block w-full py-2 px-3 text-xs font-semibold text-center text-[#B6F4FF] hover:text-white bg-[#0A2150] hover:bg-[#0A2150]/80 rounded-xl transition-all border border-[#008CFF]/30"
              >
                {lang === 'id' ? 'Informasi Lokasi & Janji Temu' : 'Location & Office Visit'}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9B8D0]">
          <div>
            © 2026 EO Indonesia (eoindonesia.id). All rights reserved.
          </div>

          {/* Governance & Privacy Links */}
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="hover:text-white cursor-pointer transition-colors">
              {lang === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}
            </span>
            <span aria-hidden="true" className="text-[#334E7A]">·</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {lang === 'id' ? 'Syarat & Ketentuan' : 'Terms of Service'}
            </span>
            <span aria-hidden="true" className="text-[#334E7A]">·</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {lang === 'id' ? 'Standar Tata Kelola & Anti-Suap' : 'Anti-Bribery & Governance Policy'}
            </span>
            <span aria-hidden="true" className="text-[#334E7A]">·</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#19E6FF] hover:text-white inline-flex items-center gap-1 font-mono transition-colors"
              title="Open raw sitemap.xml"
            >
              <span>sitemap.xml</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
