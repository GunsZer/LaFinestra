import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Calendar, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-burgundy-800 mb-6">
            Nous Contacter
          </h2>
          <div className="w-24 h-1 bg-sage-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Réservez votre table ou contactez-nous pour toute question
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-burgundy-800 mb-6">
                Informations Pratiques
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-burgundy-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-burgundy-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                    <p className="text-gray-600">Rue de la Cité 1, 1204 Genève</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-sage-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-sage-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horaires</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Lundi au vendredi : 12:00–14:00 / 19:00–22:30</p>
                      <p>Samedi : 19:00–22:30</p>
                      <p className="text-red-600">Fermé dimanche</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-gold-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
                    <a href="tel:+41223122322" className="text-burgundy-600 hover:text-burgundy-800">
                      +41(0)22 312 23 22
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-burgundy-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-burgundy-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:reservation@lafinestra.ch" className="text-burgundy-600 hover:text-burgundy-800">
                      reservation@lafinestra.ch
                    </a>
                  </div>
                </div>
              </div>

              {/* Reservation Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="tel:+41223122322"
                  className="w-full bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Réserver en ligne
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-burgundy-800 mb-6">
                Nous Trouver
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.2!2d6.1434!3d46.2044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b1f06d1e6d7%3A0x1234567890abcdef!2sRue%20de%20la%20Cit%C3%A9%201%2C%201204%20Gen%C3%A8ve%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-burgundy-800 mb-6">
              Envoyez-nous un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;