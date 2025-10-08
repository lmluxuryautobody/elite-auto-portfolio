import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("contact.hero.title")}</h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("contact.phone")}</h3>
              <a href="tel:+17869735376" className="text-muted-foreground hover:text-accent transition-colors">
                (786) 973-5376
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("contact.email")}</h3>
              <a href="mailto:osman11@me.com" className="text-muted-foreground hover:text-accent transition-colors">
                osman11@me.com
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("contact.address")}</h3>
              <p className="text-muted-foreground">
                2456 NW 77th Terrace<br />Miami FL 33147
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("contact.hours")}</h3>
              <p className="text-muted-foreground text-sm">
                {t("contact.hours.monFri")}
                <br />
                {t("contact.hours.sat")}
                <br />
                {t("contact.hours.sun")}
              </p>
            </Card>
          </div>

          {/* Map and CTA */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="bg-secondary rounded-lg overflow-hidden shadow-2xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.4682467373847!2d-80.23984!3d25.8480285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9a0b5f5b5f5%3A0x5f5f5f5f5f5f5f5f!2s2456%20NW%2077th%20Terrace%2C%20Miami%2C%20FL%2033147!5e0!3m2!1sen!2sus!4v1234567890"
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
              <h2 className="text-4xl font-bold mb-6">{t("contact.visit.title")}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("contact.visit.description")}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t("contact.visit.easy")}</p>
                    <p className="text-muted-foreground">
                      {t("contact.visit.easyDesc")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t("contact.visit.call")}</p>
                    <p className="text-muted-foreground">
                      {t("contact.visit.callDesc")}
                    </p>
                  </div>
                </div>
              </div>
              <a href="tel:+17869735376">
                <Button variant="luxury" size="xl">
                  <Phone className="h-6 w-6" />
                  {t("contact.visit.cta")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("contact.cta.title")}</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t("contact.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17869735376">
              <Button variant="luxury-outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
                <Phone className="h-6 w-6" />
                {t("contact.cta.callNow")}
              </Button>
            </a>
            <a href="mailto:osman11@me.com">
              <Button variant="luxury-outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
                <Mail className="h-6 w-6" />
                {t("contact.cta.email")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
