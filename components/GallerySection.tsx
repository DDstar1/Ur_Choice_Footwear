import { galleryImages } from "@/data/data";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const GallerySection: React.FC = () => {
  const [cardHeight] = useState(256);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center z-30 relative bg-white/10 backdrop-blur-sm rounded-lg p-8 inline-block mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-gray-600">See our craftsmanship in action</p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              style={{
                height: cardHeight,
                top: idx % 2 === 1 ? cardHeight / 4 : -cardHeight / 4,
              }}
            >
              {/* Image zooms in while keeping object-cover */}
              <motion.img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.2 }} // zoom in to 120% on scroll
                viewport={{ once: false, amount: 0.5 }} // trigger while 50% visible
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
