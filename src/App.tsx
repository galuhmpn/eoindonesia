import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { RfpModal } from './components/RfpModal';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { RegionalHubPage } from './pages/RegionalHubPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { SitemapPage } from './pages/SitemapPage';
import { CityHubLandingPage } from './pages/CityHubLandingPage';
import { getWhatsAppUrl, CONTACT_INFO } from './utils/contact';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [rfpOpen, setRfpOpen] = useState(false);
  const [rfpInitialService, setRfpInitialService] = useState('');
  const [companyProfileOpen, setCompanyProfileOpen] = useState(false);

  const toggleLang = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const handleOpenRfpWithService = (serviceTitle: string = '') => {
    setRfpInitialService(serviceTitle);
    setRfpOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#06142E] text-slate-100 flex flex-col font-sans selection:bg-[#075BFF] selection:text-white antialiased">
        {/* Sticky 3-Zone Electric Blue Navigation Bar */}
        <Navbar
          lang={lang}
          onToggleLang={toggleLang}
          onOpenRfp={() => handleOpenRfpWithService('')}
          onOpenCompanyProfile={() => setCompanyProfileOpen(true)}
        />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  lang={lang}
                  onOpenRfp={() => handleOpenRfpWithService('')}
                  onOpenCompanyProfile={() => setCompanyProfileOpen(true)}
                  onSelectServiceForRfp={handleOpenRfpWithService}
                />
              }
            />
            <Route
              path="/tentang-kami"
              element={
                <AboutPage
                  lang={lang}
                  onOpenRfp={() => handleOpenRfpWithService('')}
                  onOpenCompanyProfile={() => setCompanyProfileOpen(true)}
                />
              }
            />
            <Route
              path="/layanan"
              element={
                <ServicesPage
                  lang={lang}
                  onOpenRfp={() => handleOpenRfpWithService('')}
                  onSelectServiceForRfp={handleOpenRfpWithService}
                />
              }
            />
            <Route
              path="/portofolio"
              element={
                <PortfolioPage
                  lang={lang}
                  onOpenRfp={() => handleOpenRfpWithService('')}
                  onOpenRfpForProject={handleOpenRfpWithService}
                />
              }
            />
            <Route
              path="/wilayah"
              element={
                <RegionalHubPage
                  lang={lang}
                  onOpenRfp={() => handleOpenRfpWithService('')}
                />
              }
            />
            <Route
              path="/artikel"
              element={
                <InsightsPage
                  lang={lang}
                  onOpenRfp={() => handleOpenRfpWithService('')}
                />
              }
            />
            <Route
              path="/kontak"
              element={
                <ContactPage
                  lang={lang}
                  onOpenRfp={() => handleOpenRfpWithService('')}
                />
              }
            />
            {/* Dedicated Regional Hub Landing Pages for Target Metropolitan Cities */}
            <Route
              path="/eo-jogja"
              element={
                <CityHubLandingPage
                  lang={lang}
                  onOpenRfp={handleOpenRfpWithService}
                  cityParam="eo-jogja"
                />
              }
            />
            <Route
              path="/eo-solo"
              element={
                <CityHubLandingPage
                  lang={lang}
                  onOpenRfp={handleOpenRfpWithService}
                  cityParam="eo-solo"
                />
              }
            />
            <Route
              path="/eo-semarang"
              element={
                <CityHubLandingPage
                  lang={lang}
                  onOpenRfp={handleOpenRfpWithService}
                  cityParam="eo-semarang"
                />
              }
            />
            <Route
              path="/eo-surabaya"
              element={
                <CityHubLandingPage
                  lang={lang}
                  onOpenRfp={handleOpenRfpWithService}
                  cityParam="eo-surabaya"
                />
              }
            />
            <Route
              path="/eo-jakarta"
              element={
                <CityHubLandingPage
                  lang={lang}
                  onOpenRfp={handleOpenRfpWithService}
                  cityParam="eo-jakarta"
                />
              }
            />
            <Route
              path="/wilayah/:citySlug"
              element={
                <CityHubLandingPage
                  lang={lang}
                  onOpenRfp={handleOpenRfpWithService}
                />
              }
            />
            <Route
              path="/sitemap"
              element={
                <SitemapPage
                  lang={lang}
                  onOpenRfp={() => handleOpenRfpWithService('')}
                />
              }
            />
            <Route
              path="/peta-situs"
              element={
                <SitemapPage
                  lang={lang}
                  onOpenRfp={() => handleOpenRfpWithService('')}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Deep Midnight Navy Corporate Footer */}
        <Footer
          lang={lang}
          onOpenRfp={() => handleOpenRfpWithService('')}
          onOpenCompanyProfile={() => setCompanyProfileOpen(true)}
        />

        {/* Interactive RFP Multi-Step Modal */}
        <RfpModal
          isOpen={rfpOpen}
          onClose={() => setRfpOpen(false)}
          lang={lang}
          initialService={rfpInitialService}
        />

        {/* Official Company Profile Deck Modal */}
        <CompanyProfileModal
          isOpen={companyProfileOpen}
          onClose={() => setCompanyProfileOpen(false)}
          lang={lang}
        />

        {/* Floating Quick Action Hub (Bottom Right) */}
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
          {/* Quick Call Button */}
          <a
            href={CONTACT_INFO.phoneTel}
            title={`Hubungi Hotline ${CONTACT_INFO.phoneDisplay}`}
            className="hidden sm:flex items-center justify-center w-11 h-11 bg-[#0A2150] hover:bg-[#075BFF] text-white rounded-full shadow-[0_4px_24px_rgba(6,20,46,0.6)] border border-[#008CFF]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#19E6FF]" />
          </a>

          {/* Direct WhatsApp Consultation Button with Tailored Greeting */}
          <a
            href={getWhatsAppUrl('floating', {}, lang)}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat WhatsApp Resmi (+62 853-6082-1111)"
            className="flex items-center gap-2 px-4 py-2.5 bg-[#075BFF] hover:bg-[#008CFF] text-white text-xs font-bold rounded-full shadow-[0_4px_24px_rgba(7,91,255,0.45)] border border-[#19E6FF]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
            <span>{lang === 'id' ? 'WhatsApp Hotline' : 'WhatsApp Desk'}</span>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}
