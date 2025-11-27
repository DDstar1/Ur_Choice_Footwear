"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";

export interface Product {
  id: number | string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "shoes" | "bags" | string;
}

interface ShopSectionProps {
  products: Product[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  whatsappNumber: string;
  whatsappMessage: (productName: string) => string;
}

const ShopSection: React.FC<ShopSectionProps> = ({
  products,
  selectedCategory,
  setSelectedCategory,
  whatsappNumber,
  whatsappMessage,
}) => {
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Collection
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Browse our handcrafted palm shoes and bags. Each item is made to order
          with love and attention to detail.
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { label: "All Products", value: "all" },
            { label: "Palm Shoes", value: "shoes" },
            { label: "Bags", value: "bags" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === cat.value
                  ? "bg-amber-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
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
                    <ShoppingBag size={18} /> Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
