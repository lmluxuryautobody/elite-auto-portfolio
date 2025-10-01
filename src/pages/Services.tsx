import { Phone, CheckCircle, Shield, Wrench, Sparkles, Car, PaintBucket, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import beforeAfterImage from "@/assets/before-after.jpg";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Collision Repair",
      description: "Complete collision repair services using factory-certified techniques and genuine parts.",
      features: ["Frame straightening", "Structural repairs", "Safety system recalibration", "Unibody repair"],
    },
    {
      icon: PaintBucket,
      title: "Paint & Refinishing",
      description: "Professional automotive painting with computerized color matching for a perfect finish.",
      features: ["Custom paint jobs", "Color matching", "Clear coat protection", "Paintless options"],
    },
    {
      icon: Wrench,
      title: "Dent Removal",
      description: "Expert dent repair services including paintless dent removal (PDR) techniques.",
      features: ["Paintless dent repair", "Hail damage repair", "Door ding removal", "Panel replacement"],
    },
    {
      icon: Sparkles,
      title: "Detailing & Protection",
      description: "Premium detailing services to keep your vehicle looking showroom new.",
      features: ["Ceramic coating", "Paint protection film", "Interior detailing", "Engine detailing"],
    },
    {
      icon: Shield,
      title: "Insurance Claims",
      description: "We work directly with all major insurance companies to streamline your claim process.",
      features: ["Direct billing", "Claims assistance", "Rental coordination", "All insurers accepted"],
    },
    {
      icon: Gauge,
      title: "Custom Modifications",
      description: "Personalize your vehicle with our custom modification and enhancement services.",
      features: ["Body kit installation", "Custom graphics", "Performance upgrades", "Wheels & suspension"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Comprehensive auto body repair and restoration services for all makes and models
            </p>
            <a href="tel:+1234567890">
              <Button variant="luxury" size="xl">
                <Phone className="h-6 w-6" />
                Get Free Estimate
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-accent animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work Speaks for Itself</h2>
            <p className="text-xl text-muted-foreground">
              See the incredible transformations we achieve every day
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <div className="animate-scale-in">
              <img
                src={beforeAfterImage}
                alt="Before and after repair"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="text-center p-6 bg-white rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Before</h3>
                  <p className="text-muted-foreground">
                    Significant collision damage requiring extensive bodywork
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg">
                  <h3 className="text-xl font-bold mb-2">After</h3>
                  <p className="text-muted-foreground">
                    Flawless restoration to factory-perfect condition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and designed for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Free Estimate",
                description: "Call us for a no-obligation free estimate on your repair",
              },
              {
                step: "02",
                title: "Inspection",
                description: "Thorough inspection and detailed repair plan development",
              },
              {
                step: "03",
                title: "Repair Work",
                description: "Expert technicians restore your vehicle to perfection",
              },
              {
                step: "04",
                title: "Quality Check",
                description: "Final inspection and quality assurance before delivery",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Restore Your Vehicle?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get your free estimate today and experience the L&M difference
          </p>
          <a href="tel:+1234567890">
            <Button variant="luxury-outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
              <Phone className="h-6 w-6" />
              Call Now for Free Estimate
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
