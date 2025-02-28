
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="text-2xl font-bold text-primary">ENERGIZE</Link>
            <p className="text-gray-400 text-sm">
              Fueling your potential with premium energy drinks designed for performance.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </motion.div>

          {/* Shop links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h5 className="font-semibold text-lg">Shop</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-primary transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/shop?category=classic" className="text-gray-400 hover:text-primary transition-colors">Classic</Link>
              </li>
              <li>
                <Link to="/shop?category=fruit" className="text-gray-400 hover:text-primary transition-colors">Fruit Flavors</Link>
              </li>
              <li>
                <Link to="/shop?category=performance" className="text-gray-400 hover:text-primary transition-colors">Performance</Link>
              </li>
              <li>
                <Link to="/shop?category=specialty" className="text-gray-400 hover:text-primary transition-colors">Specialty</Link>
              </li>
            </ul>
          </motion.div>

          {/* Company links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h5 className="font-semibold text-lg">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/policy" className="text-gray-400 hover:text-primary transition-colors">Terms & Policies</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Press</a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h5 className="font-semibold text-lg">Stay Updated</h5>
            <p className="text-gray-400 text-sm">Subscribe to our newsletter for updates, new flavors, and exclusive deals.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Energize. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
