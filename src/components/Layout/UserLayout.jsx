import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';

const UserLayout = () => {
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 

  // Track mouse position
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

 

  // Mouse animation variant
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <div className="bg-main-bg relative">
      {/* Animated Mouse Cursor */}
      <motion.div
        variants={variants}
        animate="default"
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        className="z-[9000] h-8 w-8 rounded-2xl fixed top-0 left-0 bg-white/10 backdrop-blur-2xl pointer-events-none"
        style={{
          boxShadow:
            '0 0 20px rgba(0, 173, 181, 0.7), 0 0 40px rgba(0, 173, 181, 0.5)',
        }}
      ></motion.div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div>
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
