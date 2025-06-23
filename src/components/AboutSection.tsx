import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="apropos" className="py-16 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-burgundy-800 mb-6 leading-tight">
                L'amour de l'Italie dans chaque assiette
              </h2>
              <div className="w-24 h-1 bg-sage-500 mb-8"></div>
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Dans un cadre élégant et chaleureux, le Chef et son équipe vous accueillent depuis 2006 
                pour partager leur passion de la cuisine italienne.
              </p>
              <p>
                Chaque plat est élaboré dans le respect des traditions, avec des produits frais, 
                des vins typiques et des conseils personnalisés.
              </p>
              <p className="font-semibold text-burgundy-700">
                Une adresse incontournable à Genève pour un moment d'exception.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-burgundy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-burgundy-700" />
                </div>
                <div className="text-2xl font-bold text-burgundy-800">2006</div>
                <div className="text-sm text-gray-600">Depuis</div>
              </div>
              <div className="text-center">
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-8 w-8 text-sage-700" />
                </div>
                <div className="text-2xl font-bold text-burgundy-800">100%</div>
                <div className="text-sm text-gray-600">Traditionnel</div>
              </div>
              <div className="text-center">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-gold-700" />
                </div>
                <div className="text-2xl font-bold text-burgundy-800">5★</div>
                <div className="text-sm text-gray-600">Excellence</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Chef italien préparant des pâtes fraîches"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating element */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-4 border-cream-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-burgundy-800">18+</div>
                <div className="text-sm text-gray-600">Années<br />d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;