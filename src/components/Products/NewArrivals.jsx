import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";


import Lenis from "lenis"

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
 

  const newArrivals = [
    { _id: "1", name: "T-shirt", image: "https://picsum.photos/500/500?random=1", price: 120 },
    { _id: "2", name: "Stylish Jacket", image: "https://picsum.photos/500/500?random=2", price: 150 },
    { _id: "3", name: "Jeans", image: "https://picsum.photos/500/500?random=3", price: 100 },
    { _id: "4", name: "Hoodie", image: "https://picsum.photos/500/500?random=4", price: 130 },
    { _id: "5", name: "Sneakers", image: "https://picsum.photos/500/500?random=5", price: 200 },
    { _id: "6", name: "Hat", image: "https://picsum.photos/500/500?random=6", price: 80 },
  ];





  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      lerp: 0.1, // Smoothness factor
      smooth: true,
      smoothTouch: false,
    });

    const handleScroll = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(handleScroll);
    };

    requestAnimationFrame(handleScroll);

    return () => {
      lenis.current.destroy();
    };
  }, []);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const distance = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUpOrLeave = () => setIsDragging(false);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
    }
  };

 
  

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (container) container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2  className="text-3xl head font-bold mb-4 text-heading-text">Explore New Arrivals</h2>
        <p  className="text-lg para text-just-text mb-8">
          Discover the latest styles freshly added to keep your wardrobe trendy.
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-3xl cursor-pointer hover:bg-gray-200 active:bg-black active:text-white border ${canScrollLeft ? "bg-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-3xl cursor-pointer hover:bg-gray-200 active:bg-black active:text-white border ${canScrollRight ? "bg-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>






      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`container scroll-container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img draggable="false" src={product.image} alt={product.name} className="w-full h-[500px] object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-just-text p-4 rounded-b-lg">
              <Link to={`/products/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
