import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Luggage, Shield, Star } from "lucide-react";
import car5Seater from "@/assets/car-5-seater.jpg";
import car7Seater from "@/assets/car-7-seater.jpg";
import car16Seater from "@/assets/car-16-seater.jpg";

const Vehicles = () => {
  const vehicles = [
    {
      image: car5Seater,
      name: "Xe 5 chỗ",
      type: "Sedan",
      capacity: "4-5",
      description: "Xe sedan cao cấp, phù hợp cho gia đình nhỏ và khách hàng cá nhân",
      features: [
        "Điều hòa 2 chiều",
        "Ghế da cao cấp", 
        "Cốp rộng rãi",
        "Âm thanh hiện đại"
      ],
      suitable: ["Gia đình nhỏ", "Công tác", "Sân bay"],
      badge: "Phổ biến"
    },
    {
      image: car7Seater,
      name: "Xe 7 chỗ",
      type: "SUV/MPV",
      capacity: "6-7",
      description: "SUV/MPV rộng rãi, thoải mái cho gia đình đông người",
      features: [
        "3 hàng ghế",
        "Cửa sổ trời",
        "Khoang hành lý lớn",
        "An toàn 5 sao"
      ],
      suitable: ["Gia đình lớn", "Nhóm bạn", "Du lịch"],
      badge: "Ưa chuộng"
    },
    {
      image: car16Seater,
      name: "Xe 16 chỗ",
      type: "Minibus",
      capacity: "12-16",
      description: "Xe 16 chỗ hiện đại, phục vụ nhóm đông người và tour du lịch",
      features: [
        "Ghế êm ái",
        "Điều hòa mạnh",
        "Micro karaoke",
        "Màn hình giải trí"
      ],
      suitable: ["Tour du lịch", "Công ty", "Sự kiện"],
      badge: "Cao cấp"
    }
  ];

  return (
    <section id="vehicles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Đội xe của chúng tôi
          </span>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Xe cộ chất lượng cao
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Đội xe đa dạng từ 5 chỗ đến 16 chỗ, đời mới, tiện nghi hiện đại
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 animate-slide-up overflow-hidden border-0">
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {vehicle.badge}
                </Badge>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center text-accent">
                    <Users className="h-5 w-5 mr-1" />
                    <span className="font-semibold">{vehicle.capacity}</span>
                  </div>
                </div>
                
                <p className="text-sm text-accent font-medium mb-2">{vehicle.type}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {vehicle.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Tiện nghi nổi bật
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Phù hợp cho
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.suitable.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;