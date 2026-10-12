import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { CorporateArtwork } from '../illustrations/CorporateArtwork';
import { CheckCircle2 } from 'lucide-react';

export const CorporateSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setEmail('');
    }, 2500);
  };

  return (
    <section id="doanh-nghiep" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Information & Checkpoints */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#119C82] uppercase block mb-2">
                DÀNH CHO DOANH NGHIỆP
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#232A37] tracking-tight leading-tight">
                Di chuyển thuận tiện<br />
                cho đội ngũ của bạn
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-lg">
              Tổ chức nhu cầu đi lại với đầu mối hỗ trợ và phương án phù hợp cho đội ngũ, khách hàng hoặc đối tác.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 text-sm font-medium text-[#232A37]">
                <div className="w-5 h-5 rounded-full bg-[#EAFAF3] text-[#119C82] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={15} />
                </div>
                <span>Tư vấn theo nhu cầu</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-[#232A37]">
                <div className="w-5 h-5 rounded-full bg-[#EAFAF3] text-[#119C82] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={15} />
                </div>
                <span>Thông tin chuyến rõ ràng</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-[#232A37]">
                <div className="w-5 h-5 rounded-full bg-[#EAFAF3] text-[#119C82] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={15} />
                </div>
                <span>Hỗ trợ trong quá trình sử dụng</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => setModalOpen(true)}
              >
                Trao đổi cùng GoMove
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <CorporateArtwork />
          </div>
        </div>

        {/* Corporate Contact Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 relative">
              <h3 className="text-xl font-bold text-[#232A37] mb-2">
                Liên hệ doanh nghiệp
              </h3>
              <p className="text-xs text-[#64748B] mb-5">
                Nhập email công ty của bạn, chuyên viên GoMove sẽ liên hệ lại trong vòng 24 giờ làm việc.
              </p>

              {submitted ? (
                <div className="p-4 bg-[#EAFAF3] text-[#119C82] rounded-xl text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  <span>Cảm ơn bạn! GoMove đã nhận được thông tin liên hệ.</span>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1">
                      Email doanh nghiệp
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ten@doanhnghiep.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-sm p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#119C82]"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Button type="submit" variant="primary" fullWidth size="md">
                      Gửi yêu cầu
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => setModalOpen(false)}
                    >
                      Đóng
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
