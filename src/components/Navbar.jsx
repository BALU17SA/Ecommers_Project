import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ handleLogout }) => {
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate('/filter-data');
  };

  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="bg-gradient-to-b from-blue-200 to-green-200 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div>
          <Link to="/" className="text-xl font-bold text-blue-800">
            e-SHOP
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-4">
          <form onSubmit={handleSearch} className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search Product"
              className="text-black px-4 py-2 focus:outline-none flex-grow"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="px-4">
              <FaSearch className="text-blue-600" />
            </button>
          </form>
        </div>

        {/* Icons and Buttons */}
        <div className="flex items-center space-x-4">
          {/* Shopping Cart Icon with Item Count */}
          <Link to="/cart" className="relative text-blue-600">
            <FaShoppingCart className="text-xl" />
            {products.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {products.length}
              </span>
            )}
          </Link>

          <div className="flex items-center text-blue-600">
            <FaUser className="text-xl" />
            <span className="ml-2">{username}</span>
          </div>
          <p onClick={handleLogout} className="cursor-pointer text-blue-600 hover:text-blue-800">LogOut</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline text-blue-600">Home</Link>
        <Link to="/shop" className="hover:underline text-blue-600">Shop</Link>
        <Link to="/" className="hover:underline text-blue-600">Contact</Link>
        <Link to="/" className="hover:underline text-blue-600">About</Link>
      </div>

      {/* Modal with conditional content */}

    </nav>
  );
};

export default Navbar;
