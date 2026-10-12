import { services } from '../../data/home/services';
import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import type { ServiceItem } from '../../types/home';
import { Car, UserCheck, Plane, Package, Compass, Building2, ArrowRight } from 'lucide-react';



const renderIcon = (name: ServiceItem['iconName']) => {
  const iconProps = { size: 20, className: 'text-[#119C82]' };
  switch (name) {
    case 'car':
      return <Car {...iconProps} />;
    case 'userCheck':
      return <UserCheck {...iconProps} />;
    case 'plane':
      return <Plane {...iconProps} />;
    case 'package':
      return <Package {...iconProps} />;
    case 'compass':
      return <Compass {...iconProps} />;
    case 'building':
      return <Building2 {...iconProps} />;
  }
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="dich-vu" className="py-20 bg-white">
      <Container>
        <SectionHeader
          badge="DỊCH VỤ CỦA GOMOVE"
          title="Dịch vụ phù hợp với bạn"
          description="Linh hoạt cho từng nhu cầu di chuyển, từ hàng ngày đến những hành trình xa."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="group p-7 rounded-2xl border border-[#EAEFF2] bg-white hover:border-[#119C82]/30 hover:shadow-[0_8px_24px_rgba(17,156,130,0.06)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EAFAF3] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {renderIcon(item.iconName)}
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
