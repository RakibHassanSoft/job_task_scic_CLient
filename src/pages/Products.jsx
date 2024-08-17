import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard  from "./ProductCard"


// Main Products Component
const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortField, setSortField] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [limit] = useState(10); // Number of products per page

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

  useEffect(() => {
    fetchProducts();
  }, [currentPage, searchTerm, category, sortField, sortOrder]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products', {
        params: {
          page: currentPage,
          limit,
          search: searchTerm,
          category,
          sort: sortField,
          order: sortOrder,
        },
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
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 mr-4"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded p-2 mr-4"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="border rounded p-2 mr-4"
        >
          <option value="createdAt">Date Added</option>
          <option value="price">Price</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded p-2"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {/* page area  */}

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Prev
          </button>
          <div className="flex items-center">
            {currentPage > 4 && (
              <>
                <button
                  onClick={() => handlePageChange(1)}
                  className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700"
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
                  className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700"
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
