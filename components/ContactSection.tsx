import React, { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

interface FormData {
  name: string;
  contact: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const phoneNumber = "2348012345678"; // Replace with your actual number
    const message = encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.contact}\n\nMessage: ${formData.message}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");

    // Reset form
    setFormData({ name: "", contact: "", message: "" });
  };

  return (
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
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-semibold mb-2"
                >
                  Email / Phone
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
                  placeholder="How can we reach you?"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
                  placeholder="Tell us what you need..."
                  required
                />
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
  );
};

export default ContactSection;
