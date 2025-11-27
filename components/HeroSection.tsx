"use client";

import React from "react";

interface HeroSectionProps {
  whatsappNumber: string;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  whatsappNumber,
  scrollToSection,
}) => {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Handcrafted Palm Shoes & Bags from Benin City
            </h1>

            <p className="text-xl text-gray-700 mb-8">
              Authentic Nigerian craftsmanship meets modern style. Each piece is
              handmade with care using traditional palm weaving techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("shop")}
                className="bg-amber-800 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-900 transition"
              >
                Shop Collection
              </button>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition text-center"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=800&fit=crop"
              alt="Handcrafted palm products"
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
