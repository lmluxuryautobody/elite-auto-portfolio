import { Phone, Gauge, Calendar, CheckCircle2, ShieldCheck, FileText, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-car.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const PHONE = "tel:+17869735376";

const CarsForSale = () => {
  const { t } = useLanguage();

  const cars = [
    { year: 2020, make: "Mercedes-Benz", model: "E-Class", price: "$45,900", mileage: "32,000", condition: "Excellent",
      features: ["Premium Package", "Navigation", "Leather Seats", "Sunroof"],
      images: ["Front View", "Interior", "Side View"] },
    { year: 2019, make: "BMW", model: "5 Series", price: "$42,500", mileage: "28,500", condition: "Like New",
      features: ["Sport Package", "Premium Sound", "Heated Seats", "Backup Camera"],
      images: ["Front View", "Interior", "Rear View"] },
    { year: 2021, make: "Audi", model: "A6", price: "$48,900", mileage: "24,000", condition: "Excellent",
      features: ["Quattro AWD", "Virtual Cockpit", "Premium Plus", "Adaptive Cruise"],
      images: ["Front View", "Dashboard", "Profile"] },
    { year: 2018, make: "Lexus", model: "ES 350", price: "$35,900", mileage: "38,000", condition: "Very Good",
      features: ["Luxury Package", "Mark Levinson Audio", "Heated/Cooled Seats", "Lane Keep"],
      images: ["Front", "Interior", "Side"] },
    { year: 2020, make: "Tesla", model: "Model 3", price: "$39,900", mileage: "18,000", condition: "Excellent",
      features: ["Long Range", "Autopilot", "Premium Interior", "Supercharging"],
      images: ["Front View", "Screen", "Charging"] },
    { year: 2019, make: "Porsche", model: "Macan", price: "$52,900", mileage: "26,000", condition: "Like New",
      features: ["Sport Chrono", "PASM Suspension", "Panoramic Roof", "Bose Audio"],
      images: ["Front", "Cockpit", "Rear"] },
  ];

  const why = [
    { icon: ShieldCheck, title: t("cars.why.inspected"), desc: t("cars.why.inspectedDesc") },
    { icon: FileText, title: t("cars.why.history"), desc: t("cars.why.historyDesc") },
    { icon: Award, title: t("cars.why.guarantee"), desc: t("cars.why.guaranteeDesc") },
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow={t("cars.intro.eyebrow")}
        title={t("cars.hero.title")}
        subtitle={t("cars.hero.subtitle")}
        image={heroImage}
      >
        <a href={PHONE}>
          <Button variant="luxury" size="xl">
            <Phone className="h-5 w-5" />
            {t("cars.hero.cta")}
          </Button>
        </a>
      </PageHero>

      {/* Inventory */}
      <section className="py-24 bg-background">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car, index) => (
              <article
                key={index}
                className="luxury-card group flex flex-col overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {car.images.map((title, i) => (
                        <CarouselItem key={i}>
                          <div className="relative flex h-52 items-center justify-center surface-dark">
                            <div className="absolute inset-0 texture-grid opacity-30" />
                            <div className="relative text-center">
                              <p className="font-display text-2xl font-bold text-white">
                                {car.year} {car.make}
                              </p>
                              <p className="text-white/60">{car.model}</p>
                              <p className="mt-2 text-xs uppercase tracking-widest text-accent">{title}</p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-3 border-none bg-white/90 text-primary" />
                    <CarouselNext className="right-3 border-none bg-white/90 text-primary" />
                  </Carousel>
                  <Badge className="absolute left-4 top-4 bg-accent text-white hover:bg-accent">
                    {car.condition}
                  </Badge>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold">{car.year} {car.make}</h3>
                      <p className="text-muted-foreground">{car.model}</p>
                    </div>
                    <p className="font-display text-2xl font-extrabold text-accent">{car.price}</p>
                  </div>

                  <div className="mt-4 flex gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Gauge className="h-4 w-4 text-accent" /> {car.mileage} {t("cars.mileage")}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" /> {car.year}
                    </span>
                  </div>

                  <div className="mt-5 border-t border-border pt-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {t("cars.features")}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {car.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={PHONE} className="mt-6 block">
                    <Button variant="luxury" size="lg" className="w-full">
                      <Phone className="h-5 w-5" />
                      {t("cars.callToInquire")}
                    </Button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why buy */}
      <section className="relative py-24 surface-dark text-white">
        <div className="absolute inset-0 texture-grid opacity-30" />
        <div className="container-narrow relative">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="eyebrow">{t("cars.why.eyebrow")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">{t("cars.why.title")}</h2>
            <p className="mt-4 text-white/65">{t("cars.why.subtitle")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {why.map((w, i) => (
              <div
                key={w.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-colors hover:border-accent/50 animate-fade-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <w.icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-xl font-bold">{w.title}</h3>
                <p className="mt-3 text-sm text-white/60">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 text-white">
        <img src={ctaBg} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="container-narrow relative max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">{t("cars.visit.title")}</h2>
          <p className="mt-5 text-lg text-white/75">{t("cars.visit.subtitle")}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={PHONE}>
              <Button variant="luxury" size="xl" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                {t("cars.visit.cta")}
              </Button>
            </a>
            <a href="https://maps.google.com/?q=2456+NW+77th+Terrace+Miami+FL+33147" target="_blank" rel="noopener noreferrer">
              <Button variant="luxury-light" size="xl" className="w-full sm:w-auto">
                <MapPin className="h-5 w-5" />
                {t("home.finalCta.secondary")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarsForSale;
