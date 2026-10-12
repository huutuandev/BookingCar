import React from 'react';

export const HeroArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      <svg
        viewBox="0 0 600 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        <defs>
          <linearGradient id="heroBgGrad" x1="100" y1="0" x2="500" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAFAF3" />
            <stop offset="1" stopColor="#D4F3E6" />
          </linearGradient>
          <linearGradient id="carBodyGrad" x1="280" y1="360" x2="480" y2="440" gradientUnits="userSpaceOnUse">
            <stop stopColor="#14B89A" />
            <stop offset="1" stopColor="#0D8972" />
          </linearGradient>
          <filter id="shadowFilter" x="0" y="0" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0D8972" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Soft Sun/Orb */}
        <circle cx="500" cy="110" r="50" fill="#FEE9D6" opacity="0.8" />

        {/* Soft Organic Background Shape */}
        <path
          d="M120 40C260 10 520 20 560 160C595 280 540 420 420 460C280 500 80 460 30 360C-20 250 10 70 120 40Z"
          fill="url(#heroBgGrad)"
          opacity="0.85"
        />

        {/* Minimal City Skyline */}
        {/* Building 1 (Left Tall) */}
        <rect x="180" y="160" width="56" height="180" rx="4" fill="#FFFFFF" opacity="0.9" />
        <rect x="192" y="180" width="12" height="16" rx="2" fill="#BBEBD8" />
        <rect x="212" y="180" width="12" height="16" rx="2" fill="#BBEBD8" />
        <rect x="192" y="210" width="12" height="16" rx="2" fill="#BBEBD8" />
        <rect x="212" y="210" width="12" height="16" rx="2" fill="#BBEBD8" />
        <rect x="192" y="240" width="12" height="16" rx="2" fill="#BBEBD8" />
        <rect x="212" y="240" width="12" height="16" rx="2" fill="#BBEBD8" />

        {/* Building 2 (Center Back) */}
        <rect x="250" y="200" width="70" height="140" rx="4" fill="#E2F5ED" opacity="0.9" />
        <rect x="265" y="220" width="14" height="14" rx="2" fill="#FFFFFF" />
        <rect x="290" y="220" width="14" height="14" rx="2" fill="#FFFFFF" />
        <rect x="265" y="248" width="14" height="14" rx="2" fill="#FFFFFF" />
        <rect x="290" y="248" width="14" height="14" rx="2" fill="#FFFFFF" />

        {/* Building 3 (Right) */}
        <rect x="335" y="225" width="50" height="115" rx="4" fill="#FFFFFF" opacity="0.85" />
        <rect x="345" y="245" width="10" height="14" rx="2" fill="#BBEBD8" />
        <rect x="365" y="245" width="10" height="14" rx="2" fill="#BBEBD8" />

        {/* Soft Road Curve */}
        <path
          d="M60 410C160 380 340 375 560 395"
          stroke="#FFFFFF"
          strokeWidth="24"
          strokeLinecap="round"
          opacity="0.95"
        />
        <path
          d="M80 410C180 380 340 375 540 395"
          stroke="#CFEFE3"
          strokeWidth="4"
          strokeDasharray="12 12"
          strokeLinecap="round"
        />

        {/* Pin Marker on City */}
        <g transform="translate(198, 115)">
          <path
            d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0Z"
            fill="#119C82"
          />
          <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
        </g>

        {/* GoMove Electric Car */}
        <g transform="translate(330, 275)" filter="url(#shadowFilter)">
          {/* Car Body Base */}
          <path
            d="M20 70C20 60 26 52 36 50L65 42C80 20 102 12 135 12H170C195 12 215 24 225 42L245 52C256 56 262 65 262 76V95C262 102 256 108 248 108H234C234 94 222 82 208 82C194 82 182 94 182 108H96C96 94 84 82 70 82C56 82 44 94 44 108H28C22 108 18 102 18 95V70Z"
            fill="url(#carBodyGrad)"
          />

          {/* Windows */}
          <path
            d="M74 42L95 22C98 19 104 18 110 18H140V46H68L74 42Z"
            fill="#EAFBFF"
            opacity="0.9"
          />
          <path
            d="M148 18H168C182 18 194 25 200 36L214 46H148V18Z"
            fill="#EAFBFF"
            opacity="0.9"
          />

          {/* Door line */}
          <path d="M144 18V75" stroke="#0E856F" strokeWidth="2" strokeLinecap="round" />

          {/* Headlights */}
          <ellipse cx="254" cy="65" rx="5" ry="4" fill="#FEE9D6" />
          <path d="M260 62L275 60C278 60 280 64 278 66L260 68Z" fill="#FFF275" opacity="0.6" />

          {/* Taillight */}
          <rect x="18" y="62" width="6" height="8" rx="2" fill="#FF5252" />

          {/* Wheels (Back) */}
          <circle cx="70" cy="108" r="22" fill="#232A37" />
          <circle cx="70" cy="108" r="14" fill="#FFFFFF" />
          <circle cx="70" cy="108" r="6" fill="#119C82" />

          {/* Wheels (Front) */}
          <circle cx="208" cy="108" r="22" fill="#232A37" />
          <circle cx="208" cy="108" r="14" fill="#FFFFFF" />
          <circle cx="208" cy="108" r="6" fill="#119C82" />
        </g>
      </svg>
    </div>
  );
};
