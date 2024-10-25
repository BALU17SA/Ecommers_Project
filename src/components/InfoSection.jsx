import React from "react";
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaTag } from "react-icons/fa";

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className="text-3xl text-red-600" />,
            title: "Free Shipping",
            description: 'Get your orders delivered with no extra cost'
        },
        {
            icon: <FaHeadset className="text-3xl text-red-600" />,
            title: "Support 24/7",
            description: 'We are here to assist you anytime'
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
            title: "100% Money Back",
            description: 'Full refund if you are not satisfied'
        },
        {
            icon: <FaLock className="text-3xl text-red-600" />,
            title: "Payment Secure",
            description: 'Your payment information is safe with us'
        },
        {
            icon: <FaTag className="text-3xl text-red-600" />,
            title: "Discount",
            description: 'Enjoy the Best prices on our products'
        },
    ];

    return (
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {infoItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center text-center p-6 min-h-[200px] border rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
                        >
                            {item.icon}
                            <h3 className="font-semibold text-black mt-4">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
