
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProductById, Product, getBestSellers } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading
    setIsLoading(true);
    
    setTimeout(() => {
      if (id) {
        const productData = getProductById(id);
        if (productData) {
          setProduct(productData);
          
          // Get related products (using best sellers as a fallback)
          const related = getBestSellers().filter(
            (p) => p.id !== id
          ).slice(0, 3);
          setRelatedProducts(related);
        }
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {
    if (product) {
      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.name} added to your cart.`,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="animate-spin h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <p className="mt-4 text-gray-500">Loading product...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-24 pb-16">
          <div className="container-custom">
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
              <p className="text-gray-600 mb-8">
                Sorry, the product you're looking for doesn't exist or has been removed.
              </p>
              <Link to="/shop" className="btn-primary">
                Return to Shop
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/shop"
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Link>
          </div>
          
          {/* Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 rounded-2xl overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover aspect-square"
              />
            </motion.div>
            
            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              {/* Labels */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.new && (
                  <span className="text-xs bg-accent text-white px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                {product.bestSeller && (
                  <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                    Best Seller
                  </span>
                )}
                <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{product.name}</h1>
              
              <div className="text-2xl font-semibold text-primary mb-4">
                ${product.price.toFixed(2)}
              </div>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              {/* Quantity selector */}
              <div className="flex items-center mb-6">
                <span className="mr-4 font-medium">Quantity:</span>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center rounded-l-md bg-gray-100 hover:bg-gray-200 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="w-12 h-10 flex items-center justify-center bg-gray-50 border-y border-gray-200">
                    {quantity}
                  </div>
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center rounded-r-md bg-gray-100 hover:bg-gray-200 transition-colors"
                    disabled={product.stock <= quantity}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="ml-4 text-sm text-gray-500">
                  {product.stock} available
                </span>
              </div>
              
              {/* Add to cart button */}
              <button
                onClick={addToCart}
                className="btn-primary flex items-center justify-center py-3"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              
              {/* Product highlights */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="font-semibold mb-4">Highlights:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Caffeine: {product.nutritionalInfo.caffeine}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Calories: {product.nutritionalInfo.calories}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Sugar: {product.nutritionalInfo.sugar}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>Serving Size: {product.nutritionalInfo.servingSize}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          {/* Tabs */}
          <div className="mb-16">
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-6 py-3 font-medium text-sm transition-colors ${
                  activeTab === "description"
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("ingredients")}
                className={`px-6 py-3 font-medium text-sm transition-colors ${
                  activeTab === "ingredients"
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab("nutrition")}
                className={`px-6 py-3 font-medium text-sm transition-colors ${
                  activeTab === "nutrition"
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Nutrition Facts
              </button>
            </div>
            
            <div className="prose max-w-none">
              {activeTab === "description" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 leading-relaxed">
                    {product.fullDescription}
                  </p>
                </motion.div>
              )}
              
              {activeTab === "ingredients" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Ingredients</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-700">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {activeTab === "nutrition" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Nutrition Facts</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <p className="font-bold">Serving Size: {product.nutritionalInfo.servingSize}</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      <div className="px-4 py-3 flex justify-between">
                        <span>Calories</span>
                        <span className="font-medium">{product.nutritionalInfo.calories}</span>
                      </div>
                      <div className="px-4 py-3 flex justify-between">
                        <span>Caffeine</span>
                        <span className="font-medium">{product.nutritionalInfo.caffeine}</span>
                      </div>
                      <div className="px-4 py-3 flex justify-between">
                        <span>Sugar</span>
                        <span className="font-medium">{product.nutritionalInfo.sugar}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard 
                    key={relatedProduct.id} 
                    product={relatedProduct} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
