import { useState } from "react"
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";


const SearchBar = () => {
    const [searcTerm,setSearchTerm] = useState("");
    const [isOpen,setIsOpen] = useState(false);

    const handleSearchToggle = () =>{
        setIsOpen(!isOpen);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

    }
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50":"w-auto"}`}>
        {
            isOpen ? (<form onSubmit={handleSubmit} className=" relative flex items-center justify-center w-full">
                <div className=" relative w-1/2">
                <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search" value={searcTerm} className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700" />
                <button type="submit" className=" cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-top  hover:text-gray-800">
                <HiMagnifyingGlass className="h-6 w-6"/>
                </button>
                </div>
                <button type="button"
                onClick={handleSearchToggle} className=" absolute right-4 top-1/2 transform -translate-y-1/2 text-top hover:text-gray-800 cursor-pointer hover:scale-125 transition-scale duration-300">
                    <HiMiniXMark className=" h-6 w-6"/>
                </button>
            </form>) : (
                <button className=" cursor-pointer" onClick={handleSearchToggle}>
                    <HiMagnifyingGlass className="h-6 w-6"/>
                </button>
            )
        }
    </div>
  )
}

export default SearchBar