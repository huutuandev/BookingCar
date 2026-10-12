import React from 'react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isWhite = false }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon */}
      <div className="w-9 h-9 rounded-xl bg-[#119C82] flex items-center justify-center text-white shadow-sm flex-shrink-0">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <span
          className={`text-xl font-bold tracking-tight leading-tight ${
            isWhite ? 'text-white' : 'text-[#232A37]'
          }`}
        >
          GoMove
        </span>
        <span
          className={`text-[9px] font-semibold tracking-wider uppercase -mt-0.5 ${
            isWhite ? 'text-slate-300' : 'text-[#64748B]'
          }`}
        >
          ĐI CHUYỂN THÔNG MINH
        </span>
      </div>
    </div>
  );
};
