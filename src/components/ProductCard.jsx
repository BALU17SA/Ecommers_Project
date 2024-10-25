import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the card
    dispatch(addToCart(product)); // Dispatch the action to add the product to the cart
    console.log("Button clicked", product); // Log the product to the console
    alert("Product is added"); // Show alert
  };

  return (
    <div className="flex items-center justify-between border rounded-lg shadow-lg p-4 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <div className="flex items-center space-x-1 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>

      {/* Right Side - Add to Cart with Animation */}
      <div className="relative group flex items-center">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white cursor-pointer transition-all duration-300 ease-in-out transform group-hover:w-32">
          {/* Add to Cart Button */}
          <button
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <span className="absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            +
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
