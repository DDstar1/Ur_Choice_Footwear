"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, ChevronDown, ChevronUp } from "lucide-react";
import { contactInfo } from "@/data/data";
import { galleryImages } from "@/data/data";

export interface Product {
  id: number | string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

interface ShopSectionProps {
  selectedCategory?: string;
  setSelectedCategory?: (category: string) => void;
  whatsappMessage?: (productName: string) => string;
}

// Transform galleryImages to match Product interface
const transformGalleryToProducts = (galleryItems: any[]): Product[] => {
  return galleryItems.map((item, index) => ({
    id: item.id || index,
    name: item.title || "Product",
    description: item.description || "Handcrafted palm product",
    price:
      typeof item.price === "number"
        ? `₦${item.price.toLocaleString()}`
        : `₦${item.price}`,
    image: item.src,
    category: item.category,
  }));
};

const ShopSection: React.FC<ShopSectionProps> = ({
  whatsappMessage = (productName) =>
    `Hi! I'm interested in ordering ${productName}`,
}) => {
  const [internalCategory, setInternalCategory] = React.useState("all");
  const [products] = useState(() => transformGalleryToProducts(galleryImages));
  const [showAll, setShowAll] = useState(false);
  const [initialLimit, setInitialLimit] = useState(6); // Default fallback

  const selectedCategory = internalCategory;
  const setSelectedCategory = setInternalCategory;

  // Calculate initial limit based on screen height
  useEffect(() => {
    const calculateInitialLimit = () => {
      if (typeof window !== "undefined") {
        const screenHeight = window.innerHeight;
        // Estimate how many products can fit in 2x screen height
        // Each product card is roughly 400-500px tall on mobile
        const productCardHeight = 450;
        const productsPerScreen = Math.floor(screenHeight / productCardHeight);
        return productsPerScreen * 2; // 2x screen height
      }
      return 6; // Fallback
    };

    setInitialLimit(calculateInitialLimit());

    // Recalculate on window resize
    const handleResize = () => {
      setInitialLimit(calculateInitialLimit());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically get unique categories from products
  const categories = React.useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((p) => p.category))
    );
    return [
      { label: "All Products", value: "all" },
      ...uniqueCategories.map((category) => ({
        label: category,
        value: category.toLowerCase().replace(/\s+/g, "-"),
      })),
    ];
  }, [products]);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (p) =>
            p.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory
        );

  // Determine which products to display
  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, initialLimit);

  // Check if we need to show the "See More" button
  const shouldShowSeeMore = filteredProducts.length > initialLimit;

  // Reset showAll when category changes
  React.useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Browse our handcrafted palm shoes and bags. Each item is made to
            order with love and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 active:scale-95 ${
                selectedCategory === cat.value
                  ? "bg-amber-800 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-800">
                    {product.price}
                  </span>

                  <a
                    href={`https://wa.me/${
                      contactInfo.whatsappNumber
                    }?text=${encodeURIComponent(
                      whatsappMessage(product.name)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
                  >
                    <ShoppingBag size={18} /> Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More/Less Button */}
        {shouldShowSeeMore && (
          <div className="text-center mt-12 animate-fade-in">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-900 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto"
            >
              {showAll ? (
                <>
                  <ChevronUp size={20} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  See More Products ({filteredProducts.length -
                    initialLimit}{" "}
                  more)
                </>
              )}
            </button>
          </div>
        )}

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ShopSection;
