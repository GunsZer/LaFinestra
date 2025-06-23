import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl lg:text-3xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-burgundy-800' : 'text-white'
            }`}>
              La Finestra
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-gray-700 hover:text-burgundy-700' : 'text-white hover:text-gold-300'
              }`}
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-gray-700 hover:text-burgundy-700' : 'text-white hover:text-gold-300'
              }`}
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-gray-700 hover:text-burgundy-700' : 'text-white hover:text-gold-300'
              }`}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-gray-700 hover:text-burgundy-700' : 'text-white hover:text-gold-300'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className={`hidden lg:flex items-center space-x-4 text-sm transition-colors duration-300 ${
            isScrolled ? 'text-gray-600' : 'text-white/90'
          }`}>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Rue de la Cité 1, Genève</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+41(0)22 312 23 22</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-burgundy-700' : 'text-white hover:text-gold-300'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-burgundy-700 hover:bg-cream-100 rounded-md transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-burgundy-700 hover:bg-cream-100 rounded-md transition-colors"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-burgundy-700 hover:bg-cream-100 rounded-md transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-burgundy-700 hover:bg-cream-100 rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;