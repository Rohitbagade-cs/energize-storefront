
export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  new: boolean;
  bestSeller: boolean;
  nutritionalInfo: {
    caffeine: string;
    calories: string;
    sugar: string;
    servingSize: string;
  };
  ingredients: string[];
  flavors: string[];
  stock: number;
}

export const products: Product[] = [
  {
    id: "energize-original",
    name: "Energize Original",
    description: "Our signature energy drink with a perfect balance of energy and taste.",
    fullDescription: "Energize Original combines our signature blend of caffeine, vitamins, and natural extracts to provide long-lasting energy without the crash. Perfect for athletes, professionals, and anyone who needs a boost to power through their day. With a crisp, refreshing taste and zero artificial colors.",
    price: 2.99,
    image: "/images/product-1.jpg",
    category: "classic",
    featured: true,
    new: false,
    bestSeller: true,
    nutritionalInfo: {
      caffeine: "150mg",
      calories: "10",
      sugar: "0g",
      servingSize: "12 fl oz (355ml)"
    },
    ingredients: [
      "Carbonated Water",
      "Citric Acid",
      "Natural Flavors",
      "Caffeine",
      "Taurine",
      "Panax Ginseng Extract",
      "L-Carnitine",
      "B Vitamins (B3, B6, B12)"
    ],
    flavors: ["Original"],
    stock: 250
  },
  {
    id: "energize-tropical",
    name: "Energize Tropical",
    description: "A tropical twist on our classic formula with notes of pineapple and mango.",
    fullDescription: "Experience the taste of the tropics with our Energize Tropical blend. This refreshing energy drink combines the exotic flavors of pineapple and mango with our signature energy formula. Perfect for those summer days or when you need a mental escape while powering through your tasks.",
    price: 2.99,
    image: "/images/product-2.jpg",
    category: "fruit",
    featured: true,
    new: true,
    bestSeller: false,
    nutritionalInfo: {
      caffeine: "150mg",
      calories: "15",
      sugar: "0g",
      servingSize: "12 fl oz (355ml)"
    },
    ingredients: [
      "Carbonated Water",
      "Citric Acid",
      "Natural Flavors",
      "Caffeine",
      "Taurine",
      "Panax Ginseng Extract",
      "L-Carnitine",
      "B Vitamins (B3, B6, B12)"
    ],
    flavors: ["Tropical"],
    stock: 180
  },
  {
    id: "energize-berry-blast",
    name: "Energize Berry Blast",
    description: "A burst of mixed berry flavors with our powerful energy formula.",
    fullDescription: "Energize Berry Blast delivers a symphony of berry flavors – strawberry, blueberry, and raspberry – in perfect harmony with our signature energy blend. Each sip provides a delicious burst of flavor while delivering the sustained energy you need to conquer your day.",
    price: 2.99,
    image: "/images/product-3.jpg",
    category: "fruit",
    featured: true,
    new: false,
    bestSeller: true,
    nutritionalInfo: {
      caffeine: "150mg",
      calories: "12",
      sugar: "0g",
      servingSize: "12 fl oz (355ml)"
    },
    ingredients: [
      "Carbonated Water",
      "Citric Acid",
      "Natural Flavors",
      "Caffeine",
      "Taurine",
      "Panax Ginseng Extract",
      "L-Carnitine",
      "B Vitamins (B3, B6, B12)"
    ],
    flavors: ["Berry Blast"],
    stock: 220
  },
  {
    id: "energize-citrus-surge",
    name: "Energize Citrus Surge",
    description: "A zesty blend of citrus flavors for an invigorating energy boost.",
    fullDescription: "Energize Citrus Surge combines the zesty flavors of lemon, lime, and orange for a refreshing taste experience. The bright citrus notes complement our energy formula perfectly, creating an invigorating drink that wakes up your senses while providing long-lasting energy.",
    price: 2.99,
    image: "/images/product-4.jpg",
    category: "fruit",
    featured: false,
    new: false,
    bestSeller: false,
    nutritionalInfo: {
      caffeine: "150mg",
      calories: "10",
      sugar: "0g",
      servingSize: "12 fl oz (355ml)"
    },
    ingredients: [
      "Carbonated Water",
      "Citric Acid",
      "Natural Flavors",
      "Caffeine",
      "Taurine",
      "Panax Ginseng Extract",
      "L-Carnitine",
      "B Vitamins (B3, B6, B12)"
    ],
    flavors: ["Citrus Surge"],
    stock: 165
  },
  {
    id: "energize-performance",
    name: "Energize Performance",
    description: "Formulated for athletes with added electrolytes and BCAAs.",
    fullDescription: "Engineered specifically for athletes and fitness enthusiasts, Energize Performance delivers our signature energy blend plus electrolytes and BCAAs to support hydration and muscle recovery. The perfect workout companion to help you perform at your peak and recover faster.",
    price: 3.49,
    image: "/images/product-5.jpg",
    category: "performance",
    featured: true,
    new: false,
    bestSeller: false,
    nutritionalInfo: {
      caffeine: "200mg",
      calories: "20",
      sugar: "0g",
      servingSize: "16 fl oz (473ml)"
    },
    ingredients: [
      "Carbonated Water",
      "Citric Acid",
      "Natural Flavors",
      "Caffeine",
      "Taurine",
      "Panax Ginseng Extract",
      "L-Carnitine",
      "B Vitamins (B3, B6, B12)",
      "BCAAs (L-Leucine, L-Isoleucine, L-Valine)",
      "Electrolyte Blend (Sodium, Potassium, Magnesium)"
    ],
    flavors: ["Blue Raspberry"],
    stock: 140
  },
  {
    id: "energize-focus",
    name: "Energize Focus",
    description: "Enhanced with nootropics for improved mental clarity and focus.",
    fullDescription: "Energize Focus is engineered for mental performance, combining our energy formula with a nootropic blend that supports cognitive function, focus, and mental clarity. Perfect for students, professionals, and anyone who needs to stay sharp and alert during demanding mental tasks.",
    price: 3.49,
    image: "/images/product-6.jpg",
    category: "specialty",
    featured: false,
    new: true,
    bestSeller: false,
    nutritionalInfo: {
      caffeine: "175mg",
      calories: "15",
      sugar: "0g",
      servingSize: "12 fl oz (355ml)"
    },
    ingredients: [
      "Carbonated Water",
      "Citric Acid",
      "Natural Flavors",
      "Caffeine",
      "Taurine",
      "Panax Ginseng Extract",
      "L-Carnitine",
      "B Vitamins (B3, B6, B12)",
      "L-Theanine",
      "Alpha-GPC",
      "Lion's Mane Extract"
    ],
    flavors: ["Peach"],
    stock: 120
  },
  {
    id: "energize-zero",
    name: "Energize Zero",
    description: "All the energy, none of the calories or sugar.",
    fullDescription: "Energize Zero delivers our signature energy blend without any calories or sugar. Perfect for those watching their caloric intake or reducing sugar consumption. Enjoy the clean, refreshing taste and long-lasting energy without compromising your dietary goals.",
    price: 2.99,
    image: "/images/product-7.jpg",
    category: "classic",
    featured: false,
    new: false,
    bestSeller: true,
    nutritionalInfo: {
      caffeine: "150mg",
      calories: "0",
      sugar: "0g",
      servingSize: "12 fl oz (355ml)"
    },
    ingredients: [
      "Carbonated Water",
      "Citric Acid",
      "Natural Flavors",
      "Caffeine",
      "Taurine",
      "Panax Ginseng Extract",
      "L-Carnitine",
      "B Vitamins (B3, B6, B12)",
      "Sucralose"
    ],
    flavors: ["Original"],
    stock: 200
  },
  {
    id: "energize-recovery",
    name: "Energize Recovery",
    description: "Post-workout recovery formula with reduced caffeine and added recovery compounds.",
    fullDescription: "Energize Recovery is designed for post-workout use, featuring a reduced caffeine content and added recovery-supporting compounds like amino acids and anti-inflammatory ingredients. Help your body recover while still maintaining enough energy to finish your day strong.",
    price: 3.49,
    image: "/images/product-8.jpg",
    category: "performance",
    featured: false,
    new: true,
    bestSeller: false,
    nutritionalInfo: {
      caffeine: "75mg",
      calories: "25",
      sugar: "0g",
      servingSize: "16 fl oz (473ml)"
    },
    ingredients: [
      "Carbonated Water",
      "Citric Acid",
      "Natural Flavors",
      "Caffeine",
      "Taurine",
      "Panax Ginseng Extract",
      "L-Carnitine",
      "B Vitamins (B3, B6, B12)",
      "Glutamine",
      "Arginine",
      "Turmeric Extract",
      "Tart Cherry Extract"
    ],
    flavors: ["Cherry Lime"],
    stock: 110
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const categories = [
  { id: "all", name: "All Products" },
  { id: "classic", name: "Classic" },
  { id: "fruit", name: "Fruit Flavors" },
  { id: "performance", name: "Performance" },
  { id: "specialty", name: "Specialty" }
];
