
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Policy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Policies</h1>
              <p className="text-lg text-gray-300 mb-0">
                Information about our terms, privacy, and other policies.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Policy Tabs */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <div className="space-y-12">
                  {/* Terms of Service */}
                  <div className="bg-white rounded-xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
                    <div className="prose max-w-none text-gray-700">
                      <p>
                        Welcome to Energize's Terms of Service. These terms govern your use of our website, products, and services. By using our website or purchasing our products, you agree to these terms.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">1. Website Use</h3>
                      <p>
                        You may use our website for lawful purposes only. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">2. Product Purchases</h3>
                      <p>
                        All purchases made through our website are subject to product availability and acceptance of your order. We reserve the right to refuse or cancel any orders for any reason at any time.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">3. Pricing and Payment</h3>
                      <p>
                        All prices are shown in USD and are exclusive of taxes unless otherwise stated. We reserve the right to modify prices at any time. Payment must be made at the time of order.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">4. Shipping and Delivery</h3>
                      <p>
                        Shipping costs and delivery times vary based on location and are calculated at checkout. We are not responsible for delays due to customs or other factors outside our control.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">5. Returns and Refunds</h3>
                      <p>
                        We accept returns within 30 days of delivery. Products must be unopened and in original packaging. Please contact our customer service team to initiate a return.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">6. Limitation of Liability</h3>
                      <p>
                        To the maximum extent permitted by law, we exclude all representations, warranties, and liability related to our website and products.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">7. Amendments</h3>
                      <p>
                        We may update these terms from time to time. By continuing to use our website and services after such changes, you agree to be bound by the revised terms.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">8. Governing Law</h3>
                      <p>
                        These terms are governed by and construed in accordance with the laws of California, and any disputes will be subject to the exclusive jurisdiction of the courts in San Francisco, California.
                      </p>
                      
                      <p className="mt-6">
                        Last updated: June 1, 2023
                      </p>
                    </div>
                  </div>
                  
                  {/* Privacy Policy */}
                  <div className="bg-white rounded-xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
                    <div className="prose max-w-none text-gray-700">
                      <p>
                        At Energize, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">1. Information We Collect</h3>
                      <p>
                        We may collect personal information such as your name, email address, shipping address, phone number, and payment information when you make a purchase or create an account.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">2. How We Use Your Information</h3>
                      <p>
                        We use your information to process orders, provide customer service, send promotional communications (if you opt in), and improve our products and services.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">3. Information Sharing</h3>
                      <p>
                        We do not sell your personal information to third parties. We may share your information with service providers who help us operate our business, such as payment processors and shipping companies.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">4. Cookies and Tracking</h3>
                      <p>
                        Our website uses cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookies through your browser settings.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">5. Data Security</h3>
                      <p>
                        We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or destruction.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">6. Your Rights</h3>
                      <p>
                        You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">7. Changes to this Policy</h3>
                      <p>
                        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">8. Contact Us</h3>
                      <p>
                        If you have any questions about our Privacy Policy, please contact us at privacy@energizedrinks.com.
                      </p>
                      
                      <p className="mt-6">
                        Last updated: June 1, 2023
                      </p>
                    </div>
                  </div>
                  
                  {/* Return Policy */}
                  <div className="bg-white rounded-xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold mb-6">Return & Refund Policy</h2>
                    <div className="prose max-w-none text-gray-700">
                      <p>
                        We want you to be completely satisfied with your purchase. If you're not, we're here to help.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">1. Return Eligibility</h3>
                      <p>
                        You may return most unused and unopened items within 30 days of delivery for a full refund. Items must be in their original packaging with all tags and seals intact.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">2. Non-Returnable Items</h3>
                      <p>
                        Opened or consumed products cannot be returned for health and safety reasons, unless they are defective.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">3. Return Process</h3>
                      <p>
                        To initiate a return, please contact our customer service team at returns@energizedrinks.com with your order number and reason for return. We will provide you with return instructions.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">4. Refunds</h3>
                      <p>
                        Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed within 5-7 business days. The refund will be issued to the original payment method.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">5. Return Shipping</h3>
                      <p>
                        You will be responsible for paying the return shipping costs, unless the item is defective or our error. Original shipping costs are non-refundable.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">6. Damaged or Defective Items</h3>
                      <p>
                        If you receive a damaged or defective item, please contact us within 48 hours of delivery. We will provide a prepaid return label and send a replacement or issue a refund.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-4">7. Exchanges</h3>
                      <p>
                        We do not process direct exchanges. If you would like a different item, please return the original item for a refund and place a new order.
                      </p>
                      
                      <p className="mt-6">
                        Last updated: June 1, 2023
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Policy;
