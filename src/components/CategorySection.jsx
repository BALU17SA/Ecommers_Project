import React from "react";
import KidsCategory from "../assets/Images/kid.png";
import ManCategory from "../assets/Images/man.png";
import WomenCategory from "../assets/Images/women.png";

const CategorySection = () => {
    const categories = [
        {
            title: 'Men',
            imageUrl: ManCategory,
        },
        {
            title: 'Women',
            imageUrl: WomenCategory,
        },
        {
            title: 'Kids',
            imageUrl: KidsCategory,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                    >
                        <img 
                            src={category.imageUrl} 
                            alt={category.title} 
                            className="w-full h-[300px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                        />
                        {/* Always visible title and View All */}
                        <div 
                            className="absolute top-4 left-4 text-black"
                        >
                            <h3 className="text-xl font-semibold">{category.title}</h3>
                            <p className="mt-1">View All</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
