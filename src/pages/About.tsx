import { Target, FileText, Droplets, HeartHandshake, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CounterStat from "@/components/CounterStat";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutImage from "@/assets/about-shop.jpg";
import heroImage from "@/assets/hero-car.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const PHONE = "tel:+17869735376";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Target, title: t("about.values.precision"), desc: t("about.values.precisionDesc") },
    { icon: FileText, title: t("about.values.honest"), desc: t("about.values.honestDesc") },
    { icon: Droplets, title: t("about.values.paintMatch"), desc: t("about.values.paintMatchDesc") },
    { icon: HeartHandshake, title: t("about.values.customerFirst"), desc: t("about.values.customerFirstDesc") },
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        subtitle={t("about.hero.subtitle")}
        image={heroImage}
      />

      {/* Story - split layout with overlapping image */}
      <section className="py-24 bg-background">
        <div className="container-narrow grid items-center gap-14 lg:grid-cols-2">
          <div className="relative animate-fade-in-left">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-accent/40 lg:block" />
            <img
              src={aboutImage}
              alt="Technician working inside the L&M shop"
              loading="lazy"
              className="relative w-full rounded-2xl shadow-luxury"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gradient-red px-7 py-5 text-white shadow-red lg:right-8">
              <p className="font-display text-3xl font-extrabold">20+</p>
              <p className="text-xs uppercase tracking-widest text-white/80">{t("about.stats.years")}</p>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <span className="eyebrow">{t("about.story.eyebrow")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{t("about.story.title")}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
            </div>
            <a href={PHONE} className="mt-8 inline-block">
              <Button variant="luxury" size="lg">
                <Phone className="h-5 w-5" />
                {t("nav.call")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 surface-dark text-white">
        <div className="absolute inset-0 texture-grid opacity-30" />
        <div className="container-narrow relative grid grid-cols-2 gap-10 lg:grid-cols-4">
          <CounterStat light end={22} suffix="+" label={t("about.stats.years")} />
          <CounterStat light end={5000} suffix="+" label={t("about.stats.customers")} />
          <CounterStat light end={8500} suffix="+" label={t("about.stats.vehicles")} />
          <CounterStat light end={15} suffix="+" label={t("about.stats.technicians")} />
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container-narrow">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="eyebrow">{t("about.values.eyebrow")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">{t("about.values.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("about.values.subtitle")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="luxury-card group p-8 animate-fade-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <v.icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t("about.cert.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t("about.cert.subtitle")}</p>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {[t("about.cert.ase"), t("about.cert.icar"), t("about.cert.factory"), t("about.cert.insurance")].map((c) => (
              <div key={c} className="luxury-card flex flex-col items-center gap-3 p-7">
                <CheckCircle2 className="h-9 w-9 text-accent" />
                <p className="font-semibold">{c}</p>
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
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">{t("about.cta.title")}</h2>
          <p className="mt-5 text-lg text-white/75">{t("about.cta.subtitle")}</p>
          <a href={PHONE} className="mt-8 inline-block">
            <Button variant="luxury" size="xl">
              <Phone className="h-5 w-5" />
              {t("nav.call")}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
