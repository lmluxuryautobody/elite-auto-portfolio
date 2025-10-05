import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Get in touch with our team for a free estimate or any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+17869735376" className="text-muted-foreground hover:text-accent transition-colors">
                (786) 973-5376
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:osman11@me.com" className="text-muted-foreground hover:text-accent transition-colors">
                osman11@me.com
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-muted-foreground">
                2456 NW 77th Terrace<br />Miami FL 33147
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <p className="text-muted-foreground text-sm">
                Mon-Fri: 8:00 AM - 6:00 PM
                <br />
                Sat: 9:00 AM - 4:00 PM
                <br />
                Sun: Closed
              </p>
            </Card>
          </div>

          {/* Map and CTA */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="bg-secondary rounded-lg overflow-hidden shadow-2xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7425839231974!2d-118.24368!3d34.05223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE0JzM3LjIiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="L&M Luxury Auto Body Shop Location"
                />
              </div>
            </div>

            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">Visit Our Shop</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stop by our state-of-the-art facility for a free in-person estimate. Our expert team is
                ready to assess your vehicle and provide you with detailed repair options.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Easy to Find</p>
                    <p className="text-muted-foreground">
                      Located on Auto Street with ample parking available
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Call Ahead</p>
                    <p className="text-muted-foreground">
                      Schedule your visit for faster service
                    </p>
                  </div>
                </div>
              </div>
              <a href="tel:+17869735376">
                <Button variant="luxury" size="xl">
                  <Phone className="h-6 w-6" />
                  Call for Free Estimate
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Free Estimates Available</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            No obligation, no hidden fees. Get an honest assessment of your vehicle's repair needs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17869735376">
              <Button variant="luxury-outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
                <Phone className="h-6 w-6" />
                Call Now
              </Button>
            </a>
            <a href="mailto:osman11@me.com">
              <Button variant="luxury-outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
                <Mail className="h-6 w-6" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
