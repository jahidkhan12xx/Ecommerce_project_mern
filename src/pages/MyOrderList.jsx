import { useEffect, useState } from "react";

const MyOrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "Boalia", country: "Rajshahi" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 150,
          isPaid: true,
        },
        {
          _id: "34546",
          createdAt: new Date(),
          shippingAddress: { city: "Saheb Bazar", country: "Rajshahi" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 200,
          isPaid: false,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary text-center mb-6">
        My Orders
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-lg rounded-xl p-5 flex flex-col space-y-4 transition hover:shadow-xl"
            >
              {/* Product Image & Name */}
              <div className="flex items-center space-x-4">
                <img
                  className="w-16 h-16 object-cover rounded-lg shadow-md"
                  src={order.orderItems[0].image}
                  alt="Product"
                />
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{order.orderItems[0].name}</h3>
                  <p className="text-sm text-text-secondary">Order ID: #{order._id}</p>
                </div>
              </div>

              {/* Order Details */}
              <div className="flex flex-col space-y-2 text-text-secondary">
                <p>
                  <span className="font-semibold text-text-primary">Date:</span>{" "}
                  {new Date(order.createdAt).toLocaleDateString()}{" "}
                  {new Date(order.createdAt).toLocaleTimeString()}
                </p>
                <p>
                  <span className="font-semibold text-text-primary">Shipping:</span>{" "}
                  {order.shippingAddress.city}, {order.shippingAddress.country}
                </p>
                <p>
                  <span className="font-semibold text-text-primary">Total:</span> ${order.totalPrice}
                </p>
              </div>

              {/* Status */}
              <span
                className={`py-2 px-4 rounded-full text-center font-medium shadow-md ${
                  order.isPaid ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {order.isPaid ? "Paid" : "Pending"}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-md sm:text-lg md:text-xl text-text-secondary">
            You have no orders.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyOrderList;
