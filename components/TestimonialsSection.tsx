import { testimonials } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const total = 5;

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth(); // Initial call
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handlePrev = () => {
    setTestimonialsList((prev) => {
      const lastItem = prev[prev.length - 1];
      return [lastItem, ...prev.slice(0, -1)];
    });
  };

  const handleNext = () => {
    setTestimonialsList((prev) => {
      const [firstItem, ...rest] = prev;
      return [...rest, firstItem];
    });
  };

  return (
    <section className="w-full  flex flex-col items-center mt-5">
      <div
        className="text-center z-30 relative rounded-lg p-12 inline-block mx-auto
    bg-[linear-gradient(to_bottom,rgb(255_255_255/0)_0%,rgb(255_255_255/0.8)_10%,rgb(255_255_255/1)_100%)]"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Hear From Our Happy Customers
        </h2>
        <p className="text-gray-600">
          Discover why our clients love our craftsmanship and attention to
          detail.
        </p>
      </div>

      <div
        style={{ height: "300px" }}
        className="flex gap-5 min-h-42 relative justify-center p-8 text-gray-400 flex-nowrap"
      >
        <AnimatePresence>
          {testimonialsList.slice(0, total).map((testimonial, index) => {
            const middleIndex = Math.floor(total / 2);
            const distanceFromMiddle = Math.abs(index - middleIndex);
            const blurAmount = distanceFromMiddle * 1.5;
            const scale = 1 - distanceFromMiddle * 0.1;
            const translateX =
              (index - middleIndex) * (screenWidth > 900 ? 100 : 50);

            return (
              <motion.div
                className="min-w-64 border-white border-2 bg-gray-900 absolute h-full top-0 rounded-2xl p-4 flex flex-col justify-between"
                style={{
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  zIndex: total - distanceFromMiddle,
                  opacity: scale,
                  filter: `blur(${blurAmount}px)`, // Apply blur
                }}
                key={testimonial.name}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: translateX,
                  filter: "blur(3px)",
                }}
                animate={{
                  opacity: scale,
                  scale,
                  x: translateX,
                  filter: `blur(${blurAmount}px)`,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: translateX,
                  filter: "blur(3px)",
                }}
                transition={{
                  scale: { duration: 0.3, ease: "easeInOut" },
                  x: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
                  filter: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <div className="h-[90%] overflow-clip">
                  <div className="flex relative items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full border-white border-2 w-12 h-12"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 max-w-md text-lg leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrev}
                    className="text-gray-400 hover:text-white"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-gray-400 hover:text-white"
                  >
                    &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
