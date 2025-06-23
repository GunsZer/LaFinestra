import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-burgundy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gold-400 mb-6">
              La Finestra
            </h3>
            <p className="text-white/80 leading-relaxed">
              Cuisine italienne traditionnelle à Genève depuis 2006. 
              Une fenêtre sur l'authenticité italienne.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('apropos')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Rue de la Cité 1, 1204 Genève</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+41223122322" className="text-sm hover:text-white transition-colors">
                  +41(0)22 312 23 22
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:reservation@lafinestra.ch" className="text-sm hover:text-white transition-colors">
                  reservation@lafinestra.ch
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Horaires</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p>Lun-Ven: 12:00–14:00</p>
                  <p className="ml-6">19:00–22:30</p>
                  <p>Sam: 19:00–22:30</p>
                  <p className="text-red-400">Fermé dimanche</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 La Finestra. Tous droits réservés. | 
            <span className="mx-1">Cuisine italienne authentique à Genève</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;