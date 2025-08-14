import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import halongImage from "@/assets/destination-halong.jpg";
import mongcaiImage from "@/assets/destination-mongcai.jpg";
import camphaImage from "@/assets/destination-campha.jpg";
import haiphongImage from "@/assets/destination-haiphong.jpg";

const Destinations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const destinations = [
    {
      image: halongImage,
      name: "Vịnh Hạ Long",
      location: "Quảng Ninh",
      description: "Di sản thế giới với vẻ đẹp kỳ vĩ của thiên nhiên",
      highlights: ["Hang Sửng Sốt", "Đảo Titov", "Làng chài Cửa Vạn"],
      rating: 4.9
    },
    {
      image: mongcaiImage,
      name: "Móng Cái",
      location: "Quảng Ninh",
      description: "Thành phố biên giới với nhiều hoạt động thương mại sôi động",
      highlights: ["Cửa khẩu quốc tế", "Chợ Đông Hưng", "Bãi biển Trà Cổ"],
      rating: 4.6
    },
    {
      image: camphaImage,
      name: "Cẩm Phả",
      location: "Quảng Ninh", 
      description: "Thành phố than với cảnh quan đẹp và không khí trong lành",
      highlights: ["Bảo tàng Than", "Công viên Hoàng Hoa Thám", "Chùa Cẩm Lộng"],
      rating: 4.4
    },
    {
      image: haiphongImage,
      name: "Hải Phòng",
      location: "Hải Phòng",
      description: "Thành phố cảng lớn với kiến trúc Pháp cổ kính",
      highlights: ["Cầu Long Biên", "Nhà hát lớn", "Chợ Sắt"],
      rating: 4.7
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Điểm đến hấp dẫn
          </span>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Khám phá miền Bắc
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cùng chúng tôi khám phá những địa điểm du lịch nổi tiếng và thú vị tại miền Bắc
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {destinations.map((destination, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 lg:h-[500px]">
                    <img 
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="max-w-2xl">
                        <div className="flex items-center mb-2">
                          <MapPin className="h-5 w-5 mr-2 text-accent" />
                          <span className="text-accent font-semibold">{destination.location}</span>
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                          {destination.name}
                        </h3>
                        
                        <p className="text-lg mb-6 opacity-90 leading-relaxed">
                          {destination.description}
                        </p>
                        
                        <div className="flex items-center mb-4 space-x-4">
                          <div className="flex items-center">
                            <Star className="h-5 w-5 text-accent fill-current" />
                            <span className="ml-1 font-semibold">{destination.rating}</span>
                          </div>
                          <div className="text-sm opacity-75">
                            {destination.highlights.join(" • ")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <Button
              size="icon"
              variant="outline"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background border-primary/20"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background border-primary/20"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary scale-110' 
                    : 'bg-muted-foreground hover:bg-primary/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Destination cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {destinations.map((destination, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 cursor-pointer" onClick={() => setCurrentSlide(index)}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-primary mb-2">{destination.name}</h4>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {destination.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-accent fill-current" />
                  <span className="ml-1 text-sm font-semibold">{destination.rating}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;