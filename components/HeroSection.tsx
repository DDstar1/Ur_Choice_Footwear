"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroSectionProps {
  whatsappNumber: string;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  whatsappNumber,
  scrollToSection,
}) => {
  const { scrollY } = useScroll();

  // Parallax: move background slower than scroll
  const yPos = useTransform(scrollY, [0, 500], ["0%", "30%"]);

  return (
    <section id="home" className="pt-16 relative overflow-hidden h-auto">
      {/* Parallax Background */}
      <motion.div
        style={{
          y: yPos,
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("/images/HeroBG.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Handcrafted Palm Shoes & Bags from Benin City
            </h1>

            <p className="text-xl text-gray-200 mb-8">
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

          {/* Image */}
          <div className="relative h-96 hidden  md:h-[500px]">
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
