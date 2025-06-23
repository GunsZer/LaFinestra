import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      text: "Un voyage en Italie à chaque bouchée. Service impeccable, plats délicieux et cadre romantique.",
      author: "Sophie G.",
      rating: 5,
      date: "Mars 2024"
    },
    {
      text: "Une adresse incontournable à Genève ! Cuisine raffinée et accueil chaleureux.",
      author: "Marc D.",
      rating: 5,
      date: "Février 2024"
    },
    {
      text: "Authenticité italienne garantie. Les pâtes fraîches sont exceptionnelles et l'ambiance très conviviale.",
      author: "Elena R.",
      rating: 5,
      date: "Janvier 2024"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-burgundy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ce que disent nos clients
          </h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Leurs témoignages font notre fierté et nous motivent chaque jour
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-gold-400/20 p-3 rounded-full">
                  <Quote className="h-6 w-6 text-gold-400" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/90 text-center mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="font-semibold text-white">{review.author}</p>
                <p className="text-white/60 text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-gold-400 mb-2">4.9/5</div>
            <div className="text-white/80">Note moyenne</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-gold-400 mb-2">500+</div>
            <div className="text-white/80">Avis clients</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-gold-400 mb-2">18</div>
            <div className="text-white/80">Années d'expérience</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-gold-400 mb-2">100%</div>
            <div className="text-white/80">Recommandation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;