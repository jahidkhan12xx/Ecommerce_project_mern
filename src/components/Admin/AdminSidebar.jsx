import { FaSignOutAlt } from "react-icons/fa";
import { FaBoxOpen, FaClipboardList, FaStore, FaUser } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          Jstore
        </Link>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-top text-main-bg py-3 px-4 rounded flex items-center space-x-2"
              : "text-top hover:bg-top hover:text-main-bg py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUser className=" text-sm md:text-lg" />
          <span className=" text-sm md:text-lg">Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-top text-main-bg py-3 px-4 rounded flex items-center space-x-2"
              : "text-top hover:bg-top hover:text-main-bg py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaBoxOpen className=" text-sm md:text-lg" />
          <span className=" text-sm md:text-lg">Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-top text-main-bg py-3 px-4 rounded flex items-center space-x-2"
              : "text-top hover:bg-top hover:text-main-bg py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaClipboardList className=" text-sm md:text-lg" />
          <span className=" text-sm md:text-lg">Orders</span>
        </NavLink>
        <NavLink
          to="/collections/all"
          className={({ isActive }) =>
            isActive
              ? "bg-top text-main-bg py-3 px-4 rounded flex items-center space-x-2"
              : "text-top hover:bg-top hover:text-main-bg py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaStore className=" text-sm md:text-lg" />
          <span className=" text-sm md:text-lg">Store</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button
          className="w-full bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 cursor-pointer"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
