import React from 'react';
import { ListTree, ChevronDown } from 'lucide-react';
import { Language } from '../types';

export interface TocItem {
  id: string;
  label: string;
}

interface PageQuickTocProps {
  items: TocItem[];
  title?: string;
  lang?: Language;
}

export const PageQuickToc: React.FC<PageQuickTocProps> = ({
  items,
  title,
  lang = 'id',
}) => {
  const defaultTitle = lang === 'id' ? 'Daftar Isi Halaman (Lompat Cepat):' : 'Table of Contents (Jump to Section):';

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update browser URL hash without jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Daftar Isi Halaman"
      className="bg-[#0A2150]/70 backdrop-blur-md border-b border-[#008CFF]/20 py-3 px-4 sm:px-6 lg:px-8 relative z-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-2.5 md:gap-4 justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-[#19E6FF] uppercase tracking-wider shrink-0">
          <ListTree className="w-3.5 h-3.5 text-[#19E6FF]" />
          <span>{title || defaultTitle}</span>
        </div>

        {/* Scrollable pill track on mobile, flex on desktop */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none no-scrollbar -mx-2 px-2 md:mx-0 md:px-0">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className="text-[11px] sm:text-xs font-medium text-[#A9B8D0] hover:text-white bg-[#06142E]/80 hover:bg-[#075BFF]/30 border border-[#008CFF]/25 hover:border-[#19E6FF]/50 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all shrink-0 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
