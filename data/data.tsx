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
    name: "Sasha Shapere",
    role: "Fashion Enthusiast",
    image: "/fashion/headshot.jpg",
    text: "The quality and design of Amy’s Shoes are unmatched. I love how I can express my style while supporting eco-friendly fashion. Definitely my go-to store for all occasions.",
  },
  {
    name: "Jordan Styles",
    role: "Designer",
    image: "/fashion/headshot.jpg",
    text: "Amy’s Shoes are a perfect blend of comfort and style. The craftsmanship is incredible, and I always get compliments when I wear them.",
  },
  {
    name: "Olivia Trends",
    role: "Influencer",
    image: "/fashion/headshot.jpg",
    text: "Sustainable fashion is the future, and Amy’s Shoes lead the way! Their designs are stunning and truly eco-friendly.",
  },
  {
    name: "Leo Harper",
    role: "Stylist",
    image: "/fashion/headshot.jpg",
    text: "Amy’s Shoes are my favorite pick for my clients. They combine fashion with function in the best way possible!",
  },
  {
    name: "Mia Couture",
    role: "Fashion Blogger",
    image: "/fashion/blogger.jpg",
    text: "These shoes are a must-have! The comfort and durability make them stand out in the industry.",
  },
  {
    name: "Ethan Vogue",
    role: "Model",
    image: "/fashion/headshot.jpg",
    text: "I always feel confident in Amy’s Shoes. They elevate any outfit and are super comfortable to walk in!",
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
