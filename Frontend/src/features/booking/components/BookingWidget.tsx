import { useBookingForm } from '../hooks/useBookingForm';
import type { BookingTab } from '../types';
import { Button } from '../../../components/common/Button';
import { MapPin, Calendar, Users, Package, Phone, Car, Clock } from 'lucide-react';

const tabs: { id: BookingTab; label: string }[] = [
  { id: 'shared', label: 'Xe ghép' },
  { id: 'rental', label: 'Thuê xe' },
  { id: 'delivery', label: 'Gửi hàng' },
];

const fieldStyles = 'rounded-xl border border-slate-200 bg-white p-3 transition-colors focus-within:border-teal focus-within:ring-1 focus-within:ring-teal/20';
const inputStyles = 'min-h-11 w-full min-w-0 bg-transparent text-base text-ink placeholder:text-slate-400 focus:outline-none';
const labelStyles = 'mb-1 block text-sm font-semibold text-ink-muted';

export const BookingWidget = () => {
  const { activeTab, formData, setFormData, submitted, weightError, handleTabChange, handleSubmit } = useBookingForm();
  const isDelivery = activeTab === 'delivery';
  const isRental = activeTab === 'rental';

  return (
    <div id="booking-card" className="relative z-20 w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_12px_36px_rgba(35,42,55,0.08)] sm:p-7">
      <div className="mb-5">
        <h3 className="text-xl font-bold tracking-tight text-ink">{isDelivery ? 'Gửi hàng liên tỉnh' : isRental ? 'Thuê xe có tài xế' : 'Tìm chuyến đi của bạn'}</h3>
        <p className="mt-1 text-sm text-ink-muted">{isRental ? 'Chọn nhu cầu xe và lịch trình của bạn' : 'Chọn dịch vụ phù hợp với hành trình'}</p>
      </div>
      <div className="mb-5 flex gap-2 rounded-xl bg-slate-100 p-1" aria-label="Dịch vụ">
        {tabs.map((tab) => (
          <button key={tab.id} type="button" aria-pressed={activeTab === tab.id} onClick={() => handleTabChange(tab.id)} className={`min-h-11 flex-1 rounded-lg px-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${activeTab === tab.id ? 'bg-teal text-white shadow-sm' : 'text-ink-muted hover:text-ink'}`}>
            {tab.label}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div className={fieldStyles}>
            <label htmlFor="booking-pickup" className={labelStyles}>{isDelivery ? 'Điểm gửi hàng' : isRental ? 'Địa điểm đón' : 'Điểm đón'}</label>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-teal" aria-hidden="true" />
              <input id="booking-pickup" required type="text" placeholder={isDelivery ? 'Địa chỉ gửi hàng' : isRental ? 'Địa chỉ tài xế đến đón' : 'Chọn điểm đón'} value={formData.pickup} onChange={(e) => setFormData({ ...formData, pickup: e.target.value })} className={inputStyles} />
            </div>
          </div>
          <div className={fieldStyles}>
            <label htmlFor={isRental ? 'booking-itinerary' : 'booking-destination'} className={labelStyles}>{isDelivery ? 'Điểm nhận hàng' : isRental ? 'Lịch trình dự kiến' : 'Điểm đến'}</label>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-ink-muted" aria-hidden="true" />
              {isRental ? (
                <textarea id="booking-itinerary" required rows={2} placeholder="VD: Hà Nội → Ninh Bình → Hà Nội" value={formData.rentalItinerary} onChange={(e) => setFormData({ ...formData, rentalItinerary: e.target.value })} className={`${inputStyles} resize-y`} />
              ) : (
                <input id="booking-destination" required type="text" placeholder={isDelivery ? 'Địa chỉ nhận hàng' : 'Bạn muốn đi đâu?'} value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} className={inputStyles} />
              )}
            </div>
          </div>
          <div className={fieldStyles}>
            <label htmlFor="booking-date" className={labelStyles}>{isDelivery ? 'Ngày gửi hàng' : isRental ? 'Ngày bắt đầu thuê' : 'Ngày khởi hành'}</label>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="shrink-0 text-ink-muted" aria-hidden="true" />
              <input id="booking-date" required type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className={inputStyles} />
            </div>
          </div>
          <div className={fieldStyles}>
            {isDelivery ? (
              <>
                <label htmlFor="booking-weight" className={labelStyles}>Khối lượng (kg)</label>
                <div className="flex items-center gap-2">
                  <Package size={16} className="shrink-0 text-ink-muted" aria-hidden="true" />
                  <input id="booking-weight" required type="number" inputMode="decimal" min="0.1" max="20" step="0.1" placeholder="Tối đa 20 kg" value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: e.target.value })} aria-invalid={weightError ? true : undefined} aria-describedby="booking-weight-help" className={inputStyles} />
                </div>
                <p id="booking-weight-help" className={`mt-1 text-sm ${weightError ? 'text-red-600' : 'text-ink-muted'}`}>{weightError || 'Từ 0,1 đến 20 kg.'}</p>
              </>
            ) : isRental ? (
              <>
                <label htmlFor="booking-vehicle" className={labelStyles}>Loại xe cần thuê</label>
                <div className="flex items-center gap-2">
                  <Car size={16} className="shrink-0 text-ink-muted" aria-hidden="true" />
                  <select id="booking-vehicle" required value={formData.rentalVehicle} onChange={(e) => setFormData({ ...formData, rentalVehicle: e.target.value })} className={inputStyles}>
                    <option value="" disabled>Chọn nhu cầu xe</option>
                    <option value="4-seat">Xe 4 chỗ</option>
                    <option value="7-seat">Xe 7 chỗ</option>
                    <option value="16-seat">Xe 16 chỗ</option>
                    <option value="consultation">Cần tư vấn loại xe</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <label htmlFor="booking-passengers" className={labelStyles}>Hành khách</label>
                <div className="flex items-center gap-2">
                  <Users size={16} className="shrink-0 text-ink-muted" aria-hidden="true" />
                  <select id="booking-passengers" value={formData.passengers} onChange={(e) => setFormData({ ...formData, passengers: e.target.value })} className={inputStyles}>
                    <option value="1 người">1 người</option>
                    <option value="2 người">2 người</option>
                    <option value="3 người">3 người</option>
                    <option value="4+ người">4+ người</option>
                  </select>
                </div>
              </>
            )}
          </div>
          {isRental && (
            <>
              <div className={fieldStyles}>
                <label htmlFor="booking-rental-time" className={labelStyles}>Giờ đón</label>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="shrink-0 text-ink-muted" aria-hidden="true" />
                  <input id="booking-rental-time" required type="time" value={formData.rentalTime} onChange={(e) => setFormData({ ...formData, rentalTime: e.target.value })} className={inputStyles} />
                </div>
              </div>
              <div className={fieldStyles}>
                <label htmlFor="booking-rental-end" className={labelStyles}>Ngày kết thúc thuê</label>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="shrink-0 text-ink-muted" aria-hidden="true" />
                  <input id="booking-rental-end" required type="date" min={formData.date || undefined} value={formData.rentalEndDate} onChange={(e) => setFormData({ ...formData, rentalEndDate: e.target.value })} className={inputStyles} />
                </div>
              </div>
            </>
          )}
          <div className={`${fieldStyles} sm:col-span-2`}>
            <label htmlFor="booking-phone" className={labelStyles}>Số điện thoại khách hàng</label>
            <div className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-teal" aria-hidden="true" />
              <input id="booking-phone" required type="tel" inputMode="tel" autoComplete="tel" pattern="\+?[0-9]{9,15}" title="Nhập từ 9 đến 15 chữ số, có thể bắt đầu bằng dấu +." placeholder="Nhập số điện thoại liên hệ" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputStyles} />
            </div>
          </div>
        </div>
        <Button type="submit" variant="primary" fullWidth size="lg" className="mt-2 font-semibold text-sm shadow-md">{isDelivery ? 'Tìm chuyến gửi hàng' : isRental ? 'Tìm xe thuê' : 'Tìm chuyến'}</Button>
        {submitted && <p role="status" className="rounded-xl border border-teal/20 bg-mint p-3 text-sm text-teal">Đã kiểm tra thông tin demo. Chưa có yêu cầu nào được gửi đến tổng đài.</p>}
      </form>
    </div>
  );
};
