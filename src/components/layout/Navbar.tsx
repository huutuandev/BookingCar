import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Logo } from '../illustrations/Logo';
import { Button } from '../common/Button';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dịch vụ', href: '#dich-vu' },
  { label: 'Tuyến đường', href: '#tuyen-duong' },
  { label: 'Doanh nghiệp', href: '#doanh-nghiep' },
  { label: 'Đối tác tài xế', href: '#doi-tac' },
  { label: 'Hỗ trợ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <Container className="h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex-shrink-0">
          <Logo />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-[#232A37] hover:text-[#119C82] transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            size="md"
            onClick={() => {
              const bookingElement = document.getElementById('booking-card');
              if (bookingElement) {
                bookingElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Đặt chuyến
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#119C82] hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 animate-in fade-in duration-150">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#232A37] hover:bg-[#EAFAF3] hover:text-[#119C82] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <Button
              fullWidth
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                const bookingElement = document.getElementById('booking-card');
                if (bookingElement) {
                  bookingElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Đặt chuyến
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
