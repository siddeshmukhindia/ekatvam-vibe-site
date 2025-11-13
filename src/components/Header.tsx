import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBookTour = () => {
    window.open("https://wa.me/917447726161?text=Hi%20I%20want%20to%20book%20a%20tour%20of%20Ekatvam%20Cowork", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Ekatvam Cowork" className="h-10 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              activeClassName="text-accent"
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              activeClassName="text-accent"
            >
              Contact Us
            </NavLink>
            <Button onClick={handleBookTour} className="bg-accent hover:bg-accent/90">
              Book a Tour
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <NavLink
              to="/"
              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              activeClassName="text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              activeClassName="text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            <Button onClick={handleBookTour} className="w-full bg-accent hover:bg-accent/90">
              Book a Tour
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
