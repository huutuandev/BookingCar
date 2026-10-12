import React, { useState } from 'react';
import type { BookingTab, BookingFormData } from '../../types';
import { Button } from '../common/Button';
import { MapPin, Calendar, Users, ChevronDown, CheckCircle2 } from 'lucide-react';

export const BookingWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BookingTab>('shared');
  const [formData, setFormData] = useState<BookingFormData>({
    service: 'shared',
    pickup: '',
    destination: '',
    date: '',
    passengers: '1 người',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleTabChange = (tab: BookingTab) => {
    setActiveTab(tab);
    setFormData((prev) => ({ ...prev, service: tab }));
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div
      id="booking-card"
      className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_36px_rgba(35,42,55,0.08)] border border-slate-100 max-w-lg w-full relative z-20 backdrop-blur-sm"
    >
      {/* Card Header */}
      <div className="mb-5">
        <h3 className="text-xl font-bold text-[#232A37] tracking-tight">
          Tìm chuyến đi của bạn
        </h3>
        <p className="text-xs text-[#64748B] mt-1">
          Chọn dịch vụ phù hợp với hành trình
        </p>
      </div>

      {/* Service Tabs */}
      <div className="flex items-center gap-2 p-1 bg-[#F1F5F9] rounded-xl mb-5">
        <button
          type="button"
          onClick={() => handleTabChange('shared')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'shared'
              ? 'bg-[#119C82] text-white shadow-sm'
              : 'text-[#64748B] hover:text-[#232A37]'
          }`}
        >
          Xe ghép
        </button>
        <button
          type="button"
          onClick={() => handleTabChange('rental')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'rental'
              ? 'bg-[#119C82] text-white shadow-sm'
              : 'text-[#64748B] hover:text-[#232A37]'
          }`}
        >
          Thuê xe
        </button>
        <button
          type="button"
          onClick={() => handleTabChange('delivery')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'delivery'
              ? 'bg-[#119C82] text-white shadow-sm'
              : 'text-[#64748B] hover:text-[#232A37]'
          }`}
        >
          Gửi hàng
        </button>
      </div>

      {/* Booking Form Inputs */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Điểm đón */}
          <div className="border border-slate-200 rounded-xl p-2.5 focus-within:border-[#119C82] focus-within:ring-1 focus-within:ring-[#119C82]/20 transition-all bg-white">
            <label className="block text-[11px] font-semibold text-[#64748B] mb-0.5">
              Điểm đón
            </label>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#119C82] flex-shrink-0" />
              <input
                type="text"
                placeholder="Chọn điểm đón"
                value={formData.pickup}
                onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                className="w-full text-xs text-[#232A37] font-medium placeholder:text-slate-400 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Điểm đến */}
          <div className="border border-slate-200 rounded-xl p-2.5 focus-within:border-[#119C82] focus-within:ring-1 focus-within:ring-[#119C82]/20 transition-all bg-white">
            <label className="block text-[11px] font-semibold text-[#64748B] mb-0.5">
              Điểm đến
            </label>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#64748B] flex-shrink-0" />
              <input
                type="text"
                placeholder="Bạn muốn đi đâu?"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full text-xs text-[#232A37] font-medium placeholder:text-slate-400 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Ngày khởi hành */}
          <div className="border border-slate-200 rounded-xl p-2.5 focus-within:border-[#119C82] focus-within:ring-1 focus-within:ring-[#119C82]/20 transition-all bg-white">
            <label className="block text-[11px] font-semibold text-[#64748B] mb-0.5">
              Ngày khởi hành
            </label>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#64748B] flex-shrink-0" />
              <input
                type="text"
                placeholder="Chọn ngày đi"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full text-xs text-[#232A37] font-medium placeholder:text-slate-400 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Hành khách / Khối lượng */}
          <div className="border border-slate-200 rounded-xl p-2.5 focus-within:border-[#119C82] focus-within:ring-1 focus-within:ring-[#119C82]/20 transition-all bg-white relative">
            <label className="block text-[11px] font-semibold text-[#64748B] mb-0.5">
              {activeTab === 'delivery' ? 'Kiện hàng' : 'Hành khách'}
            </label>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1">
                <Users size={16} className="text-[#64748B] flex-shrink-0" />
                <select
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full text-xs text-[#232A37] font-medium focus:outline-none bg-transparent appearance-none cursor-pointer pr-4"
                >
                  <option value="1 người">1 người</option>
                  <option value="2 người">2 người</option>
                  <option value="3 người">3 người</option>
                  <option value="4+ người">4+ người</option>
                </select>
              </div>
              <ChevronDown size={14} className="text-slate-400 pointer-events-none -ml-3" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          className="mt-2 font-semibold text-sm shadow-md"
        >
          Tìm chuyến
        </Button>

        {/* Feedback message */}
        {submitted && (
          <div className="mt-2 p-2.5 bg-[#EAFAF3] border border-[#BBEBD8] rounded-xl flex items-center gap-2 text-xs text-[#119C82] font-medium animate-in fade-in">
            <CheckCircle2 size={16} className="flex-shrink-0" />
            <span>Đã ghi nhận thông tin tìm kiếm! Hệ thống đang kết nối chuyến phù hợp.</span>
          </div>
        )}
      </form>
    </div>
  );
};
