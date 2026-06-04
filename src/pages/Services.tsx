import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
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

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: "collision",
      img: collisionImg,
      title: t("services.collision.title"),
      desc: t("services.collision.desc"),
      features: ["feature1", "feature2", "feature3", "feature4"].map((f) => t(`services.collision.${f}`)),
    },
    {
      key: "body",
      img: shopImg,
      title: t("services.body.title"),
      desc: t("services.body.desc"),
      features: ["feature1", "feature2", "feature3", "feature4"].map((f) => t(`services.body.${f}`)),
    },
    {
      key: "paint",
      img: paintImg,
      title: t("services.paint.title"),
      desc: t("services.paint.desc"),
      features: ["feature1", "feature2", "feature3", "feature4"].map((f) => t(`services.paint.${f}`)),
    },
    {
      key: "dent",
      img: dentImg,
      title: t("services.dent.title"),
      desc: t("services.dent.desc"),
      features: ["feature1", "feature2", "feature3", "feature4"].map((f) => t(`services.dent.${f}`)),
    },
    {
      key: "bumper",
      img: afterImg,
      title: t("services.bumper.title"),
      desc: t("services.bumper.desc"),
      features: ["feature1", "feature2", "feature3", "feature4"].map((f) => t(`services.bumper.${f}`)),
    },
    {
      key: "insurance",
      img: ctaBg,
      title: t("services.insurance.title"),
      desc: t("services.insurance.desc"),
      features: ["feature1", "feature2", "feature3", "feature4"].map((f) => t(`services.insurance.${f}`)),
    },
  ];

  const steps = [1, 2, 3, 4].map((n) => ({
    num: `0${n}`,
    title: t(`services.process.step${n}`),
    desc: t(`services.process.step${n}Desc`),
  }));

  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow={t("services.intro.eyebrow")}
        title={t("services.hero.title")}
        subtitle={t("services.hero.subtitle")}
        image={heroImage}
      >
        <a href={PHONE}>
          <Button variant="luxury" size="xl">
            <Phone className="h-5 w-5" />
            {t("home.services.cta")}
          </Button>
        </a>
      </PageHero>

      {/* Intro */}
      <section className="pt-24 pb-6 bg-background">
        <div className="container-narrow mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t("services.intro.eyebrow")}</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">{t("services.intro.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("services.intro.subtitle")}</p>
        </div>
      </section>

      {/* Alternating service sections */}
      <section className="bg-background pb-24">
        <div className="container-narrow space-y-24 pt-16">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={s.key} className="grid items-center gap-12 lg:grid-cols-2">
                <div
                  className={`group relative overflow-hidden rounded-2xl shadow-luxury ${reverse ? "lg:order-2" : ""} animate-fade-in`}
                >
                  <img src={s.img} alt={s.title} loading="lazy" className="img-zoom aspect-[4/3] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute left-5 top-5 font-display text-5xl font-extrabold text-white/30">
                    0{i + 1}
                  </span>
                </div>

                <div className={`${reverse ? "lg:order-1" : ""} animate-fade-in`}>
                  <span className="eyebrow">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-4xl">{s.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={PHONE} className="mt-8 inline-block">
                    <Button variant="luxury" size="lg">
                      <Phone className="h-5 w-5" />
                      {t("home.services.cta")}
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Showcase */}
      <section className="relative py-24 surface-dark text-white">
        <div className="absolute inset-0 texture-grid opacity-30" />
        <div className="container-narrow relative">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow">{t("home.beforeAfter.eyebrow")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">{t("services.showcase.title")}</h2>
            <p className="mt-4 text-white/65">{t("services.showcase.subtitle")}</p>
          </div>
          <div className="mx-auto max-w-4xl">
            <BeforeAfter
              before={beforeImg}
              after={afterImg}
              beforeLabel={t("services.showcase.before")}
              afterLabel={t("services.showcase.after")}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container-narrow">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="eyebrow">{t("services.process.title")}</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">{t("services.process.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("services.process.subtitle")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="luxury-card relative p-7 animate-fade-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="font-display text-4xl font-extrabold text-accent/30">{step.num}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
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
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">{t("services.cta.title")}</h2>
          <p className="mt-5 text-lg text-white/75">{t("services.cta.subtitle")}</p>
          <a href={PHONE} className="mt-8 inline-block">
            <Button variant="luxury" size="xl">
              <Phone className="h-5 w-5" />
              {t("services.cta.button")}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
