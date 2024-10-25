const products = [
    { id: 1, ten_sp: "PC gameming bàn phím cơ ", image: "../image/product/product1.jpg", gia: 15000000 },
    { id: 2, ten_sp: "PC gameming GTX08", image: "../image/product/product2.jpg", gia: 25000000 },
    { id: 3, ten_sp: "PC gameming core i7", image: "../image/product/product3.jpg", gia: 3000000 },
    { id: 4, ten_sp: "PC gameming core i5", image: "../image/product/product4.jpg", gia: 1200000 },
    { id: 5, ten_sp: "PC gameming tích hợp tảng nhiệt nước", image: "../image/product/product5.jpg", gia: 20000000 },
    { id: 6, ten_sp: "PC gameming đồ họa full HD", image: "../image/product/product6.jpg", gia: 10000000 },
    { id: 7, ten_sp: "PC gameming chiến game", image: "../image/product/product7.jpg", gia: 35000000 },
    { id: 8, ten_sp: "PC gameming full cấu hình", image: "../image/product/product8.jpg", gia: 5000000 },
    { id: 9, ten_sp: "PC gameming 1", image: "../image/product/product9.jpg", gia: 22000000 },
    { id: 10, ten_sp: "PC gameming 2", image: "../image/product/product10.jpg", gia: 4000000 },
    { id: 11, ten_sp: "PC gameming 3", image: "../image/product/product11.jpg", gia: 30000000 },
    { id: 12, ten_sp: "PC gameming 4", image: "../image/product/product12.jpg", gia: 2500000 }
];
const users = [
    { id: 1, fullname: "Nguyễn Văn A", password: "pass123", email: "nva@example.com", phai: false },
    { id: 2, fullname: "Trần Thị B", password: "password456", email: "ttb@example.com", phai: true },
    { id: 3, fullname: "Lê Hoàng C", password: "hoang789", email: "lhc@example.com", phai: true },
    { id: 4, fullname: "Xuân Trường", password: "12345", email: "truongnnx27@gmail.com", phai: true }
];
const coso = [
    { id: 1, ten: "Cơ sở Hồ Chí Minh", diachi: "Tòa nhà ABC, Quận 1", hinh: "../image/cuahang1.jpg" },
    { id: 2, ten: "Cơ sở Hà Nội", diachi: "Số 123, Quận Cầu Giấy", hinh: "../image/cuahang2.jpg" },
    { id: 3, ten: "Cơ sở Đà Nẵng", diachi: "Khu Công Nghệ Cao, Quận Liên Chiểu", hinh: "../image/cuahang3.jpg" },
    { id: 4, ten: "Cơ sở Đăk Lăk", diachi: "Thành phố Buôn Ma Thuột", hinh: "../image/cuahang4.jpg" },
    { id: 5, ten: "Cơ sở Đăk Nông", diachi: "Gia Nghĩa", hinh: "../image/cuahang5.jpg" },
    { id: 6, ten: "Cơ sở Bình Định", diachi: "Phù Cát", hinh: "../image/cuahang6.jpg" },
    { id: 7, ten: "Cơ sở Quy Nhơn", diachi: "Thành phố Quy Nhơn", hinh: "../image/cuahang7.jpg" },
    { id: 8, ten: "Cơ sở Đà Lạt", diachi: "Đà Lạt", hinh: "../image/cuahang8.jpg" },
    { id: 8, ten: "Cơ sở Hải Phòng", diachi: "Hải Phòng", hinh: "../image/cuahang9.jpg" },
    { id: 8, ten: "Cơ sở Kom Tum", diachi: "Kom Tum", hinh: "..//image/cuahang10.jpg" },
    { id: 8, ten: "Cơ sở Huế", diachi: "Huế", hinh: "../image/cuahang11.jpg" },
    { id: 8, ten: "Cơ sở Ninh Bình", diachi: "Ninh Bình", hinh: "../image/cuahang12.jpg" }
];
const spthuocCS = [
    { id: 1, ten_sp: "Laptop Asus", image: "/Assignment/image/laptop_asus.jpg", gia: 15000000, ten: "Cơ sở Hồ Chí Minh", diachi: "Tòa nhà ABC, Quận 1", hinh: "/Assignment/image/hcm.jpg" },
    { id: 2, ten_sp: "iPhone 13", image: "/Assignment/image/iphone13.jpg", gia: 25000000, ten: "Cơ sở Hà Nội", diachi: "Số 123, Quận Cầu Giấy", hinh: "/Assignment/image/hn.jpg" },
    { id: 3, ten_sp: "Tai nghe Sony", image: "/Assignment/image/tai_nghe_sony.jpg", gia: 3000000, ten: "Cơ sở Đà Nẵng", diachi: "Khu Công Nghệ Cao, Quận Liên Chiểu", hinh: "/Assignment/image/dn.jpg" },
    { id: 4, ten_sp: "MacBook Pro", image: "/Assignment/image/macbook_pro.jpg", gia: 35000000, ten: "Cơ sở Hồ Chí Minh", diachi: "Tòa nhà XYZ, Quận 3", hinh: "/Assignment/image/hcm.jpg" },
    { id: 5, ten_sp: "Samsung Galaxy S21", image: "/Assignment/image/samsung_s21.jpg", gia: 20000000, ten: "Cơ sở Hà Nội", diachi: "Số 456, Quận Thanh Xuân", hinh: "/Assignment/image/hn.jpg" },
    { id: 6, ten_sp: "Loa JBL", image: "/Assignment/image/loa_jbl.jpg", gia: 5000000, ten: "Cơ sở Đà Nẵng", diachi: "Đường Võ Nguyên Giáp, Quận Sơn Trà", hinh: "/Assignment/image/dn.jpg" },
    { id: 7, ten_sp: "Laptop Dell XPS", image: "/Assignment/image/dell_xps.jpg", gia: 27000000, ten: "Cơ sở Hồ Chí Minh", diachi: "Tòa nhà 789, Quận 7", hinh: "/Assignment/image/hcm.jpg" },
    { id: 8, ten_sp: "Apple Watch Series 7", image: "/Assignment/image/apple_watch_s7.jpg", gia: 10000000, ten: "Cơ sở Hà Nội", diachi: "Số 789, Quận Ba Đình", hinh: "/Assignment/image/hn.jpg" },
    { id: 9, ten_sp: "Máy ảnh Canon", image: "/Assignment/image/canon_camera.jpg", gia: 22000000, ten: "Cơ sở Đà Nẵng", diachi: "Đường Ngô Quyền, Quận Hải Châu", hinh: "/Assignment/image/dn.jpg" },
    { id: 10, ten_sp: "Máy lọc không khí Xiaomi", image: "/Assignment/image/may_loc_khong_khi.jpg", gia: 4000000, ten: "Cơ sở Hồ Chí Minh", diachi: "Tòa nhà LMN, Quận Phú Nhuận", hinh: "/Assignment/image/hcm.jpg" },
    { id: 11, ten_sp: "TV LG OLED", image: "/Assignment/image/lg_oled_tv.jpg", gia: 30000000, ten: "Cơ sở Hà Nội", diachi: "Số 321, Quận Đống Đa", hinh: "/Assignment/image/hn.jpg" },
    { id: 12, ten_sp: "Bàn phím cơ Razer", image: "/Assignment/image/ban_phim_razer.jpg", gia: 2500000, ten: "Cơ sở Đà Nẵng", diachi: "Đường Nguyễn Văn Linh, Quận Thanh Khê", hinh: "images/dn.jpg" }
];
export { products, users, coso, spthuocCS };
