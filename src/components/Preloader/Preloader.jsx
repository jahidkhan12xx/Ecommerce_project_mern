import { useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    // Simulating a 3-second loading time
    setTimeout(() => {
      setLoading(false); // Update state to hide preloader
    }, 3000);
  }, [setLoading]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Spinning Loader */}
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Title Fade-in */}
      <motion.h1
        className="text-2xl font-semibold mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Loading Your Experience...
      </motion.h1>
    </div>
  );
};

export default Preloader;
