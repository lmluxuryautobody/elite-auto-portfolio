import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">L&M</span>
              </div> */}
              <div>
                <h3 className="text-xl font-bold">L&M Luxury</h3>
                <p className="text-sm text-accent">Auto Body Shop</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional auto body repair and restoration with over 20 years of experience. Quality
              work guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <Link to="/cars" className="block text-muted-foreground hover:text-accent transition-colors">
                Cars for Sale
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+17869735376" className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors">
                <Phone className="h-5 w-5 text-accent" />
                <span>(786) 973-5376</span>
              </a>
              <a href="mailto:osman11@me.com" className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="h-5 w-5 text-accent" />
                <span>osman11@me.com</span>
              </a>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <span>2456 NW 77th Terrace<br />Miami FL 33147</span>
              </div>
            </div>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-muted-foreground text-sm mb-6">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} L&M Luxury Auto Body Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
