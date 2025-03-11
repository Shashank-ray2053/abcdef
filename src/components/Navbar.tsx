
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-elastic",
        isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/c4dad46c-99f2-4756-9567-b7f9ca14063d.png" 
            alt="NepTech Logo" 
            className={cn(
              "transition-all duration-300 ease-elastic",
              isScrolled ? "h-10" : "h-12"
            )}
          />
          <span className={cn(
            "font-bold transition-all duration-300 ease-elastic",
            isScrolled ? "text-xl" : "text-2xl",
            "text-neptech-blue"
          )}>
            NepTech
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="button-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <button 
          onClick={toggleMenu} 
          className="block md:hidden text-neptech-dark"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-500 ease-elastic pt-24",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-6 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium text-neptech-dark hover:text-neptech-blue transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="button-primary w-full text-center"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
