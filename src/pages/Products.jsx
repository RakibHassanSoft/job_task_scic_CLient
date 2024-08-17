import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [sortField, setSortField] = useState('productCreationDate');
  const [sortOrder, setSortOrder] = useState('desc');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [limit] = useState(12); // Number of products per page

  const categories = [
    'Electronics',
    'Wearables',
    'Home Entertainment',
    'Computers',
    'Audio',
    'Furniture',
    'Outdoor',
    'Accessories',
    'Home Automation',
    'Security',
    'Kitchen',
    'Pet Supplies',
    'Home Appliances',
    'Photography',
    'Garden',
    'Health & Wellness'
  ];

  const brands = [
    'Sony',
    'Apple',
    'Samsung',
    'Dell',
    'JBL',
    'Herman Miller',
    'Hydro Flask',
    'Anker',
    'Nest',
    'Bose',
    'DJI',
    'Fitbit',
    'Ring',
    'FlexiSpot',
    'Philips',
    'Corsair',
    'Logitech',
    'LITOM',
    'August',
    'Vitamix',
    'GoPro',
    'Instant Pot',
    'Tile',
    'Dyson',
    'Oculus',
    'Nespresso',
    'Roku'
  ];

  useEffect(() => {
    fetchProducts();
  }, [currentPage, searchTerm, category, brand, sortField, sortOrder, minPrice, maxPrice]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products', {
        params: {
          page: currentPage,
          limit,
          search: searchTerm,
          category,
          brands: brand,
          sort: sortField,
          order: sortOrder,
          minPrice,
          maxPrice
        }
      });

      if (response.data && response.data.products) {
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages || 1);
      } else {
        console.error('Unexpected response structure:', response.data);
      }
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded ${i === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mt-4 mb-4 ">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-3xl p-4 w-full h-16 md:w-1/3 lg:w-1/3 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
        />
      </div>

      <div className="mb-4 flex flex-wrap justify-center items-center gap-4">

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg p-3 w-full md:w-1/4 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border rounded-lg p-3 w-full md:w-1/4 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Brands</option>
          {brands.map((br) => (
            <option key={br} value={br}>
              {br}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border rounded-lg p-3 w-full md:w-1/4 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border rounded-lg p-3 w-full md:w-1/4 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="border rounded-lg p-3 w-full md:w-1/4 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="productCreationDate">Latest</option>
          <option value="price">Price</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded-lg p-3 w-full md:w-1/4 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
          >
            Prev
          </button>
          <div className="flex items-center">
            {currentPage > 4 && (
              <>
                <button
                  onClick={() => handlePageChange(1)}
                  className="mx-1 px-3 py-1 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  1
                </button>
                <span className="mx-1 text-gray-700">...</span>
              </>
            )}
            {renderPageNumbers()}
            {currentPage < totalPages - 3 && (
              <>
                <span className="mx-1 text-gray-700">...</span>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="mx-1 px-3 py-1 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}
    </div>

  );
};

export default Products;
