import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Phone } from "lucide-react";

const Pricing = () => {
  const routes = [
    {
      from: "Hà Nội",
      to: "Móng Cái",
      shared: { single: "700k", double: "1.200k" },
      private: { car5: "2.200k", car7: "2.300k" },
      popular: true
    },
    {
      from: "Hà Nội", 
      to: "Cẩm Phả",
      shared: { single: "500k-550k", double: "900k" },
      private: { car5: "1.300k", car7: "1.400k" }
    },
    {
      from: "Hà Nội",
      to: "Hải Phòng", 
      shared: { single: "400k-450k", double: "700k" },
      private: { car5: "900k", car7: "1.000k" }
    },
    {
      from: "Hà Nội",
      to: "Hạ Long",
      shared: { single: "450k-500k", double: "800k" },
      private: { car5: "1.100k", car7: "1.200k" }
    },
    {
      from: "Hải Phòng",
      to: "Hạ Long",
      shared: { single: "250k", double: "350k" },
      private: { car5: "400k", car7: "500k" }
    },
    {
      from: "Hải Phòng", 
      to: "Vân Đồn",
      shared: { single: "400k-450k", double: "700k" },
      private: { car5: "1.000k", car7: "1.100k" }
    },
    {
      from: "Hạ Long",
      to: "Móng Cái",
      shared: { single: "350k", double: "700k" },
      private: { car5: "1.000k", car7: "1.100k" }
    },
    {
      from: "Hải Phòng",
      to: "Móng Cái", 
      shared: { single: "500k", double: "900k" },
      private: { car5: "1.500k", car7: "1.600k" }
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Bảng giá dịch vụ
          </span>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Giá cả minh bạch, hợp lý
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bảng giá chi tiết các tuyến đường phổ biến từ Hà Nội đi các tỉnh miền Bắc
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {routes.map((route, index) => (
            <Card key={index} className={`relative animate-slide-up hover:shadow-elegant transition-all duration-300 ${route.popular ? 'ring-2 ring-accent' : ''}`}>
              {route.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  Tuyến phổ biến
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-center space-x-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-primary">{route.from}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-primary">{route.to}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Xe ghép */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Xe ghép
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>1 ghế:</span>
                      <span className="font-semibold text-accent">{route.shared.single}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 ghế:</span>
                      <span className="font-semibold text-accent">{route.shared.double}</span>
                    </div>
                  </div>
                </div>

                {/* Bao xe */}
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">Bao xe</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Xe 5 chỗ:</span>
                      <span className="font-semibold text-primary">{route.private.car5}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Xe 7 chỗ:</span>
                      <span className="font-semibold text-primary">{route.private.car7}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact for booking */}
        <div className="text-center animate-fade-in">
          <Card className="inline-block bg-gradient-hero text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Đặt xe ngay</h3>
              <p className="mb-6 opacity-90">
                Liên hệ để được tư vấn và đặt xe với giá tốt nhất
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground">
                <Phone className="h-5 w-5 mr-2" />
                Gọi 0387922188
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>* Giá có thể thay đổi tùy theo thời gian và điều kiện đường xá</p>
          <p>* Liên hệ để được báo giá chi tiết và ưu đãi đặc biệt</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;