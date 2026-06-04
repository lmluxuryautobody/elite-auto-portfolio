import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { MobileMenu } from "@/components/MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleLanguage, language, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.cars"), path: "/cars" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-primary/90 backdrop-blur-xl border-b border-white/10 shadow-luxury"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-red text-white font-display font-bold text-lg shadow-red">
                L&M
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-bold text-white">
                  L&amp;M Luxury
                </span>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/55">
                  Auto Body Shop
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-9">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                    location.pathname === item.path
                      ? "text-white after:w-full"
                      : "text-white/70 hover:text-white after:w-0 hover:after:w-full"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:border-white/50 hover:text-white"
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4" />
                {language === "en" ? "ES" : "EN"}
              </button>

              <a href="tel:+17869735376" className="hidden md:inline-flex">
                <Button variant="luxury" size="lg">
                  <Phone className="h-5 w-5" />
                  {t("nav.call")}
                </Button>
              </a>

              <button
                className="lg:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        navItems={navItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        toggleLanguage={toggleLanguage}
        language={language}
        t={t}
        locationPath={location.pathname}
      />
    </>
  );
};

export default Navbar;
