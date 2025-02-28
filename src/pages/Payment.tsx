
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, CreditCard } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "googlepay">("card");
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  
  // Form state
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentStatus !== "idle") return;
    
    // Validate form if card payment
    if (paymentMethod === "card") {
      if (!formData.cardName || !formData.cardNumber || !formData.expiry || !formData.cvv) {
        toast({
          title: "Missing information",
          description: "Please fill out all required fields.",
          variant: "destructive"
        });
        return;
      }
    }
    
    // Start payment processing
    setPaymentStatus("processing");
    
    // Simulate payment processing
    setTimeout(() => {
      // Simulate successful payment
      setPaymentStatus("success");
      
      // Show success message
      toast({
        title: "Payment successful!",
        description: "Your order has been processed successfully.",
      });
      
      // Clear cart
      setTimeout(() => {
        clearCart();
        // Navigate to thank you page or homepage
        navigate("/");
      }, 2000);
    }, 2000);
  };
  
  if (cart.length === 0) {
    // Redirect to cart if there are no items
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container-custom">
            <div className="text-center py-16">
              <div className="text-7xl mb-4">🛒</div>
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                You need to add items to your cart before proceeding to checkout.
              </p>
              <Link to="/shop" className="btn-primary">
                Start Shopping
              </Link>
            </div>
          </div>
        </main>
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
              to="/cart"
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                {paymentStatus === "success" ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
                    <p className="text-gray-600 mb-4">
                      Your order has been processed and will be shipped soon.
                    </p>
                    <p className="text-sm text-gray-500">
                      You will be redirected to the homepage shortly...
                    </p>
                  </div>
                ) : (
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                    
                    {/* Payment Method Selector */}
                    <div className="mb-6">
                      <div className="flex space-x-4 mb-6">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("card")}
                          className={`flex-1 py-3 px-4 rounded-lg border ${
                            paymentMethod === "card"
                              ? "border-primary bg-primary/5"
                              : "border-gray-200"
                          } transition-colors flex items-center justify-center`}
                        >
                          <CreditCard className="h-5 w-5 mr-2" />
                          <span>Credit Card</span>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("googlepay")}
                          className={`flex-1 py-3 px-4 rounded-lg border ${
                            paymentMethod === "googlepay"
                              ? "border-primary bg-primary/5"
                              : "border-gray-200"
                          } transition-colors flex items-center justify-center`}
                        >
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5001 12.2332C22.5001 11.3699 22.4275 10.7399 22.2701 10.0865H12.2051V13.9832H18.1201C18.0001 14.9515 17.3501 16.4099 15.9301 17.3982L15.9101 17.5182L19.1001 19.9349L19.3101 19.9549C21.3351 18.1249 22.5001 15.4399 22.5001 12.2332Z" fill="#4285F4" />
                            <path d="M12.214 22.5C15.107 22.5 17.5573 21.5667 19.319 19.9533L15.943 17.3967C15.014 18.0283 13.764 18.4617 12.214 18.4617C9.30267 18.4617 6.8327 16.5417 5.984 13.7917L5.874 13.8017L2.561 16.2933L2.521 16.4033C4.2693 20.0683 7.9827 22.5 12.214 22.5Z" fill="#34A853" />
                            <path d="M5.97333 13.7917C5.75333 13.135 5.62833 12.4317 5.62833 11.7083C5.62833 10.9833 5.75333 10.2817 5.96333 9.62501L5.95833 9.49668L2.61333 7.00168L2.51999 7.05001C1.82333 8.46834 1.41666 10.0483 1.41666 11.7083C1.41666 13.37 1.82333 14.9483 2.51999 16.3683L5.97333 13.7917Z" fill="#FBBC05" />
                            <path d="M12.214 4.95499C14.224 4.95499 15.594 5.75499 16.384 6.47999L19.384 3.58499C17.5506 1.88499 15.1073 0.916656 12.214 0.916656C7.9827 0.916656 4.2693 3.34832 2.521 7.01332L5.9643 9.63332C6.8327 6.88332 9.30267 4.95499 12.214 4.95499Z" fill="#EB4335" />
                          </svg>
                          <span>Google Pay</span>
                        </button>
                      </div>
                      
                      {paymentMethod === "card" ? (
                        <form onSubmit={handleSubmitPayment} className="space-y-4">
                          <div>
                            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                              Cardholder Name
                            </label>
                            <input
                              type="text"
                              id="cardName"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                              Card Number
                            </label>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              placeholder="1234 5678 9012 3456"
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                id="expiry"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleInputChange}
                                placeholder="MM/YY"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                CVV
                              </label>
                              <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                placeholder="123"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                              />
                            </div>
                          </div>
                          
                          <button
                            type="submit"
                            disabled={paymentStatus === "processing"}
                            className="btn-primary w-full py-3 mt-4"
                          >
                            {paymentStatus === "processing" ? (
                              <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </span>
                            ) : (
                              "Pay Now"
                            )}
                          </button>
                        </form>
                      ) : (
                        <div className="text-center py-6">
                          <div className="mb-6">
                            <img 
                              src="https://chart.googleapis.com/chart?cht=qr&chl=https://pay.google.com&chs=200x200&chld=L|0"
                              alt="Google Pay QR Code"
                              className="mx-auto rounded-xl border p-2 shadow-sm"
                              width="200"
                              height="200"
                            />
                          </div>
                          <p className="text-gray-600 mb-6">
                            Scan this QR code with your Google Pay app to complete payment
                          </p>
                          <button
                            onClick={handleSubmitPayment}
                            disabled={paymentStatus === "processing"}
                            className="btn-primary px-6 py-3"
                          >
                            {paymentStatus === "processing" ? (
                              <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </span>
                            ) : (
                              "Confirm Payment"
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="divide-y divide-gray-200">
                  <div className="space-y-3 mb-4">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex justify-between py-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 mr-2">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <span className="text-sm font-medium">{item.product.name}</span>
                            <span className="text-xs text-gray-500 block">Qty: {item.quantity}</span>
                          </div>
                        </div>
                        <span className="text-sm font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3 py-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>$5.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${(getTotalPrice() + 5 + getTotalPrice() * 0.08).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payment;
