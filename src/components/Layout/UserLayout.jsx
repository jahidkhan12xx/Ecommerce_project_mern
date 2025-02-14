import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const UserLayout = () => {

  const [mousePosition,setMousePosition] =useState({
    x:0,
    y:0
  })


  useEffect(()=>{


    const mouseMove = (e) => {
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })
    }
    window.addEventListener('mousemove',mouseMove
    )


    return () =>{
      window.removeEventListener('mousemove',mouseMove)
    }
  },[])




  const variants = {
    default: {
      x:mousePosition.x-16,
      y:mousePosition.y-16,
    }
  }

  


 
  return (
   
      <div 
    
    className='bg-main-bg'> {/* Wrap everything inside the scroll container */}
      {/* Header */}

      <motion.div
      variants={variants}
      animate="default"
      className=' bg-yellow-500 z-[9000] h-8 w-8 rounded-2xl fixed top-0 left-0 pointer-events-none'
      style={{
        boxShadow: "0 0 20px rgba(0, 173, 181, 0.7), 0 0 40px rgba(0, 173, 181, 0.5)",
      }}></motion.div>
      <div >
        <Header />
      </div>

      {/* Main Content */}
      <div>
        <Outlet /> {/* This will render the content of Home or other pages */}
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
   
  );
};

export default UserLayout;
