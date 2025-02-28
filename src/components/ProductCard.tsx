
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-md card-hover"
    >
      {/* Product image with overlay */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <div className="font-semibold text-lg">${product.price.toFixed(2)}</div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        {/* Badges */}
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

        {/* View details link */}
        <Link
          to={`/product/${product.id}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors"
        >
          View details
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
