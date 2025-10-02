import { Phone, CheckCircle, Star, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CounterStat from "@/components/CounterStat";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-car.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";

const Home = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Shield,
      title: t("home.services.collision"),
      description: t("home.services.collisionDesc"),
    },
    {
      icon: Award,
      title: t("home.services.paint"),
      description: t("home.services.paintDesc"),
    },
    {
      icon: CheckCircle,
      title: t("home.services.dent"),
      description: t("home.services.dentDesc"),
    },
    {
      icon: Clock,
      title: t("home.services.quick"),
      description: t("home.services.quickDesc"),
    },
  ];

  const testimonials = [
    {
      name: "John Martinez",
      text: "Incredible work! My car looks brand new. The attention to detail is outstanding.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      text: "Best auto body shop in the area. Professional, honest, and the quality is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "They exceeded my expectations. My luxury vehicle was treated with the care it deserves.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t("home.hero.title")}
            <br />
            <span className="text-accent">{t("home.hero.subtitle")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t("home.hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="tel:+1234567890">
              <Button variant="luxury" size="xl" className="text-lg">
                <Phone className="h-6 w-6" />
                {t("home.hero.cta")}
              </Button>
            </a>
            <Button variant="luxury-outline" size="xl" className="text-lg">
              {t("home.hero.viewServices")}
            </Button>
          </div>
          <p className="text-white mt-6 text-lg">
            {t("home.hero.badges")}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("home.services.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-accent animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <a href="tel:+1234567890" className="mt-auto">
                  <Button variant="luxury" size="sm" className="w-full">
                    <Phone className="h-4 w-4" />
                    {t("home.services.cta")}
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("home.beforeAfter.title")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("home.beforeAfter.subtitle")}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <img
              src={beforeAfterImage}
              alt="Before and after car repair"
              className="w-full rounded-lg shadow-2xl animate-scale-in"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("home.whyChoose.title")}</h2>
            <p className="text-xl text-white/80">{t("home.whyChoose.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <CounterStat end={5000} suffix="+" label={t("home.whyChoose.cars")} />
            <CounterStat end={20} suffix="+" label={t("home.whyChoose.years")} />
            <CounterStat end={98} suffix="%" label={t("home.whyChoose.satisfaction")} />
            <CounterStat end={15} suffix="+" label={t("home.whyChoose.technicians")} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("home.testimonials.title")}</h2>
            <p className="text-xl text-muted-foreground">{t("home.testimonials.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-20 w-20 mx-auto mb-6 animate-scale-in" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("home.guarantee.title")}</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t("home.guarantee.description")}
          </p>
          <a href="tel:+1234567890">
            <Button variant="luxury-outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
              <Phone className="h-6 w-6" />
              {t("home.guarantee.cta")}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
