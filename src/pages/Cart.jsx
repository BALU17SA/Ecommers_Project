import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from '../assets/Images/emptycart.png';
import { FaTrash } from "react-icons/fa";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector(state => state.cart); // Fetch cart from Redux
    const [address, setAddress] = useState('Main Street, 102'); // Default shipping address
    const [isModelOpen, setIsModelOpen] = useState(false); // Modal state

    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log("Current Cart: ", cart); // Debug: log the cart contents

    return (
        <div className="flex justify-between p-4 items-start">
            {cart.products.length > 0 ? (
                <>
                    {/* Left Side - Cart Products */}
                    <div className="w-[55%] p-4 bg-white shadow-md rounded-lg m-5">
                        <h3 className="text-2xl font-bold mb-4 text-center">SHOPPING CART</h3>
                        <div className="overflow-x-auto">
                            <div className="flex justify-between font-semibold border-b pb-2">
                                <p>PRODUCTS</p>
                                <div className="flex space-x-4">
                                    <p>PRICE</p>
                                    <p>QUANTITY</p>
                                    <p>SUBTOTAL</p>
                                    <p>REMOVE</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                {cart.products.map(product => (
                                    <div key={product.id} className="flex justify-between items-center border-b py-4">
                                        <div className="flex items-center">
                                            <img src={product.image} alt={product.name} className="h-20 w-20 object-cover rounded-lg mr-4" />
                                            <div>
                                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-lg">${product.price.toFixed(2)}</p>
                                            <div className="flex items-center mx-4">
                                                <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition duration-200"
                                                onClick={() => dispatch(decreaseQuantity(product.id))}
                                                >-</button>
                                                <p className="mx-2">{product.quantity}</p>
                                                <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition duration-200"
                                                onClick={() => dispatch(increaseQuantity(product.id))}
                                                >+</button>
                                            </div>
                                            <p className="text-lg">${(product.quantity * product.price).toFixed(2)}</p>
                                            <button className="ml-4 text-red-500 hover:text-red-700 transition duration-200"
                                            onClick={() => dispatch( removeFromCart(product.id) )}>
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Cart Summary */}
                    <div className="w-1/3 p-4 bg-white shadow-md rounded-lg m-5 h-auto">
                        <h3 className="text-2xl font-bold mb-4 text-center bg-red-500 text-white p-2 rounded-lg">CART TOTAL</h3>
                        <div className="mb-4">
                            <span className="font-semibold">Total Items: </span>
                            <span>{cart.totalQuantity}</span>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">Shipping :</p>
                            <p>Shipping to: {address}</p>
                            <button className="text-blue-500 hover:text-blue-700 underline mt-2"
                                onClick={() => setIsModelOpen(true)}>
                                Change Address
                            </button>
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">Total Price: </span>
                            <span>${cart.totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                          onClick={ () => navigate('/checkout')}>
                            Proceed to Checkout
                        </button>

                        <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
                            <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
                        </Modal>
                    </div>
                </>
            ) : (
                <div className="flex justify-center w-full">
                    <img src={EmptyCart} alt="Empty Cart" className="h-96 pt-2" />
                </div>
            )}
        </div>
    );
};

export default Cart;
