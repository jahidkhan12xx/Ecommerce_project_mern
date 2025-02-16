import { motion, useAnimation, useInView } from "motion/react"; 
import { useRef, useEffect } from "react";

const Reveal = ({ children }) => {
  const ref = useRef(null); // Create a ref to the element
  const isInView = useInView(ref,{once:true}) // Track visibility of the element
  const mainControls = useAnimation();
  const slideControls = useAnimation();


  

  // useEffect(() => {
  //   // Trigger animation when the element comes into view
  //   if (isInView) {
  //     mainControls.start("visible");
  //     slideControls.start("visible");
  //   } 
  // }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      {/* Text Animation */}
      <motion.div
        
        initial={{ opacity: 0, y: 100 }}
        animate={isInView?{ opacity: 1, y: 0 }:{}}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      {/* Overlay Animation */}
      <motion.div
        className="absolute bg-top z-20"
        style={{ top: 2, bottom: 2, left: 0, right: 0 }}
        
        initial={{ left: 0 }}
        animate={isInView?{ left:"100%" }:{}}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
    </div>
  );
};

export default Reveal;
