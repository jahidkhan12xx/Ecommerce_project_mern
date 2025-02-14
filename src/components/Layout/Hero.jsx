import { Link } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Ensure correct Swiper CSS
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Correct import for Swiper modules

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  // Ensure the refs are properly updated before the function runs
  useEffect(() => {
    if (progressCircle.current && progressContent.current) {
      // They should now be assigned to the correct elements
    }
  }, []);

  const onAutoplayTimeLeft = (s, time, progress) => {
    // Check if the refs are available before modifying the styles
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide key={1}>
        <section className="relative h-[400px] md:h-[600px] lg:h-[750px] bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center overflow-hidden">
          <div ref={progressCircle} className="shape-circle"></div>
          <div className="shape-square"></div>
          <div className="shape-triangle"></div>
          <div className="text-center text-gray-900 p-6">
            <h1 className="text-4xl md:text-7xl font-bold uppercase mb-4">
              Big Sale 50% Off
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Upgrade your wardrobe with our minimalist collection.
            </p>
            <Link className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition-all duration-300">
              Shop Now
            </Link>
          </div>
        </section>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide key={2}>
        <section className="relative h-[400px] md:h-[600px] lg:h-[750px] bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center overflow-hidden">
          <div ref={progressContent} className="shape-wave"></div>
          <div className="text-center text-white p-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-2">New Arrivals</h2>
            <p className="text-sm md:text-lg mb-4">Fresh & Trendy Designs!</p>
            <Link className="bg-white text-gray-900 px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
              Discover More
            </Link>
          </div>
        </section>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide key={3}>
        <section className="relative h-[400px] md:h-[600px] lg:h-[750px] bg-gradient-to-bl from-yellow-100 to-yellow-300 overflow-hidden">
          <div className="shape-square"></div>
          <div className="shape-wave"></div>
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-900">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              Summer Collection
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Stay cool and stylish this summer.
            </p>
            <Link className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition-all duration-300">
              Shop Summer
            </Link>
          </div>
        </section>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide key={4}>
        <section className="relative h-[400px] md:h-[600px] lg:h-[750px] bg-gradient-to-r from-indigo-200 to-indigo-400 flex items-center justify-center overflow-hidden">
          <div className="shape-triangle"></div>
          <div className="shape-circle"></div>
          <div className="text-center text-gray-900 p-6">
            <h1 className="text-5xl md:text-8xl font-bold uppercase mb-4">
              Limited Time Offer
            </h1>
            <p className="text-lg md:text-2xl mb-6">Hurry! Sale ends soon.</p>
            <Link className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition-all duration-300">
              Grab Now
            </Link>
          </div>
        </section>
      </SwiperSlide>
      <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
    </Swiper>
  );
};

export default Hero;
