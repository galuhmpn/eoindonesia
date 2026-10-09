import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import { EoMonogramLogo } from './EoMonogramLogo';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/contact';
import {
  Menu,
  X,
  Globe,
  FileText,
  Sparkles,
  PhoneCall,
  MessageSquare,
  Home,
  Users,
  Layers,
  Briefcase,
  MapPin,
  BookOpen,
  Mail,
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenRfp: () => void;
  onOpenCompanyProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenRfp,
  onOpenCompanyProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      path: '/',
      label: lang === 'id' ? 'Beranda' : 'Home',
      icon: Home,
    },
    {
      path: '/tentang-kami',
      label: lang === 'id' ? 'Tentang Kami' : 'About Us',
      icon: Users,
    },
    {
      path: '/layanan',
      label: lang === 'id' ? 'Layanan' : 'Services',
      icon: Layers,
    },
    {
      path: '/portofolio',
      label: lang === 'id' ? 'Portofolio' : 'Portfolio',
      icon: Briefcase,
    },
    {
      path: '/wilayah',
      label: lang === 'id' ? 'Wilayah Hub' : 'Coverage',
      icon: MapPin,
    },
    {
      path: '/artikel',
      label: lang === 'id' ? 'Wawasan' : 'Insights',
      icon: BookOpen,
    },
    {
      path: '/kontak',
      label: lang === 'id' ? 'Kontak' : 'Contact',
      icon: PhoneCall,
    },
  ];

  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#06142E]/95 backdrop-blur-md border-b border-[#0A2150] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Zone 1: Electric Blue EO Monogram Logo */}
          <div className="flex items-center shrink-0">
            <Link
              to="/"
              className="text-left group cursor-pointer focus:outline-none transition-transform hover:scale-[1.01]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <EoMonogramLogo size="md" variant="dark" />
            </Link>
          </div>

          {/* Zone 2: Tidy Multi-Page Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-xl bg-[#0A2150]/40 border border-[#008CFF]/15 text-[13px] xl:text-sm font-medium"
            aria-label="Navigasi Utama"
          >
            {navLinks.map((item) => {
              const active = isActiveRoute(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#075BFF]/20 text-[#19E6FF] font-semibold border border-[#19E6FF]/35 shadow-[0_0_12px_rgba(25,230,255,0.15)]'
                      : 'text-[#A9B8D0] hover:text-white hover:bg-[#0A2150]/80'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Clean & Balanced) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-[#A9B8D0] hover:text-white bg-[#0A2150]/60 hover:bg-[#0A2150] border border-[#0A2150] hover:border-[#008CFF]/30 rounded-lg transition-colors cursor-pointer"
              title={lang === 'id' ? 'Ganti ke Bahasa Inggris' : 'Switch to Indonesian'}
            >
              <Globe className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span className="tracking-wide">{lang.toUpperCase()}</span>
            </button>

            {/* Quick Profile Download Button (Desktop xl) */}
            <button
              onClick={onOpenCompanyProfile}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-medium text-[#A9B8D0] hover:text-[#B6F4FF] bg-[#0A2150]/40 hover:bg-[#0A2150] border border-[#0A2150] hover:border-[#008CFF]/30 rounded-lg px-3 py-2 transition-all cursor-pointer"
              title="Unduh Company Profile PDF"
            >
              <FileText className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Profil PDF' : 'Profile PDF'}</span>
            </button>

            {/* Primary CTA (Electric Blue with Refined Glow) */}
            <button
              onClick={onOpenRfp}
              className="inline-flex items-center justify-center gap-1 px-2.5 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#075BFF] to-[#008CFF] hover:from-[#008CFF] hover:to-[#075BFF] active:scale-98 rounded-xl shadow-[0_4px_16px_rgba(7,91,255,0.35)] hover:shadow-[0_4px_22px_rgba(7,91,255,0.55)] transition-all whitespace-nowrap cursor-pointer border border-[#19E6FF]/30 min-h-[40px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span className="hidden sm:inline">Request RFP</span>
              <span className="sm:hidden font-extrabold">RFP</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#A9B8D0] hover:text-white rounded-lg hover:bg-[#0A2150] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#19E6FF]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Polished & Categorized) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#0A2150] bg-[#06142E] px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1 text-sm font-medium">
            {navLinks.map((item) => {
              const active = isActiveRoute(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all cursor-pointer ${
                    active
                      ? 'bg-[#0A2150] text-[#19E6FF] font-semibold border border-[#19E6FF]/30 shadow-[0_0_12px_rgba(25,230,255,0.12)]'
                      : 'text-[#A9B8D0] hover:bg-[#0A2150]/50 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-[#19E6FF]' : 'text-[#008CFF]'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Quick City Hubs in Mobile Drawer */}
          <div className="py-2.5 px-1 border-t border-[#0A2150]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#19E6FF] px-2 mb-2 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Layanan EO per Kota' : 'City Event Hubs'}</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { path: '/eo-jogja', name: 'EO Jogja (HQ)' },
                { path: '/eo-solo', name: 'EO Solo' },
                { path: '/eo-semarang', name: 'EO Semarang' },
                { path: '/eo-surabaya', name: 'EO Surabaya' },
                { path: '/eo-jakarta', name: 'EO Jakarta' },
              ].map((c) => (
                <Link
                  key={c.path}
                  to={c.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-2.5 py-1.5 rounded-lg text-center text-[11px] font-medium border transition-all ${
                    location.pathname === c.path
                      ? 'bg-[#075BFF] text-white border-[#19E6FF]'
                      : 'bg-[#0A2150]/60 text-[#A9B8D0] hover:text-white border-[#0A2150]'
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Actions & Official Contacts in Mobile Drawer */}
          <div className="pt-3 border-t border-[#0A2150] flex flex-col gap-2.5">
            <button
              onClick={() => {
                onToggleLang();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-3.5 py-2.5 text-xs text-[#A9B8D0] bg-[#0A2150]/60 rounded-xl border border-[#0A2150] cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#19E6FF]" />
                <span className="text-white font-medium">
                  {lang === 'id' ? 'Bahasa Indonesia (ID)' : 'English (EN)'}
                </span>
              </span>
              <span className="text-xs font-semibold text-[#19E6FF]">
                {lang === 'id' ? 'Ubah ke EN' : 'Switch to ID'}
              </span>
            </button>

            <button
              onClick={() => {
                onOpenCompanyProfile();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-3.5 py-2.5 text-xs text-[#A9B8D0] hover:text-white bg-[#0A2150]/40 hover:bg-[#0A2150] rounded-xl border border-[#0A2150] cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Unduh Company Profile (PDF)' : 'Download Company Profile (PDF)'}</span>
              </span>
              <span className="text-[#19E6FF]">↗</span>
            </button>

            {/* Direct WhatsApp Callout in Mobile Drawer */}
            <a
              href={getWhatsAppUrl('general', {}, lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold text-white bg-[#075BFF]/30 hover:bg-[#075BFF]/50 border border-[#008CFF]/40 rounded-xl transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                <span>Hotline WhatsApp (+62 853-6082-1111)</span>
              </span>
              <span className="text-xs text-[#19E6FF]">Chat 24/7</span>
            </a>

            {/* Office Summary in Mobile Drawer */}
            <div className="p-3 rounded-xl bg-[#0A2150]/40 border border-[#0A2150] text-[11px] text-[#A9B8D0] space-y-1">
              <div className="text-white font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#19E6FF]" />
                <span>Kantor Pusat (Banguntapan, Bantul, D.I. Yogyakarta)</span>
              </div>
              <p className="text-slate-400 pl-5">Gg. Nuri No.99, Pringgolayan, Banguntapan 55198</p>
              <div className="flex items-center gap-3 pt-1 text-slate-300 pl-5">
                <a href={CONTACT_INFO.phoneTel} className="hover:text-white flex items-center gap-1">
                  <PhoneCall className="w-3 h-3 text-[#19E6FF]" />
                  <span>+62 853-6082-1111</span>
                </a>
                <span>•</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#19E6FF]" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
