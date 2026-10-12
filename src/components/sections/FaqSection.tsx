import React, { useState } from 'react';
import { Container } from '../common/Container';
import type { FaqItem } from '../../types';
import { ChevronRight, ArrowRight } from 'lucide-react';

const FAQS: FaqItem[] = [
  {
    id: '1',
    question: 'Tôi đặt chuyến như thế nào?',
    answer: 'Chọn điểm đón, điểm đến, ngày khởi hành và hình thức di chuyển phù hợp.',
  },
  {
    id: '2',
    question: 'Chi phí chuyến đi được thông báo ra sao?',
    answer: 'Thông tin giá cần được xác nhận trước khi hoàn tất đặt chuyến.',
  },
  {
    id: '3',
    question: 'Tôi cần làm gì nếu muốn đổi lịch?',
    answer: 'Liên hệ kênh hỗ trợ để kiểm tra điều kiện đổi lịch của chuyến.',
  },
  {
    id: '4',
    question: 'Làm thế nào để liên hệ hỗ trợ?',
    answer: 'Bạn có thể dùng thông tin liên hệ chính thức được hiển thị trên website.',
  },
];

export const FaqSection: React.FC = () => {
  // First item open by default for rich visual
  const [openIds, setOpenIds] = useState<string[]>(['1']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-bold tracking-[0.15em] text-[#119C82] uppercase block">
              HỖ TRỢ BẠN
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#232A37] tracking-tight leading-tight">
              Bạn cần biết thêm<br />điều gì?
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Một vài câu hỏi phổ biến giúp bạn hiểu rõ hơn trước khi chọn hành trình.
            </p>

            <div className="pt-4">
              <a
                href="#footer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#119C82] hover:text-[#0E856F] transition-colors group"
              >
                <span>Chưa tìm thấy câu trả lời? Liên hệ đội ngũ hỗ trợ</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#EAEFF2] bg-white transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#232A37]">
                      {faq.question}
                    </span>
                    <ChevronRight
                      size={18}
                      className={`text-[#64748B] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-90 text-[#119C82]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-slate-50 bg-[#F7FAF9]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
