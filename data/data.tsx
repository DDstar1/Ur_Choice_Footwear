interface GalleryItem {
  src: string;
  price: number;
  category: string;
  title: string;
  description: string;
}

const testimonials = [
  {
    name: "Sasha Shapere",
    role: "Fashion Enthusiast",
    image: "/images/fake_profile.webp",
    text: "The quality and design of Amy’s Shoes are unmatched. I love how I can express my style while supporting eco-friendly fashion. Definitely my go-to store for all occasions.",
    rating: 5,
  },
  {
    name: "Jordan Styles",
    role: "Designer",
    image: "/images/fake_profile.webp",
    text: "Amy’s Shoes are a perfect blend of comfort and style. The craftsmanship is incredible, and I always get compliments when I wear them.",
    rating: 5,
  },
  {
    name: "Olivia Trends",
    role: "Influencer",
    image: "/images/fake_profile.webp",
    text: "Sustainable fashion is the future, and Amy’s Shoes lead the way! Their designs are stunning and truly eco-friendly.",
    rating: 5,
  },
  {
    name: "Leo Harper",
    role: "Stylist",
    image: "/images/fake_profile.webp",
    text: "Amy’s Shoes are my favorite pick for my clients. They combine fashion with function in the best way possible!",
    rating: 4,
  },
  {
    name: "Mia Couture",
    role: "Fashion Blogger",
    image: "/images/fake_profile.webp",
    text: "These shoes are a must-have! The comfort and durability make them stand out in the industry.",
    rating: 4,
  },
  {
    name: "Ethan Vogue",
    role: "Model",
    image: "/images/fake_profile.webp",
    text: "I always feel confident in Amy’s Shoes. They elevate any outfit and are super comfortable to walk in!",
    rating: 5,
  },
];

