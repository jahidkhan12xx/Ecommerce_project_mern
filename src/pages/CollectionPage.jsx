import { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa6';
import FilterSideBar from '../components/Products/FilterSideBar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
    const sideBarRef = useRef();
    const [isSlidebarOpen, setIsSlidebarOpen] = useState(false);

    const toggleSidebar = (e) => {
        e.stopPropagation(); // Prevent event from propagating to document
        setIsSlidebarOpen((prev) => !prev); // Toggle the sidebar
    }

    const handleClickOutside = (e) => {
        if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
            setIsSlidebarOpen(false); // Close the sidebar when clicking outside
        }
    }

    useEffect(() => {
        // Add the click event listener when the component mounts
        document.addEventListener('click', handleClickOutside);

        // Clean up the event listener on unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                { _id: 5, name: "Product 5", price: 100, images: [{ url: "http://picsum.photos/500/500?random=7" }] },
                { _id: 6, name: "Product 6", price: 100, images: [{ url: "http://picsum.photos/500/500?random=8" }] },
                { _id: 7, name: "Product 7", price: 100, images: [{ url: "http://picsum.photos/500/500?random=9" }] },
                { _id: 8, name: "Product 8", price: 100, images: [{ url: "http://picsum.photos/500/500?random=10" }] },
                { _id: 9, name: "Product 9", price: 100, images: [{ url: "http://picsum.photos/500/500?random=11" }] },
                { _id: 100, name: "Product 100", price: 100, images: [{ url: "http://picsum.photos/500/500?random=100" }] },
                { _id: 101, name: "Product 101", price: 100, images: [{ url: "http://picsum.photos/500/500?random=101" }] },
                { _id: 102, name: "Product 102", price: 100, images: [{ url: "http://picsum.photos/500/500?random=102" }] },
               
            ];

            setProducts(fetchedProducts);
        }, 1000);
    }, []);

    return (
        <div className='flex flex-col lg:flex-row'>
            {/* Mobile filter button */}
            <button onClick={toggleSidebar} className='lg:hidden border p-2 flex justify-center items-center'>
                <FaFilter className='mr-2' /> Filter
            </button>

            {/* Filter Sidebar */}
            <div
                ref={sideBarRef}
                className={`${isSlidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
            >
                <FilterSideBar />
            </div>

            <div className='flex-grow p-4'>
                <h2 className='text-2xl uppercase mb-4'>All Collection</h2>

                {/* Sort Options */}
                <SortOptions/>



                {/* {Product Grid} */}

                <ProductGrid products={products} />

            </div>
        </div>
    );
};

export default CollectionPage;
