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

const galleryImages: string[] = [
  "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1491677533189-49af044391ed?w=400&h=400&fit=crop",
];

const contactInfo = {
  whatsappNumber: "09483838388383",
  whatsappLink: "https://wa.me/2348130000000",
  callNumber: "+2348130000000",
  instagramPage: "https://instagram.com/yourpage",
  tiktokPage: "https://tiktok.com/@yourpage",
  facebookPage: "https://facebook.com/yourpage", // optional
  email: "info@palmcraft.com", // optional
};

export { products, testimonials, galleryImages, contactInfo };
