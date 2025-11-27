import React from "react";
import { MessageCircle } from "lucide-react";

const HowToOrder = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "2348000000000"; // Format: country code + number
    const message = encodeURIComponent("Hi! I would like to place an order.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          How to Order
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Choose Your Product
            </h3>
            <p className="text-gray-600">
              Browse our collection and select the item you love
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Contact Us on WhatsApp
            </h3>
            <p className="text-gray-600">
              Click the "Order" button to message us directly
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Receive Your Order
            </h3>
            <p className="text-gray-600">
              Free delivery in Benin City, nationwide shipping available
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-700 mb-6">
            Ready to order? We accept bank transfers and pay-on-delivery{" "}
            <span className="text-gray-600">(within Benin City)</span>
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={24} />
            Start Your Order on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
