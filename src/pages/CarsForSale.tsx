import { Phone, Gauge, Calendar, MapPin, CheckCircle, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

const CarsForSale = () => {
  const { t } = useLanguage();

  const cars = [
    {
      year: 2020,
      make: "Mercedes-Benz",
      model: "E-Class",
      price: "$45,900",
      mileage: "32,000",
      features: ["Premium Package", "Navigation", "Leather Seats", "Sunroof"],
      condition: "Excellent",
      images: [
        { title: "Front View", color: "from-accent/20 to-primary/20" },
        { title: "Interior", color: "from-primary/20 to-accent/20" },
        { title: "Side View", color: "from-accent/30 to-primary/10" }
      ]
    },
    {
      year: 2019,
      make: "BMW",
      model: "5 Series",
      price: "$42,500",
      mileage: "28,500",
      features: ["Sport Package", "Premium Sound", "Heated Seats", "Backup Camera"],
      condition: "Like New",
      images: [
        { title: "Front View", color: "from-blue-500/20 to-primary/20" },
        { title: "Interior", color: "from-primary/20 to-blue-500/20" },
        { title: "Rear View", color: "from-blue-500/30 to-primary/10" }
      ]
    },
    {
      year: 2021,
      make: "Audi",
      model: "A6",
      price: "$48,900",
      mileage: "24,000",
      features: ["Quattro AWD", "Virtual Cockpit", "Premium Plus", "Adaptive Cruise"],
      condition: "Excellent",
      images: [
        { title: "Front View", color: "from-accent/20 to-primary/20" },
        { title: "Dashboard", color: "from-primary/20 to-accent/20" },
        { title: "Profile", color: "from-accent/30 to-primary/10" }
      ]
    },
    {
      year: 2018,
      make: "Lexus",
      model: "ES 350",
      price: "$35,900",
      mileage: "38,000",
      features: ["Luxury Package", "Mark Levinson Audio", "Heated/Cooled Seats", "Lane Keep"],
      condition: "Very Good",
      images: [
        { title: "Front", color: "from-gray-400/20 to-primary/20" },
        { title: "Interior", color: "from-primary/20 to-gray-400/20" },
        { title: "Side", color: "from-gray-400/30 to-primary/10" }
      ]
    },
    {
      year: 2020,
      make: "Tesla",
      model: "Model 3",
      price: "$39,900",
      mileage: "18,000",
      features: ["Long Range", "Autopilot", "Premium Interior", "Supercharging"],
      condition: "Excellent",
      images: [
        { title: "Front View", color: "from-accent/20 to-primary/20" },
        { title: "Screen", color: "from-primary/20 to-accent/20" },
        { title: "Charging", color: "from-accent/30 to-primary/10" }
      ]
    },
    {
      year: 2019,
      make: "Porsche",
      model: "Macan",
      price: "$52,900",
      mileage: "26,000",
      features: ["Sport Chrono", "PASM Suspension", "Panoramic Roof", "Bose Audio"],
      condition: "Like New",
      images: [
        { title: "Front", color: "from-red-500/20 to-primary/20" },
        { title: "Cockpit", color: "from-primary/20 to-red-500/20" },
        { title: "Rear", color: "from-red-500/30 to-primary/10" }
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("cars.hero.title")}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {t("cars.hero.subtitle")}
            </p>
            <a href="tel:+17869735376">
              <Button variant="luxury" size="xl">
                <Phone className="h-6 w-6" />
                {t("cars.hero.cta")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Swipeable Image Carousel */}
                <Carousel className="w-full">
                  <CarouselContent>
                    {car.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className={`h-48 bg-gradient-to-br ${image.color} flex items-center justify-center`}>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-accent">
                              {car.year} {car.make}
                            </p>
                            <p className="text-xl text-muted-foreground">{car.model}</p>
                            <p className="text-sm text-muted-foreground mt-2">{image.title}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        {car.year} {car.make}
                      </h3>
                      <p className="text-lg text-muted-foreground">{car.model}</p>
                    </div>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {car.condition}
                    </Badge>
                  </div>

                  <div className="text-3xl font-bold text-accent mb-4">{car.price}</div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Gauge className="h-5 w-5 mr-2 text-accent" />
                      <span>{car.mileage} {t("cars.mileage")}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-5 w-5 mr-2 text-accent" />
                      <span>{car.year} {t("cars.modelYear")}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <p className="font-semibold mb-2">{t("cars.features")}</p>
                    <ul className="space-y-1">
                      {car.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="tel:+17869735376" className="block">
                    <Button variant="luxury" size="lg" className="w-full">
                      <Phone className="h-5 w-5" />
                      {t("cars.callToInquire")}
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("cars.why.title")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("cars.why.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <Shield className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{t("cars.why.inspected")}</h3>
              <p className="text-muted-foreground">
                {t("cars.why.inspectedDesc")}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <Award className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{t("cars.why.history")}</h3>
              <p className="text-muted-foreground">
                {t("cars.why.historyDesc")}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{t("cars.why.guarantee")}</h3>
              <p className="text-muted-foreground">
                {t("cars.why.guaranteeDesc")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("cars.visit.title")}</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t("cars.visit.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17869735376">
              <Button variant="luxury-outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
                <Phone className="h-6 w-6" />
                {t("cars.visit.cta")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarsForSale;
