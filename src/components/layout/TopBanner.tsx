import React from 'react';
import { Container } from '../common/Container';

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-[#EAFAF3] border-b border-[#D5F2E5] py-2 text-xs font-medium text-[#232A37]">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
        {/* Left message */}
        <div className="flex items-center gap-1.5 justify-center sm:justify-start">
          <span className="w-1.5 h-1.5 rounded-full bg-[#119C82] flex-shrink-0" />
          <span className="text-[11px] sm:text-xs">Đi chuyển chủ động, tận hưởng hành trình nhẹ nhàng</span>
        </div>

        {/* Right hotline */}
        <a
          href="tel:19000000"
          className="hover:text-[#119C82] transition-colors inline-flex items-center gap-1 font-semibold group text-[11px] sm:text-xs"
        >
          <span>Cần hỗ trợ? 1900 0000</span>
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </Container>
    </div>
  );
};
