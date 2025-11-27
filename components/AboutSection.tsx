import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Based in Benin City, Nigeria, we are passionate artisans dedicated
              to preserving and modernizing traditional palm craft techniques.
              Every shoe and bag we create tells a story of Nigerian heritage
              and craftsmanship.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our palm products are not just accessories – they're sustainable,
              durable, and uniquely African. We source our materials locally and
              work with skilled craftspeople to ensure every piece meets our
              high standards.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Coming soon: We're expanding into leather shoemaking to offer you
              even more handcrafted options!
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-800">100%</div>
                <div className="text-sm text-gray-600">Handmade</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-800">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-800">5★</div>
                <div className="text-sm text-gray-600">Rated</div>
              </div>
            </div>
          </div>
          <div className="relative h-96 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1491677533189-49af044391ed?w=800&h=800&fit=crop"
              alt="Artisan at work"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
