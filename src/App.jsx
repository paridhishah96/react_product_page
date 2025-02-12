import React, { useEffect, useState } from "react";
import productData from "./helpers/productData";
import ProductCard from "./components/ProductCard";


// To keep the code as clean and DRY as possible, I have created a separate file to store the product data and made a seperate component for the Product Card.
// The Product Card component is a reusable component that can be used to display the product details in a card format.
// The product data is fetched from the productData file and passed as props to the Product Card component.
// The Product Card component is then used in the App component to display the product details in a card format.


const App = () => {
  const products = productData.data.productTypes.edges[0].node.productAttributes[0].values
  // console.log(products);
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

export default App;