"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PalmCraftWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Product data
  const products = [
    {
      id: 1,
      name: "Classic Palm Loafers",
      category: "shoes",
      price: "₦15,000",
      image:
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&h=500&fit=crop",
      description: "Handcrafted traditional palm loafers",
    },
    {
      id: 2,
      name: "Palm Weave Tote Bag",
      category: "bags",
      price: "₦12,000",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop",
      description: "Eco-friendly handwoven tote bag",
    },
    {
      id: 3,
      name: "Premium Palm Sandals",
      category: "shoes",
      price: "₦18,000",
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&h=500&fit=crop",
      description: "Comfortable handmade palm sandals",
    },
    {
      id: 4,
      name: "Artisan Crossbody Bag",
      category: "bags",
      price: "₦20,000",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
      description: "Stylish palm fiber crossbody",
    },
    {
      id: 5,
      name: "Traditional Palm Slippers",
      category: "shoes",
      price: "₦10,000",
      image:
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&h=500&fit=crop",
      description: "Authentic Nigerian palm slippers",
    },
    {
      id: 6,
      name: "Palm Market Basket",
      category: "bags",
      price: "₦8,000",
      image:
        "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=500&h=500&fit=crop",
      description: "Durable handwoven market basket",
    },
  ];

  const testimonials = [
    {
      name: "Amaka Okonkwo",
      location: "Benin City",
      text: "The quality is exceptional! I bought three pairs of palm shoes and they are so comfortable. Very happy with my purchase.",
      rating: 5,
    },
    {
      name: "Chidi Eze",
      location: "Lagos",
      text: "Beautiful craftsmanship. The bag I ordered is unique and gets compliments everywhere I go. Highly recommend!",
      rating: 5,
    },
    {
      name: "Grace Imafidon",
      location: "Benin City",
      text: "Authentic Nigerian quality. Fast delivery within Benin. The WhatsApp ordering was so easy!",
      rating: 5,
    },
  ];

  const whatsappNumber = "2348012345678"; // Replace with actual number
  const whatsappMessage = (productName) =>
    `Hello! I'm interested in ordering the ${productName}. Can you provide more details?`;

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-amber-800">
                PalmCraft
              </span>
              <span className="ml-2 text-sm text-gray-600">Benin City</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-amber-800"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("shop")}
                className="text-gray-700 hover:text-amber-800"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-amber-800"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-amber-800"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-amber-800"
              >
                Contact
              </button>
            </div>

            {/* WhatsApp CTA Desktop */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Order on WhatsApp
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("shop")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-gray-700"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Contact
              </button>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white text-center px-6 py-2 rounded-full mt-4"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Handcrafted Palm Shoes & Bags from Benin City
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Authentic Nigerian craftsmanship meets modern style. Each piece
                is handmade with care using traditional palm weaving techniques.
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

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Browse our handcrafted palm shoes and bags. Each item is made to
            order with love and attention to detail.
          </p>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === "all"
                  ? "bg-amber-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory("shoes")}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === "shoes"
                  ? "bg-amber-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Palm Shoes
            </button>
            <button
              onClick={() => setSelectedCategory("bags")}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === "bags"
                  ? "bg-amber-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Bags
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-800">
                      {product.price}
                    </span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        whatsappMessage(product.name)
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition flex items-center gap-2"
                    >
                      <ShoppingBag size={18} />
                      Order
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Based in Benin City, Nigeria, we are passionate artisans
                dedicated to preserving and modernizing traditional palm craft
                techniques. Every shoe and bag we create tells a story of
                Nigerian heritage and craftsmanship.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our palm products are not just accessories – they're
                sustainable, durable, and uniquely African. We source our
                materials locally and work with skilled craftspeople to ensure
                every piece meets our high standards.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Coming soon: We're expanding into leather shoemaking to offer
                you even more handcrafted options!
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-center text-gray-600 mb-12">
            See our craftsmanship in action
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1491677533189-49af044391ed?w=400&h=400&fit=crop",
            ].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>

          <div className="bg-white rounded-lg shadow-xl p-8 relative">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={24}
                  />
                )
              )}
            </div>
            <p className="text-xl text-gray-700 text-center mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="text-center font-semibold text-gray-900">
              {testimonials[currentTestimonial].name}
            </p>
            <p className="text-center text-gray-600">
              {testimonials[currentTestimonial].location}
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="bg-amber-800 text-white p-2 rounded-full hover:bg-amber-900 transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
                className="bg-amber-800 text-white p-2 rounded-full hover:bg-amber-900 transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How to Order
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Choose Your Product
              </h3>
              <p className="text-gray-600">
                Browse our collection and select the item you love
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Contact Us on WhatsApp
              </h3>
              <p className="text-gray-600">
                Click the "Order" button to message us directly
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Your Order</h3>
              <p className="text-gray-600">
                Free delivery in Benin City, nationwide shipping available
              </p>
            </div>
          </div>

          <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
            <p className="text-lg mb-4">
              Ready to order? We accept bank transfers and pay-on-delivery
              (within Benin City)
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition"
            >
              Start Your Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Have questions about our products? Want to place a custom order?
                We're here to help!
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="text-amber-400 mt-1" />
                  <div>
                    <p className="font-semibold">Phone / WhatsApp</p>
                    <p className="text-gray-300">+234 801 234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-amber-400 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">info@palmcraft.ng</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-400 mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">
                      Benin City, Edo State, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-semibold mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email / Phone
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
                    placeholder="How can we reach you?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-800 text-white py-3 rounded-lg hover:bg-amber-900 transition font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; 2024 PalmCraft. Handmade with love in Benin City, Nigeria.
          </p>
          <p className="mt-2 text-sm">
            Authentic Nigerian Palm Shoes & Bags | Coming Soon: Leather Shoes
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition z-50 flex items-center gap-2"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="hidden md:inline font-semibold">Chat with Us</span>
      </a>
    </div>
  );
}
