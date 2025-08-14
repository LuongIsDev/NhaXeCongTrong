import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star, Shield, Clock, Car, Users, Award, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-vehicles.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <Car className="absolute top-20 left-10 h-12 w-12 text-accent/10 animate-pulse" />
        <Users className="absolute top-32 right-20 h-8 w-8 text-accent/10 animate-bounce" />
        <Award className="absolute bottom-40 left-20 h-10 w-10 text-accent/10 animate-pulse" />
        <CheckCircle className="absolute bottom-60 right-32 h-6 w-6 text-accent/10 animate-bounce" />
        <MapPin className="absolute top-48 left-1/4 h-8 w-8 text-accent/10 animate-pulse" />
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional taxi service vehicles" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ Dịch vụ taxi hàng đầu miền Bắc
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Taxi Uy Tín
                <span className="block text-accent">An Toàn Chất Lượng</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Dịch vụ taxi chuyên nghiệp với đội xe 5c-7c-16c, phục vụ tận tâm 
                cho mọi nhu cầu di chuyển của bạn
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-primary-foreground">
                <Shield className="h-8 w-8 text-accent" />
                <span className="font-semibold">An toàn tuyệt đối</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-primary-foreground">
                <Clock className="h-8 w-8 text-accent" />
                <span className="font-semibold">Phục vụ 24/7</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-primary-foreground">
                <Star className="h-8 w-8 text-accent" />
                <span className="font-semibold">Uy tín hàng đầu</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                <Phone className="h-5 w-5 mr-2" />
                Gọi ngay: 0387922188
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/80 text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary backdrop-blur-sm">
                <MapPin className="h-5 w-5 mr-2" />
                Xem bảng giá
              </Button>
            </div>
          </div>

          {/* Contact Card */}
          <div className="animate-slide-up">
            <div className="bg-background/95 backdrop-blur-md rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                Đặt xe ngay
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 p-4 bg-gradient-card rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-primary">Hotline/Zalo</div>
                    <div className="text-2xl font-bold text-accent">0387922188</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-center p-3 bg-muted rounded-lg flex flex-col items-center space-y-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div className="font-semibold text-primary">Taxi gia đình</div>
                  <div className="text-muted-foreground">Xe 5c-7c</div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg flex flex-col items-center space-y-2">
                  <Award className="h-5 w-5 text-primary" />
                  <div className="font-semibold text-primary">Xe hợp đồng</div>
                  <div className="text-muted-foreground">Theo tháng</div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg flex flex-col items-center space-y-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="font-semibold text-primary">Tour du lịch</div>
                  <div className="text-muted-foreground">Tham quan</div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg flex flex-col items-center space-y-2">
                  <Car className="h-5 w-5 text-primary" />
                  <div className="font-semibold text-primary">Sân bay</div>
                  <div className="text-muted-foreground">Đưa đón</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;