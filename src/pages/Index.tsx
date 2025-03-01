import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";

const Index = () => {
  const canRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create pulsing animation
    const interval = setInterval(() => {
      if (canRef.current) {
        canRef.current.classList.add("pulse-animation");
        setTimeout(() => {
          if (canRef.current) {
            canRef.current.classList.remove("pulse-animation");
          }
        }, 1000);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const product = {
    id: "energize-x",
    name: "EnergizeX Fusion",
    description: "Our premium signature energy drink crafted with natural ingredients for maximum performance. Experience sustained energy without the crash.",
    price: 4.99,
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/9acf4bf6-9b8f-4dbc-97fe-034459d5ee3c.png._CB276149877_.png",
    category: "energy",
    stock: 100,
    new: true,
    bestSeller: true,
    flavors: ["Electric Blue"],
    nutritionFacts: {
      calories: 120,
      caffeine: "150mg",
      sugar: "0g",
      vitamins: ["B6", "B12", "Taurine", "L-Carnitine"]
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Energy Drink Showcase */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Dynamic background with neon streaks */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          {/* Neon streaks and electric sparks */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div 
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-primary via-accent to-transparent rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                opacity: 0.6,
                transformOrigin: "left center"
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
                rotate: [0, Math.random() * 10 - 5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Swirling mist effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent rounded-full filter blur-3xl"></div>
          </div>
          
          {/* Glowing particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div 
              key={`particle-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [`${Math.random() * -20}px`, `${Math.random() * 20}px`],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        {/* Product Showcase */}
        <div className="container-custom relative z-10 h-full flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white space-y-6"
            >
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                >
                  Premium Energy Drink
                </motion.span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                {product.name}
                <span className="block text-primary">Electric Blue</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-300 max-w-lg"
              >
                {product.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link to={`/product/${product.id}`} className="btn-primary">
                  Buy Now - ${product.price.toFixed(2)}
                </Link>
                <Link to="/about" className="btn-outline bg-transparent text-white border-white hover:bg-white/10">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
            
            <div className="flex justify-center items-center relative">
              {/* Product can with glow effect */}
              <motion.div
                ref={canRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative z-20 transition-transform"
              >
                {/* Glow effect behind can */}
                <div className="absolute inset-0 -z-10 bg-primary/30 rounded-full filter blur-3xl animate-pulse-subtle scale-90"></div>
                
                {/* The energy drink can - Adjusting size here */}
                <motion.img
                  src={product.image}
                  alt="EnergizeX Fusion Energy Drink"
                  className="w-auto h-auto max-w-[200px] md:max-w-[250px] xl:max-w-[300px] mx-auto drop-shadow-2xl relative z-10"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Condensation droplets */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.div
                    key={`droplet-${i}`}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full z-20 opacity-80"
                    style={{
                      left: `${30 + Math.random() * 40}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Nutrition facts */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 lg:mt-16 flex flex-wrap justify-center gap-4 md:gap-8 text-white"
          >
            {[
              { label: "Calories", value: "120" },
              { label: "Caffeine", value: "150mg" },
              { label: "Sugar", value: "0g" },
              { label: "Vitamins", value: "B6, B12" },
            ].map((item, index) => (
              <div key={index} className="text-center px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <p className="text-xs text-gray-300">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-80"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="h-6 w-6 rotate-90" />
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-medium uppercase tracking-wider"
            >
              Why Choose EnergizeX
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mt-2"
            >
              Crafted for Performance
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Ingredients",
                description: "Made with natural ingredients and advanced energy compounds for clean, sustained performance.",
                icon: "✨",
              },
              {
                title: "Zero Crash Formula",
                description: "Our proprietary blend delivers long-lasting energy without the jitters or crash typical of other energy drinks.",
                icon: "⚡",
              },
              {
                title: "Electric Blue Flavor",
                description: "A refreshing blast of blue raspberry with hints of citrus that invigorates your senses.",
                icon: "🔵",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-primary/90 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Experience the Energy Revolution
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg mb-8 text-gray-200"
            >
              Join thousands of satisfied customers who have made EnergizeX their energy drink of choice.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/product/${product.id}`}
                className="inline-flex items-center justify-center btn-primary"
              >
                Get Yours Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Stay Energized & Updated
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg mb-8 text-gray-600"
            >
              Subscribe to our newsletter for exclusive offers, new flavor releases, and energy tips.
            </motion.p>
            
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Custom CSS for pulsing animation */}
      <style>
        {`
        .pulse-animation {
          animation: can-pulse 1s ease-in-out;
        }
        
        @keyframes can-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        `}
      </style>
    </div>
  );
};

export default Index;
