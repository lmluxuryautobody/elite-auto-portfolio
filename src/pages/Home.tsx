import { Phone, ArrowRight, Shield, PaintBucket, Sparkles, FileCheck, Star, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CounterStat from "@/components/CounterStat";
import BeforeAfter from "@/components/BeforeAfter";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-car.jpg";
import collisionImg from "@/assets/service-collision.jpg";
import paintImg from "@/assets/service-paint.jpg";
import dentImg from "@/assets/service-dent.jpg";
import shopImg from "@/assets/about-shop.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const PHONE = "tel:+17869735376";

const Home = () => {
  const { t } = useLanguage();

  const trust = [
    t("home.trust.estimates"),
    t("home.trust.insurance"),
    t("home.trust.collision"),
    t("home.trust.paint"),
    t("home.trust.miami"),
  ];

  const services = [
    { icon: Shield, title: t("home.services.collision"), desc: t("home.services.collisionDesc"), img: collisionImg },
    { icon: PaintBucket, title: t("home.services.paint"), desc: t("home.services.paintDesc"), img: paintImg },
    { icon: Sparkles, title: t("home.services.dent"), desc: t("home.services.dentDesc"), img: dentImg },
    { icon: FileCheck, title: t("home.services.quick"), desc: t("home.services.quickDesc"), img: shopImg },
  ];

  const testimonials = [
    { name: "John Martinez", role: t("home.t1.role"), text: t("home.t1") },
    { name: "Sarah Johnson", role: t("home.t2.role"), text: t("home.t2") },
    { name: "Michael Chen", role: t("home.t3.role"), text: t("home.t3") },
  ];

  return (
    <div className="overflow-hidden">
      {/* ===== Hero ===== */}
      <section className="relative min-h-screen flex items-center">
        <img
          src={heroImage}
          alt="Luxury car in the L&M auto body shop"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 red-glow opacity-70" />

        <div className="container-narrow relative z-10 pt-28 pb-20">
          <div className="max-w-3xl">
            <span className="eyebrow animate-fade-in">
              <span className="h-px w-8 bg-accent" />
              {t("home.hero.eyebrow")}
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl animate-fade-in">
              {t("home.hero.title")}{" "}
              <span className="text-gradient-light">{t("home.hero.subtitle")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed animate-fade-in">
              {t("home.hero.description")}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-slide-up">
              <a href={PHONE}>
                <Button variant="luxury" size="xl" className="w-full sm:w-auto">
                  <Phone className="h-5 w-5" />
                  {t("home.hero.cta")}
                </Button>
              </a>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="luxury-light" size="xl" className="w-full sm:w-auto">
                  {t("home.hero.viewServices")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="mt-7 text-sm tracking-wide text-white/55 animate-fade-in">
              {t("home.hero.badges")}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Trust bar ===== */}
      <section className="surface-dark border-y border-white/10">
        <div className="container-narrow">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6 text-sm font-semibold text-white/75">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="py-24 bg-background">
        <div className="container-narrow">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">{t("home.services.eyebrow")}</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
                {t("home.services.title")}
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">{t("home.services.subtitle")}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl shadow-card animate-fade-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="absolute inset-0">
                  <img src={s.img} alt={s.title} loading="lazy" className="img-zoom h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                </div>
                <div className="relative flex min-h-[22rem] flex-col justify-end p-8">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/90 text-white shadow-red">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                  <a href={PHONE} className="mt-6">
                    <Button variant="luxury" size="sm">
                      <Phone className="h-4 w-4" />
                      {t("home.services.cta")}
                    </Button>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="luxury-outline" size="lg">
                {t("home.services.viewAll")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Before & After ===== */}
      <section className="relative py-24 surface-dark text-white">
        <div className="absolute inset-0 texture-grid opacity-30" />
        <div className="container-narrow relative">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow">{t("home.beforeAfter.eyebrow")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              {t("home.beforeAfter.title")}
            </h2>
            <p className="mt-4 text-white/65">{t("home.beforeAfter.subtitle")}</p>
          </div>
          <div className="mx-auto max-w-4xl">
            <BeforeAfter
              before={beforeImg}
              after={afterImg}
              beforeLabel={t("home.beforeAfter.before")}
              afterLabel={t("home.beforeAfter.after")}
            />
          </div>
        </div>
      </section>

      {/* ===== Why choose / counters ===== */}
      <section className="py-24 bg-background">
        <div className="container-narrow">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="eyebrow">{t("home.whyChoose.eyebrow")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              {t("home.whyChoose.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("home.whyChoose.subtitle")}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            <CounterStat end={5000} suffix="+" label={t("home.whyChoose.cars")} />
            <CounterStat end={20} suffix="+" label={t("home.whyChoose.years")} />
            <CounterStat end={98} suffix="%" label={t("home.whyChoose.satisfaction")} />
            <CounterStat end={15} suffix="+" label={t("home.whyChoose.technicians")} />
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-24 bg-secondary">
        <div className="container-narrow">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">{t("home.testimonials.eyebrow")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              {t("home.testimonials.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("home.testimonials.subtitle")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((tm, i) => (
              <figure
                key={tm.name}
                className="luxury-card flex flex-col p-8 animate-fade-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="flex-grow text-foreground/80 leading-relaxed">
                  "{tm.text}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display font-bold">{tm.name}</p>
                  <p className="text-sm text-accent">{tm.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="relative py-28 text-white">
        <img src={ctaBg} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
        <div className="container-narrow relative">
          <div className="max-w-2xl">
            <span className="eyebrow">{t("home.finalCta.eyebrow")}</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-6xl">
              {t("home.finalCta.title")}
            </h2>
            <p className="mt-5 text-lg text-white/75">{t("home.finalCta.description")}</p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href={PHONE}>
                <Button variant="luxury" size="xl" className="w-full sm:w-auto">
                  <Phone className="h-5 w-5" />
                  {t("home.finalCta.cta")}
                </Button>
              </a>
              <a
                href="https://maps.google.com/?q=2456+NW+77th+Terrace+Miami+FL+33147"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="luxury-light" size="xl" className="w-full sm:w-auto">
                  <MapPin className="h-5 w-5" />
                  {t("home.finalCta.secondary")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
