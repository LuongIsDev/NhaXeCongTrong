import { Car, Users, Heart, Plane, Calendar, Route } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Taxi gia đình",
      description: "Xe 5c-7c thoải mái, phục vụ gia đình và cá nhân",
      features: ["Xe đời mới", "Lái xe chuyên nghiệp", "Giá cả hợp lý"]
    },
    {
      icon: Calendar,
      title: "Xe hợp đồng",
      description: "Thuê xe theo tháng với giá ưu đãi",
      features: ["Ưu đãi dài hạn", "Lịch trình linh hoạt", "Phục vụ chuyên biệt"]
    },
    {
      icon: Route,
      title: "Tour tham quan",
      description: "Khám phá các địa điểm du lịch nổi tiếng",
      features: ["Hướng dẫn viên", "Lịch trình tùy chỉnh", "Trải nghiệm đáng nhớ"]
    },
    {
      icon: Heart,
      title: "Xe cưới hỏi",
      description: "Dịch vụ xe hoa, rước dâu chuyên nghiệp",
      features: ["Trang trí xe hoa", "Lễ tân chu đáo", "Ngày vui trọn vẹn"]
    },
    {
      icon: Plane,
      title: "Đưa đón sân bay",
      description: "Đưa đón sân bay Nội Bài tiện lợi",
      features: ["Đúng giờ", "Theo dõi chuyến bay", "Hỗ trợ hành lý"]
    },
    {
      icon: Users,
      title: "Xe ghép - Tiện chuyến",
      description: "Chia sẻ chi phí, tiết kiệm hơn",
      features: ["Giá ưu đãi", "Lịch trình cố định", "An toàn đảm bảo"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Dịch vụ của chúng tôi
          </span>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Đa dạng dịch vụ taxi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Từ taxi gia đình đến xe cưới hỏi, chúng tôi phục vụ mọi nhu cầu di chuyển của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 animate-slide-up border-0 bg-gradient-card">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;