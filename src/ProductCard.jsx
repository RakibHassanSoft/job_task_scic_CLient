import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); // Full stars (e.g., 2 in 2.3)
        const hasHalfStar = rating - fullStars >= 0.5; // Whether there is a half star (e.g., true in 2.3)
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining stars to be empty
      
        return (
          <div className="flex">
            {Array(fullStars).fill(0).map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
            {Array(emptyStars).fill(0).map((_, index) => (
              <FaRegStar key={index} className="text-yellow-400" />
            ))}
          </div>
        );
      };
      

  return (
    <div className="flex flex-col justify-between max-w-xs w-full rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-40 md:h-48 object-cover"
        src={product.productImage}
        alt={product.productName}
      />
      <div className="p-4 flex-grow">
        <h2 className="font-bold text-lg md:text-xl text-gray-800 h-14 overflow-hidden">
          {product.productName}
        </h2>
        <p className="text-gray-500 mt-2">Brand: {product.brand}</p>
        <p className="text-gray-700 mt-2 line-clamp-3 h-16 overflow-hidden">
          {product.description}
        </p>
      </div>
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-green-600">${product.price}</span>
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          {renderStars(product.ratings)}
          <span className="text-sm text-gray-500">
            {new Date(product.productCreationDate).toLocaleDateString()}
          </span>
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
