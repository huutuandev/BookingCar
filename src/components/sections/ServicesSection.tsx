import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import type { ServiceItem } from '../../types';
import { Car, UserCheck, Plane, Package, Compass, Building2, ArrowRight } from 'lucide-react';

const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Xe ghép liên tỉnh',
    description: 'Đi chung tiết kiệm, kết nối nhiều điểm đến.',
    linkText: 'Tìm hiểu thêm',
    iconName: 'car',
  },
  {
    id: '2',
    title: 'Thuê xe có tài xế',
    description: 'Chủ động lịch trình cho gia đình và nhóm.',
    linkText: 'Tìm hiểu thêm',
    iconName: 'userCheck',
  },
  {
    id: '3',
    title: 'Đưa đón sân bay',
    description: 'Đón đúng giờ, hành lý gọn gàng.',
    linkText: 'Tìm hiểu thêm',
    iconName: 'plane',
  },
  {
    id: '4',
    title: 'Gửi hàng liên tỉnh',
    description: 'Kết nối gửi nhận thuận tiện, dễ theo dõi.',
    linkText: 'Tìm hiểu thêm',
    iconName: 'package',
  },
  {
    id: '5',
    title: 'Du lịch & tour',
    description: 'Thảnh thơi khám phá cùng người thân.',
    linkText: 'Tìm hiểu thêm',
    iconName: 'compass',
  },
  {
    id: '6',
    title: 'Giải pháp doanh nghiệp',
    description: 'Hỗ trợ nhu cầu di chuyển cho đội ngũ.',
    linkText: 'Tìm hiểu thêm',
    iconName: 'building',
  },
];

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
          {SERVICES.map((item) => (
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
