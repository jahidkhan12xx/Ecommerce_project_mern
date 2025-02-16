import {HiShoppingBag,HiOutlineCreditCard} from "react-icons/hi"
import { TfiReload } from "react-icons/tfi";
import Reveal from "../../animation/Reveal";

const FeaturesSection = () => {
  return (
    <section className='py-16 px-4 bg-main-bg'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='flex flex-col items-center'>

                <div className='p-4 rounded-full mb-4'>

                   <Reveal> <HiShoppingBag className="text-xl"/></Reveal>

                </div>
               <Reveal> <h4 className=" tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h4></Reveal>
                <Reveal><p className="text-sm tracking-tighter text-text-secondary">
                    On all odrders over $100.00
                </p></Reveal>

            </div>


            <div className='flex flex-col items-center'>

                <div className='p-4 rounded-full mb-4'>

                <Reveal><TfiReload className="text-xl" /></Reveal>

                </div>
               <Reveal> <h4 className=" tracking-tighter mb-2">45 DAYS RETURN</h4></Reveal>
                <Reveal><p className="text-sm tracking-tighter text-text-secondary">
                    Money back gurantee
                </p></Reveal>

            </div>


            <div className='flex flex-col items-center'>

                <div className='p-4 rounded-full mb-4'>

                   <Reveal> <HiOutlineCreditCard className="text-xl"/></Reveal>

                </div>
               <Reveal> <h4 className=" tracking-tighter mb-2">SECURE CHECKOUT</h4></Reveal>
                <Reveal><p className="text-sm tracking-tighter text-text-secondary">
                   100% secured checkout process
                </p></Reveal>

            </div>


        </div>

    </section>
  )
}

export default FeaturesSection