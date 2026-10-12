import type { StepItem } from '../../types/home';

export const steps: readonly StepItem[] = [
  {
    step: '01',
    title: 'Chọn hành trình',
    description: 'Nhập điểm đón, điểm đến và ngày đi.',
    linkText: 'Thực hiện nhanh',
    iconName: 'pin',
  },
  {
    step: '02',
    title: 'Xác nhận thông tin',
    description: 'Kiểm tra dịch vụ và lựa chọn phù hợp.',
    linkText: 'Thực hiện nhanh',
    iconName: 'check',
  },
  {
    step: '03',
    title: 'Sẵn sàng khởi hành',
    description: 'Theo dõi thông tin chuyến khi cần.',
    linkText: 'Thực hiện nhanh',
    iconName: 'navigation',
  },
];
