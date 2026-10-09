import React from 'react';

interface EoMonogramLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark'; // dark means used on dark background
}

export const EoMonogramLogo: React.FC<EoMonogramLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Electric Blue EO Monogram Icon */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        {/* Soft ambient backlight glow */}
        <div className="absolute inset-0 bg-[#075BFF]/30 rounded-lg blur-md" />

        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_2px_8px_rgba(7,91,255,0.4)]"
        >
          <defs>
            <linearGradient id="eoMonoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#075BFF" />
              <stop offset="55%" stopColor="#008CFF" />
              <stop offset="100%" stopColor="#19E6FF" />
            </linearGradient>
            <linearGradient id="eoMonoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#19E6FF" />
              <stop offset="60%" stopColor="#008CFF" />
              <stop offset="100%" stopColor="#075BFF" />
            </linearGradient>
            <linearGradient id="eoDarkBase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A2150" />
              <stop offset="100%" stopColor="#06142E" />
            </linearGradient>
          </defs>

          {/* Background Rounded Shield Frame */}
          <rect
            x="2"
            y="2"
            width="60"
            height="60"
            rx="14"
            fill="url(#eoDarkBase)"
            stroke="url(#eoMonoGrad1)"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />

          {/* Interlocking Monogram: Letter 'E' with continuous geometric ribbon flow */}
          {/* E: Vertical backbone & Top horizontal bar */}
          <path
            d="M 15 17 H 31 C 32.5 17 33.5 18 33.5 19.5 C 33.5 21 32.5 22 31 22 H 21 V 28 H 29 C 30.5 28 31.5 29 31.5 30.5 C 31.5 32 30.5 33 29 33 H 21 V 42 H 31 C 32.5 42 33.5 43 33.5 44.5 C 33.5 46 32.5 47 31 47 H 15 C 13.5 47 12.5 46 12.5 44.5 V 19.5 C 12.5 18 13.5 17 15 17 Z"
            fill="url(#eoMonoGrad1)"
          />

          {/* Interlocking Monogram: Letter 'O' with luminous cyan arc */}
          {/* Outer O ellipse that dynamically overlaps and interlocks with E */}
          <path
            d="M 44 17 C 51.5 17 57 23.5 57 32 C 57 40.5 51.5 47 44 47 C 38.5 47 34.2 43.5 32.8 38.5 C 32.4 37 33.5 35.8 35 35.8 C 36.2 35.8 37.2 36.6 37.6 37.7 C 38.6 40.8 41 42.5 44 42.5 C 49 42.5 52.2 37.8 52.2 32 C 52.2 26.2 49 21.5 44 21.5 C 41 21.5 38.6 23.2 37.6 26.3 C 37.2 27.4 36.2 28.2 35 28.2 C 33.5 28.2 32.4 27 32.8 25.5 C 34.2 20.5 38.5 17 44 17 Z"
            fill="url(#eoMonoGrad2)"
          />

          {/* Luminous Core Light Accent Dot between E & O */}
          <circle cx="32" cy="30.5" r="2" fill="#19E6FF" filter="drop-shadow(0 0 3px #19E6FF)" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex items-baseline tracking-tight font-display font-extrabold leading-none">
        <span
          className={`${textSizes[size]} ${
            variant === 'dark' ? 'text-white' : 'text-[#06142E]'
          }`}
        >
          EO INDONESIA
        </span>
        <span className="text-[#075BFF] font-black text-sm ml-0.5 drop-shadow-[0_0_8px_rgba(7,91,255,0.4)]">
          .ID
        </span>
      </div>
    </div>
  );
};
