import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Instructions', href: '#instructions' },
    { name: 'How to Apply', href: '#apply' },
    { name: 'Contact Us', href: '#contact' },
    
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762455353/logo_ztcqp4.webp" 
              alt="E Logo" 
              className="w-8 h-8 lg:w-10 lg:h-10 object-contain" 
            />
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              E-Crescendo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 btn-glow"
              onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScF__FnO172vG27L3qatagzZcw1pereyR57aKHFRAxG_6rAgA/viewform?usp=publish-editor'}
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200 relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-2xl animate-fade-in">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 py-4 px-4 text-base font-medium rounded-lg border-b border-border/10 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 px-4">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary-glow text-white hover:opacity-90 h-12 text-base font-semibold rounded-lg shadow-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScF__FnO172vG27L3qatagzZcw1pereyR57aKHFRAxG_6rAgA/viewform?usp=publish-editor';
                  }}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;