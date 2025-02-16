import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ProductGrid = ({ products }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      initial={{ opacity: 1 }} // Keep the container visible
      whileInView={{ opacity: 1 }}
      viewport={{once: true}}
    >
      {products?.map((product, i) => (
        <motion.div 
          key={product._id} 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.2, duration: 0.7, easing: "ease-out" }}
          viewport={{once: true}}
        >
          <Link to={`/product/${product._id}`} className="block">
            <div className="bg-main-bg p-4 ">
              <div className="w-full h-96 mb-4">
                <img className="w-full h-full object-cover rounded-lg" src={product.images[0].url} alt={product.name} />
              </div>
              <h3 className="text-medium font-bold mb-2 text-left text-text-primary">{product.name}</h3>
              <p className="text-text-secondary font-medium text-left text-sm tracking-tighter">${product.price}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
