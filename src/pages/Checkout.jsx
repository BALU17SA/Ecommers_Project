import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder, setPersonInfo }) => {

  const navigate =  useNavigate()

  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  const [shippingInfo, setshippingInfo] = useState({
     address : " ",
     city : " ",
     zip : " "
  })

  const [billingInfo, setBillingInfo] = useState({
    Name : " ",
    Email : " ",
    phone : " "
 })


  const handleOrder = () => {
      const newOrder = {
        products : cart.products,
        orderNumber : "123456",
        shippingInformation : shippingInfo,
        totalPrice : cart.totalPrice
      },
      personInfo = {
        Name : billingInfo.Name,
        Email : billingInfo.Email,
        Phone : billingInfo.phone
      }
      setOrder(newOrder)
      setPersonInfo(personInfo)
      navigate('/order-confirmation')
  }

  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Fetching cart from Redux state
  const cart = useSelector((state) => state.cart || { products: [] });

  // Calculate the total price dynamically
  const calculateTotalPrice = () => {
    if (!cart.products || cart.products.length === 0) return 0;
    return cart.products.reduce((total, product) => {
      const productTotal = product.price * product.quantity;
      return total + productTotal;
    }, 0).toFixed(2); // Ensure total price is always a string with 2 decimal places
  };

  const totalPrice = calculateTotalPrice();

  return (
    <>
      <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        <h3 className="text-3xl font-semibold mb-4 text-gray-800">CHECKOUT</h3>
        <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10 mt-8">
          <div className="md:w-2/3 space-y-8">
            {/* Billing Information */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setBillingToggle(!billingToggle)}
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  Billing Information
                </h3>
                <FaAngleUp
                  className={`transition-transform ${billingToggle ? "rotate-180" : ""}`}
                />
              </div>

              {billingToggle && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => setBillingInfo({...billingInfo, Name : e.target.value})}

                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => setBillingInfo({...billingInfo, Email : e.target.value})}

                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => setBillingInfo({...billingInfo, phone : e.target.value})}

                    />
                  </div>
                </div>
              )}
            </div>

            {/* Shipping Information */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShippingToggle(!shippingToggle)}
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  Shipping Information
                </h3>
                <FaAngleUp
                  className={`transition-transform ${shippingToggle ? "rotate-180" : ""}`}
                />
              </div>

              {shippingToggle && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Address"
                      onChange={(e) => setshippingInfo({...shippingInfo, address : e.target.value})}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter City Name"
                      onChange={(e) => setshippingInfo({...shippingInfo, city : e.target.value})}

                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Zip Code"
                      onChange={(e) => setshippingInfo({...shippingInfo, zip : e.target.value})}

                    />
                  </div>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setPaymentToggle(!paymentToggle)}
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  Payment Method
                </h3>
                <FaAngleUp
                  className={`transition-transform ${paymentToggle ? "rotate-180" : ""}`}
                />
              </div>

              {paymentToggle && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="ml-2">Cash on Delivery</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        value="debitCard"
                        checked={paymentMethod === "debitCard"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="ml-2">Debit Card</span>
                    </label>
                  </div>

                  {paymentMethod === "debitCard" && (
                    <div className="space-y-4 mt-4">
                      <div>
                        <label
                          htmlFor="cardName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Card Holder Name
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter Card Holder Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cardNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Card Number
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter Card Number"
                        />
                      </div>
                      <div className="flex space-x-4">
                        <div className="w-1/2">
                          <label
                            htmlFor="expiryDate"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="w-1/2">
                          <label
                            htmlFor="cvv"
                            className="block text-sm font-medium text-gray-700"
                          >
                            CVV
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="CVV"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 ">Order Summary</h3>
            <div className="border-b pb-2 mb-4">
              {cart.products && cart.products.length > 0 ? (
                cart.products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">
                        {product.name}
                      </h4>
                      <p className="text-gray-600">
                        ${product.price ? product.price.toFixed(2) : "0.00"} x {product.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-800">
                        ${product.price && product.quantity ? (product.price * product.quantity).toFixed(2) : "0.00"}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products in cart.</p>
              )}
            </div>

            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700 font-semibold">Total:</p>
              <p className="text-lg font-semibold text-gray-800">${totalPrice}</p>
            </div>

            <button className="w-full py-2 mt-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg" 
            onClick={handleOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
