import { Award, Heart, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import CounterStat from "@/components/CounterStat";
import aboutImage from "@/assets/about-shop.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t("about.values.excellence"),
      description: t("about.values.excellenceDesc"),
    },
    {
      icon: Heart,
      title: t("about.values.integrity"),
      description: t("about.values.integrityDesc"),
    },
    {
      icon: Users,
      title: t("about.values.customer"),
      description: t("about.values.customerDesc"),
    },
    {
      icon: TrendingUp,
      title: t("about.values.innovation"),
      description: t("about.values.innovationDesc"),
    },
  ];

  const certifications = [
    t("about.cert.ase"),
    t("about.cert.icar"),
    t("about.cert.factory"),
    t("about.cert.insurance")
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("about.hero.title")}</h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t("about.hero.subtitle")}
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
              <h2 className="text-4xl font-bold mb-6">{t("about.story.title")}</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("about.stats.title")}</h2>
            <p className="text-xl text-white/80">{t("about.stats.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <CounterStat end={22} suffix="+" label={t("about.stats.years")} />
            <CounterStat end={5000} suffix="+" label={t("about.stats.customers")} />
            <CounterStat end={8500} suffix="+" label={t("about.stats.vehicles")} />
            <CounterStat end={15} suffix="+" label={t("about.stats.technicians")} />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("about.values.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("about.values.subtitle")}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t("about.cert.title")}</h2>
            <p className="text-xl text-muted-foreground mb-12">
              {t("about.cert.subtitle")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Award className="h-12 w-12 text-accent mx-auto mb-2" />
                  <p className="font-semibold">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
