import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { InnerPageHero } from '../components/InnerPageHero';
import { SeoHead } from '../components/SeoHead';
import {
  PRIMARY_SITEMAP_ROUTES,
  getAllSitemapRoutes,
  generateSitemapXml,
  triggerSitemapDownload,
  CANONICAL_DOMAIN,
  SitemapRoute
} from '../utils/sitemap';
import {
  FileCode,
  Download,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Globe,
  Sparkles,
  Search,
  Layers,
  ArrowRight
} from 'lucide-react';

interface SitemapPageProps {
  lang: Language;
  onOpenRfp: () => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ lang, onOpenRfp }) => {
  const [includeAll, setIncludeAll] = useState(true);
  const [copied, setCopied] = useState(false);
  const [filterCategory, setFilterCategory] = useState<'all' | 'primary' | 'service' | 'article'>('all');

  const routes: SitemapRoute[] = includeAll ? getAllSitemapRoutes() : PRIMARY_SITEMAP_ROUTES;

  const filteredRoutes = routes.filter((r) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'primary') return r.category === 'primary' || r.category === 'region';
    return r.category === filterCategory;
  });

  const xmlContent = generateSitemapXml(CANONICAL_DOMAIN, includeAll);

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div>
      <SeoHead
        title={
          lang === 'id'
            ? 'Peta Situs Resmi & Generator Sitemap XML'
            : 'Official XML Sitemap & Crawler Index'
        }
        description={
          lang === 'id'
            ? 'Peta situs resmi (sitemap.xml) EO Indonesia. Daftar seluruh rute utama /tentang-kami, /layanan, /portofolio, /artikel, /kontak untuk perayapan Googlebot & Bingbot.'
            : 'Official XML Sitemap of EO Indonesia. Comprehensive index of /tentang-kami, /layanan, /portofolio, /artikel, /kontak for search engine crawlability.'
        }
        canonicalPath="/sitemap"
        breadcrumbs={[
          {
            name: lang === 'id' ? 'Beranda' : 'Home',
            path: '/'
          },
          {
            name: lang === 'id' ? 'Peta Situs XML' : 'XML Sitemap',
            path: '/sitemap'
          }
        ]}
      />

      {/* 1. Dedicated Compact Inner Hero */}
      <InnerPageHero
        badge={lang === 'id' ? 'Arsitektur Web & Indeks Perayapan Mesin Pencari' : 'Web Architecture & Search Crawler Index'}
        breadcrumbLabel={lang === 'id' ? 'Peta Situs XML' : 'XML Sitemap'}
        lang={lang}
        title={lang === 'id' ? 'Peta Situs Resmi & Generator' : 'Official XML Sitemap &'}
        titleHighlight="sitemap.xml"
        description={
          lang === 'id'
            ? 'Struktur hierarki rute resmi EO Indonesia yang disusun dinamis sesuai protokol sitemaps.org v0.9, standar Google Search Console, dan integrasi hreflang multibahasa untuk mengoptimalkan peringkat pencarian nasional.'
            : 'Dynamic hierarchy of EO Indonesia canonical routes structured under sitemaps.org v0.9 protocols, Google Search Console compliance, and bilingual hreflang alternates to dominate national event searches.'
        }
      />

      {/* 2. Main Content Section */}
      <section className="py-12 sm:py-16 bg-[#040D1E] relative border-b border-[#0A2150]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Action Hub & Status Card */}
          <div className="bg-[#06142E] border border-[#008CFF]/30 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(4,13,30,0.8)] mb-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#0A2150]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#19E6FF] animate-pulse" />
                  <span className="text-xs font-bold text-[#19E6FF] uppercase tracking-wider">
                    {lang === 'id' ? 'Status Endpoint Live' : 'Live Endpoint Status'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <FileCode className="w-6 h-6 text-[#19E6FF]" />
                  <span>https://eoindonesia.id/sitemap.xml</span>
                </h2>
                <p className="text-xs text-[#A9B8D0]">
                  {lang === 'id'
                    ? 'Mesin perayap (Googlebot, Bingbot, YandexBot) membaca file ini secara berkala untuk memperbarui indeks pencarian organik.'
                    : 'Search engine crawlers fetch this sitemap regularly to discover new pages, updates, and language alternates.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={() => triggerSitemapDownload('sitemap.xml', CANONICAL_DOMAIN)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#075BFF] hover:bg-[#008CFF] text-white text-xs font-bold rounded-xl transition-all shadow-[0_4px_16px_rgba(7,91,255,0.4)] border border-[#19E6FF]/40 cursor-pointer active:scale-95"
                >
                  <Download className="w-4 h-4 text-[#19E6FF]" />
                  <span>{lang === 'id' ? 'Unduh sitemap.xml' : 'Download XML'}</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0A2150] hover:bg-[#0A2150]/80 text-[#B6F4FF] hover:text-white text-xs font-bold rounded-xl transition-all border border-[#008CFF]/40 cursor-pointer active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">{lang === 'id' ? 'Tersalin ke Clipboard!' : 'Copied to Clipboard!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#19E6FF]" />
                      <span>{lang === 'id' ? 'Salin Kode XML' : 'Copy XML'}</span>
                    </>
                  )}
                </button>

                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-transparent hover:bg-[#0A2150] text-[#A9B8D0] hover:text-white text-xs font-medium rounded-xl border border-slate-700 hover:border-[#19E6FF]/40 transition-all cursor-pointer"
                >
                  <span>{lang === 'id' ? 'Buka Raw XML' : 'Open Raw XML'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#19E6FF]" />
                </a>
              </div>
            </div>

            {/* Quick Diagnostic Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 text-xs">
              <div className="bg-[#040D1E]/80 p-3.5 rounded-xl border border-[#0A2150]">
                <div className="text-[#A9B8D0] mb-1">{lang === 'id' ? 'Domain Kanonikal' : 'Canonical Host'}</div>
                <div className="font-semibold text-white font-mono truncate">eoindonesia.id</div>
              </div>
              <div className="bg-[#040D1E]/80 p-3.5 rounded-xl border border-[#0A2150]">
                <div className="text-[#A9B8D0] mb-1">{lang === 'id' ? 'Dukungan Bahasa' : 'Multilingual Tag'}</div>
                <div className="font-semibold text-[#19E6FF] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>ID & EN (Hreflang)</span>
                </div>
              </div>
              <div className="bg-[#040D1E]/80 p-3.5 rounded-xl border border-[#0A2150]">
                <div className="text-[#A9B8D0] mb-1">{lang === 'id' ? 'Encoding XML' : 'XML Encoding'}</div>
                <div className="font-semibold text-white font-mono">UTF-8 Standar</div>
              </div>
              <div className="bg-[#040D1E]/80 p-3.5 rounded-xl border border-[#0A2150]">
                <div className="text-[#A9B8D0] mb-1">{lang === 'id' ? 'Pembaruan Terakhir' : 'Last Modified'}</div>
                <div className="font-semibold text-emerald-400 font-mono">
                  {new Date().toISOString().split('T')[0]}
                </div>
              </div>
            </div>
          </div>

          {/* Filtering and View Toggles */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-[#19E6FF]" />
                <span>
                  {lang === 'id' ? 'Daftar Rute & Skor Prioritas Perayapan' : 'Index Route Catalog & Crawl Priority'}
                </span>
              </h3>
              <p className="text-xs text-[#A9B8D0]">
                {lang === 'id'
                  ? 'Setiap URL dilengkapi skor prioritas (0.1–1.0) dan interval pembaruan untuk memaksimalkan budget perayapan Googlebot.'
                  : 'Each route includes priority weighting (0.1–1.0) and change frequency parameters to optimize crawler efficiency.'}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterCategory === 'all'
                    ? 'bg-[#075BFF] text-white shadow-xs'
                    : 'bg-[#06142E] text-[#A9B8D0] hover:text-white border border-[#0A2150]'
                }`}
              >
                {lang === 'id' ? 'Semua Rute' : 'All Routes'} ({routes.length})
              </button>
              <button
                onClick={() => setFilterCategory('primary')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterCategory === 'primary'
                    ? 'bg-[#075BFF] text-white shadow-xs'
                    : 'bg-[#06142E] text-[#A9B8D0] hover:text-white border border-[#0A2150]'
                }`}
              >
                {lang === 'id' ? 'Rute Utama (5+2)' : 'Primary Routes'} (7)
              </button>
              <button
                onClick={() => setFilterCategory('service')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterCategory === 'service'
                    ? 'bg-[#075BFF] text-white shadow-xs'
                    : 'bg-[#06142E] text-[#A9B8D0] hover:text-white border border-[#0A2150]'
                }`}
              >
                {lang === 'id' ? 'Layanan Teknis' : 'Services'} (5)
              </button>
              <button
                onClick={() => setFilterCategory('article')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterCategory === 'article'
                    ? 'bg-[#075BFF] text-white shadow-xs'
                    : 'bg-[#06142E] text-[#A9B8D0] hover:text-white border border-[#0A2150]'
                }`}
              >
                {lang === 'id' ? 'Artikel & Regulasi' : 'Articles'} (3)
              </button>
            </div>
          </div>

          {/* Route Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {filteredRoutes.map((route, idx) => {
              const fullUrl = `${CANONICAL_DOMAIN}${route.path}`;
              const isPrimary = route.category === 'primary';

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    isPrimary
                      ? 'bg-[#06142E] border-[#008CFF]/30 hover:border-[#19E6FF]/60 hover:shadow-[0_4px_24px_rgba(7,91,255,0.15)]'
                      : 'bg-[#06142E]/70 border-[#0A2150] hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#19E6FF] bg-[#0A2150] px-2.5 py-1 rounded-md border border-[#008CFF]/30">
                        {route.path}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                        {route.changefreq}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[11px] text-[#A9B8D0]">{lang === 'id' ? 'Prioritas' : 'Priority'}:</span>
                      <span
                        className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                          route.priority >= 0.9
                            ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/40'
                            : route.priority >= 0.8
                            ? 'bg-blue-950/80 text-blue-300 border border-blue-800/40'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {route.priority.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5 line-clamp-1">
                    {lang === 'id' ? route.title.id : route.title.en}
                  </h4>

                  <p className="text-xs text-[#A9B8D0] line-clamp-2 mb-4 leading-relaxed">
                    {lang === 'id' ? route.description.id : route.description.en}
                  </p>

                  <div className="pt-3 border-t border-[#0A2150] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="inline-flex items-center gap-1 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>hreflang: id / en</span>
                      </span>
                    </div>

                    <Link
                      to={route.path}
                      className="inline-flex items-center gap-1 text-[#19E6FF] hover:text-white font-semibold transition-colors"
                    >
                      <span>{lang === 'id' ? 'Kunjungi Halaman' : 'Visit Page'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Raw XML Preview Accordion */}
          <div className="bg-[#06142E] border border-[#008CFF]/30 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(4,13,30,0.8)] mb-12">
            <div className="px-6 py-4 bg-[#0A2150]/60 border-b border-[#0A2150] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-[#19E6FF]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  {lang === 'id' ? 'Pratinjau Kode XML Asli (sitemap.xml)' : 'Live XML Source Preview (sitemap.xml)'}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  ({xmlContent.split('\n').length} lines)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="text-xs text-[#19E6FF] hover:text-white flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? (lang === 'id' ? 'Tersalin!' : 'Copied!') : (lang === 'id' ? 'Salin Kode' : 'Copy Code')}</span>
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-[#030914] overflow-x-auto max-h-[360px] overflow-y-auto">
              <pre className="text-[11px] sm:text-xs font-mono text-slate-300 leading-relaxed selection:bg-[#075BFF]">
                {xmlContent}
              </pre>
            </div>
          </div>

          {/* 4. Educational Technical Guide: 4 Pillars of Search Engine Indexing */}
          <div className="bg-gradient-to-br from-[#06142E] via-[#040D1E] to-[#0A2150]/40 border border-[#008CFF]/20 rounded-2xl p-6 sm:p-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-[#19E6FF] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Panduan Teknis SEO' : 'Technical SEO Guide'}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {lang === 'id'
                  ? 'Bagaimana Sitemap XML Memenangkan Peringkat EO Indonesia di Google?'
                  : 'How XML Sitemaps Drive EO Indonesia Rankings on Google'}
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B8D0] leading-relaxed">
                {lang === 'id'
                  ? 'Dalam industri event organizer nasional yang kompetitif, kecepatan perayapan (crawl efficiency) dan kejelasan arsitektur situs menentukan seberapa cepat Google menampilkan halaman layanan kami pada kata kunci bernilai tinggi.'
                  : 'In a competitive national event management landscape, crawl efficiency and architectural clarity dictate how swiftly Google indexes our technical service pages for high-value transactional queries.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#06142E]/80 p-5 rounded-xl border border-[#0A2150]">
                <div className="w-9 h-9 rounded-lg bg-[#075BFF]/20 border border-[#075BFF]/40 flex items-center justify-center text-[#19E6FF] mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  {lang === 'id' ? '1. Sinyal Prioritas & Frekuensi' : '1. Priority & Frequency Signals'}
                </h4>
                <p className="text-xs text-[#A9B8D0] leading-relaxed">
                  {lang === 'id'
                    ? 'Skor prioritas 1.0 pada Beranda dan 0.9 pada Layanan/Portofolio menginstruksikan bot Google untuk mengalokasikan crawl budget utama pada halaman konversi inti.'
                    : 'A 1.0 priority on Home and 0.9 on Services/Portfolio directs Google crawl budget towards core revenue-generating hubs.'}
                </p>
              </div>

              <div className="bg-[#06142E]/80 p-5 rounded-xl border border-[#0A2150]">
                <div className="w-9 h-9 rounded-lg bg-[#075BFF]/20 border border-[#075BFF]/40 flex items-center justify-center text-[#19E6FF] mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  {lang === 'id' ? '2. Hreflang Tag Multibahasa' : '2. Bilingual Hreflang Tags'}
                </h4>
                <p className="text-xs text-[#A9B8D0] leading-relaxed">
                  {lang === 'id'
                    ? 'Setiap entri memuat rel="alternate" hreflang="id" dan hreflang="en", mencegah kanibalisasi konten sekaligus menjangkau korporasi multinasional dan kedutaan besar asing.'
                    : 'Every entry embeds alternate hreflang tags for ID and EN, avoiding duplicate content penalties and capturing multinational corporate clients.'}
                </p>
              </div>

              <div className="bg-[#06142E]/80 p-5 rounded-xl border border-[#0A2150]">
                <div className="w-9 h-9 rounded-lg bg-[#075BFF]/20 border border-[#075BFF]/40 flex items-center justify-center text-[#19E6FF] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  {lang === 'id' ? '3. Auto-Discovery & robots.txt' : '3. Auto-Discovery & robots.txt'}
                </h4>
                <p className="text-xs text-[#A9B8D0] leading-relaxed">
                  {lang === 'id'
                    ? 'Deklarasi otomatis di robots.txt dan tag <link rel="sitemap"> di index.html memastikan crawler menemukan sitemap secara instan tanpa perlu pendaftaran manual.'
                    : 'Auto-discovery tags in HTML headers and robots.txt ensure immediate spider indexing across all major international search engines.'}
                </p>
              </div>
            </div>

            {/* Bottom RFP Banner */}
            <div className="mt-8 pt-6 border-t border-[#0A2150] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#A9B8D0] text-center sm:text-left">
                {lang === 'id'
                  ? 'Perlu proposal teknis acara untuk instansi, kementerian, atau korporasi Anda?'
                  : 'Need a certified technical production proposal for your summit, conference, or gala?'}
              </div>
              <button
                onClick={onOpenRfp}
                className="px-5 py-2.5 bg-[#075BFF] hover:bg-[#008CFF] text-white text-xs font-bold rounded-xl transition-all shadow-[0_4px_16px_rgba(7,91,255,0.4)] border border-[#19E6FF]/40 cursor-pointer"
              >
                {lang === 'id' ? 'Ajukan Proposal RFP Sekarang' : 'Request Proposal (RFP)'}
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
