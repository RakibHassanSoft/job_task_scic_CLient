import React, { useState } from 'react';

// Example list of brand names (replace with actual data if available)
const brands = [
    "Sony",
    "Apple",
    "Samsung",
    "Dell",
    "JBL",
    "Herman Miller",
    "Hydro Flask",
    "Anker",
    "Nest",
    "Bose",
    "DJI",
    "Fitbit",
    "Ring",
    "FlexiSpot",
    "Philips",
    "Corsair",
    "Logitech",
    "LITOM",
    "August",
    "Vitamix",
    "GoPro",
    "Instant Pot",
    "Tile",
    "Dyson",
    "Oculus",
    "Nespresso",
    "Roku"
];


// Extract unique categories from the product list (assuming you have the products array)
const categories = [
    "Electronics",
    "Wearables",
    "Home Entertainment",
    "Computers",
    "Audio",
    "Furniture",
    "Outdoor",
    "Accessories",
    "Home Automation",
    "Security",
    "Kitchen",
    "Pet Supplies",
    "Home Appliances",
    "Photography",
    "Garden",
    "Health & Wellness"
];

const ProductFilterForm = ({ onFilterChange }) => {
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 2000])

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
        onFilterChange(e.target.value, selectedCategory, priceRange);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        onFilterChange(selectedBrand, e.target.value, priceRange);
    };

    const handlePriceChange = (e) => {
        const { value, name } = e.target;
        setPriceRange((prevRange) => (
            name === 'min'
                ? [Math.min(value, priceRange[1]), priceRange[1]]
                : [priceRange[0], Math.max(value, priceRange[0])]
        ));
        onFilterChange(selectedBrand, selectedCategory, priceRange);
    };

    return (
        <div className=' bg-gray-50'>

            <div className="p-6 flex justify-center gap-4">


                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 text-center">Brand Name</label>
                    <select
                        value={selectedBrand}
                        onChange={handleBrandChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value=''>All Brands</option>
                        {brands.map(brand => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-center text-gray-700">Category</label>
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value=''>All Categories</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 text-center">Price Range</label>
                    <div className="flex justify-between items-center">
                        <input
                            type="range"
                            name="min"
                            min="0"
                            max="2000"
                            value={priceRange[0]}
                            onChange={handlePriceChange}
                            className="w-1/2 mr-2"
                        />
                        <input
                            type="range"
                            name="max"
                            min="0"
                            max="2000"
                            value={priceRange[1]}
                            onChange={handlePriceChange}
                            className="w-1/2 ml-2"
                        />
                    </div>
                    <p className='text-center'>Price: ${priceRange[0]} - ${priceRange[1]}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductFilterForm;
