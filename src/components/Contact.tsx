import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Facebook, Star, Shield, Users, Award } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Liên hệ với chúng tôi
          </span>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Đặt xe và tư vấn
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Liên hệ ngay để được tư vấn miễn phí và đặt xe với giá tốt nhất
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <Card className="bg-gradient-hero text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hotline 24/7</h4>
                      <p className="text-2xl font-bold text-accent">0387922188</p>
                      <p className="text-sm opacity-90">Hỗ trợ đặt xe và tư vấn</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-400/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Zalo</h4>
                      <p className="text-lg font-semibold text-blue-300">0387922188</p>
                      <p className="text-sm opacity-90">Chat nhanh, tiện lợi</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-400/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Facebook className="h-6 w-6 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Facebook</h4>
                      <p className="text-lg font-semibold text-indigo-300">Taxi Uy Tín</p>
                      <p className="text-sm opacity-90">Messenger hỗ trợ 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Giờ hoạt động</h4>
                      <p className="font-semibold">24/7 - Cả tuần</p>
                      <p className="text-sm opacity-90">Phục vụ tận tâm mọi lúc</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Khu vực phục vụ</h4>
                      <p className="font-semibold">Hà Nội & Miền Bắc</p>
                      <p className="text-sm opacity-90">Phủ sóng toàn miền Bắc</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick actions */}
            <div className="grid grid-cols-3 gap-3">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white h-16"
                onClick={() => window.open('tel:0387922188')}
              >
                <Phone className="h-5 w-5 mr-1" />
                Gọi ngay
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white h-16"
                onClick={() => window.open('https://zalo.me/0387922188')}
              >
                <MessageCircle className="h-5 w-5 mr-1" />
                Chat Zalo
              </Button>
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white h-16"
                onClick={() => window.open('https://m.me/taxiuytin')}
              >
                <Facebook className="h-5 w-5 mr-1" />
                Messenger
              </Button>
            </div>
          </div>

          {/* Services & Benefits */}
          <Card className="animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Tại sao chọn chúng tôi?
              </h3>
              
              {/* Customer Reviews */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-lg">4.9/5</span>
                  <span className="text-muted-foreground ml-2">(500+ đánh giá)</span>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm italic mb-2">
                    "Dịch vụ tuyệt vời! Tài xế nhiệt tình, xe sạch sẽ, giá cả hợp lý. 
                    Đã sử dụng nhiều lần và rất hài lòng."
                  </p>
                  <p className="text-xs text-muted-foreground">- Anh Minh, Hà Nội</p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">An toàn tuyệt đối</h4>
                    <p className="text-sm text-muted-foreground">Tài xế giàu kinh nghiệm, xe được bảo dưỡng định kỳ</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Đúng giờ - Nhanh chóng</h4>
                    <p className="text-sm text-muted-foreground">Cam kết đón đúng giờ, tối ưu lộ trình di chuyển</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Đa dạng loại xe</h4>
                    <p className="text-sm text-muted-foreground">Xe 5c, 7c, 16c - phù hợp mọi nhu cầu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Giá cả hợp lý</h4>
                    <p className="text-sm text-muted-foreground">Minh bạch giá cước, có ưu đãi cho khách hàng thân thiết</p>
                  </div>
                </div>
              </div>

             

              {/* CTA */}
              <div className="mt-8 text-center">
                <p className="text-lg font-semibold text-primary mb-4">
                  Sẵn sàng phục vụ bạn 24/7
                </p>
                <div className="flex gap-3">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-accent hover:bg-accent/90"
                    onClick={() => window.open('tel:0387922188')}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Gọi: 0387922188
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;