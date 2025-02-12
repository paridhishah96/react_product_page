import React, { useEffect, useState } from "react";



const ProductCard = ({ title, description, price, image }) => {
  
  return (
    <div className="m-8 bg-white rounded-xl border-solid shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="p-4">
        <div className="bg-gray-50 rounded-xl flex items-center justify-center h-48">
          <img
            src={image}
            alt={title}
            className="h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      </div>
      
      {/* Price Footer */}
      <div className="p-4 border-t border-gray-100">
        <p className="font-bold text-lg text-gray-900">{price}</p>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      title: "High Brew® Black and Bold",
      description: "Perfect For the Purist. This uncomplicated and embellished black coffee is surprisingly low in calories.",
      price: "$12.99 - $24.99",
      image: "https://placehold.co/250x400" // Would be replaced by our assets
    },
    {
      title: "Evolution Fresh® Organic Orange Juice",
      description: "Experience the cold-pressed difference in organic orange juice that tastes like oranges, not 'O.J.'",
      price: "$5.00 - $13.99",
      image: "https://placehold.co/250x400" // Would be replaced by our assets
    },
    {
      title: "Redbull® Zero",
      description: "Taste Red Bull Energy Drink without sugar – Red Bull Zero.",
      price: "$9.99",
      image: "https://placehold.co/250x400" // Would be replaced by our assets
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Beverages
        </h1>
        
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;