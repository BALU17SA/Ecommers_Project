import React from "react";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; 

const Shop = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch(); 

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); 
    dispatch(addToCart(product)); 
    alert("Product is added"); 
  };

  return (
    <div className="my-8">
      {/* SHOP Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">SHOP</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out p-4 bg-white w-full"
          >
            {/* Product Image with hover animation */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain rounded-lg mb-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>

            {/* Product Name */}
            <h4 className="text-md font-semibold">{product.name}</h4>

            {/* Product Price */}
            <p className="text-gray-600 text-md mb-2">${product.price}</p>

            {/* Star Rating and Add to Cart Section */}
            <div className="flex items-center justify-between">
              {/* Star Rating */}
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>

              {/* Add to Cart Button */}
              <div className="relative group">
                <span
                  className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out transform group-hover:w-32 group-hover:bg-red-600"
                  onClick={(e) => handleAddToCart(e, product)} // Attach the click handler
                >
                  {/* + symbol */}
                  <span className="absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    +
                  </span>
                  {/* Add to Cart text */}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