const galleryImages: GalleryItem[] = [
  {
    src: "/images/products/12k-black-palm.jpg",
    price: 12000,
    category: "Female Palm",
    title: "Black Palm Slippers",
    description: "Comfortable handcrafted palm slippers in black.",
  },
  {
    src: "/images/products/12k-white-palm.jpg",
    price: 12000,
    category: "Female Palm",
    title: "White Palm Slippers",
    description: "Lightweight white palm slippers perfect for casual wear.",
  },
  {
    src: "/images/products/13k-brown-palm.jpg",
    price: 13000,
    category: "Female Palm",
    title: "Brown Palm Slippers",
    description: "Classic brown palm footwear for everyday comfort.",
  },
  {
    src: "/images/products/13k-white-palm.jpg",
    price: 13000,
    category: "Female Palm",
    title: "White Palm Slippers",
    description: "Simple and stylish white palm slippers.",
  },
  {
    src: "/images/products/14k-brown-palm-2.jpg",
    price: 14000,
    category: "Female Palm",
    title: "Brown Palm Slippers V2",
    description: "Premium brown palm slippers with improved durability.",
  },
  {
    src: "/images/products/14k-brown-palm.jpg",
    price: 14000,
    category: "Female Palm",
    title: "Brown Palm Slippers",
    description: "Quality handcrafted brown palm slippers.",
  },
  {
    src: "/images/products/17k-black-ash-palm.jpg",
    price: 17000,
    category: "Male Slides",
    title: "Black & Ash Palm",
    description: "Two-tone palm slippers in black and ash styling.",
  },
  {
    src: "/images/products/17k-black-palm-2.jpg",
    price: 17000,
    category: "Male Slides",
    title: "Black Palm Slippers V2",
    description: "Updated black palm design with premium finishing.",
  },
  {
    src: "/images/products/17k-black-palm-3.jpg",
    price: 17000,
    category: "Male Slides",
    title: "Black Palm Slippers V3",
    description: "Modern black palm slippers built for comfort.",
  },
  {
    src: "/images/products/17k-black-palm.jpg",
    price: 17000,
    category: "Male Slides",
    title: "Classic Black Palm",
    description: "Classic all-black palm footwear with durable sole.",
  },
  {
    src: "/images/products/17k-brown-black.jpg",
    price: 17000,
    category: "Male Slides",
    title: "Brown & Black Palm",
    description: "Stylish brown and black palm mix for a unique look.",
  },
  {
    src: "/images/products/17k-brown-palm.jpg",
    price: 17000,
    category: "Sandals",
    title: "Brown Palm Slippers",
    description: "Elegant brown palm slippers suitable for casual outings.",
  },
  {
    src: "/images/products/18k-black-Sandals.jpg",
    price: 18000,
    category: "Male Slides",
    title: "Black Sandals",
    description: "Comfortable black Sandals suitable for everyday use.",
  },
  {
    src: "/images/products/18k-ash-palm.jpg",
    price: 18000,
    category: "Male Slides",
    title: "Ash Palm Slippers",
    description: "Soft ash-colored palm slippers with strong straps.",
  },
  {
    src: "/images/products/18k-black-brown-palm.jpg",
    price: 18000,
    category: "Male Slides",
    title: "Black & Brown Palm",
    description: "Two-tone palm slippers combining black and brown.",
  },
  {
    src: "/images/products/18k-black-palm.jpg",
    price: 18000,
    category: "Male Slides",
    title: "Black Palm Slippers",
    description: "Durable black palm slippers with stylish finish.",
  },
  {
    src: "/images/products/18k-brown-half-shoe.jpg",
    price: 18000,
    category: "Male Slides",
    title: "Brown Half Shoe",
    description: "Comfortable slip-on brown half shoe for everyday wear.",
  },
  {
    src: "/images/products/18k-brown-palm-3.jpg",
    price: 18000,
    category: "Male Slides",
    title: "Brown Palm Slippers V3",
    description: "Enhanced brown palm design for comfort and durability.",
  },
  {
    src: "/images/products/18k-brown-palm-4.jpg",
    price: 18000,
    category: "Male Slides",
    title: "Brown Palm Slippers V4",
    description: "Modern style brown palm with premium materials.",
  },
  {
    src: "/images/products/18k-brown-palm.jpg",
    price: 18000,
    category: "Male Slides",
    title: "Brown Palm Slippers",
    description: "Premium brown palm footwear crafted for all-day comfort.",
  },
  {
    src: "/images/products/19k-palm.jpg",
    price: 19000,
    category: "Male Slides",
    title: "Premium Palm Slippers",
    description: "High-quality palm slippers designed for maximum comfort.",
  },
  {
    src: "/images/products/20k-black-half-shoe.jpg",
    price: 20000,
    category: "Male Slides",
    title: "Black Half Shoe",
    description:
      "Stylish black half shoe ideal for both casual and formal outfits.",
  },
  {
    src: "/images/products/20k-bown-palm-2.jpg",
    price: 20000,
    category: "Male Slides",
    title: "Brown Palm Slippers V2",
    description: "Upgraded brown palm slippers with premium leather quality.",
  },
  {
    src: "/images/products/20k-brown-palm.jpg",
    price: 20000,
    category: "Male Slides",
    title: "Brown Palm Slippers",
    description: "Elegant brown palm slippers with durable craftsmanship.",
  },
  {
    src: "/images/products/22k-black-half-shoe.jpg",
    price: 22000,
    category: "Male Slides",
    title: "Premium Black Half Shoe",
    description: "Premium finish black half shoe for a classy look.",
  },
  {
    src: "/images/products/22k-grey-palm.jpg",
    price: 22000,
    category: "Male Slides",
    title: "Grey Palm Slippers",
    description: "Unique grey palm slippers offering a clean and modern style.",
  },
  {
    src: "/images/products/25k-black-shoe.jpg",
    price: 25000,
    category: "Half Shoe",
    title: "Black half Shoe",
    description: "Premium black shoe for formal and stylish outfits.",
  },
  {
    src: "/images/products/25k-black-half-shoe.jpg",
    price: 25000,
    category: "Half Shoe",
    title: "Black Half Shoe",
    description: "High-end black half shoe for premium comfort and style.",
  },
];

const contactInfo = {
  whatsappNumber: "2348131808316",
  whatsappLink: "https://wa.me/2348131808316",
  callNumber: "+2348088714262",
  instagramPage: "https://www.instagram.com/urchoicefootwear",
  tiktokPage: "https://www.tiktok.com/@urchoice_collecti",
  facebookPage: "https://facebook.com/yourpage", // optional
  email: "info@palmcraft.com", // optional
};

export { testimonials, galleryImages, contactInfo };
