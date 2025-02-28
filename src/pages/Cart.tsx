
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ArrowLeft, Plus, Minus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleRemoveItem = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast({
      title: "Item removed",
      description: `${productName} has been removed from your cart.`,
    });
  };
  
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add items to your cart before proceeding to checkout.",
        variant: "destructive"
      });
      return;
    }
    
    navigate("/checkout");
  };

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
          
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-7xl mb-4">🛒</div>
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/shop" className="btn-primary">
                Start Shopping
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    {cart.map((item) => (
                      <motion.div
                        key={item.product.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                      >
                        {/* Product image */}
                        <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Product details */}
                        <div className="flex-grow">
                          <h3 className="font-semibold text-lg mb-1">{item.product.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">${item.product.price.toFixed(2)}</p>
                          
                          {/* Quantity controls */}
                          <div className="flex items-center">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-l-md bg-gray-100 hover:bg-gray-200 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <div className="w-10 h-8 flex items-center justify-center bg-gray-50 border-y border-gray-200">
                              {item.quantity}
                            </div>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-r-md bg-gray-100 hover:bg-gray-200 transition-colors"
                              disabled={item.quantity >= item.product.stock}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Price and remove */}
                        <div className="flex flex-col items-end">
                          <span className="font-semibold mb-2">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => handleRemoveItem(item.product.id, item.product.name)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-gray-50 flex justify-between items-center">
                    <button
                      onClick={() => {
                        clearCart();
                        toast({
                          title: "Cart cleared",
                          description: "All items have been removed from your cart.",
                        });
                      }}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Clear cart
                    </button>
                    <div className="text-sm text-gray-500">
                      {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="btn-primary w-full py-3"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
