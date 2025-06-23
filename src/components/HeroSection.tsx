import React from 'react';
import { Calendar, ChefHat } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Restaurant La Finestra - Façade élégante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Une fenêtre sur l'Italie
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-12 font-light leading-relaxed">
          Cuisine italienne traditionnelle à Genève depuis 2006
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 min-w-[200px]"
          >
            <Calendar className="h-5 w-5" />
            Réserver une table
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="border-2 border-white hover:bg-white hover:text-burgundy-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 min-w-[200px]"
          >
            <ChefHat className="h-5 w-5" />
            Découvrir notre menu
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;