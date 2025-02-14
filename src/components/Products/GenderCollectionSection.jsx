import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
import { motion, useInView } from "motion/react";  // Correct import
import { useRef, useState } from "react";

const GenderCollectionSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });


  

  return (
    <section  className="py-16 px-4 lg:px-0 overflow-hidden">
      <div ref={ref} className="container mx-auto flex flex-col md:flex-row gap-8 overflow-hidden">
        {/* Women's Collection */}
        <motion.div 
          initial={{ x: "-25vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 1, type: "spring" }}
          className="relative flex-1"
        >
          <img
            src={womensCollectionImage}
            alt="Women collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-card-bg p-4 pb-6">
            <h2 className="text-2xl font-bold text-just-text pb-6">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="bg-top px-4 py-2 my-3 text-just-text shadow-xl rounded-md border-t-2 border-r-2 border-just-text transition-all duration-500 ease-in-out transform scale-100 hover:text-white hover:scale-95 hover:border-t-transparent hover:border-r-transparent hover:shadow-none"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>

        {/* Men's Collection */}
        <motion.div
          initial={{ x: "25vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 1, type: "spring" }}
          className="relative flex-1"
        >
          <img
            src={mensCollectionImage}
            alt="Men collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-card-bg p-4 pb-6">
            <h2 className="text-2xl font-bold text-white pb-6">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="bg-cborder-card-bg px-4 py-2 my-3 text-just-text shadow-xl rounded-md border-t-2 border-r-2 border-just-text transition-all duration-500 ease-in-out transform scale-100 hover:text-white hover:scale-95 hover:border-t-transparent hover:border-r-transparent hover:shadow-none"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
