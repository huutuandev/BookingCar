import { steps } from '../../data/home/steps';
import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import type { StepItem } from '../../types/home';
import { MapPin, CheckCircle2, Navigation, ArrowRight } from 'lucide-react';



const renderStepIcon = (name: StepItem['iconName']) => {
  const props = { size: 16, className: 'text-[#119C82]' };
  switch (name) {
    case 'pin':
      return <MapPin {...props} />;
    case 'check':
      return <CheckCircle2 {...props} />;
    case 'navigation':
      return <Navigation {...props} />;
  }
};

export const StepGuideSection: React.FC = () => {
  return (
    <section id="cach-su-dung" className="py-20 bg-white">
      <Container>
        <SectionHeader
          badge="CÁCH SỬ DỤNG"
          title="Đặt chuyến đơn giản trong 3 bước"
          description="Từ tìm chuyến đến chuẩn bị khởi hành — trải nghiệm được thiết kế thật dễ dàng."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group p-7 rounded-2xl border border-[#EAEFF2] bg-white hover:border-[#119C82]/30 hover:shadow-[0_8px_24px_rgba(17,156,130,0.06)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with step number badge and icon */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-xs font-bold text-[#119C82] bg-[#EAFAF3] px-2.5 py-1 rounded-lg">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#EAFAF3] flex items-center justify-center">
                    {renderStepIcon(item.iconName)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#232A37] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <a
                href="#booking-card"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#119C82] hover:text-[#0E856F] transition-colors"
              >
                <span>{item.linkText}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
