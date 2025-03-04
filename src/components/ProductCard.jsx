import React from "react";
import placeholder_juice from "../assets/placeholder_juice.jpeg"; // importing placeholder image for now, in place of the actual product url/source

// Since the this card can be used multiple times in the complete project, I have created a separate component for the Product Card.


// using spread operator for the props to pass the product details as props to the Product Card component.
const ProductCard = ({ name, description, price }) => { 
    return (
      <div className="m-8 bg-white rounded-xl border-solid shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        {/* Image Container - Add images or routes of actual products instead of placeholders once available from API */}
        <div className="p-4">
          <div className="bg-gray-50 rounded-xl flex items-center justify-center h-48">
            <img
              src={placeholder_juice} // using placeholder image for now
              // adding alt text to the image for accessibility
              alt={'Image of ' + name + ' juice' } 
              className="h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-4">
            {description}
          </p>
        </div>
        
          <div className="p-4 border-t border-gray-100">
          <p className="font-bold text-lg text-gray-900">${price}</p>
        </div>
      </div>
    );
  };

  export default ProductCard;