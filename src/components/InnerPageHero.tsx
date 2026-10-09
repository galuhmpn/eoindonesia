import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, Home } from 'lucide-react';
import { Language } from '../types';

interface InnerPageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  breadcrumbLabel: string;
  lang?: Language;
  parentBreadcrumb?: {
    name: string;
    path: string;
  };
}

export const InnerPageHero: React.FC<InnerPageHeroProps> = ({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbLabel,
  lang = 'id',
  parentBreadcrumb,
}) => {
  const homeLabel = lang === 'en' ? 'Home' : 'Beranda';

  return (
    <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-18 bg-[#06142E] text-white overflow-hidden border-b border-[#0A2150]">
      {/* Ambient Lighting in Dark Hero Header */}
      <div className="absolute top-0 inset-x-0 h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[50rem] h-[24rem] bg-gradient-to-b from-[#0A2150] via-[#075BFF]/15 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#19E6FF]/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#075BFF]/10 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation Trail */}
        <nav
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A2150]/70 border border-[#008CFF]/25 text-xs text-[#A9B8D0] mb-5 backdrop-blur-md shadow-sm"
          aria-label="Breadcrumb"
        >
          {/* Step 1: Root / Home Link */}
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-white text-[#A9B8D0] transition-colors group"
            title={lang === 'en' ? 'Back to Home' : 'Kembali ke Halaman Beranda Utama'}
          >
            <Home className="w-3.5 h-3.5 text-[#008CFF] group-hover:text-[#19E6FF] transition-colors" />
            <span className="font-medium group-hover:underline">{homeLabel}</span>
          </Link>

          {/* Optional Step 2: Parent Category */}
          {parentBreadcrumb && (
            <>
              <ChevronRight className="w-3 h-3 text-[#334E7A]" />
              <Link
                to={parentBreadcrumb.path}
                className="hover:text-white text-[#A9B8D0] transition-colors font-medium hover:underline"
              >
                {parentBreadcrumb.name}
              </Link>
            </>
          )}

          {/* Step 3: Current Page Target Indicator */}
          <ChevronRight className="w-3 h-3 text-[#334E7A]" />
          <span className="text-[#19E6FF] font-semibold flex items-center gap-1" aria-current="page">
            <span className="w-1.5 h-1.5 rounded-full bg-[#19E6FF] shadow-[0_0_6px_#19E6FF]" />
            {breadcrumbLabel}
          </span>
        </nav>

        {/* Primary Page H1 - Langsung di bawah breadcrumb tanpa karakter lain di atasnya */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance max-w-4xl">
          {title}
          {titleHighlight && (
            <>
              {' '}
              <span className="bg-gradient-to-r from-[#075BFF] via-[#008CFF] to-[#19E6FF] bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            </>
          )}
        </h1>

        {/* Kicker Badge (Berada di bawah H1) */}
        {badge && (
          <div className="flex mt-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A2150]/90 border border-[#008CFF]/30 text-[#19E6FF] text-xs font-semibold uppercase tracking-wider shadow-[0_0_14px_rgba(25,230,255,0.15)]">
              <Sparkles className="w-3 h-3 text-[#19E6FF]" />
              <span>{badge}</span>
            </div>
          </div>
        )}

        {/* Supporting Narrative */}
        <p className="mt-4 text-base sm:text-lg text-[#A9B8D0] leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
};
