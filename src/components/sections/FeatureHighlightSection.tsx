import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { FeatureRoadArtwork } from '../illustrations/FeatureRoadArtwork';

export const FeatureHighlightSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7FAF9]/70 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Artwork */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <FeatureRoadArtwork />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#119C82] uppercase block mb-2">
                ĐI CHUNG THÔNG MINH
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#232A37] tracking-tight leading-tight">
                Tối ưu chi phí,<br />
                thoải mái hành trình
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-lg">
              Chọn hành trình phù hợp, chia sẻ chi phí và chủ động nắm thông tin chuyến đi — đơn giản hơn với GoMove.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const card = document.getElementById('booking-card');
                  if (card) card.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Khám phá xe ghép
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
