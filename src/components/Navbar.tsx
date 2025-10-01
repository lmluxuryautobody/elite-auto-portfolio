import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "es">("en");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: language === "en" ? "Home" : "Inicio", path: "/" },
    { name: language === "en" ? "About" : "Nosotros", path: "/about" },
    { name: language === "en" ? "Services" : "Servicios", path: "/services" },
    { name: language === "en" ? "Contact" : "Contacto", path: "/contact" },
    { name: language === "en" ? "Cars for Sale" : "Autos en Venta", path: "/cars" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
              <span className="text-2xl font-bold text-accent-foreground">L&M</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-white">L&M Luxury</h1>
              <p className="text-xs text-accent">Auto Body Shop</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white hover:text-accent transition-colors font-medium ${
                  location.pathname === item.path ? "text-accent" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-white hover:text-accent"
            >
              <Globe className="h-5 w-5" />
            </Button>

            <a href="tel:+1234567890">
              <Button variant="luxury" size="lg" className="hidden md:inline-flex">
                <Phone className="h-5 w-5" />
                {language === "en" ? "Call for Free Estimate" : "Llame para Presupuesto Gratis"}
              </Button>
            </a>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-white hover:text-accent transition-colors py-2 ${
                    location.pathname === item.path ? "text-accent" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:+1234567890" className="pt-2">
                <Button variant="luxury" size="lg" className="w-full">
                  <Phone className="h-5 w-5" />
                  {language === "en" ? "Call Now" : "Llame Ahora"}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
