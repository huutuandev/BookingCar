import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={`max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <span className="text-[11px] font-bold tracking-[0.15em] text-[#119C82] uppercase block mb-2">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#232A37] tracking-tight mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
