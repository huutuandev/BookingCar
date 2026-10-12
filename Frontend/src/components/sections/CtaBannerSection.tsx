import { scrollToElement } from '../../utils/scrollToElement';
import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const CtaBannerSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-[#F7FAF9] to-[#EAFAF3]/50">
      {/* Decorative soft circles */}
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-[#EAFAF3] opacity-60 blur-2xl pointer-events-none" />
      <div className="absolute bottom-6 left-12 w-40 h-40 rounded-full bg-[#FEE9D6] opacity-50 blur-2xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#232A37] tracking-tight mb-3">
          Sẵn sàng cho hành trình tiếp theo?
        </h2>
        <p className="text-sm sm:text-base text-[#64748B] mb-8 leading-relaxed">
          Tìm lựa chọn di chuyển phù hợp với nhu cầu của bạn cùng GoMove.
        </p>

        <div className="inline-block">
          <Button
            variant="primary"
            size="lg"
            className="px-8 font-semibold shadow-md"
            onClick={() => {
              scrollToElement('booking-card');
            }}
          >
            Tìm chuyến ngay
          </Button>
        </div>
      </Container>
    </section>
  );
};
