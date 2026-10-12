export type BookingTab = 'shared' | 'rental' | 'delivery';

export interface BookingFormData {
  service: BookingTab;
  pickup: string;
  destination: string;
  date: string;
  passengers: string;
  phone: string;
  weight: string;
  rentalItinerary: string;
  rentalVehicle: string;
  rentalTime: string;
  rentalEndDate: string;
}
