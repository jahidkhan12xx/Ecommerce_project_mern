import { motion } from "motion/react";

const Transition = (Com) => {
  return () => (
    <>
      <Com />

      {/* First Layer - Entry Animation */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black transform origin-bottom z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration:1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Second Layer - Exit Animation */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black transform origin-top z-40"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
