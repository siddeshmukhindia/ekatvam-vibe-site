import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Ekatvam Cowork" className="h-20 w-auto mb-4" />
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Connect | Create | CoGrow
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <a href="tel:+917875799111" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 78757 99111
            </a>
            <a href="mailto:ekatvamcowork@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              ekatvamcowork@gmail.com
            </a>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <a 
                href="https://www.google.com/maps/place/Ekatvam+Cowork/@18.5058717,73.8493695,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c128c4de675d:0xfac551ce155e20b!8m2!3d18.5058666!4d73.8519444!16s%2Fg%2F11ym9vqc11" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Office No. 303, 3rd Floor, Sanskruti Mantra Building, Tilak Rd, Pune 411030
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#workspaces" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Workspaces
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ekatvam Cowork Pune. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/share/1Bd81vyqVu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors" 
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/ekatvamcowork?igsh=MWl5eW9xZzI5azU3ag==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors" 
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
