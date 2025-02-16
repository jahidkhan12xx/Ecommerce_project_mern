import { useEffect, useState } from "react";
import { toast } from "sonner";
import Reveal from "../../animation/Reveal";
import ProductGrid from "./ProductGrid";
import { motion } from "motion/react";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description:
    "This is a stylish Jacket that  will be used to create a new product",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Black", "White"],
  images: [
    {
      url: "http://picsum.photos/500/500?random=1",
      alt: "Stylish Jacket 1",
    },
    {
      url: "http://picsum.photos/500/500?random=2",
      alt: "Stylish Jacket 2",
    },
    {
      url: "http://picsum.photos/500/500?random=3",
      alt: "Stylish Jacket 3",
    },
  ],
};

const similarProducts = [
  {
    _id:1,
    name:"Product 1",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=3",
        
      }
    ]
  },
  {
    _id:2,
    name:"Product 2",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=4",
        
      }
    ]
  },
  {
    _id:3,
    name:"Product 3",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=5",
        
      }
    ]
  },
  {
    _id:4,
    name:"Product 4",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=6",
        
      }
    ]
  }
]

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleAdded = (val) => {
    if (val === "plus") {
      setQuantity((prev) => prev + 1);
    } else if (val === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-just-text p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Thumbnails and Main Image in a Row */}
          <div className="flex md:w-1/2">
            {/* Thumbnails Column */}
            <div className="hidden md:flex flex-col space-y-2 mr-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  onClick={() => setMainImage(image.url)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === image.url
                      ? "shadow-2xl border-2 border-red-800"
                      : ""
                  }`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "shadow-2xl border-2 border-red-800"
                    : ""
                }`}
              />
            ))}
          </div>

          {/* Right Section: Product Details */}
          <div className="md:w-1/2 md:ml-10">
            <Reveal><h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1></Reveal>
            <Reveal><p className="text-lg text-gray-500 line-through">
              {selectedProduct.originalPrice &&
                `$${selectedProduct.originalPrice}`}
            </p></Reveal>
            <Reveal><p className="text-xl font-bold text-gray-800 mb-2">
              $ {selectedProduct.price}
            </p></Reveal>
            <Reveal><p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            </Reveal>
            <div className="mb-4">
              <Reveal><p className="text-gray-800">Color:</p></Reveal>
              <Reveal><div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color, index) => (
                  <button
                    onClick={() => setSelectedColor(color)}
                    key={index}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.8)",
                    }}
                    className={`w-8 h-8 cursor-pointer rounded-full ${
                      selectedColor == color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                  ></button>
                ))}
              </div></Reveal>
            </div>

            <div className="mb-4">
             <Reveal> <p className="text-gray-800">Size:</p></Reveal>
              <Reveal><div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border cursor-pointer border-gray-300 ${
                      selectedSize === size
                        ? "bg-top text-main-bg"
                        : "bg-main-bg text-top"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div></Reveal>
            </div>

            <div className="mb-6">
              <Reveal><p className="text-gray-800">Quantity:</p></Reveal>
              <Reveal><div className="flex items-center space-x-4 mt-2">
                <button
                  disabled={quantity < 2}
                  onClick={() => handleAdded("minus")}
                  className={`px-2 py-1 bg-gray-200 rounded text-lg ${
                    quantity < 2 ? "opacity-30 bg-black cursor-not-allowed" : ""
                  }`}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => handleAdded("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div></Reveal>
            </div>

           <Reveal> <button
              disabled={isButtonDisabled}
              onClick={handleAddToCart}
              className={`bg-blue-600 cursor-pointer text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-text-secondary"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button></Reveal>

            <div className="mt-10 text-gray-800">
              <Reveal><h3 className="text-xl font-bold">Characteristics:</h3></Reveal>
              <div className="w-full text-left text-sm text-gray-800 flex flex-col ">

                <Reveal><div className=" flex text-left  items-start gap-14 ">
                  <h1 className=" text-lg font-medium text-text-primary ">Brand: </h1>
                  <p className=" text-lg font-light">{selectedProduct.brand}</p>
                </div></Reveal>

                <Reveal><div className=" flex text-left  items-center gap-9 ">
                  <h1 className=" text-lg font-medium text-text-primary ">Material: </h1>
                  <p className=" text-lg font-light">{selectedProduct.material}</p>
                </div></Reveal>
               
                

              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <Reveal><h2 className=" text-2xl font-bold text-text-secondary w-full text-center">#You May Also Like</h2></Reveal>
          <Reveal><p className=" text-lg font-light text-text-secondary mb-5 w-full text-center">You pick your cloth according to your lifestyle</p></Reveal>
          
          
          <ProductGrid products={similarProducts} />
          

        </div>
       </div>
    </div>
  );
};

export default ProductDetails;
