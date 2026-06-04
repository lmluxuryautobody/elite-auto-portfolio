import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-car.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const PHONE = "tel:+17869735376";

const Contact = () => {
  const { t } = useLanguage();

  const info = [
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "(786) 973-5376",
      href: PHONE,
    },
    {
      icon: Mail,
      label: t("contact.email"),
      value: "osman11@me.com",
      href: "mailto:osman11@me.com",
    },
    {
      icon: MapPin,
      label: t("contact.address"),
      value: "2456 NW 77th Terrace, Miami, FL 33147",
      href: "https://maps.google.com/?q=2456+NW+77th+Terrace+Miami+FL+33147",
    },
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        subtitle={t("contact.hero.subtitle")}
        image={heroImage}
      >
        <a href={PHONE}>
          <Button variant="luxury" size="xl">
            <Phone className="h-5 w-5" />
            {t("contact.visit.cta")}
          </Button>
        </a>
      </PageHero>

      {/* Info + map */}
      <section className="py-24 bg-background">
        <div className="container-narrow grid gap-12 lg:grid-cols-2">
          {/* Left: details */}
          <div className="animate-fade-in-left">
            <span className="eyebrow">{t("contact.info.title")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{t("contact.visit.title")}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("contact.visit.description")}</p>

            <div className="mt-8 space-y-4">
              {info.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="luxury-card flex items-center gap-4 p-5 hover:border-accent"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block font-display font-semibold">{item.value}</span>
                  </span>
                </a>
              ))}

              <div className="luxury-card flex items-center gap-4 p-5">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Clock className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t("contact.hours")}
                  </span>
                  <span className="block text-sm">
                    {t("contact.hours.monFri")}
                    <br />
                    {t("contact.hours.sat")} · {t("contact.hours.sun")}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div className="animate-fade-in-right">
            <div className="h-full min-h-[28rem] overflow-hidden rounded-2xl shadow-luxury">
              <iframe
                src="https://www.google.com/maps?q=2456+NW+77th+Terrace,+Miami,+FL+33147&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "28rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="L&M Luxury Auto Body Shop Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="relative py-24 text-white">
        <img src={ctaBg} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="container-narrow relative max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">{t("contact.cta.title")}</h2>
          <p className="mt-5 text-lg text-white/75">{t("contact.cta.subtitle")}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={PHONE}>
              <Button variant="luxury" size="xl" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                {t("contact.cta.callNow")}
              </Button>
            </a>
            <a href="mailto:osman11@me.com">
              <Button variant="luxury-light" size="xl" className="w-full sm:w-auto">
                <Mail className="h-5 w-5" />
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
