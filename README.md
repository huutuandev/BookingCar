# BookingCar — GoMove Frontend

BookingCar là dự án giao diện website đặt xe với thương hiệu hiển thị GoMove. Website giới thiệu dịch vụ di chuyển, các tuyến đường gợi ý và cung cấp form tìm chuyến theo ba hình thức: xe ghép, thuê xe và gửi hàng.

**Trạng thái:** giao diện demo, chưa tích hợp Backend. Các form hiện xử lý dữ liệu cục bộ và chưa tạo đơn đặt xe, gửi hàng hoặc yêu cầu liên hệ thực tế.

## Công nghệ

| Công nghệ | Vai trò |
| --- | --- |
| React 19 | Xây dựng giao diện và quản lý tương tác |
| TypeScript 6 | Khai báo kiểu và kiểm tra mã nguồn |
| Vite 8 | Máy chủ phát triển và build production |
| Tailwind CSS 4 | Styling và design token |
| Lucide React | Bộ icon giao diện |
| Oxlint | Kiểm tra quy tắc và chất lượng code |

Phiên bản dependency được khai báo trong [package.json](./Frontend/package.json); phiên bản cài đặt được cố định bằng [package-lock.json](./Frontend/package-lock.json).

## Chức năng hiện có

- Trang chủ gồm phần giới thiệu, dịch vụ, hướng dẫn sử dụng, tuyến đường gợi ý, nội dung doanh nghiệp và câu hỏi thường gặp.
- Form tìm chuyến thay đổi nhãn và trường nhập theo tab xe ghép, thuê xe hoặc gửi hàng.
- Thu thập điểm đón/gửi, điểm đến/nhận, ngày đi/gửi và số điện thoại khách hàng.
- Chọn số hành khách đối với xe ghép/thuê xe; nhập khối lượng từ 0,1 đến 20 kg đối với gửi hàng.
- Điều hướng mobile, FAQ có thể mở/đóng và form liên hệ doanh nghiệp dạng modal.

Hotline `1900 1234` là số mẫu phục vụ giao diện demo. Nội dung dịch vụ, tuyến đường và thông tin vận hành cần được xác minh trước khi phát hành.

## Cài đặt và chạy

Cài Node.js tương thích với Vite 8 (20.19+ hoặc 22.12+) và npm. Thực hiện các lệnh sau từ thư mục gốc repository:

```sh
cd Frontend
npm ci
npm run dev
```

Mở địa chỉ được Vite in trong terminal. Cổng mặc định là `5173`; Vite có thể chọn cổng khác nếu cổng này đang được sử dụng.

### Các lệnh phát triển

Các lệnh dưới đây chạy trong thư mục `Frontend`.

| Lệnh | Chức năng |
| --- | --- |
| `npm ci` | Cài dependency theo lockfile |
| `npm run dev` | Khởi động máy chủ phát triển với cập nhật khi sửa code |
| `npm run lint` | Kiểm tra mã nguồn bằng Oxlint |
| `npm run build` | Kiểm tra TypeScript và tạo bản production |
| `npm run preview` | Xem bản build đã tạo trên máy local |

## Cấu trúc dự án

```text
BookingCar/
├── README.md
├── .gitignore
└── Frontend/
    ├── frontend.mdc            # Quy tắc local, không được Git theo dõi
    ├── README.md               # Hướng dẫn tổ chức mã nguồn
    ├── package.json
    ├── package-lock.json
    ├── index.html              # HTML đầu vào của Vite
    ├── vite.config.ts
    ├── tsconfig*.json          # Cấu hình TypeScript
    ├── .oxlintrc.json          # Cấu hình lint
    ├── public/                 # Tài nguyên phục vụ trực tiếp theo URL
    └── src/
        ├── main.tsx            # Khởi tạo React và nạp CSS
        ├── App.tsx             # Ghép layout với trang chủ
        ├── pages/              # Trang hoàn chỉnh
        ├── components/
        │   ├── common/         # Thành phần dùng chung
        │   ├── layout/         # Navbar, Footer và khung trang
        │   ├── sections/       # Các section trang chủ
        │   └── illustrations/  # Hình minh họa SVG bằng React
        ├── features/booking/   # Component, hook và kiểu của form tìm chuyến
        ├── data/home/          # Nội dung tĩnh của trang chủ
        ├── types/              # Kiểu dữ liệu nội dung
        ├── styles/             # CSS toàn cục và design token
        └── utils/              # Tiện ích dùng chung
```

`node_modules/` được tạo khi cài dependency; `dist/` được tạo khi build. Cả hai nằm trong `Frontend` và được Git bỏ qua.

## Chỉnh sửa nội dung và giao diện

| Nội dung cần sửa | Vị trí |
| --- | --- |
| Thứ tự các section trang chủ | `Frontend/src/pages/HomePage.tsx` |
| Dịch vụ, tuyến đường, FAQ và hướng dẫn | `Frontend/src/data/home/` |
| Form tìm chuyến và xử lý tương tác | `Frontend/src/features/booking/` |
| Navbar, Footer và layout | `Frontend/src/components/layout/` |
| Nội dung và bố cục từng section | `Frontend/src/components/sections/` |
| Màu sắc và typography dùng chung | `Frontend/src/styles/tokens.css` |
| CSS toàn cục | `Frontend/src/styles/global.css` |

## Quy trình đóng góp

