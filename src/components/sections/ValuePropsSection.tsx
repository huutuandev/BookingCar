import React from 'react';
import { Container } from '../common/Container';
import { ShieldCheck, Share2, Headphones } from 'lucide-react';

export const ValuePropsSection: React.FC = () => {
  return (
    <section className="py-10 border-y border-slate-100 bg-[#F7FAF9]/40">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
          {/* Item 1 */}
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#232A37]">
              An tâm trên từng hành trình
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Những điều nhỏ tạo nên trải nghiệm tốt hơn.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EAFAF3] text-[#119C82] flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck size={18} />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-[#232A37]">
                Tài xế được xác minh
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Ưu tiên an toàn và rõ ràng
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EAFAF3] text-[#119C82] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Share2 size={18} />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-[#232A37]">
                Thông tin minh bạch
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Chủ động theo dõi lựa chọn
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EAFAF3] text-[#119C82] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Headphones size={18} />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-[#232A37]">
                Hỗ trợ tận tâm
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Luôn có kênh để liên hệ
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
