import { Award, Heart, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import CounterStat from "@/components/CounterStat";
import aboutImage from "@/assets/about-shop.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We never compromise on quality and strive for perfection in every repair.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent service with fair pricing and no hidden fees.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority. We treat every car like our own.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Using the latest technology and techniques for superior results.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About L&M Luxury</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Two decades of excellence in luxury auto body repair and restoration
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={aboutImage}
                alt="L&M Auto Body Shop"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded over 20 years ago, L&M Luxury Auto Body Shop began with a simple mission: to
                  provide the highest quality auto body repair services with unmatched customer care.
                </p>
                <p>
                  What started as a small family-owned shop has grown into one of the most trusted names
                  in luxury auto body repair. Our commitment to excellence and continuous innovation has
                  earned us a reputation for delivering results that exceed expectations.
                </p>
                <p>
                  Today, we're proud to serve thousands of satisfied customers with our team of certified
                  technicians, state-of-the-art equipment, and dedication to perfection. Every vehicle
                  that enters our shop receives the same meticulous attention to detail and care that
                  built our reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-white/80">Numbers that speak to our expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <CounterStat end={22} suffix="+" label="Years in Business" />
            <CounterStat end={5000} suffix="+" label="Happy Customers" />
            <CounterStat end={8500} suffix="+" label="Vehicles Restored" />
            <CounterStat end={15} suffix="+" label="Certified Technicians" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-accent animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Certifications & Partnerships</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We maintain the highest industry standards through continuous training and certification
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["ASE Certified", "I-CAR Gold", "Factory Trained", "Insurance Approved"].map(
                (cert, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Award className="h-12 w-12 text-accent mx-auto mb-2" />
                    <p className="font-semibold">{cert}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
