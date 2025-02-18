import React, { useState } from 'react'
import Transition from '../Transition'
import { useNavigate } from 'react-router-dom';

const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
  ];

const Checkout = () => {

    const navigate = useNavigate();
    const [shippingAddress,setShippingAddress] = useState({
        firstName:"",
        lastName:"",
        address:"",
        city:"",
        postalCode:"",
        email:"",
        phone:"",
        country:""
    });

  return (
    <div>Checkout</div>
  )
}

export default Transition(Checkout)