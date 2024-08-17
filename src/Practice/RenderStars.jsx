const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array(fullStars)
          .fill(<FaStar className="text-yellow-400" />)
          .map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
        {Array(emptyStars)
          .fill(<FaRegStar className="text-yellow-400" />)
          .map((star, index) => (
            <span key={index}>{star}</span>
          ))}
      </div>
    );
  };