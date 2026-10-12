import React from 'react';
import { Container } from '../common/Container';
import { Logo } from '../illustrations/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 text-[#232A37]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Column (takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-[#64748B] max-w-sm leading-relaxed">
              Đi chuyển thông minh, an tâm trên mọi hành trình.
            </p>
            <div className="text-xs text-[#94A3B8] space-y-1 pt-1">
              <p>Hotline: <span className="text-[#64748B]">[bổ sung]</span> • Email: <span className="text-[#64748B]">[bổ sung]</span></p>
            </div>
          </div>

          {/* Col 2: DỊCH VỤ */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-[#232A37] uppercase mb-4">
              Dịch vụ
            </h4>
            <ul className="space-y-2.5 text-sm text-[#64748B]">
              <li><a href="#dich-vu" className="hover:text-[#119C82] transition-colors">Xe ghép liên tỉnh</a></li>
              <li><a href="#dich-vu" className="hover:text-[#119C82] transition-colors">Thuê xe có tài xế</a></li>
              <li><a href="#dich-vu" className="hover:text-[#119C82] transition-colors">Đưa đón sân bay</a></li>
              <li><a href="#dich-vu" className="hover:text-[#119C82] transition-colors">Gửi hàng liên tỉnh</a></li>
            </ul>
          </div>

          {/* Col 3: HỖ TRỢ */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-[#232A37] uppercase mb-4">
              Hỗ trợ
            </h4>
            <ul className="space-y-2.5 text-sm text-[#64748B]">
              <li><a href="#faq" className="hover:text-[#119C82] transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#cach-su-dung" className="hover:text-[#119C82] transition-colors">Hướng dẫn đặt chuyến</a></li>
              <li><a href="#faq" className="hover:text-[#119C82] transition-colors">Liên hệ hỗ trợ</a></li>
              <li><a href="#doi-tac" className="hover:text-[#119C82] transition-colors">Đối tác tài xế</a></li>
            </ul>
          </div>

          {/* Col 4: THÔNG TIN */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-[#232A37] uppercase mb-4">
              Thông tin
            </h4>
            <ul className="space-y-2.5 text-sm text-[#64748B]">
              <li><a href="#" className="hover:text-[#119C82] transition-colors">Về GoMove</a></li>
              <li><a href="#" className="hover:text-[#119C82] transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-[#119C82] transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#doanh-nghiep" className="hover:text-[#119C82] transition-colors">Dành cho doanh nghiệp</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Design Handoff metadata */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div className="text-[11px] font-mono tracking-tight text-slate-400">
            DESIGN HANDOFF • Desktop 1440 px • Inter • 8px spacing rhythm • Colors: ink #232A37 / teal #119C82 / mint #EAFAF3 / wash #F7FAF9
          </div>
          <div>
            © 2026 GoMove. Tên thương hiệu và thông tin liên hệ là nội dung mẫu cần xác nhận.
          </div>
        </div>
      </Container>
    </footer>
  );
};
