"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavBarProps {
  whatsappNumber: string;
  scrollToSection: (sectionId: string) => void;
}

export default function NavBar({
  whatsappNumber,
  scrollToSection,
}: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 ">
            <Image
              src="/images/logo.png"
              alt="PalmCraft Logo"
              width={50} // adjust size as needed
              height={50}
              className="object-contain rounded-full overflow-hidden"
            />
            <span className="text-sm text-gray-600">Benin City</span>
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

          {/* WhatsApp CTA */}
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
            {["home", "shop", "about", "gallery", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-gray-700"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            {/* WhatsApp Button */}
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
  );
}
