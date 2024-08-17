import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// Single ProductCard Component
const ProductCard = ({ product }) => {
    if (!product) return <div>Loading...</div>;
  
    const {
      name = product.productName || 'No Name',
      image = product.productImage || 'https://via.placeholder.com/150',
      price = product.price || 0.00,
      description = product.description || 'No Description',
      brand = product.brand || 'No Brand',
      category = product.category || 'Uncategorized',
      ratings = product.ratings || 0.0,
      createdAt = product.createdAt || new Date().toISOString(),
    } = product;
  
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
          src={image}
          alt={name}
        />
        <div className="p-4 flex-grow">
          <h2 className="font-bold text-lg md:text-xl text-gray-800 h-14 overflow-hidden">
            {name}
          </h2>
          <p className="text-gray-500 mt-2">Brand: {brand}</p>
          <p className="text-gray-700 mt-2 line-clamp-3 h-16 overflow-hidden">
            {description}
          </p>
        </div>
        <div className="px-4 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-green-600">${price.toFixed(2)}</span>
            <span className="text-sm text-gray-500">{category}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            {renderStars(ratings)}
            <span className="text-sm text-gray-500">
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
    );
  };

  export default ProductCard