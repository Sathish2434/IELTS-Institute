import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    closeMobileMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (navbar) {
        if (scrollTop > 100) {
          navbar.classList.add("bg-card/95");
        } else {
          navbar.classList.remove("bg-card/95");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-logo">
            <div className="bg-primary p-2 rounded-lg">
              <GraduationCap className="text-primary-foreground text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Excellence IELTS</h1>
              <p className="text-xs text-muted-foreground">Institute</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("#home")}
              className="nav-link text-foreground hover:text-primary font-medium"
              data-testid="button-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("#courses")}
              className="nav-link text-foreground hover:text-primary font-medium"
              data-testid="button-nav-courses"
            >
              Courses
            </button>
            <button
              onClick={() => handleNavClick("#courses")}
              className="nav-link text-foreground hover:text-primary font-medium"
              data-testid="button-nav-about"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("#testimonials")}
              className="nav-link text-foreground hover:text-primary font-medium"
              data-testid="button-nav-testimonials"
            >
              Reviews
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="nav-link text-foreground hover:text-primary font-medium"
              data-testid="button-nav-contact"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="button-primary text-primary-foreground px-6 py-2 rounded-lg font-medium border-0"
              data-testid="button-free-assessment"
            >
              Free Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            <Menu className="text-foreground text-xl" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-y-0 right-0 w-64 bg-card shadow-xl md:hidden z-50 ${
          isMobileMenuOpen ? "open" : ""
        }`}
      >
        <div className="p-6">
          <Button
            variant="ghost"
            size="icon"
            className="float-right"
            onClick={closeMobileMenu}
            data-testid="button-mobile-menu-close"
          >
            <X className="text-foreground text-xl" />
          </Button>
          <div className="mt-8 space-y-6">
            <button
              onClick={() => handleNavClick("#home")}
              className="block text-foreground hover:text-primary font-medium"
              data-testid="button-mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("#courses")}
              className="block text-foreground hover:text-primary font-medium"
              data-testid="button-mobile-nav-courses"
            >
              Courses
            </button>
            <button
              onClick={() => handleNavClick("#courses")}
              className="block text-foreground hover:text-primary font-medium"
              data-testid="button-mobile-nav-about"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("#testimonials")}
              className="block text-foreground hover:text-primary font-medium"
              data-testid="button-mobile-nav-testimonials"
            >
              Reviews
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="block text-foreground hover:text-primary font-medium"
              data-testid="button-mobile-nav-contact"
            >
              Contact
            </button>
            <Button 
              className="w-full button-primary text-primary-foreground px-6 py-3 rounded-lg font-medium border-0"
              data-testid="button-mobile-free-assessment"
            >
              Free Assessment
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={closeMobileMenu}
          data-testid="overlay-mobile-menu"
        />
      )}
    </nav>
  );
}
