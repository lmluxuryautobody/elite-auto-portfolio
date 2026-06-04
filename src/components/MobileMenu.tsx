import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  navItems: { name: string; path: string }[];
  isOpen: boolean;
  onClose: () => void;
  toggleLanguage: () => void;
  language: "en" | "es";
  t: (key: string) => string;
  locationPath: string;
}

export const MobileMenu = ({
  navItems,
  isOpen,
  onClose,
  toggleLanguage,
  language,
  t,
  locationPath,
}: MobileMenuProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      {/* Blur overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-[82%] max-w-sm surface-dark border-l border-white/10 shadow-luxury animate-fade-in-right">
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
          <span className="font-display text-lg font-bold text-white">
            L&amp;M Luxury
          </span>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col px-6 py-8 gap-1">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                window.scrollTo(0, 0);
                onClose();
              }}
              style={{ animationDelay: `${i * 60}ms` }}
              className={`animate-fade-in border-b border-white/5 py-4 font-display text-2xl font-semibold transition-colors ${
                locationPath === item.path ? "text-accent" : "text-white hover:text-accent"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => {
              toggleLanguage();
            }}
            className="mt-6 flex items-center gap-2 self-start rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 hover:text-white hover:border-white/50 transition-colors"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "Español" : "English"}
          </button>

          <a href="tel:+17869735376" className="mt-6">
            <Button variant="luxury" size="lg" className="w-full">
              <Phone className="h-5 w-5" />
              {t("nav.call")}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
