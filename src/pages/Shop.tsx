
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Use the same product as on homepage
  const product = {
    id: "energize-x",
    name: "EnergizeX Fusion",
    description: "Our premium signature energy drink crafted with natural ingredients for maximum performance. Experience sustained energy without the crash.",
    fullDescription: "EnergizeX Fusion combines our signature blend of caffeine, vitamins, and natural extracts to provide long-lasting energy without the crash. Perfect for athletes, professionals, and anyone who needs a boost to power through their day.",
    price: 4.99,
    image: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/9acf4bf6-9b8f-4dbc-97fe-034459d5ee3c.png._CB276149877_.png",
    category: "energy",
    featured: true,
    new: true,
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
    flavors: ["Electric Blue"],
    stock: 100
  };

  // Create filtered product array with only this product
  const filteredProduct = searchQuery ? 
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     product.description.toLowerCase().includes(searchQuery.toLowerCase()) ? 
     [product] : []) : 
    [product];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Shop Header */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
              <p className="text-lg text-gray-300">
                Discover our premium energy drink designed to fuel your day.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Product Section */}
        <section className="py-12">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-8">              
              {/* Products */}
              <div className="flex-1">
                {/* Search */}
                <div className="mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                
                {/* Results */}
                {filteredProduct.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                  >
                    <div className="max-w-md">
                      <ProductCard product={filteredProduct[0]} index={0} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-gray-500">
                      Try adjusting your search to find what you're looking for.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
