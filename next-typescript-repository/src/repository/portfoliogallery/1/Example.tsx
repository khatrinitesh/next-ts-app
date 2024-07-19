"use client";
// custom hooks state management
import React, { useState, useEffect } from "react";
// next image
import Image from "next/image";
// image and video
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import Wallpaper2 from "../../../assets/img/wallpaper2.jpg";
import Wallpaper3 from "../../../assets/img/wallpaper3.jpg";
import Wallpaper4 from "../../../assets/img/wallpaper4.jpg";
import VideoMovie from "../../../assets/video/movie.mp4";

// constants
import { portfolioItems } from "./constants";

// interface
import { PortfolioItem } from "./interfaces";



const Example = () => {
  return (
    <>
      <Portfolio items={portfolioItems} />
    </>
  );
};

export default Example;

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredItems =
    selectedCategory === "all" ? items : items.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="container mx-auto py-8">
        {/* Category Filter Buttons */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedCategory === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange("design")}
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedCategory === "design"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Design
          </button>
          <button
            onClick={() => handleCategoryChange("development")}
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedCategory === "development"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Development
          </button>
          <button
            onClick={() => handleCategoryChange("photography")}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === "photography"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Photography
          </button>
        </div>

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-auto"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
