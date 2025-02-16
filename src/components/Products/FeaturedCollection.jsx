import {Link} from "react-router-dom"
import featured from "../../assets/featured.webp"
import Reveal from "../../animation/Reveal"

const FeaturedCollection = () => {
  return (
    <section className=" py-16 px-4 lg:px-0">

        <div className=' container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-100 rounded-3xl'>
            <div className='lg:w-1/2 p-8 text-left '>
            <Reveal><h2 className='text-lg font-serif text-text-primary mb-2'>
                Comfort and Style

            </h2></Reveal>
            <Reveal><h2 className=' text-4xl lg:text-5xl font-bold mb-6'>
                Apparel amde for your everyday life
            </h2></Reveal>
            <Reveal><p className='text-lg text-text-secondary'>
                Discover hight-quality, comfortable clothing that effortlessly blends fashion and fuction. Designed to make you look and feel great every day.
            </p></Reveal>

            
            <Reveal><button className="bg-black text-main-bg px-6 py-3 my-3  rounded-lg text-lg hover:bg-text-secondary">
            <Link  to="/collection/all">Shop Now
            </Link>
                
            </button></Reveal>
            

            </div>


            <div className="lg:w-1/2">
            <img className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl" src={featured} alt="" /></div>
        </div>

    </section>
  )
}

export default FeaturedCollection