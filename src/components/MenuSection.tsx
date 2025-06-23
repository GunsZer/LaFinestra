import React from 'react';
import { Wine, Utensils } from 'lucide-react';

const MenuSection = () => {
  const menuItems = [
    {
      category: "Antipasti",
      icon: <Utensils className="h-6 w-6" />,
      items: [
        {
          name: "Burrata Crémeuse",
          description: "Tomates confites, huile de basilic, roquette sauvage",
          price: "28 CHF"
        }
      ]
    },
    {
      category: "Primi Piatti",
      icon: <Utensils className="h-6 w-6" />,
      items: [
        {
          name: "Tagliatelle aux Truffes",
          description: "Pâtes fraîches maison, sauce crémeuse, copeaux de truffe noire",
          price: "42 CHF"
        }
      ]
    },
    {
      category: "Secondi",
      icon: <Utensils className="h-6 w-6" />,
      items: [
        {
          name: "Filet de Bœuf Grillé",
          description: "Légumes croquants de saison, jus de viande aux herbes",
          price: "48 CHF"
        }
      ]
    },
    {
      category: "Dolci",
      icon: <Utensils className="h-6 w-6" />,
      items: [
        {
          name: "Tiramisu Maison",
          description: "Parfumé au café italien, mascarpone crémeux",
          price: "16 CHF"
        }
      ]
    }
  ];

  const wines = [
    {
      name: "Barolo DOCG",
      region: "Piémont",
      year: "2018",
      price: "85 CHF"
    },
    {
      name: "Chianti Classico",
      region: "Toscane",
      year: "2020",
      price: "65 CHF"
    },
    {
      name: "Nero d'Avola",
      region: "Sicile",
      year: "2021",
      price: "55 CHF"
    }
  ];

  return (
    <section id="menu" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-burgundy-800 mb-6">
            Notre Menu
          </h2>
          <div className="w-24 h-1 bg-sage-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une sélection de nos spécialités italiennes, préparées avec passion et savoir-faire
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Menu Items */}
          <div className="lg:col-span-2 space-y-12">
            {menuItems.map((category, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-sage-200 pb-3">
                  <div className="bg-burgundy-100 p-2 rounded-full text-burgundy-700">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-burgundy-800">
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group hover:bg-cream-50 p-6 rounded-xl transition-all duration-300">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-burgundy-700 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-xl font-bold text-burgundy-700 bg-burgundy-50 px-3 py-1 rounded-lg group-hover:bg-burgundy-100 transition-colors">
                          {item.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Wine Selection */}
          <div className="bg-burgundy-800 text-white p-8 rounded-2xl h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 p-2 rounded-full">
                <Wine className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold">Sélection de Vins</h3>
            </div>
            
            <div className="space-y-6">
              {wines.map((wine, index) => (
                <div key={index} className="border-b border-white/20 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-semibold text-lg">{wine.name}</h4>
                      <p className="text-white/80 text-sm">{wine.region} • {wine.year}</p>
                    </div>
                    <div className="text-gold-300 font-bold">{wine.price}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-white/90">
                <strong>Conseil du sommelier :</strong> Notre équipe se fera un plaisir de vous accompagner 
                dans le choix du vin parfait pour sublimer votre repas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;