/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import Transition from "../Transition";
import { useNavigate } from "react-router-dom";
import { button } from "motion/react-client";
import { div } from "motion/react-m";
import PayPalButton from "./PayPalButton";
import { toast } from "sonner";

const cartProducts = {
  products: [
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
  ],
  totalPrice: 400, // This is now correctly placed
};

const Checkout = () => {
  const navigate = useNavigate();
  const [total,setTotal] = useState(cartProducts.totalPrice);
  const [shippingCharge,setShippingCharge] = useState(80);
  const [checkoutId,setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    country: "",
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
    setCheckoutId(12345)
  }

  const handleShippingCharge = (city) =>{
    if(city === "Rajshahi"){
        setShippingCharge(80);
        setTotal((prev)=> prev + 80);
    }
    else{
        setShippingCharge(150);
        setTotal((prev)=> prev + 150);
    }
    setShippingAddress({
        ...shippingAddress,
        city: city,
      })

      
  }

  const handlePaymentSuccess = (details) =>{
    console.log(details);
    navigate("/order-confirmation")
    
  }

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-main-bg rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6 font-medium">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-top ">Email</label>
            <input
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
              type="email"
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-top ">First Name</label>
              <input
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                required
                className="w-full p-2 border rounded"
                type="text"
              />
            </div>
            <div>
              <label className="block text-top ">Last Name</label>
              <input
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                required
                className="w-full p-2 border rounded"
                type="text"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-top ">Address</label>
            <input
              className="w-full p-2 border rounded"
              required
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              type="text"
              value={shippingAddress.address}
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-top ">City</label>
              <select
                value={shippingAddress.city}
                onChange={(e) => handleShippingCharge(e.target.value)
                }
                required
                className="w-full p-2 border rounded"
                
              >
                <option disabled value="">
                  Select City
                </option>
                <option value="Barisal">Barisal</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
            <div>
              <label className="block text-top ">Postal Code</label>
              <input
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                required
                className="w-full p-2 border rounded"
                type="text"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-top ">Phone</label>
            <input
              className="w-full p-2 border rounded"
              required
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              value={shippingAddress.phone}
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
                <button type="submit" className="w-full bg-top text-main-bg cursor-pointer py-3 rounded">Continue to payment</button>
            ):(<div>
                <h3 className="text-lg mb-4 ">Pay with Paypal</h3>
                <PayPalButton amount={cartProducts.totalPrice} onSuccess={handlePaymentSuccess} onError={(err)=>toast.error("Payment failed, Try again")}/>
            </div>)}

          </div>
        </form>
      </div>
      
      {/* Right Section */}
      <div className="bg-white/50 p-6 rounded-lg">
        <h3 className=" text-lg mb-4 font-medium">Order Summary</h3>
        <div className="border-t py-4 mb-4">
            {cartProducts.products.map((product,index)=>(
                <div key={index} className=" flex items-end justify-between py-2 border-b">
                    <div className="flex items-start">
                        <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4" />
                        <div className=" flex items-start flex-col justify-start">
                            <h3 className="text-md">{product.name}</h3>
                            <p  className="text-text-secondary rounded">Size: {product.size}</p>
                            <p style={{backgroundColor:product.color.toLocaleLowerCase()}} className="text-main-bg px-2 rounded">{product.color}</p>
                        </div>
                       

                    </div>
                    <p className="text-xl">${product.price?.toLocaleString()}</p>
                </div>
            ))}

        </div>

        <div className="flex justify-between items-center text-lg mb-4">

            <p>Subtotal</p>
            <p>${cartProducts.totalPrice?.toLocaleString()}</p>

        </div>

        <div className="flex justify-between items-center text-lg">
            <p>Shipping</p>
            <p>${shippingCharge}</p>

        </div>

        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4 ">
            <p>Total</p>
            <p>${total?.toLocaleString()}</p>

        </div>

      </div>
    </div>
  );
};

export default Transition(Checkout);
