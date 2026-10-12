import { useState, type FormEvent } from 'react';
import type { BookingTab, BookingFormData } from '../types';

// Local demo interaction; no booking API is connected.
export const useBookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    service: 'shared',
    pickup: '',
    destination: '',
    date: '',
    phone: '',
    weight: '',
    rentalItinerary: '',
    rentalVehicle: '',
    rentalTime: '',
    rentalEndDate: '',
    passengers: '1 người',
  });
  const activeTab = formData.service;
  const [submitted, setSubmitted] = useState(false);
  const [weightError, setWeightError] = useState('');

  const handleTabChange = (tab: BookingTab) => {
    setFormData((prev) => ({ ...prev, service: tab }));
    setSubmitted(false);
    setWeightError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (activeTab === 'delivery' && (!Number.isFinite(Number(formData.weight)) || Number(formData.weight) <= 0 || Number(formData.weight) > 20)) {
      setWeightError('Vui lòng nhập khối lượng lớn hơn 0 và tối đa 20 kg.');
      return;
    }
    setWeightError('');
    setSubmitted(true);
  };

  return { activeTab, formData, setFormData, submitted, weightError, handleTabChange, handleSubmit };
};
