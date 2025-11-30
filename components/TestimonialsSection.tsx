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
    <section className="w-full flex flex-col items-center ">
      <div
        className="text-center z-30 relative rounded-lg py-30 pb-15 w-full inline-block mx-auto
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
        style={{ height: "350px" }}
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
                  filter: `blur(${blurAmount}px)`,
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
                      {/* Star Rating */}
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300"
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 max-w-md text-lg leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrev}
                    className="text-gray-400 text-2xl hover:text-white"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-gray-400 text-2xl hover:text-white"
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
