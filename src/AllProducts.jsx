import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = ({ products }) => {
    // console.log(products);
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 m-auto'>
            {
                products.map((product,index) => (
                    <ProductCard 
                        key={index} // or a unique product id if available
                        product={product}
                    />
                ))
            }
        </div>
    );
};

export default AllProducts;