1. Đọc file quy tắc `Frontend/frontend.mdc` trên máy local (nếu có) trước khi viết hoặc review code. File này không được đưa lên GitHub.
2. Đặt code đúng trách nhiệm; tách xử lý nghiệp vụ khỏi component trình bày và tái sử dụng các tiện ích chung.
3. Giữ phạm vi thay đổi phù hợp với yêu cầu; không thêm dependency hoặc thư mục chưa cần dùng.
4. Chạy `npm run lint` và `npm run build` trước khi merge.
5. Khi sửa UI, kiểm tra mobile, tablet, desktop và thao tác bằng bàn phím; bổ sung ảnh desktop/mobile trong PR.
6. Khi sửa form, kiểm tra validation, đổi tab, giữ dữ liệu và các trạng thái liên quan.

Xem thêm [hướng dẫn cấu trúc frontend](./Frontend/README.md).

## Build và triển khai

```sh
cd Frontend
npm run build
npm run preview
```

Bản production được tạo trong `Frontend/dist/`. Khi triển khai lên hosting tĩnh, sử dụng toàn bộ nội dung thư mục này, bao gồm `index.html` và `assets/`.

Các file trong `dist/assets/` là JavaScript, CSS và tài nguyên đã xử lý. Tên file có hash để quản lý cache. Chỉnh sửa mã nguồn trong `src/`, sau đó build lại để cập nhật bản triển khai. `npm run preview` dùng để kiểm tra bản build trên máy local.

## Phạm vi chưa triển khai

Dự án chưa có tích hợp API, đăng nhập, thanh toán hoặc luồng đặt xe hoàn chỉnh. Giá, tình trạng xe và xác nhận đặt chuyến chưa được xử lý bởi Backend. Các biểu mẫu demo và nội dung chính sách/thông tin liên hệ cần được hoàn thiện theo nghiệp vụ thực tế trước khi đưa vào sử dụng chính thức.

## CI/CD với GitHub Actions và Vercel

Workflow nằm tại [`.github/workflows/frontend-ci.yml`](./.github/workflows/frontend-ci.yml).

- **CI:** chạy khi push vào `main`, mở/cập nhật pull request tới `main` hoặc chạy thủ công. Pipeline cài dependency bằng `npm ci`, chạy lint, build và lưu artifact `frontend-dist` trong 7 ngày.
- **CD:** chỉ triển khai production từ `main` sau khi CI thành công. Pipeline tải artifact `frontend-dist` của chính lần chạy CI, lấy cấu hình project production, đóng gói theo Build Output API v3 và deploy bằng `vercel deploy --prebuilt --prod`. Không build lại trong CD. Pull request không sử dụng secrets triển khai.
- **Kiểm tra sau deploy:** pipeline tải trang `https://booking-car-pi.vercel.app/` và so sánh HTML với bản build của CI; nếu domain chưa phục vụ đúng bản build, job báo lỗi.
- Node.js 22 được dùng trong pipeline. Nếu thiếu secret, job CD dừng và thông báo tên cấu hình còn thiếu.

### Thiết lập lần đầu

1. Mở **project Vercel hiện có** đang sở hữu `booking-car-pi.vercel.app`. Trong **Settings → Domains**, kiểm tra domain này được gán cho production của project. Nếu import repository, đặt **Root Directory** là `Frontend`, framework là **Vite** và Node.js là **22.x**. Không tạo project mới nếu muốn giữ domain hiện tại.
2. Tạo token tại [Vercel Tokens](https://vercel.com/account/tokens). Chạy `npx vercel@63.1.2 link` tại gốc repository và chọn đúng team/project ở bước 1; lấy `orgId` và `projectId` trong `.vercel/project.json`. Không gửi token qua chat hoặc ghi vào mã nguồn.
3. Trong GitHub repository, vào **Settings → Secrets and variables → Actions**, thêm ba repository secrets:

   | Secret | Giá trị |
   | --- | --- |
   | `VERCEL_TOKEN` | Token Vercel có quyền triển khai project |
   | `VERCEL_ORG_ID` | Giá trị `orgId` |
   | `VERCEL_PROJECT_ID` | Giá trị `projectId` |

4. Đảm bảo Vercel không tự deploy qua Git song song với pipeline. `Frontend/vercel.json` đặt `git.deploymentEnabled: false` để GitHub Actions quản lý triển khai.
5. Commit/push cấu hình cùng thư mục `Frontend` lên `main`. Theo dõi workflow trong tab **Actions**; URL triển khai xuất hiện trong job summary và environment `production` khi CD thành công.

Có thể chạy lại bằng **Actions → Frontend CI/CD → Run workflow**, chọn nhánh `main`. Chạy thủ công trên nhánh khác chỉ thực hiện CI.

Pipeline hiện triển khai frontend tĩnh, chưa cần biến môi trường build. Nếu sau này thêm biến `VITE_*`, phải cung cấp chúng trong job `validate` trước bước build; chúng sẽ được công khai trong JavaScript trình duyệt. Nếu thêm backend hoặc SSR, cần đổi cách đóng gói thay vì chỉ sao chép `dist`.

Không commit token, file `.vercel` hoặc các cấu hình production được CLI tải xuống. Thư mục `.vercel` đã được Git bỏ qua. Nếu cần bắt buộc CI đạt trước khi merge, cấu hình branch protection cho `main` với status check **Lint and build** sau lần chạy đầu tiên.

Pipeline hiện kiểm tra lint và build; dự án chưa có script kiểm thử tự động. Hướng dẫn triển khai tham khảo [tài liệu GitHub Actions của Vercel](https://vercel.com/kb/guide/how-can-i-use-github-actions-with-vercel).
