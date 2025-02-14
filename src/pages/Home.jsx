import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";



const Home = () => {
  
  
  return (
    <div >
      <div >
        <Hero />
      </div>
      <div >
        <GenderCollectionSection  />
      </div>
      <div >
        <NewArrivals  />
      </div>
    </div>
  );
};

export default Home;
