import { MapPin, Phone, MessageCircle, Clock, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-accent p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Nhà Xe Công Trọng</h3>
                <p className="text-sm opacity-80">Uy tín - An toàn - Chất lượng</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Dịch vụ taxi chuyên nghiệp với đội xe hiện đại, phục vụ tận tâm 
              mọi nhu cầu di chuyển của khách hàng tại miền Bắc.
            </p>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 text-accent fill-current" />
              ))}
              <span className="text-sm ml-2 opacity-80">5.0 từ khách hàng</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Dịch vụ</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Taxi gia đình 5c-7c</li>
              <li>• Xe hợp đồng theo tháng</li>
              <li>• Tour tham quan du lịch</li>
              <li>• Xe cưới hỏi</li>
              <li>• Đưa đón sân bay</li>
              <li>• Xe ghép tiện chuyến</li>
              <li>• Xe 16 chỗ nhóm đông</li>
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tuyến đường chính</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Hà Nội - Hạ Long</li>
              <li>• Hà Nội - Móng Cái</li>
              <li>• Hà Nội - Hải Phòng</li>
              <li>• Hà Nội - Cẩm Phả</li>
              <li>• Hải Phòng - Hạ Long</li>
              <li>• Hải Phòng - Vân Đồn</li>
              <li>• Và nhiều tuyến khác</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-accent">0387922188</p>
                  <p className="text-xs opacity-80">Hotline 24/7</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">Zalo: 0387922188</p>
                  <p className="text-xs opacity-80">Chat tư vấn nhanh</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">24/7</p>
                  <p className="text-xs opacity-80">Phục vụ cả tuần</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2024 Taxi Miền Bắc. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-sm opacity-80">
              Uy tín - An toàn - Chất lượng - Hotline: <span className="text-accent font-semibold">0387922188</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;