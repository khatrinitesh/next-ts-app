import React from "react";
import Image from "next/image";
// interface
import { ProductProps as ProductCardType } from "./interface";
// constants
import { products } from "./constants";

const Example = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer">
        {products.map((product: ProductCardType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
};

export default Example;


const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-56 object-cover object-center"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-900 font-bold">${product.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
