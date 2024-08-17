import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Trigger search as user types
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
        placeholder="Search for products..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
