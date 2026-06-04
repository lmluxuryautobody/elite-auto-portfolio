import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const toTop = () => window.scrollTo(0, 0);

  const links = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.cars"), path: "/cars" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <footer className="relative surface-dark text-white overflow-hidden">
      <div className="absolute inset-0 texture-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container-narrow relative py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-red font-display text-lg font-bold shadow-red">
                L&amp;M
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{t("footer.company")}</h3>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent">
                  {t("footer.subtitle")}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-accent hover:bg-accent hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-accent hover:bg-accent hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    onClick={toTop}
                    className="text-sm text-white/65 transition-colors hover:text-accent"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+17869735376" className="flex items-center gap-3 text-white/65 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                  (786) 973-5376
                </a>
              </li>
              <li>
                <a href="mailto:osman11@me.com" className="flex items-center gap-3 text-white/65 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                  osman11@me.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/65">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>2456 NW 77th Terrace<br />Miami, FL 33147</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              {t("footer.hours")}
            </h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>
                  {t("footer.hours.monFri")}
                  <br />
                  {t("footer.hours.sat")}
                  <br />
                  {t("footer.hours.sun")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
