import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";

import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const toogleNavDrawer = () => {
    setNavDrawerOpen((prev) => !prev);
  };

  return (
    <div className="text-just-text">
      <nav className=" container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left -logo */}
        <div>
          <motion.div

          // initial={{y:"30vh",opacity:0}}
          // animate={{y:0,opacity:1}}
          // transition={{delay:0.5,duration:2,type:"spring",stiffness:90}}
          >
            <Link to="/" className="text-3xl font-bold text-just-text">
              Jstore
            </Link>
          </motion.div>
        </div>
        {/* Center - Navigation Links */}
        <motion.div
          // initial={{y:"30vh",opacity:0}}
          // animate={{y:0,opacity:1}}
          // transition={{delay:0.5,duration:2,type:"spring",stiffness:90}}
          className=" hidden md:flex space-x-6"
        >
          <NavLink
            to="/collections/all"
            className="   text-just-text hover:text-black text-sm font-medium uppercase"
          >
            Men
          </NavLink>
          <NavLink
            to="#"
            className="   text-just-text hover:text-black text-sm font-medium uppercase"
          >
            WoMen
          </NavLink>
          <NavLink
            to="#"
            className="  text-just-text  hover:text-black text-sm font-medium uppercase"
          >
            TopWear
          </NavLink>
          <NavLink
            to="#"
            className="  text-just-text  hover:text-black text-sm font-medium uppercase"
          >
            BottomWear
          </NavLink>
        </motion.div>

        {/* Right Icons */}
        <motion.div
          // initial={{y:"30vh",opacity:0}}
          // animate={{y:0,opacity:1}}
          // transition={{delay:0.5,duration:2,type:"spring",stiffness:90}}
          className=" flex items-center space-x-4"
        >
          <Link
            to="/admin"
            className="bg-top rounded-xl text-main-bg px-2 py-0.5 text-sm"
          >
            Admin
          </Link>
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-just-text" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-just-text cursor-pointer" />
            <span className="absolute -top-1 bg-top text-main-bg text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          {/* Search */}

          <div className=" overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toogleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-just-text" />
          </button>
        </motion.div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation */}

      <div
        className={`fixed top-0 left-0 w-3/4 sm:1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" flex justify-end p-4">
          <button onClick={toogleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-top" />
          </button>
        </div>

        <div className=" p-4">
          <h2 className=" text-xl font-semibold mb-4">Menu</h2>
          <nav className=" space-y-4">
            <NavLink className="block text-top hover:text-black">Men</NavLink>
            <NavLink className="block text-top hover:text-black">WoMen</NavLink>
            <NavLink className="block text-top hover:text-black">
              Top Wear
            </NavLink>
            <NavLink className="block text-top hover:text-black">
              Bottom Wear
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
