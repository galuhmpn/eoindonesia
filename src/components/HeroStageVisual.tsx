import React from 'react';

interface HeroStageVisualProps {
  className?: string;
}

export const HeroStageVisual: React.FC<HeroStageVisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#0A2150] via-[#06142E] to-[#040C1D] border border-[#008CFF]/25 shadow-[0_12px_40px_rgba(6,20,46,0.6)] ${className}`}>
      {/* Ambient Radial Illumination (Electric Blue & Cyan) */}
      <div className="absolute inset-0 pointer-events-none opacity-80">
        <div className="absolute -top-24 left-1/4 w-[32rem] h-[32rem] bg-[#075BFF]/25 rounded-full blur-[100px]" />
        <div className="absolute -top-20 right-1/4 w-[28rem] h-[28rem] bg-[#19E6FF]/20 rounded-full blur-[90px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-t from-transparent via-[#075BFF]/10 to-transparent blur-2xl" />
      </div>

      {/* SVG Architectural Event Stage Rigging & Visuals */}
      <svg
        viewBox="0 0 1000 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl select-none"
      >
        <defs>
          {/* Luminous High-Tech Gradients */}
          <linearGradient id="ledScreenBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06142E" />
            <stop offset="35%" stopColor="#0A2150" />
            <stop offset="70%" stopColor="#075BFF" />
            <stop offset="100%" stopColor="#19E6FF" />
          </linearGradient>

          <linearGradient id="beamElectricCyan" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(25, 230, 255, 0.6)" />
            <stop offset="45%" stopColor="rgba(7, 91, 255, 0.22)" />
            <stop offset="100%" stopColor="rgba(7, 91, 255, 0)" />
          </linearGradient>

          <linearGradient id="beamElectricBlue" x1="100%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 140, 255, 0.6)" />
            <stop offset="45%" stopColor="rgba(7, 91, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(7, 91, 255, 0)" />
          </linearGradient>

          <linearGradient id="beamCenterGlow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(182, 244, 255, 0.55)" />
            <stop offset="100%" stopColor="rgba(25, 230, 255, 0)" />
          </linearGradient>

          <linearGradient id="eoRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#075BFF" />
            <stop offset="50%" stopColor="#008CFF" />
            <stop offset="100%" stopColor="#19E6FF" />
          </linearGradient>

          <pattern id="trussPatternSteel" width="24" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="24" y2="20" stroke="#334E7A" strokeWidth="1" opacity="0.8" />
            <line x1="24" y1="0" x2="0" y2="20" stroke="#334E7A" strokeWidth="1" opacity="0.8" />
            <line x1="0" y1="0" x2="24" y2="0" stroke="#476599" strokeWidth="1.5" />
            <line x1="0" y1="20" x2="24" y2="20" stroke="#476599" strokeWidth="1.5" />
          </pattern>

          <pattern id="ledGridPatternFine" width="5" height="5" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" fill="rgba(25,230,255,0.08)" rx="0.5" />
          </pattern>
        </defs>

        {/* Volumetric Spot Light Beams */}
        <polygon points="180,45 50,420 280,420" fill="url(#beamElectricCyan)" />
        <polygon points="320,45 200,420 440,420" fill="url(#beamElectricCyan)" opacity="0.85" />
        <polygon points="500,45 360,420 640,420" fill="url(#beamCenterGlow)" />
        <polygon points="680,45 560,420 800,420" fill="url(#beamElectricBlue)" opacity="0.85" />
        <polygon points="820,45 720,420 950,420" fill="url(#beamElectricBlue)" />

        {/* Upper Rigging Aluminum Structure */}
        <rect x="70" y="35" width="860" height="20" fill="url(#trussPatternSteel)" />
        <rect x="90" y="55" width="820" height="12" fill="url(#trussPatternSteel)" />

        {/* Vertical Rigging Towers */}
        <rect x="80" y="55" width="16" height="340" fill="url(#trussPatternSteel)" />
        <rect x="904" y="55" width="16" height="340" fill="url(#trussPatternSteel)" />

        {/* Moving Head Spot Lights (Luminous Cyan / Electric Blue Lenses) */}
        {[180, 260, 340, 420, 500, 580, 660, 740, 820].map((cx, i) => (
          <g key={i}>
            <rect x={cx - 10} y="47" width="20" height="14" rx="3" fill="#0A2150" stroke="#075BFF" strokeWidth="1" />
            <circle
              cx={cx}
              cy={63}
              r={i % 2 === 0 ? 5.5 : 4.5}
              fill={i % 2 === 0 ? '#19E6FF' : '#008CFF'}
              filter={i % 2 === 0 ? 'drop-shadow(0 0 10px #19E6FF)' : 'drop-shadow(0 0 8px #008CFF)'}
            />
            <line x1={cx - 8} y1="47" x2={cx + 8} y2="47" stroke="#334E7A" strokeWidth="2" />
          </g>
        ))}

        {/* Line Array Speaker Clusters (Left & Right Stacks) */}
        <g id="lineArrayLeft">
          <rect x="110" y="80" width="26" height="16" rx="2" fill="#06142E" stroke="#1D3B6C" />
          <rect x="112" y="100" width="26" height="16" rx="2" fill="#06142E" stroke="#1D3B6C" />
          <rect x="114" y="120" width="26" height="16" rx="2" fill="#06142E" stroke="#1D3B6C" />
          <rect x="118" y="140" width="24" height="16" rx="2" fill="#06142E" stroke="#1D3B6C" />
          <rect x="122" y="160" width="22" height="16" rx="2" fill="#06142E" stroke="#1D3B6C" />
          <line x1="123" y1="55" x2="123" y2="80" stroke="#075BFF" strokeWidth="2" opacity="0.7" />
        </g>
        <g id="lineArrayRight">
          <rect x="864" y="80" width="26" height="16" rx="2" fill="#06142E" stroke="#1D3B6C" />
          <rect x="862" y="100" width="26" height="16" rx="2" fill="#06142E" stroke="#1D3B6C" />
          <rect x="860" y="120" width="26" height="16" rx="2" fill="#06142E" stroke="#1D3B6C" />
          <rect x="858" y="140" width="24" height="16" rx="2" fill="#06142E" stroke="#1D3B6C" />
          <rect x="856" y="160" width="22" height="16" rx="2" fill="#06142E" stroke="#1D3B6C" />
          <line x1="877" y1="55" x2="877" y2="80" stroke="#075BFF" strokeWidth="2" opacity="0.7" />
        </g>

        {/* Central Curved Giant LED Video Wall */}
        <g id="centerLedWall">
          {/* Bezel Frame */}
          <rect x="170" y="110" width="660" height="220" rx="10" fill="#030B1A" stroke="#0A2150" strokeWidth="2.5" />
          {/* Screen Content */}
          <rect x="176" y="116" width="648" height="208" rx="8" fill="url(#ledScreenBrandGrad)" />
          {/* Pixel Grid Pattern */}
          <rect x="176" y="116" width="648" height="208" fill="url(#ledGridPatternFine)" rx="8" />

          {/* Electric Blue Kinetic Arcs */}
          <path d="M 200,240 Q 500,150 800,240" stroke="rgba(25,230,255,0.4)" strokeWidth="3" fill="none" />
          <path d="M 220,260 Q 500,180 780,260" stroke="rgba(7,91,255,0.5)" strokeWidth="2" fill="none" />

          {/* Large EO Monogram Shield Silhouette on Screen */}
          <g transform="translate(470, 130) scale(0.9)">
            {/* Monogram E */}
            <path
              d="M 12 6 H 26 C 27 6 28 7 28 8 C 28 9 27 10 26 10 H 17 V 15 H 24 C 25 15 26 16 26 17 C 26 18 25 19 24 19 H 17 V 26 H 26 C 27 26 28 27 28 28 C 28 29 27 30 26 30 H 12 C 11 30 10 29 10 28 V 8 C 10 7 11 6 12 6 Z"
              fill="url(#eoRibbonGrad)"
            />
            {/* Monogram O */}
            <path
              d="M 38 6 C 45 6 50 11.5 50 18 C 50 24.5 45 30 38 30 C 33 30 29 27 28 23 C 27.6 21.8 28.5 21 29.8 21 C 30.8 21 31.6 21.6 32 22.5 C 32.8 24.8 35 26.2 38 26.2 C 42.5 26.2 45.5 22.5 45.5 18 C 45.5 13.5 42.5 9.8 38 9.8 C 35 9.8 32.8 11.2 32 13.5 C 31.6 14.4 30.8 15 29.8 15 C 28.5 15 27.6 14.2 28 13 C 29 9 33 6 38 6 Z"
              fill="url(#eoRibbonGrad)"
            />
            <circle cx="28" cy="18" r="1.5" fill="#19E6FF" filter="drop-shadow(0 0 4px #19E6FF)" />
          </g>

          {/* Typography on LED Screen */}
          <text x="500" y="196" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="800" letterSpacing="3">
            EO INDONESIA
          </text>
          <text x="500" y="218" textAnchor="middle" fill="#19E6FF" fontSize="12" fontWeight="700" letterSpacing="2">
            MENHUBUNGKAN GAGASAN · MERAYAKAN PENGALAMAN
          </text>
          <text x="500" y="238" textAnchor="middle" fill="#B6F4FF" fontSize="10" letterSpacing="1.5" opacity="0.9">
            STANDARDISASI NASIONAL MICE & PRODUCTION
          </text>

          {/* Modern Luminous Wave Trajectory */}
          <path
            d="M 230 268 Q 300 250 400 270 T 500 260 T 630 270 T 770 255"
            fill="none"
            stroke="#19E6FF"
            strokeWidth="2.5"
            strokeDasharray="5 5"
            opacity="0.9"
            filter="drop-shadow(0 0 6px #19E6FF)"
          />
        </g>

        {/* Stage Platform Elevation */}
        <polygon points="120,380 880,380 940,430 60,430" fill="#0A2150" stroke="#008CFF" strokeWidth="1" strokeOpacity="0.5" />
        <polygon points="60,430 940,430 940,460 60,460" fill="#040C1D" />

        {/* Stage Front Apron Fascia */}
        <rect x="80" y="435" width="840" height="20" fill="#06142E" rx="2" stroke="#0A2150" strokeWidth="1" />
        <text x="500" y="449" textAnchor="middle" fill="#A9B8D0" fontSize="10" letterSpacing="4" fontWeight="600">
          OFFICIAL PRODUCTION DECK · ZERO-TOLERANCE K3L SAFETY
        </text>

        {/* Central Keynote Lectern */}
        <rect x="480" y="355" width="40" height="28" rx="2" fill="#0A2150" stroke="#075BFF" strokeWidth="1.5" />
        <line x1="495" y1="355" x2="495" y2="345" stroke="#A9B8D0" strokeWidth="2" />
        <circle cx="495" cy="344" r="2.5" fill="#EF4444" />
        <line x1="505" y1="355" x2="505" y2="345" stroke="#A9B8D0" strokeWidth="2" />
        <circle cx="505" cy="344" r="2.5" fill="#19E6FF" filter="drop-shadow(0 0 3px #19E6FF)" />

        {/* Stage Monitor Wedges */}
        {[220, 360, 640, 780].map((x, i) => (
          <polygon key={i} points={`${x},376 ${x + 28},376 ${x + 24},368 ${x + 4},368`} fill="#040C1D" stroke="#1D3B6C" strokeWidth="1" />
        ))}

        {/* Front Audience Silhouette */}
        <path
          d="M 40,500 Q 120,470 200,490 T 360,475 T 520,490 T 680,472 T 840,490 T 960,475 L 980,520 L 20,520 Z"
          fill="rgba(3, 11, 26, 0.95)"
        />
        <path
          d="M 60,510 Q 150,490 250,505 T 450,495 T 650,505 T 850,495 T 950,510 L 980,520 L 20,520 Z"
          fill="rgba(6, 20, 46, 0.98)"
        />
      </svg>

      {/* Floating Status Bar with Electric Blue & Cyan accents */}
      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A9B8D0] bg-[#06142E]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#008CFF]/30 shadow-[0_4px_16px_rgba(6,20,46,0.6)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#19E6FF] animate-ping" />
          <span className="font-semibold text-white">Live Stage Engine</span>
          <span aria-hidden="true" className="text-[#334E7A]">·</span>
          <span>Rigging TUV Standard</span>
          <span aria-hidden="true" className="text-[#334E7A]">·</span>
          <span>Audio EASE 5D Calibrated</span>
        </div>
        <div className="flex items-center gap-3 font-medium text-[#A9B8D0]">
          <span>Kapasitas hingga 60.000 pax</span>
          <span aria-hidden="true" className="text-[#334E7A]">/</span>
          <span className="text-[#19E6FF] font-semibold">34 Provinsi Terintegrasi</span>
        </div>
      </div>
    </div>
  );
};
