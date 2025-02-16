import Reveal from "../animation/Reveal";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import { motion } from "motion/react";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import Transition from "../components/Transition";


const placeHolderProducts = [
  {
    _id:5,
    name:"Product 5",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=7",
        
      }
    ]
  },
  {
    _id:6,
    name:"Product 6",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=8",
        
      }
    ]
  },
  {
    _id:7,
    name:"Product 7",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=9",
        
      }
    ]
  },
  {
    _id:8,
    name:"Product 8",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=10",
        
      }
    ]
  },
  {
    _id:9,
    name:"Product 9",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=11",
        
      }
    ]
  },
  {
    _id:10,
    name:"Product 10",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=12",
        
      }
    ]
  },
  {
    _id:11,
    name:"Product 11",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=13",
        
      }
    ]
  },
  {
    _id:12,
    name:"Product 12",
    price:100,
    images:[
      {
        url: "http://picsum.photos/500/500?random=14",
        
      }
    ]
  }
]
const Home = () => {
  return (
    <div>
      <div className="mb-[10vh]">
        <Hero />
      </div>
      <div className=" mb-[20vh]">
        <GenderCollectionSection />
      </div>
      <div className="mb-[20vh]">
        <NewArrivals />
      </div>

      <div className="container mx-auto mb-[20vh] overflow-hidden">
        <Reveal>
          <h1 className="text-4xl font-bold text-left text-text-primary">
            {" "}
            #Best Seller
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-lg font-light  text-left text-text-secondary">
            {" "}
            Most demanding product on our store. Its the most popular
          </p>
        </Reveal>
        <ProductDetails />
      </div>
      <div className=" container mx-auto mb-[20vh] overflow-hidden">
        <Reveal>
          <h1 className=" px-5 lg:px-0 text-2xl lg:text-4xl font-bold text-left text-text-primary">
            {" "}
            #Top Wears for Women
          </h1>
        </Reveal>
        <Reveal>
          <p className="lg:text-lg px-5 lg:px-0 text-medium font-light  text-left text-text-secondary">
            {" "}
            Most demanding product on our store. Its the most popular
          </p>
        </Reveal>

        <ProductGrid products={placeHolderProducts} />
        
      </div>

      <div className="mb-[10vh]">
      <FeaturedCollection/>
      </div>
      <div className="mb-[10vh]">
      <FeaturesSection/>
      </div>
    </div>
  );
};

export default Transition(Home);
