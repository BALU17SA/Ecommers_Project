import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order = {}, personInfo = {} }) => {
  const navigate = useNavigate(); // Ensure this is correctly imported

  console.log(personInfo);
  console.log(order);

  if (!order.products) return <p>Loading Order Details...</p>;

  return (
    <>
      <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Thank You for Your Order
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Your order has been placed successfully.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Order Summary
            </h3>
            <p className="text-lg text-gray-600 mb-2">
              Order Number: <span className="font-semibold text-gray-800">
                {order.orderNumber || 'N/A'}
              </span>
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Person Information
            </h2>
            <p className="text-gray-600 mb-1">{personInfo.Name || 'N/A'}</p>
            <p className="text-gray-600 mb-1">{personInfo.Email || 'N/A'}</p>
            <p className="text-gray-600 mb-1">{personInfo.Phone || 'N/A'}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Shipping Information
            </h2>
            <p className="text-gray-600 mb-1">{order.shippingInformation?.address || 'N/A'}</p>
            <p className="text-gray-600 mb-1">{order.shippingInformation?.city || 'N/A'}</p>
            <p className="text-gray-600 mb-1">{order.shippingInformation?.zip || 'N/A'}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Products Ordered</h3>
            {order.products.map((product) => (
              <div key={product.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">{product.name}</p>
                    <p className="text-gray-600">
                      ${(product.price * product.quantity).toFixed(2)} x {product.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 text-lg font-semibold">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-700 font-semibold">Total Price:</span>
            <span className="text-xl font-semibold text-gray-800">
              ${order.totalPrice?.toFixed(2) || '0.00'}
            </span>
          </div>
        </div>

        <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 mb-8">
          <div className="flex justify-between space-x-4">
            <button className="m1-4 bg-green-600 text-white py-2 px-4 hover:bg-green-800">
              Order Tracking
            </button>

            <button
              className="m1-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
