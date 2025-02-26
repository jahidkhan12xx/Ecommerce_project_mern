const OrderManagement = () => {
  const orders = [
    {
      _id: 121235,
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
  ];

  const handleStatusChange = (id, status) => {
    console.log(`Updating order with id: ${id} status to ${status}...`);
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  className="border-b border-text-secondary hover:shadow-xl hover:bg-gray-100 cursor-pointer"
                  key={order._id}
                >
                  <td className="p-4 ">#{order._id}</td>
                  <td className="p-4 ">{order.user.name}</td>
                  <td className="p-4 ">{order.totalPrice}</td>
                  <td className="p-4 ">
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-top focus:border-top block p-2.5"
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      name=""
                      value={order.status}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-4 ">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className=" bg-text-secondary  text-white font-bold py-2 px-4 rounded hover:bg-top"
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No Orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
