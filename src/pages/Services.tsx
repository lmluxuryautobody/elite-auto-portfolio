import { Phone, CheckCircle, Shield, Wrench, Sparkles, Car, PaintBucket, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import beforeAfterImage from "@/assets/before-after.jpg";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Car,
      title: t("services.collision.title"),
      description: t("services.collision.desc"),
      features: [
        t("services.collision.feature1"),
        t("services.collision.feature2"),
        t("services.collision.feature3"),
        t("services.collision.feature4"),
      ],
    },
    {
      icon: PaintBucket,
      title: t("services.paint.title"),
      description: t("services.paint.desc"),
      features: [
        t("services.paint.feature1"),
        t("services.paint.feature2"),
        t("services.paint.feature3"),
        t("services.paint.feature4"),
      ],
    },
    {
      icon: Wrench,
      title: t("services.dent.title"),
      description: t("services.dent.desc"),
      features: [
        t("services.dent.feature1"),
        t("services.dent.feature2"),
        t("services.dent.feature3"),
        t("services.dent.feature4"),
      ],
    },
    {
      icon: Sparkles,
      title: t("services.detailing.title"),
      description: t("services.detailing.desc"),
      features: [
        t("services.detailing.feature1"),
        t("services.detailing.feature2"),
        t("services.detailing.feature3"),
        t("services.detailing.feature4"),
      ],
    },
    {
      icon: Shield,
      title: t("services.insurance.title"),
      description: t("services.insurance.desc"),
      features: [
        t("services.insurance.feature1"),
        t("services.insurance.feature2"),
        t("services.insurance.feature3"),
        t("services.insurance.feature4"),
      ],
    },
    {
      icon: Gauge,
      title: t("services.custom.title"),
      description: t("services.custom.desc"),
      features: [
        t("services.custom.feature1"),
        t("services.custom.feature2"),
        t("services.custom.feature3"),
        t("services.custom.feature4"),
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("services.hero.title")}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {t("services.hero.subtitle")}
            </p>
            <a href="tel:+17869735376">
              <Button variant="luxury" size="xl">
                <Phone className="h-6 w-6" />
                {t("services.hero.cta")}
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
                className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+17869735376" className="mt-auto">
                  <Button variant="luxury" size="sm" className="w-full">
                    <Phone className="h-4 w-4" />
                    {t("services.hero.cta")}
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("services.showcase.title")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("services.showcase.subtitle")}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <div className="animate-scale-in">
              <img
                src={beforeAfterImage}
                alt="Before and after repair"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("services.process.title")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("services.process.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: t("services.process.step1"),
                description: t("services.process.step1Desc"),
              },
              {
                step: "02",
                title: t("services.process.step2"),
                description: t("services.process.step2Desc"),
              },
              {
                step: "03",
                title: t("services.process.step3"),
                description: t("services.process.step3Desc"),
              },
              {
                step: "04",
                title: t("services.process.step4"),
                description: t("services.process.step4Desc"),
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("services.cta.title")}</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t("services.cta.subtitle")}
          </p>
          <a href="tel:+17869735376">
            <Button variant="luxury-outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
              <Phone className="h-6 w-6" />
              {t("services.cta.button")}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
