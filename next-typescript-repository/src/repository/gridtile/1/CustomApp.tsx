"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {

    const tiles = [
        { title: 'Tile 1', description: 'Description for tile 1', bgColor: 'bg-blue-500' },
        { title: 'Tile 2', description: 'Description for tile 2', bgColor: 'bg-green-500' },
        { title: 'Tile 3', description: 'Description for tile 3', bgColor: 'bg-red-500' },
        { title: 'Tile 4', description: 'Description for tile 4', bgColor: 'bg-yellow-500' },
        { title: 'Tile 5', description: 'Description for tile 5', bgColor: 'bg-purple-500' },
        { title: 'Tile 6', description: 'Description for tile 6', bgColor: 'bg-pink-500' },
      ];
    
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Grid Tile</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {tiles.map((tile, index) => (
        <Example
          key={index}
          title={tile.title}
          description={tile.description}
          bgColor={tile.bgColor}
        />
      ))}
    </div>
    </>
  );
};

export default CustomApp;
