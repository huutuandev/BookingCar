import { popularRoutes } from '../../data/home/popularRoutes';
import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { MapPin, ArrowRight, ArrowLeftRight } from 'lucide-react';



export const PopularRoutesSection: React.FC = () => {
  return (
    <section id="tuyen-duong" className="py-20 bg-[#F7FAF9]/60">
      <Container>
        <SectionHeader
          badge="LỘ TRÌNH GỢI Ý"
          title="Tuyến đường được quan tâm"
          description="Khám phá lựa chọn di chuyển giữa các điểm đến phổ biến."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularRoutes.map((route) => (
            <div
              key={route.id}
              className="group p-7 rounded-2xl border border-[#EAEFF2] bg-white hover:border-[#119C82]/30 hover:shadow-[0_8px_24px_rgba(17,156,130,0.06)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Route Visual Header with Line */}
                <div className="bg-[#EAFAF3]/50 rounded-xl p-4 mb-5 border border-[#EAFAF3]">
                  <div className="flex items-center justify-between relative">
                    {/* From Pin */}
                    <div className="w-7 h-7 rounded-full bg-[#EAFAF3] border border-[#BBEBD8] flex items-center justify-center z-10">
                      <MapPin size={14} className="text-[#119C82]" />
                    </div>

                    {/* Connecting Line with Middle Pulse */}
                    <div className="flex-1 mx-2 h-0.5 bg-[#BBEBD8] relative flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#119C82]" />
                    </div>

                    {/* To Pin */}
                    <div className="w-7 h-7 rounded-full bg-[#EAFAF3] border border-[#BBEBD8] flex items-center justify-center z-10">
                      <MapPin size={14} className="text-[#119C82]" />
                    </div>
                  </div>
                </div>

                {/* Cities Name Row */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-bold text-[#232A37]">
                    {route.from}
                  </span>
                  <ArrowLeftRight size={14} className="text-slate-400 group-hover:text-[#119C82] transition-colors" />
                  <span className="text-base font-bold text-[#232A37]">
                    {route.to}
                  </span>
                </div>

                {/* Route Tag */}
                <p className="text-xs text-[#64748B] mb-6">
                  {route.tag}
                </p>
              </div>

              {/* Bottom Action Link */}
              <a
                href="#booking-card"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#119C82] hover:text-[#0E856F] transition-colors"
              >
                <span>{route.linkText}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
