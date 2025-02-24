import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 150,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 250,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div className="space-y-6">
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-4 border-b border-gray-200 shadow-lg rounded-lg bg-white transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          {/* Left Section - Product Info */}
          <div className="flex items-center justify-center space-x-4">
           <div>
           <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-lg shadow-md"
            />
           </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
              <p className="text-sm text-text-secondary">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2 space-x-4">
                <button className="border border-gray-300 rounded-lg p-2 text-xl text-top hover:bg-gray-100 transition">
                  -
                </button>
                <span className="text-lg font-semibold text-gray-700">{product.quantity}</span>
                <button className="border border-gray-300 rounded-lg p-2 text-xl text-top hover:bg-gray-100 transition">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Price and Delete Button */}
          <div className="text-right p-4">
            <p className="font-semibold text-lg text-gray-800">${product.price.toLocaleString()}</p>
            <button className="text-red-600 hover:text-red-800 transition duration-200">
              <RiDeleteBin3Line className="h-6 w-6 mt-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
