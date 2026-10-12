import React from 'react';

export const CorporateArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[480px] mx-auto select-none ${className}`}>
      {/* Top Floating Badge */}
      <div className="absolute top-4 left-6 z-10 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-[#EAFAF3] text-[#119C82] flex items-center justify-center text-xs">
          🛡️
        </span>
        <span className="text-xs font-semibold text-[#232A37]">
          Linh hoạt cho đội ngũ theo nhu cầu
        </span>
      </div>

      <svg
        viewBox="0 0 480 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        <defs>
          <linearGradient id="corpBg" x1="50" y1="20" x2="430" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAFAF3" />
            <stop offset="1" stopColor="#D5F4E7" />
          </linearGradient>
          <linearGradient id="corpCarGrad" x1="220" y1="220" x2="380" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#14B89A" />
            <stop offset="1" stopColor="#0D8972" />
          </linearGradient>
        </defs>

        {/* Soft Backdrop */}
        <rect x="20" y="20" width="440" height="300" rx="24" fill="url(#corpBg)" opacity="0.85" />
        <circle cx="410" cy="80" r="30" fill="#FEE9D6" opacity="0.9" />

        {/* Minimal Office Complex */}
        <rect x="80" y="100" width="85" height="180" rx="6" fill="#FFFFFF" opacity="0.95" />
        <rect x="95" y="120" width="22" height="24" rx="3" fill="#BBEBD8" />
        <rect x="130" y="120" width="22" height="24" rx="3" fill="#BBEBD8" />
        <rect x="95" y="155" width="22" height="24" rx="3" fill="#BBEBD8" />
        <rect x="130" y="155" width="22" height="24" rx="3" fill="#BBEBD8" />
        <rect x="95" y="190" width="22" height="24" rx="3" fill="#BBEBD8" />
        <rect x="130" y="190" width="22" height="24" rx="3" fill="#BBEBD8" />

        <rect x="180" y="140" width="65" height="140" rx="6" fill="#FFFFFF" opacity="0.9" />
        <rect x="195" y="160" width="16" height="20" rx="3" fill="#D2F2E5" />
        <rect x="220" y="160" width="16" height="20" rx="3" fill="#D2F2E5" />
        <rect x="195" y="190" width="16" height="20" rx="3" fill="#D2F2E5" />
        <rect x="220" y="190" width="16" height="20" rx="3" fill="#D2F2E5" />

        {/* Ground Line */}
        <path d="M40 280H440" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />

        {/* GoMove Car in front of office */}
        <g transform="translate(230, 185) scale(0.85)">
          <path
            d="M20 70C20 60 26 52 36 50L65 42C80 20 102 12 135 12H170C195 12 215 24 225 42L245 52C256 56 262 65 262 76V95C262 102 256 108 248 108H234C234 94 222 82 208 82C194 82 182 94 182 108H96C96 94 84 82 70 82C56 82 44 94 44 108H28C22 108 18 102 18 95V70Z"
            fill="url(#corpCarGrad)"
          />
          <path d="M74 42L95 22C98 19 104 18 110 18H140V46H68L74 42Z" fill="#EAFBFF" opacity="0.9" />
          <path d="M148 18H168C182 18 194 25 200 36L214 46H148V18Z" fill="#EAFBFF" opacity="0.9" />
          <path d="M144 18V75" stroke="#0E856F" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="254" cy="65" rx="5" ry="4" fill="#FEE9D6" />
          <circle cx="70" cy="108" r="22" fill="#232A37" />
          <circle cx="70" cy="108" r="14" fill="#FFFFFF" />
          <circle cx="70" cy="108" r="6" fill="#119C82" />
          <circle cx="208" cy="108" r="22" fill="#232A37" />
          <circle cx="208" cy="108" r="14" fill="#FFFFFF" />
          <circle cx="208" cy="108" r="6" fill="#119C82" />
        </g>
      </svg>
    </div>
  );
};
