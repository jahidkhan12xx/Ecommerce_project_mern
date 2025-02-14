import { FaInstagram, FaMeta, FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react"

const TopBar = () => {
  return (
    <div className=" overflow-hidden">
        <div   className=' bg-card-bg   text-just-text'>
        <div className=' container mx-auto md:flex justify-between items-center px-4 py-3'>
            <motion.div
           initial={{y:"-25vh",opacity:0}}
           animate={{y:0,opacity:1}}
           transition={{delay:0.1,duration:0.5,type:"spring"}}
            className="  items-center space-x-4 hidden md:flex">
                <a href="#" className=" hover:text-gray-300">
                    <FaMeta className=" h-5 w-5"/>
                </a>
                <a href="#" className=" hover:text-gray-300">
                    <FaInstagram className=" h-5 w-5"/>
                </a>
                <a href="#" className=" hover:text-gray-300">
                    <FaXTwitter className=" h-5 w-5"/>
                </a>
            </motion.div>
            <motion.div
            initial={{y:"-25vh",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.1,duration:0.5,type:"spring"}}
            className=" text-sm text-center">
                <span>We ship worldwide - Fast and reliable shipping!</span>

            </motion.div>
            <motion.div
          initial={{y:"-25vh",opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{delay:0.1,duration:0.5,type:"spring"}}
            >
                <a href="tel:+8801780703555" className=" hover:text-gray-300 hidden md:block">
                    +8801780703555
                </a>
            </motion.div>

        </div>

    </div>
    </div>
  )
}

export default TopBar