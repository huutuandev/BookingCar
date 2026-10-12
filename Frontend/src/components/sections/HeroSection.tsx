import { scrollToElement } from '../../utils/scrollToElement';
import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { BookingWidget } from '../../features/booking/components/BookingWidget';
import { HeroArtwork } from '../illustrations/HeroArtwork';
import { ShieldCheck, Clock, MapPin, Sparkles, Phone } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#F7FAF9]/60 to-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Prop & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <Badge icon={<Sparkles size={13} className="text-[#119C82]" />}>
              ĐI CHUYỂN LINH HOẠT
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#232A37] tracking-tight leading-[1.12]">
              Mỗi hành trình,<br />
              <span className="text-[#232A37]">an tâm hơn.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-lg">
              Tìm chuyến đi phù hợp, kết nối phương tiện dễ dàng và chủ động chi phí — tất cả bắt đầu từ GoMove.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:19001234"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3 text-base font-semibold text-white hover:bg-teal-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
              >
                <Phone size={18} aria-hidden="true" />
                Hotline: 1900 1234
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  scrollToElement('dich-vu');
                }}
              >
                Khám phá dịch vụ
              </Button>
            </div>

            {/* 3 Trust Badges */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-[#64748B]">
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck size={16} className="text-[#119C82]" />
                <span>Tài xế xác minh</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Clock size={16} className="text-[#119C82]" />
                <span>Hỗ trợ 24/7</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <MapPin size={16} className="text-[#119C82]" />
                <span>Lộ trình rõ ràng</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Artwork & Elevated Booking Card */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* Background Artwork Layer */}
            <div className="absolute inset-0 -top-8 sm:-top-12 -right-4 flex items-center justify-center lg:justify-end pointer-events-none opacity-90 lg:opacity-100 scale-105 sm:scale-110 lg:scale-115">
              <HeroArtwork />
            </div>

            {/* Floating Booking Card */}
            <div className="w-full relative mt-4 lg:mt-6 flex justify-center lg:justify-start">
              <BookingWidget />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
