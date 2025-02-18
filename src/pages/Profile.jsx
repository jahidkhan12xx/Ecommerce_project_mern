/* eslint-disable react-refresh/only-export-components */
import { BiUser } from "react-icons/bi";
import MyOrderList from "./MyOrderList";
import Transition from "../components/Transition";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 relative">
          {/* Left Sidebar (Profile Section - Positioned at Top Left) */}
          <div className="w-full md:w-1/3 lg:w-1/4   rounded-xl p-6 flex flex-col items-center">
            {/* User Icon */}
            <div className="w-24 h-24 flex items-center justify-center bg-blue-100 text-top rounded-full mb-4">
              <BiUser size={60} />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
              John Doe
            </h1>
            <p className="text-md text-gray-600 mb-4">johndoe@example.com</p>

            <button className="w-full bg-top text-white py-2 px-4 rounded-lg hover:bg-text-secondary cursor-pointer transition">
              Log Out
            </button>
          </div>

          {/* Right Section (Orders List - Adjusted for Profile Placement) */}
          <div className="w-full md:w-2/3">
            <MyOrderList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(Profile);
