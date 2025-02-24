import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductGrid = ({ products }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {products?.map((product, i) => (
        <motion.div
          key={product._id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <Link to={`/product/${product._id}`}>
            <img
              className="w-full h-64 object-cover"
              src={product.images[0]?.url}
              alt={product.name}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-top text-sm">${product.price}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
