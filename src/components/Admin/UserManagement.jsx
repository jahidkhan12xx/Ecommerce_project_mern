import { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      _id: 12324455,
      name: "John Doe",
      email: "johndoe@example.com",
      role: "customer",
    },
    {
      _id: 322654,
      name: "Jahid",
      email: "jahid@example.com",
      role: "admin",
    },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", //Default role is customer
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer", //Default role is customer
    });
  };

  const handleRoleChange = (userId, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, role: newRole } : user
      )
    );
  };
  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-top">Name</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-top">Email</label>
            <input
              className="w-full p-2 border rounded"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-top">Password</label>
            <input
              className="w-full p-2 border rounded"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-top">Role</label>
            <select
              className="w-full p-2 border rounded"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-top text-main-bg px-4 py-2 rounded cursor-pointer hover:bg-text-secondary"
          >
            Add User
          </button>
        </form>
      </div>
      {/* User List management */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-800">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b  hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <select
                    className="border rounded"
                    value={user.role}
                    name=""
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 text-main-bg px-4 py-2 rounded hover:bg-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
