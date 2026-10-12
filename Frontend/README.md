# BookingCar Frontend

Giao diện đặt xe sử dụng React, TypeScript, Vite và Tailwind CSS.
Đọc `frontend.mdc` trước khi thiết kế, sửa hoặc review code.

## Chạy dự án

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

## Cấu trúc mã nguồn

```text
src/
  main.tsx                     # Khởi tạo React và nạp CSS
  App.tsx                      # Ghép layout với trang
  pages/HomePage.tsx           # Thứ tự các section trang chủ
  components/
    common/                   # Thành phần dùng chung
    layout/                   # MainLayout, Navbar, Footer
    sections/                 # Các khối nội dung trang chủ
    illustrations/            # Hình minh họa SVG bằng React
  features/booking/
    components/               # Giao diện form tìm xe
    hooks/                    # State và xử lý tương tác form
    types.ts                  # Kiểu dữ liệu tính năng tìm xe
  data/home/                  # Nội dung tĩnh: dịch vụ, tuyến, FAQ, hướng dẫn
  types/home.ts               # Kiểu dữ liệu nội dung trang chủ
  styles/
    global.css                # Tailwind và style toàn cục
    tokens.css                # Token màu sắc và typography
  utils/                      # Shared utilities
public/                       # Tài nguyên phục vụ trực tiếp theo URL
```

## Quy ước thêm code

- Trang hoàn chỉnh đặt trong `pages`; khung dùng chung đặt trong `components/layout`.
- Component dùng lại giữa các tính năng đặt trong `components/common`.
- Component, hook và kiểu riêng của tính năng đặt trong `features/<tên tính năng>`.
- Nội dung tĩnh đặt trong `data`; giữ icon và cách render trong component.
- Khi có API, tạo `services` cho giao tiếp API và gọi qua hook của tính năng. Không tạo thư mục rỗng trước khi cần dùng.
- CSS toàn cục và token đặt trong `styles`; ưu tiên token hiện có.
- Dùng import trực tiếp đến file để thấy rõ nguồn phụ thuộc.
- Chạy lint và build trước khi merge; thay đổi UI cần kiểm tra desktop và mobile.

## Trạng thái hiện tại

Dự án hiện là giao diện demo. Form tìm xe và form liên hệ doanh nghiệp chỉ xử lý state cục bộ, chưa kết nối Backend. Nội dung trong `data/home` được chuyển từ component hiện có, chưa phải dữ liệu API và cần được xác minh trước khi phát hành.

Việc tổ chức thư mục không bổ sung router, API hoặc luồng đặt xe thực tế.
