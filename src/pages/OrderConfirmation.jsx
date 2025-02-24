import React from "react";

const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "M",
      quantity: 1,
      price: 150,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "T-shirt",
      color: "Black",
      size: "M",
      quantity: 2,
      price: 120,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "Sujanagar, Boalia",
    city: "Rajshahi",
  },
  paymentMethod: "Cash on Delivery", // Added Payment Method
};

// Function to calculate estimated delivery date (3-5 days from order date)
const getEstimatedDeliveryDate = () => {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + Math.floor(Math.random() * 3) + 3);
  return deliveryDate.toLocaleDateString();
};

const OrderConfirmation = () => {
  return (
    <div className="max-w-4xl min-h-[70vh] mx-auto p-8  text-top rounded-xl  flex flex-col items-center">
      {/* Confirmation Icon */}
      <div className="w-16 h-16 bg-top text-main-bg rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
        ✔
      </div>

      {/* Header Message */}
      <h1 className="text-4xl font-extrabold text-center mb-4">Thank You for Your Order!</h1>
      <p className="text-lg mb-6 text-gray-700">
        Your order has been successfully placed. Below are your order details:
      </p>

      {/* Order Details Card */}
      <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
        {/* Order Info */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4">
          <div>
            <h2 className="text-xl font-semibold text-top">
              Order ID: <span className="text-text-secondary">{checkout._id}</span>
            </h2>
            <p className="text-gray-500">
              Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
            </p>
          </div>
          <p className="bg-green-500 text-white px-3 py-1 rounded-lg shadow">Confirmed</p>
        </div>

        {/* Shipping Address */}
       <div className="flex justify-between flex-wrap">
       <div className="mb-4">
          <h3 className="text-lg font-semibold text-top">Shipping Address</h3>
          <p className="text-text-secondary">{checkout.shippingAddress.address}, {checkout.shippingAddress.city}</p>
        </div>

        {/* Estimated Delivery Date */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-top">Estimated Delivery</h3>
          <p className="text-text-secondary">{getEstimatedDeliveryDate()}</p>
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-top">Payment Method</h3>
          <p className="text-text-secondary">{checkout.paymentMethod}</p>
        </div>
       </div>

        {/* Order Items */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-top">Order Summary</h3>
          <div className="space-y-4">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md border">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                <div className="flex-1">
                  <h4 className="font-semibold text-top">{item.name}</h4>
                  <p className="text-text-secondary">Color: {item.color} | Size: {item.size}</p>
                  <p className="font-bold text-top">৳{item.price} x {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Price */}
        <div className="mt-6 flex justify-between items-center border-t border-gray-300 pt-4">
          <h3 className="text-xl font-semibold text-top">Total Amount:</h3>
          <p className="text-2xl font-bold text-top">
            ৳{checkout.checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0)}
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default OrderConfirmation;
