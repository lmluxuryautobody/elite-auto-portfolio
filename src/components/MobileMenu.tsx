// src/components/MobileMenu.tsx
import { Link } from "react-router-dom";
import { X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  navItems: { name: string; path: string }[];
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
  locationPath: string;
}

export const MobileMenu = ({ navItems, isOpen, onClose, t, locationPath }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Fullscreen overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Mobile menu content */}
      <div className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-md lg:hidden animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="px-6 flex flex-col space-y-4 mt-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`text-white hover:text-accent transition-colors py-2 ${
                locationPath === item.path ? "text-accent" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          <a href="tel:+17869735376" className="pt-2">
            <Button variant="luxury" size="lg" className="w-full">
              <Phone className="h-5 w-5" />
              {t("nav.callNow")}
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};
