import { Phone, CheckCircle, Star, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CounterStat from "@/components/CounterStat";
import heroImage from "@/assets/hero-car.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: "Collision Repair",
      description: "Expert collision repair with state-of-the-art equipment and techniques.",
    },
    {
      icon: Award,
      title: "Paint & Refinishing",
      description: "Professional paint matching and refinishing for a flawless finish.",
    },
    {
      icon: CheckCircle,
      title: "Dent Removal",
      description: "Paintless dent repair and traditional dent removal services.",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast and efficient service without compromising quality.",
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
            Luxury Auto Body
            <br />
            <span className="text-accent">Restoration Experts</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Professional collision repair and restoration with over 20 years of excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="tel:+1234567890">
              <Button variant="luxury" size="xl" className="text-lg">
                <Phone className="h-6 w-6" />
                Call for Free Estimate
              </Button>
            </a>
            <Button variant="luxury-outline" size="xl" className="text-lg">
              View Our Services
            </Button>
          </div>
          <p className="text-white mt-6 text-lg">
            ✓ Free Estimates ✓ Insurance Accepted ✓ Lifetime Warranty
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete auto body repair and restoration services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-accent animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Before & After</h2>
            <p className="text-xl text-muted-foreground">
              See the transformation our expert team delivers
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-white/80">Excellence backed by experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <CounterStat end={5000} suffix="+" label="Cars Repaired" />
            <CounterStat end={20} suffix="+" label="Years Experience" />
            <CounterStat end={98} suffix="%" label="Customer Satisfaction" />
            <CounterStat end={15} suffix="+" label="Expert Technicians" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real reviews from real customers</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Guarantee</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We stand behind our work with a lifetime warranty on all repairs. Your satisfaction is our
            priority.
          </p>
          <a href="tel:+1234567890">
            <Button variant="luxury-outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
              <Phone className="h-6 w-6" />
              Get Your Free Estimate Today
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
