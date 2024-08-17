import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map(number => (
      <button
        key={number}
        onClick={() => handlePageChange(number)}
        className={`px-3 py-1 mx-1 rounded ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 bg-gray-300 rounded"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
