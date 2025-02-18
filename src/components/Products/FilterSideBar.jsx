import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSideBar = (() => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({
        category: "",
        color: "",
        brand: [],
        size: [],
        material: [],
        maxPrice: 100,
        minPrice: 0,
        gender: "",
    });

    const [priceRange, setPriceRange] = useState([0, 100]);

    const categories = ["Top Wear", "Bottom Wear"];
    const colors = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Gray", "Pink", "Beige", "Navy"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const materials = ["Cotton", "Polyester", "Linen", "Silk", "Spandex", "Viscose", "Wool", "Denim", "Fleece"];
    const brands = ["JJK"];
    const genders = ["Men", "Women"];

    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFilters((prevFilters) => {
            let modifiedFilters = { ...prevFilters };

            if (type === "checkbox") {
                modifiedFilters[name] = checked
                    ? [...prevFilters[name], value]
                    : prevFilters[name].filter((item) => item !== value);
            } else {
                modifiedFilters[name] = value;
            }

            updateURL(modifiedFilters);
            return modifiedFilters;
        });
    };

    const handlePriceChange = (e) => {
        const value = parseInt(e.target.value);
        setPriceRange([0, value]);
        setFilters((prevFilters) => {
            let modifiedFilters = { ...prevFilters, maxPrice: value };
            updateURL(modifiedFilters);
            return modifiedFilters;
        });
    };

    const updateURL = (updatedFilters) => {
        let urlParams = new URLSearchParams();
        Object.keys(updatedFilters).forEach((key) => {
            if (Array.isArray(updatedFilters[key]) && updatedFilters[key].length > 0) {
                urlParams.set(key, updatedFilters[key].join(","));
            } else if (updatedFilters[key] !== "" && updatedFilters[key] !== 0) {
                urlParams.set(key, updatedFilters[key]);
            }
        });
        setSearchParams(urlParams);
    };

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        setFilters({
            category: params.category || "",
            color: params.color || "",
            brand: params.brand ? params.brand.split(",") : [],
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            maxPrice: parseInt(params.maxPrice) || 100,
            minPrice: parseInt(params.minPrice) || 0,
            gender: params.gender || "",
        });
        setPriceRange([parseInt(params.minPrice) || 0, parseInt(params.maxPrice) || 100]);
    }, [searchParams]);

    return (
        <div className="p-4">
            <h3 className="text-xl font-medium mb-4">Filter</h3>

            {/* Category Filter */}
            <div className="mb-6">
                <label className="block font-medium mb-2">Category</label>
                {categories.map((category) => (
                    <div key={category} className="flex items-center mb-1">
                        <input
                            value={category}
                            checked={filters.category === category}
                            onChange={handleFilterChange}
                            type="radio"
                            name="category"
                            className="mr-2 h-4 w-4"
                        />
                        <span>{category}</span>
                    </div>
                ))}
            </div>

            {/* Gender Filter */}
            <div className="mb-6">
                <label className="block font-medium mb-2">Gender</label>
                {genders.map((gender) => (
                    <div key={gender} className="flex items-center mb-1">
                        <input
                            value={gender}
                            checked={filters.gender === gender}
                            onChange={handleFilterChange}
                            type="radio"
                            name="gender"
                            className="mr-2 h-4 w-4"
                        />
                        <span>{gender}</span>
                    </div>
                ))}
            </div>

            {/* Color Filter */}
            <div className="mb-6">
                <label className="block font-medium mb-2">Color</label>
                <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                        <button
                            key={color}
                            value={color}
                            name="color"
                            onClick={handleFilterChange}
                            className={`w-8 h-8 rounded-full border-2 cursor-pointer transition hover:scale-105 ${
                                filters.color === color ? "ring-2 ring-text-primary " : ""
                            }`}
                            style={{ backgroundColor: color.toLowerCase() }}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
                <label className="block font-medium mb-2">Size</label>
                {sizes.map((size) => (
                    <div key={size} className="flex items-center mb-1">
                        <input
                            value={size}
                            checked={filters.size.includes(size)}
                            onChange={handleFilterChange}
                            type="checkbox"
                            name="size"
                            className="mr-2 h-4 w-4"
                        />
                        <span>{size}</span>
                    </div>
                ))}
            </div>

            {/* Material Filter */}
            <div className="mb-6">
                <label className="block font-medium mb-2">Material</label>
                {materials.map((material) => (
                    <div key={material} className="flex items-center mb-1">
                        <input
                            value={material}
                            checked={filters.material.includes(material)}
                            onChange={handleFilterChange}
                            type="checkbox"
                            name="material"
                            className="mr-2 h-4 w-4"
                        />
                        <span>{material}</span>
                    </div>
                ))}
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
                <label className="block font-medium mb-2">Brand</label>
                {brands.map((brand) => (
                    <div key={brand} className="flex items-center mb-1">
                        <input
                            value={brand}
                            checked={filters.brand.includes(brand)}
                            onChange={handleFilterChange}
                            type="checkbox"
                            name="brand"
                            className="mr-2 h-4 w-4"
                        />
                        <span>{brand}</span>
                    </div>
                ))}
            </div>

            {/* Price Range Filter */}
            <div className="mb-8">
                <label className="block font-medium mb-2">Price Range</label>
                <input
                    type="range"
                    name="maxPrice"
                    min={0}
                    max={100}
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </div>
    );
});

export default FilterSideBar;
