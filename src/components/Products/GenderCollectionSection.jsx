import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
import { motion } from "motion/react";  // Correct import
import Reveal from "../../animation/Reveal";


const GenderCollectionSection = () => {
  


  

  return (
    <section  className=" px-4 lg:px-0 overflow-hidden container mx-auto">
      {/* <motion.h2 initial={{ x: "-25vw",opacity: 0 }}
          whileInView={{ x: 0,opacity:1 }}
          transition={{duration:0.6,type:"spring",stiffness:80}}  className=" text-4xl font-bold text-le mt-24 mb-4   text-text-primary">#Our Collections</motion.h2> */}
          <div className=" my-5">
          <Reveal ><h1 className="text-4xl font-bold text-left text-text-primary">#Our Collection</h1></Reveal>
          <Reveal><p className="text-lg font-light  text-left text-text-secondary">Find out our most elegant design and experience the simplicity</p></Reveal>
          </div>
      <div  className=" flex flex-col md:flex-row gap-8 overflow-hidden">
        {/* Women's Collection */}
        <motion.div 
          initial={{ x: "-25vw", opacity: 0 }}
          whileInView={{x:0,opacity: 1}}
          transition={{ delay: 0.1, duration: 1, type: "spring" }}
          viewport={{amount:0.2,once:true}}
         
          className="relative flex-1"
        >
          <img
            src={womensCollectionImage}
            alt="Women collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-card-bg p-4 pb-6">
           <h2 className="text-2xl font-bold text-text-primary pb-6">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="bg-w px-4 py-2 my-3 text-text-primary shadow-xl rounded-md border-t-2 border-r-2 border-text-primary transition-all duration-500 ease-in-out transform scale-100 hover:text-text-primary hover:scale-125 hover:border-t-transparent hover:border-r-transparent hover:shadow-none"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>

        {/* Men's Collection */}
        <motion.div
          initial={{ x: "25vw", opacity: 0 }}
          whileInView={{x:0,opacity: 1}}
          transition={{ delay: 0.1, duration: 1, type: "spring" }}
          viewport={{amount:0.2,once:true}}
          
          className="relative flex-1"
        >
          <img
            src={mensCollectionImage}
            alt="Men collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-card-bg p-4 pb-6">
            <h2 className="text-2xl font-bold text-text-primary pb-6">
              Men's Collection
            </h2>
           <Link
              to="/collections/all?gender=Men"
              className="bg-cborder-card-bg px-4 py-2 my-3 text-just-text shadow-xl rounded-md border-t-2 border-r-2 border-just-text transition-all duration-500 ease-in-out transform scale-100 hover:text-text-primary hover:scale-95 hover:border-t-transparent hover:border-r-transparent hover:shadow-none"
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
