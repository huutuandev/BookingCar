import React from 'react';

export const FeatureRoadArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[520px] mx-auto select-none ${className}`}>
      {/* Background Graphic SVG */}
      <svg
        viewBox="0 0 520 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="blobGrad" x1="50" y1="50" x2="450" y2="350" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAFAF3" />
            <stop offset="1" stopColor="#D5F4E7" />
          </linearGradient>
          <linearGradient id="carGrad2" x1="100" y1="180" x2="260" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#14B89A" />
            <stop offset="1" stopColor="#0D8972" />
          </linearGradient>
        </defs>

        {/* Soft Background Blob */}
        <path
          d="M70 120C40 220 90 320 200 350C310 380 430 320 450 210C470 100 370 30 260 40C150 50 100 20 70 120Z"
          fill="url(#blobGrad)"
          opacity="0.9"
        />

        {/* Soft Sun */}
        <circle cx="180" cy="90" r="32" fill="#FEE9D6" opacity="0.8" />

        {/* Scenic Road Curve */}
        <path
          d="M30 250C150 200 300 210 490 280"
          stroke="#FFFFFF"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M50 250C160 205 300 215 470 280"
          stroke="#C8EEDD"
          strokeWidth="3"
          strokeDasharray="10 10"
        />

        {/* Trees */}
        <g transform="translate(360, 160)">
          <path d="M20 0L36 28H4L20 0Z" fill="#119C82" opacity="0.8" />
          <path d="M20 18L34 42H6L20 18Z" fill="#0D8972" opacity="0.9" />
          <rect x="18" y="42" width="4" height="12" fill="#8D6E63" />
        </g>
        <g transform="translate(400, 185) scale(0.75)">
          <path d="M20 0L36 28H4L20 0Z" fill="#14B89A" opacity="0.85" />
          <path d="M20 18L34 42H6L20 18Z" fill="#119C82" opacity="0.9" />
          <rect x="18" y="42" width="4" height="12" fill="#8D6E63" />
        </g>

        {/* GoMove Electric Car */}
        <g transform="translate(140, 175) scale(0.85)">
          <path
            d="M20 70C20 60 26 52 36 50L65 42C80 20 102 12 135 12H170C195 12 215 24 225 42L245 52C256 56 262 65 262 76V95C262 102 256 108 248 108H234C234 94 222 82 208 82C194 82 182 94 182 108H96C96 94 84 82 70 82C56 82 44 94 44 108H28C22 108 18 102 18 95V70Z"
            fill="url(#carGrad2)"
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

      {/* Floating Benefit Callouts */}
      <div className="absolute top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-slate-100 shadow-md flex items-center gap-2.5 max-w-[210px]">
        <div className="w-6 h-6 rounded-lg bg-[#EAFAF3] text-[#119C82] flex items-center justify-center flex-shrink-0 text-xs font-bold">
          ✓
        </div>
        <div>
          <h4 className="text-xs font-bold text-[#232A37]">Tối ưu chi phí</h4>
          <p className="text-[10px] text-[#64748B] leading-tight">Lựa chọn hình thức phù hợp</p>
        </div>
      </div>

      <div className="absolute top-[42%] -left-6 sm:-left-12 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-slate-100 shadow-md flex items-center gap-2.5 max-w-[230px]">
        <div className="w-6 h-6 rounded-lg bg-[#EAFAF3] text-[#119C82] flex items-center justify-center flex-shrink-0 text-xs font-bold">
          📍
        </div>
        <div>
          <h4 className="text-xs font-bold text-[#232A37]">Chọn hành trình linh hoạt</h4>
          <p className="text-[10px] text-[#64748B] leading-tight">Dễ hình dung điểm đón / trả</p>
        </div>
      </div>

      <div className="absolute bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-slate-100 shadow-md flex items-center gap-2.5 max-w-[210px]">
        <div className="w-6 h-6 rounded-lg bg-[#EAFAF3] text-[#119C82] flex items-center justify-center flex-shrink-0 text-xs font-bold">
          ℹ️
        </div>
        <div>
          <h4 className="text-xs font-bold text-[#232A37]">Thông tin rõ ràng</h4>
          <p className="text-[10px] text-[#64748B] leading-tight">Biết trước thông tin cần thiết</p>
        </div>
      </div>
    </div>
  );
};
