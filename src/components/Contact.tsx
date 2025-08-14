import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from "lucide-react";

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
            Liên hệ ngay để được tư vấn và đặt xe với giá tốt nhất
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
                    <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Zalo</h4>
                      <p className="text-lg font-semibold">0387922188</p>
                      <p className="text-sm opacity-90">Chat nhanh, tiện lợi</p>
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
            <div className="grid grid-cols-2 gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-glow text-accent-foreground h-16"
                onClick={() => window.open('tel:0387922188')}
              >
                <Phone className="h-5 w-5 mr-2" />
                Gọi ngay
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-16"
                onClick={() => window.open('https://zalo.me/0387922188')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat Zalo
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Đặt xe online
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Họ và tên *
                    </label>
                    <Input placeholder="Nhập họ tên" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Số điện thoại *
                    </label>
                    <Input placeholder="Nhập số điện thoại" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Điểm đón
                    </label>
                    <Input placeholder="Từ đâu?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Điểm đến
                    </label>
                    <Input placeholder="Đi đâu?" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Loại xe
                    </label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option>Xe 5 chỗ</option>
                      <option>Xe 7 chỗ</option>
                      <option>Xe 16 chỗ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Thời gian
                    </label>
                    <Input type="datetime-local" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ghi chú
                  </label>
                  <Textarea 
                    placeholder="Yêu cầu đặc biệt (không bắt buộc)"
                    rows={4}
                  />
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary-glow">
                  <Send className="h-5 w-5 mr-2" />
                  Gửi yêu cầu đặt xe
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  💡 <strong>Mẹo:</strong> Gọi trực tiếp <span className="text-accent font-semibold">0387922188</span> để được tư vấn và đặt xe nhanh hơn
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;