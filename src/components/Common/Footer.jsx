import { Link } from "react-router-dom";
import { TbBrandInstagram, TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

import {motion} from "motion/react"

const Footer = () => {
  return (
    <div >
      <footer className="border-t py-10 bg-footer text-text-secondary">
      <div className="container mx-auto text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 px-4 lg:px-0 lg:justify-items-center">
        {/* Newsletter Section */}
        <div className=" md:text-left lg:text-left lg:col-span-2">
          <h3 className="text-lg font-medium text-main-bg ">Newsletter</h3>
          <p className=" mt-4 mb-2 lg:max-w-[20vw]">
            Be the first to hear about new products, exclusive events, and online offers.
          </p>
          <p className="font-medium text-sm  mb-6">
            Sign up and get 10% off your first order.
          </p>
          <form className="flex max-w-md ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 flex-1 border text-main-bg border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-sm"
              required
            />
            <motion.button
              type="submit"
              className="bg-button-bg text-white px-6 py-3 rounded-r-md hover:bg-gray-800 transition text-sm cursor-pointer"
            >
              Subscribe
            </motion.button>
          </form>
        </div>

        {/* Shop Section */}
        <div className=" lg:text-left md:text-left">
          <h3 className="text-lg font-medium text-main-bg  mb-4">Shop</h3>
          <ul className="space-y-2 ">
            <li>
              <Link className="hover:text-gray-500" to="#">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="#">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="#">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="#">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="lg:text-left md:text-left">
          <h3 className="text-lg font-medium text-main-bg  mb-4">Support</h3>
          <ul className="space-y-2 ">
            <li>
              <Link className="hover:text-gray-500" to="#">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="#">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="#">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className=" lg:text-left md:text-left">
          <h3 className="text-lg font-medium text-main-bg  mb-4">Follow Us</h3>
          <div className="flex  space-x-4 mb-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              <TbBrandMeta className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              <TbBrandInstagram className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              <RiTwitterXLine className="h-6 w-6" />
            </a>
          </div>
          <p className=" pb-2">Call Us</p>
          <p className="flex items-center lg:justify-center  ">
            <FiPhoneCall className="inline-block mr-2" />
            0178-070-355
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className=" text-sm tracking-tighter text-center">
          © 2025, Jstore. All Rights Reserved.
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
