import React, { useEffect, useState } from 'react';
import ProductFilterForm from './ProductFilterForm';
import AllProducts from './AllProducts';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const itemsPerPage = 12;

  useEffect(() => {
    // Fetch data based on currentPage and any applied filters
    fetchPaginatedProducts(currentPage, itemsPerPage);
  }, [currentPage]);

  const fetchPaginatedProducts = (page, limit) => {
    fetch(`http://localhost:3000/pagination?page=${page}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        console.log('Paginated Products:', data); // Debugging
        setCurrentProducts(data.products);
        setTotalPages(data.totalPages); // Update total pages
      })
      .catch(error => console.error('Error fetching paginated products:', error));
  };

  const handleFilterChange = (selectedBrand, selectedCategory, priceRange) => {
    const queryParams = new URLSearchParams({
      brand: selectedBrand,
      category: selectedCategory,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    }).toString();
  
    fetch(`http://localhost:3000/filter-products?${queryParams}`)
      .then(res => res.json())
      .then(data => {
        console.log('Filtered Products:', data); // Debugging
  
        const filteredProducts = data.products;
        const totalFilteredPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
        // Set the first 12 products as currentProducts
        setCurrentProducts(filteredProducts.slice(0, itemsPerPage));
        setCurrentPage(1); // Reset to the first page when filters change
  
        setTotalPages(totalFilteredPages); // Update total pages based on filtered results
      })
      .catch(error => console.error('Error fetching filtered products:', error));
  };
  

  const handleSearch = async (query) => {
    try {
      if (query.trim() === '') {
        // If query is empty, fetch the first page of products
        fetchPaginatedProducts(1, itemsPerPage);
        return;
      }
  
      // Perform the search
      const response = await fetch(`http://localhost:3000/search-products?q=${encodeURIComponent(query)}`);
      const searchResults = await response.json();
      console.log('Search Results:', searchResults); // Debugging
  
      // Always show the first 12 products from the search results
      const productsToShow = searchResults.products ? searchResults.products.slice(0, itemsPerPage) : searchResults.slice(0, itemsPerPage);
      
      setCurrentProducts(productsToShow);
      setCurrentPage(1); // Reset to the first page when search query changes
      setTotalPages(Math.ceil((searchResults.products ? searchResults.products.length : searchResults.length) / itemsPerPage)); // Update total pages based on search results
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='max-w-7xl m-auto'>
      <div>
        <h1 className='h-44 text-center text-4xl'>Search</h1>
      </div>
      <div className=''>
        <div className='w-full'>
          <SearchBar onSearch={handleSearch} />
          <ProductFilterForm onFilterChange={handleFilterChange} />
        </div>
        <div className='min-h-[60rem]'>
          <AllProducts products={currentProducts} />
        </div>
        <div className='h-[1vp] bottom-0 left-0 right-0 bg-white shadow-md'>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
