import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/data";

const GalleryColumn = ({
  images,
  direction,
}: {
  images: typeof galleryImages;
  direction: "up" | "down";
}) => {
  const [cardHeight] = useState(256);
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="relative h-[800px] overflow-hidden">
      <motion.div
        className="flex flex-col gap-4"
        animate={{
          y:
            direction === "up"
              ? [0, -(cardHeight + 1) * images.length]
              : [-(cardHeight + 1) * images.length, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer "
            style={{ height: cardHeight }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img.src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const GallerySection: React.FC = () => {
  // Split images into columns
  const column1 = galleryImages.filter((_, idx) => idx % 4 === 0);
  const column2 = galleryImages.filter((_, idx) => idx % 4 === 1);
  const column3 = galleryImages.filter((_, idx) => idx % 4 === 2);
  const column4 = galleryImages.filter((_, idx) => idx % 4 === 3);

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-gray-600">See our craftsmanship in action</p>
        </div>

        <div className="relative">
          {/* Top gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GalleryColumn images={column1} direction="up" />
            <GalleryColumn images={column2} direction="down" />
            <div className="hidden md:block">
              <GalleryColumn images={column3} direction="up" />
            </div>
            <div className="hidden md:block">
              <GalleryColumn images={column4} direction="down" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
